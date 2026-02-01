"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: "base" | "elevated" | "card" | "gradient" | "subtle" | "cream" | "warm";
  padding?: "default" | "large" | "hero" | "compact";
  className?: string;
}

const backgroundClasses = {
  // Pure white
  base: "bg-base",
  // Light gray
  elevated: "bg-elevated",
  // Slightly darker
  card: "bg-card",
  // Gradient between tones
  gradient: "bg-gradient-to-b from-base via-elevated to-base",
  // Subtle gray
  subtle: "bg-subtle",
  // Warm cream - Born This Way Foundation style
  cream: "bg-cream",
  // Warm off-white
  warm: "bg-warm",
};

const paddingClasses = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  large: "py-20 md:py-32",
  hero: "py-24 md:py-40",
};

export function Section({
  children,
  id,
  background = "base",
  padding = "default",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </section>
  );
}
