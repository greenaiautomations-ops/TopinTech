import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const N8N_WEBHOOK_URL = "https://zoraiz1002.app.n8n.cloud/webhook/AI%20_Audit";

// Handles the "Book Your Free AI Audit Call" form (AuditSection.tsx). Same
// pattern as submit-contact: write to Supabase first (audit_bookings table)
// so we have a durable record and the n8n webhook URL isn't exposed in
// client-side JS, then forward to n8n for notification.
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, company, preferred_date, preferred_time } = body;

    if (!name || !email || !preferred_date || !preferred_time) {
      return new Response(
        JSON.stringify({ error: "Name, email, preferred date and time are required." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const { error: dbError } = await supabase.from("audit_bookings").insert({
      name,
      email,
      company: company || null,
      preferred_date,
      preferred_time,
    });

    if (dbError) {
      console.error("Failed to insert audit booking:", dbError.message);
    }

    let webhookOk = true;
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      webhookOk = response.ok;
    } catch (webhookError) {
      console.error("Webhook forwarding failed:", webhookError);
      webhookOk = false;
    }

    if (dbError && !webhookOk) {
      throw new Error("Failed to save booking and failed to notify webhook.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error handling booking submission:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
