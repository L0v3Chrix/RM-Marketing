"use client";

import { motion } from "framer-motion";
import { Calculator, XCircle, CheckCircle, DollarSign } from "lucide-react";

export function WhyNotCommission() {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A574]/10 border border-[#D4A574]/20 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-[#D4A574]" />
            <span className="text-[#D4A574] text-sm font-medium">The Math</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-red-400">Commission-Only</span> Doesn't Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's do the math on why pure commission structures fail for buildout projects
          </p>
        </motion.div>

        {/* The Math */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Commission-Only Model */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">Commission-Only</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Hours invested (buildout)</span>
                <span className="text-white">400+ hours</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Revenue in Month 1-2</span>
                <span className="text-white">$0 - $20K</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>10% commission on $20K</span>
                <span className="text-white">$2,000</span>
              </div>
              <div className="border-t border-red-500/20 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Effective hourly rate</span>
                  <span className="text-red-400 font-bold">$5/hour</span>
                </div>
              </div>
            </div>
            
            <p className="text-red-400 text-sm">
              No serious operator will work 400 hours for $2K. You'll get junior talent or someone who quits in Week 3.
            </p>
          </motion.div>

          {/* Fixed + Performance Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#D4A574]/5 border border-[#D4A574]/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-[#D4A574]" />
              <h3 className="text-2xl font-bold text-white">Fixed + Performance</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Phase 1 (proof of concept)</span>
                <span className="text-white">$10,000</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Phase 2 base ($10K × 3 mo)</span>
                <span className="text-white">$30,000</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Performance upside</span>
                <span className="text-white">Up to $15K</span>
              </div>
              <div className="border-t border-[#D4A574]/20 pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total engagement</span>
                  <span className="text-[#D4A574] font-bold">$40K - $55K</span>
                </div>
              </div>
            </div>
            
            <p className="text-[#D4A574] text-sm">
              You get senior operators fully committed. We have skin in the game via performance bonus.
            </p>
          </motion.div>
        </div>

        {/* Key Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A1628] border border-gray-800 rounded-2xl p-8 text-center"
        >
          <DollarSign className="w-12 h-12 text-[#D4A574] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            The Real Question
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Would you rather pay <span className="text-red-400">$2K for someone who quits</span>,
            <br />
            or <span className="text-[#D4A574]">$40K for a system that prints money?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
