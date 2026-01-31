// GHL Mastery Sales Buildout Proposal - Constants & Data
// All metrics from documentation and data analysis

export const COMPANY = {
  name: "GHL Mastery",
  owner: "Adam McInnes",
  website: "joinghlmastery.com",
} as const;

// Hero Section Metrics (90-day data)
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
      label: "59% show rate",
    },
    color: "gold" as const,
  },
] as const;

// Current State Metrics
export const CURRENT_STATE = {
  monthlyRevenue: 36000,
  targetRevenue: 100000,
  revenueGap: 64000,
  annualOpportunityCost: 780000,
  dormantContacts: 10000,
  failedPayments90Days: 25870,
  showRate: 59,
  targetShowRate: 70,
} as const;

// Funnel Metrics (90-day)
export const FUNNEL_METRICS = {
  leads: 238,
  appointments: 46,
  shows: 22,
  bookingRate: 19.3,
  showRate: 59,
  cancelRate: 19.6,
} as const;

// Revenue Breakdown (90-day)
export const REVENUE_BREAKDOWN = {
  vip5k: { label: "VIP ($5K+)", amount: 20500, count: 4 },
  highTicket: { label: "High-Ticket ($497-$997)", amount: 16484, count: 25 },
  midTicket: { label: "Mid-Ticket ($297)", amount: 2535, count: 8 },
  course: { label: "AOF Course ($197)", amount: 3555, count: 17 },
  total: { label: "Total", amount: 43074, count: 54 },
} as const;

// Calculator Default Values - Based on GRANULAR-METRICS-SPEC.md
export const CALCULATOR_DEFAULTS = {
  adSpend: 500,
  costPerLead: 6.3,
  // Granular funnel rates
  callAnswerRate: 30, // 30% of leads answer
  callToBookingRate: 40, // 40% of answered calls book
  bookingRate: 19.5, // Combined for display (30% × 65% ≈ 19.5%)
  showRate: 59,
  closeRate: 30,
  upsellRate: 20,
  avgSaleValue: 2000,
  upsellValue: 500,
  downsellValue: 197,
  downsellRate: 20,
  targetRevenue: 100000,
} as const;

// Calculator Presets - Including granular metrics
export const CALCULATOR_PRESETS = [
  {
    name: "Current",
    values: {
      adSpend: 500,
      callAnswerRate: 30,
      callToBookingRate: 40,
      showRate: 59,
      closeRate: 30,
      avgSaleValue: 2000,
    },
  },
  {
    name: "Phase 1 Target",
    values: {
      adSpend: 3000,
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
      adSpend: 6000,
      callAnswerRate: 40,
      callToBookingRate: 50,
      showRate: 75,
      closeRate: 35,
      avgSaleValue: 3000,
    },
  },
  {
    name: "Aggressive",
    values: {
      adSpend: 10000,
      callAnswerRate: 45,
      callToBookingRate: 55,
      showRate: 80,
      closeRate: 40,
      avgSaleValue: 3500,
    },
  },
] as const;

// Investment Structure
export const INVESTMENT = {
  phase1: {
    name: "The Pressure Test",
    duration: "30 days",
    total: 8000,
    deposit: 4000,
    completion: 4000,
    quota: 36000,
  },
  phase2: {
    name: "The Buildout",
    duration: "90 days",
    total: 36000,
    monthly: 12000,
    months: 3,
  },
  ongoing: {
    name: "Ongoing Support",
    duration: "7 months",
    range: "2000-3000",
  },
  total: {
    main: 44000,
    yearEstimate: "58000-65000",
    roi: "4-6x",
  },
} as const;

