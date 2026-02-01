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
  const isYoursBetter = isHigherBetter ? yourPercent > industryPercent : yourPercent < industryPercent;
  
  return (
    <div className="space-y-2">
      <h4 className="text-white font-medium text-sm md:text-base text-center">{label}</h4>
      <div className="space-y-1.5">
        {/* Your Metrics */}
        <div className="relative">
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-400 text-xs">Your Metrics</span>
            <span className="text-amber-400 font-bold text-base md:text-lg">{yourValue}</span>
          </div>
          <div className="h-6 md:h-8 bg-slate-700/50 rounded overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded flex items-center justify-end pr-2 transition-all duration-1000"
              style={{ width: `${Math.min(yourPercent, 100)}%` }}
            >
            </div>
          </div>
        </div>
        
        {/* Industry Average */}
        <div className="relative">
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-500 text-xs">Industry Avg</span>
            <span className="text-slate-400 font-medium text-sm">{industryValue}</span>
          </div>
          <div className="h-4 md:h-5 bg-slate-700/30 rounded overflow-hidden">
            <div 
              className="h-full bg-slate-500/50 rounded transition-all duration-1000"
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
      <div className="bg-slate-800/80 rounded-2xl p-4 md:p-6 border border-slate-700">
        <h3 className="text-white font-bold text-base md:text-lg text-center mb-6">
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
        
        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-400 rounded"></div>
            <span className="text-slate-400 text-xs">Your Metrics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-500/50 rounded"></div>
            <span className="text-slate-400 text-xs">Industry Average</span>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
