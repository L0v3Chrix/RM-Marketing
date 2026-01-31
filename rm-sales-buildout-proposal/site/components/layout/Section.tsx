"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: "white" | "light" | "light-blue" | "navy" | "navy-gradient";
  padding?: "default" | "large" | "hero";
  className?: string;
}

const backgroundClasses = {
  // Light backgrounds (primary)
  white: "bg-white",
  light: "bg-light",
  "light-blue": "bg-light-blue",
  // Navy feature bands
  navy: "bg-navy navy-section",
  "navy-gradient": "bg-gradient-to-b from-navy to-navy-card navy-section",
};

const paddingClasses = {
  default: "py-12 md:py-24",
  large: "py-16 md:py-28",
  hero: "py-20 md:py-32",
};

export function Section({
  children,
  id,
  background = "white",
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
