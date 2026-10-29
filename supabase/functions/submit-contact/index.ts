import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const NOTIFY_EMAIL = "contact@topintech.com";

// TODO: once a domain is verified in Resend (Domains tab in the Resend
// dashboard), set FROM_EMAIL to "Top in Tech <contact@topintech.com>".
// Until then, Resend's shared "onboarding@resend.dev" sender works but Resend
// may restrict delivery to only the email address on your Resend account —
// verify a domain before relying on this for real customer emails.
const FROM_EMAIL =
  Deno.env.get("FROM_EMAIL") || "Top in Tech <onboarding@resend.dev>";
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ]!,
  );

async function sendEmail(
  apiKey: string,
  to: string,
  subject: string,
  html: string,
) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      reply_to: NOTIFY_EMAIL,
      to: [to],
      subject,
      html,
    }),
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
    const german = body.language === "de";

    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.length > 150 ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      (company != null &&
        (typeof company !== "string" || company.length > 200)) ||
      (service != null &&
        (typeof service !== "string" || service.length > 200)) ||
      (message != null &&
        (typeof message !== "string" || message.length > 5000))
    ) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
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
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        },
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "—");
    const safeService = escapeHtml(service || "—");
    const safeMessage = escapeHtml(message || "");
    const safeEmail = escapeHtml(email);
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      await Promise.allSettled([
        sendEmail(
          resendKey,
          email,
          german
            ? "Ihre Anfrage ist eingegangen — Top in Tech"
            : "We received your enquiry — Top in Tech",
          `<div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2 style="color:#1f6fff">${german ? `Vielen Dank für Ihre Anfrage, ${safeName}!` : `Thank you for getting in touch, ${safeName}!`}</h2>
            <p>${german ? "Wir haben Ihre Nachricht erhalten. Unser Team prüft Ihre Anfrage und meldet sich bei Ihnen, um die nächsten Schritte zu besprechen." : "We have received your message. Our team will review your enquiry and get in touch to discuss the next steps."}</p>
            ${service ? `<p><strong>${german ? "Gewünschte Leistung" : "Service of interest"}:</strong> ${safeService}</p>` : ""}
            <p style="white-space:pre-wrap;color:#444;background:#f6f6f6;padding:12px;border-radius:8px">${safeMessage}</p>
            <p style="color:#999;font-size:12px;margin-top:32px">Top in tech Ltd · contact@topintech.com</p>
          </div>`,
        ),
        sendEmail(
          resendKey,
          NOTIFY_EMAIL,
          `New contact form lead: ${name}`,
          `<div style="font-family:sans-serif;max-width:480px;margin:0 auto">
            <h2>New contact lead</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:6px 0;color:#666">Name</td><td style="padding:6px 0;font-weight:600">${safeName}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0;font-weight:600">${safeEmail}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0;font-weight:600">${safeCompany}</td></tr>
              <tr><td style="padding:6px 0;color:#666">Service</td><td style="padding:6px 0;font-weight:600">${safeService}</td></tr>
            </table>
            <p style="white-space:pre-wrap;color:#444;background:#f6f6f6;padding:12px;border-radius:8px">${safeMessage}</p>
          </div>`,
        ),
      ]);
    } else {
      console.warn("RESEND_API_KEY not set — skipping confirmation emails.");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error handling contact submission:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
