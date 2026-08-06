import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// NOTE: replace with your real, verifiable numbers as they grow — specific,
// modest figures build more trust with SMB buyers than large round numbers
// that a small team can't back up with named case studies.
const stats = [
  { value: 5, suffix: "+", label: "AI Platforms Mastered" },
  { value: 24, suffix: "/7", label: "Automation Uptime" },
  { value: 2, suffix: "", label: "Industries Specialized In" },
  { value: 100, suffix: "%", label: "Custom-Built, No Templates" },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(97_41%_50%_/_0.08)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real businesses we've helped transform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm",
                "transform transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
