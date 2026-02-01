"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Coins, Activity, TrendingUp, ChevronDown, ArrowRight } from "lucide-react";

const paymentSteps = [
  {
    icon: Coins,
    amount: "$4K",
    label: "Upfront",
    sublabel: "Start of engagement",
    color: "from-warning to-warning/80",
    borderColor: "border-warning/50",
    textColor: "text-warning",
    description: "Skin in the game. Shows commitment.",
  },
  {
    icon: Activity,
    amount: "$4K",
    label: "at 30 Days",
    sublabel: "320 hours delivered",
    color: "from-accent to-accent/80",
    borderColor: "border-accent/50",
    textColor: "text-accent",
    description: "2 people × 40 hrs/week × 4 weeks of work.",
  },
  {
    icon: TrendingUp,
    amount: "$8K",
    label: "at 60 Days",
    sublabel: "Revenue flowing",
    color: "from-success to-success/80",
    borderColor: "border-success/50",
    textColor: "text-success",
    description: "By now, real money should be coming in.",
  },
];

export function ProgressivePayment() {
  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        <h3 className="text-text-primary font-bold text-base md:text-lg text-center mb-2">
          Phase 1: The Pressure Test
        </h3>
        <p className="text-text-muted text-sm text-center mb-6">
          Progressive payments tied to real progress
        </p>

        {/* Payment Flow - Vertical on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          {paymentSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-3">
              {/* Payment Card */}
              <div className={`w-full md:w-auto min-w-[160px] rounded-xl border-2 ${step.borderColor} bg-gradient-to-br ${step.color}/10 p-4 text-center`}>
                <step.icon className={`w-6 h-6 ${step.textColor} mx-auto mb-2`} />
                <div className={`text-2xl md:text-3xl font-bold ${step.textColor} mb-1`}>
                  {step.amount}
                </div>
                <div className="text-text-primary text-sm font-medium">
                  {step.label}
                </div>
                <div className="text-text-muted text-xs mt-1">
                  {step.sublabel}
                </div>
              </div>
              
              {/* Arrow - down on mobile, right on desktop */}
              {index < paymentSteps.length - 1 && (
                <>
                  <ChevronDown className="w-5 h-5 text-accent md:hidden" />
                  <ArrowRight className="w-5 h-5 text-accent hidden md:block" />
                </>
              )}
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 pt-4 border-t border-border-subtle text-center">
          <p className="text-text-primary font-semibold text-lg mb-1">
            Total Phase 1: <span className="text-success">$16,000</span>
          </p>
          <p className="text-text-muted text-sm">
            60 days to prove the model works
          </p>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
