"use client";

import { clsx } from "clsx";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "metric" | "highlight";
  padding?: "none" | "small" | "medium" | "large";
  hover?: boolean;
}

const variantStyles = {
  default: "bg-card border border-border-subtle",
  elevated: "bg-elevated border border-border-subtle shadow-card",
  bordered: "bg-transparent border border-border",
  metric: "bg-card border border-border-subtle",
  highlight: "bg-gradient-to-br from-accent-muted to-transparent border border-accent/20",
};

const paddingStyles = {
  none: "",
  small: "p-4",
  medium: "p-6",
  large: "p-8",
};

export function Card({
  children,
  className,
  variant = "default",
  padding = "medium",
  hover = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl transition-all duration-200",
        variantStyles[variant],
        paddingStyles[padding],
        hover && "hover:border-border hover:bg-card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}

// Metric Card - for displaying key stats
interface MetricCardProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  comparison?: {
    value: string;
    label: string;
  };
  color?: "default" | "gold" | "green" | "warning";
  className?: string;
}

const colorStyles = {
  default: "text-text-primary",
  gold: "text-accent",
  green: "text-success",
  warning: "text-warning",
};

export function MetricCard({
  label,
  value,
  prefix,
  suffix,
  comparison,
  color = "default",
  className,
}: MetricCardProps) {
  return (
    <Card className={clsx("text-center", className)}>
      <p className={clsx("text-3xl sm:text-4xl font-bold tracking-tight", colorStyles[color])}>
        {prefix}
        {value}
        {suffix}
      </p>
      <p className="text-sm text-text-muted uppercase tracking-wider mt-2">{label}</p>
      {comparison && (
        <p className="text-xs text-text-subtle mt-3 pt-3 border-t border-border-subtle">
          <span className="text-text-muted">{comparison.value}</span> {comparison.label}
        </p>
      )}
    </Card>
  );
}

// Data Card - for displaying data silos
interface DataCardProps {
  title: string;
  metrics: readonly { readonly label: string; readonly value: string }[] | Array<{ label: string; value: string }>;
  note?: string;
  icon?: ReactNode;
  className?: string;
}

export function DataCard({ title, metrics, note, icon, className }: DataCardProps) {
  return (
    <Card variant="bordered" className={className}>
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center text-accent">
            {icon}
          </div>
        )}
        <h4 className="text-lg font-semibold text-text-primary">{title}</h4>
      </div>
      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-text-muted text-sm">{metric.label}</span>
            <span className="text-text-primary font-medium">{metric.value}</span>
          </div>
        ))}
      </div>
      {note && (
        <p className="text-xs text-text-subtle mt-4 pt-4 border-t border-border-subtle italic">
          {note}
        </p>
      )}
    </Card>
  );
}
