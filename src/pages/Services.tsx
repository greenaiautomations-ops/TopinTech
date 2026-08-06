import { useState, useEffect, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Reveal } from "@/components/Reveal";
import {
  Bot,
  Mic,
  Workflow,
  Image,
  Brain,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Building,
  Phone,
  BarChart3,
  FileText,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Headset,
  Network,
  ShieldCheck,
  Cloud,
} from "lucide-react";

// Business is organized into three top-level categories. Each category has
// its own set of services, and each service keeps the existing detailed
// shape (categories/features, real-world-style use cases, benefit chips).
// IT Support Services use cases below are illustrative examples in the style
// of what similar MSPs (managed service providers) advertise — replace with
// your own real client results as you collect them.
const categoryData = [
  {
    id: "it-support",
    icon: Headset,
    title: "IT Support Services",
    subtitle: "Reliable, responsive IT so your team never has to think about it",
    services: [
      {
        id: "helpdesk",
        icon: Headset,
        title: "Helpdesk & Remote Support",
        subtitle: "Fast, friendly IT support whenever your team needs it",
        categories: [
          {
            name: "24/7 Helpdesk",
            features: ["Unlimited remote support tickets", "Multi-channel: phone, email, chat", "Average 15-minute response time"],
          },
          {
            name: "Onboarding & Offboarding",
            features: ["New employee device setup", "Account provisioning", "Secure offboarding & data wipe"],
          },
          {
            name: "Software & Licensing",
            features: ["App installation & updates", "License management", "Vendor coordination"],
          },
        ],
        useCases: [
          "Retail chain cuts average ticket resolution time from 4 hours to 45 minutes",
          "Law firm eliminates IT downtime during new staff onboarding",
          "Accounting firm passes software audit with zero licensing gaps",
        ],
        benefits: [
          { icon: Clock, text: "24/7 coverage" },
          { icon: Users, text: "Dedicated support team" },
          { icon: TrendingUp, text: "Faster resolution times" },
        ],
      },
      {
        id: "network",
        icon: Network,
        title: "Network & Infrastructure Management",
        subtitle: "Proactive monitoring that catches problems before your team notices",
        categories: [
          {
            name: "Network Monitoring",
            features: ["Proactive uptime monitoring", "Bandwidth optimization", "Automatic incident alerting"],
          },
          {
            name: "Server & Cloud Infrastructure",
            features: ["Server maintenance & patching", "Cloud cost optimization", "Backup & disaster recovery"],
          },
          {
            name: "Hardware Management",
            features: ["Asset tracking", "Lifecycle planning", "Vendor procurement"],
          },
        ],
        useCases: [
          "Manufacturing plant reduces unplanned network downtime by 70%",
          "Clinic chain achieves 99.9% uptime across 5 locations",
          "Logistics company cuts cloud spend by 30% through right-sizing",
        ],
        benefits: [
          { icon: ShieldCheck, text: "Reliable uptime" },
          { icon: DollarSign, text: "Lower infrastructure costs" },
          { icon: Workflow, text: "Proactive maintenance" },
        ],
      },
      {
        id: "security",
        icon: ShieldCheck,
        title: "Cybersecurity & Data Protection",
        subtitle: "Enterprise-grade protection sized for small and medium businesses",
        categories: [
          {
            name: "Threat Monitoring",
            features: ["24/7 monitoring & alerting", "Endpoint protection", "Phishing simulation training"],
          },
          {
            name: "Compliance & Audits",
            features: ["GDPR compliance support", "Security audits", "Policy documentation"],
          },
          {
            name: "Backup & Recovery",
            features: ["Automated daily backups", "Disaster recovery planning", "Ransomware protection"],
          },
        ],
        useCases: [
          "Financial services firm passes ISO 27001 audit on first attempt",
          "Healthcare provider reaches full GDPR compliance in 6 weeks",
          "Retailer recovers from a ransomware attempt with zero data loss",
        ],
        benefits: [
          { icon: ShieldCheck, text: "Enterprise-grade security" },
          { icon: CheckCircle, text: "Audit-ready compliance" },
          { icon: Clock, text: "24/7 threat monitoring" },
        ],
      },
      {
        id: "cloud",
        icon: Cloud,
        title: "Cloud Migration & Management",
        subtitle: "Move to the cloud without downtime, then keep costs under control",
        categories: [
          {
            name: "Migration Planning",
            features: ["Infrastructure assessment", "Zero-downtime migration", "Legacy system modernization"],
          },
          {
            name: "Ongoing Cloud Management",
            features: ["Multi-cloud support (AWS, Azure, GCP)", "Cost monitoring & optimization", "Auto-scaling setup"],
          },
          {
            name: "Managed Backups",
            features: ["Automated backup scheduling", "Cross-region redundancy", "Fast disaster recovery"],
          },
        ],
        useCases: [
          "E-commerce brand migrates to the cloud with zero checkout downtime",
          "SaaS startup cuts infrastructure costs by 40% post-migration",
          "Professional services firm modernizes legacy systems in 8 weeks",
        ],
        benefits: [
          { icon: TrendingUp, text: "Scalable growth" },
          { icon: DollarSign, text: "Lower cloud spend" },
          { icon: Clock, text: "Zero-downtime migration" },
        ],
      },
    ],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI Automations & Agents",
    subtitle: "AI systems that actually work inside your business — no hype, just results",
    services: [
      {
        id: "assistants",
        icon: Bot,
        title: "AI Assistants",
        subtitle: "Custom AI teams trained on your business data, working 24/7",
        categories: [
          { name: "AI Marketing Team", features: ["Creates campaigns", "Writes ads & emails", "Analyzes performance"] },
          { name: "AI Finance Team", features: ["Invoice tracking", "Expense analysis", "Forecasting & reports"] },
          { name: "AI HR Team", features: ["Resume screening", "Interview scheduling", "Employee Q&A bot"] },
        ],
        useCases: [
          "Marketing agency saves 20+ hours/week on content & reporting",
          "Startup reduces finance errors by 65%",
          "HR hiring time reduced from 14 days to 4 days",
        ],
        benefits: [
          { icon: Clock, text: "Save 60–80% time" },
          { icon: DollarSign, text: "Reduce costs by 30–50%" },
          { icon: BarChart3, text: "Increase efficiency by 2–3x" },
        ],
      },
      {
        id: "voice",
        icon: Mic,
        title: "AI Voice Agents",
        subtitle: "Human-like AI callers that talk, understand, and act",
        categories: [
          { name: "AI Receptionist", features: ["Answers calls 24/7", "Books appointments", "Answers FAQs"] },
          { name: "Outbound Voice Agents", features: ["Lead follow-ups", "Appointment reminders", "Sales calls"] },
        ],
        useCases: [
          "Medical clinic handles 100% of previously missed calls",
          "Real estate firm increases lead response rate by 3x",
          "Gym reduces no-shows by 40%",
        ],
        benefits: [
          { icon: Phone, text: "Never miss a call" },
          { icon: DollarSign, text: "Save €2,000–€5,000/month on staff" },
          { icon: Clock, text: "Instant response time" },
        ],
      },
      {
        id: "automation",
        icon: Workflow,
        title: "AI Workflow Automation + Vibe Coding",
        subtitle: "End-to-end automation for industries that need it most",
        categories: [
          { name: "Industries We Automate", features: ["🏋️ Fitness Gyms", "🏠 Property Dealers", "🏥 Medical Clinics & Hospitals"] },
          { name: "What We Automate", features: ["Lead intake → CRM", "Booking → Confirmation → Reminder", "Payments → Invoices → Reports"] },
          { name: "Vibe Coding", features: ["Websites", "Web Apps", "Internal Software — fast, clean, scalable"] },
        ],
        useCases: [
          "Gym onboarding time cut by 70%",
          "Property dealer closes 25% more leads",
          "Clinics reduce admin workload by 50%",
        ],
        benefits: [
          { icon: Workflow, text: "Zero manual work" },
          { icon: TrendingUp, text: "Scalable systems" },
          { icon: ArrowRight, text: "Faster growth" },
        ],
      },
      {
        id: "media",
        icon: Image,
        title: "AI Image & Video Generation",
        subtitle: "High-quality AI visuals for marketing & branding",
        categories: [
          { name: "What We Create", features: ["Product images", "Social media creatives", "Promo videos", "AI avatars"] },
        ],
        useCases: [
          "E-commerce brand saves €3,000/month on creatives",
          "Marketing team produces 10x more content",
          "Ads CTR improves by 35%",
        ],
        benefits: [
          { icon: Users, text: "No designers needed" },
          { icon: Clock, text: "Faster content creation" },
          { icon: DollarSign, text: "Massive cost savings" },
        ],
      },
      {
        id: "consultancy",
        icon: Brain,
        title: "AI Consultancy",
        subtitle: "Strategic guidance for your AI journey",
        categories: [
          { name: "What We Do", features: ["AI readiness audit", "Tool selection", "Automation roadmap", "Implementation guidance"] },
        ],
        useCases: [
          "SMB identifies €50k/year in potential savings",
          "Company avoids investing in the wrong AI tools",
          "Faster AI adoption with lower risk",
        ],
        benefits: [
          { icon: Brain, text: "Clear strategy" },
          { icon: Building, text: "Secure setup" },
          { icon: TrendingUp, text: "Long-term ROI" },
        ],
      },
    ],
  },
  {
    id: "web-app-dev",
    icon: FileText,
    title: "Web & App Development",
    subtitle: "Custom websites and mobile applications built to scale",
    services: [
      {
        id: "webdev",
        icon: FileText,
        title: "Web Development",
        subtitle: "Fast, modern websites and web apps that turn visitors into customers",
        categories: [
          { name: "Business Websites", features: ["Responsive design", "SEO-optimized", "CMS integration"] },
          { name: "E-commerce Platforms", features: ["Shopify / WooCommerce / custom", "Payment integration", "Inventory sync"] },
          { name: "Web Applications", features: ["Custom dashboards", "Client portals", "API integrations"] },
        ],
        useCases: [
          "Consulting firm's new site doubles inbound leads in 3 months",
          "Boutique retailer launches e-commerce store, sees 200% online sales growth",
          "Property management company launches a client portal, cuts admin calls by 50%",
        ],
        benefits: [
          { icon: Clock, text: "Rapid launch" },
          { icon: TrendingUp, text: "Measurable growth" },
          { icon: DollarSign, text: "Cost-effective builds" },
        ],
      },
      {
        id: "mobileapps",
        icon: Smartphone,
        title: "Mobile App Development",
        subtitle: "iOS, Android, and cross-platform apps built for real usage",
        categories: [
          { name: "iOS & Android Apps", features: ["Native & cross-platform", "App Store deployment", "Push notifications"] },
          { name: "Progressive Web Apps", features: ["Offline functionality", "App-like experience", "No app store needed"] },
          { name: "App Maintenance", features: ["Bug fixes & updates", "Performance monitoring", "Feature roadmap"] },
        ],
        useCases: [
          "Fitness studio launches booking app, increases member retention by 25%",
          "Startup ships MVP mobile app in 6 weeks",
          "Restaurant chain's ordering app processes 1,000+ orders per week",
        ],
        benefits: [
          { icon: Clock, text: "Fast development" },
          { icon: Users, text: "Better engagement" },
          { icon: TrendingUp, text: "Built to scale" },
        ],
      },
    ],
  },
];

