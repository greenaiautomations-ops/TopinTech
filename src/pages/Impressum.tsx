import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

// NOTE FOR SITE OWNER:
// This page is a legally required Impressum for a business operating in Germany
// (§5 TMG / §18 MStV). Every [bracketed] field below is a placeholder — replace
// all of them with your real registered business details before this goes live.
// If you're unsure what applies to your business form (sole proprietor, GbR,
// UG, GmbH, etc.), a German tax advisor (Steuerberater) or lawyer can confirm
// the exact wording required for your entity type in under an hour.

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum - Top in Tech</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Impressum
              </h1>
              <p className="text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                Angaben gemäß § 5 TMG
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Diensteanbieter
                </h2>
                <p>
                  [Vollständiger rechtlicher Name des Unternehmens, z. B. Top in Tech UG (haftungsbeschränkt)]
                  <br />
                  [Straße und Hausnummer]
                  <br />
                  35037 Marburg, Deutschland
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Vertreten durch
                </h2>
                <p>[Name des/der Geschäftsführer(s) bzw. der vertretungsberechtigten Person]</p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Kontakt
                </h2>
                <p>
                  Telefon: +49 (0)152 16164830
                  <br />
                  E-Mail: greenaiautomations@gmail.com
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Registereintrag
                </h2>
                <p>
                  Eintragung im Handelsregister. [Registergericht] <br />
                  Registernummer: [HRB/HRA-Nummer, falls vorhanden]
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: <br />
                  [DE + 9-stellige USt-IdNr., falls vorhanden]
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h2>
                <p>
                  [Name, Anschrift wie oben]
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  EU-Streitschlichtung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht verpflichtet und nicht bereit, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                  Haftung für Inhalte
                </h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
                  den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                  jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                  überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Impressum;
