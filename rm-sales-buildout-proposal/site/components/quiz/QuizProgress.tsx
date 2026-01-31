"use client";

import { motion } from "framer-motion";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
  visitedSteps?: Set<number>;
}

const stepLabels = [
  'Current State',
  'Funnel Metrics',
  'Offer Economics',
  'Your Goal',
  'Situation',
];

export function QuizProgress({
  currentStep,
  totalSteps,
  onStepClick,
  visitedSteps = new Set(),
}: QuizProgressProps) {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="h-1 bg-light rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-green"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;
          const isVisited = visitedSteps.has(step);
          const canClick = isVisited && onStepClick;

          return (
            <motion.button
              key={step}
              onClick={() => canClick && onStepClick(step)}
              disabled={!canClick}
              className={`flex flex-col items-center ${canClick ? 'cursor-pointer' : 'cursor-default'}`}
              whileHover={canClick ? { scale: 1.05 } : undefined}
              whileTap={canClick ? { scale: 0.95 } : undefined}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-green text-white'
                    : isCompleted
                    ? 'bg-green/20 text-green'
                    : isVisited
                    ? 'bg-light text-body'
                    : 'bg-light text-muted'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span
                className={`text-xs mt-1 hidden sm:block ${
                  isActive ? 'text-green font-medium' : 'text-muted'
                }`}
              >
                {stepLabels[i]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Mobile Step Label */}
      <p className="text-center text-sm text-body mt-3 sm:hidden">
        Step {currentStep} of {totalSteps}: {stepLabels[currentStep - 1]}
      </p>
    </div>
  );
}
