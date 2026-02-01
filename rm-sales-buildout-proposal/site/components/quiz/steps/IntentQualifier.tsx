"use client";

import { motion } from "framer-motion";
import { QuizAnswers } from "../hooks/useQuizState";

interface IntentQualifierProps {
  answers: QuizAnswers;
  updateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
}

const questions = [
  {
    key: 'runningAds' as const,
    question: 'Are you currently running ads?',
    options: [
      { value: 'consistently' as const, label: 'Yes, consistently', icon: '✓' },
      { value: 'sometimes' as const, label: 'Sometimes', icon: '~' },
      { value: 'no' as const, label: 'No', icon: '✗' },
    ],
  },
  {
    key: 'salesTeam' as const,
    question: 'Who handles your sales calls?',
    options: [
      { value: 'full_team' as const, label: 'Full sales team', icon: '👥' },
      { value: 'just_me' as const, label: 'Just me', icon: '🙋' },
      { value: 'no_one' as const, label: 'No one right now', icon: '🚫' },
    ],
  },
  {
    key: 'bottleneck' as const,
    question: 'What\'s your biggest bottleneck?',
    options: [
      { value: 'not_enough_leads' as const, label: 'Not enough leads', icon: '📉' },
      { value: 'leads_dont_convert' as const, label: 'Leads don\'t convert', icon: '🔄' },
      { value: 'no_time_for_sales' as const, label: 'No time for sales', icon: '⏰' },
      { value: 'dont_know' as const, label: 'I don\'t know', icon: '❓' },
    ],
  },
];

export function IntentQualifier({ answers, updateAnswer }: IntentQualifierProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          What&apos;s your situation?
        </h2>
        <p className="text-text-secondary text-sm sm:text-base">
          This helps us show you the most relevant path forward.
        </p>
      </div>

      {questions.map((q, questionIndex) => (
        <motion.div
          key={q.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: questionIndex * 0.15 }}
          className="space-y-3"
        >
          <label className="text-sm font-medium text-text-primary">
            {q.question}
          </label>
          <div className={`grid gap-2 ${q.options.length > 3 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {q.options.map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateAnswer(q.key, option.value)}
                className={`p-3 sm:p-4 rounded-xl border-2 text-center transition-all min-h-[64px] ${
                  answers[q.key] === option.value
                    ? 'border-accent bg-accent/10'
                    : 'border-border bg-card hover:border-border-subtle'
                }`}
              >
                <span className="text-base sm:text-lg mb-1 block">{option.icon}</span>
                <p className={`text-[10px] sm:text-xs font-medium leading-tight ${
                  answers[q.key] === option.value ? 'text-accent' : 'text-text-secondary'
                }`}>
                  {option.label}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-elevated rounded-xl p-5 mt-6"
      >
        <p className="text-sm text-text-secondary mb-3">Your situation:</p>
        <div className="space-y-2 text-sm">
          {answers.runningAds === 'consistently' && (
            <p className="text-success">✓ Running ads consistently - great foundation</p>
          )}
          {answers.runningAds === 'sometimes' && (
            <p className="text-text-primary">~ Running ads sometimes - room to scale</p>
          )}
          {answers.runningAds === 'no' && (
            <p className="text-text-muted">✗ Not running ads yet - we can help</p>
          )}

          {answers.salesTeam === 'no_one' && (
            <p className="text-success">✓ No sales team - perfect fit for our service</p>
          )}
          {answers.salesTeam === 'just_me' && (
            <p className="text-success">✓ Handling sales alone - we can take that off your plate</p>
          )}
          {answers.salesTeam === 'full_team' && (
            <p className="text-text-primary">~ Full sales team - may need optimization focus</p>
          )}

          {answers.bottleneck === 'no_time_for_sales' && (
            <p className="text-success">✓ No time for sales - exactly what we solve</p>
          )}
          {answers.bottleneck === 'leads_dont_convert' && (
            <p className="text-success">✓ Conversion problem - our specialty</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
