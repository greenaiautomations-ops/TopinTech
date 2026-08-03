import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    id: "assistants",
    icon: Bot,
    title: "AI Assistants",
    subtitle: "Custom AI teams trained on your business data, working 24/7",
    categories: [
      {
        name: "AI Marketing Team",
        features: ["Creates campaigns", "Writes ads & emails", "Analyzes performance"],
      },
      {
        name: "AI Finance Team",
        features: ["Invoice tracking", "Expense analysis", "Forecasting & reports"],
      },
      {
        name: "AI HR Team",
        features: ["Resume screening", "Interview scheduling", "Employee Q&A bot"],
      },
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
      {
        name: "AI Receptionist",
        features: ["Answers calls 24/7", "Books appointments", "Answers FAQs"],
      },
      {
        name: "Outbound Voice Agents",
        features: ["Lead follow-ups", "Appointment reminders", "Sales calls"],
      },
    ],
    useCases: [
      "Medical clinic handles 100% missed calls",
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
      {
        name: "Industries We Automate",
        features: ["🏋️ Fitness Gyms", "🏠 Property Dealers", "🏥 Medical Clinics & Hospitals"],
      },
      {
        name: "What We Automate",
        features: [
          "Lead intake → CRM",
          "Booking → Confirmation → Reminder",
          "Payments → Invoices → Reports",
        ],
      },
      {
        name: "Vibe Coding",
        features: ["Websites", "Web Apps", "Internal Software — fast, clean, scalable"],
      },
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
      {
        name: "What We Create",
        features: ["Product images", "Social media creatives", "Promo videos", "AI avatars"],
      },
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
      {
        name: "What We Do",
        features: [
          "AI readiness audit",
          "Tool selection",
          "Automation roadmap",
          "Implementation guidance",
        ],
      },
    ],
    useCases: [
      "SMB identifies €50k/year savings",
      "Company avoids wrong AI tools",
      "Faster AI adoption with lower risk",
    ],
    benefits: [
      { icon: Brain, text: "Clear strategy" },
      { icon: Building, text: "Secure setup" },
      { icon: TrendingUp, text: "Long-term ROI" },
    ],
  },
  {
    id: "webdev",
    icon: FileText,
    title: "Web Development & Mobile Apps",
    subtitle: "Custom websites and mobile applications built with modern technologies",
    categories: [
      {
        name: "Web Development",
        features: ["Responsive websites", "E-commerce platforms", "Custom web applications", "Landing pages"],
      },
      {
        name: "Mobile Apps",
        features: ["iOS & Android apps", "Cross-platform development", "Progressive Web Apps (PWA)", "App maintenance"],
      },
      {
        name: "Technologies",
        features: ["React & Next.js", "React Native", "Node.js backends", "Cloud deployment"],
      },
    ],
    useCases: [
      "Startup launches MVP in 4 weeks",
      "Business increases online sales by 200%",
      "Company reduces mobile app development cost by 50%",
    ],
    benefits: [
      { icon: Clock, text: "Rapid development" },
      { icon: DollarSign, text: "Cost-effective solutions" },
      { icon: TrendingUp, text: "Scalable architecture" },
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Green AI | AI Automation Solutions</title>
        <meta
          name="description"
          content="AI Assistants, Voice Agents, Workflow Automation, Image & Video Generation, and AI Consultancy. Explore our full range of AI automation services."
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
                AI solutions that actually work for your business. No hype, just results.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${index % 2 === 0 ? "bg-card/30" : ""}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                {/* Service Header */}
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {service.categories.map((category) => (
                    <div
                      key={category.name}
                      className="p-6 rounded-2xl bg-card border border-border"
                    >
                      <h3 className="font-display font-semibold mb-4">
                        {category.name}
                      </h3>
                      <ul className="space-y-2">
                        {category.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
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
                  <h3 className="font-display text-xl font-semibold mb-6">
                    Real Use Cases
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {service.useCases.map((useCase) => (
                      <div
                        key={useCase}
                        className="p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <p className="text-sm text-muted-foreground">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-4 justify-center">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit.text}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
                    >
                      <benefit.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free consultation and discover how AI can transform your business.
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
