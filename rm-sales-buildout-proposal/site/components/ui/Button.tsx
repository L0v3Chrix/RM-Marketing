"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "default" | "large" | "small";
  fullWidth?: boolean;
  href?: string;
}

const variantClasses = {
  // Primary - Green pill CTA
  primary: cn(
    "bg-green",
    "text-white font-semibold",
    "shadow-[0_4px_14px_-3px_rgba(34,197,94,0.4)]",
    "hover:bg-green-dark",
    "hover:shadow-[0_6px_20px_-3px_rgba(34,197,94,0.5)]",
    "hover:-translate-y-0.5",
    "active:translate-y-0",
    "rounded-full"
  ),
  // Secondary - Dark navy outline
  secondary: cn(
    "bg-transparent",
    "border-2 border-navy",
    "text-navy font-semibold",
    "hover:bg-navy hover:text-white",
    "rounded-full"
  ),
  // Ghost - Subtle for light backgrounds
  ghost: cn(
    "bg-transparent",
    "border border-border",
    "text-body",
    "hover:border-muted hover:bg-light",
    "rounded-lg"
  ),
  // Inverse - For navy sections
  inverse: cn(
    "bg-green",
    "text-white font-semibold",
    "shadow-[0_4px_14px_-3px_rgba(34,197,94,0.4)]",
    "hover:bg-green-dark",
    "hover:shadow-[0_6px_20px_-3px_rgba(34,197,94,0.5)]",
    "hover:-translate-y-0.5",
    "active:translate-y-0",
    "rounded-full"
  ),
};

const sizeClasses = {
  small: "px-5 py-2.5 text-sm min-h-[40px]",
  default: "px-7 py-3.5 text-base min-h-[48px]",
  large: "px-9 py-4 text-lg min-h-[56px]",
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
      "focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-white",
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
