"use client";

import { motion } from "framer-motion";
import { DollarSign, CheckCircle, Calendar, Target, Shield, ArrowRight, Zap } from "lucide-react";
import { INVESTMENT } from "@/lib/constants";

export function Investment() {
  return (
    <section className="py-20 bg-[#0A1628]" id="investment">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A574]/10 border border-[#D4A574]/20 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-[#D4A574]" />
            <span className="text-[#D4A574] text-sm font-medium">The Investment</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Option B: <span className="text-[#D4A574]">Prove First, Then Build</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No $50K leap of faith. Milestone-based payments tied to real results.
          </p>
        </motion.div>

        {/* Two Phases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border-2 border-[#D4A574]/30 rounded-2xl overflow-hidden"
          >
            <div className="bg-[#D4A574]/10 px-6 py-4 border-b border-[#D4A574]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4A574]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#D4A574] font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Phase 1: The Proof</h3>
                  <p className="text-[#D4A574] text-sm">60 Days</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Payment Structure */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#D4A574]" />
                    <span className="text-gray-400">Deposit (Agreement signed)</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$5,000</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-[#D4A574]" />
                    <span className="text-gray-400">Milestone (20 appointments)</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$5,000</span>
                </div>
                
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Phase 1 Total</span>
                    <span className="text-3xl font-bold text-[#D4A574]">$10,000</span>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-medium text-gray-400 uppercase">What's Included</h4>
                {[
                  "Adam off phones DAY ONE",
                  "Database reactivation begins immediately",
                  "Speed-to-lead optimization",
                  "Show rate improvement system",
                  "Pipeline handed over completely",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-1">The Guarantee</h4>
                    <p className="text-green-400 text-sm">
                      If by Day 30, we haven't generated at least 20 qualified appointments 
                      from your existing database, you can walk away with just the $5K deposit invested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0F172A] border border-gray-800 rounded-2xl overflow-hidden"
          >
            <div className="bg-gray-800/30 px-6 py-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Phase 2: The Build</h3>
                  <p className="text-gray-400 text-sm">90 Days (Days 61-150)</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Monthly Payments */}
              <div className="space-y-4 mb-6">
                {["Day 61", "Day 91", "Day 121"].map((day, i) => (
                  <div key={day} className="flex items-center justify-between p-4 bg-[#0A1628] rounded-xl border border-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm font-medium">{i + 1}</span>
                      </div>
                      <span className="text-gray-400">{day}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-white">$10,000</span>
                      <span className="text-gray-500 text-sm ml-1">+ perf</span>
                    </div>
                  </div>
                ))}
                
                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Base Total</span>
                    <span className="text-2xl font-bold text-white">$30,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">With performance bonuses</span>
                    <span className="text-gray-400 text-sm">Up to $45,000</span>
                  </div>
                </div>
              </div>

              {/* Performance Bonus */}
              <div className="bg-[#D4A574]/5 border border-[#D4A574]/20 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Performance Component</h4>
                    <p className="text-[#D4A574] text-sm">
                      15% of revenue over $35K baseline, capped at $15K/month
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Built */}
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-400 uppercase">What's Built</h4>
                {[
                  "Hire and train sales team (2-4 people)",
                  "Full systems & automation buildout",
                  "Dunning system (train Jonah)",
                  "SOPs & documentation",
                  "Manager structure installed",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Total Investment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4A574]/20 to-[#D4A574]/5 border border-[#D4A574]/30 rounded-2xl p-8 text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Total Engagement</h3>
          <div className="text-5xl md:text-6xl font-bold text-[#D4A574] mb-4">
            $40,000 - $55,000
          </div>
          <p className="text-gray-400 max-w-xl mx-auto">
            5-month engagement. You own everything we build. No equity, no perpetuity.
          </p>
        </motion.div>

        {/* No Equity Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-4"
        >
          {INVESTMENT.keyPoints.map((point, i) => (
            <div 
              key={i}
              className="bg-[#0F172A] border border-gray-800 rounded-xl p-4 text-center"
            >
              <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">{point}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
