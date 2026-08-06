import { IconType } from "react-icons";
import { SiClaude, SiGooglegemini, SiN8N, SiPerplexity, SiLangchain, SiZapier } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Database } from "lucide-react";

// Bundled SVG icons instead of hotlinked third-party images — these render
// reliably with zero network dependency (the previous version pulled from
// external CDNs and frequently failed to load). Pinecone has no icon in the
// available brand-icon sets, so it falls back to a generic database icon.
const tools: { name: string; Icon: IconType }[] = [
  { name: "OpenAI", Icon: TbBrandOpenai },
  { name: "Claude", Icon: SiClaude },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "n8n", Icon: SiN8N },
  { name: "Perplexity", Icon: SiPerplexity },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Pinecone", Icon: Database },
  { name: "Zapier", Icon: SiZapier },
];

export function ToolsSlider() {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-card/30">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground">
          Tool-agnostic. Business-first.{" "}
          <span className="text-primary">We choose what fits you best.</span>
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-scroll">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center overflow-hidden">
                  <tool.Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
