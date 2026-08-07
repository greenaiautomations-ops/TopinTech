import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Tag } from "lucide-react";

export interface ServicePricing {
  price: string;
  period: string;
  features: string[];
}

// One pricing package per individual service/sub-service (not per top-level
// category) — renders inside that service's own tab. Ranges are grounded in
// 2025/2026 market research (managed IT, residential tech support, AI agency,
// and EU freelance/agency dev rates), adjusted for a lean SMB-focused agency
// in the German market. Treat as a starting point — confirm exact numbers
// once you've priced real projects, and replace here.
export function ServicePricingCard({ price, period, features }: ServicePricing) {
  return (
    <div className="max-w-md mx-auto p-8 rounded-2xl bg-primary/5 border border-primary flex flex-col">
      <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wide mb-3">
        <Tag className="w-3.5 h-3.5" />
        Pricing
      </div>
      <div className="mb-6">
        <span className="font-display text-3xl sm:text-4xl font-bold">{price}</span>
        <span className="text-muted-foreground text-sm ml-2">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="glow" size="lg" className="w-full" asChild>
        <Link to="/contact">Get Started</Link>
      </Button>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Starting range — confirmed after your free audit.
      </p>
    </div>
  );
}
