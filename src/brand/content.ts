export type Language = "en" | "de";
export type Copy = { en: string; de: string };
export const text = (en: string, de: string): Copy => ({ en, de });
export const company = {
  legalName: "Top in tech Ltd",
  email: "contact@topintech.com",
  phone: "+4915216164830",
  displayPhone: "+49 152 16164830",
};
export const groups = [
  {
    id: "it-support",
    title: text("IT support", "IT-Betreuung"),
    benefit: text("Keep your day running.", "Damit Ihr Alltag läuft."),
    description: text(
      "Reliable devices, secure access and someone to call when things stop working. For small teams and households.",
      "Zuverlässige Geräte, sichere Zugänge und ein Ansprechpartner, wenn etwas nicht funktioniert. Für kleine Teams und Privathaushalte.",
    ),
    goal: text("Make my IT reliable", "Meine IT zuverlässig machen"),
  },
  {
    id: "ai-automation",
    title: text("AI & automation", "KI & Automatisierung"),
    benefit: text(
      "Get time back for your business.",
      "Mehr Zeit für Ihr Geschäft.",
    ),
    description: text(
      "Connect your tools, handle routine requests and reduce repetitive work—with people in control.",
      "Verbinden Sie Ihre Anwendungen, bearbeiten Sie Routineanfragen und reduzieren Sie wiederkehrende Aufgaben. Die Kontrolle bleibt bei Ihnen.",
    ),
    goal: text("Reduce manual work", "Manuelle Arbeit reduzieren"),
  },
  {
    id: "web-app-dev",
    title: text("Websites & apps", "Websites & Apps"),
    benefit: text(
      "Turn interest into action.",
      "Aus Interesse wird ein nächster Schritt.",
    ),
    description: text(
      "Clear websites, useful customer portals and applications built around how your business actually works.",
      "Verständliche Websites, hilfreiche Kundenportale und Anwendungen, die zu Ihren tatsächlichen Abläufen passen.",
    ),
    goal: text(
      "Improve my digital presence",
      "Meinen digitalen Auftritt verbessern",
    ),
  },
];
export const services = [
  {
    id: "home-it",
    group: "it-support",
    title: text("Home IT support", "IT-Hilfe für zu Hause"),
    intro: text(
      "Spend less time troubleshooting. Get your everyday technology working together.",
      "Weniger Zeit mit Fehlersuche verbringen. Wir bringen Ihre Alltagstechnik zusammen.",
    ),
    problem: text(
      "A slow laptop, unreliable Wi-Fi or a new device can turn a simple task into an afternoon of frustration.",
      "Ein langsamer Laptop, instabiles WLAN oder ein neues Gerät können aus einer einfachen Aufgabe einen verlorenen Nachmittag machen.",
    ),
    items: [
      text(
        "Computer, software and Wi-Fi setup",
        "Einrichtung von Computern, Software und WLAN",
      ),
      text(
        "Backup configuration and recovery assessment",
        "Backup-Einrichtung und Prüfung der Datenrettung",
      ),
      text(
        "Phone, tablet and smart-home setup",
        "Einrichtung von Smartphones, Tablets und Smart-Home-Geräten",
      ),
    ],
    benefit: text(
      "Less disruption at home and clear instructions you can use yourself.",
      "Weniger Störungen zu Hause und verständliche Anleitungen, mit denen Sie selbst weiterkommen.",
    ),
    example: text(
      "A household gets a new laptop, transfers its files and checks that its backup can be restored.",
      "Ein Haushalt richtet einen neuen Laptop ein, übernimmt seine Dateien und prüft, ob sich das Backup wiederherstellen lässt.",
    ),
    metric: text(
      "Issue resolved, devices connected and backup verified.",
      "Problem behoben, Geräte verbunden und Backup geprüft.",
    ),
  },
  {
    id: "corporate-it",
    group: "it-support",
    title: text("Business IT support", "IT-Betreuung für Unternehmen"),
    intro: text(
      "Give your team a dependable workplace, from the first login to everyday collaboration.",
      "Ein zuverlässiger Arbeitsplatz für Ihr Team – vom ersten Login bis zur täglichen Zusammenarbeit.",
    ),
    problem: text(
      "Inconsistent devices, access permissions and software setups slow down small teams.",
      "Uneinheitliche Geräte, Zugriffsrechte und Software-Einrichtungen bremsen kleine Teams aus.",
    ),
    items: [
      text(
        "Workstation deployment and device setup",
        "Bereitstellung und Einrichtung von Arbeitsplätzen",
      ),
      text(
        "Microsoft 365 or Google Workspace administration",
        "Administration von Microsoft 365 oder Google Workspace",
      ),
      text(
        "Access, licensing and device inventory review",
        "Prüfung von Zugängen, Lizenzen und Gerätebestand",
      ),
    ],
    benefit: text(
      "A more consistent working environment and fewer avoidable interruptions.",
      "Eine einheitlichere Arbeitsumgebung und weniger vermeidbare Unterbrechungen.",
    ),
    example: text(
      "A growing office standardizes laptops, shared files and account access before its next hires arrive.",
      "Ein wachsendes Büro vereinheitlicht Laptops, gemeinsame Dateien und Kontozugänge, bevor neue Mitarbeitende starten.",
    ),
    metric: text(
      "Setup time, recurring incidents and access completeness.",
      "Einrichtungszeit, wiederkehrende Störungen und vollständige Zugriffsrechte.",
    ),
  },
  {
    id: "helpdesk",
    group: "it-support",
    title: text("Helpdesk & remote support", "Helpdesk & Fernwartung"),
    intro: text(
      "Give everyday IT problems a clear point of contact.",
      "Ein klarer Ansprechpartner für IT-Probleme im Alltag.",
    ),
    problem: text(
      "When nobody owns an IT issue, your team loses time trying to solve it alone.",
      "Wenn niemand für ein IT-Problem zuständig ist, verliert Ihr Team Zeit mit eigenen Lösungsversuchen.",
    ),
    items: [
      text(
        "Remote troubleshooting and ticket handling",
        "Fehlerbehebung per Fernwartung und Ticketbearbeitung",
      ),
      text(
        "Employee onboarding and offboarding",
        "IT-Einrichtung bei Eintritten und Zugriffsverwaltung bei Austritten",
      ),
      text(
        "Agreed support hours and escalation routes",
        "Vereinbarte Supportzeiten und Eskalationswege",
      ),
    ],
    benefit: text(
      "Less time chasing help and a clearer record of what was fixed.",
      "Weniger Aufwand bei der Suche nach Hilfe und eine nachvollziehbare Dokumentation der Lösung.",
    ),
    example: text(
      "An employee reports an email issue through one support channel and receives a documented resolution.",
      "Eine Mitarbeiterin meldet ein E-Mail-Problem über einen festen Supportkanal und erhält eine dokumentierte Lösung.",
    ),
    metric: text(
      "Response time, resolution time and repeat incidents.",
      "Reaktionszeit, Lösungszeit und wiederholte Störungen.",
    ),
  },
  {
    id: "cloud",
    group: "it-support",
    title: text("Cloud migration & management", "Cloud-Migration & Betreuung"),
    intro: text(
      "Move your files and tools with a plan your team can follow.",
      "Bringen Sie Dateien und Anwendungen mit einem nachvollziehbaren Plan in die Cloud.",
    ),
    problem: text(
      "Scattered files, unclear permissions and unmanaged subscriptions make collaboration harder.",
      "Verteilte Dateien, unklare Berechtigungen und unübersichtliche Abonnements erschweren die Zusammenarbeit.",
    ),
    items: [
      text(
        "Inventory, migration plan and pilot transfer",
        "Bestandsaufnahme, Migrationsplan und Testübertragung",
      ),
      text(
        "Permissions, backups and recovery checks",
        "Berechtigungen, Backups und Wiederherstellungsprüfungen",
      ),
      text(
        "Usage, subscription and running-cost review",
        "Prüfung von Nutzung, Abonnements und laufenden Kosten",
      ),
    ],
    benefit: text(
      "More accessible information, clearer ownership and better visibility of recurring costs.",
      "Besser zugängliche Informationen, klare Zuständigkeiten und mehr Überblick über laufende Kosten.",
    ),
    example: text(
      "An office moves shared documents to a managed workspace with role-based access and a tested backup.",
      "Ein Büro verlagert gemeinsame Dokumente in eine betreute Arbeitsumgebung mit rollenbasierten Zugängen und geprüftem Backup.",
    ),
    metric: text(
      "Migration completeness, recovery results and monthly costs.",
      "Vollständigkeit der Migration, Wiederherstellungsergebnisse und monatliche Kosten.",
    ),
  },
  {
    id: "assistants",
    group: "ai-automation",
    title: text("AI assistants", "KI-Assistenten"),
    intro: text(
      "Make business knowledge easier to find and routine drafts faster to prepare.",
      "Unternehmenswissen leichter finden und Routineentwürfe schneller erstellen.",
    ),
    problem: text(
      "Your team repeatedly searches the same documents or answers the same questions.",
      "Ihr Team durchsucht immer wieder dieselben Dokumente oder beantwortet dieselben Fragen.",
    ),
    items: [
      text(
        "Assistant grounded in approved business information",
        "Assistent auf Basis freigegebener Unternehmensinformationen",
      ),
      text(
        "Drafts for customer replies, marketing and internal knowledge",
        "Entwürfe für Kundenantworten, Marketing und internes Wissen",
      ),
      text(
        "Access rules, human review and escalation",
        "Zugriffsregeln, menschliche Prüfung und Weiterleitung",
      ),
    ],
    benefit: text(
      "Faster first drafts and more consistent answers, with your team checking important decisions.",
      "Schnellere erste Entwürfe und einheitlichere Antworten. Wichtige Entscheidungen prüft Ihr Team.",
    ),
    example: text(
      "A team looks up an internal process and receives an answer linked to its approved source document.",
      "Ein Team fragt einen internen Ablauf ab und erhält eine Antwort mit Verweis auf das freigegebene Quelldokument.",
    ),
    metric: text(
      "Time to find information, answer quality and handover rate.",
      "Suchzeit, Antwortqualität und Anteil der Übergaben an Menschen.",
    ),
  },
  {
    id: "voice",
    group: "ai-automation",
    title: text("AI voice agents", "KI-Telefonassistenten"),
    intro: text(
      "Handle routine calls and capture enquiries when your team is busy.",
      "Routineanrufe bearbeiten und Anfragen aufnehmen, wenn Ihr Team beschäftigt ist.",
    ),
    problem: text(
      "Calls arrive during appointments, busy periods or outside your agreed opening hours.",
      "Anrufe gehen während Terminen, in Stoßzeiten oder außerhalb Ihrer Öffnungszeiten ein.",
    ),
    items: [
      text(
        "Clearly identified AI receptionist for common questions",
        "Als KI erkennbarer Telefonassistent für häufige Fragen",
      ),
      text(
        "Appointment requests and structured enquiry capture",
        "Terminanfragen und strukturierte Erfassung von Anliegen",
      ),
      text(
        "Human handover and agreed data-handling rules",
        "Übergabe an Menschen und vereinbarte Regeln zur Datenverarbeitung",
      ),
    ],
    benefit: text(
      "Fewer enquiries left unanswered and more useful information for your follow-up.",
      "Weniger unbeantwortete Anfragen und bessere Informationen für Ihren Rückruf.",
    ),
    example: text(
      "A gym captures a trial-session request while its staff are helping members, then confirms it through the agreed process.",
      "Ein Fitnessstudio erfasst eine Probetraining-Anfrage, während das Team Mitglieder betreut, und bestätigt sie über den vereinbarten Ablauf.",
    ),
    metric: text(
      "Enquiries captured, successful handovers and booking completion.",
      "Erfasste Anfragen, erfolgreiche Übergaben und abgeschlossene Buchungen.",
    ),
  },
  {
    id: "automation",
    group: "ai-automation",
    title: text("Workflow automation", "Prozessautomatisierung"),
    intro: text(
      "Let information move between your tools without copying it by hand.",
      "Informationen zwischen Anwendungen übertragen, ohne sie manuell zu kopieren.",
    ),
    problem: text(
      "Enquiries, bookings and invoices need the same information entered more than once.",
      "Für Anfragen, Buchungen und Rechnungen müssen dieselben Informationen mehrfach eingegeben werden.",
    ),
    items: [
      text(
        "Process mapping and integration with your existing tools",
        "Prozessaufnahme und Anbindung Ihrer vorhandenen Anwendungen",
      ),
      text(
        "Enquiry-to-CRM, reminders and reporting workflows",
        "Abläufe für CRM-Erfassung, Erinnerungen und Berichte",
      ),
      text(
        "Error alerts, exception handling and documentation",
        "Fehlermeldungen, Behandlung von Ausnahmen und Dokumentation",
      ),
    ],
    benefit: text(
      "Less duplicate entry, fewer missed handovers and more time for customer work.",
      "Weniger doppelte Eingaben, weniger übersehene Übergaben und mehr Zeit für Ihre Kunden.",
    ),
    example: text(
      "A property enquiry creates a CRM record, alerts the right colleague and schedules a follow-up task.",
      "Eine Immobilienanfrage erstellt einen CRM-Eintrag, informiert die zuständige Person und legt eine Nachfassaufgabe an.",
    ),
    metric: text(
      "Manual minutes per process, errors and completed handovers.",
      "Manueller Zeitaufwand pro Ablauf, Fehler und abgeschlossene Übergaben.",
    ),
  },
  {
    id: "media",
    group: "ai-automation",
    title: text("AI images & video", "KI-Bilder & Videos"),
    intro: text(
      "Build a consistent stream of visual content around your real brand.",
      "Erstellen Sie regelmäßig visuelle Inhalte, die zu Ihrer Marke passen.",
    ),
    problem: text(
      "Creating campaign assets takes time, and inconsistent visuals weaken recognition.",
      "Die Erstellung von Kampagnenmaterial kostet Zeit. Uneinheitliche Bilder schwächen den Wiedererkennungswert.",
    ),
    items: [
      text(
        "Visual brief based on your brand and real product references",
        "Gestaltungskonzept auf Basis Ihrer Marke und echter Produktreferenzen",
      ),
      text(
        "Campaign images, social content and short videos",
        "Kampagnenbilder, Social-Media-Inhalte und kurze Videos",
      ),
      text(
        "Review, revisions and channel-ready formats",
        "Prüfung, Überarbeitung und passende Formate für Ihre Kanäle",
      ),
    ],
    benefit: text(
      "Quicker content production and a more recognizable appearance across channels.",
      "Schnellere Inhaltserstellung und ein wiedererkennbarer Auftritt über mehrere Kanäle hinweg.",
    ),
    example: text(
      "A local business creates coordinated campaign visuals from an approved product brief, then reviews every asset before use.",
      "Ein lokales Unternehmen erstellt abgestimmte Kampagnenbilder aus einem freigegebenen Produktbriefing und prüft jedes Motiv vor der Nutzung.",
    ),
    metric: text(
      "Production time, revision rounds and campaign performance.",
      "Produktionszeit, Korrekturrunden und Kampagnenergebnisse.",
    ),
  },
  {
    id: "consultancy",
    group: "ai-automation",
    title: text("AI consultancy", "KI-Beratung"),
    intro: text(
      "Decide where AI is useful before investing in a build.",
      "Klären Sie, wo KI sinnvoll ist, bevor Sie in die Umsetzung investieren.",
    ),
    problem: text(
      "There are plenty of tools to choose from, but no clear reason to choose one over another.",
      "Es gibt viele Anwendungen zur Auswahl, aber oft fehlt eine klare Entscheidungsgrundlage.",
    ),
    items: [
      text(
        "Workflow and data-readiness assessment",
        "Prüfung von Abläufen und Datenbasis",
      ),
      text(
        "Prioritized opportunities with costs and constraints",
        "Priorisierte Einsatzmöglichkeiten mit Kosten und Grenzen",
      ),
      text(
        "Pilot roadmap, tool selection and team guidance",
        "Pilotplan, Werkzeugauswahl und Begleitung Ihres Teams",
      ),
    ],
    benefit: text(
      "A practical investment decision and a focused first project with clear success criteria.",
      "Eine fundierte Investitionsentscheidung und ein klar abgegrenztes erstes Projekt mit messbaren Erfolgskriterien.",
    ),
    example: text(
      "A small business compares two repetitive processes and chooses the simpler, lower-risk pilot first.",
      "Ein kleines Unternehmen vergleicht zwei wiederkehrende Abläufe und beginnt mit dem einfacheren, risikoärmeren Pilotprojekt.",
    ),
    metric: text(
      "Agreed baseline, pilot cost and demonstrated value.",
      "Vereinbarter Ausgangswert, Pilotkosten und nachgewiesener Nutzen.",
    ),
  },
  {
    id: "webdev",
    group: "web-app-dev",
    title: text("Websites & web applications", "Websites & Webanwendungen"),
    intro: text(
      "Help visitors understand your offer and take the next step.",
      "Helfen Sie Besuchern, Ihr Angebot zu verstehen und den nächsten Schritt zu gehen.",
    ),
    problem: text(
      "An unclear website loses enquiries. Disconnected tools make everyday customer work harder.",
      "Eine unklare Website kostet Anfragen. Unverbundene Anwendungen erschweren die tägliche Kundenbetreuung.",
    ),
    items: [
      text(
        "Responsive business websites and content management",
        "Responsive Unternehmenswebsites und Inhaltsverwaltung",
      ),
      text(
        "Online stores, customer portals and dashboards",
        "Onlineshops, Kundenportale und Übersichten",
      ),
      text(
        "Accessible journeys, search foundations and integrations",
        "Zugängliche Nutzerführung, Grundlagen der Suchmaschinenoptimierung und Schnittstellen",
      ),
    ],
    benefit: text(
      "Clearer customer journeys, easier enquiries and fewer manual steps behind the scenes.",
      "Klarere Kundenwege, einfachere Anfragen und weniger manuelle Arbeit im Hintergrund.",
    ),
    example: text(
      "A service business replaces a confusing list of offerings with clear service pages and a short enquiry form.",
      "Ein Dienstleister ersetzt eine unübersichtliche Angebotsliste durch klare Leistungsseiten und ein kurzes Anfrageformular.",
    ),
    metric: text(
      "Qualified enquiries, task completion and page performance.",
      "Qualifizierte Anfragen, abgeschlossene Aufgaben und Seitenleistung.",
    ),
  },
  {
    id: "mobileapps",
    group: "web-app-dev",
    title: text("Mobile apps", "Mobile Apps"),
    intro: text(
      "Put the tools your customers and team need within easy reach.",
      "Machen Sie wichtige Funktionen für Kunden und Mitarbeitende mobil verfügbar.",
    ),
    problem: text(
      "Repeated tasks on the move are awkward when the software was only designed for a desktop.",
      "Wiederkehrende Aufgaben unterwegs werden mühsam, wenn die Software nur für den Desktop ausgelegt ist.",
    ),
    items: [
      text(
        "iOS, Android or progressive web app scoping",
        "Konzeption für iOS, Android oder eine progressive Web-App",
      ),
      text(
        "Task-focused interfaces and backend connections",
        "Aufgabenorientierte Oberflächen und Backend-Anbindungen",
      ),
      text(
        "Release preparation, updates and maintenance planning",
        "Vorbereitung der Veröffentlichung, Updates und Wartungsplanung",
      ),
    ],
    benefit: text(
      "Simpler mobile tasks and a useful product that fits your users’ working habits.",
      "Einfachere mobile Abläufe und ein nützliches Produkt, das zu den Gewohnheiten Ihrer Nutzer passt.",
    ),
    example: text(
      "A field team records job updates on site instead of re-entering notes when it returns to the office.",
      "Ein Außendienstteam erfasst Auftragsstände vor Ort, statt Notizen später im Büro erneut einzugeben.",
    ),
    metric: text(
      "Task completion time, active usage and support requests.",
      "Bearbeitungszeit, aktive Nutzung und Supportanfragen.",
    ),
  },
];
export const ui = {
  home: text("Home", "Startseite"),
  services: text("Services", "Leistungen"),
  about: text("About us", "Über uns"),
  team: text("Our team", "Unser Team"),
  contact: text("Contact", "Kontakt"),
  approach: text("How we work", "So arbeiten wir"),
  cta: text(
    "Let’s talk about your project",
    "Lassen Sie uns Ihr Projekt besprechen",
  ),
  shortCta: text("Let’s talk", "Erstgespräch anfragen"),
  explore: text("Explore our services", "Leistungen entdecken"),
  learn: text("Explore service", "Leistung ansehen"),
  back: text("All services", "Alle Leistungen"),
  tagline: text(
    "Smarter Systems. Stronger Business.",
    "Intelligente Systeme. Starke Unternehmen.",
  ),
  badge: text(
    "Your technology partner in Marburg",
    "Ihr Technologiepartner in Marburg",
  ),
  hero1: text("Smarter systems.", "Intelligente Systeme."),
  hero2: text("Stronger business.", "Starke Unternehmen."),
  heroIntro: text(
    "Less IT friction. Less repetitive work. More room to grow. We bring IT support, AI automation and digital development together for small businesses—with practical help for households, too.",
    "Weniger IT-Probleme. Weniger Routinearbeit. Mehr Raum für Wachstum. Wir verbinden IT-Betreuung, KI-Automatisierung und digitale Entwicklung für kleine Unternehmen – und helfen auch Privathaushalten.",
  ),
  trust: text(
    "Based in Marburg · Working in German & English",
    "In Marburg zu Hause · Auf Deutsch & Englisch für Sie da",
  ),
  choose: text(
    "Start with what you want to improve.",
    "Was möchten Sie verbessern?",
  ),
  chooseIntro: text(
    "You don’t need to know the technology. Tell us what gets in the way.",
    "Sie müssen die Technik nicht kennen. Erzählen Sie uns, was Sie im Alltag ausbremst.",
  ),
  serviceEyebrow: text(
    "One partner. Three connected disciplines.",
    "Ein Partner. Drei Bereiche, die zusammenpassen.",
  ),
  serviceTitle: text(
    "Technology that earns its place in your business.",
    "Technik, die sich in Ihrem Alltag bewährt.",
  ),
  serviceIntro: text(
    "Choose a goal, explore what’s included, then talk to the people who will do the work.",
    "Wählen Sie Ihr Ziel, erfahren Sie mehr über die Leistungen und sprechen Sie mit den Menschen, die sie umsetzen.",
  ),
  all: text("All services", "Alle Leistungen"),
  includes: text("What we deliver", "Was wir umsetzen"),
  problem: text("The challenge", "Die Herausforderung"),
  benefit: text("What changes for you", "Ihr Nutzen"),
  example: text("A practical example", "Ein Beispiel aus der Praxis"),
  exampleNote: text(
    "Illustrative scenario, not a customer result.",
    "Beispielhafter Anwendungsfall, kein Kundenbericht.",
  ),
  metric: text("How we measure progress", "So messen wir Fortschritte"),
  measureNote: text(
    "We agree a baseline and a realistic target together. Outcomes depend on your starting point and scope.",
    "Wir legen gemeinsam einen Ausgangswert und ein realistisches Ziel fest. Ergebnisse hängen von Ihrer Ausgangslage und dem Umfang ab.",
  ),
  scope: text(
    "A clear scope before you commit.",
    "Ein klarer Umfang, bevor Sie sich entscheiden.",
  ),
  scopeText: text(
    "You receive a proposal with deliverables, responsibilities, timing and costs. Setup, third-party subscriptions and ongoing support are separated so you can make an informed decision.",
    "Sie erhalten ein Angebot mit Leistungen, Zuständigkeiten, Zeitplan und Kosten. Einrichtung, externe Abonnements und laufende Betreuung werden getrennt ausgewiesen, damit Sie fundiert entscheiden können.",
  ),
  scopeCta: text("Discuss this service", "Diese Leistung besprechen"),
  processTitle: text(
    "From the first conversation to everyday value.",
    "Vom ersten Gespräch zum Nutzen im Alltag.",
  ),
  processIntro: text(
    "A clear next step at every stage. No guessing what happens after you get in touch.",
    "In jeder Phase ein klarer nächster Schritt. Sie wissen von Anfang an, wie es weitergeht.",
  ),
  process: [
    {
      title: text("Understand", "Verstehen"),
      body: text(
        "We listen to your goals, map the friction and agree what a useful result looks like.",
        "Wir hören zu, prüfen die Hindernisse und legen fest, woran wir ein gutes Ergebnis erkennen.",
      ),
    },
    {
      title: text("Plan", "Planen"),
      body: text(
        "You get a focused scope, transparent costs and a practical order of priorities.",
        "Sie erhalten einen klaren Leistungsumfang, transparente Kosten und sinnvolle Prioritäten.",
      ),
    },
    {
      title: text("Build & test", "Umsetzen & testen"),
      body: text(
        "We implement with your team and test the real workflow before handover.",
        "Wir setzen gemeinsam mit Ihrem Team um und testen den tatsächlichen Ablauf vor der Übergabe.",
      ),
    },
    {
      title: text("Hand over & improve", "Übergeben & verbessern"),
      body: text(
        "You receive documentation and training. We agree any ongoing support separately.",
        "Sie erhalten Dokumentation und Schulung. Laufende Betreuung vereinbaren wir gesondert.",
      ),
    },
  ],
  why: text(
    "Small team. Joined-up thinking.",
    "Kleines Team. Zusammenhängende Lösungen.",
  ),
  whyBody: text(
    "Your website, office IT and automations should work together. We connect the pieces, explain the decisions and help your team use what we build.",
    "Ihre Website, Büro-IT und Automatisierungen sollen zusammenspielen. Wir verbinden die Bereiche, erklären Entscheidungen und helfen Ihrem Team, die Lösungen im Alltag zu nutzen.",
  ),
  principles: [
    text(
      "Business goals before tool choices",
      "Geschäftsziele vor Werkzeugauswahl",
    ),
    text(
      "Clear scope and transparent costs",
      "Klarer Umfang und transparente Kosten",
    ),
    text(
      "Documented handover and practical training",
      "Dokumentierte Übergabe und praktische Schulung",
    ),
  ],
  faqTitle: text(
    "A few things you may be wondering.",
    "Was Sie vielleicht noch wissen möchten.",
  ),
  faq: [
    {
      q: text(
        "I’m not sure which service I need. Where do I start?",
        "Ich weiß noch nicht, welche Leistung ich brauche. Wo fange ich an?",
      ),
      a: text(
        "Tell us what is slowing you down. We will help identify whether you need IT support, an automation, a website or simply a clearer process.",
        "Beschreiben Sie, was Sie ausbremst. Gemeinsam klären wir, ob IT-Betreuung, eine Automatisierung, eine Website oder zunächst ein klarerer Ablauf hilft.",
      ),
    },
    {
      q: text(
        "Do you work with small businesses and households?",
        "Arbeiten Sie mit kleinen Unternehmen und Privathaushalten?",
      ),
      a: text(
        "Yes. Our business services are designed around small teams. Household support covers everyday devices, Wi-Fi, software and backups in and around Marburg, with remote help where suitable.",
        "Ja. Unsere Unternehmensleistungen richten sich an kleine Teams. Für Privathaushalte betreuen wir Geräte, WLAN, Software und Backups in Marburg und Umgebung – soweit sinnvoll auch per Fernwartung.",
      ),
    },
    {
      q: text("How much will my project cost?", "Was kostet mein Projekt?"),
      a: text(
        "We quote after understanding the work. Your proposal separates implementation, external software costs and optional ongoing support. You can review the full cost before deciding.",
        "Wir erstellen ein Angebot, sobald der Aufwand geklärt ist. Es trennt Umsetzung, externe Softwarekosten und optionale laufende Betreuung. So können Sie die Gesamtkosten vor Ihrer Entscheidung prüfen.",
      ),
    },
    {
      q: text(
        "Can you work with the tools we already use?",
        "Können Sie mit unseren vorhandenen Anwendungen arbeiten?",
      ),
      a: text(
        "We first check your current setup, available integrations and access requirements. We only recommend replacing a tool when there is a clear reason.",
        "Zuerst prüfen wir Ihre vorhandene Umgebung, mögliche Schnittstellen und benötigte Zugänge. Einen Wechsel empfehlen wir nur, wenn es dafür einen nachvollziehbaren Grund gibt.",
      ),
    },
    {
      q: text(
        "What happens to our data when we use AI?",
        "Was passiert mit unseren Daten beim KI-Einsatz?",
      ),
      a: text(
        "We agree which data a system may use, who can access it, which providers are involved and where human review is required before implementation. Sensitive use cases need a separate assessment.",
        "Vor der Umsetzung klären wir, welche Daten ein System nutzen darf, wer Zugriff erhält, welche Anbieter beteiligt sind und wo Menschen prüfen müssen. Sensible Anwendungsfälle benötigen eine gesonderte Bewertung.",
      ),
    },
  ],
  finalTitle: text(
    "What would make your working day easier?",
    "Was würde Ihren Arbeitsalltag einfacher machen?",
  ),
  finalBody: text(
    "Tell us where things get stuck. We’ll help you find a useful first step.",
    "Erzählen Sie uns, wo es hakt. Wir helfen Ihnen, einen sinnvollen ersten Schritt zu finden.",
  ),
  aboutTitle: text(
    "One team for the technology your business depends on.",
    "Ein Team für die Technik, auf die Ihr Unternehmen angewiesen ist.",
  ),
  aboutIntro: text(
    "Top in Tech brings IT support, automation and development together. From Marburg, we help small businesses and households make technology more useful and less demanding.",
    "Top in Tech verbindet IT-Betreuung, Automatisierung und Entwicklung. Von Marburg aus helfen wir kleinen Unternehmen und Privathaushalten, Technik sinnvoller und einfacher zu nutzen.",
  ),
  storyTitle: text(
    "Fewer handovers. More responsibility.",
    "Weniger Weiterreichen. Mehr Verantwortung.",
  ),
  story: text(
    "A website developer, an IT contact and an automation specialist can each solve a piece of the problem. But somebody needs to understand how those pieces fit. That is why Top in Tech works across all three disciplines: to connect everyday technical support with the systems that help your business move forward.",
    "Ein Webentwickler, ein IT-Ansprechpartner und ein Automatisierungsspezialist können jeweils einen Teil des Problems lösen. Doch jemand muss verstehen, wie diese Teile zusammenpassen. Deshalb arbeitet Top in Tech in allen drei Bereichen: Wir verbinden technische Hilfe im Alltag mit den Systemen, die Ihr Unternehmen weiterbringen.",
  ),
  missionTitle: text("Our mission", "Unsere Mission"),
  mission: text(
    "Make practical technology accessible to businesses that do not have their own IT department. Start with a real problem, build a solution that fits and leave people able to use it.",
    "Praxistaugliche Technik für Unternehmen zugänglich machen, die keine eigene IT-Abteilung haben. Mit einem echten Problem beginnen, eine passende Lösung bauen und Menschen befähigen, sie zu nutzen.",
  ),
  teamTitle: text(
    "People you can talk to. Work you can understand.",
    "Menschen, die erreichbar sind. Arbeit, die verständlich bleibt.",
  ),
  teamIntro: text(
    "Meet the people behind Top in Tech. We connect strategy, implementation and support around your priorities.",
    "Lernen Sie die Menschen hinter Top in Tech kennen. Wir verbinden Beratung, Umsetzung und Betreuung mit Ihren Prioritäten.",
  ),
  members: [
    {
      name: "Zoraiz Fazal",
      initials: "ZF",
      role: text(
        "Founder · Strategy & automation",
        "Gründer · Strategie & Automatisierung",
      ),
      body: text(
        "Connects business goals with practical automation projects and a clear plan for delivery.",
        "Verbindet Geschäftsziele mit praxistauglichen Automatisierungsprojekten und einem klaren Umsetzungsplan.",
      ),
    },
    {
      name: "Sibtain Muhammad",
      initials: "SM",
      role: text("Co-founder · Architecture", "Mitgründer · Architektur"),
      body: text(
        "Plans how systems, infrastructure and integrations fit together for dependable operation.",
        "Plant das Zusammenspiel von Systemen, Infrastruktur und Schnittstellen für einen verlässlichen Betrieb.",
      ),
    },
    {
      name: "Alina Schmidt",
      initials: "AS",
      role: text("Customer support", "Kundenbetreuung"),
      body: text(
        "Helps customers get started, find answers and stay connected throughout the work.",
        "Hilft Kunden beim Einstieg, beantwortet Fragen und begleitet die Zusammenarbeit.",
      ),
    },
  ],
  contactTitle: text(
    "Let’s start with your business.",
    "Beginnen wir mit Ihrem Unternehmen.",
  ),
  contactIntro: text(
    "Tell us what you want to improve. You don’t need a technical brief—we’ll work through the details together.",
    "Erzählen Sie uns, was Sie verbessern möchten. Ein technisches Konzept brauchen Sie noch nicht – die Details klären wir gemeinsam.",
  ),
  nextTitle: text("What happens next?", "Wie geht es weiter?"),
  next: [
    text(
      "We review your enquiry and get in touch.",
      "Wir prüfen Ihre Anfrage und melden uns bei Ihnen.",
    ),
    text(
      "Together, we clarify your goals and starting point.",
      "Gemeinsam klären wir Ihre Ziele und Ausgangslage.",
    ),
    text(
      "If we can help, you receive a clear proposal.",
      "Wenn wir helfen können, erhalten Sie ein klares Angebot.",
    ),
  ],
  name: text("Your name", "Ihr Name"),
  email: text("Email address", "E-Mail-Adresse"),
  company: text("Company (optional)", "Unternehmen (optional)"),
  interest: text("What can we help with?", "Wobei können wir helfen?"),
  unsure: text("I’m not sure yet", "Ich bin noch nicht sicher"),
  message: text(
    "What would you like to improve?",
    "Was möchten Sie verbessern?",
  ),
  messageHint: text(
    "For example: we manually copy every enquiry into our CRM.",
    "Zum Beispiel: Wir übertragen jede Anfrage von Hand in unser CRM.",
  ),
  submit: text("Send enquiry", "Anfrage senden"),
  sending: text("Sending…", "Wird gesendet …"),
  consent: text(
    "I have read the privacy notice. My details will be used to respond to this enquiry.",
    "Ich habe die Datenschutzhinweise gelesen. Meine Angaben werden zur Bearbeitung dieser Anfrage verwendet.",
  ),
  success: text(
    "Your enquiry has been received.",
    "Ihre Anfrage ist eingegangen.",
  ),
  successBody: text(
    "Thank you. Our team will review your message and contact you using the details you provided.",
    "Vielen Dank. Unser Team prüft Ihre Nachricht und meldet sich über die angegebenen Kontaktdaten bei Ihnen.",
  ),
  error: text(
    "Your enquiry could not be sent. Please try again or email us directly.",
    "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
  ),
  another: text("Send another enquiry", "Weitere Anfrage senden"),
  required: text(
    "Fields marked * are required.",
    "Mit * gekennzeichnete Felder sind Pflichtfelder.",
  ),
  privacy: text("Privacy notice", "Datenschutz"),
  imprint: text("Legal notice", "Impressum"),
  rights: text("All rights reserved.", "Alle Rechte vorbehalten."),
  skip: text("Skip to content", "Zum Inhalt springen"),
  menu: text("Navigation menu", "Navigationsmenü"),
  language: text("Language", "Sprache"),
  notFound: text(
    "This page could not be found.",
    "Diese Seite wurde nicht gefunden.",
  ),
  notFoundBody: text(
    "Let’s get you back to the right place. Explore our services or return to the homepage.",
    "Wir bringen Sie zurück auf den richtigen Weg. Entdecken Sie unsere Leistungen oder wechseln Sie zur Startseite.",
  ),
  pending: text(
    "Draft — business details still to be completed.",
    "Entwurf – Unternehmensangaben werden noch ergänzt.",
  ),
};
