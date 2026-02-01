"use client";

import { FadeInOnScroll } from "@/components/animations";

export function ROIComparison() {
  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        <h3 className="text-text-primary font-bold text-base md:text-lg text-center mb-6">
          ROI Comparison: 7.7X Growth
        </h3>

        <div className="space-y-4">
          {/* Investment Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-muted text-sm uppercase">Investment</span>
              <span className="text-text-primary font-bold">~$50K</span>
            </div>
            <div className="h-8 md:h-10 bg-elevated rounded-lg overflow-hidden">
              <div className="h-full w-[13%] bg-text-muted/50 rounded-lg flex items-center justify-end pr-2">
              </div>
            </div>
          </div>

          {/* Return Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-muted text-sm uppercase">Return</span>
              <div className="flex items-center gap-2">
                <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded font-medium">
                  7.7x ROI
                </span>
                <span className="text-accent font-bold">~$385K</span>
              </div>
            </div>
            <div className="h-8 md:h-10 bg-elevated rounded-lg overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-accent/80 to-accent rounded-lg flex items-center justify-center">
                <span className="text-base font-bold text-sm md:text-base">7.7x ROI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="flex justify-between mt-4 text-text-muted text-xs">
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
