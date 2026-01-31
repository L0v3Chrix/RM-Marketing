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
        <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-2">
          Your Offer Economics
        </h2>
        <p className="text-body text-sm sm:text-base">
          The price of your offers determines your revenue per appointment.
        </p>
      </div>

      {/* Main Offer Price */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <label className="text-sm font-medium text-heading">
              Main Offer Price
            </label>
            <p className="text-xs text-muted">Your primary product/service</p>
          </div>
          <span className="text-lg font-bold text-green">
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
          className="w-full h-3 bg-light rounded-lg appearance-none cursor-pointer accent-green"
        />
        <div className="flex justify-between text-xs text-muted">
          <span>$97</span>
          <span>$10,000</span>
        </div>
      </div>

      {/* Downsell Price */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <label className="text-sm font-medium text-heading">
              Downsell / OTO Price
            </label>
            <p className="text-xs text-muted">For those who don&apos;t buy main offer</p>
          </div>
          <span className="text-lg font-bold text-body">
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
          className="w-full h-3 bg-light rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted">
          <span>$27</span>
          <span>$997</span>
        </div>
      </div>

      {/* Upsell Price */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <label className="text-sm font-medium text-heading">
              Upsell Price
            </label>
            <p className="text-xs text-muted">Additional offer for buyers</p>
          </div>
          <span className="text-lg font-bold text-body">
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
          className="w-full h-3 bg-light rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-muted">
          <span>$97</span>
          <span>$5,000</span>
        </div>
      </div>

      {/* Revenue Per Show Calculation */}
      <div className="bg-tint-green rounded-xl p-5 mt-6">
        <p className="text-sm font-medium text-heading mb-3 text-center">
          Your Revenue Per Show
        </p>
        <div className="text-center">
          <span className="text-4xl font-bold text-green">
            {formatCurrency(revenuePerShow)}
          </span>
          <p className="text-xs text-muted mt-2">
            This is the average value of each person who shows up to a call
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-green/20 text-xs text-body space-y-1">
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
