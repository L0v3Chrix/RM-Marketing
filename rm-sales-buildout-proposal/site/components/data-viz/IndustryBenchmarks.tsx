"use client";

import { motion } from "framer-motion";
import { Trophy, TrendingUp } from "lucide-react";

interface BenchmarkItem {
  label: string;
  yourValue: number;
  industryMin: number;
  industryMax: number;
  format: "percent" | "currency" | "ratio";
  higherIsBetter?: boolean;
}

interface IndustryBenchmarksProps {
  benchmarks?: BenchmarkItem[];
  title?: string;
}

const defaultBenchmarks: BenchmarkItem[] = [
  {
    label: "Lead-to-Appointment",
    yourValue: 19.3,
    industryMin: 3,
    industryMax: 5,
    format: "percent",
    higherIsBetter: true,
  },
  {
    label: "Cost Per Lead",
    yourValue: 6.30,
    industryMin: 50,
    industryMax: 85,
    format: "currency",
    higherIsBetter: false,
  },
  {
    label: "LTV:CAC Ratio",
    yourValue: 15.8,
    industryMin: 3,
    industryMax: 3,
    format: "ratio",
    higherIsBetter: true,
  },
  {
    label: "Show Rate",
    yourValue: 59,
    industryMin: 60,
    industryMax: 75,
    format: "percent",
    higherIsBetter: true,
  },
];

function formatValue(value: number, format: string): string {
  switch (format) {
    case "percent":
      return `${value}%`;
    case "currency":
      return `$${value.toFixed(2)}`;
    case "ratio":
      return `${value}x`;
    default:
      return value.toString();
  }
}

function getPercentile(
  yourValue: number,
  industryMin: number,
  industryMax: number,
  higherIsBetter: boolean
): { percentile: string; isExceptional: boolean } {
  if (higherIsBetter) {
    if (yourValue >= industryMax * 3) return { percentile: "Top 1%", isExceptional: true };
    if (yourValue >= industryMax * 2) return { percentile: "Top 5%", isExceptional: true };
    if (yourValue >= industryMax) return { percentile: "Top 10%", isExceptional: true };
    if (yourValue >= industryMin) return { percentile: "Above Avg", isExceptional: false };
    return { percentile: "Below Avg", isExceptional: false };
  } else {
    if (yourValue <= industryMin / 10) return { percentile: "Top 1%", isExceptional: true };
    if (yourValue <= industryMin / 5) return { percentile: "Top 5%", isExceptional: true };
    if (yourValue <= industryMin / 2) return { percentile: "Top 10%", isExceptional: true };
    if (yourValue <= industryMax) return { percentile: "Above Avg", isExceptional: false };
    return { percentile: "Below Avg", isExceptional: false };
  }
}

export function IndustryBenchmarks({
  benchmarks = defaultBenchmarks,
  title = "Your Performance vs. Industry",
}: IndustryBenchmarksProps) {
  return (
    <div className="bg-navy rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
          <Trophy className="w-5 h-5 text-gold" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-inverse">{title}</h3>
      </div>

      <div className="space-y-6">
        {benchmarks.map((benchmark, index) => {
          const { percentile, isExceptional } = getPercentile(
            benchmark.yourValue,
            benchmark.industryMin,
            benchmark.industryMax,
            benchmark.higherIsBetter ?? true
          );

          // Calculate bar width (normalized to 100%)
          const maxReference = benchmark.higherIsBetter
            ? Math.max(benchmark.yourValue, benchmark.industryMax) * 1.2
            : benchmark.industryMax * 1.5;

          const yourWidth = benchmark.higherIsBetter
            ? (benchmark.yourValue / maxReference) * 100
            : ((maxReference - benchmark.yourValue) / maxReference) * 100;

          const industryWidth = benchmark.higherIsBetter
            ? (benchmark.industryMax / maxReference) * 100
            : ((maxReference - benchmark.industryMin) / maxReference) * 100;

          return (
            <motion.div
              key={benchmark.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-inverse-muted text-sm">{benchmark.label}</span>
                <div className="flex items-center gap-2">
                  {isExceptional && (
                    <span className="px-2 py-0.5 bg-green/20 text-green text-xs rounded-full font-medium">
                      {percentile}
                    </span>
                  )}
                  <span className="text-inverse font-bold">
                    {formatValue(benchmark.yourValue, benchmark.format)}
                  </span>
                </div>
              </div>

              {/* Comparison Bars */}
              <div className="space-y-1">
                {/* Your value bar */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-inverse-muted w-12">You</span>
                  <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full flex items-center justify-end pr-2 ${
                        isExceptional ? "bg-green" : "bg-gold"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(yourWidth, 100)}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-white text-xs font-medium">
                        {formatValue(benchmark.yourValue, benchmark.format)}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Industry bar */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-inverse-muted w-12">Industry</span>
                  <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-blue/50 rounded-full flex items-center justify-end pr-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(industryWidth, 100)}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-white/80 text-xs">
                        {benchmark.industryMin === benchmark.industryMax
                          ? formatValue(benchmark.industryMin, benchmark.format)
                          : `${formatValue(benchmark.industryMin, benchmark.format)}-${formatValue(benchmark.industryMax, benchmark.format)}`}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <motion.div
        className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <TrendingUp className="w-4 h-4 text-green" />
        <p className="text-green text-sm font-medium">
          Your funnel outperforms industry in 3 of 4 key metrics
        </p>
      </motion.div>
    </div>
  );
}
