import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_EMAIL = "greenaiautomations@gmail.com";

// TODO: once a domain is verified in Resend (Domains tab in the Resend
// dashboard), change this to something like "Top in Tech <hello@yourdomain.com>".
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

// Handles the Contact page form. n8n has been removed from this path — this
// function now only does two things: save the lead to Supabase (source of
// truth) and send email notifications directly via Resend.
serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const { error: dbError } = await supabase.from("contact_leads").insert({
      name,
      email,
      company: company || null,
      service: service || null,
      message: message || "",
    });

    if (dbError) {
      console.error("Failed to insert contact lead:", dbError.message);
      return new Response(
        JSON.stringify({ error: `Database error: ${dbError.message}` }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
      );
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      await Promise.all([
        sendEmail(
          resendKey,
          email,
          "We got your message — Top in Tech",
          `<div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2 style="color:#3f7d2c">Thanks for reaching out, ${name}!</h2>
            <p>We received your message and will get back to you within 24 hours with your free AI automation audit.</p>
            ${service ? `<p><strong>Service of interest:</strong> ${service}</p>` : ""}
            <p style="white-space:pre-wrap;color:#444;background:#f6f6f6;padding:12px;border-radius:8px">${message || ""}</p>
            <p style="color:#999;font-size:12px;margin-top:32px">Top in Tech · Bahnhofstraße 36, 35037 Marburg, Germany</p>
          </div>`
        ),
        sendEmail(
          resendKey,
          NOTIFY_EMAIL,
          `New contact form lead: ${name}`,
          `<div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2>New contact lead</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:6px 0;color:#666">Name</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0;font-weight:600">${email}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0;font-weight:600">${company || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Service</td><td style="padding:6px 0;font-weight:600">${service || "—"}</td></tr>
            </table>
            <p style="white-space:pre-wrap;color:#444;background:#f6f6f6;padding:12px;border-radius:8px">${message || ""}</p>
          </div>`
        ),
      ]);
    } else {
      console.warn("RESEND_API_KEY not set — skipping confirmation emails.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error handling contact submission:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
