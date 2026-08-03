import { Link } from "react-router-dom";
import { Bot, Mic, Workflow, Image, Brain, ArrowRight, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Bot,
    title: "AI Assistants",
    description: "Custom AI teams for Marketing, Finance & HR that work 24/7",
    color: "from-primary/20 to-primary/5",
    link: "/services#assistants",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Human-like callers for reception and outbound sales",
    color: "from-emerald-500/20 to-emerald-500/5",
    link: "/services#voice",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end automation for gyms, clinics & property dealers",
    color: "from-cyan-500/20 to-cyan-500/5",
    link: "/services#automation",
  },
  {
    icon: Image,
    title: "AI Image & Video",
    description: "High-quality AI visuals for marketing & branding",
    color: "from-violet-500/20 to-violet-500/5",
    link: "/services#media",
  },
  {
    icon: Brain,
    title: "AI Consultancy",
    description: "AI readiness audit, tool selection & implementation",
    color: "from-amber-500/20 to-amber-500/5",
    link: "/services#consultancy",
  },
  {
    icon: Code,
    title: "Web & Mobile Apps",
    description: "Custom websites and mobile applications built to scale",
    color: "from-rose-500/20 to-rose-500/5",
    link: "/services#webdev",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI solutions that actually work for your business. No hype, just results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className={cn(
                "group relative p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1",
                index === services.length - 1 && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Background Gradient */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  service.color
                )}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
