"use client";

import { useState } from "react";
import { useQuizState } from "./hooks/useQuizState";
import { QuizProgress } from "./QuizProgress";
import { CurrentState, FunnelMetrics, OfferEconomics, YourGoal, IntentQualifier } from "./steps";
import { EducationalQuestion } from "./educational";
import { QuizResults } from "./results";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Lightbulb, Calculator, ArrowRight, BarChart3 } from "lucide-react";

interface OwnersQuizProps {
  onComplete?: () => void;
}

export function OwnersQuiz({ onComplete }: OwnersQuizProps) {
  const [showIntro, setShowIntro] = useState(true);
  const quizState = useQuizState();
  const { 
    currentStep, 
    isComplete, 
    answers, 
    updateAnswer, 
    nextStep, 
    prevStep, 
    totalSteps,
    getCurrentStepConfig,
    getCurrentEducationalQuestion,
    recordEducationalAnswer,
  } = quizState;

  const [educationalAnswered, setEducationalAnswered] = useState(false);

  // Show intro screen first
  if (showIntro) {
    return (
      <div className="min-h-screen bg-base flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-8 h-8 text-accent" />
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            See Exactly Where Your Revenue Leaks
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-lg mb-3 leading-relaxed">
            This interactive tool analyzes your real numbers to show you the gap between where you are and where you could be.
          </p>
          <p className="text-text-muted text-sm mb-8">
            Takes about 3 minutes. You&apos;ll learn a few surprising stats along the way.
          </p>

          {/* What you'll get */}
          <div className="bg-elevated rounded-xl p-5 mb-8 text-left border border-border-subtle">
            <p className="text-sm font-medium text-text-primary mb-3">What you&apos;ll discover:</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent">→</span>
                Your current revenue per show and cost per lead
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">→</span>
                The exact levers that move the needle
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">→</span>
                What it takes to hit your revenue target
              </li>
            </ul>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowIntro(false)}
            className="inline-flex items-center gap-2 bg-accent text-base px-6 sm:px-8 py-4 min-h-[56px] rounded-lg font-semibold text-base sm:text-lg hover:bg-accent-hover transition-colors"
          >
            Let&apos;s See My Numbers
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-xs text-text-muted mt-4">
            Prepared for Adam & Brendan | GHL Mastery
          </p>
        </motion.div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <QuizResults
        quizState={quizState}
        onContinue={() => onComplete?.()}
      />
    );
  }

  const stepConfig = getCurrentStepConfig();
  const isEducationalStep = stepConfig?.type === 'educational';
  const educationalQuestion = getCurrentEducationalQuestion();

  // Handle educational question completion
  const handleEducationalComplete = (questionId: string, userGuess: string, wasCorrect: boolean) => {
    recordEducationalAnswer(questionId, userGuess, wasCorrect);
    setEducationalAnswered(true);
    setTimeout(() => {
      nextStep();
      setEducationalAnswered(false);
    }, 300);
  };

  // Get user data for educational question personalization
  const userData: Record<string, number> = {
    currentRevenue: answers.currentRevenue,
    adSpend: answers.adSpend,
    costPerLead: answers.costPerLead,
    callAnswerRate: answers.callAnswerRate,
    callToBookingRate: answers.callToBookingRate,
    showRate: answers.showRate,
    closeRate: answers.closeRate,
    upsellRate: answers.upsellRate,
  };

  const renderStep = () => {
    // Educational step
    if (isEducationalStep && educationalQuestion) {
      return (
        <EducationalQuestion
          key={educationalQuestion.id}
          question={educationalQuestion}
          userData={userData}
          onComplete={handleEducationalComplete}
        />
      );
    }

    // Data collection steps
    switch (stepConfig?.dataStep) {
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

  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-base flex flex-col">
      {/* Header with Progress */}
      <div className="sticky top-0 z-10 bg-base/95 backdrop-blur-md border-b border-border-subtle px-4 py-4 sm:py-6">
        <div className="max-w-2xl mx-auto">
          {/* Step Type Indicator */}
          <div className="flex items-center justify-center gap-2 mb-3">
            {isEducationalStep ? (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-warning/10 rounded-full border border-warning/20">
                <Lightbulb className="w-4 h-4 text-warning" />
                <span className="text-xs font-medium text-warning">Quick Question</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
                <Calculator className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium text-accent">Your Numbers</span>
              </div>
            )}
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="h-1.5 bg-elevated rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-text-muted">Step {currentStep} of {totalSteps}</span>
              <span className="text-xs text-text-muted">{progressPercent}% complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 sm:py-12">
        <div className="max-w-lg mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Footer */}
      {!isEducationalStep && (
        <div className="sticky bottom-0 bg-base/95 backdrop-blur-md border-t border-border-subtle px-4 py-4 sm:py-6">
          <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
            {/* Back Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 min-h-[48px] rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'text-text-muted cursor-not-allowed'
                  : 'text-text-secondary hover:bg-elevated'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back</span>
            </motion.button>

            {/* Step Counter (Mobile) */}
            <span className="text-sm text-text-muted sm:hidden">
              {currentStep} / {totalSteps}
            </span>

            {/* Next/Complete Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={nextStep}
              className="flex items-center gap-1 sm:gap-2 bg-accent text-base px-4 sm:px-8 py-3 min-h-[48px] rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              {currentStep === totalSteps ? (
                <>
                  <span className="text-sm sm:text-base">See Results</span>
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">Continue</span>
                  <span className="sm:hidden text-sm">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
