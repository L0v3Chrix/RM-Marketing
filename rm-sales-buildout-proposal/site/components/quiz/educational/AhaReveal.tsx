"use client";

import { motion } from "framer-motion";
import { Check, X, Lightbulb, TrendingUp } from "lucide-react";
import { EducationalQuestionData } from "./educationalQuestions";

interface AhaRevealProps {
  question: EducationalQuestionData;
  userGuess: string;
  userData: Record<string, number>;
}

export function AhaReveal({ question, userGuess, userData }: AhaRevealProps) {
  const isCorrect = userGuess === question.correctAnswer;
  const userOption = question.options.find(o => o.value === userGuess);
  const correctOption = question.options.find(o => o.value === question.correctAnswer);
  const personalMessage = question.insight.personalConnection(userGuess, userData);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      {/* Correct/Incorrect Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="flex justify-center"
      >
        <div className={`
          inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
          ${isCorrect 
            ? 'bg-tint-success text-success' 
            : 'bg-tint-amber text-amber-dark'
          }
        `}>
          {isCorrect ? (
            <>
              <Check className="w-4 h-4" />
              You got it right!
            </>
          ) : (
            <>
              <TrendingUp className="w-4 h-4" />
              Good guess, but...
            </>
          )}
        </div>
      </motion.div>

      {/* Guess vs Reality */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-navy rounded-2xl p-5 sm:p-6"
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Your Guess */}
          <div className="text-center">
            <p className="text-xs text-inverse-muted mb-1 uppercase tracking-wide">
              Your Guess
            </p>
            <div className={`
              text-2xl sm:text-3xl font-bold
              ${isCorrect ? 'text-success' : 'text-inverse-muted'}
            `}>
              {userOption?.label}
            </div>
          </div>
          
          {/* Reality */}
          <div className="text-center">
            <p className="text-xs text-inverse-muted mb-1 uppercase tracking-wide">
              Reality
            </p>
            <div className="text-2xl sm:text-3xl font-bold text-amber">
              {correctOption?.label}
            </div>
          </div>
        </div>

        {/* The Insight */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-4 border-t border-border-dark"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-amber/20 rounded-full flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-amber" />
            </div>
            <div>
              <p className="text-inverse font-semibold text-sm sm:text-base mb-1">
                {question.insight.statistic}
              </p>
              <p className="text-inverse-muted text-sm leading-relaxed">
                {question.insight.explanation}
              </p>
              {question.insight.source && (
                <p className="text-xs text-inverse-muted/60 mt-2 italic">
                  — {question.insight.source}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Personalized Connection */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-tint-slate border border-primary/20 rounded-xl p-4"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-2 h-2 mt-2 bg-primary rounded-full" />
          <p className="text-body text-sm sm:text-base leading-relaxed">
            {personalMessage}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
