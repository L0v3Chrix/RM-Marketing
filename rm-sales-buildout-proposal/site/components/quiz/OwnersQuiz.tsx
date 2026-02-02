"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, 
  Rocket, 
  Target, 
  ArrowRight, 
  Clock,
  DollarSign,
  Database,
  Users,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Brain,
  Lightbulb,
  Zap,
  BarChart3,
  Phone,
} from "lucide-react";

// ============================================
// VERIFIED DATA - from VERIFIED-DATA-SUMMARY.md
// ============================================
const VERIFIED_DATA = {
  totalRevenue: 109927,
  totalTransactions: 214,
  uniqueCustomers: 120,
  firstTimeRevenue: 45999,
  repeatRevenue: 63929,
  failedPayments: 25870,
  refunds: 5508,
  netAfterRefunds: 104419,
  adSpend90Days: 1500,
  leads: 238,
  appointments: 46,
  appointmentsShowed: 22,
  showRate: 47.8,
  estimatedCloseRate: 30,
  cpl: 6.30,
  cac: 227,
  mrr: 3382,
  databaseSize: 10000, // estimated contacts
};

// ============================================
// TYPES
// ============================================
interface QuizAnswer {
  questionId: string;
  value: string;
  label: string;
}

interface OwnersQuizProps {
  onComplete?: () => void;
}

