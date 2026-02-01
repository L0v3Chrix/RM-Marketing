"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "accent" | "glass";
  className?: string;
  padding?: "default" | "large" | "compact" | "none";
  hover?: boolean;
}

const variantClasses = {
  // Default - Subtle card on dark bg
  default: cn(
    "bg-card",
    "border border-border-subtle",
    "rounded-xl"
  ),
  // Elevated - Slightly more prominent
  elevated: cn(
    "bg-elevated",
    "border border-border",
    "shadow-md",
    "rounded-xl"
  ),
  // Accent - Teal accent border
  accent: cn(
    "bg-card",
    "border border-accent/30",
    "rounded-xl"
  ),
  // Glass - Frosted glass effect
  glass: cn(
    "bg-card/80",
    "backdrop-blur-lg",
    "border border-border-subtle",
    "rounded-xl"
  ),
};

const paddingClasses = {
  none: "",
  compact: "p-4",
  default: "p-6",
  large: "p-8 md:p-10",
};

export function Card({
  children,
  variant = "default",
  padding = "default",
  hover = false,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        hover && "transition-all duration-200 hover:border-accent/50 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
