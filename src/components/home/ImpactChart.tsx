import { useRef, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

// One bar per top-level service area (matching the three categories on the
// Services page), each with the metric that's most relevant to it.
// Illustrative ranges pulled from the mock use cases already used on the
// Services page (see src/pages/Services.tsx). These are typical ranges, not
// a guarantee for any specific business — update once you have real
// client-measured results to cite instead.
const data = [
  { name: "IT Support\nServices", before: 100, after: 19, metric: "Ticket resolution time" },
  { name: "AI Automations\n& Agents", before: 100, after: 30, metric: "Manual work hours" },
  { name: "Web & App\nDevelopment", before: 100, after: 50, metric: "Admin workload" },
];

interface TooltipPayloadItem {
  value: number;
  payload: { metric: string };
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const reduction = 100 - payload[1]?.value;
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
      <p className="font-display font-semibold text-sm mb-1">{label.replace("\n", " ")}</p>
      <p className="text-xs text-muted-foreground">{payload[0]?.payload.metric} before automation</p>
      <p className="text-primary text-sm font-semibold mt-1">~{reduction}% reduction after Top in Tech</p>
    </div>
  );
}

export function ImpactChart() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Typical <span className="gradient-text">Time & Cost Reduction</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Illustrative before/after ranges by service area — every engagement gets its own numbers
            during your free audit.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto bg-card/50 border border-border rounded-2xl p-4 sm:p-8 backdrop-blur-sm transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-[320px] w-full">
            {isVisible && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }} barGap={8}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={{ stroke: "hsl(var(--border))" }}
                    tickLine={false}
                    interval={0}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--primary) / 0.05)" }} />
                  <Bar dataKey="before" name="Before" radius={[6, 6, 0, 0]} fill="hsl(var(--muted-foreground) / 0.25)" />
                  <Bar dataKey="after" name="After Top in Tech" radius={[6, 6, 0, 0]}>
                    {data.map((_, index) => (
                      <Cell key={index} fill="hsl(var(--primary))" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-muted-foreground/25" /> Before automation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-primary" /> After Top in Tech
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
