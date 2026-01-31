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
  animate?: boolean;
  decimals?: number;
  className?: string;
}

const colorClasses = {
  gold: "text-gold",
  green: "text-accent-green",
  blue: "text-accent-blue",
};

export function MetricCard({
  value,
  label,
  prefix = "",
  suffix = "",
  comparison,
  color = "gold",
  animate = true,
  decimals = 0,
  className,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "bg-navy-card border border-border-subtle rounded-xl p-6 md:p-8 text-center",
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
      <div className="text-text-secondary text-sm md:text-base font-medium mb-3">
        {label}
      </div>
      {comparison && (
        <div className="text-text-muted text-xs md:text-sm italic">
          <span className="text-text-tertiary">{comparison.label}:</span>{" "}
          <span className="text-text-muted">{comparison.value}</span>
        </div>
      )}
    </motion.div>
  );
}
