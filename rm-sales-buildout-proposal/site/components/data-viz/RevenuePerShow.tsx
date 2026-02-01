"use client";

import { FadeInOnScroll } from "@/components/animations";
import { TrendingUp } from "lucide-react";

export function RevenuePerShow() {
  return (
    <FadeInOnScroll>
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl p-5 md:p-8 border-2 border-amber-500/30">
        <h3 className="text-white font-medium text-base md:text-lg text-center mb-4">
          Revenue Per Show
        </h3>
        
        {/* Big Number */}
        <div className="text-center mb-4">
          <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
            $1,250
          </span>
        </div>

        {/* Formula breakdown */}
        <div className="bg-slate-800/50 rounded-lg p-3 md:p-4 mb-4">
          <p className="text-slate-300 text-xs md:text-sm text-center leading-relaxed">
            (30% close × $500) + (30% × 20% upsell × $150) = <span className="text-amber-400 font-semibold">$195</span>
          </p>
        </div>

        {/* Trend indicator */}
        <div className="flex justify-center">
          <TrendingUp className="w-16 h-8 text-amber-500/60" />
        </div>
      </div>
    </FadeInOnScroll>
  );
}
