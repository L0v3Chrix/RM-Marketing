"use client";

import { cn } from "@/lib/utils";
import { CountUp } from "@/components/animations";
import { motion } from "framer-motion";

interface MetricCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  comparison?: {
    value: string;
    label: string;
  };
  color?: "accent" | "success" | "secondary";
  theme?: "light" | "dark";
  animate?: boolean;
  decimals?: number;
  className?: string;
}

const colorClasses = {
  accent: "text-accent",
  success: "text-success",
  secondary: "text-text-secondary",
};

export function MetricCard({
  value,
  label,
  prefix = "",
  suffix = "",
  comparison,
  color = "success",
  theme = "dark",
  animate = true,
  decimals = 0,
  className,
}: MetricCardProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "rounded-2xl p-6 md:p-8 text-center",
        isDark
          ? "bg-card border border-border-subtle"
          : "bg-elevated border border-border",
        className
      )}
    >
      <div className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-2", colorClasses[color])}>
        {animate ? (
          <CountUp
            end={value}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            duration={1.5}
          />
        ) : (
          <>
            {prefix}
            {value.toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
            {suffix}
          </>
        )}
      </div>
      <div className="text-sm md:text-base font-medium mb-3 text-text-secondary">
        {label}
      </div>
      {comparison && (
        <div className="text-xs md:text-sm italic text-text-muted">
          <span>{comparison.label}:</span>{" "}
          <span>{comparison.value}</span>
        </div>
      )}
    </motion.div>
  );
}
