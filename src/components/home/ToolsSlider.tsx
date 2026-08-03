const tools = [
  { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { name: "Claude", logo: "https://registry.npmmirror.com/@anthropic-ai/sdk/latest/files/logo.svg" },
  { name: "Gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg" },
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "Perplexity", logo: "https://www.perplexity.ai/favicon.svg" },
  { name: "LangChain", logo: "https://registry.npmmirror.com/langchain/latest/files/docs/favicon.ico" },
  { name: "Pinecone", logo: "https://www.pinecone.io/favicon.svg" },
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-logo.svg" },
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
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-5 h-5 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
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
