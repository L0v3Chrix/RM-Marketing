"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large" | "small";
  fullWidth?: boolean;
  href?: string;
}

const variantClasses = {
  primary: cn(
    "bg-gradient-to-br from-gold to-[#B8956A]",
    "text-navy font-semibold",
    "shadow-[0_4px_20px_rgba(212,165,116,0.3)]",
    "hover:shadow-[0_6px_24px_rgba(212,165,116,0.4)]",
    "hover:-translate-y-0.5",
    "active:translate-y-0"
  ),
  secondary: cn(
    "bg-transparent",
    "border-2 border-gold",
    "text-gold font-semibold",
    "hover:bg-gold hover:text-navy"
  ),
  ghost: cn(
    "bg-transparent",
    "border border-border-subtle",
    "text-text-secondary",
    "hover:border-text-muted hover:text-text-primary"
  ),
};

const sizeClasses = {
  small: "px-4 py-2 text-sm rounded-md",
  default: "px-6 py-3 text-base rounded-lg",
  large: "px-8 py-4 text-lg rounded-lg",
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
      "inline-flex items-center justify-center",
      "transition-all duration-200 ease-out",
      "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy",
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
