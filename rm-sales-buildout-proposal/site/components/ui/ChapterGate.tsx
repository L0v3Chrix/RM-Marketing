"use client";

import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle } from "lucide-react";

interface ChapterGateProps {
  chapterNumber: number;
  totalChapters: number;
  nextChapterTitle: string;
  summary?: string;
  onContinue: () => void;
  className?: string;
}

export function ChapterGate({
  chapterNumber,
  totalChapters,
  nextChapterTitle,
  summary,
  onContinue,
  className,
}: ChapterGateProps) {
  const handleContinue = () => {
    onContinue();
    // Smooth scroll to top of next chapter after state update
    setTimeout(() => {
      const nextChapter = document.getElementById(`chapter-${chapterNumber + 1}`);
      if (nextChapter) {
        nextChapter.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative py-16 md:py-24",
        "bg-gradient-to-b from-light via-white to-light",
        "border-y border-border",
        className
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-t from-border to-transparent" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Chapter completion badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-tint-blue border border-primary/20"
        >
          <CheckCircle className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Chapter {chapterNumber} of {totalChapters} Complete
          </span>
        </motion.div>

        {/* Summary (optional) */}
        {summary && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-body text-base md:text-lg mb-8 leading-relaxed"
          >
            {summary}
          </motion.p>
        )}

        {/* Next chapter preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mb-8"
        >
          <p className="text-muted text-sm uppercase tracking-wider mb-2">
            Up Next
          </p>
          <h3 className="text-heading text-xl md:text-2xl font-bold">
            {nextChapterTitle}
          </h3>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Button
            onClick={handleContinue}
            size="large"
            className="group"
          >
            Continue
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
