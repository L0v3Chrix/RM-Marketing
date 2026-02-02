"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, TrendingDown, Phone, Calendar } from "lucide-react";

const gaps = [
  {
    icon: Phone,
    title: "No Speed-to-Lead",
    problem: "Leads wait hours or days for a callback",
    impact: "50% of leads go cold in first 5 minutes",
    solution: "Immediate response system",
  },
  {
    icon: Calendar,
    title: "No Show Rate System",
    problem: "47.8% show rate is leaving money on the table",
    impact: "Half of booked appointments never happen",
    solution: "Confirmation + reminder sequences",
  },
  {
    icon: Users,
    title: "No Dedicated Closer",
    problem: "Adam is doing content, sales, and fulfillment",
    impact: "Bottleneck limits growth ceiling",
    solution: "Dedicated sales team",
  },
  {
    icon: TrendingDown,
    title: "No Dunning System",
    problem: "$25,870 in failed payments sitting untouched",
    impact: "Recurring revenue bleeding out",
    solution: "Automated + manual recovery process",
  },
  {
    icon: Clock,
    title: "No Database Work",
    problem: "10,000+ contacts not being monetized",
    impact: "$50K+ in potential revenue dormant",
    solution: "Reactivation campaigns",
  },
];

export function GapAnalysis() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Gap Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's <span className="text-red-400">Missing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The fundamentals that turn good funnels into revenue machines
          </p>
        </motion.div>

        {/* Gap Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gaps.map((gap, index) => (
            <motion.div
              key={gap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0F172A] border border-gray-800 rounded-2xl p-6 hover:border-[#D4A574]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <gap.icon className="w-6 h-6 text-red-400" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{gap.title}</h3>
              
              <p className="text-gray-400 text-sm mb-3">{gap.problem}</p>
              
              <div className="bg-red-500/5 border border-red-500/10 rounded-lg p-3 mb-3">
                <p className="text-red-400 text-sm font-medium">{gap.impact}</p>
              </div>
              
              <div className="flex items-center gap-2 text-[#D4A574]">
                <div className="w-1.5 h-1.5 bg-[#D4A574] rounded-full" />
                <span className="text-sm font-medium">{gap.solution}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            These aren't complex problems. They're{" "}
            <span className="text-white font-medium">execution problems</span>.
            <br />
            And execution is what we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
