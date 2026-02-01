// Educational questions designed to create "aha moments"
// Each question teaches a key insight about sales/lead management

export interface EducationalQuestionData {
  id: string;
  question: string;
  context?: string; // Optional context shown above question
  options: {
    value: string;
    label: string;
  }[];
  correctAnswer: string;
  insight: {
    statistic: string;
    source?: string;
    explanation: string;
    personalConnection: (userAnswer: string, userData: Record<string, number>) => string;
  };
  relatedMetric?: string; // Links to their quiz data (e.g., 'showRate')
}

export const educationalQuestions: EducationalQuestionData[] = [
  {
    id: 'speed-to-lead',
    question: 'What percentage of leads go cold after 48 hours without contact?',
    context: 'Think about your own leads...',
    options: [
      { value: '40', label: '40%' },
      { value: '60', label: '60%' },
      { value: '80', label: '80%' },
      { value: '95', label: '95%' },
    ],
    correctAnswer: '80',
    insight: {
      statistic: '80% of leads go cold after 48 hours',
      source: 'Harvard Business Review',
      explanation: 'Speed-to-lead is the #1 predictor of conversion. The first responder wins 78% of deals.',
      personalConnection: (userAnswer, userData) => {
        if (userAnswer === '40') {
          return "You're underestimating the urgency. Every hour matters more than you think.";
        }
        if (userAnswer === '80') {
          return "You nailed it. Now ask yourself: are you consistently reaching leads within the first hour?";
        }
        return "The window is even tighter than most realize. This is why automated follow-up is critical.";
      },
    },
  },
  {
    id: 'healthy-show-rate',
    question: 'What\'s considered a healthy show rate for booked appointments?',
    context: 'Not everyone who books actually shows up...',
    options: [
      { value: '40-50', label: '40-50%' },
      { value: '50-60', label: '50-60%' },
      { value: '70-80', label: '70-80%' },
      { value: '85-95', label: '85-95%' },
    ],
    correctAnswer: '70-80',
    insight: {
      statistic: '70-80% is the benchmark for healthy show rates',
      explanation: 'Below 60% signals a confirmation/reminder problem. Above 80% usually means heavy qualification filtering.',
      personalConnection: (userAnswer, userData) => {
        const showRate = userData.showRate || 0.59;
        const showRatePercent = Math.round(showRate * 100);
        if (showRatePercent < 60) {
          return `Your show rate is ${showRatePercent}%. That's ${Math.round(70 - showRatePercent)}+ points below healthy—every 10% improvement means significantly more closes.`;
        }
        if (showRatePercent >= 70) {
          return `Your ${showRatePercent}% show rate is solid. Let's focus on other leverage points.`;
        }
        return `At ${showRatePercent}%, you're close. Smart reminder sequences could push you into the healthy range.`;
      },
    },
    relatedMetric: 'showRate',
  },
  {
    id: 'follow-up-touches',
    question: 'How many follow-up touches does it take to book an appointment on average?',
    options: [
      { value: '2-3', label: '2-3 touches' },
      { value: '4-5', label: '4-5 touches' },
      { value: '8-12', label: '8-12 touches' },
      { value: '15+', label: '15+ touches' },
    ],
    correctAnswer: '8-12',
    insight: {
      statistic: '8-12 follow-up touches on average',
      source: 'National Sales Executive Association',
      explanation: '80% of sales require 5+ follow-ups, but 44% of salespeople give up after just 1. The fortune is in the follow-up.',
      personalConnection: (userAnswer, userData) => {
        if (userAnswer === '2-3' || userAnswer === '4-5') {
          return "Most businesses give up way too early. If you're not automating at least 8 touches, you're leaving money on the table.";
        }
        return "You understand persistence. Now the question is: do you have a system doing this automatically, or is it manual?";
      },
    },
  },
  {
    id: 'lead-response-time',
    question: 'How much does conversion drop if you wait 30 minutes to call a new lead?',
    context: 'A new lead just came in...',
    options: [
      { value: '10', label: 'Drops 10%' },
      { value: '25', label: 'Drops 25%' },
      { value: '50', label: 'Drops 50%' },
      { value: '400', label: 'Drops 400% (5x worse)' },
    ],
    correctAnswer: '400',
    insight: {
      statistic: 'Waiting 30 minutes = 400% drop in conversion',
      source: 'InsideSales.com',
      explanation: 'Calling within 5 minutes is 21x more effective than calling at 30 minutes. The lead is literally thinking about their problem RIGHT NOW.',
      personalConnection: (userAnswer, userData) => {
        if (userAnswer === '400') {
          return "You get it. Now imagine having an AI that responds in seconds, 24/7. That's the edge.";
        }
        return "It's actually worse than most people guess. This is why 'we'll call you back' is killing your conversion.";
      },
    },
  },
  {
    id: 'no-show-cost',
    question: 'If you pay $50 per booked appointment, what does each no-show actually cost?',
    context: 'Factor in the wasted time slot, opportunity cost, and lost momentum...',
    options: [
      { value: '50', label: 'Just the $50 ad spend' },
      { value: '100', label: 'About $100' },
      { value: '200', label: '$200-300' },
      { value: '500', label: '$500+' },
    ],
    correctAnswer: '200',
    insight: {
      statistic: 'True no-show cost: $200-300+',
      explanation: 'Ad spend + sales rep time + opportunity cost of that slot + broken sales momentum. No-shows compound.',
      personalConnection: (userAnswer, userData) => {
        const showRate = userData.showRate || 0.59;
        const noShowRate = 1 - showRate;
        const monthlyLeads = Math.round((userData.adSpend || 500) / (userData.costPerLead || 6));
        const estimatedNoShows = Math.round(monthlyLeads * (userData.callAnswerRate || 0.3) * (userData.callToBookingRate || 0.4) * noShowRate);
        if (estimatedNoShows > 5) {
          return `With ~${estimatedNoShows} no-shows per month, that's potentially ${estimatedNoShows * 250}+ in hidden costs. Ouch.`;
        }
        return "Every no-show is money burned. Smart confirmation sequences pay for themselves instantly.";
      },
    },
  },
];

// Get questions in order for quiz flow
export function getEducationalQuestionsForFlow(): EducationalQuestionData[] {
  // Select best 3 questions for educational impact without making quiz too long
  return [
    educationalQuestions.find(q => q.id === 'speed-to-lead')!,
    educationalQuestions.find(q => q.id === 'healthy-show-rate')!,
    educationalQuestions.find(q => q.id === 'follow-up-touches')!,
  ];
}
