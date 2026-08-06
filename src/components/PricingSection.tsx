import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingSectionProps {
  title: string;
  titleHighlight: string;
  subtitle: string;
  tiers: PricingTier[];
  note?: string;
  className?: string;
}

// Reusable pricing block — instantiated once per service category (see
// src/data/pricing.ts) so each category's tiers, ranges, and feature lists
// are scoped to what that category actually includes, instead of one
// generic pricing table for the whole business.
export function PricingSection({ title, titleHighlight, subtitle, tiers, note, className }: PricingSectionProps) {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {title} <span className="gradient-text">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
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
                <span className="font-display text-3xl sm:text-4xl font-bold">{tier.price}</span>
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

        {note && (
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto mt-8">{note}</p>
        )}
      </div>
    </section>
  );
}
