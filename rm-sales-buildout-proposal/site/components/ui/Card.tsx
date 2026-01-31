"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "highlight" | "problem" | "opportunity";
  className?: string;
  padding?: "default" | "large" | "compact";
}

const variantClasses = {
  default: cn(
    "bg-navy-card",
    "border border-border-subtle",
    "rounded-xl"
  ),
  highlight: cn(
    "bg-gradient-to-br from-accent-green/10 to-accent-green/5",
    "border border-accent-green/30",
    "rounded-xl"
  ),
  problem: cn(
    "bg-gradient-to-br from-accent-red/10 to-accent-red/5",
    "border-l-4 border-l-accent-red",
    "border-y border-r border-accent-red/20",
    "rounded-r-xl"
  ),
  opportunity: cn(
    "bg-gradient-to-br from-accent-blue/10 to-accent-blue/5",
    "border border-accent-blue/30",
    "rounded-xl"
  ),
};

const paddingClasses = {
  compact: "p-4",
  default: "p-6",
  large: "p-8",
};

export function Card({
  children,
  variant = "default",
  padding = "default",
  className,
}: CardProps) {
  return (
    <div
      className={cn(variantClasses[variant], paddingClasses[padding], className)}
    >
      {children}
    </div>
  );
}
