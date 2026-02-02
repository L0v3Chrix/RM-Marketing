"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: "base" | "elevated" | "card" | "gradient" | "surface" | "dark";
  padding?: "default" | "large" | "hero" | "compact" | "none";
  className?: string;
}

const backgroundClasses = {
  // Main dark background
  base: "bg-base",
  // Slightly lighter
  elevated: "bg-elevated",
  // Card-level 
  card: "bg-card",
  // Surface level
  surface: "bg-surface",
  // Darkest
  dark: "bg-dark",
  // Gradient between tones
  gradient: "bg-gradient-to-b from-base via-elevated to-base",
};

const paddingClasses = {
  none: "",
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
