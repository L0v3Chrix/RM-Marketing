"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "accent" | "glass" | "soft" | "coral";
  className?: string;
  padding?: "default" | "large" | "compact" | "none";
  hover?: boolean;
}

const variantClasses = {
  // Default - Clean card with soft shadow
  default: cn(
    "bg-white",
    "border border-border-subtle",
    "rounded-xl",
    "shadow-soft"
  ),
  // Elevated - More prominent with stronger shadow
  elevated: cn(
    "bg-white",
    "border border-border-subtle",
    "shadow-card",
    "rounded-xl"
  ),
  // Accent - Teal accent border (for CTAs)
  accent: cn(
    "bg-white",
    "border-2 border-cta/30",
    "rounded-xl",
    "shadow-soft"
  ),
  // Coral accent - Warm coral border
  coral: cn(
    "bg-white",
    "border-2 border-accent/30",
    "rounded-xl",
    "shadow-soft"
  ),
  // Soft - Very subtle, almost flat
  soft: cn(
    "bg-cream",
    "border border-border-subtle",
    "rounded-xl"
  ),
  // Glass - Frosted glass effect
  glass: cn(
    "bg-white/90",
    "backdrop-blur-lg",
    "border border-white/50",
    "rounded-xl",
    "shadow-soft"
  ),
};

const paddingClasses = {
  none: "",
  compact: "p-4 sm:p-5",
  default: "p-6 sm:p-8",
  large: "p-8 md:p-10 lg:p-12",
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
        hover && "transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

// Placeholder Image Component
interface PlaceholderImageProps {
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  text?: string;
  className?: string;
}

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[2/1]",
};

export function PlaceholderImage({
  aspectRatio = "video",
  text = "Photo Coming Soon",
  className,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "bg-[#e5e5e5] rounded-lg flex items-center justify-center",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <span className="text-[#9a9a9a] text-sm font-medium">{text}</span>
    </div>
  );
}
