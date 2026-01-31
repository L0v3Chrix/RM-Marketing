"use client";

import { motion } from "framer-motion";
import { QuizAnswers } from "../hooks/useQuizState";
import { formatPercent } from "../utils/calculations";

interface FunnelMetricsProps {
  answers: QuizAnswers;
  updateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
}

const metrics = [
  {
    key: 'callAnswerRate' as const,
    label: 'Answer Rate',
    description: 'Of calls made, how many pick up?',
    default: 0.30,
    industry: '25-35%',
  },
  {
    key: 'callToBookingRate' as const,
    label: 'Booking Rate',
    description: 'Of answers, how many book?',
    default: 0.40,
    industry: '30-50%',
  },
  {
    key: 'showRate' as const,
    label: 'Show Rate',
    description: 'Of booked, how many show up?',
    default: 0.59,
    industry: '60-75%',
  },
  {
    key: 'closeRate' as const,
    label: 'Close Rate',
    description: 'Of shows, how many buy?',
    default: 0.30,
    industry: '20-40%',
  },
  {
    key: 'upsellRate' as const,
    label: 'Upsell Rate',
    description: 'Of buyers, how many take upsell?',
    default: 0.20,
    industry: '15-30%',
  },
];

export function FunnelMetrics({ answers, updateAnswer }: FunnelMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-2">
          Your Funnel Performance
        </h2>
        <p className="text-body text-sm sm:text-base">
          These conversion rates determine your revenue per lead.
        </p>
      </div>

      {metrics.map((metric, index) => (
        <motion.div
          key={metric.key}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <div>
              <label className="text-sm font-medium text-heading">
                {metric.label}
              </label>
              <p className="text-xs text-muted">{metric.description}</p>
            </div>
            <span className="text-lg font-bold text-green">
              {formatPercent(answers[metric.key])}
            </span>
          </div>
          <input
            type="range"
            min={0.05}
            max={0.95}
            step={0.01}
            value={answers[metric.key]}
            onChange={(e) => updateAnswer(metric.key, Number(e.target.value))}
            className="w-full h-3 bg-light rounded-lg appearance-none cursor-pointer accent-green"
          />
          <p className="text-xs text-muted text-right">
            Industry: {metric.industry}
          </p>
        </motion.div>
      ))}

      {/* Funnel Preview */}
      <div className="bg-navy rounded-xl p-4 mt-6">
        <p className="text-sm text-inverse-muted mb-3 text-center font-medium">
          Your Lead-to-Appointment Rate
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold text-green">
            {formatPercent(answers.callAnswerRate * answers.callToBookingRate)}
          </span>
          <span className="text-inverse-muted text-sm">
            (Industry: 3-5%)
          </span>
        </div>
      </div>
    </motion.div>
  );
}
