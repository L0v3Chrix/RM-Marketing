export { OwnersQuiz } from './OwnersQuiz';
export { QuizProgress } from './QuizProgress';
export { useQuizState } from './hooks/useQuizState';

// Steps - individual exports to avoid naming conflicts
export {
  CurrentState,
  FunnelMetrics,
  OfferEconomics,
  YourGoal,
  IntentQualifier,
} from './steps';

// Results
export {
  QuizResults,
  FunnelWaterfall,
  PathToGoal,
} from './results';

// Utils - selective exports (using 'as' to avoid conflicts with component names)
export {
  calculateFunnel,
  calculateTargetRequirements,
  formatCurrency,
  formatPercent,
  formatNumber,
  DEFAULT_METRICS,
} from './utils/calculations';

export type {
  FunnelMetrics as FunnelMetricsType,
  CalculatedMetrics,
} from './utils/calculations';

export {
  calculateIntentScore,
  classifyIntent,
  getIntentExperience,
} from './utils/intentScoring';

export type {
  IntentClassification,
  IntentSignals,
  IntentScore,
} from './utils/intentScoring';
