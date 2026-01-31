"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "highlight" | "problem" | "opportunity" | "inverse";
  className?: string;
  padding?: "default" | "large" | "compact";
}

const variantClasses = {
  // Default - Clean white card
  default: cn(
    "bg-white",
    "border border-border",
    "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)]",
    "rounded-2xl"
  ),
  // Highlight - Success/positive (light green tint)
  highlight: cn(
    "bg-tint-green",
    "border border-green/20",
    "rounded-2xl"
  ),
  // Problem - Alert/warning (light red tint)
  problem: cn(
    "bg-tint-red",
    "border-l-4 border-l-red",
    "border-y border-r border-red/20",
    "rounded-r-2xl"
  ),
  // Opportunity - Info/blue (light blue tint)
  opportunity: cn(
    "bg-tint-blue",
    "border border-blue/20",
    "rounded-2xl"
  ),
  // Inverse - For navy sections
  inverse: cn(
    "bg-navy-card",
    "border border-border-dark",
    "rounded-2xl"
  ),
};

const paddingClasses = {
  compact: "p-5",
  default: "p-6 md:p-7",
  large: "p-8 md:p-10",
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
