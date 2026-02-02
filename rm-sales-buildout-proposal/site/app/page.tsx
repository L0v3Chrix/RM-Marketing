"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
import { ChevronDown, CheckCircle2, TrendingUp } from "lucide-react";

// Internal gate component for Chapter 1 to prevent scroll fatigue
function Chapter1InternalGate() {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return null; // Gate disappears after expanding
  }

  return (
    <div className="chapter-gate py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Checkpoint Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
        >
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">
            Checkpoint: You&apos;ve seen the data
          </span>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4">
            The Current State is Clear
          </h3>
          <p className="text-text-muted text-base leading-relaxed mb-6 max-w-xl mx-auto">
            $500/mo in ads → $45K in new sales revenue over 90 days.
            <br />
            <span className="text-text-secondary">Good foundation. But here&apos;s where it gets interesting...</span>
          </p>
        </motion.div>

        {/* Continue Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setExpanded(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border-subtle rounded-lg text-text-primary font-medium hover:bg-card-hover hover:border-accent/30 transition-all"
        >
          <TrendingUp className="w-4 h-4 text-accent" />
          See What&apos;s Missing
          <ChevronDown className="w-4 h-4" />
        </motion.button>

        <p className="text-xs text-text-subtle mt-4">
          The gap analysis reveals the real opportunity
        </p>
      </div>
    </div>
  );
}

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
            
            {/* INTERNAL GATE - Break up Chapter 1 to prevent scroll fatigue */}
            <Chapter1InternalGate />
            
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
