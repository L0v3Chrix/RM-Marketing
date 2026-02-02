// GHL Mastery Sales Buildout Proposal - Constants & Data
// VERIFIED DATA from data/VERIFIED-DATA-SUMMARY.md
// Last Updated: February 1, 2026

export const COMPANY = {
  name: "GHL Mastery",
  owner: "Adam McInnes",
  partner: "Brendan Barth",
  website: "joinghlmastery.com",
} as const;

// Hero Section Metrics (90-day VERIFIED data)
export const HERO_METRICS = [
  {
    value: 19.3,
    label: "Lead-to-Appointment",
    suffix: "%",
    comparison: {
      value: "3-5%",
      label: "Industry avg",
    },
    color: "green" as const,
  },
  {
    value: 6.3,
    label: "Cost Per Lead",
    prefix: "$",
    comparison: {
      value: "$50-85",
      label: "Industry avg",
    },
    color: "green" as const,
  },
  {
    value: 15.8,
    label: "LTV:CAC Ratio",
    suffix: "x",
    comparison: {
      value: "3x",
      label: "Healthy threshold",
    },
    color: "green" as const,
  },
  {
    value: 22,
    label: "Shows in 90 Days",
    comparison: {
      value: "46 booked",
      label: "47.8% show rate",
    },
    color: "gold" as const,
  },
] as const;

// VERIFIED Current State Metrics (90-day period)
export const CURRENT_STATE = {
  totalRevenue: 109927, // $109,927.38 VERIFIED
  totalTransactions: 214, // VERIFIED
  uniqueCustomers: 120, // VERIFIED
  firstTimeRevenue: 45999, // $45,998.88 VERIFIED
  repeatRevenue: 63929, // $63,928.50 VERIFIED
  failedPayments: 25870, // $25,870.38 VERIFIED
  refunds: 5508, // $5,508.00 VERIFIED
  netRevenue: 104419, // $104,419.38 VERIFIED
  activeMRR: 3382, // $3,382 VERIFIED from Stripe subscriptions
  dormantContacts: 10000,
  targetRevenue: 100000,
} as const;

// VERIFIED Funnel Metrics (90-day)
export const FUNNEL_METRICS = {
  adSpend: 500, // $500/month VERIFIED (corrected from $1,500/90 days)
  leads: 238, // VERIFIED
  appointments: 46, // VERIFIED
  shows: 22, // VERIFIED
  bookingRate: 19.3, // 46/238 = 19.3%
  showRate: 47.8, // 22/46 = 47.8% VERIFIED
  estimatedCloseRate: 30,
  cpl: 6.30, // $6.30 VERIFIED
  cac: 227, // $227 VERIFIED
} as const;

// VERIFIED Revenue Breakdown by Tier
export const REVENUE_BY_TIER = {
  tripwire: { label: "Tripwire ($7-$50)", transactions: 54, revenue: 777, percent: 0.7 },
  lowTicket: { label: "Low Ticket ($51-$250)", transactions: 62, revenue: 10727, percent: 9.8 },
  midTicket: { label: "Mid Ticket ($251-$600)", transactions: 47, revenue: 19721, percent: 17.9 },
  highTicket: { label: "High Ticket ($601-$1000)", transactions: 39, revenue: 27567, percent: 25.1 },
  premium: { label: "Premium ($1000+)", transactions: 12, revenue: 51136, percent: 46.5 },
  total: { label: "Total", transactions: 214, revenue: 109927, percent: 100 },
} as const;

// VERIFIED Commissionable Revenue
export const COMMISSIONABLE = {
  transactions: 92,
  totalRevenue: 47487, // $47,486.50
  firstTimeRevenue: 17128, // $17,128.00
} as const;

// Calculator Default Values - VERIFIED baseline
export const CALCULATOR_DEFAULTS = {
  adSpend: 1500,
  costPerLead: 6.3,
  callAnswerRate: 30,
  callToBookingRate: 40,
  bookingRate: 19.3,
  showRate: 47.8, // VERIFIED (was 59%, corrected)
  closeRate: 30,
  upsellRate: 20,
  avgSaleValue: 2000,
  upsellValue: 500,
  downsellValue: 197,
  downsellRate: 20,
  targetRevenue: 100000,
} as const;

