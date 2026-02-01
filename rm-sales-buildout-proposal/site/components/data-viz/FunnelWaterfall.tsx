"use client";

import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";

const funnelStages = [
  { label: "Leads", value: 2000, displayValue: "2,000", percent: 100, drop: null },
  { label: "Calls", value: 2000, displayValue: "2,000", percent: 100, drop: null },
  { label: "Persons Reached", value: 600, displayValue: "600", percent: 30, drop: "-27.7%" },
  { label: "Appointments", value: 240, displayValue: "240", percent: 12, drop: "-14.3%" },
  { label: "Shows", value: 141, displayValue: "141", percent: 7, drop: "-12.7%" },
  { label: "Sales", value: 42, displayValue: "42", percent: 2.1, drop: "-2.3%" },
  { label: "Upsells", value: 8, displayValue: "8", percent: 0.4, drop: "-0.8%" },
];

export function FunnelWaterfall() {
  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-accent/60 rounded-full"></div>
            <div className="w-2 h-2 bg-accent/80 rounded-full"></div>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          <span className="text-text-muted text-sm">Q4 Performance</span>
        </div>
        
        <h3 className="text-text-primary font-bold text-base md:text-lg mb-4 md:mb-6">
          Sales Funnel Overview
        </h3>

        {/* Funnel Stages */}
        <StaggerChildren className="space-y-2 md:space-y-3">
          {funnelStages.map((stage, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center gap-2 md:gap-3">
                {/* Label */}
                <div className="w-24 sm:w-28 md:w-32 flex-shrink-0">
                  <span className="text-text-muted text-[11px] sm:text-xs md:text-sm uppercase tracking-wide block truncate">
                    {stage.label}:
                  </span>
                  <span className="text-accent font-semibold text-[11px] sm:text-xs md:text-sm">
                    {stage.displayValue}
                  </span>
                </div>
                
                {/* Bar */}
                <div className="flex-1 relative min-w-0">
                  <div className="h-6 md:h-8 bg-elevated rounded overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent/60 to-accent rounded transition-all duration-700 flex items-center justify-end pr-2"
                      style={{ width: `${Math.max(stage.percent, 5)}%` }}
                    >
                      <span className="text-base text-[10px] md:text-xs font-medium hidden sm:inline">
                        {stage.displayValue}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Drop indicator */}
                {stage.drop && (
                  <div className="w-12 md:w-16 flex-shrink-0 text-right">
                    <span className="text-error text-[11px] md:text-xs font-medium">
                      {stage.drop}
                    </span>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Footer Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-6 pt-4 border-t border-border-subtle">
          <div className="flex items-center gap-2 bg-elevated rounded-lg px-3 py-1.5">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-text-muted text-xs">Conversion Rate:</span>
            <span className="text-accent font-semibold text-xs">2.1%</span>
          </div>
          <div className="flex items-center gap-2 bg-elevated rounded-lg px-3 py-1.5">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-text-muted text-xs">Avg. Deal:</span>
            <span className="text-accent font-semibold text-xs">$1,200</span>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
