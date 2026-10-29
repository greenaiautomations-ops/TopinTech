import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import { company, Copy, groups, Language, services, text, ui } from "./content";
import { legalNotice, privacyNotice } from "./legal";
import { supabase } from "@/integrations/supabase/client";
import "./brand.css";
const LanguageContext = createContext<Language>("de");
const useCopy = () => {
  const lang = useContext(LanguageContext);
  return (copy: Copy) => copy[lang];
};
const icons = [ShieldCheck, Workflow, Globe2];
function Brand({ large = false }: { large?: boolean }) {
  const c = useCopy();
  return (
    <Link
      className={`brand-logo ${large ? "large" : ""}`}
      to="/"
      aria-label={`Top in Tech — ${c(ui.home)}`}
    >
      <img src="/brand/mark.svg" alt="" width="49" height="46" />
      <span>
        TOP IN <b>TECH</b>
        <small>{c(ui.tagline)}</small>
      </span>
    </Link>
  );
}
function CTA({
  to = "/contact",
  children,
  secondary = false,
}: {
  to?: string;
  children?: React.ReactNode;
  secondary?: boolean;
}) {
  const c = useCopy();
  return (
    <Link className={`brand-button ${secondary ? "secondary" : ""}`} to={to}>
      {children || c(ui.shortCta)}
      <ArrowUpRight size={18} />
    </Link>
  );
}
function Head({ title, description }: { title: string; description: string }) {
  const lang = useContext(LanguageContext);
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title} | Top in Tech</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Top in Tech`} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang === "de" ? "de_DE" : "en_GB"} />
    </Helmet>
  );
}
function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="brand-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro">{intro}</p>
      </div>
    </section>
  );
}
function FinalCTA() {
  const c = useCopy();
  return (
    <section className="final-cta">
      <div className="brand-container final-inner">
        <div>
          <p className="eyebrow">{c(ui.badge)}</p>
          <h2>{c(ui.finalTitle)}</h2>
          <p>{c(ui.finalBody)}</p>
        </div>
        <CTA />
      </div>
    </section>
  );
}
function Process() {
  const c = useCopy();
  return (
    <section className="brand-section" id="approach">
      <div className="brand-container">
        <div className="section-heading">
          <p className="eyebrow">{c(ui.approach)}</p>
          <h2>{c(ui.processTitle)}</h2>
          <p>{c(ui.processIntro)}</p>
        </div>
        <div className="process-grid">
          {ui.process.map((p, i) => (
            <article key={i}>
              <span className="step-number">0{i + 1}</span>
              <h3>{c(p.title)}</h3>
              <p>{c(p.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  const c = useCopy();
  return (
    <section className="brand-section pale">
      <div className="brand-container faq-layout">
        <div>
          <p className="eyebrow">{c(text("Good to know", "Gut zu wissen"))}</p>
          <h2>{c(ui.faqTitle)}</h2>
        </div>
        <div>
          {ui.faq.map((f, i) => (
            <details key={i}>
              <summary>
                {c(f.q)}
                <ChevronDown size={20} />
              </summary>
              <p>{c(f.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function Home() {
  const c = useCopy();
  return (
    <>
      <Head title={c(ui.tagline)} description={c(ui.heroIntro)} />
      <section className="home-hero">
        <div className="hero-lines" aria-hidden="true" />
        <div className="brand-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {c(ui.badge)}
            </p>
            <h1>
              {c(ui.hero1)}
              <br />
              <em>{c(ui.hero2)}</em>
            </h1>
            <p className="intro">{c(ui.heroIntro)}</p>
            <div className="hero-actions">
              <CTA />
              <CTA to="/services" secondary>
                {c(ui.explore)}
              </CTA>
            </div>
            <p className="hero-trust">
              <MapPin size={15} />
              {c(ui.trust)}
            </p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-plane" />
            <img src="/brand/mark.svg" alt="" />
            <div className="art-caption">
              <span>01 / 02 / 03</span>
              <p>
                {c(text("TECHNOLOGY", "TECHNOLOGIE"))}
                <br />
                {c(text("AUTOMATION", "AUTOMATISIERUNG"))}
                <br />
                {c(text("REAL BUSINESS IMPACT", "MESSBARER NUTZEN"))}
              </p>
              <i />
            </div>
          </div>
        </div>
      </section>
      <section className="goal-strip">
        <div className="brand-container">
          <p>{c(ui.choose)}</p>
          <div>
            {groups.map((g, i) => (
              <Link key={g.id} to={`/services?category=${g.id}`}>
                <span>0{i + 1}</span>
                {c(g.goal)}
                <ArrowRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="brand-section">
        <div className="brand-container">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">{c(ui.serviceEyebrow)}</p>
              <h2>{c(ui.serviceTitle)}</h2>
            </div>
            <p>{c(ui.chooseIntro)}</p>
          </div>
          <div className="pillar-grid">
            {groups.map((g, i) => {
              const Icon = icons[i];
              return (
                <article className="pillar" key={g.id}>
                  <div className="pillar-top">
                    <Icon />
                    <span>0{i + 1}</span>
                  </div>
                  <p className="eyebrow">{c(g.title)}</p>
                  <h3>{c(g.benefit)}</h3>
                  <p>{c(g.description)}</p>
                  <Link className="text-link" to={`/services?category=${g.id}`}>
                    {c(ui.explore)}
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="why-section">
        <div className="brand-container why-layout">
          <div className="brand-statement">
            <span className="eyebrow">TOP IN TECH</span>
            <p>
              IT<span>+</span>
              {c(text("AI", "KI"))}
              <span>+</span>WEB
            </p>
            <span>{c(ui.serviceEyebrow)}</span>
          </div>
          <div>
            <p className="eyebrow">{c(ui.about)}</p>
            <h2>{c(ui.why)}</h2>
            <p>{c(ui.whyBody)}</p>
            <ul className="check-list">
              {ui.principles.map((p, i) => (
                <li key={i}>
                  <Check size={18} />
                  {c(p)}
                </li>
              ))}
            </ul>
            <Link className="text-link" to="/about">
              {c(ui.about)}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
function Services() {
  const c = useCopy();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const active = groups.some((g) => g.id === category) ? category : "all";
  return (
    <>
      <Head title={c(ui.services)} description={c(ui.serviceIntro)} />
      <PageHero
        eyebrow={c(ui.serviceEyebrow)}
        title={c(ui.serviceTitle)}
        intro={c(ui.serviceIntro)}
      />
      <section className="brand-section services-section">
        <div className="brand-container">
          <div className="filter-bar" aria-label={c(ui.services)}>
            {[{ id: "all", title: ui.all }, ...groups].map((g) => (
              <button
                key={g.id}
                aria-pressed={active === g.id}
                className={active === g.id ? "active" : ""}
                onClick={() =>
                  setParams(g.id === "all" ? {} : { category: g.id })
                }
              >
                {c(g.title)}
              </button>
            ))}
          </div>
          {groups
            .filter((g) => active === "all" || g.id === active)
            .map((g) => (
              <section className="service-group" id={g.id} key={g.id}>
                <div className="group-heading">
                  <span className="eyebrow">{c(g.title)}</span>
                  <h2>{c(g.benefit)}</h2>
                  <p>{c(g.description)}</p>
                </div>
                <div className="service-grid">
                  {services
                    .filter((s) => s.group === g.id)
                    .map((s) => (
                      <article className="service-card" id={s.id} key={s.id}>
                        <span className="service-icon">
                          {g.id === "it-support" ? (
                            <ShieldCheck />
                          ) : g.id === "ai-automation" ? (
                            <Workflow />
                          ) : (
                            <Globe2 />
                          )}
                        </span>
                        <h3>{c(s.title)}</h3>
                        <p>{c(s.intro)}</p>
                        <ul>
                          {s.items.map((item, j) => (
                            <li key={j}>
                              <Check size={16} />
                              {c(item)}
                            </li>
                          ))}
                        </ul>
                        <Link
                          className="text-link"
                          aria-label={`${c(ui.learn)}: ${c(s.title)}`}
                          to={`/services/${s.id}`}
                        >
                          {c(ui.learn)}
                          <ArrowUpRight size={18} />
                        </Link>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          <div className="scope-box">
            <div>
              <h2>{c(ui.scope)}</h2>
              <p>{c(ui.scopeText)}</p>
            </div>
            <CTA />
          </div>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}
function ServiceDetail() {
  const { slug } = useParams();
  const c = useCopy();
  const s = services.find((item) => item.id === slug);
  if (!s) return <NotFound />;
  const g = groups.find((item) => item.id === s.group)!;
  return (
    <>
      <Head title={c(s.title)} description={c(s.intro)} />
      <section className="page-hero">
        <div className="brand-container">
          <nav className="breadcrumbs" aria-label={c(ui.services)}>
            <Link to="/services">{c(ui.services)}</Link>
            <span>/</span>
            <Link to={`/services?category=${g.id}`}>{c(g.title)}</Link>
          </nav>
          <p className="eyebrow">{c(g.title)}</p>
          <h1>{c(s.title)}</h1>
          <p className="intro">{c(s.intro)}</p>
          <CTA to={`/contact?service=${s.id}`}>{c(ui.scopeCta)}</CTA>
        </div>
      </section>
      <section className="brand-section">
        <div className="brand-container detail-layout">
          <div>
            <p className="eyebrow">{c(ui.problem)}</p>
            <h2>{c(s.problem)}</h2>
            <div className="benefit-panel">
              <h3>{c(ui.benefit)}</h3>
              <p>{c(s.benefit)}</p>
            </div>
            <h3>{c(ui.example)}</h3>
            <p>{c(s.example)}</p>
            <small>{c(ui.exampleNote)}</small>
          </div>
          <aside className="delivery-panel">
            <h2>{c(ui.includes)}</h2>
            <ul className="check-list">
              {s.items.map((item, i) => (
                <li key={i}>
                  <Check size={19} />
                  {c(item)}
                </li>
              ))}
            </ul>
            <hr />
            <h3>{c(ui.metric)}</h3>
            <p>{c(s.metric)}</p>
            <small>{c(ui.measureNote)}</small>
          </aside>
        </div>
      </section>
      <section className="brand-container">
        <div className="scope-box">
          <div>
            <h2>{c(ui.scope)}</h2>
            <p>{c(ui.scopeText)}</p>
          </div>
          <CTA to={`/contact?service=${s.id}`}>{c(ui.scopeCta)}</CTA>
        </div>
      </section>
      <Process />
      <FinalCTA />
    </>
  );
}
function About() {
  const c = useCopy();
  return (
    <>
      <Head title={c(ui.about)} description={c(ui.aboutIntro)} />
      <PageHero
        eyebrow={c(ui.about)}
        title={c(ui.aboutTitle)}
        intro={c(ui.aboutIntro)}
      />
      <section className="brand-section">
        <div className="brand-container about-layout">
          <div>
            <p className="eyebrow">
              {c(text("Why we exist", "Warum es uns gibt"))}
            </p>
            <h2>{c(ui.storyTitle)}</h2>
            <p>{c(ui.story)}</p>
          </div>
          <aside className="mission">
            <img src="/brand/mark.svg" width="80" height="75" alt="" />
            <h3>{c(ui.missionTitle)}</h3>
            <p>{c(ui.mission)}</p>
          </aside>
        </div>
      </section>
      <section className="brand-section pale">
        <div className="brand-container">
          <div className="section-heading">
            <p className="eyebrow">
              {c(text("Our commitments", "Unser Anspruch"))}
            </p>
            <h2>{c(ui.why)}</h2>
          </div>
          <div className="principle-grid">
            {ui.principles.map((p, i) => (
              <article key={i}>
                <span className="step-number">0{i + 1}</span>
                <h3>{c(p)}</h3>
                <p>
                  {c(
                    [
                      text(
                        "We begin with what needs to improve. A simpler process can be more useful than another platform.",
                        "Wir beginnen mit dem, was besser werden soll. Ein einfacherer Ablauf kann hilfreicher sein als eine zusätzliche Plattform.",
                      ),
                      text(
                        "We explain what is included, what depends on third parties and what ongoing care will cost.",
                        "Wir erklären, was enthalten ist, was von Dritten abhängt und welche Kosten die laufende Betreuung verursacht.",
                      ),
                      text(
                        "Your team receives the knowledge and agreed access needed to use the solution confidently.",
                        "Ihr Team erhält das Wissen und die vereinbarten Zugänge, um die Lösung sicher nutzen zu können.",
                      ),
                    ][i],
                  )}
                </p>
              </article>
            ))}
          </div>
          <Link className="text-link" to="/team">
            {c(ui.team)}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <Process />
      <FinalCTA />
    </>
  );
}
function Team() {
  const c = useCopy();
  return (
    <>
      <Head title={c(ui.team)} description={c(ui.teamIntro)} />
      <PageHero
        eyebrow={c(ui.team)}
        title={c(ui.teamTitle)}
        intro={c(ui.teamIntro)}
      />
      <section className="brand-section">
        <div className="brand-container team-grid">
          {ui.members.map((m) => (
            <article className="team-card" key={m.name}>
              <div className="member-art" aria-hidden="true">
                <span>{m.initials}</span>
                <img src="/brand/mark.svg" alt="" />
              </div>
              <h2>{m.name}</h2>
              <p className="member-role">{c(m.role)}</p>
              <p>{c(m.body)}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
function Contact() {
  const c = useCopy();
  const lang = useContext(LanguageContext);
  const [params] = useSearchParams();
  const initial = services.some((s) => s.id === params.get("service"))
    ? params.get("service")!
    : "";
  const [service, setService] = useState(initial);
  useEffect(() => setService(initial), [initial]);
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document
      .querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement
      >("form input, form textarea")
      .forEach((field) => field.setCustomValidity(""));
  }, [lang]);
  useEffect(() => {
    if (state === "success" || state === "error") statusRef.current?.focus();
  }, [state]);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const data = new FormData(event.currentTarget);
    if (!String(data.get("message")).trim()) {
      const field = event.currentTarget.elements.namedItem(
        "message",
      ) as HTMLTextAreaElement;
      field.setCustomValidity(
        c(
          text(
            "Please describe what you would like to improve.",
            "Bitte beschreiben Sie, was Sie verbessern möchten.",
          ),
        ),
      );
      field.reportValidity();
      return;
    }
    setState("sending");
    try {
      const result = await supabase.functions.invoke("submit-contact", {
        body: {
          name: String(data.get("name")).trim(),
          email: String(data.get("email")).trim(),
          company: String(data.get("company")).trim(),
          service:
            services.find((s) => s.id === service)?.title[lang] || c(ui.unsure),
          message: String(data.get("message")).trim(),
          language: lang,
        },
      });
      if (result.error || !result.data?.success) throw new Error("Failed");
      setState("success");
    } catch {
      setState("error");
    }
  }
  return (
    <>
      <Head title={c(ui.contact)} description={c(ui.contactIntro)} />
      <PageHero
        eyebrow={c(ui.contact)}
        title={c(ui.contactTitle)}
        intro={c(ui.contactIntro)}
      />
      <section className="brand-section">
        <div className="brand-container contact-layout">
          <aside>
            <h2>{c(ui.nextTitle)}</h2>
            <ol className="next-list">
              {ui.next.map((step, i) => (
                <li key={i}>
                  <span>0{i + 1}</span>
                  {c(step)}
                </li>
              ))}
            </ol>
            <div className="contact-links">
              <a href={`mailto:${company.email}`}>
                <Mail size={20} />
                {company.email}
              </a>
              <a href={`tel:${company.phone}`}>
                <Phone size={20} />
                {company.displayPhone}
              </a>
              <p>
                <MapPin size={20} />
                {c(text("Marburg, Germany", "Marburg, Deutschland"))}
              </p>
            </div>
            <p className="small-note">{c(ui.trust)}</p>
          </aside>
          <div className="contact-form">
            {state === "success" ? (
              <div
                className="success-state"
                ref={statusRef}
                tabIndex={-1}
                role="status"
              >
                <Check size={40} />
                <h2>{c(ui.success)}</h2>
                <p>{c(ui.successBody)}</p>
                <button
                  className="brand-button"
                  onClick={() => setState("idle")}
                >
                  {c(ui.another)}
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                onInvalid={(event) => {
                  const field = event.target as HTMLInputElement;
                  field.setCustomValidity(
                    c(
                      field.validity.typeMismatch
                        ? text(
                            "Please enter a valid email address.",
                            "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                          )
                        : field.type === "checkbox"
                          ? text(
                              "Please acknowledge the privacy notice.",
                              "Bitte bestätigen Sie, dass Sie die Datenschutzhinweise gelesen haben.",
                            )
                          : text(
                              "Please complete this required field.",
                              "Bitte füllen Sie dieses Pflichtfeld aus.",
                            ),
                    ),
                  );
                }}
                onInput={(event) =>
                  (event.target as HTMLInputElement).setCustomValidity("")
                }
              >
                <p className="small-note">{c(ui.required)}</p>
                <div className="form-row">
                  <label>
                    {c(ui.name)} *
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={150}
                      pattern=".*\S.*"
                    />
                  </label>
                  <label>
                    {c(ui.email)} *
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                    />
                  </label>
                </div>
                <label>
                  {c(ui.company)}
                  <input
                    name="company"
                    autoComplete="organization"
                    maxLength={200}
                  />
                </label>
                <label>
                  {c(ui.interest)}
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">{c(ui.unsure)}</option>
                    {groups.map((g) => (
                      <optgroup label={c(g.title)} key={g.id}>
                        {services
                          .filter((s) => s.group === g.id)
                          .map((s) => (
                            <option key={s.id} value={s.id}>
                              {c(s.title)}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                </label>
                <label>
                  {c(ui.message)} *
                  <textarea
                    name="message"
                    rows={5}
                    required
                    maxLength={5000}
                    placeholder={c(ui.messageHint)}
                  />
                </label>
                <label className="consent">
                  <input type="checkbox" required />
                  <span>
                    {c(ui.consent)}{" "}
                    <Link
                      to="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c(ui.privacy)} ↗
                    </Link>
                  </span>
                </label>
                {state === "error" && (
                  <div
                    className="form-error"
                    ref={statusRef}
                    tabIndex={-1}
                    role="alert"
                  >
                    {c(ui.error)}{" "}
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </div>
                )}
                <button
                  className="brand-button"
                  disabled={state === "sending"}
                  type="submit"
                >
                  {c(state === "sending" ? ui.sending : ui.submit)}
                  <ArrowUpRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
function Legal({ privacy = false }: { privacy?: boolean }) {
  const c = useCopy();
  return (
    <>
      <Head
        title={c(privacy ? ui.privacy : ui.imprint)}
        description={c(privacy ? ui.privacy : ui.imprint)}
      />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <PageHero
        eyebrow={company.legalName}
        title={c(privacy ? ui.privacy : ui.imprint)}
        intro={c(ui.pending)}
      />
      <section className="brand-section">
        <div className="brand-container legal-content">
          {(privacy ? privacyNotice : legalNotice).map((s, i) => (
            <section key={i}>
              <h2>{c(s.title)}</h2>
              <p>{c(s.body)}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
function NotFound() {
  const c = useCopy();
  return (
    <>
      <Head title="404" description={c(ui.notFound)} />
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <PageHero
        eyebrow="404"
        title={c(ui.notFound)}
        intro={c(ui.notFoundBody)}
      />
      <div className="brand-container not-found-actions">
        <CTA to="/">{c(ui.home)}</CTA>
        <CTA to="/services" secondary>
          {c(ui.services)}
        </CTA>
      </div>
    </>
  );
}
function Shell({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (lang: Language) => void;
}) {
  const c = useCopy();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const initial = useRef(true);
  useEffect(() => {
    setOpen(false);
    if (location.hash) {
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (!initial.current) mainRef.current?.focus({ preventScroll: true });
    initial.current = false;
  }, [location.pathname, location.hash, location.search]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const nav = [
    { path: "/services", label: ui.services },
    { path: "/about", label: ui.about },
    { path: "/team", label: ui.team },
    { path: "/contact", label: ui.contact },
  ];
  return (
    <div className="brand-site">
      <a className="skip-link" href="#main">
        {c(ui.skip)}
      </a>
      <header className="site-header">
        <div className="brand-container nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label={c(ui.menu)}>
            {nav.map((n) => (
              <NavLink key={n.path} to={n.path}>
                {c(n.label)}
              </NavLink>
            ))}
          </nav>
          <div className="nav-actions">
            <div
              className="language-switch"
              role="group"
              aria-label={c(ui.language)}
            >
              {(["de", "en"] as Language[]).map((l) => (
                <button
                  key={l}
                  lang={l}
                  aria-label={l === "de" ? "Deutsch" : "English"}
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <span className="desktop-cta">
              <CTA />
            </span>
            <button
              className="mobile-menu-button"
              aria-label={c(ui.menu)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          hidden={!open}
          aria-label={c(ui.menu)}
        >
          {nav.map((n) => (
            <NavLink key={n.path} to={n.path} onClick={() => setOpen(false)}>
              {c(n.label)}
            </NavLink>
          ))}
          <CTA />
        </nav>
      </header>
      <main id="main" tabIndex={-1} ref={mainRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Legal />} />
          <Route path="/privacy" element={<Legal privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="brand-container">
          <div className="footer-top">
            <div>
              <Brand large />
              <p>{c(ui.whyBody)}</p>
              <a href={`mailto:${company.email}`}>
                {company.email}
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div>
              <h2>{c(ui.services)}</h2>
              {groups.map((g) => (
                <Link key={g.id} to={`/services?category=${g.id}`}>
                  {c(g.title)}
                </Link>
              ))}
            </div>
            <div>
              <h2>Top in Tech</h2>
              {nav.slice(1).map((n) => (
                <Link key={n.path} to={n.path}>
                  {c(n.label)}
                </Link>
              ))}
              <Link to="/#approach">{c(ui.approach)}</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {company.legalName}. {c(ui.rights)}
            </span>
            <div>
              <Link to="/impressum">{c(ui.imprint)}</Link>
              <Link to="/privacy">{c(ui.privacy)}</Link>
            </div>
            <span>Marburg · DE / EN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default function Site() {
  const [lang, updateLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("language");
      return saved === "en" || saved === "de"
        ? saved
        : navigator.language.startsWith("de")
          ? "de"
          : "en";
    } catch {
      return "de";
    }
  });
  function setLang(next: Language) {
    updateLang(next);
    try {
      localStorage.setItem("language", next);
    } catch {
      /* Site remains usable when storage is blocked. */
    }
  }
  return (
    <LanguageContext.Provider value={lang}>
      <Shell lang={lang} setLang={setLang} />
    </LanguageContext.Provider>
  );
}
