"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EducationalQuestionData } from "./educationalQuestions";
import { AhaReveal } from "./AhaReveal";

interface EducationalQuestionProps {
  question: EducationalQuestionData;
  userData: Record<string, number>;
  onComplete: (questionId: string, userGuess: string, wasCorrect: boolean) => void;
}

export function EducationalQuestion({ 
  question, 
  userData, 
  onComplete 
}: EducationalQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleSelect = (value: string) => {
    if (isRevealed) return;
    setSelectedAnswer(value);
  };

  const handleReveal = () => {
    if (!selectedAnswer) return;
    setIsRevealed(true);
  };

  const handleContinue = () => {
    if (!selectedAnswer) return;
    onComplete(
      question.id, 
      selectedAnswer, 
      selectedAnswer === question.correctAnswer
    );
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Question Header */}
      <div className="text-center mb-8">
        {question.context && (
          <p className="text-sm text-muted mb-3 italic">
            {question.context}
          </p>
        )}
        <h2 className="text-xl sm:text-2xl font-bold text-heading leading-tight">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="options"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 gap-3"
          >
            {question.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(option.value)}
                className={`
                  p-4 sm:p-5 rounded-xl border-2 text-center transition-all
                  ${selectedAnswer === option.value
                    ? 'border-primary bg-tint-blue shadow-lg'
                    : 'border-border bg-white hover:border-muted hover:shadow-sm'
                  }
                `}
              >
                <span className={`text-lg sm:text-xl font-bold ${
                  selectedAnswer === option.value ? 'text-primary' : 'text-heading'
                }`}>
                  {option.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <AhaReveal
            key="reveal"
            question={question}
            userGuess={selectedAnswer!}
            userData={userData}
          />
        )}
      </AnimatePresence>

      {/* Action Button */}
      <div className="pt-4">
        {!isRevealed ? (
          <motion.button
            whileHover={{ scale: selectedAnswer ? 1.02 : 1 }}
            whileTap={{ scale: selectedAnswer ? 0.98 : 1 }}
            onClick={handleReveal}
            disabled={!selectedAnswer}
            className={`
              w-full py-4 rounded-xl font-semibold text-lg transition-all
              ${selectedAnswer
                ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                : 'bg-border text-muted cursor-not-allowed'
              }
            `}
          >
            {selectedAnswer ? 'Reveal the Answer' : 'Select your answer'}
          </motion.button>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            className="w-full py-4 rounded-xl font-semibold text-lg bg-primary text-white hover:bg-primary-dark shadow-lg transition-all"
          >
            Got it, continue →
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
