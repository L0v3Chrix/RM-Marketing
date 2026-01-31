"use client";

import { useQuizState } from "./hooks/useQuizState";
import { QuizProgress } from "./QuizProgress";
import { CurrentState, FunnelMetrics, OfferEconomics, YourGoal, IntentQualifier } from "./steps";
import { QuizResults } from "./results";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OwnersQuizProps {
  onComplete?: () => void;
}

export function OwnersQuiz({ onComplete }: OwnersQuizProps) {
  const quizState = useQuizState();
  const { currentStep, isComplete, answers, updateAnswer, nextStep, prevStep, goToStep, visitedSteps } = quizState;

  if (isComplete) {
    return (
      <QuizResults
        quizState={quizState}
        onContinue={() => onComplete?.()}
      />
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CurrentState answers={answers} updateAnswer={updateAnswer} />;
      case 2:
        return <FunnelMetrics answers={answers} updateAnswer={updateAnswer} />;
      case 3:
        return <OfferEconomics answers={answers} updateAnswer={updateAnswer} />;
      case 4:
        return <YourGoal answers={answers} updateAnswer={updateAnswer} />;
      case 5:
        return <IntentQualifier answers={answers} updateAnswer={updateAnswer} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Progress */}
      <div className="sticky top-0 z-10 bg-white border-b border-border px-4 py-4 sm:py-6">
        <div className="max-w-2xl mx-auto">
          <QuizProgress
            currentStep={currentStep}
            totalSteps={5}
            onStepClick={goToStep}
            visitedSteps={visitedSteps}
          />
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 sm:py-12">
        <div className="max-w-lg mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div key={currentStep}>
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 bg-white border-t border-border px-4 py-4 sm:py-6">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-4">
          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
              currentStep === 1
                ? 'text-muted cursor-not-allowed'
                : 'text-body hover:bg-light'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </motion.button>

          {/* Step Counter (Mobile) */}
          <span className="text-sm text-muted sm:hidden">
            {currentStep} / 5
          </span>

          {/* Next/Complete Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={nextStep}
            className="flex items-center gap-2 bg-green text-white px-6 sm:px-8 py-3 rounded-xl font-medium hover:bg-green/90 transition-colors"
          >
            {currentStep === 5 ? (
              <>
                <span>See My Results</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Continue</span>
                <span className="sm:hidden">Next</span>
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
