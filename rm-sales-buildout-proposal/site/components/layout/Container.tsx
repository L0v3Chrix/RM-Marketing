"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "narrow" | "default" | "wide" | "full";
  className?: string;
}

const sizeClasses = {
  narrow: "max-w-3xl", // 768px - FAQ, text-heavy content
  default: "max-w-5xl", // 1024px - most sections
  wide: "max-w-[1200px]", // 1200px - hero, features
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
        "mx-auto w-full px-6 md:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
