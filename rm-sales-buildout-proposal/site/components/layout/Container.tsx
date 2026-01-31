"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
}

const sizeClasses = {
  narrow: "max-w-3xl", // 768px - text-heavy content
  default: "max-w-6xl", // 1152px - most sections
  wide: "max-w-7xl", // 1280px - full-width sections
  full: "max-w-none", // no max width
};

export function Container({
  children,
  size = "default",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