// ============================================
// QUESTION DEFINITIONS
// ============================================
const QUESTIONS = [
  // Section 1: The Time Question
  {
    id: 'q1',
    section: 1,
    sectionTitle: "The Time Question",
    question: "How many hours per week do you personally spend on sales activities?",
    subtext: "Include follow-ups, calls, proposals, and closing.",
    options: [
      { value: '0-5', label: '0-5 hours', icon: '⏰' },
      { value: '5-10', label: '5-10 hours', icon: '📊' },
      { value: '10-20', label: '10-20 hours', icon: '🔥' },
      { value: '20+', label: '20+ hours', icon: '😰' },
    ],
    reveal: {
      type: 'opportunity-cost',
      title: "Your Hidden Opportunity Cost",
      dynamic: true,
    },
  },
  {
    id: 'q2',
    section: 1,
    sectionTitle: "The Time Question",
    question: "When a lead comes in at 2pm on Tuesday, how quickly does someone call them back?",
    subtext: "Be honest. Not what should happen — what actually happens.",
    options: [
      { value: 'within-5-min', label: 'Within 5 minutes', icon: '⚡' },
      { value: 'within-hour', label: 'Within an hour', icon: '⏱️' },
      { value: 'same-day', label: 'Same day', icon: '📅' },
      { value: 'next-day', label: 'Next day', icon: '🌅' },
      { value: 'whenever', label: 'Whenever we can', icon: '🤷' },
    ],
    reveal: {
      type: 'speed-to-lead',
      title: "The Speed-to-Lead Reality",
      dynamic: true,
    },
  },
  // Section 2: The Math You're Not Doing
  {
    id: 'q3',
    section: 2,
    sectionTitle: "The Math You're Not Doing",
    question: "Do you know your current cost per qualified appointment?",
    subtext: "Not leads — actual appointments that show up.",
    options: [
      { value: 'yes', label: 'Yes, exactly', icon: '✅' },
      { value: 'think-so', label: 'I think so', icon: '🤔' },
      { value: 'not-really', label: 'Not really', icon: '😅' },
      { value: 'no-idea', label: 'No idea', icon: '🤷' },
    ],
    reveal: {
      type: 'cpl-cpa',
      title: "Here's What We Found",
      dynamic: true,
    },
  },
  {
    id: 'q4',
    section: 2,
    sectionTitle: "The Math You're Not Doing",
    question: "What percentage of your database has been contacted in the last 90 days?",
    subtext: "All contacts — past leads, customers, inquiries.",
    options: [
      { value: '80+', label: '80%+', icon: '🏆' },
      { value: '50-80', label: '50-80%', icon: '📈' },
      { value: '25-50', label: '25-50%', icon: '📊' },
      { value: 'less-25', label: 'Less than 25%', icon: '📉' },
      { value: 'dont-know', label: "I don't know", icon: '❓' },
    ],
    reveal: {
      type: 'database-goldmine',
      title: "The Database Goldmine",
      dynamic: true,
    },
  },
  // Section 3: The Questions You're Not Asking
  {
    id: 'q5',
    section: 3,
    sectionTitle: "The Questions You're Not Asking",
    question: "If you got 100 qualified leads tomorrow, could you handle them?",
    subtext: "Not just call them — actually work them properly.",
    options: [
      { value: 'absolutely', label: 'Absolutely', icon: '💪' },
      { value: 'probably', label: 'Probably', icon: '🤞' },
      { value: 'scramble', label: "We'd scramble", icon: '😬' },
      { value: 'no-way', label: 'No way', icon: '🚫' },
    ],
    reveal: {
      type: 'bottleneck',
      title: "The Real Bottleneck",
      dynamic: true,
    },
  },
  {
    id: 'q6',
    section: 3,
    sectionTitle: "The Questions You're Not Asking",
    question: "Who follows up with leads that don't buy on the first call?",
    subtext: "The ones who said 'let me think about it.'",
    options: [
      { value: 'i-do', label: 'I do', icon: '🙋' },
      { value: 'my-va', label: 'My VA', icon: '👩‍💼' },
      { value: 'automated', label: 'Automated sequence', icon: '🤖' },
      { value: 'no-one', label: 'No one', icon: '🕳️' },
      { value: 'no-system', label: "We don't have a system", icon: '❌' },
    ],
    reveal: {
      type: 'follow-up-stats',
      title: "Where the Money Actually Is",
      dynamic: true,
    },
  },
  // Section 4: The Real Blocker
  {
    id: 'q7',
    section: 4,
    sectionTitle: "The Real Blocker",
    question: "What's actually stopping you from scaling revenue right now?",
    subtext: "Pick the biggest one.",
    options: [
      { value: 'not-enough-leads', label: 'Not enough leads', icon: '📉' },
      { value: 'leads-dont-convert', label: "Leads don't convert", icon: '🔄' },
      { value: 'no-time', label: 'No time for sales', icon: '⏰' },
      { value: 'no-team', label: 'No team to help', icon: '👥' },
      { value: 'not-sure', label: 'Not sure', icon: '🤔' },
    ],
    reveal: null, // No reveal - feeds into summary
  },
  {
    id: 'q8',
    section: 4,
    sectionTitle: "The Real Blocker",
    question: "If we could solve that problem in 60 days, what would change?",
    subtext: "What would that mean for you?",
    options: [
      { value: 'have-time', label: 'Finally have time', icon: '🕐' },
      { value: 'could-grow', label: 'Could actually grow', icon: '📈' },
      { value: 'stop-bottleneck', label: 'Stop being the bottleneck', icon: '🔓' },
      { value: 'sleep-better', label: 'Sleep better', icon: '😴' },
    ],
    reveal: null, // No reveal - feeds into summary
  },
];

