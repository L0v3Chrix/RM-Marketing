"use client";

import { motion } from "framer-motion";
import { QuizAnswers } from "../hooks/useQuizState";
import { formatCurrency } from "../utils/calculations";

interface CurrentStateProps {
  answers: QuizAnswers;
  updateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
}

export function CurrentState({ answers, updateAnswer }: CurrentStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Let&apos;s see where you are
        </h2>
        <p className="text-text-secondary text-sm sm:text-base">
          We&apos;ll use your real numbers to show you what&apos;s possible.
        </p>
      </div>

      {/* Current Monthly Revenue */}
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <label className="text-sm font-medium text-text-primary">
            Current Monthly Revenue
          </label>
          <span className="text-base sm:text-lg font-bold text-accent whitespace-nowrap">
            {formatCurrency(answers.currentRevenue)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={500000}
          step={1000}
          value={answers.currentRevenue}
          onChange={(e) => updateAnswer('currentRevenue', Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>$0</span>
          <span>$500K</span>
        </div>
      </div>

      {/* Monthly Ad Spend */}
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <label className="text-sm font-medium text-text-primary">
            Monthly Ad Spend
          </label>
          <span className="text-base sm:text-lg font-bold text-text-secondary whitespace-nowrap">
            {formatCurrency(answers.adSpend)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={20000}
          step={100}
          value={answers.adSpend}
          onChange={(e) => updateAnswer('adSpend', Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>$0</span>
          <span>$20K</span>
        </div>
      </div>

      {/* Cost Per Lead */}
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <label className="text-sm font-medium text-text-primary">
            Cost Per Lead
          </label>
          <span className="text-base sm:text-lg font-bold text-text-secondary whitespace-nowrap">
            ${answers.costPerLead.toFixed(2)}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={100}
          step={0.5}
          value={answers.costPerLead}
          onChange={(e) => updateAnswer('costPerLead', Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>$1</span>
          <span>$100</span>
        </div>
        <p className="text-xs text-text-muted italic">
          Industry average: $50-85 | Your current: ${answers.costPerLead.toFixed(2)}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="bg-card rounded-xl p-4 mt-6">
        <p className="text-sm text-text-secondary">
          <span className="font-semibold">At your current spend:</span>{" "}
          You&apos;re generating roughly{" "}
          <span className="font-bold text-accent">
            {Math.round(answers.adSpend / answers.costPerLead)} leads/month
          </span>
        </p>
      </div>
    </motion.div>
  );
}
