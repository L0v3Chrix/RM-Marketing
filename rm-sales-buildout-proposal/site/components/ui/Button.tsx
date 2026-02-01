"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "default" | "large" | "small";
  fullWidth?: boolean;
  href?: string;
}

const variantClasses = {
  // Primary - Accent teal, clean and bold
  primary: cn(
    "bg-accent",
    "text-base font-semibold",
    "shadow-md",
    "hover:bg-accent-hover",
    "hover:shadow-lg",
    "hover:-translate-y-0.5",
    "active:translate-y-0",
    "rounded-lg"
  ),
  // Secondary - Subtle filled
  secondary: cn(
    "bg-card",
    "text-text-primary font-medium",
    "border border-border",
    "hover:bg-card-hover hover:border-border-subtle",
    "rounded-lg"
  ),
  // Ghost - Minimal
  ghost: cn(
    "bg-transparent",
    "text-text-secondary",
    "hover:text-text-primary hover:bg-subtle",
    "rounded-lg"
  ),
  // Outline - Border only
  outline: cn(
    "bg-transparent",
    "border border-border",
    "text-text-primary font-medium",
    "hover:bg-card hover:border-accent/50",
    "rounded-lg"
  ),
};

const sizeClasses = {
  small: "px-4 py-2 text-sm min-h-[36px]",
  default: "px-6 py-3 text-base min-h-[44px]",
  large: "px-8 py-4 text-lg min-h-[52px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      fullWidth = false,
      href,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2",
      "transition-all duration-200 ease-out",
      "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && "w-full",
      className
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
