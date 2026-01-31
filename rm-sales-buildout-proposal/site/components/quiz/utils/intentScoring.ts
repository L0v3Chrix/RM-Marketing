// Intent scoring system based on OWNERS-QUIZ-SPEC.md

export type IntentClassification =
  | 'BROWSING'
  | 'LEARNING'
  | 'EVALUATING'
  | 'READY_TO_BUY'
  | 'URGENT';

export interface IntentSignals {
  // Explicit signals from quiz answers
  monthlyRevenue: number;
  runningAds: 'consistently' | 'sometimes' | 'no';
  salesTeam: 'full_team' | 'just_me' | 'no_one';
  bottleneck: 'not_enough_leads' | 'leads_dont_convert' | 'no_time_for_sales' | 'dont_know';
  timeline: 'immediately' | 'this_month' | 'this_quarter' | 'just_exploring';
  goalMultiplier: number; // goal / current revenue

  // Behavioral signals
  completionTimeSeconds: number;
  sliderAdjustments: number;
  stepRevisits: number;
  timeOnResultsSeconds: number;
  isReturnVisitor: boolean;

  // Contextual signals
  isDirectTraffic: boolean;
  isDesktop: boolean;
  isBusinessHours: boolean;
}

export interface IntentScore {
  total: number;
  explicit: number;
  behavioral: number;
  contextual: number;
  classification: IntentClassification;
  triggers: string[];
}

export function calculateExplicitScore(signals: Partial<IntentSignals>): { score: number; triggers: string[] } {
  let score = 0;
  const triggers: string[] = [];

  // Revenue scoring
  if (signals.monthlyRevenue !== undefined) {
    if (signals.monthlyRevenue > 100000) {
      score += 15;
      triggers.push('Revenue > $100K (+15)');
    } else if (signals.monthlyRevenue > 50000) {
      score += 10;
      triggers.push('Revenue $50K-$100K (+10)');
    } else if (signals.monthlyRevenue > 25000) {
      score += 5;
      triggers.push('Revenue $25K-$50K (+5)');
    }
  }

  // Running ads scoring
  if (signals.runningAds === 'consistently') {
    score += 15;
    triggers.push('Running ads consistently (+15)');
  } else if (signals.runningAds === 'sometimes') {
    score += 8;
    triggers.push('Running ads sometimes (+8)');
  }

  // Sales team scoring
  if (signals.salesTeam === 'no_one') {
    score += 20;
    triggers.push('No sales team (+20)');
  } else if (signals.salesTeam === 'just_me') {
    score += 15;
    triggers.push('Just me handling sales (+15)');
  }

  // Bottleneck scoring
  if (signals.bottleneck === 'no_time_for_sales') {
    score += 20;
    triggers.push('Bottleneck: No time for sales (+20)');
  } else if (signals.bottleneck === 'leads_dont_convert') {
    score += 15;
    triggers.push('Bottleneck: Leads don\'t convert (+15)');
  } else if (signals.bottleneck === 'not_enough_leads') {
    score += 10;
    triggers.push('Bottleneck: Not enough leads (+10)');
  }

  // Timeline scoring
  if (signals.timeline === 'immediately') {
    score += 25;
    triggers.push('Timeline: Immediately (+25)');
  } else if (signals.timeline === 'this_month') {
    score += 15;
    triggers.push('Timeline: This month (+15)');
  } else if (signals.timeline === 'this_quarter') {
    score += 5;
    triggers.push('Timeline: This quarter (+5)');
  }

  // Goal multiplier scoring
  if (signals.goalMultiplier !== undefined && signals.goalMultiplier > 2) {
    score += 10;
    triggers.push('Ambitious goal (2x+ current) (+10)');
  }

  return { score, triggers };
}

export function calculateBehavioralScore(signals: Partial<IntentSignals>): { score: number; triggers: string[] } {
  let score = 0;
  const triggers: string[] = [];

  // Completion speed
  if (signals.completionTimeSeconds !== undefined && signals.completionTimeSeconds < 120) {
    score += 10;
    triggers.push('Fast completion (<2 min) (+10)');
  }

  // Slider engagement
  if (signals.sliderAdjustments !== undefined && signals.sliderAdjustments >= 3) {
    score += 5;
    triggers.push('Engaged with sliders (+5)');
  }

  // Step revisits
  if (signals.stepRevisits !== undefined && signals.stepRevisits > 0) {
    score += 8;
    triggers.push('Revisited steps (+8)');
  }

  // Time on results
  if (signals.timeOnResultsSeconds !== undefined && signals.timeOnResultsSeconds >= 30) {
    score += 12;
    triggers.push('30+ sec on results (+12)');
  }

  // Return visitor
  if (signals.isReturnVisitor) {
    score += 20;
    triggers.push('Return visitor (+20)');
  }

  return { score, triggers };
}

export function calculateContextualScore(signals: Partial<IntentSignals>): { score: number; triggers: string[] } {
  let score = 0;
  const triggers: string[] = [];

  // Direct traffic
  if (signals.isDirectTraffic) {
    score += 10;
    triggers.push('Direct traffic (+10)');
  }

  // Desktop device
  if (signals.isDesktop) {
    score += 5;
    triggers.push('Desktop device (+5)');
  }

  // Business hours
  if (signals.isBusinessHours) {
    score += 5;
    triggers.push('Business hours (+5)');
  }

  return { score, triggers };
}

export function classifyIntent(totalScore: number): IntentClassification {
  if (totalScore >= 76) return 'URGENT';
  if (totalScore >= 51) return 'READY_TO_BUY';
  if (totalScore >= 31) return 'EVALUATING';
  if (totalScore >= 16) return 'LEARNING';
  return 'BROWSING';
}

export function calculateIntentScore(signals: Partial<IntentSignals>): IntentScore {
  const explicit = calculateExplicitScore(signals);
  const behavioral = calculateBehavioralScore(signals);
  const contextual = calculateContextualScore(signals);

  const total = explicit.score + behavioral.score + contextual.score;
  const classification = classifyIntent(total);

  return {
    total,
    explicit: explicit.score,
    behavioral: behavioral.score,
    contextual: contextual.score,
    classification,
    triggers: [...explicit.triggers, ...behavioral.triggers, ...contextual.triggers],
  };
}

export function getIntentExperience(classification: IntentClassification) {
  switch (classification) {
    case 'URGENT':
      return {
        cta: 'Book Emergency Call',
        showPhone: true,
        pricingPosition: 'prominent' as const,
        contentOrder: ['booking', 'pricing', 'process'],
        urgencyMessaging: true,
      };
    case 'READY_TO_BUY':
      return {
        cta: 'Start Phase 1',
        showPhone: false,
        pricingPosition: 'prominent' as const,
        contentOrder: ['pricing', 'process', 'proof'],
        urgencyMessaging: false,
      };
    case 'EVALUATING':
      return {
        cta: 'See the Full Plan',
        showPhone: false,
        pricingPosition: 'after-proof' as const,
        contentOrder: ['calculator', 'proof', 'process', 'pricing'],
        urgencyMessaging: false,
      };
    case 'LEARNING':
      return {
        cta: 'See How It Works',
        showPhone: false,
        pricingPosition: 'bottom' as const,
        contentOrder: ['methodology', 'proof', 'calculator', 'pricing'],
        urgencyMessaging: false,
      };
    case 'BROWSING':
    default:
      return {
        cta: 'Learn More',
        showPhone: false,
        pricingPosition: 'hidden-until-scroll' as const,
        contentOrder: ['education', 'methodology', 'proof'],
        urgencyMessaging: false,
      };
  }
}
