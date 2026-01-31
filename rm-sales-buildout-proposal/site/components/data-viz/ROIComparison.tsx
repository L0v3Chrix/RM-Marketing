"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface ROIComparisonProps {
  investment?: number;
  returnMin?: number;
  returnMax?: number;
  roiMin?: number;
  roiMax?: number;
  paybackDays?: number;
}

export function ROIComparison({
  investment = 50000,
  returnMin = 230000,
  returnMax = 380000,
  roiMin = 5,
  roiMax = 8,
  paybackDays = 60,
}: ROIComparisonProps) {
  const maxValue = returnMax;
  const investmentWidth = (investment / maxValue) * 100;
  const returnMinWidth = (returnMin / maxValue) * 100;
  const returnMaxWidth = (returnMax / maxValue) * 100;

  return (
    <div className="bg-navy rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-green" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-inverse">
          Return on Investment
        </h3>
      </div>

      <div className="space-y-6">
        {/* Investment Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-inverse-muted text-sm">Your Investment</span>
            <span className="text-inverse font-bold">
              ${investment.toLocaleString()}
            </span>
          </div>
          <div className="h-8 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue rounded-full flex items-center justify-end pr-3"
              initial={{ width: 0 }}
              whileInView={{ width: `${investmentWidth}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-white text-xs font-medium">~$50K</span>
            </motion.div>
          </div>
        </div>

        {/* Return Bar */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-inverse-muted text-sm">Year 1 Return</span>
            <span className="text-green font-bold">
              ${returnMin.toLocaleString()} - ${returnMax.toLocaleString()}
            </span>
          </div>
          <div className="h-8 bg-white/10 rounded-full overflow-hidden relative">
            {/* Min return */}
            <motion.div
              className="absolute h-full bg-green/50 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${returnMinWidth}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            />
            {/* Max return */}
            <motion.div
              className="h-full bg-green rounded-full flex items-center justify-end pr-3"
              initial={{ width: 0 }}
              whileInView={{ width: `${returnMaxWidth}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-white text-xs font-medium">
                ${roiMin}-{roiMax}x ROI
              </span>
            </motion.div>
          </div>
        </div>

        {/* ROI Multiplier Visual */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl sm:text-3xl font-bold text-green">
              {roiMin}-{roiMax}x
            </p>
            <p className="text-inverse-muted text-xs">ROI Multiple</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl sm:text-3xl font-bold text-green">
              &lt;{paybackDays}
            </p>
            <p className="text-inverse-muted text-xs">Days to Payback</p>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl sm:text-3xl font-bold text-gold">
              ${((returnMax - investment) / 1000).toFixed(0)}K+
            </p>
            <p className="text-inverse-muted text-xs">Net Profit</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
