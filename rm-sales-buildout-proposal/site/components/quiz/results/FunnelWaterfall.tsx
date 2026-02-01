"use client";

import { motion } from "framer-motion";
import { CalculatedMetrics } from "../utils/calculations";

interface FunnelWaterfallProps {
  metrics: CalculatedMetrics;
  adSpend: number;
}

export function FunnelWaterfall({ metrics, adSpend }: FunnelWaterfallProps) {
  const stages = [
    { label: 'AD SPEND', value: `$${adSpend.toLocaleString()}`, count: null, color: 'bg-text-secondary' },
    { label: 'LEADS', value: metrics.leads.toString(), count: metrics.leads, color: 'bg-text-secondary' },
    { label: 'CALLS', value: metrics.callsMade.toString(), count: metrics.callsMade, color: 'bg-text-secondary' },
    { label: 'PERSONS', value: metrics.personsReached.toString(), count: metrics.personsReached, color: 'bg-accent' },
    { label: 'APPOINTMENTS', value: metrics.appointmentsBooked.toString(), count: metrics.appointmentsBooked, color: 'bg-accent' },
    { label: 'SHOWS', value: metrics.shows.toString(), count: metrics.shows, color: 'bg-accent' },
    { label: 'SALES', value: metrics.sales.toString(), count: metrics.sales, color: 'bg-success' },
    { label: 'UPSELLS', value: metrics.upsells.toString(), count: metrics.upsells, color: 'bg-success' },
  ];

  const maxCount = Math.max(...stages.filter(s => s.count !== null).map(s => s.count || 0));

  return (
    <div className="bg-elevated rounded-2xl p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-4 sm:mb-6 text-center">
        Your Sales Funnel
      </h3>

      <div className="space-y-2 sm:space-y-3">
        {stages.map((stage, index) => {
          const width = stage.count !== null
            ? Math.max((stage.count / maxCount) * 100, 8)
            : 100;

          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-24 sm:w-28 text-right flex-shrink-0">
                <span className="text-[11px] sm:text-xs text-text-muted uppercase tracking-tight">{stage.label}</span>
              </div>
              <div className="flex-1 relative h-7 sm:h-8 min-w-0">
                <div className="absolute inset-0 bg-card rounded" />
                <motion.div
                  className={`absolute inset-y-0 left-0 ${stage.color} rounded flex items-center justify-end px-2`}
                  initial={{ width: 0 }}
                  animate={{ width: `${width}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="text-[11px] sm:text-xs font-bold text-base whitespace-nowrap">
                    {stage.value}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Conversion Arrows */}
      <div className="mt-6 pt-4 border-t border-border-subtle grid grid-cols-3 gap-4 text-center text-xs">
        <div>
          <p className="text-text-muted">Answer Rate</p>
          <p className="text-accent font-bold">
            {Math.round((metrics.personsReached / metrics.callsMade) * 100)}%
          </p>
        </div>
        <div>
          <p className="text-text-muted">Show Rate</p>
          <p className="text-accent font-bold">
            {Math.round((metrics.shows / metrics.appointmentsBooked) * 100)}%
          </p>
        </div>
        <div>
          <p className="text-text-muted">Close Rate</p>
          <p className="text-success font-bold">
            {Math.round((metrics.sales / metrics.shows) * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}
