import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

// NOTE FOR SITE OWNER:
// This is a starting-point GDPR (DSGVO) privacy policy covering what's visible
// in the current codebase: the contact form (writes to Supabase + forwards to
// database), the booking form, cookies/local storage used for the theme
// and language preference, and any analytics you add later. [Bracketed] fields
// need your real details. Once you add real analytics (e.g. Google Analytics)
// or a live chat tool, add a matching section here — this is not a substitute
// for review by a lawyer, but it is an accurate description of what the site
// currently does with visitor data.

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Top in Tech</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                Datenschutzerklärung gemäß DSGVO
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  1. Controller
                </h2>
                <p>
                  The controller responsible for data processing on this website is:
                  <br />
                  [Full legal company name] <br />
                  [Street and number], 35037 Marburg, Germany <br />
                  Email: greenaiautomations@gmail.com
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  2. What data we collect and why
                </h2>
                <p className="mb-3">
                  <strong className="text-foreground">Contact form:</strong> when you submit the contact form,
                  we collect your name, email, company (optional), service interest, and message. This data
                  is stored in our Supabase database and forwarded to our internal automation system so our
                  team can respond to your inquiry. Legal basis: Art. 6(1)(b) GDPR (steps prior to entering a
                  contract) and Art. 6(1)(f) GDPR (legitimate interest in responding to inquiries).
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">Consultation booking:</strong> when you book a free AI
                  audit call, we collect your name, email, company (optional), and preferred date/time, for
                  the same purposes described above.
                </p>
                <p>
                  <strong className="text-foreground">Preferences:</strong> we store your theme (light/dark)
                  and language (English/German) choice in your browser's local storage so the site remembers
                  your preference on your next visit. This data never leaves your device.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  3. Data retention
                </h2>
                <p>
                  We retain contact form and booking submissions for as long as necessary to respond to your
                  inquiry and maintain a record of our business relationship, or until you request deletion.
                  [Confirm and state your actual retention period, e.g. "up to 3 years after last contact."]
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  4. Third-party processors
                </h2>
                <p>
                  We use Supabase (database and hosting infrastructure) to store form submissions, and
                  Resend to send confirmation and notification emails. [If you add analytics, a live chat
                  widget, or an email marketing tool, list each provider here along with a link to their
                  privacy policy.]
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  5. Your rights
                </h2>
                <p>
                  Under the GDPR, you have the right to access, correct, delete, or export the personal data
                  we hold about you, and the right to object to or restrict certain processing. To exercise
                  any of these rights, contact us at greenaiautomations@gmail.com. You also have the right to
                  lodge a complaint with your local data protection supervisory authority.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  6. Cookies
                </h2>
                <p>
                  This site does not currently use tracking or advertising cookies. It uses browser local
                  storage only for your theme and language preference, as described above. [Update this
                  section if you add Google Analytics, Meta Pixel, or similar tools — those require a cookie
                  consent banner under GDPR/ePrivacy rules before they load.]
                </p>
              </div>

              <div>
                <p className="text-sm">Last updated: [date]. This policy may be updated from time to time.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
