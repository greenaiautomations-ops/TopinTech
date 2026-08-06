import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Target,
  Shield,
  TrendingUp,
  MapPin,
  CheckCircle,
  Headset,
  Bot,
  FileText,
  Users,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const pillars = [
  {
    icon: Headset,
    title: "IT Support Services",
    description: "Home and corporate IT support — setup, troubleshooting, backups, and day-to-day help desk.",
    link: "/services#home-it",
  },
  {
    icon: Bot,
    title: "AI Automations & Agents",
    description: "AI assistants, voice agents, and workflow automation that take repetitive work off your plate.",
    link: "/services#assistants",
  },
  {
    icon: FileText,
    title: "Web & App Development",
    description: "Websites and mobile apps built to actually convert visitors and support your operations.",
    link: "/services#webdev",
  },
];

const whyUs = [
  {
    icon: MapPin,
    title: "Germany-based (Marburg)",
    description: "Local presence, hands-on support across IT, AI, and software",
  },
  {
    icon: Layers,
    title: "One partner, three disciplines",
    description: "IT support, AI automation, and app development under one roof — no juggling vendors",
  },
  {
    icon: Target,
    title: "Custom solutions, not templates",
    description: "Every engagement is scoped to your business, not a one-size-fits-all package",
  },
  {
    icon: Shield,
    title: "Secure & compliant systems",
    description: "GDPR-aware practices across everything we build and support",
  },
  {
    icon: TrendingUp,
    title: "ROI-focused solutions",
    description: "Measurable results that impact your bottom line, not vanity features",
  },
  {
    icon: Clock,
    title: "Responsive support",
    description: "Real people, fast response times — whether it's a broken printer or a broken workflow",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Top in Tech | IT Support, AI Automation & Software Development</title>
        <meta
          name="description"
          content="Top in Tech is a Marburg, Germany-based technology partner covering IT support, AI automation, and web & app development for households and small and medium businesses."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                About <span className="gradient-text">Top in Tech</span>
              </h1>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                IT support, AI automation, and software development — handled by one practical team
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                    Our <span className="gradient-text">Story</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Top in Tech started with a simple observation: most households and small businesses
                    juggle several different providers for their technology needs — one for IT support, another
                    for websites, and no one at all for automating repetitive work with AI.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We built Top in Tech to be that one team instead — covering day-to-day IT support at home
                    and in the office, practical AI assistants and automation, and the websites and apps that
                    tie it all together.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in Marburg, Germany, we work directly with the people who use what we build, so
                    solutions get scoped around what a business or household actually needs — not what looks
                    good in a sales deck.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center glow-border">
                    <Target className="w-24 h-24 text-primary/50 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  What We <span className="gradient-text">Do</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Three areas, one team — pick one or combine all three as your needs grow.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                  <Reveal key={pillar.title} delay={index * 100}>
                    <Link
                      to={pillar.link}
                      className="group h-full flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{pillar.description}</p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To make technology{" "}
                <span className="text-primary font-semibold">simple</span>,{" "}
                <span className="text-primary font-semibold">reliable</span>, and{" "}
                <span className="text-primary font-semibold">practical</span> — for every home and every
                business we work with.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                Why <span className="gradient-text">Top in Tech</span>?
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyUs.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group h-full">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                Our <span className="gradient-text">Values</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Practical over Perfect",
                    description:
                      "We focus on solutions that work today, not theoretical ideas that sound impressive but deliver nothing.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Results First",
                    description:
                      "Every project starts with a clear outcome in mind — faster support, fewer manual hours, more leads. If we can't deliver value, we won't take it on.",
                  },
                  {
                    icon: Users,
                    title: "Transparent Partnership",
                    description:
                      "No black boxes. We explain everything we build and support, and train your team to manage it independently where possible.",
                  },
                ].map((value, index) => (
                  <Reveal key={value.title} delay={index * 100}>
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
                      <value.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
