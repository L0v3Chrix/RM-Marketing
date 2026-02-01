"use client";

import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { CheckCircle2, Building2, TrendingUp, Clock } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "PRESSURE TEST",
    duration: "30 Days",
    status: "Active",
    statusColor: "text-accent",
    borderColor: "border-accent",
    bgColor: "from-accent/20 to-accent/5",
    icon: CheckCircle2,
    iconColor: "text-accent",
    description: "320 hours of focused work: database reactivation, cold calling, warm lead follow-up, and Phase 2 prep.",
  },
  {
    number: 2,
    title: "BUILD",
    duration: "90 Days",
    status: "In Progress",
    statusColor: "text-info",
    borderColor: "border-info",
    bgColor: "from-info/20 to-info/5",
    icon: Building2,
    iconColor: "text-info",
    description: "Developing scalable infrastructure and core product. Focus on architecture and integration.",
    progress: "60%",
  },
  {
    number: 3,
    title: "SCALE",
    duration: "Ongoing",
    status: "Active",
    statusColor: "text-success",
    borderColor: "border-success",
    bgColor: "from-success/20 to-success/5",
    icon: TrendingUp,
    iconColor: "text-success",
    description: "Expanding market reach and optimizing performance. Continuous growth and adaptation.",
  },
];

export function PhaseTimeline() {
  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        <h3 className="text-text-primary font-bold text-base md:text-lg text-center mb-2">
          Strategic Three-Phase Development Timeline
        </h3>
        <p className="text-text-muted text-sm text-center mb-6">
          From Validation to Sustainable Growth
        </p>

        {/* Timeline */}
        <StaggerChildren className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
          {phases.map((phase, index) => (
            <StaggerItem key={index} className="flex-1">
              <div className={`relative rounded-xl border-2 ${phase.borderColor} bg-gradient-to-br ${phase.bgColor} p-4`}>
                {/* Phase Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <phase.icon className={`w-5 h-5 ${phase.iconColor}`} />
                    <span className="text-text-muted text-xs uppercase">Phase {phase.number}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-elevated ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-1">
                  {phase.title}
                </h4>
                
                {/* Duration */}
                <div className="flex items-center gap-1 mb-3">
                  <Clock className="w-3 h-3 text-text-muted" />
                  <span className="text-text-muted text-xs">({phase.duration})</span>
                </div>

                {/* Progress bar for Phase 2 */}
                {phase.progress && (
                  <div className="mb-3">
                    <div className="h-1.5 bg-elevated rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-info rounded-full transition-all duration-1000"
                        style={{ width: phase.progress }}
                      ></div>
                    </div>
                    <span className="text-info text-xs mt-1">{phase.progress}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-text-muted text-xs leading-relaxed">
                  {phase.description}
                </p>

                {/* Connector arrow */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-border" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Mobile connector */}
              {index < phases.length - 1 && (
                <div className="flex justify-center md:hidden py-2">
                  <svg className="w-4 h-4 text-border transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
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
