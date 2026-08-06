import type { PricingTier } from "@/components/PricingSection";

// Pricing ranges below are grounded in 2025/2026 market research for each
// category (managed IT / residential tech support benchmarks, AI agency and
// no-code/low-code automation pricing, and freelance/agency web & app
// development rates — sources noted per section), then adjusted down from
// raw US figures toward what's realistic for a lean, SMB-focused agency in
// the German/EU market. These are still illustrative starting ranges, not
// quotes — replace with your actual rates once you've finalized them, and
// update as your real project costs come in.

export const itSupportPricing: PricingTier[] = [
  {
    name: "Home Care",
    price: "€89",
    period: "per visit",
    description: "Windows setup, troubleshooting, backups, smart home — for households.",
    features: [
      "Windows/software installation & troubleshooting",
      "Data backup, recovery & anti-virus setup",
      "Smart device & smart home setup",
      "Or: €29/month unlimited remote support plan",
    ],
  },
  {
    name: "Business Essentials",
    price: "€39",
    period: "/user/month",
    description: "Day-to-day helpdesk and admin for small offices and growing teams.",
    features: [
      "Unlimited remote helpdesk tickets",
      "New hire onboarding & offboarding",
      "Software & license management",
      "Office 365 / Google Workspace admin",
    ],
    highlighted: true,
  },
  {
    name: "Business Pro",
    price: "€69",
    period: "/user/month",
    description: "Everything in Essentials, plus proactive monitoring and cloud management.",
    features: [
      "Everything in Business Essentials",
      "Cloud migration & ongoing management",
      "Proactive monitoring & priority response",
      "Quarterly IT review with your account manager",
    ],
  },
];

export const itSupportNote =
  "Based on 2025 managed IT services benchmarks (typically $100–$300/user/month in the US market) and residential tech support rates ($50–$150/hour), adjusted for the German SMB and home market. Get an exact quote after your free audit.";

export const aiAutomationPricing: PricingTier[] = [
  {
    name: "Starter",
    price: "€1,500–3,000",
    period: "one-time setup",
    description: "One focused automation — a voice agent, a single AI assistant, or one workflow.",
    features: [
      "1 automation or AI assistant",
      "Setup & integration with your existing tools",
      "Team training session",
      "30 days of support",
    ],
  },
  {
    name: "Growth",
    price: "€400–900",
    period: "/month",
    description: "For businesses automating multiple processes and want ongoing optimization.",
    features: [
      "Up to 3 automations or AI assistants",
      "Priority setup & integration",
      "Monthly performance review",
      "Ongoing support & tuning",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "Multi-department automation, custom integrations, or dedicated infrastructure.",
    features: [
      "Unlimited automations",
      "Dedicated implementation team",
      "Custom SLAs & security review",
      "Quarterly strategy sessions",
    ],
  },
];

export const aiAutomationNote =
  "Based on 2025 AI agency and automation-platform pricing (custom builds from ~$5,000; agency hourly rates of $30–$300 depending on region; voice AI setup typically $8,000–$25,000 for from-scratch builds). Because we build on existing platforms (n8n, OpenAI, Retell-style voice tools) rather than custom ML from scratch, our ranges sit well below bespoke-build pricing — you'll get an exact number after your free audit.";

export const webDevPricing: PricingTier[] = [
  {
    name: "Business Website",
    price: "€2,000–5,000",
    period: "one-time",
    description: "5–10 page responsive site with CMS, plus 3 months of maintenance.",
    features: [
      "Responsive design, SEO-optimized",
      "CMS for easy content edits",
      "3 months maintenance included",
      "Then ~€50–100/month hosting & support",
    ],
  },
  {
    name: "E-Commerce / Web App",
    price: "€7,000–15,000",
    period: "one-time",
    description: "Online store or custom web application with payment integration and admin portal.",
    features: [
      "Up to 50 products or custom app features",
      "Payment integration",
      "Admin / client portal",
      "~€100–200/month ongoing maintenance",
    ],
    highlighted: true,
  },
  {
    name: "Mobile App / Custom Platform",
    price: "€20,000+",
    period: "starting at",
    description: "iOS/Android app or a custom portal & ERP module scoped to your business.",
    features: [
      "Native or cross-platform mobile app",
      "Custom portal / ERP integrations",
      "Scoped after a detailed requirements review",
      "Hourly consulting available: €60–120/hour",
    ],
  },
];

export const webDevNote =
  "Based on 2025 freelance and agency development rates in Europe (~€25–60/hour for Eastern European talent, €75–150/hour for Western European agencies). We price to be competitive within that range while keeping delivery local. Final quotes depend on scope, confirmed after your free audit.";