// ============================================
// REVEAL COMPONENTS
// ============================================
function RevealCard({ 
  type, 
  answer, 
  onContinue 
}: { 
  type: string; 
  answer: QuizAnswer; 
  onContinue: () => void;
}) {
  const renderRevealContent = () => {
    switch (type) {
      case 'opportunity-cost': {
        const hoursMap: Record<string, number> = {
          '0-5': 2.5,
          '5-10': 7.5,
          '10-20': 15,
          '20+': 25,
        };
        const hours = hoursMap[answer.value] || 10;
        const founderRate = 500;
        const weeklyCost = hours * founderRate;
        const monthlyCost = weeklyCost * 4;
        const yearlyCost = monthlyCost * 12;
        
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#F7931E]">
              <DollarSign className="w-6 h-6" />
              <span className="font-semibold">The Math Most Founders Skip</span>
            </div>
            
            <p className="text-text-secondary">
              At a {answer.label.toLowerCase()} founder rate of <span className="text-text-primary font-semibold">${founderRate}/hr</span>:
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#FF6B35]/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[#F7931E]">${weeklyCost.toLocaleString()}</p>
                <p className="text-xs text-text-muted">per week</p>
              </div>
              <div className="bg-[#FF6B35]/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[#F7931E]">${monthlyCost.toLocaleString()}</p>
                <p className="text-xs text-text-muted">per month</p>
              </div>
              <div className="bg-[#FF6B35]/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[#F7931E]">${yearlyCost.toLocaleString()}</p>
                <p className="text-xs text-text-muted">per year</p>
              </div>
            </div>
            
            <div className="bg-card/50 rounded-lg p-4 border border-border-subtle">
              <p className="text-sm text-text-secondary">
                <span className="text-text-primary font-medium">That's not "sales time" — that's founder time</span> that could be spent on product, strategy, or growth. 
                The question isn't whether you can afford help. It's whether you can afford not to have it.
              </p>
            </div>
          </div>
        );
      }
      
      case 'speed-to-lead': {
        const isGood = answer.value === 'within-5-min';
        const isOkay = answer.value === 'within-hour';
        
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#F7931E]">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">Speed-to-Lead Science</span>
            </div>
            
            {isGood ? (
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <p className="text-green-400 font-semibold mb-2">You're in the top 1%</p>
                <p className="text-sm text-text-secondary">
                  Most businesses don't respond within 5 minutes. This is a competitive advantage — if it's consistent.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#FF6B35]/10 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-[#F7931E]">21x</p>
                    <p className="text-xs text-text-muted mt-1">more likely to qualify</p>
                    <p className="text-xs text-text-subtle">if called within 5 min</p>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-4 text-center">
                    <p className="text-3xl font-bold text-red-400">80%</p>
                    <p className="text-xs text-text-muted mt-1">drop in conversion</p>
                    <p className="text-xs text-text-subtle">after 30 minutes</p>
                  </div>
                </div>
                
                {!isOkay && (
                  <div className="bg-card/50 rounded-lg p-4 border border-[#F7931E]/30">
                    <p className="text-sm text-text-secondary">
                      <span className="text-[#F7931E] font-medium">"{answer.label}"</span> means you're leaving money on the table. 
                      Not because your offer is bad — because hot leads go cold. Fast.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        );
      }
      
      case 'cpl-cpa': {
        const knowsMetrics = answer.value === 'yes';
        
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#F7931E]">
              <BarChart3 className="w-6 h-6" />
              <span className="font-semibold">Your Actual Numbers</span>
            </div>
            
            <p className="text-text-secondary">
              We spent 90 days in your data. Here's what we found:
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card rounded-lg p-4 border border-border-subtle">
                <p className="text-xs text-text-muted uppercase tracking-wide">Cost Per Lead</p>
                <p className="text-3xl font-bold text-green-400">${VERIFIED_DATA.cpl}</p>
                <p className="text-xs text-green-400/80 mt-1">← Excellent</p>
              </div>
              <div className="bg-card rounded-lg p-4 border border-border-subtle">
                <p className="text-xs text-text-muted uppercase tracking-wide">Cost Per Show</p>
                <p className="text-3xl font-bold text-[#F7931E]">${Math.round(VERIFIED_DATA.adSpend90Days / VERIFIED_DATA.appointmentsShowed)}</p>
                <p className="text-xs text-text-muted mt-1">{VERIFIED_DATA.appointmentsShowed} shows / 90 days</p>
              </div>
            </div>
            
            <div className="bg-[#FF6B35]/10 rounded-lg p-4 border border-[#F7931E]/30">
              <p className="text-sm text-text-secondary">
                <span className="text-text-primary font-medium">CPL ≠ CPA.</span> You're getting leads cheap, but {VERIFIED_DATA.showRate}% show rate means only {VERIFIED_DATA.appointmentsShowed} out of {VERIFIED_DATA.appointments} booked calls actually happened.
                {!knowsMetrics && " Most people don't track this difference — and it's where deals die."}
              </p>
            </div>
          </div>
        );
      }
      
      case 'database-goldmine': {
        const estimatedValue = 50000; // Conservative estimate
        const monthlyAdSpend = Math.round(VERIFIED_DATA.adSpend90Days / 3);
        const multiple = Math.round(estimatedValue / monthlyAdSpend);
        
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#F7931E]">
              <Database className="w-6 h-6" />
              <span className="font-semibold">The Goldmine You're Sitting On</span>
            </div>
            
            <div className="bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/10 rounded-lg p-5 border border-[#F7931E]/30">
              <p className="text-4xl font-bold text-[#F7931E] mb-2">~{VERIFIED_DATA.databaseSize.toLocaleString()}</p>
              <p className="text-text-primary font-medium">contacts in your database</p>
              <p className="text-sm text-text-muted mt-2">
                At ~${monthlyAdSpend}/mo in ad spend, that's <span className="text-[#F7931E] font-semibold">{multiple}x your monthly budget</span> already sitting there.
              </p>
            </div>
            
            {(answer.value === 'less-25' || answer.value === 'dont-know') && (
              <div className="bg-card/50 rounded-lg p-4 border border-border-subtle">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary">
                    If less than 25% of your database has been touched in 90 days, you have 
                    <span className="text-text-primary font-medium"> thousands of potential buyers </span> 
                    going cold while you pay for new leads.
                  </p>
                </div>
              </div>
            )}
            
            <p className="text-xs text-text-subtle">
              Industry average: reactivation campaigns return 10-50x the cost of acquiring new leads.
            </p>
          </div>
        );
      }
      
      case 'bottleneck': {
        const canHandle = answer.value === 'absolutely' || answer.value === 'probably';
        
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#F7931E]">
              <TrendingUp className="w-6 h-6" />
              <span className="font-semibold">The Conversion Capacity Question</span>
            </div>
            
            {canHandle ? (
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <p className="text-green-400 font-semibold mb-2">That's good — most can't</p>
                <p className="text-sm text-text-secondary">
                  But here's the real question: at your current show rate ({VERIFIED_DATA.showRate}%), 
                  you'd need <span className="text-text-primary font-medium">~200 leads to get 100 qualified appointments</span>. 
                  Can you handle that volume consistently?
                </p>
              </div>
            ) : (
              <>
                <div className="bg-[#FF6B35]/10 rounded-lg p-4 border border-[#F7931E]/30">
                  <p className="text-[#F7931E] font-semibold mb-2">You just identified the real bottleneck</p>
                  <p className="text-sm text-text-secondary">
                    More leads won't help if you can't convert them. This is why most "lead gen" fails — 
                    they're solving the wrong problem.
                  </p>
                </div>
                
                <div className="bg-card/50 rounded-lg p-4">
                  <p className="text-sm text-text-secondary">
                    <span className="text-text-primary font-medium">The math:</span> {VERIFIED_DATA.leads} leads → 
                    {VERIFIED_DATA.appointments} booked → {VERIFIED_DATA.appointmentsShowed} shows → ~7 sales 
                    <br />
                    <span className="text-text-muted">What happens when you 3x the leads without fixing capacity?</span>
                  </p>
                </div>
              </>
            )}
          </div>
        );
      }
      
      case 'follow-up-stats': {
        const hasSystem = answer.value === 'automated' || answer.value === 'my-va';
        const noFollowUp = answer.value === 'no-one' || answer.value === 'no-system';
        
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#F7931E]">
              <Lightbulb className="w-6 h-6" />
              <span className="font-semibold">The Follow-Up Reality</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FF6B35]/10 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold text-[#F7931E]">80%</p>
                <p className="text-xs text-text-muted mt-1">of sales happen after</p>
                <p className="text-sm text-text-primary font-medium">5+ touchpoints</p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center border border-border-subtle">
                <p className="text-4xl font-bold text-text-primary">44%</p>
                <p className="text-xs text-text-muted mt-1">of salespeople give up</p>
                <p className="text-sm text-text-muted">after 1 follow-up</p>
              </div>
            </div>
            
            {noFollowUp ? (
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 font-semibold mb-1">This is where your money goes to die</p>
                    <p className="text-sm text-text-secondary">
                      "{answer.label}" means 80% of your potential sales are evaporating. 
                      That's not a lead problem — it's a system problem.
                    </p>
                  </div>
                </div>
              </div>
            ) : hasSystem ? (
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <p className="text-green-400 font-semibold mb-2">You're ahead of most</p>
                <p className="text-sm text-text-secondary">
                  Having {answer.value === 'automated' ? 'automation' : 'a VA'} on follow-ups is good. 
                  The question is: is it actually converting, or just "touching" leads?
                </p>
              </div>
            ) : (
              <div className="bg-card/50 rounded-lg p-4 border border-border-subtle">
                <p className="text-sm text-text-secondary">
                  "{answer.label}" is common but not scalable. Every hour you spend following up 
                  is an hour not spent on $500/hr founder work.
                </p>
              </div>
            )}
          </div>
        );
      }
      
      default:
        return null;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="bg-elevated rounded-2xl border border-[#F7931E]/20 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#FFB347]" />
        <div className="p-6 md:p-8">
          {renderRevealContent()}
        </div>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#F7931E]/30 transition-all"
      >
        Continue
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}

