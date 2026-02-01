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
    name: "Prove It Works",
    duration: "60 days",
    total: 16000,
    upfront: 4000,
    day30: 4000,
    day60: 8000,
    quota: 20000,
    adSpend: 1500,
    appointmentsPerWeek: 20,
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
    duration: "As needed",
    range: "TBD",
  },
  total: {
    main: 52000,
    yearEstimate: "52000-55000",
    roi: "3-6x",
  },
} as const;

// Timeline Phases
export const TIMELINE_PHASES = [
  {
    phase: 1,
    name: "Prove It Works",
    duration: "Days 1-60",
    investment: "$16,000",
    investmentDetails: "$4K upfront + $4K @ 30 days + $8K @ 60 days",
    highlights: [
      "Chrix working leads full time",
      "Database reactivation campaign",
      "No-show recovery sequences",
      "Failed payment dunning",
      "Target: $20K in 30 days",
    ],
  },
  {
    phase: 2,
    name: "Buildout Sprint",
    duration: "Days 61-150",
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
    duration: "As needed",
    investment: "TBD",
    highlights: [
      "Monthly strategy calls",
      "Team coaching",
      "Optimization",
      "Adam on content only",
    ],
  },
] as const;

// FAQ Questions - Reduced to 4 essential
export const FAQ_ITEMS = [
  {
    question: "What if Phase 1 doesn't hit the target?",
    answer:
      "Performance payments only kick in when we deliver. We wouldn't take this if we didn't believe in the numbers.",
    category: "Risk",
  },
  {
    question: "How much of Adam's time does this take?",
    answer:
      "2-3 hours per week. One 30-minute call plus occasional Slack questions. The whole point is to free him up.",
    category: "Time",
  },
  {
    question: "What happens after Day 90?",
    answer:
      "You'll have a functioning team, complete systems, and documented processes. Ongoing support is optional — the team should run independently.",
    category: "After",
  },
  {
    question: "Who owns what you build?",
    answer:
      "You do. 100%. Scripts, systems, documentation — all yours. We build independence, not dependency.",
    category: "Ownership",
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
    icon: "Wrench",
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
    icon: "UsersRound",
    items: [
      "Trained sales team (2-4)",
      "Manager structure",
      "Performance dashboards",
      "SOPs & documentation",
    ],
  },
] as const;
