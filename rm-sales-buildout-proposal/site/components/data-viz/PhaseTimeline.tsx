"use client";

import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { CheckCircle2, Building2, TrendingUp, Clock } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "PROOF",
    duration: "30 Days",
    status: "Completed",
    statusColor: "text-green-400",
    borderColor: "border-amber-400",
    bgColor: "from-amber-500/20 to-amber-600/10",
    icon: CheckCircle2,
    iconColor: "text-amber-400",
    description: "Validating core concepts and initial traction. Data-driven proof points established.",
  },
  {
    number: 2,
    title: "BUILD",
    duration: "90 Days",
    status: "In Progress",
    statusColor: "text-blue-400",
    borderColor: "border-blue-400",
    bgColor: "from-blue-500/20 to-blue-600/10",
    icon: Building2,
    iconColor: "text-blue-400",
    description: "Developing scalable infrastructure and core product. Focus on architecture and integration.",
    progress: "60%",
  },
  {
    number: 3,
    title: "SCALE",
    duration: "Ongoing",
    status: "Active",
    statusColor: "text-emerald-400",
    borderColor: "border-emerald-400",
    bgColor: "from-emerald-500/20 to-emerald-600/10",
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    description: "Expanding market reach and optimizing performance. Continuous growth and adaptation.",
  },
];

export function PhaseTimeline() {
  return (
    <FadeInOnScroll>
      <div className="bg-slate-800/80 rounded-2xl p-4 md:p-6 border border-slate-700">
        <h3 className="text-white font-bold text-base md:text-lg text-center mb-2">
          Strategic Three-Phase Development Timeline
        </h3>
        <p className="text-slate-400 text-sm text-center mb-6">
          From Validation to Sustainable Growth
        </p>

        {/* Timeline - Vertical on mobile, Horizontal on desktop */}
        <StaggerChildren className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
          {phases.map((phase, index) => (
            <StaggerItem key={index} className="flex-1">
              <div className={`relative rounded-xl border-2 ${phase.borderColor} bg-gradient-to-br ${phase.bgColor} p-4`}>
                {/* Phase Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <phase.icon className={`w-5 h-5 ${phase.iconColor}`} />
                    <span className="text-slate-400 text-xs uppercase">Phase {phase.number}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-slate-800/50 ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>

                {/* Title */}
                <h4 className={`text-xl md:text-2xl font-bold text-white mb-1`}>
                  {phase.title}
                </h4>
                
                {/* Duration */}
                <div className="flex items-center gap-1 mb-3">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="text-slate-400 text-xs">({phase.duration})</span>
                </div>

                {/* Progress bar for Phase 2 */}
                {phase.progress && (
                  <div className="mb-3">
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-400 rounded-full transition-all duration-1000"
                        style={{ width: phase.progress }}
                      ></div>
                    </div>
                    <span className="text-blue-400 text-xs mt-1">{phase.progress}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed">
                  {phase.description}
                </p>

                {/* Connector arrow - hidden on mobile, shown on desktop for non-last items */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Mobile connector */}
              {index < phases.length - 1 && (
                <div className="flex justify-center md:hidden py-2">
                  <svg className="w-4 h-4 text-slate-600 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </FadeInOnScroll>
  );
}
