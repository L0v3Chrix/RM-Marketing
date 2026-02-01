"use client";

import { FadeInOnScroll } from "@/components/animations";

interface IntentGaugeProps {
  score?: number; // 0-100, defaults to 65
}

export function IntentGauge({ score = 65 }: IntentGaugeProps) {
  // Calculate needle rotation (0 = -90deg, 100 = 90deg)
  const rotation = -90 + (score / 100) * 180;
  
  // Determine which segment the score falls in
  const getLabel = (s: number) => {
    if (s < 16) return "Browsing";
    if (s < 31) return "Learning";
    if (s < 50) return "Evaluating";
    if (s < 76) return "Ready to Buy";
    return "Urgent";
  };

  return (
    <FadeInOnScroll>
      <div className="bg-card rounded-2xl p-4 md:p-6 border border-border-subtle">
        <h3 className="text-text-primary font-bold text-base md:text-lg text-center mb-4 md:mb-6">
          Intent Score Gauge
        </h3>

        {/* Gauge Container */}
        <div className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto aspect-[2/1.2]">
          {/* SVG Gauge */}
          <svg viewBox="0 0 200 120" className="w-full h-auto">
            {/* Background arc segments */}
            <defs>
              <linearGradient id="browsing" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="learning" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
              <linearGradient id="evaluating" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#2dd4bf" />
              </linearGradient>
              <linearGradient id="ready" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
              <linearGradient id="urgent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>

            {/* Arc segments - drawn as paths */}
            {/* Browsing: 0-16 */}
            <path
              d="M 30 100 A 70 70 0 0 1 44 55"
              fill="none"
              stroke="url(#browsing)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Learning: 16-31 */}
            <path
              d="M 48 48 A 70 70 0 0 1 80 32"
              fill="none"
              stroke="url(#learning)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Evaluating: 31-50 */}
            <path
              d="M 85 30 A 70 70 0 0 1 120 30"
              fill="none"
              stroke="url(#evaluating)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Ready to Buy: 50-76 */}
            <path
              d="M 125 32 A 70 70 0 0 1 158 52"
              fill="none"
              stroke="url(#ready)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            {/* Urgent: 76-100 */}
            <path
              d="M 162 58 A 70 70 0 0 1 170 100"
              fill="none"
              stroke="url(#urgent)"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* Needle pivot point */}
            <circle cx="100" cy="105" r="8" fill="#14b8a6" />
            
            {/* Needle */}
            <line
              x1="100"
              y1="105"
              x2="100"
              y2="40"
              stroke="#1a1a1a"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${rotation} 100 105)`}
              className="transition-transform duration-1000"
            />
            <line
              x1="100"
              y1="105"
              x2="100"
              y2="42"
              stroke="#14b8a6"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${rotation} 100 105)`}
              className="transition-transform duration-1000"
            />
          </svg>

          {/* Score display */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">{score}</div>
          </div>
        </div>

        {/* Labels */}
        <div className="flex justify-between px-2 md:px-4 mt-2 text-xs text-text-muted">
          <span>0</span>
          <span>Browsing</span>
          <span>Learning</span>
          <span>Evaluating</span>
          <span>Ready</span>
          <span>100</span>
        </div>

        {/* Current Status */}
        <div className="text-center mt-4 pt-4 border-t border-border-subtle">
          <span className="text-text-muted text-sm">Current Status: </span>
          <span className="text-accent font-semibold">{getLabel(score)}</span>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
