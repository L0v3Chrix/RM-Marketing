"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Chapter {
  number: number;
  title: string;
  shortTitle?: string;
}

interface ChapterProgressProps {
  chapters: Chapter[];
  currentChapter: number;
  className?: string;
}

export function ChapterProgress({
  chapters,
  currentChapter,
  className,
}: ChapterProgressProps) {
  const progressPercentage = ((currentChapter) / chapters.length) * 100;
  const currentChapterData = chapters[currentChapter - 1];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-base/95 backdrop-blur-md",
        "border-b border-border-subtle",
        className
      )}
    >
      {/* Progress bar */}
      <div className="h-0.5 bg-elevated">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Chapter info */}
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Current chapter label */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-accent">
              {currentChapter}/{chapters.length}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentChapter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium text-text-primary hidden sm:inline"
              >
                {currentChapterData?.title}
              </motion.span>
              <motion.span
                key={`mobile-${currentChapter}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-medium text-text-primary sm:hidden"
              >
                {currentChapterData?.shortTitle || currentChapterData?.title}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Chapter dots - desktop only */}
          <div className="hidden md:flex items-center gap-2">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="group relative"
              >
                <div
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    chapter.number < currentChapter && "bg-accent",
                    chapter.number === currentChapter && "bg-accent ring-2 ring-accent/30 ring-offset-2 ring-offset-base",
                    chapter.number > currentChapter && "bg-border"
                  )}
                />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-elevated text-text-primary text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-border-subtle">
                  {chapter.title}
                </div>
              </div>
            ))}
          </div>

          {/* Prepared for badge */}
          <div className="hidden lg:block text-xs text-text-muted">
            <span className="text-text-secondary font-medium">GHL Mastery</span> Proposal
          </div>
        </div>
      </div>
    </motion.div>
  );
}
