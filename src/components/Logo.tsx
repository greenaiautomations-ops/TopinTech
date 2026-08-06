import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
// import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

// TEMPORARY: rendering a text wordmark until the new Top in Tech logo image
// is ready. To swap back to an image logo, uncomment the import above, and
// replace the <span> below with:
//   <img src={logoImage} alt="Top in Tech" className={cn("w-auto object-contain", sizes[size])} />
export function Logo({ className, size = "md" }: LogoProps) {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };

  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <span className={cn("font-display font-bold tracking-tight gradient-text", textSizes[size])}>
        Top in Tech
      </span>
    </Link>
  );
}
