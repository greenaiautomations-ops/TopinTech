import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const N8N_WEBHOOK_URL = "https://zoraiz1002.app.n8n.cloud/webhook/AI%20_Audit";
const NOTIFY_EMAIL = "greenaiautomations@gmail.com";

// TODO: once a domain is verified in Resend (Domains tab in the Resend
// dashboard), change this to something like "Top in Tech <bookings@yourdomain.com>".
// Until then, Resend's shared "onboarding@resend.dev" sender works but Resend
// may restrict delivery to only the email address on your Resend account —
// verify a domain before relying on this for real customer emails.
const FROM_EMAIL = "Top in Tech <onboarding@resend.dev>";

async function sendEmail(apiKey: string, to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM_EMAIL, to: [to], subject, html }),
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`Resend error (${res.status}) sending to ${to}:`, text);
    return false;
  }
  return true;
}

// Handles the "Book Your Free AI Audit Call" form (AuditSection.tsx). Writes
// to Supabase first (audit_bookings table) so we have a durable record, sends
// a confirmation email to the booker and a notification email to the team,
// then forwards to n8n for any additional downstream automation.
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

    // Emails are best-effort: a booking that's saved but has a failed email
    // should still count as a successful submission from the visitor's side.
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      await Promise.all([
        sendEmail(
          resendKey,
          email,
          "Your Free AI Audit Call is booked — Top in Tech",
          `<div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2 style="color:#3f7d2c">Booking received, ${name}!</h2>
            <p>Thanks for booking a free AI audit call with Top in Tech. Here's what you requested:</p>
            <table style="width:100%;border-collapse:collapse;margin:16px 0">
              <tr><td style="padding:6px 0;color:#666">Date</td><td style="padding:6px 0;font-weight:600">${preferred_date}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Time (CET)</td><td style="padding:6px 0;font-weight:600">${preferred_time}</td></tr>
              ${company ? `<tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0;font-weight:600">${company}</td></tr>` : ""}
            </table>
            <p>We'll confirm this slot within 24 hours. If you need to change anything, just reply to this email or reach us on WhatsApp.</p>
            <p style="color:#999;font-size:12px;margin-top:32px">Top in Tech · Bahnhofstraße 36, 35037 Marburg, Germany</p>
          </div>`
        ),
        sendEmail(
          resendKey,
          NOTIFY_EMAIL,
          `New audit call booking: ${name}`,
          `<div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2>New booking</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:6px 0;color:#666">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0;font-weight:600">${email}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0;font-weight:600">${company || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Date</td><td style="padding:6px 0;font-weight:600">${preferred_date}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Time</td><td style="padding:6px 0;font-weight:600">${preferred_time}</td></tr>
            </table>
          </div>`
        ),
      ]);
    } else {
      console.warn("RESEND_API_KEY not set — skipping confirmation emails.");
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
