"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Coins, Target, TrendingUp, ArrowRight, ChevronDown } from "lucide-react";

const paymentSteps = [
  {
    icon: Coins,
    amount: "$4K",
    label: "Deposit",
    sublabel: "Initial Payment",
    color: "from-amber-500 to-amber-600",
    borderColor: "border-amber-400/50",
    textColor: "text-amber-400",
  },
  {
    icon: Target,
    amount: "$4K",
    label: "at $20K Milestone",
    sublabel: "Progress Payment",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-400/50",
    textColor: "text-blue-400",
  },
  {
    icon: TrendingUp,
    amount: "33%",
    label: "over $20K",
    sublabel: "Final Balance",
    color: "from-emerald-500 to-emerald-600",
    borderColor: "border-emerald-400/50",
    textColor: "text-emerald-400",
  },
];

export function ProgressivePayment() {
  return (
    <FadeInOnScroll>
      <div className="bg-slate-800/80 rounded-2xl p-4 md:p-6 border border-slate-700">
        <h3 className="text-white font-bold text-base md:text-lg text-center mb-6">
          Phase 1: Progressive Performance Pricing
        </h3>

        {/* Payment Flow - Vertical on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          {paymentSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-3">
              {/* Payment Card */}
              <div className={`w-full md:w-auto min-w-[140px] rounded-xl border-2 ${step.borderColor} bg-gradient-to-br ${step.color}/10 p-4 text-center`}>
                <step.icon className={`w-6 h-6 ${step.textColor} mx-auto mb-2`} />
                <div className={`text-2xl md:text-3xl font-bold ${step.textColor} mb-1`}>
                  {step.amount}
                </div>
                <div className="text-white text-sm font-medium">
                  {step.label}
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  {step.sublabel}
                </div>
              </div>
              
              {/* Arrow - down on mobile, right on desktop */}
              {index < paymentSteps.length - 1 && (
                <>
                  <ChevronDown className="w-5 h-5 text-blue-400 md:hidden" />
                  <ArrowRight className="w-5 h-5 text-blue-400 hidden md:block" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 pt-4 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            You pay for results. If we hit $36K in 30 days, your total Phase 1 cost is ~$13K.
          </p>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
