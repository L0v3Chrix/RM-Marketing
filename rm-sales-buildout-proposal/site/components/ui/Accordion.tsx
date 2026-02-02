"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
  category?: string;
}

export function AccordionItem({
  question,
  answer,
  isOpen = false,
  onToggle,
  category,
}: AccordionItemProps) {
  return (
    <div className="accordion-item mb-3">
      <button
        onClick={onToggle}
        className="accordion-trigger group"
        aria-expanded={isOpen}
      >
        <div className="flex-1 text-left">
          {category && (
            <span className="text-xs uppercase tracking-wider text-accent mb-1 block">
              {category}
            </span>
          )}
          <span className="text-text-primary font-medium group-hover:text-accent transition-colors">
            {question}
          </span>
        </div>
        <ChevronDown
          className={clsx(
            "w-5 h-5 text-text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="accordion-content">
              <p className="text-text-secondary leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
    category?: string;
  }>;
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          category={item.category}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
