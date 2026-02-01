"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface RevenueGapChartProps {
  currentRevenue?: number;
  targetRevenue?: number;
  label?: string;
}

export function RevenueGapChart({
  currentRevenue = 36000,
  targetRevenue = 100000,
  label = "Monthly Revenue",
}: RevenueGapChartProps) {
  const gap = targetRevenue - currentRevenue;
  const annualGap = gap * 12;
  const currentPercent = (currentRevenue / targetRevenue) * 100;

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className="bg-surface-elevated rounded-2xl p-6 sm:p-8 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-heading">Revenue Gap Analysis</h3>
        <span className="text-muted text-sm">{label}</span>
      </div>

      {/* Gap Visualization */}
      <div className="relative mb-8">
        {/* Labels above bars */}
        <div className="flex justify-between mb-2 text-sm">
          <div className="text-muted">Current State</div>
          <div className="text-muted">Target State</div>
        </div>

        {/* Combined bar */}
        <div className="h-12 sm:h-16 bg-surface rounded-xl overflow-hidden relative">
          {/* Current revenue bar */}
          <motion.div
            className="absolute left-0 top-0 h-full bg-blue rounded-l-xl flex items-center justify-center"
            initial={{ width: 0 }}
            whileInView={{ width: `${currentPercent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-white font-bold text-sm sm:text-base">
              {formatCurrency(currentRevenue)}
            </span>
          </motion.div>

          {/* Gap section */}
          <motion.div
            className="absolute top-0 h-full bg-red/20 border-2 border-dashed border-red/50 flex items-center justify-center"
            style={{ left: `${currentPercent}%`, right: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-red font-bold text-sm sm:text-base">
              {formatCurrency(gap)} GAP
            </span>
          </motion.div>
        </div>

        {/* Target indicator */}
        <div className="flex justify-end mt-2">
          <div className="flex items-center gap-2 text-green">
            <TrendingUp className="w-4 h-4" />
            <span className="font-bold">{formatCurrency(targetRevenue)}</span>
          </div>
        </div>
      </div>

      {/* Annual Potential */}
      <motion.div
        className="bg-green/10 border border-green/30 rounded-xl p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-3">
          <TrendingUp className="w-5 h-5 text-green" />
          <p className="text-heading font-medium">Annual Growth Potential</p>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl sm:text-4xl font-bold text-green">
            +{formatCurrency(annualGap)}
          </span>
          <span className="text-muted text-sm">/year</span>
        </div>
        <p className="text-muted text-sm mt-2">
          {formatCurrency(gap)}/month × 12 months = Additional revenue within reach
        </p>
      </motion.div>

      {/* Breakdown */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl font-bold text-blue">
            {formatCurrency(currentRevenue)}
          </p>
          <p className="text-muted text-xs">Current</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl font-bold text-red">
            +{formatCurrency(gap)}
          </p>
          <p className="text-muted text-xs">Gap</p>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl font-bold text-green">
            {formatCurrency(targetRevenue)}
          </p>
          <p className="text-muted text-xs">Target</p>
        </motion.div>
      </div>
    </div>
  );
}
