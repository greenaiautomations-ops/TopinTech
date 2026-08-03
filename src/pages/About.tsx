import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Target, Shield, TrendingUp, Zap, MapPin, CheckCircle } from "lucide-react";

const whyUs = [
  {
    icon: MapPin,
    title: "Germany-based (Marburg)",
    description: "Local presence with global expertise",
  },
  {
    icon: Zap,
    title: "Custom automation, not templates",
    description: "Tailored solutions for your unique needs",
  },
  {
    icon: Shield,
    title: "Secure & compliant systems",
    description: "GDPR-ready and enterprise-grade security",
  },
  {
    icon: TrendingUp,
    title: "ROI-focused solutions",
    description: "Measurable results that impact your bottom line",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Top in Tech | AI Automation Agency</title>
        <meta
          name="description"
          content="Learn about Top in Tech, the AI Automation Agency helping businesses stop wasting time on repetitive work and start using AI in a practical, profitable way."
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
                Building practical, revenue-driven AI systems for real businesses
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
                    Top in Tech was founded to help businesses stop wasting time on
                    repetitive work and start using AI in a practical, profitable
                    way.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We don't sell hype. We build real AI systems that work inside
                    your business, delivering measurable results from day one.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Based in Marburg, Germany, we combine German engineering
                    precision with cutting-edge AI technology to create
                    automation solutions that scale.
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

        {/* Mission Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To make AI automation{" "}
                <span className="text-primary font-semibold">simple</span>,{" "}
                <span className="text-primary font-semibold">affordable</span>,
                and{" "}
                <span className="text-primary font-semibold">powerful</span> for
                every business.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                Why <span className="gradient-text">Top in Tech</span>?
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyUs.map((item, index) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
                Our <span className="gradient-text">Values</span>
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Practical over Perfect",
                    description:
                      "We focus on solutions that work today, not theoretical AI that sounds impressive but delivers nothing.",
                  },
                  {
                    title: "Results First",
                    description:
                      "Every project starts with a clear ROI target. If we can't deliver value, we won't take it on.",
                  },
                  {
                    title: "Transparent Partnership",
                    description:
                      "No black boxes. We explain everything we build and train your team to manage it independently.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
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
