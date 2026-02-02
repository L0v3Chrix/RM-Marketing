"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface Chapter {
  number: number;
  title: string;
  shortTitle: string;
}

interface ChapterProgressProps {
  chapters: Chapter[];
  currentChapter: number;
}

export function ChapterProgress({ chapters, currentChapter }: ChapterProgressProps) {
  const progressPercent = ((currentChapter) / chapters.length) * 100;

  const scrollToChapter = (chapterNum: number) => {
    if (chapterNum <= currentChapter) {
      const el = document.getElementById(`chapter-${chapterNum}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo/Title */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-text-primary">GHL Mastery</span>
            <span className="text-text-subtle">·</span>
            <span className="text-sm text-text-muted hidden sm:inline">Sales Proposal</span>
          </div>

          {/* Chapter Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {chapters.map((chapter) => {
              const isActive = chapter.number === currentChapter;
              const isCompleted = chapter.number < currentChapter;
              const isLocked = chapter.number > currentChapter;

              return (
                <button
                  key={chapter.number}
                  onClick={() => scrollToChapter(chapter.number)}
                  disabled={isLocked}
                  className={clsx(
                    "relative px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all",
                    isActive && "text-accent",
                    isCompleted && "text-success cursor-pointer hover:bg-card",
                    isLocked && "text-text-subtle cursor-not-allowed opacity-50",
                    !isActive && !isLocked && "hover:bg-card"
                  )}
                >
                  {/* Mobile: Show just number */}
                  <span className="sm:hidden">{chapter.number}</span>
                  {/* Desktop: Show short title */}
                  <span className="hidden sm:inline">{chapter.shortTitle}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeChapter"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    />
                  )}
                  
                  {/* Completed checkmark */}
                  {isCompleted && (
                    <span className="ml-1 text-success">✓</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Progress bar (small) */}
          <div className="hidden md:block w-24">
            <div className="h-1 bg-card rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