const allServices = categoryData.flatMap((cat) => cat.services.map((s) => ({ ...s, categoryId: cat.id })));

const Services = () => {
  const location = useLocation();

  const initial = useMemo(() => {
    const hash = location.hash.replace("#", "");
    const matchedService = allServices.find((s) => s.id === hash);
    if (matchedService) return { category: matchedService.categoryId, service: matchedService.id };
    const matchedCategory = categoryData.find((c) => c.id === hash);
    if (matchedCategory) return { category: matchedCategory.id, service: matchedCategory.services[0].id };
    return { category: categoryData[0].id, service: categoryData[0].services[0].id };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [activeCategory, setActiveCategory] = useState(initial.category);
  const [activeService, setActiveService] = useState(initial.service);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const matchedService = allServices.find((s) => s.id === hash);
    if (matchedService) {
      setActiveCategory(matchedService.categoryId);
      setActiveService(matchedService.id);
    }
  }, [location.hash]);

  const currentCategory = categoryData.find((c) => c.id === activeCategory) ?? categoryData[0];

  return (
    <>
      <Helmet>
        <title>Our Services - Top in Tech | IT Support, AI Automation & App Development</title>
        <meta
          name="description"
          content="IT Support Services, AI Automations & Agents, and Web & App Development. Explore our full range of technology solutions for small and medium businesses."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                IT Support, AI Automation, and App Development — under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs
                value={activeCategory}
                onValueChange={(v) => {
                  const cat = categoryData.find((c) => c.id === v);
                  if (!cat) return;
                  setActiveCategory(v);
                  setActiveService(cat.services[0].id);
                  window.history.replaceState(null, "", `#${cat.services[0].id}`);
                }}
              >
                <TabsList className="h-auto w-full flex-wrap gap-3 bg-transparent p-0 mb-8 justify-center">
                  {categoryData.map((cat) => (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card data-[state=active]:bg-primary/10 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none text-sm font-semibold"
                    >
                      <cat.icon className="w-4 h-4" />
                      {cat.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {categoryData.map((cat) => (
                  <TabsContent key={cat.id} value={cat.id} className="mt-0 focus-visible:outline-none">
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">{cat.subtitle}</p>

                    {/* Sub-navigation for services within this category */}
                    <Tabs
                      value={cat.services.some((s) => s.id === activeService) ? activeService : cat.services[0].id}
                      onValueChange={(v) => {
                        setActiveService(v);
                        window.history.replaceState(null, "", `#${v}`);
                      }}
                    >
                      <TabsList className="h-auto w-full flex-wrap gap-2 bg-transparent p-0 mb-12 justify-center">
                        {cat.services.map((service) => (
                          <TabsTrigger
                            key={service.id}
                            value={service.id}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/60 bg-card/50 data-[state=active]:bg-secondary data-[state=active]:border-border data-[state=active]:text-foreground data-[state=active]:shadow-none text-sm font-medium text-muted-foreground"
                          >
                            <service.icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{service.title.split(" + ")[0]}</span>
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {cat.services.map((service) => (
                        <TabsContent key={service.id} value={service.id} id={service.id} className="mt-0 focus-visible:outline-none">
                          <Reveal>
                            {/* Service Header */}
                            <div className="flex items-start gap-6 mb-12">
                              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <service.icon className="w-8 h-8 text-primary" />
                              </div>
                              <div>
                                <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">{service.title}</h2>
                                <p className="text-lg text-muted-foreground">{service.subtitle}</p>
                              </div>
                            </div>

                            {/* Categories */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                              {service.categories.map((category) => (
                                <div key={category.name} className="p-6 rounded-2xl bg-card border border-border">
                                  <h3 className="font-display font-semibold mb-4">{category.name}</h3>
                                  <ul className="space-y-2">
                                    {category.features.map((feature) => (
                                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Use Cases */}
                            <div className="mb-12">
                              <h3 className="font-display text-xl font-semibold mb-6">Real Use Cases</h3>
                              <div className="grid md:grid-cols-3 gap-4">
                                {service.useCases.map((useCase) => (
                                  <div key={useCase} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                    <p className="text-sm text-muted-foreground">{useCase}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Benefits */}
                            <div className="flex flex-wrap gap-4 justify-center">
                              {service.benefits.map((benefit) => (
                                <div key={benefit.text} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
                                  <benefit.icon className="w-4 h-4 text-primary" />
                                  <span className="text-sm font-medium">{benefit.text}</span>
                                </div>
                              ))}
                            </div>
                          </Reveal>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free consultation and discover how we can support and grow your business.
              </p>
              <Button variant="glow" size="xl" asChild>
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
