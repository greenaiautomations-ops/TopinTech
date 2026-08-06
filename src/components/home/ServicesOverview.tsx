import { Link } from "react-router-dom";
import { Headset, Bot, FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Three top-level categories, matching the structure on the Services page.
// Each links straight to that category's first tab via hash.
const services = [
  {
    icon: Headset,
    title: "IT Support Services",
    description: "24/7 helpdesk, network management, cybersecurity & cloud migration for growing teams",
    color: "from-cyan-500/20 to-cyan-500/5",
    link: "/services#helpdesk",
  },
  {
    icon: Bot,
    title: "AI Automations & Agents",
    description: "AI assistants, voice agents, and workflow automation that work 24/7",
    color: "from-primary/20 to-primary/5",
    link: "/services#assistants",
  },
  {
    icon: FileText,
    title: "Web & App Development",
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
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three ways we help your business run better. No hype, just results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
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
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
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
                  Explore services
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
