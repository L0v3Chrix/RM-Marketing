"use client";

import { motion } from "framer-motion";

interface Phase {
  number: number;
  title: string;
  duration: string;
  description: string;
  milestones: string[];
  price?: string;
  isActive?: boolean;
}

interface PhaseTimelineProps {
  phases?: Phase[];
  currentPhase?: number;
}

const defaultPhases: Phase[] = [
  {
    number: 1,
    title: "Pressure Test",
    duration: "Days 1-30",
    description: "Prove the model works",
    milestones: [
      "Chrix + Sarah selling full-time",
      "Database reactivation",
      "Target: $36K closed",
    ],
    price: "Progressive",
  },
  {
    number: 2,
    title: "Buildout Sprint",
    duration: "Days 31-120",
    description: "Build the infrastructure",
    milestones: [
      "Hire setters + closers",
      "Training program",
      "Systems + automation",
    ],
    price: "$36,000",
  },
  {
    number: 3,
    title: "Handoff",
    duration: "Day 120+",
    description: "Transfer ownership",
    milestones: [
      "Team running independently",
      "All SOPs documented",
      "Adam on content only",
    ],
    price: "Complete",
  },
];

export function PhaseTimeline({
  phases = defaultPhases,
  currentPhase = 1,
}: PhaseTimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop Timeline */}
      <div className="hidden md:block">
        {/* Progress Line */}
        <div className="relative mb-8">
          <div className="absolute top-4 left-0 right-0 h-1 bg-border rounded-full" />
          <motion.div
            className="absolute top-4 left-0 h-1 bg-green rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: `${((currentPhase - 1) / (phases.length - 1)) * 100}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Phase Markers */}
          <div className="relative flex justify-between">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 ${
                    phase.number <= currentPhase
                      ? "bg-green text-white"
                      : "bg-surface-elevated text-muted border-2 border-border"
                  }`}
                >
                  {phase.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              className={`rounded-xl p-6 ${
                phase.number === currentPhase
                  ? "bg-green/10 border-2 border-green"
                  : "bg-surface-elevated border border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <p className="text-muted text-sm">{phase.duration}</p>
                <h4 className="text-lg font-bold text-heading">{phase.title}</h4>
                {phase.price && (
                  <p className="text-green font-semibold mt-1">{phase.price}</p>
                )}
              </div>
              <p className="text-body text-sm text-center mb-4">{phase.description}</p>
              <ul className="space-y-2">
                {phase.milestones.map((milestone, mIndex) => (
                  <li key={mIndex} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-green mt-0.5">•</span>
                    {milestone}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden space-y-4">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.number}
            className={`rounded-xl p-4 ${
              phase.number === currentPhase
                ? "bg-green/10 border-2 border-green"
                : "bg-surface-elevated border border-border"
            }`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                  phase.number <= currentPhase
                    ? "bg-green text-white"
                    : "bg-surface text-muted border-2 border-border"
                }`}
              >
                {phase.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-heading">{phase.title}</h4>
                  {phase.price && (
                    <span className="text-green text-sm font-semibold">{phase.price}</span>
                  )}
                </div>
                <p className="text-muted text-sm mb-2">{phase.duration}</p>
                <ul className="space-y-1">
                  {phase.milestones.slice(0, 2).map((milestone, mIndex) => (
                    <li key={mIndex} className="flex items-start gap-2 text-xs text-muted">
                      <span className="text-green">•</span>
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
