"use client";

import { motion } from "framer-motion";
import { formatCurrency, formatNumber } from "../utils/calculations";

interface PathToGoalProps {
  currentRevenue: number;
  targetRevenue: number;
  requirements: {
    adSpendRequired: number;
    leadsNeeded: number;
    callsNeeded: number;
    appointmentsNeeded: number;
    showsNeeded: number;
    salesNeeded: number;
    callsPerDay: number;
    closersNeeded: number;
  };
}

export function PathToGoal({ currentRevenue, targetRevenue, requirements }: PathToGoalProps) {
  const gap = targetRevenue - currentRevenue;
  const annualGap = gap * 12;

  return (
    <div className="bg-card rounded-2xl border border-border-subtle p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
        Path to {formatCurrency(targetRevenue)}/month
      </h3>

      {/* Gap Visualization */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-text-secondary">Current</span>
          <span className="text-text-secondary">Target</span>
        </div>
        <div className="relative h-4 bg-elevated rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-text-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentRevenue / targetRevenue) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-y-0 bg-success/30 rounded-r-full"
            style={{ left: `${(currentRevenue / targetRevenue) * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${100 - (currentRevenue / targetRevenue) * 100}%` }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between text-xs text-text-muted mt-1">
          <span>{formatCurrency(currentRevenue)}</span>
          <span className="text-success font-medium">{formatCurrency(gap)} gap</span>
          <span>{formatCurrency(targetRevenue)}</span>
        </div>
      </div>

      {/* Requirements Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-elevated rounded-xl p-3 text-center"
        >
          <p className="text-2xl font-bold text-text-secondary">{formatCurrency(requirements.adSpendRequired)}</p>
          <p className="text-xs text-text-muted">Ad Spend/Month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-success/10 rounded-xl p-3 text-center"
        >
          <p className="text-2xl font-bold text-success">{formatNumber(requirements.leadsNeeded)}</p>
          <p className="text-xs text-text-muted">Leads/Month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-elevated rounded-xl p-3 text-center"
        >
          <p className="text-2xl font-bold text-text-secondary">{formatNumber(requirements.showsNeeded)}</p>
          <p className="text-xs text-text-muted">Shows/Month</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-elevated rounded-xl p-3 text-center"
        >
          <p className="text-2xl font-bold text-text-secondary">{formatNumber(requirements.salesNeeded)}</p>
          <p className="text-xs text-text-muted">Sales/Month</p>
        </motion.div>
      </div>

      {/* Daily Requirements */}
      <div className="bg-elevated rounded-xl p-4">
        <p className="text-sm text-text-secondary mb-3">To hit your target:</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xl font-bold text-success">{requirements.callsPerDay}</p>
            <p className="text-xs text-text-muted">Calls/Day</p>
          </div>
          <div>
            <p className="text-xl font-bold text-success">{requirements.closersNeeded}</p>
            <p className="text-xs text-text-muted">Closers Needed</p>
          </div>
        </div>
      </div>

      {/* Annual Impact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-center"
      >
        <p className="text-sm text-text-secondary">
          Closing this gap means{" "}
          <span className="font-bold text-success">{formatCurrency(annualGap)}/year</span>{" "}
          in additional revenue
        </p>
      </motion.div>
    </div>
  );
}
