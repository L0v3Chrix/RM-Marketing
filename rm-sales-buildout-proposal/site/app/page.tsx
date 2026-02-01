"use client";

import { useState } from "react";
import { OwnersQuiz } from "@/components/quiz";
import { ChapterGate, ChapterProgress } from "@/components/ui";
import {
  Hero,
  WhyStory,
  Situation,
  Opportunity,
  Solution,
  Process,
  Team,
  Investment,
  Calculator,
  FAQ,
  CTA,
} from "@/components/sections";

// Chapter definitions
const CHAPTERS = [
  {
    number: 1,
    title: "Interactive Calculator",
    shortTitle: "Calculator",
  },
  {
    number: 2,
    title: "Your Situation",
    shortTitle: "Situation",
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

// Chapter summaries for gates - reference what was learned
const CHAPTER_SUMMARIES = {
  1: "You've seen your funnel metrics and the gap between current and target revenue. Now let's dig into what's causing the drop-off.",
  2: "Speed-to-lead, show rates, follow-up cadence—these are the levers. Let's see exactly how we'd fix them.",
  3: "The team, the process, the systems are all mapped out. Now let's talk about the investment and timeline.",
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

          {/* Chapter 1: Interactive Calculator */}
          <div id="chapter-1">
            <Hero />
            <WhyStory />
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

          {/* Chapter 2: Your Situation */}
          {currentChapter >= 2 && (
            <div id="chapter-2">
              <Situation />
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
