import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "AI Assistants",
  "AI Voice Agents",
  "Workflow Automation",
  "AI Image & Video",
  "AI Consultancy",
  "Web & Mobile Apps",
  "Other",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          submitted_at: new Date().toISOString(),
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Top in Tech | Get Your Free AI Audit</title>
        <meta
          name="description"
          content="Book your free AI automation consultation. We'll identify 3 automations that can save you time and money. Based in Marburg, Germany."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 hero-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Free AI Audit Included
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in animation-delay-200">
                Let's <span className="gradient-text">Talk</span>
              </h1>
              <p className="text-xl text-muted-foreground opacity-0 animate-fade-in animation-delay-400">
                Book your free AI automation consultation
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Ready to transform your business with AI? Fill out the form
                    and we'll get back to you within 24 hours with your free AI
                    automation audit.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          Marburg, Germany
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:greenaiautomations@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          greenaiautomations@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a
                          href="tel:+4915216164830"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +49 (0)152 16164830
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a
                          href="https://wa.me/4915216164830"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
                    <h3 className="font-display font-semibold mb-4">
                      What to Expect
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Free 30-minute consultation call",
                        "Personalized AI automation audit",
                        "3 actionable automation opportunities",
                        "Clear ROI projections",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-8 rounded-2xl border border-border">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold mb-3">
                        Message Received!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within
                        24 hours with your free AI audit.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="bg-background"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="bg-background"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Company
                        </label>
                        <Input
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Service Interested In
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            setFormData({ ...formData, service: value })
                          }
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your business and what you'd like to automate..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="bg-background min-h-[120px]"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="glow"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
