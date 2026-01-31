"use client";

import { useState, useEffect, useCallback } from 'react';
import { FunnelMetrics, DEFAULT_METRICS, calculateFunnel, calculateTargetRequirements } from '../utils/calculations';
import { IntentSignals, IntentScore, calculateIntentScore, getIntentExperience } from '../utils/intentScoring';

export interface QuizAnswers {
  // Step 1: Current State
  currentRevenue: number;
  adSpend: number;
  costPerLead: number;

  // Step 2: Funnel Metrics
  callAnswerRate: number;
  callToBookingRate: number;
  showRate: number;
  closeRate: number;
  upsellRate: number;

  // Step 3: Offer Economics
  avgMainOffer: number;
  downsellPrice: number;
  upsellPrice: number;

  // Step 4: Your Goal
  targetRevenue: number;
  timeline: 'immediately' | 'this_month' | 'this_quarter' | 'just_exploring';

  // Step 5: Intent Qualifier
  runningAds: 'consistently' | 'sometimes' | 'no';
  salesTeam: 'full_team' | 'just_me' | 'no_one';
  bottleneck: 'not_enough_leads' | 'leads_dont_convert' | 'no_time_for_sales' | 'dont_know';
}

export interface QuizState {
  currentStep: number;
  answers: QuizAnswers;
  isComplete: boolean;
  startTime: number | null;
  sliderAdjustments: number;
  stepRevisits: number;
  visitedSteps: Set<number>;
}

const STORAGE_KEY = 'ghl-mastery-quiz';

const defaultAnswers: QuizAnswers = {
  // Step 1
  currentRevenue: 36000,
  adSpend: 500,
  costPerLead: 6.00,

  // Step 2
  callAnswerRate: 0.30,
  callToBookingRate: 0.40,
  showRate: 0.59,
  closeRate: 0.30,
  upsellRate: 0.20,

  // Step 3
  avgMainOffer: 2000,
  downsellPrice: 197,
  upsellPrice: 500,

  // Step 4
  targetRevenue: 100000,
  timeline: 'this_month',

  // Step 5
  runningAds: 'sometimes',
  salesTeam: 'just_me',
  bottleneck: 'no_time_for_sales',
};

export function useQuizState() {
  const [state, setState] = useState<QuizState>({
    currentStep: 1,
    answers: defaultAnswers,
    isComplete: false,
    startTime: null,
    sliderAdjustments: 0,
    stepRevisits: 0,
    visitedSteps: new Set([1]),
  });

  const [resultsViewTime, setResultsViewTime] = useState<number | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setState(prev => ({
            ...prev,
            answers: { ...defaultAnswers, ...parsed.answers },
            isComplete: parsed.isComplete || false,
            visitedSteps: new Set(parsed.visitedSteps || [1]),
          }));
        } catch {
          // Invalid saved data, use defaults
        }
      }
      // Set start time on first load
      setState(prev => ({ ...prev, startTime: Date.now() }));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: state.answers,
        isComplete: state.isComplete,
        visitedSteps: Array.from(state.visitedSteps),
      }));
    }
  }, [state.answers, state.isComplete, state.visitedSteps]);

  // Start results timer when complete
  useEffect(() => {
    if (state.isComplete && !resultsViewTime) {
      setResultsViewTime(Date.now());
    }
  }, [state.isComplete, resultsViewTime]);

  const updateAnswer = useCallback(<K extends keyof QuizAnswers>(
    key: K,
    value: QuizAnswers[K]
  ) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [key]: value },
      sliderAdjustments: prev.sliderAdjustments + 1,
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setState(prev => {
      const isRevisit = prev.visitedSteps.has(step) && step < prev.currentStep;
      const newVisited = new Set(prev.visitedSteps);
      newVisited.add(step);

      return {
        ...prev,
        currentStep: step,
        stepRevisits: isRevisit ? prev.stepRevisits + 1 : prev.stepRevisits,
        visitedSteps: newVisited,
      };
    });
  }, []);

  const nextStep = useCallback(() => {
    setState(prev => {
      if (prev.currentStep >= 5) {
        return { ...prev, isComplete: true };
      }
      const newStep = prev.currentStep + 1;
      const newVisited = new Set(prev.visitedSteps);
      newVisited.add(newStep);
      return {
        ...prev,
        currentStep: newStep,
        visitedSteps: newVisited,
      };
    });
  }, []);

  const prevStep = useCallback(() => {
    setState(prev => {
      if (prev.currentStep <= 1) return prev;
      return {
        ...prev,
        currentStep: prev.currentStep - 1,
        stepRevisits: prev.stepRevisits + 1,
      };
    });
  }, []);

  const completeQuiz = useCallback(() => {
    setState(prev => ({ ...prev, isComplete: true }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState({
      currentStep: 1,
      answers: defaultAnswers,
      isComplete: false,
      startTime: Date.now(),
      sliderAdjustments: 0,
      stepRevisits: 0,
      visitedSteps: new Set([1]),
    });
    setResultsViewTime(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // Calculate funnel metrics based on answers
  const funnelMetrics: FunnelMetrics = {
    adSpend: state.answers.adSpend,
    costPerLead: state.answers.costPerLead,
    callAnswerRate: state.answers.callAnswerRate,
    callToBookingRate: state.answers.callToBookingRate,
    showRate: state.answers.showRate,
    closeRate: state.answers.closeRate,
    upsellRate: state.answers.upsellRate,
    downsellRate: 0.20, // Fixed for now
    avgMainOffer: state.answers.avgMainOffer,
    downsellPrice: state.answers.downsellPrice,
    upsellPrice: state.answers.upsellPrice,
  };

  const calculatedMetrics = calculateFunnel(funnelMetrics);
  const targetRequirements = calculateTargetRequirements(state.answers.targetRevenue, funnelMetrics);

  // Calculate intent score
  const now = Date.now();
  const completionTimeSeconds = state.startTime
    ? (now - state.startTime) / 1000
    : 0;
  const timeOnResultsSeconds = resultsViewTime
    ? (now - resultsViewTime) / 1000
    : 0;

  // Check contextual signals
  const isReturnVisitor = typeof window !== 'undefined' &&
    localStorage.getItem(`${STORAGE_KEY}-visited`) === 'true';
  const isDirectTraffic = typeof window !== 'undefined' &&
    !document.referrer;
  const isDesktop = typeof window !== 'undefined' &&
    window.innerWidth >= 1024;
  const isBusinessHours = (() => {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 18;
  })();

  // Mark as visited for return visitor detection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}-visited`, 'true');
    }
  }, []);

  const intentSignals: Partial<IntentSignals> = {
    monthlyRevenue: state.answers.currentRevenue,
    runningAds: state.answers.runningAds,
    salesTeam: state.answers.salesTeam,
    bottleneck: state.answers.bottleneck,
    timeline: state.answers.timeline,
    goalMultiplier: state.answers.targetRevenue / state.answers.currentRevenue,
    completionTimeSeconds,
    sliderAdjustments: state.sliderAdjustments,
    stepRevisits: state.stepRevisits,
    timeOnResultsSeconds,
    isReturnVisitor,
    isDirectTraffic,
    isDesktop,
    isBusinessHours,
  };

  const intentScore = calculateIntentScore(intentSignals);
  const intentExperience = getIntentExperience(intentScore.classification);

  return {
    ...state,
    updateAnswer,
    goToStep,
    nextStep,
    prevStep,
    completeQuiz,
    resetQuiz,
    funnelMetrics,
    calculatedMetrics,
    targetRequirements,
    intentScore,
    intentExperience,
  };
}

export type QuizStateReturn = ReturnType<typeof useQuizState>;
