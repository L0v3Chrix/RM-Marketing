"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: "base" | "elevated" | "card" | "gradient" | "subtle";
  padding?: "default" | "large" | "hero";
  className?: string;
}

const backgroundClasses = {
  base: "bg-base",
  elevated: "bg-elevated",
  card: "bg-card",
  gradient: "bg-gradient-to-b from-base via-elevated to-base",
  subtle: "bg-subtle",
};

const paddingClasses = {
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