// Timeline Phases
export const TIMELINE_PHASES = [
  {
    phase: 1,
    name: "Pressure Test",
    duration: "Days 1-30",
    investment: "Progressive",
    investmentDetails: "$4K + $4K @ $20K + 33% over",
    highlights: [
      "Chrix + Sara selling full time",
      "Database reactivation campaign",
      "Work existing leads",
      "Target: $36K closed revenue",
      "Pay for performance, not promises",
    ],
  },
  {
    phase: 2,
    name: "Buildout Sprint",
    duration: "Days 31-120",
    investment: "$36,000",
    highlights: [
      "Hire setters + closers",
      "Full training program",
      "Systems + automation",
      "SOPs + documentation",
    ],
  },
  {
    phase: 3,
    name: "Ongoing Support",
    duration: "Months 5-11",
    investment: "TBD",
    highlights: [
      "Monthly strategy calls",
      "Team coaching",
      "Optimization",
      "Adam on content only",
    ],
  },
] as const;

// FAQ Questions
export const FAQ_ITEMS = [
  {
    question: "What if we don't hit the $20K milestone in Phase 1?",
    answer:
      "The milestone payment ($4K) and performance bonus only kick in when we deliver. If we don't close $20K, you've invested $4K for 30 days of dedicated sales work—that's still valuable. But here's the thing: we wouldn't take this engagement if we didn't believe in the numbers.",
    category: "Risk",
  },
  {
    question: "Who owns the systems you build?",
    answer:
      "You do. 100%. All scripts, sequences, SOPs, and documentation are yours to keep. We're not building dependency—we're building independence.",
    category: "Ownership",
  },
  {
    question: "How much of Adam's time does this require?",
    answer:
      "2-3 hours per week during the engagement. One 30-minute weekly call, plus occasional Slack questions. The whole point is to free Adam up, not add to his plate.",
    category: "Time",
  },
  {
    question: "What happens after the 90-day buildout?",
    answer:
      "You'll have a functioning sales team, complete systems, and documented processes. The ongoing support phase (months 5-11) provides coaching and optimization, but the team should be independently operational by Day 120.",
    category: "After",
  },
  {
    question: "What's included vs. not included?",
    answer:
      "Included: All sales infrastructure (people, processes, systems), hands-on selling during Phase 1, hiring support, training, and documentation. Not included: Running your ads, building new products, or being your permanent sales team.",
    category: "Scope",
  },
  {
    question: "Why should we trust you with our sales?",
    answer:
      "20 years of sales experience, hands-on approach (we're selling for you in Phase 1, not just advising), and skin in the game (Phase 1 quota must be hit for full payment). We also know GHL inside and out.",
    category: "Trust",
  },
] as const;

// Team Members
export const TEAM_MEMBERS = [
  {
    name: "Chrix",
    role: "Lead Strategist & Sales",
    bio: "20 years sales experience. Hands-on operator, not just advisor. Building sales teams and systems that scale.",
    highlights: [
      "Team building & training",
      "Funnel optimization",
      "Metrics-driven management",
      "CRM & automation expert",
    ],
  },
  {
    name: "Sara",
    role: "Pipeline & Operations",
    bio: "Pipeline management expert. Keeps leads moving, appointments scheduled, and nothing falling through the cracks.",
    highlights: [
      "Lead management",
      "Appointment scheduling",
      "CRM administration",
      "Customer communication",
    ],
  },
] as const;

// Solution Pillars
export const SOLUTION_PILLARS = [
  {
    title: "Sell",
    subtitle: "Immediate Revenue",
    icon: "Target",
    items: [
      "Work existing leads Day 1",
      "Launch database reactivation",
      "Handle inbound appointments",
      "Close deals while building",
    ],
  },
  {
    title: "Build",
    subtitle: "Systems & Process",
    icon: "Cog",
    items: [
      "Hiring system for team",
      "Sales scripts & training",
      "CRM workflows & automation",
      "Show rate optimization",
    ],
  },
  {
    title: "Install",
    subtitle: "Permanent Team",
    icon: "Users",
    items: [
      "Trained sales team (2-4)",
      "Manager structure",
      "Performance dashboards",
      "SOPs & documentation",
    ],
  },
] as const;
