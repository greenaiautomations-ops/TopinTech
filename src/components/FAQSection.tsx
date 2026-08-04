import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is our business data secure?",
    answer:
      "Yes. We build on infrastructure with enterprise-grade security and GDPR-compliant data handling by default. We never share your data with third parties, and every automation we build is scoped to only access what it needs.",
  },
  {
    question: "Do we need in-house technical staff to use this?",
    answer:
      "No. We handle setup, integration, and training. Most clients manage their AI systems day-to-day with no coding knowledge — we walk your team through everything and stay available for support after launch.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "It depends on scope. A single AI assistant or voice agent typically goes live in 1–3 weeks. Larger workflow automations across multiple systems can take 4–8 weeks. You'll get a concrete timeline during your free audit, before you commit to anything.",
  },
  {
    question: "What does this cost?",
    answer:
      "Every project is scoped to your business, so pricing varies by complexity — see the starting ranges below. The free audit call always comes first, so you know the investment before deciding whether to move forward.",
  },
  {
    question: "Are we locked into a long-term contract?",
    answer:
      "No. We're tool-agnostic and build systems your team can eventually run independently — we'd rather earn a long relationship through results than lock you into one.",
  },
  {
    question: "What if the automation doesn't work as expected?",
    answer:
      "We scope every project around a measurable outcome before we start, and we stay involved after launch to tune and fix issues. If something isn't delivering the agreed result, we work it until it does.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The questions every business asks before automating. If yours isn't here, ask us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl px-6 sm:px-8">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-base sm:text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