// ============================================
// SUMMARY SCREEN
// ============================================
function QuizSummary({ 
  answers, 
  onComplete 
}: { 
  answers: QuizAnswer[];
  onComplete: () => void;
}) {
  const getAnswerByQuestion = (questionId: string) => {
    return answers.find(a => a.questionId === questionId);
  };
  
  const blockerAnswer = getAnswerByQuestion('q7');
  const outcomeAnswer = getAnswerByQuestion('q8');
  const timeAnswer = getAnswerByQuestion('q1');
  const speedAnswer = getAnswerByQuestion('q2');
  const followUpAnswer = getAnswerByQuestion('q6');
  
  // Determine key insights based on answers
  const insights = [];
  
  if (timeAnswer && ['10-20', '20+'].includes(timeAnswer.value)) {
    insights.push({
      icon: Clock,
      label: 'Time Bottleneck',
      detail: "You're spending significant founder time on sales",
      color: 'text-yellow-400',
    });
  }
  
  if (speedAnswer && ['same-day', 'next-day', 'whenever'].includes(speedAnswer.value)) {
    insights.push({
      icon: Phone,
      label: 'Speed-to-Lead Gap',
      detail: 'Leads are going cold before first contact',
      color: 'text-red-400',
    });
  }
  
  if (followUpAnswer && ['no-one', 'no-system', 'i-do'].includes(followUpAnswer.value)) {
    insights.push({
      icon: Users,
      label: 'Follow-Up Gap',
      detail: 'No systematic follow-up = 80% of deals lost',
      color: 'text-orange-400',
    });
  }
  
  return (
    <div className="min-h-screen bg-base flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center shadow-lg">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-text-primary text-lg tracking-tight">GHL Mastery</p>
            <p className="text-xs text-[#F7931E] font-medium">Your Assessment</p>
          </div>
        </div>
      </header>
      
      <main className="flex-1 px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Hero Summary */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F7931E]/30"
              >
                <Brain className="w-10 h-10 text-white" />
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Here's What We Know About <span className="gradient-text">GHL Mastery</span>
              </h1>
              
              <p className="text-text-secondary text-lg">
                We spent 90 days in your data. Here's what we found.
              </p>
            </div>
            
            {/* Verified Data Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-xl p-4 border border-border-subtle"
              >
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">90-Day Revenue</p>
                <p className="text-2xl font-bold text-text-primary">${VERIFIED_DATA.totalRevenue.toLocaleString()}</p>
                <p className="text-xs text-green-400">Verified from Stripe</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="bg-card rounded-xl p-4 border border-border-subtle"
              >
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Cost Per Lead</p>
                <p className="text-2xl font-bold text-green-400">${VERIFIED_DATA.cpl}</p>
                <p className="text-xs text-text-muted">Excellent CPL</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-xl p-4 border border-border-subtle"
              >
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Show Rate</p>
                <p className="text-2xl font-bold text-[#F7931E]">{VERIFIED_DATA.showRate}%</p>
                <p className="text-xs text-text-muted">{VERIFIED_DATA.appointmentsShowed}/{VERIFIED_DATA.appointments} showed</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="bg-card rounded-xl p-4 border border-border-subtle"
              >
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">Leads (90 days)</p>
                <p className="text-2xl font-bold text-text-primary">{VERIFIED_DATA.leads}</p>
                <p className="text-xs text-text-muted">from ${VERIFIED_DATA.adSpend90Days} spend</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card rounded-xl p-4 border border-border-subtle"
              >
                <p className="text-xs text-text-muted uppercase tracking-wide mb-1">New Sales Revenue</p>
                <p className="text-2xl font-bold text-text-primary">${VERIFIED_DATA.firstTimeRevenue.toLocaleString()}</p>
                <p className="text-xs text-text-muted">First-time buyers</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="bg-[#FF6B35]/10 rounded-xl p-4 border border-[#F7931E]/30"
              >
                <p className="text-xs text-[#F7931E] uppercase tracking-wide mb-1">Failed Payments</p>
                <p className="text-2xl font-bold text-[#F7931E]">${VERIFIED_DATA.failedPayments.toLocaleString()}</p>
                <p className="text-xs text-text-muted">Recoverable revenue</p>
              </motion.div>
            </div>
            
            {/* Your Answers Reflection */}
            {blockerAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-elevated rounded-xl p-6 border border-border-subtle"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#F7931E]" />
                  What You Told Us
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7931E] mt-2" />
                    <div>
                      <p className="text-text-primary font-medium">Your biggest blocker:</p>
                      <p className="text-text-secondary">"{blockerAnswer.label}"</p>
                    </div>
                  </div>
                  
                  {outcomeAnswer && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                      <div>
                        <p className="text-text-primary font-medium">What solving it means:</p>
                        <p className="text-text-secondary">"{outcomeAnswer.label}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
            
            {/* Identified Gaps */}
            {insights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-card rounded-xl p-6 border border-[#F7931E]/20"
              >
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#F7931E]" />
                  Gaps We Identified
                </h3>
                
                <div className="space-y-3">
                  {insights.map((insight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <insight.icon className={`w-5 h-5 ${insight.color} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-text-primary font-medium">{insight.label}</p>
                        <p className="text-sm text-text-muted">{insight.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-[#FF6B35]/20 to-[#F7931E]/10 rounded-2xl p-6 md:p-8 border border-[#F7931E]/30 text-center"
            >
              <Sparkles className="w-8 h-8 text-[#F7931E] mx-auto mb-4" />
              
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                Ready to See the Full Analysis?
              </h3>
              
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                We've mapped every opportunity, calculated the ROI, and built a 60-day plan to fix it.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onComplete}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#F7931E]/30 transition-all"
              >
                See the Full Analysis
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

// ============================================
// MAIN QUIZ COMPONENT
// ============================================
export function OwnersQuiz({ onComplete }: OwnersQuizProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showReveal, setShowReveal] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUESTIONS.length;
  const progressPercent = Math.round(((currentQuestionIndex + (showReveal ? 0.5 : 0)) / totalQuestions) * 100);
  
  const handleSelectOption = useCallback((value: string, label: string) => {
    setSelectedOption(value);
    
    // Store answer
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
      return [...filtered, { questionId: currentQuestion.id, value, label }];
    });
    
    // Show reveal after brief delay, or move to next question
    setTimeout(() => {
      if (currentQuestion.reveal) {
        setShowReveal(true);
      } else {
        moveToNextQuestion();
      }
    }, 300);
  }, [currentQuestion]);
  
  const moveToNextQuestion = useCallback(() => {
    setShowReveal(false);
    setSelectedOption(null);
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  }, [currentQuestionIndex, totalQuestions]);
  
  // Intro Screen
  if (showIntro) {
    return (
      <div className="min-h-screen bg-base flex flex-col">
        <header className="px-6 py-4 border-b border-border-subtle">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center shadow-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-text-primary text-lg tracking-tight">GHL Mastery</p>
              <p className="text-xs text-[#F7931E] font-medium">Sales Buildout Proposal</p>
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-elevated rounded-2xl border border-[#F7931E]/30 overflow-hidden shadow-xl">
              <div className="h-1.5 bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#FFB347]" />
              
              <div className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#F7931E]/30">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                
                <h1 className="text-[#F7931E] text-sm font-bold uppercase tracking-widest mb-4">
                  The Owner's Assessment
                </h1>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6 leading-tight">
                  8 Questions That Reveal
                  <br />
                  <span className="gradient-text">Where the Money Is</span>
                </h2>

                <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                  This isn't a form. It's a mirror. Each question reveals something you might not be tracking — and each reveal uses your actual data.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
                  <div className="p-4 bg-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                    <Clock className="w-6 h-6 text-[#F7931E] mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-primary">~3 minutes</p>
                    <p className="text-xs text-text-muted mt-1">8 questions, your pace</p>
                  </div>
                  <div className="p-4 bg-[#FF6B35]/5 rounded-xl border border-[#FF6B35]/20">
                    <Target className="w-6 h-6 text-[#F7931E] mx-auto mb-2" />
                    <p className="text-sm font-medium text-text-primary">Your Data</p>
                    <p className="text-xs text-text-muted mt-1">Reveals use real numbers</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowIntro(false)}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#F7931E]/30 transition-all w-full sm:w-auto"
                >
                  Let's Start
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <p className="text-center text-xs text-text-subtle mt-6">
              Prepared for <span className="text-[#F7931E]">Adam & Brendan</span> · GHL Mastery
            </p>
          </motion.div>
        </main>
      </div>
    );
  }
  
  // Summary Screen
  if (isComplete) {
    return <QuizSummary answers={answers} onComplete={() => onComplete?.()} />;
  }
  
  // Current Answer for reveal
  const currentAnswer = answers.find(a => a.questionId === currentQuestion.id);
  
  // Question Screen
  return (
    <div className="min-h-screen bg-base flex flex-col">
      {/* Header with progress */}
      <div className="sticky top-0 z-10 bg-base/95 backdrop-blur-md border-b border-border-subtle px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-text-primary">GHL Mastery</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-text-muted block">
                {currentQuestion.sectionTitle}
              </span>
              <span className="text-xs text-[#F7931E]">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
            </div>
          </div>
          
          <div className="h-2 bg-card rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8 sm:py-12">
        <div className="max-w-lg mx-auto w-full">
          <AnimatePresence mode="wait">
            {showReveal && currentQuestion.reveal && currentAnswer ? (
              <RevealCard
                key={`reveal-${currentQuestion.id}`}
                type={currentQuestion.reveal.type}
                answer={currentAnswer}
                onContinue={moveToNextQuestion}
              />
            ) : (
              <motion.div
                key={`question-${currentQuestion.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Section Badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-xs font-medium text-[#F7931E]">
                    Section {currentQuestion.section}: {currentQuestion.sectionTitle}
                  </span>
                </div>
                
                {/* Question */}
                <div className="text-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                    {currentQuestion.question}
                  </h2>
                  {currentQuestion.subtext && (
                    <p className="text-text-secondary text-sm sm:text-base">
                      {currentQuestion.subtext}
                    </p>
                  )}
                </div>
                
                {/* Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleSelectOption(option.value, option.label)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                        selectedOption === option.value
                          ? 'border-[#F7931E] bg-[#F7931E]/10'
                          : selectedOption !== null
                          ? 'border-border bg-card opacity-50'
                          : 'border-border bg-card hover:border-[#F7931E]/50 hover:bg-card-hover'
                      }`}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className={`font-medium ${
                        selectedOption === option.value ? 'text-[#F7931E]' : 'text-text-primary'
                      }`}>
                        {option.label}
                      </span>
                      {selectedOption === option.value && (
                        <CheckCircle2 className="w-5 h-5 text-[#F7931E] ml-auto" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
