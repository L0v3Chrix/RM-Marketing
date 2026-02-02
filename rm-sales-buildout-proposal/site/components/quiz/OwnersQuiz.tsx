"use client";

import { useState } from "react";
import { useQuizState } from "./hooks/useQuizState";
import { IntentQualifier } from "./steps";
import { QuizResults } from "./results";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Rocket, Target, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

interface OwnersQuizProps {
  onComplete?: () => void;
}

export function OwnersQuiz({ onComplete }: OwnersQuizProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [quizStep, setQuizStep] = useState(1);
  const quizState = useQuizState();
  const { 
    isComplete, 
    answers, 
    updateAnswer,
    completeQuiz,
  } = quizState;

  // GHL Mastery branded intro screen
  if (showIntro) {
    return (
      <div className="min-h-screen bg-base flex flex-col">
        {/* GHL Mastery Header */}
        <header className="px-6 py-4 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            {/* GHL Mastery Logo - Orange/Gold gradient circle with rocket */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center shadow-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-text-primary text-lg tracking-tight">GHL Mastery</p>
              <p className="text-xs text-[#F7931E] font-medium">Sales Buildout Proposal</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl"
          >
            {/* Content Frame - GHL Mastery Orange/Gold gradient accent */}
            <div className="bg-elevated rounded-2xl border border-[#F7931E]/30 overflow-hidden shadow-xl">
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#FFB347]" />
              
              <div className="p-8 md:p-12 text-center">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#F7931E]/30">
                  <Target className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-[#F7931E] text-sm font-bold uppercase tracking-widest mb-4">
                  Quick Qualification
                </h1>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 leading-tight">
                  Is This Proposal Right For You?
                </h2>

                <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                  Answer 3 quick questions to see if you&apos;re the right fit for our sales buildout service. Takes 30 seconds.
                </p>

                {/* Value Props - GHL Mastery orange accent */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  <div className="p-4 bg-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                    <Zap className="w-6 h-6 text-[#F7931E] mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-primary">Instant Clarity</p>
                    <p className="text-xs text-text-muted mt-1">Know if this fits you</p>
                  </div>
                  <div className="p-4 bg-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                    <Target className="w-6 h-6 text-[#F7931E] mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-primary">Custom Insights</p>
                    <p className="text-xs text-text-muted mt-1">Based on your situation</p>
                  </div>
                  <div className="p-4 bg-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                    <CheckCircle2 className="w-6 h-6 text-[#F7931E] mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-primary">No Fluff</p>
                    <p className="text-xs text-text-muted mt-1">Straight to the point</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowIntro(false)}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#F7931E]/30 transition-all w-full sm:w-auto"
                >
                  Let&apos;s Find Out
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Footer note */}
            <p className="text-center text-xs text-text-subtle mt-6">
              Prepared for <span className="text-[#F7931E]">Adam & Brendan</span> · GHL Mastery
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

  // Simplified 3-step qualifier (no sliders/calculators - just buyer intent questions)
  const totalQuizSteps = 3;
  const progressPercent = Math.round((quizStep / totalQuizSteps) * 100);

  const handleNext = () => {
    if (quizStep >= totalQuizSteps) {
      completeQuiz();
    } else {
      setQuizStep(quizStep + 1);
    }
  };

  const handleBack = () => {
    if (quizStep > 1) {
      setQuizStep(quizStep - 1);
    }
  };

  const renderQuizStep = () => {
    switch (quizStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                What&apos;s your current situation?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base">
                Let&apos;s see where you&apos;re starting from.
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-text-primary">
                Are you currently running ads?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'consistently' as const, label: 'Yes, consistently', icon: '🚀' },
                  { value: 'sometimes' as const, label: 'Sometimes', icon: '📊' },
                  { value: 'no' as const, label: 'Not yet', icon: '🎯' },
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => updateAnswer('runningAds', option.value)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      answers.runningAds === option.value
                        ? 'border-[#F7931E] bg-[#F7931E]/10'
                        : 'border-border bg-card hover:border-[#F7931E]/50'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{option.icon}</span>
                    <p className={`text-xs font-medium ${
                      answers.runningAds === option.value ? 'text-[#F7931E]' : 'text-text-secondary'
                    }`}>
                      {option.label}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-text-primary">
                Who handles your sales calls?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'full_team' as const, label: 'Full team', icon: '👥' },
                  { value: 'just_me' as const, label: 'Just me', icon: '🙋' },
                  { value: 'no_one' as const, label: 'No one', icon: '🚫' },
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => updateAnswer('salesTeam', option.value)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      answers.salesTeam === option.value
                        ? 'border-[#F7931E] bg-[#F7931E]/10'
                        : 'border-border bg-card hover:border-[#F7931E]/50'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{option.icon}</span>
                    <p className={`text-xs font-medium ${
                      answers.salesTeam === option.value ? 'text-[#F7931E]' : 'text-text-secondary'
                    }`}>
                      {option.label}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                What&apos;s holding you back?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base">
                Identify your biggest bottleneck.
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-text-primary">
                What&apos;s your #1 challenge right now?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'not_enough_leads' as const, label: 'Not enough leads coming in', icon: '📉', desc: 'Need more pipeline' },
                  { value: 'leads_dont_convert' as const, label: 'Leads don\'t convert', icon: '🔄', desc: 'Pipeline but no sales' },
                  { value: 'no_time_for_sales' as const, label: 'No time for sales', icon: '⏰', desc: 'Too busy to follow up' },
                  { value: 'dont_know' as const, label: 'Not sure', icon: '🤔', desc: 'Need help diagnosing' },
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => updateAnswer('bottleneck', option.value)}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${
                      answers.bottleneck === option.value
                        ? 'border-[#F7931E] bg-[#F7931E]/10'
                        : 'border-border bg-card hover:border-[#F7931E]/50'
                    }`}
                  >
                    <span className="text-2xl mb-2 block">{option.icon}</span>
                    <p className={`text-sm font-semibold mb-1 ${
                      answers.bottleneck === option.value ? 'text-[#F7931E]' : 'text-text-primary'
                    }`}>
                      {option.label}
                    </p>
                    <p className="text-xs text-text-muted">{option.desc}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                How urgently do you need this solved?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base">
                Be honest — this helps us prioritize.
              </p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-text-primary">
                When do you want to fix this?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'immediately' as const, label: 'Right now — I\'m ready to move', icon: '🔥', highlight: true },
                  { value: 'this_month' as const, label: 'This month — it\'s a priority', icon: '📅', highlight: false },
                  { value: 'this_quarter' as const, label: 'This quarter — planning ahead', icon: '🗓️', highlight: false },
                  { value: 'just_exploring' as const, label: 'Just exploring for now', icon: '👀', highlight: false },
                ].map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => updateAnswer('timeline', option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                      answers.timeline === option.value
                        ? 'border-[#F7931E] bg-[#F7931E]/10'
                        : option.highlight 
                          ? 'border-[#F7931E]/30 bg-[#F7931E]/5 hover:border-[#F7931E]'
                          : 'border-border bg-card hover:border-[#F7931E]/50'
                    }`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <p className={`text-sm font-semibold ${
                      answers.timeline === option.value ? 'text-[#F7931E]' : 'text-text-primary'
                    }`}>
                      {option.label}
                    </p>
                    {answers.timeline === option.value && (
                      <CheckCircle2 className="w-5 h-5 text-[#F7931E] ml-auto" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-elevated rounded-xl p-5 border border-[#F7931E]/20">
              <p className="text-sm font-semibold text-[#F7931E] mb-3">Your Situation Summary:</p>
              <div className="space-y-2 text-sm">
                {answers.salesTeam === 'no_one' && (
                  <p className="text-success flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    No sales team — perfect fit for our service
                  </p>
                )}
                {answers.salesTeam === 'just_me' && (
                  <p className="text-success flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Handling sales alone — we can take that off your plate
                  </p>
                )}
                {answers.bottleneck === 'no_time_for_sales' && (
                  <p className="text-success flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    No time for sales — exactly what we solve
                  </p>
                )}
                {answers.bottleneck === 'leads_dont_convert' && (
                  <p className="text-success flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Conversion problem — our specialty
                  </p>
                )}
                {(answers.timeline === 'immediately' || answers.timeline === 'this_month') && (
                  <p className="text-[#F7931E] flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Ready to move — let&apos;s show you the plan
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-base flex flex-col">
      {/* GHL Mastery branded header */}
      <div className="sticky top-0 z-10 bg-base/95 backdrop-blur-md border-b border-border-subtle px-4 py-4">
        <div className="max-w-2xl mx-auto">
          {/* Logo + Progress */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-text-primary">GHL Mastery</span>
            </div>
            <span className="text-xs text-text-muted">
              Question {quizStep} of {totalQuizSteps}
            </span>
          </div>
          
          {/* Progress Bar - GHL Mastery orange */}
          <div className="relative">
            <div className="h-2 bg-card rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 sm:py-12">
        <div className="max-w-lg mx-auto w-full">
          <AnimatePresence mode="wait">
            {renderQuizStep()}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 bg-base/95 backdrop-blur-md border-t border-border-subtle px-4 py-4 sm:py-6">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-3">
          {/* Back Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBack}
            disabled={quizStep === 1}
            className={`flex items-center gap-2 px-4 py-3 min-h-[48px] rounded-lg font-medium transition-all ${
              quizStep === 1
                ? 'text-text-subtle cursor-not-allowed'
                : 'text-text-secondary hover:bg-card'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back</span>
          </motion.button>

          {/* Next/Complete Button - GHL Mastery gradient */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="flex items-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-6 sm:px-8 py-3 min-h-[48px] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#F7931E]/30 transition-all"
          >
            {quizStep === totalQuizSteps ? (
              <>
                <span>See My Proposal</span>
                <Rocket className="w-5 h-5" />
              </>
            ) : (
              <>
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
