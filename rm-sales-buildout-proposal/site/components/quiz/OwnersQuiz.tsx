"use client";

import { useState } from "react";
import { useQuizState } from "./hooks/useQuizState";
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
      <div className="min-h-screen bg-base flex flex-col">
        {/* Simple Header */}
        <header className="px-6 py-4">
          <p className="text-sm text-text-muted">
            <span className="font-medium text-text-primary">GHL Mastery</span> · Sales Proposal
          </p>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl"
          >
            {/* Content Frame */}
            <div className="bg-elevated rounded-2xl border border-border-subtle overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Illustration Side */}
                <div className="md:w-2/5 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent p-8 md:p-10 flex items-center justify-center">
                  <div className="relative">
                    {/* Abstract chart illustration */}
                    <div className="w-32 h-32 md:w-40 md:h-40 relative">
                      <div className="absolute inset-0 flex items-end justify-center gap-2">
                        <div className="w-6 bg-accent/30 rounded-t-sm animate-pulse" style={{ height: '40%' }} />
                        <div className="w-6 bg-accent/50 rounded-t-sm animate-pulse" style={{ height: '60%', animationDelay: '0.1s' }} />
                        <div className="w-6 bg-accent/70 rounded-t-sm animate-pulse" style={{ height: '80%', animationDelay: '0.2s' }} />
                        <div className="w-6 bg-accent rounded-t-sm animate-pulse" style={{ height: '100%', animationDelay: '0.3s' }} />
                      </div>
                      {/* Trend line */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                        <path 
                          d="M10 70 Q 30 65, 50 50 T 90 20" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round"
                          className="text-accent"
                          strokeDasharray="4 4"
                        />
                        <circle cx="90" cy="20" r="4" className="fill-accent" />
                      </svg>
                    </div>
                    <p className="text-center text-xs text-accent font-medium mt-4 tracking-wide uppercase">Revenue Analysis</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <h1 className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                    Interactive Calculator
                  </h1>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 leading-tight">
                    See Exactly Where Your Revenue Leaks
                  </h2>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    This tool analyzes your real numbers to show the gap between where you are and where you could be. Takes about 3 minutes.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      Your current revenue per show and cost per lead
                    </li>
                    <li className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      The exact levers that move the needle
                    </li>
                    <li className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      What it takes to hit your revenue target
                    </li>
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowIntro(false)}
                    className="inline-flex items-center justify-center gap-2 bg-accent text-text-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-hover transition-colors w-full sm:w-auto"
                  >
                    Let&apos;s See My Numbers
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-center text-xs text-text-subtle mt-6">
              Prepared for Adam & Brendan
            </p>
          </motion.div>
        </main>
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
            <div className="h-1.5 bg-card rounded-full overflow-hidden">
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
                  ? 'text-text-subtle cursor-not-allowed'
                  : 'text-text-secondary hover:bg-card'
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
              className="flex items-center gap-1 sm:gap-2 bg-accent text-text-dark px-4 sm:px-8 py-3 min-h-[48px] rounded-lg font-medium hover:bg-accent-hover transition-colors"
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
