import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16",
  };

  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <img 
        src={logoImage} 
        alt="Green AI Solutions" 
        className={cn("w-auto object-contain", sizes[size])}
      />
    </Link>
  );
}
