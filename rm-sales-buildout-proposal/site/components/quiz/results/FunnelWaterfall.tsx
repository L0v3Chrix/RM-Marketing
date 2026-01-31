"use client";

import { motion } from "framer-motion";
import { CalculatedMetrics } from "../utils/calculations";

interface FunnelWaterfallProps {
  metrics: CalculatedMetrics;
  adSpend: number;
}

export function FunnelWaterfall({ metrics, adSpend }: FunnelWaterfallProps) {
  const stages = [
    { label: 'AD SPEND', value: `$${adSpend.toLocaleString()}`, count: null, color: 'bg-blue' },
    { label: 'LEADS', value: metrics.leads.toString(), count: metrics.leads, color: 'bg-blue' },
    { label: 'CALLS', value: metrics.callsMade.toString(), count: metrics.callsMade, color: 'bg-blue' },
    { label: 'PERSONS', value: metrics.personsReached.toString(), count: metrics.personsReached, color: 'bg-green' },
    { label: 'APPOINTMENTS', value: metrics.appointmentsBooked.toString(), count: metrics.appointmentsBooked, color: 'bg-green' },
    { label: 'SHOWS', value: metrics.shows.toString(), count: metrics.shows, color: 'bg-green' },
    { label: 'SALES', value: metrics.sales.toString(), count: metrics.sales, color: 'bg-gold' },
    { label: 'UPSELLS', value: metrics.upsells.toString(), count: metrics.upsells, color: 'bg-gold' },
  ];

  const maxCount = Math.max(...stages.filter(s => s.count !== null).map(s => s.count || 0));

  return (
    <div className="bg-navy rounded-2xl p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-inverse mb-6 text-center">
        Your Sales Funnel
      </h3>

      <div className="space-y-3">
        {stages.map((stage, index) => {
          const width = stage.count !== null
            ? Math.max((stage.count / maxCount) * 100, 5)
            : 100;

          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-24 sm:w-28 text-right">
                <span className="text-xs text-inverse-muted">{stage.label}</span>
              </div>
              <div className="flex-1 relative h-8">
                <div className="absolute inset-0 bg-white/5 rounded" />
                <motion.div
                  className={`absolute inset-y-0 left-0 ${stage.color} rounded flex items-center justify-end px-2`}
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    {stage.value}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Conversion Arrows */}
      <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center text-xs">
        <div>
          <p className="text-inverse-muted">Answer Rate</p>
          <p className="text-green font-bold">
            {Math.round((metrics.personsReached / metrics.callsMade) * 100)}%
          </p>
        </div>
        <div>
          <p className="text-inverse-muted">Show Rate</p>
          <p className="text-green font-bold">
            {Math.round((metrics.shows / metrics.appointmentsBooked) * 100)}%
          </p>
        </div>
        <div>
          <p className="text-inverse-muted">Close Rate</p>
          <p className="text-gold font-bold">
            {Math.round((metrics.sales / metrics.shows) * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}
