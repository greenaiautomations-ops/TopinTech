import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// PLACEHOLDER PRICING — replace [XXX] with real starting prices before launch.
// Even rough numbers here measurably reduce bounce for price-sensitive SMB
// visitors versus showing no pricing signal at all.
const tiers = [
  {
    name: "Starter",
    price: "€[XXX]",
    period: "one-time setup",
    description: "One focused automation — a voice agent, a single AI assistant, or one workflow.",
    features: [
      "1 automation or AI assistant",
      "Setup & integration",
      "Team training session",
      "30 days of support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "€[XXX]",
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
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every project starts with a free audit, so you'll know your exact investment before committing.
            Ranges below are a starting point.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative p-8 rounded-2xl border flex flex-col",
                tier.highlighted
                  ? "bg-primary/5 border-primary shadow-lg shadow-primary/10 md:-translate-y-4"
                  : "bg-card border-border"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground text-sm ml-2">{tier.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={tier.highlighted ? "glow" : "hero-outline"} size="lg" className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
