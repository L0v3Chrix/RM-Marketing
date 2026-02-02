"use client";

import { useState } from "react";
import { OwnersQuiz } from "@/components/quiz";
import { ChapterGate, ChapterProgress } from "@/components/ui";
import {
  Hero,
  HeroMetrics,
  WhyStory,
  Situation,
  GapAnalysis,
  Opportunity,
  Solution,
  Process,
  Team,
  WhyNotCommission,
  Investment,
  Calculator,
  FAQ,
  CTA,
} from "@/components/sections";

// Chapter definitions - updated to match proposal flow
const CHAPTERS = [
  {
    number: 1,
    title: "The Numbers",
    shortTitle: "Numbers",
  },
  {
    number: 2,
    title: "The Opportunity",
    shortTitle: "Opportunity",
  },
  {
    number: 3,
    title: "The Solution",
    shortTitle: "Solution",
  },
  {
    number: 4,
    title: "The Investment",
    shortTitle: "Investment",
  },
];

// Chapter summaries for gates
const CHAPTER_SUMMARIES: Record<number, string> = {
  1: "You've seen the verified data — $110K revenue, 47.8% show rate, $25K in failed payments. Now let's look at what's missing.",
  2: "Speed-to-lead, show rates, database activation — these are the levers. Let's see exactly how we'd fix them.",
  3: "The team, the process, the systems are mapped out. Now let's talk investment and timeline.",
};

export default function Home() {
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);

  const unlockNextChapter = () => {
    if (currentChapter < CHAPTERS.length) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  return (
    <main>
      {/* Owner's Quiz - Shows first */}
      {!quizComplete && (
        <OwnersQuiz onComplete={() => setQuizComplete(true)} />
      )}

      {/* Proposal Content - Shows after quiz */}
      {quizComplete && (
        <>
          {/* Sticky Progress Header */}
          <ChapterProgress
            chapters={CHAPTERS}
            currentChapter={currentChapter}
          />

          {/* Spacer for fixed header */}
          <div className="h-14" />

          {/* Chapter 1: The Numbers */}
          <div id="chapter-1">
            <Hero />
            <HeroMetrics />
            <WhyStory />
            <Situation />
            <GapAnalysis />
            <Calculator />
          </div>

          {/* Gate 1 → 2 */}
          {currentChapter >= 1 && (
            <ChapterGate
              chapterNumber={1}
              totalChapters={CHAPTERS.length}
              nextChapterTitle={CHAPTERS[1].title}
              summary={CHAPTER_SUMMARIES[1]}
              onContinue={unlockNextChapter}
            />
          )}

          {/* Chapter 2: The Opportunity */}
          {currentChapter >= 2 && (
            <div id="chapter-2">
              <Opportunity />
            </div>
          )}

          {/* Gate 2 → 3 */}
          {currentChapter >= 2 && (
            <ChapterGate
              chapterNumber={2}
              totalChapters={CHAPTERS.length}
              nextChapterTitle={CHAPTERS[2].title}
              summary={CHAPTER_SUMMARIES[2]}
              onContinue={unlockNextChapter}
            />
          )}

          {/* Chapter 3: The Solution */}
          {currentChapter >= 3 && (
            <div id="chapter-3">
              <Solution />
              <Process />
              <Team />
            </div>
          )}

          {/* Gate 3 → 4 */}
          {currentChapter >= 3 && (
            <ChapterGate
              chapterNumber={3}
              totalChapters={CHAPTERS.length}
              nextChapterTitle={CHAPTERS[3].title}
              summary={CHAPTER_SUMMARIES[3]}
              onContinue={unlockNextChapter}
            />
          )}

          {/* Chapter 4: The Investment */}
          {currentChapter >= 4 && (
            <div id="chapter-4">
              <WhyNotCommission />
              <Investment />
              <FAQ />
              <CTA />
            </div>
          )}
        </>
      )}
    </main>
  );
}
