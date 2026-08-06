import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Phone, Bot, Mic, Workflow, Sparkles } from "lucide-react";
import { VideoModal } from "@/components/VideoModal";

const floatingIcons = [
  { Icon: Bot, delay: "0s", position: "top-20 left-[10%]" },
  { Icon: Mic, delay: "1s", position: "top-32 right-[15%]" },
  { Icon: Workflow, delay: "2s", position: "bottom-32 left-[20%]" },
  { Icon: Sparkles, delay: "0.5s", position: "bottom-20 right-[10%]" },
];

const rotatingText = ["Save Time", "Reduce Costs", "Scale Effortlessly"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(97_41%_50%_/_0.1)_0%,_transparent_50%)]" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 animate-float`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-12 h-12 text-primary" />
        </div>
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_hsl(var(--border)_/_0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_hsl(var(--border)_/_0.1)_1px,_transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI Automation Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in animation-delay-200">
            Automate Smarter.{" "}
            <span className="gradient-text">Grow Faster.</span>
            <br />
            With Top in Tech.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in animation-delay-400">
            AI assistants, voice agents, and intelligent automation that save
            time, cut costs, and scale your business — without complexity.
          </p>

          {/* Rotating Text */}
          <div className="flex items-center justify-center gap-3 mb-10 opacity-0 animate-fade-in animation-delay-600">
            {rotatingText.map((text, index) => (
              <div key={text} className="flex items-center gap-3">
                <span className="text-sm md:text-base font-medium text-foreground">
                  {text}
                </span>
                {index < rotatingText.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-800">
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact">
                <Rocket className="w-5 h-5" />
                Get Free AI Audit
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5" />
                Talk to an AI Expert
              </Link>
            </Button>
            <VideoModal />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
