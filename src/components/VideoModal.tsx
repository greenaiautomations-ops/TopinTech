import { Play } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// PLACEHOLDER VIDEO: public/videos/demo-placeholder.mp4 is a short generated
// animated clip (not real footage) standing in until a real demo/brand video
// is ready. To swap it, drop the real file in public/videos/ and update the
// `src` below — everything else (button, modal, autoplay) stays the same.
interface VideoModalProps {
  triggerVariant?: ButtonProps["variant"];
  triggerSize?: ButtonProps["size"];
  className?: string;
}

export function VideoModal({ triggerVariant = "hero-outline", triggerSize = "xl", className }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size={triggerSize} className={className}>
          <Play className="w-5 h-5" />
          Watch Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-border bg-background">
        <DialogTitle className="sr-only">Top in Tech demo video</DialogTitle>
        <video
          src="/videos/demo-placeholder.mp4"
          className="w-full aspect-video"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
      </DialogContent>
    </Dialog>
  );
}
