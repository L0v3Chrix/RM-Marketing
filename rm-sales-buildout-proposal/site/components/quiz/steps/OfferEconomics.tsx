"use client";

import { motion } from "framer-motion";
import { QuizAnswers } from "../hooks/useQuizState";
import { formatCurrency } from "../utils/calculations";

interface OfferEconomicsProps {
  answers: QuizAnswers;
  updateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
}

export function OfferEconomics({ answers, updateAnswer }: OfferEconomicsProps) {
  // Calculate revenue per show
  const revenuePerShow =
    (answers.closeRate * answers.avgMainOffer) +
    (answers.closeRate * answers.upsellRate * answers.upsellPrice) +
    ((1 - answers.closeRate) * 0.2 * answers.downsellPrice);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
          Your Offer Economics
        </h2>
        <p className="text-text-secondary text-sm sm:text-base">
          The price of your offers determines your revenue per appointment.
        </p>
      </div>

      {/* Main Offer Price */}
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <div className="min-w-0">
            <label className="text-sm font-medium text-text-primary">
              Main Offer Price
            </label>
            <p className="text-xs text-text-muted">Your primary product/service</p>
          </div>
          <span className="text-base sm:text-lg font-bold text-accent whitespace-nowrap">
            {formatCurrency(answers.avgMainOffer)}
          </span>
        </div>
        <input
          type="range"
          min={97}
          max={10000}
          step={50}
          value={answers.avgMainOffer}
          onChange={(e) => updateAnswer('avgMainOffer', Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>$97</span>
          <span>$10,000</span>
        </div>
      </div>

      {/* Downsell Price */}
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <div className="min-w-0">
            <label className="text-sm font-medium text-text-primary">
              Downsell / OTO Price
            </label>
            <p className="text-xs text-text-muted">For those who don&apos;t buy main offer</p>
          </div>
          <span className="text-base sm:text-lg font-bold text-text-secondary whitespace-nowrap">
            {formatCurrency(answers.downsellPrice)}
          </span>
        </div>
        <input
          type="range"
          min={27}
          max={997}
          step={10}
          value={answers.downsellPrice}
          onChange={(e) => updateAnswer('downsellPrice', Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>$27</span>
          <span>$997</span>
        </div>
      </div>

      {/* Upsell Price */}
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2">
          <div className="min-w-0">
            <label className="text-sm font-medium text-text-primary">
              Upsell Price
            </label>
            <p className="text-xs text-text-muted">Additional offer for buyers</p>
          </div>
          <span className="text-base sm:text-lg font-bold text-text-secondary whitespace-nowrap">
            {formatCurrency(answers.upsellPrice)}
          </span>
        </div>
        <input
          type="range"
          min={97}
          max={5000}
          step={50}
          value={answers.upsellPrice}
          onChange={(e) => updateAnswer('upsellPrice', Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-text-muted">
          <span>$97</span>
          <span>$5,000</span>
        </div>
      </div>

      {/* Revenue Per Show Calculation */}
      <div className="bg-accent/10 rounded-xl p-5 mt-6">
        <p className="text-sm font-medium text-text-primary mb-3 text-center">
          Your Revenue Per Show
        </p>
        <div className="text-center">
          <span className="text-4xl font-bold text-accent">
            {formatCurrency(revenuePerShow)}
          </span>
          <p className="text-xs text-text-muted mt-2">
            This is the average value of each person who shows up to a call
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-accent/20 text-xs text-text-secondary space-y-1">
          <div className="flex justify-between">
            <span>Main offer contribution:</span>
            <span>{formatCurrency(answers.closeRate * answers.avgMainOffer)}</span>
          </div>
          <div className="flex justify-between">
            <span>Upsell contribution:</span>
            <span>{formatCurrency(answers.closeRate * answers.upsellRate * answers.upsellPrice)}</span>
          </div>
          <div className="flex justify-between">
            <span>Downsell contribution:</span>
            <span>{formatCurrency((1 - answers.closeRate) * 0.2 * answers.downsellPrice)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