// Calculator Presets
export const CALCULATOR_PRESETS = [
  {
    name: "Current State",
    values: {
      adSpend: 1500,
      callAnswerRate: 30,
      callToBookingRate: 40,
      showRate: 47.8,
      closeRate: 30,
      avgSaleValue: 2000,
    },
  },
  {
    name: "Pressure Test (70% Shows)",
    values: {
      adSpend: 1500,
      callAnswerRate: 35,
      callToBookingRate: 45,
      showRate: 70,
      closeRate: 35,
      avgSaleValue: 2500,
    },
  },
  {
    name: "Scale Mode",
    values: {
      adSpend: 3000,
      callAnswerRate: 40,
      callToBookingRate: 50,
      showRate: 75,
      closeRate: 35,
      avgSaleValue: 3000,
    },
  },
] as const;

// INVESTMENT STRUCTURE - CORRECT PRICING (Feb 2026)
export const INVESTMENT = {
  phase1: {
    name: "Phase 1: The Proof",
    duration: "30 Days",
    deposit: 5000, // $5,000 deposit at agreement signed
    milestone: 5000, // $5,000 at Day 30 - 20 validated appointments + KPI metrics
    total: 10000, // $10,000 Phase 1 total
    guarantee: "If by Day 30, we haven't generated at least 20 validated appointments + hit KPI metrics, you can walk away with just the $5K deposit invested.",
  },
  phase2: {
    name: "Phase 2: The Build",
    duration: "90 Days (Day 60-120)",
    monthlyBase: 10000, // $10,000 base per month
    performancePercent: 15, // 15% of revenue over baseline
    performanceBaseline: 35000, // $35K baseline
    performanceCap: 15000, // $15K/month cap
    months: 3,
    baseTotal: 30000, // $10K x 3 months
    maxTotal: 75000, // $10K + $15K x 3 months (theoretical max)
  },
  // CORRECT Payment Schedule
  paymentSchedule: [
    { payment: "Deposit", amount: 5000, trigger: "Agreement signed" },
    { payment: "Milestone 1", amount: 5000, trigger: "Day 30 - 20 validated appointments + KPI metrics" },
    { payment: "Month 2", amount: 10000, trigger: "Day 60" },
    { payment: "Month 3", amount: 10000, trigger: "Day 90 (+ performance)" },
    { payment: "Month 4", amount: 10000, trigger: "Day 120 (+ performance)" },
  ],
  total: {
    minimum: 40000, // $10K Phase 1 + $30K Phase 2 base
    maximum: 55000, // With performance bonuses
    range: "$40,000 - $55,000",
  },
  keyPoints: [
    "No equity ask",
    "No perpetual revenue share", 
    "No ongoing licensing fees",
    "Client owns everything at end of engagement",
  ],
} as const;

// TIMELINE - OPTION B
export const TIMELINE_PHASES = [
  {
    phase: 1,
    name: "Phase 1: The Proof",
    duration: "60 Days",
    investment: "$10,000",
    structure: [
      { trigger: "Agreement signed", amount: "$5,000 deposit" },
      { trigger: "20 qualified appointments delivered", amount: "$5,000 milestone" },
    ],
    highlights: [
      "Adam off phones DAY ONE",
      "Database reactivation begins immediately",
      "Speed-to-lead optimization",
      "Show rate improvements",
      "Pipeline handed over completely",
    ],
    guarantee: "20 qualified appointments by Day 30 or walk away",
  },
  {
    phase: 2,
    name: "Phase 2: The Build",
    duration: "90 Days (Days 61-150)",
    investment: "$30,000 - $45,000",
    structure: [
      { trigger: "Day 61", amount: "$10,000 + performance" },
      { trigger: "Day 91", amount: "$10,000 + performance" },
      { trigger: "Day 121", amount: "$10,000 + performance" },
    ],
    highlights: [
      "Hire and train sales team",
      "Full systems buildout",
      "Dunning system (train Jonah)",
      "SOPs & documentation",
      "Manager structure installed",
    ],
    performance: "15% of revenue over $35K baseline, capped at $15K/month",
  },
] as const;

