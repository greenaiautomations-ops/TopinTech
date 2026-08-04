import { MessageCircle } from "lucide-react";

// Persistent contact affordance visible on every page, not just the footer —
// this is the "easy to contact" pattern SMB visitors expect from a service
// site now. Update the phone number here if it ever changes (kept in sync
// manually with Footer.tsx and Contact.tsx, which use the same number).
export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/4915216164830"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:scale-110 active:scale-100 transition-transform duration-300">
        <MessageCircle className="w-6 h-6" />
      </span>
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-card border border-border px-3 py-2 text-sm font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
        Chat with us
      </span>
    </a>
  );
}
