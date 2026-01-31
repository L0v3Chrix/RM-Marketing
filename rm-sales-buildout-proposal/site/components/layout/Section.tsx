"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: "navy" | "midnight" | "gradient" | "card";
  padding?: "default" | "large" | "hero";
  className?: string;
}

const backgroundClasses = {
  navy: "bg-navy",
  midnight: "bg-navy-light",
  gradient: "bg-gradient-to-b from-navy to-navy-light",
  card: "bg-navy-card",
};

const paddingClasses = {
  default: "py-16 md:py-24",
  large: "py-20 md:py-32",
  hero: "py-24 md:py-40",
};

export function Section({
  children,
  id,
  background = "navy",
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
