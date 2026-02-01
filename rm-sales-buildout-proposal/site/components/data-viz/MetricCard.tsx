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
  color?: "gold" | "green" | "blue";
  theme?: "light" | "dark";
  animate?: boolean;
  decimals?: number;
  className?: string;
}

const colorClasses = {
  gold: "text-amber",
  green: "text-green",
  blue: "text-slate",
};

export function MetricCard({
  value,
  label,
  prefix = "",
  suffix = "",
  comparison,
  color = "green",
  theme = "light",
  animate = true,
  decimals = 0,
  className,
}: MetricCardProps) {
  const isLight = theme === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "rounded-2xl p-6 md:p-8 text-center",
        isLight
          ? "bg-white border border-border-light shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
          : "bg-navy-card border border-border-dark",
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
      <div className={cn(
        "text-sm md:text-base font-medium mb-3",
        isLight ? "text-text-body" : "text-text-inverse-secondary"
      )}>
        {label}
      </div>
      {comparison && (
        <div className={cn(
          "text-xs md:text-sm italic",
          isLight ? "text-text-muted" : "text-text-inverse-muted"
        )}>
          <span className={isLight ? "text-text-muted" : "text-text-inverse-muted"}>
            {comparison.label}:
          </span>{" "}
          <span>{comparison.value}</span>
        </div>
      )}
    </motion.div>
  );
}
