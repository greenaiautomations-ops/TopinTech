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
  LabelList,
} from "recharts";

// One bar per top-level service area, matching the three categories on the
// Services page (IT Support Services, AI Automations & Agents, Web & App
// Development). Each bar is a single "% typical reduction" value rather than
// a before/after pair — easier to read at a glance, and each metric is the
// one most relevant to that service area. Numbers are illustrative, pulled
// from the mock use cases already on the Services page (src/pages/Services.tsx)
// — update once you have real client-measured results to cite instead.
const data = [
  { name: "IT Support Services", reduction: 81, metric: "Ticket resolution time" },
  { name: "AI Automations & Agents", reduction: 70, metric: "Manual work hours" },
  { name: "Web & App Development", reduction: 50, metric: "Admin workload" },
];

interface TooltipPayloadItem {
  value: number;
  payload: { metric: string; name: string };
}

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
      <p className="font-display font-semibold text-sm mb-1">{item.name}</p>
      <p className="text-xs text-muted-foreground">{item.metric}</p>
      <p className="text-primary text-sm font-semibold mt-1">~{payload[0].value}% typical reduction</p>
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
            Typical <span className="gradient-text">Impact by Service Area</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Average reduction in time, tickets, or manual work for each service area — every
            engagement gets its own numbers during your free audit.
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
                <BarChart data={data} margin={{ top: 30, right: 10, left: -10, bottom: 0 }}>
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
                    domain={[0, 100]}
                    label={{
                      value: "% typical reduction",
                      angle: -90,
                      position: "insideLeft",
                      fill: "hsl(var(--muted-foreground))",
                      fontSize: 12,
                      style: { textAnchor: "middle" },
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--primary) / 0.05)" }} />
                  <Bar dataKey="reduction" radius={[8, 8, 0, 0]} maxBarSize={90}>
                    {data.map((_, index) => (
                      <Cell key={index} fill="hsl(var(--primary))" />
                    ))}
                    <LabelList
                      dataKey="reduction"
                      position="top"
                      formatter={(v: number) => `${v}%`}
                      fill="hsl(var(--foreground))"
                      fontSize={14}
                      fontWeight={700}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
