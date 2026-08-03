import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Zoraiz Fazal",
    role: "Founder",
    description:
      "AI strategist and automation architect with a passion for building practical, scalable AI systems that drive real business results.",
    image: null,
  },
  {
    name: "Sibtain Muhammad",
    role: "Co-Founder & Architecture Lead",
    description:
      "Expert in cloud infrastructure, security, and scalable AI deployments. Designs robust system architectures for enterprise solutions.",
    image: null,
  },
  {
    name: "Alina Schmidt",
    role: "Customer Support",
    description:
      "Client success manager ensuring smooth onboarding, support, and long-term satisfaction.",
    image: null,
  },
];

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Green AI | Meet the Experts</title>
        <meta
          name="description"
          content="Meet the team behind Green AI. AI strategists, engineers, and customer success experts dedicated to your success."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Meet Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                The experts behind your AI transformation
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div
                    key={member.name}
                    className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="font-display text-2xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="font-display text-xl font-semibold mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-4">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Want to Join Our <span className="gradient-text">Team</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals passionate about AI
                and automation. If that's you, we'd love to hear from you.
              </p>
              <a
                href="mailto:greenaiautomations@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <Mail className="w-4 h-4" />
                greenaiautomations@gmail.com
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Team;
