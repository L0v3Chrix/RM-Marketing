"use client";

import { FadeInOnScroll } from "@/components/animations";

export function RevenueGap() {
  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        <h3 className="text-text-primary font-bold text-base md:text-lg text-center mb-6">
          Monthly Revenue Gap Analysis
        </h3>

        {/* Visual comparison */}
        <div className="relative h-48 md:h-64 mb-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 w-8 md:w-12 flex flex-col justify-between text-right pr-2">
            <span className="text-text-muted text-xs">60K</span>
            <span className="text-text-muted text-xs">50K</span>
            <span className="text-text-muted text-xs">40K</span>
            <span className="text-text-muted text-xs">30K</span>
            <span className="text-text-muted text-xs">20K</span>
            <span className="text-text-muted text-xs">10K</span>
            <span className="text-text-muted text-xs">0K</span>
          </div>
          
          {/* Chart area */}
          <div className="absolute left-10 md:left-14 right-0 top-0 bottom-8 flex items-end gap-4 md:gap-8 justify-center">
            {/* Current Revenue Bar */}
            <div className="flex flex-col items-center">
              <div className="relative w-16 md:w-24 flex flex-col items-center">
                {/* Label above bar */}
                <div className="absolute -top-8 bg-elevated rounded px-2 py-0.5">
                  <span className="text-text-primary text-xs font-medium">$20K/mo</span>
                </div>
                {/* Bar */}
                <div 
                  className="w-full bg-gradient-to-t from-text-muted/60 to-text-muted/40 rounded-t transition-all duration-1000"
                  style={{ height: '33%' }}
                ></div>
              </div>
              <span className="text-text-muted text-xs mt-2 text-center uppercase">Current<br/>Revenue</span>
            </div>

            {/* Gap Visualization */}
            <div className="flex flex-col items-center justify-end h-full pb-6">
              <div className="relative">
                <div className="bg-accent/10 rounded px-3 py-1 md:px-4 md:py-2 border border-accent/30">
                  <span className="text-accent font-bold text-sm md:text-base">$30K</span>
                  <span className="text-accent/80 text-xs block">OPPORTUNITY GAP</span>
                </div>
                {/* Arrow */}
                <svg className="w-full h-6 text-accent/50" viewBox="0 0 100 24">
                  <path d="M10 20 L50 4 L90 20" stroke="currentColor" strokeWidth="2" fill="none" />
                  <polygon points="90,20 85,14 95,14" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Target Revenue Bar */}
            <div className="flex flex-col items-center">
              <div className="relative w-16 md:w-24 flex flex-col items-center">
                {/* Label above bar */}
                <div className="absolute -top-8 bg-accent/80 rounded px-2 py-0.5">
                  <span className="text-base text-xs font-medium">$50K/mo</span>
                </div>
                {/* Bar */}
                <div 
                  className="w-full bg-gradient-to-t from-accent/80 to-accent rounded-t transition-all duration-1000"
                  style={{ height: '83%' }}
                ></div>
              </div>
              <span className="text-text-muted text-xs mt-2 text-center uppercase">Target<br/>Revenue</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 border-t border-border-subtle">
          <p className="text-text-secondary text-sm">
            Gap represents potential monthly revenue increase.
          </p>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