// FAQ Questions
export const FAQ_ITEMS = [
  {
    question: "What if we don't hit 20 appointments by Day 30?",
    answer: "That's our guarantee. If we haven't generated at least 20 qualified appointments from your existing database by Day 30, you can walk away with just the $5K deposit invested. You keep everything we built.",
    category: "Risk",
  },
  {
    question: "How much of Adam's time does this take?",
    answer: "2-3 hours per week max. One 30-minute strategy call plus occasional Slack questions. The whole point is to get Adam off the phones DAY ONE and back to content creation.",
    category: "Time",
  },
  {
    question: "Who handles the dunning/failed payments?",
    answer: "We create the SOP and train Jonah (your CS person) on the dunning process. We don't chase payments ourselves - we build the system so your team can.",
    category: "Process",
  },
  {
    question: "Who owns what you build?",
    answer: "You do. 100%. Scripts, systems, SOPs, documentation — all yours. No equity, no perpetual revenue share, no licensing fees. We build independence, not dependency.",
    category: "Ownership",
  },
] as const;

// Team Members
export const TEAM_MEMBERS = [
  {
    name: "Chrix",
    role: "Lead Strategist & Closer",
    bio: "20 years sales experience. Hands-on operator who closes deals while building systems. When Chrix is CLOSING, Sarah is BOOKING.",
    highlights: [
      "High-ticket closing",
      "Team building & training",
      "Funnel optimization",
      "CRM & automation expert",
    ],
  },
  {
    name: "Sarah",
    role: "Pipeline & Booking Specialist",
    bio: "Pipeline management expert. Keeps leads moving, appointments scheduled, and nothing falling through the cracks. When Sarah is BOOKING, Chrix is CLOSING.",
    highlights: [
      "Speed-to-lead response",
      "Appointment scheduling",
      "Lead nurturing",
      "CRM administration",
    ],
  },
] as const;

// Two-Person Advantage messaging
export const TWO_PERSON_ADVANTAGE = {
  headline: "No Gaps. No Missed Leads. No 'I Was Busy.'",
  points: [
    "When Chrix is CLOSING... Sarah is BOOKING.",
    "When Sarah is BOOKING... Chrix is CLOSING.",
    "Leads get called in minutes, not hours.",
    "Appointments get confirmed, not forgotten.",
  ],
} as const;

// Solution Pillars
export const SOLUTION_PILLARS = [
  {
    title: "Sell",
    subtitle: "Immediate Revenue",
    icon: "Target",
    items: [
      "Work existing leads Day 1",
      "Adam off phones immediately",
      "Database reactivation ($50K+ potential)",
      "Close deals while building",
    ],
  },
  {
    title: "Build",
    subtitle: "Systems & Process",
    icon: "Wrench",
    items: [
      "Speed-to-lead optimization",
      "Show rate improvement (48% → 70%)",
      "Failed payment recovery ($25K opportunity)",
      "CRM workflows & automation",
    ],
  },
  {
    title: "Install",
    subtitle: "Permanent Team",
    icon: "UsersRound",
    items: [
      "Trained sales team (2-4 people)",
      "Manager structure",
      "SOPs & documentation",
      "Train Jonah on dunning",
    ],
  },
] as const;

// Data Silos - Present separately per spec
export const DATA_SILOS = {
  advertising: {
    title: "Advertising Data",
    metrics: [
      { label: "Monthly Ad Spend", value: "$500" },
      { label: "Leads Generated (90 days)", value: "238" },
      { label: "Cost Per Lead", value: "$6.30" },
    ],
    note: "Extremely efficient CPL - industry avg is $50-85",
  },
  appointments: {
    title: "Appointment Data",
    metrics: [
      { label: "Booked", value: "46" },
      { label: "Showed", value: "22" },
      { label: "Show Rate", value: "47.8%" },
    ],
    note: "Show rate is the biggest lever - target is 70%+",
  },
  financial: {
    title: "Financial Data (90 Days)",
    metrics: [
      { label: "Total Revenue", value: "$109,927" },
      { label: "New Sales Revenue", value: "$45,999" },
      { label: "Repeat Revenue", value: "$63,929" },
    ],
    note: "New sales = first-time customers, Repeat = existing MRR",
  },
} as const;

// LTV Compounding messaging
export const LTV_MESSAGING = {
  example: "$500/mo coaching × 4 months = $2,000 LTV",
  compounding: "MRR compounds: $100K/month in new sales = $1.2M+ annually",
} as const;
