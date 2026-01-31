"use client";

import { motion } from "framer-motion";

type IntentLevel = "BROWSING" | "LEARNING" | "EVALUATING" | "READY_TO_BUY" | "URGENT";

interface IntentGaugeProps {
  score: number;
  classification: IntentLevel;
  showLabels?: boolean;
}

const intentColors: Record<IntentLevel, string> = {
  BROWSING: "#94A3B8",
  LEARNING: "#3B82F6",
  EVALUATING: "#D4A574",
  READY_TO_BUY: "#22C55E",
  URGENT: "#EF4444",
};

const intentLabels: Record<IntentLevel, string> = {
  BROWSING: "Just Looking",
  LEARNING: "Gathering Info",
  EVALUATING: "Comparing Options",
  READY_TO_BUY: "Ready to Buy",
  URGENT: "Urgent Need",
};

export function IntentGauge({
  score,
  classification,
  showLabels = true,
}: IntentGaugeProps) {
  // Calculate rotation: -90deg (left) to 90deg (right) for 0-100
  const rotation = -90 + (score / 100) * 180;
  const color = intentColors[classification];

  return (
    <div className="flex flex-col items-center">
      {/* Gauge Container */}
      <div className="relative w-48 h-24 sm:w-64 sm:h-32">
        {/* Background Arc */}
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full"
          style={{ overflow: "visible" }}
        >
          {/* Gray background arc */}
          <path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke="#1E293B"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Colored segments */}
          {/* BROWSING: 0-15 */}
          <path
            d="M 10 100 A 90 90 0 0 1 25.5 53.5"
            fill="none"
            stroke={intentColors.BROWSING}
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.3"
          />
          {/* LEARNING: 16-30 */}
          <path
            d="M 25.5 53.5 A 90 90 0 0 1 55 22"
            fill="none"
            stroke={intentColors.LEARNING}
            strokeWidth="16"
            opacity="0.3"
          />
          {/* EVALUATING: 31-50 */}
          <path
            d="M 55 22 A 90 90 0 0 1 100 10"
            fill="none"
            stroke={intentColors.EVALUATING}
            strokeWidth="16"
            opacity="0.3"
          />
          {/* READY_TO_BUY: 51-75 */}
          <path
            d="M 100 10 A 90 90 0 0 1 160 35"
            fill="none"
            stroke={intentColors.READY_TO_BUY}
            strokeWidth="16"
            opacity="0.3"
          />
          {/* URGENT: 76-100 */}
          <path
            d="M 160 35 A 90 90 0 0 1 190 100"
            fill="none"
            stroke={intentColors.URGENT}
            strokeWidth="16"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Active arc up to current score */}
          <motion.path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke={color}
            strokeWidth="16"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: score / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Needle */}
        <motion.div
          className="absolute bottom-0 left-1/2 origin-bottom"
          style={{ width: 4, height: 70, marginLeft: -2 }}
          initial={{ rotate: -90 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{ background: `linear-gradient(to top, ${color}, transparent)` }}
          />
          <div
            className="absolute bottom-0 left-1/2 w-4 h-4 -ml-2 rounded-full"
            style={{ backgroundColor: color }}
          />
        </motion.div>

        {/* Center score display */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 text-center">
          <motion.div
            className="text-3xl sm:text-4xl font-bold"
            style={{ color }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {score}
          </motion.div>
          <p className="text-muted text-xs">Intent Score</p>
        </div>
      </div>

      {/* Classification Label */}
      <motion.div
        className="mt-6 px-4 py-2 rounded-full"
        style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-semibold text-sm" style={{ color }}>
          {intentLabels[classification]}
        </span>
      </motion.div>

      {/* Labels */}
      {showLabels && (
        <div className="flex justify-between w-full max-w-xs mt-4 text-xs text-muted">
          <span>Browsing</span>
          <span>Learning</span>
          <span>Evaluating</span>
          <span>Ready</span>
          <span>Urgent</span>
        </div>
      )}
    </div>
  );
}
