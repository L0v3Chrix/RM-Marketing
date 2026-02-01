"use client";

import { FadeInOnScroll } from "@/components/animations";

export function ROIComparison() {
  return (
    <FadeInOnScroll>
      <div className="bg-slate-800/80 rounded-2xl p-4 md:p-6 border border-slate-700">
        <h3 className="text-white font-bold text-base md:text-lg text-center mb-6">
          ROI Comparison: 7.7X Growth
        </h3>

        <div className="space-y-4">
          {/* Investment Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm uppercase">Investment</span>
              <span className="text-white font-bold">~$50K</span>
            </div>
            <div className="h-8 md:h-10 bg-slate-700/50 rounded-lg overflow-hidden">
              <div className="h-full w-[13%] bg-blue-600/80 rounded-lg flex items-center justify-end pr-2">
              </div>
            </div>
          </div>

          {/* Return Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400 text-sm uppercase">Return</span>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded font-medium">
                  7.7x ROI
                </span>
                <span className="text-amber-400 font-bold">~$385K</span>
              </div>
            </div>
            <div className="h-8 md:h-10 bg-slate-700/50 rounded-lg overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-amber-600/80 to-amber-400/80 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-base">7.7x ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="flex justify-between mt-4 text-slate-500 text-xs">
          <span>$0</span>
          <span>$100K</span>
          <span>$200K</span>
          <span>$300K</span>
          <span>$400K</span>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
