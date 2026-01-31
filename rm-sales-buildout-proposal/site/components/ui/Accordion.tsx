"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  category?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  question,
  answer,
  category,
  isOpen = false,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200",
        isOpen
          ? "bg-tint-blue border-blue/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
          : "bg-white border-border-light hover:border-border-light/80"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {category && (
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue/10 text-blue">
              {category}
            </span>
          )}
          <span className="text-lg font-medium text-text-heading">
            {question}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-green transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0">
              <div className="border-t border-border-light pt-4">
                <p className="text-text-body leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: readonly {
    readonly question: string;
    readonly answer: string;
    readonly category?: string;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          category={item.category}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
