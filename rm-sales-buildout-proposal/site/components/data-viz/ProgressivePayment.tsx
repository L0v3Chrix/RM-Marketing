"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, DollarSign } from "lucide-react";

interface ProgressivePaymentProps {
  deposit?: number;
  milestone?: number;
  milestoneThreshold?: number;
  bonusPercent?: number;
  targetRevenue?: number;
}

export function ProgressivePayment({
  deposit = 4000,
  milestone = 4000,
  milestoneThreshold = 20000,
  bonusPercent = 33,
  targetRevenue = 36000,
}: ProgressivePaymentProps) {
  const bonusAmount = Math.max(0, (targetRevenue - milestoneThreshold) * (bonusPercent / 100));
  const total = deposit + milestone + bonusAmount;

  const steps = [
    {
      number: 1,
      label: "Deposit",
      amount: deposit,
      description: "To start",
      color: "bg-green",
      icon: DollarSign,
    },
    {
      number: 2,
      label: `@ $${(milestoneThreshold / 1000).toFixed(0)}K`,
      amount: milestone,
      description: "Milestone hit",
      color: "bg-green",
      icon: Check,
    },
    {
      number: 3,
      label: `${bonusPercent}% Over`,
      amount: bonusPercent,
      description: `$${(milestoneThreshold / 1000).toFixed(0)}K`,
      color: "bg-gold",
      icon: ArrowRight,
      isPercent: true,
    },
  ];

  return (
    <div className="bg-surface-elevated rounded-2xl p-6 sm:p-8 border border-border">
      <div className="text-center mb-6">
        <p className="text-green text-sm font-medium uppercase tracking-wider mb-2">
          Phase 1: Progressive Performance
        </p>
        <p className="text-muted text-sm">Pay for results, not promises</p>
      </div>

      {/* Visual Flow */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 mb-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="flex items-center flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${step.color}/10 border-2 border-${step.color === "bg-gold" ? "gold" : "green"} flex items-center justify-center mb-2`}
              >
                <span className={`${step.color === "bg-gold" ? "text-gold" : "text-green"} font-bold text-lg`}>
                  {step.number}
                </span>
              </div>
              <p className={`text-xl sm:text-2xl font-bold ${step.color === "bg-gold" ? "text-gold" : "text-green"}`}>
                {step.isPercent ? `${step.amount}%` : `$${(step.amount / 1000).toFixed(0)}K`}
              </p>
              <p className="text-heading text-sm font-medium">{step.label}</p>
              <p className="text-muted text-xs">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted flex-shrink-0 mx-1 sm:mx-2" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Example Calculation */}
      <motion.div
        className="bg-navy rounded-xl p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-inverse-muted text-sm mb-3">
          Example @ ${(targetRevenue / 1000).toFixed(0)}K Target:
        </p>
        <div className="space-y-2">
          <div className="flex justify-between text-inverse-muted text-sm">
            <span>Deposit</span>
            <span>${deposit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-inverse-muted text-sm">
            <span>Milestone @ ${(milestoneThreshold / 1000).toFixed(0)}K</span>
            <span>${milestone.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-inverse-muted text-sm">
            <span>{bonusPercent}% of ${((targetRevenue - milestoneThreshold) / 1000).toFixed(0)}K</span>
            <span>${bonusAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-inverse font-bold pt-2 border-t border-white/10">
            <span>Total</span>
            <span className="text-green">${total.toLocaleString()}</span>
          </div>
        </div>
      </motion.div>

      {/* Key Point */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-green font-medium text-sm">
          You pay for performance. We only win when you win.
        </p>
      </motion.div>
    </div>
  );
}
