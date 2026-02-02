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

// Chapter definitions matching the PRESENTATION-FRAMEWORK.md section order
const CHAPTERS = [
  {
    number: 1,
    title: "The Numbers",
    shortTitle: "Numbers",
    description: "Where you are today — verified data from the last 90 days"
  },
  {
    number: 2,
    title: "The Opportunity",
    shortTitle: "Opportunity",
    description: "What's missing and what's possible"
  },
  {
    number: 3,
    title: "The Solution",
    shortTitle: "Solution",
    description: "The team, the process, the system"
  },
  {
    number: 4,
    title: "The Investment",
    shortTitle: "Investment",
    description: "Pricing, timeline, and next steps"
  },
];

// Chapter summaries for gates
const CHAPTER_SUMMARIES: Record<number, string> = {
  1: "You've seen the verified data — $110K revenue, 47.8% show rate, $25.8K in failed payments. Now let's look at what's missing and what that means for your potential.",
  2: "The gap is clear: speed-to-lead, show rates, database activation — these are the levers. Now let's see exactly how we'd build the solution.",
  3: "The team, the process, the systems are mapped out. Now let's talk investment, timeline, and how we prove it works.",
};

export default function Home() {
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);

  const unlockNextChapter = () => {
    if (currentChapter < CHAPTERS.length) {
      setCurrentChapter(currentChapter + 1);
      // Scroll to next chapter after a brief delay
      setTimeout(() => {
        const nextChapterEl = document.getElementById(`chapter-${currentChapter + 1}`);
        nextChapterEl?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <main className="bg-base min-h-screen">
      {/* Owner's Quiz - Shows first as the gate */}
      {!quizComplete && (
        <OwnersQuiz onComplete={() => setQuizComplete(true)} />
      )}

      {/* Proposal Content - Shows after quiz completion */}
      {quizComplete && (
        <>
          {/* Sticky Progress Header */}
          <ChapterProgress
            chapters={CHAPTERS}
            currentChapter={currentChapter}
          />

          {/* Spacer for fixed header */}
          <div className="h-14" />

          {/* ====== CHAPTER 1: THE NUMBERS ====== */}
          <div id="chapter-1">
            {/* Hero with Adam's video */}
            <Hero />
            
            {/* Key metrics cards */}
            <HeroMetrics />
            
            {/* Why I'm Writing This - Chrix's backstory */}
            <WhyStory />
            
            {/* The Situation - Three Data Silos */}
            <Situation />
            
            {/* Gap Analysis - What's Missing */}
            <GapAnalysis />
            
            {/* Interactive Calculator */}
            <Calculator />
          </div>

          {/* Gate: Chapter 1 → 2 */}
          {currentChapter >= 1 && (
            <ChapterGate
              chapterNumber={1}
              totalChapters={CHAPTERS.length}
              nextChapterTitle={CHAPTERS[1].title}
              summary={CHAPTER_SUMMARIES[1]}
              onContinue={unlockNextChapter}
              isUnlocked={currentChapter >= 2}
            />
          )}

          {/* ====== CHAPTER 2: THE OPPORTUNITY ====== */}
          {currentChapter >= 2 && (
            <div id="chapter-2">
              <Opportunity />
            </div>
          )}

          {/* Gate: Chapter 2 → 3 */}
          {currentChapter >= 2 && (
            <ChapterGate
              chapterNumber={2}
              totalChapters={CHAPTERS.length}
              nextChapterTitle={CHAPTERS[2].title}
              summary={CHAPTER_SUMMARIES[2]}
              onContinue={unlockNextChapter}
              isUnlocked={currentChapter >= 3}
            />
          )}

          {/* ====== CHAPTER 3: THE SOLUTION ====== */}
          {currentChapter >= 3 && (
            <div id="chapter-3">
              {/* The Solution */}
              <Solution />
              
              {/* The Process - Phase 1 & Phase 2 */}
              <Process />
              
              {/* The Team - Chrix + Sarah */}
              <Team />
            </div>
          )}

          {/* Gate: Chapter 3 → 4 */}
          {currentChapter >= 3 && (
            <ChapterGate
              chapterNumber={3}
              totalChapters={CHAPTERS.length}
              nextChapterTitle={CHAPTERS[3].title}
              summary={CHAPTER_SUMMARIES[3]}
              onContinue={unlockNextChapter}
              isUnlocked={currentChapter >= 4}
            />
          )}

          {/* ====== CHAPTER 4: THE INVESTMENT ====== */}
          {currentChapter >= 4 && (
            <div id="chapter-4">
              {/* Why Not Commission */}
              <WhyNotCommission />
              
              {/* The Investment - Option B Pricing */}
              <Investment />
              
              {/* FAQ */}
              <FAQ />
              
              {/* CTA */}
              <CTA />
            </div>
          )}
        </>
      )}
    </main>
  );
}
