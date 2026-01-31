"use client";

import { motion } from "framer-motion";
import { QuizAnswers } from "../hooks/useQuizState";
import { formatCurrency } from "../utils/calculations";

interface YourGoalProps {
  answers: QuizAnswers;
  updateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
}

const timelineOptions = [
  { value: 'immediately' as const, label: 'Immediately', description: 'Ready to start now' },
  { value: 'this_month' as const, label: 'This Month', description: 'Within 30 days' },
  { value: 'this_quarter' as const, label: 'This Quarter', description: 'Within 90 days' },
  { value: 'just_exploring' as const, label: 'Just Exploring', description: 'No timeline yet' },
];

export function YourGoal({ answers, updateAnswer }: YourGoalProps) {
  const gap = answers.targetRevenue - answers.currentRevenue;
  const growthMultiple = answers.targetRevenue / answers.currentRevenue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-2">
          Where do you want to be?
        </h2>
        <p className="text-body text-sm sm:text-base">
          Let&apos;s define your target and timeline.
        </p>
      </div>

      {/* Target Revenue */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-heading">
            Monthly Revenue Target
          </label>
          <span className="text-lg font-bold text-green">
            {formatCurrency(answers.targetRevenue)}
          </span>
        </div>
        <input
          type="range"
          min={50000}
          max={500000}
          step={5000}
          value={answers.targetRevenue}
          onChange={(e) => updateAnswer('targetRevenue', Number(e.target.value))}
          className="w-full h-3 bg-light rounded-lg appearance-none cursor-pointer accent-green"
        />
        <div className="flex justify-between text-xs text-muted">
          <span>$50K</span>
          <span>$500K</span>
        </div>
      </div>

      {/* Gap Visualization */}
      <div className="bg-tint-blue rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <p className="text-xs text-muted mb-1">Current</p>
            <p className="text-xl font-bold text-body">
              {formatCurrency(answers.currentRevenue)}
            </p>
          </div>
          <div className="flex-1 mx-4 relative">
            <div className="h-2 bg-light rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min((answers.currentRevenue / answers.targetRevenue) * 100, 100)}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <p className="text-xs font-medium text-blue whitespace-nowrap">
                {formatCurrency(gap)} gap
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted mb-1">Target</p>
            <p className="text-xl font-bold text-green">
              {formatCurrency(answers.targetRevenue)}
            </p>
          </div>
        </div>
        <p className="text-center text-sm text-body">
          That&apos;s{" "}
          <span className="font-bold text-green">{growthMultiple.toFixed(1)}x</span>{" "}
          growth ({formatCurrency(gap * 12)}/year)
        </p>
      </div>

      {/* Timeline Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-heading">
          How soon do you want to achieve this?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {timelineOptions.map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => updateAnswer('timeline', option.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                answers.timeline === option.value
                  ? 'border-green bg-tint-green'
                  : 'border-border bg-white hover:border-muted'
              }`}
            >
              <p className={`font-medium text-sm ${
                answers.timeline === option.value ? 'text-green' : 'text-heading'
              }`}>
                {option.label}
              </p>
              <p className="text-xs text-muted">{option.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
