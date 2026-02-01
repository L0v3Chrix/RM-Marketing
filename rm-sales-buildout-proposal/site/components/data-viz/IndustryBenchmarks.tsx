"use client";

import { FadeInOnScroll } from "@/components/animations";

interface BenchmarkBarProps {
  label: string;
  yourValue: string;
  industryValue: string;
  yourPercent: number;
  industryPercent: number;
  isHigherBetter?: boolean;
}

function BenchmarkBar({ label, yourValue, industryValue, yourPercent, industryPercent, isHigherBetter = true }: BenchmarkBarProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-text-primary font-medium text-sm md:text-base text-center">{label}</h4>
      <div className="space-y-1.5">
        {/* Your Metrics */}
        <div className="relative">
          <div className="flex justify-between items-center mb-1">
            <span className="text-text-muted text-xs">Your Metrics</span>
            <span className="text-accent font-bold text-base md:text-lg">{yourValue}</span>
          </div>
          <div className="h-6 md:h-8 bg-elevated rounded overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent/80 to-accent rounded flex items-center justify-end pr-2 transition-all duration-1000"
              style={{ width: `${Math.min(yourPercent, 100)}%` }}
            >
            </div>
          </div>
        </div>
        
        {/* Industry Average */}
        <div className="relative">
          <div className="flex justify-between items-center mb-1">
            <span className="text-text-muted text-xs">Industry Avg</span>
            <span className="text-text-muted font-medium text-sm">{industryValue}</span>
          </div>
          <div className="h-4 md:h-5 bg-elevated rounded overflow-hidden">
            <div 
              className="h-full bg-text-muted/30 rounded transition-all duration-1000"
              style={{ width: `${Math.min(industryPercent, 100)}%` }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryBenchmarks() {
  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        <h3 className="text-text-primary font-bold text-base md:text-lg text-center mb-6">
          Professional Industry Benchmarks
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
          <BenchmarkBar
            label="Booking Rate"
            yourValue="19.3%"
            industryValue="5%"
            yourPercent={100}
            industryPercent={26}
          />
          
          <BenchmarkBar
            label="Cost Per Lead (CPL)"
            yourValue="$28.40"
            industryValue="$100.00"
            yourPercent={28}
            industryPercent={100}
            isHigherBetter={false}
          />
          
          <BenchmarkBar
            label="LTV:CAC Ratio"
            yourValue="15.8x"
            industryValue="3x"
            yourPercent={100}
            industryPercent={19}
          />
        </div>
        
        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-border-subtle">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-accent/80 to-accent rounded"></div>
            <span className="text-text-muted text-xs">Your Metrics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-text-muted/30 rounded"></div>
            <span className="text-text-muted text-xs">Industry Average</span>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
