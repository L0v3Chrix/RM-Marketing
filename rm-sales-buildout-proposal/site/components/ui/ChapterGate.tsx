"use client";

import { motion } from "framer-motion";
import { ChevronDown, Lock, Check } from "lucide-react";

interface ChapterGateProps {
  chapterNumber: number;
  totalChapters: number;
  nextChapterTitle: string;
  summary: string;
  onContinue: () => void;
  isUnlocked?: boolean;
}

export function ChapterGate({
  chapterNumber,
  totalChapters,
  nextChapterTitle,
  summary,
  onContinue,
  isUnlocked = false,
}: ChapterGateProps) {
  const isLastChapter = chapterNumber === totalChapters;

  if (isLastChapter) {
    return null;
  }

  return (
    <div className="chapter-gate py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Chapter Complete Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 mb-8"
        >
          <Check className="w-4 h-4 text-success" />
          <span className="text-sm font-medium text-success">
            Chapter {chapterNumber} Complete
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-text-muted text-lg leading-relaxed mb-8"
        >
          {summary}
        </motion.p>

        {/* Next Chapter Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-text-subtle text-sm uppercase tracking-wider mb-2">
            Up Next
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
            Chapter {chapterNumber + 1}: {nextChapterTitle}
          </h3>
        </motion.div>

        {/* Continue Button */}
        {!isUnlocked ? (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text-dark font-semibold rounded-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
          >
            Continue to {nextChapterTitle}
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border-subtle rounded-lg text-text-muted"
          >
            <Check className="w-4 h-4 text-success" />
            Chapter Unlocked
          </motion.div>
        )}

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalChapters }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i < chapterNumber
                    ? "bg-success"
                    : i === chapterNumber
                    ? "bg-accent w-4"
                    : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-text-subtle mt-3">
            {chapterNumber} of {totalChapters} chapters complete
          </p>
        </motion.div>
      </div>
    </div>
  );
}
