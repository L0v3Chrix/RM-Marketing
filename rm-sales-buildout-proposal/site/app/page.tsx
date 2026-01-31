"use client";

import { useState } from "react";
import { OwnersQuiz } from "@/components/quiz";
import {
  Hero,
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

export default function Home() {
  const [quizComplete, setQuizComplete] = useState(false);

  return (
    <main>
      {/* Owner's Quiz - Shows first */}
      {!quizComplete && (
        <OwnersQuiz onComplete={() => setQuizComplete(true)} />
      )}

      {/* Rest of the site - Shows after quiz completion or scroll */}
      {quizComplete && (
        <>
          <Hero />
          <Situation />
          <Opportunity />
          <Solution />
          <Process />
          <Team />
          <Investment />
          <Calculator />
          <FAQ />
          <CTA />
        </>
      )}
    </main>
  );
}
