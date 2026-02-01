"use client";

import { motion } from "framer-motion";
import { QuizStateReturn } from "../hooks/useQuizState";
import { FunnelWaterfall } from "./FunnelWaterfall";
import { PathToGoal } from "./PathToGoal";
import { formatCurrency } from "../utils/calculations";
import { ArrowDown, TrendingUp, DollarSign, Target, UserPlus, Lightbulb, Check, X } from "lucide-react";

interface QuizResultsProps {
  quizState: QuizStateReturn;
  onContinue: () => void;
}

export function QuizResults({ quizState, onContinue }: QuizResultsProps) {
  const {
    answers,
    calculatedMetrics,
    targetRequirements,
    intentExperience,
    getLearningsSummary,
  } = quizState;

  const gap = answers.targetRevenue - answers.currentRevenue;
  const learnings = getLearningsSummary();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-light py-8 sm:py-12"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading mb-3">
            Your Personalized Growth Analysis
          </h1>
          <p className="text-body text-sm sm:text-base max-w-2xl mx-auto">
            Based on your numbers, here&apos;s what it takes to go from{" "}
            <span className="font-semibold">{formatCurrency(answers.currentRevenue)}</span> to{" "}
            <span className="font-semibold text-green">{formatCurrency(answers.targetRevenue)}</span>/month
          </p>
        </motion.div>

        {/* Key Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          <div className="bg-white rounded-xl p-4 text-center border border-border">
            <DollarSign className="w-6 h-6 text-green mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-green">
              {formatCurrency(calculatedMetrics.revenuePerShow)}
            </p>
            <p className="text-xs text-muted">Revenue/Show</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-border">
            <TrendingUp className="w-6 h-6 text-slate mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-slate">
              {calculatedMetrics.ltvCac.toFixed(1)}x
            </p>
            <p className="text-xs text-muted">LTV:CAC</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-border">
            <Target className="w-6 h-6 text-body mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-body">
              {formatCurrency(calculatedMetrics.costPerShow)}
            </p>
            <p className="text-xs text-muted">Cost/Show</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-border">
            <UserPlus className="w-6 h-6 text-body mx-auto mb-2" />
            <p className="text-xl sm:text-2xl font-bold text-body">
              {targetRequirements.closersNeeded}
            </p>
            <p className="text-xs text-muted">Closers Needed</p>
          </div>
        </motion.div>

        {/* What You Learned - Educational Recap */}
        {learnings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-tint-amber border border-amber/20 rounded-2xl p-5 sm:p-6 mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-amber" />
              <h3 className="font-semibold text-heading">What You Discovered</h3>
            </div>
            <div className="space-y-3">
              {learnings.map((learning, index) => (
                <motion.div
                  key={learning.questionId}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    learning.wasCorrect ? 'bg-success/20' : 'bg-primary/20'
                  }`}>
                    {learning.wasCorrect ? (
                      <Check className="w-3 h-3 text-success" />
                    ) : (
                      <TrendingUp className="w-3 h-3 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-body leading-relaxed">
                    <span className="font-medium text-heading">{learning.insight}</span>
                    {!learning.wasCorrect && (
                      <span className="text-muted"> — now you know!</span>
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FunnelWaterfall
              metrics={calculatedMetrics}
              adSpend={answers.adSpend}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <PathToGoal
              currentRevenue={answers.currentRevenue}
              targetRevenue={answers.targetRevenue}
              requirements={targetRequirements}
            />
          </motion.div>
        </div>

        {/* Gap Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-tint-slate border-l-4 border-slate rounded-r-xl p-5 mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-heading mb-1">
                Your Growth Opportunity
              </h3>
              <p className="text-sm text-body">
                There&apos;s a clear path from here to{" "}
                <span className="font-bold text-green">+{formatCurrency(gap)}</span> per month.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-3xl font-bold text-green">{formatCurrency(gap * 12)}</p>
              <p className="text-xs text-muted">Annual Potential</p>
            </div>
          </div>
        </motion.div>

        {/* Solution-Focused CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-navy rounded-2xl p-6 sm:p-8 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-inverse mb-3">
            Now You Know the Problem
          </h2>
          <p className="text-inverse-muted mb-6 max-w-xl mx-auto text-sm sm:text-base">
            Speed-to-lead, show rates, and persistent follow-up aren&apos;t just stats—they&apos;re 
            the levers that move you from {formatCurrency(answers.currentRevenue)} to{" "}
            {formatCurrency(answers.targetRevenue)}/month. Let&apos;s show you how we fix them.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors"
          >
            See How We Solve This
            <ArrowDown className="w-5 h-5" />
          </motion.button>

          <p className="mt-4 text-inverse-muted text-sm">
            ↓ Scroll to see the solution built for your numbers
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6 text-muted mx-auto" />
          </motion.div>
          <p className="text-xs text-muted mt-2">Scroll to see our solution</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
