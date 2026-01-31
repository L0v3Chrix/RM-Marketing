"use client";

import { useState, useMemo, useCallback } from "react";
import {
  calculatePerformance,
  type CalculatorInputs,
  type CalculatorOutputs,
} from "@/lib/calculator";
import { CALCULATOR_DEFAULTS } from "@/lib/constants";

export type { CalculatorInputs, CalculatorOutputs };

export function useCalculator(initialValues?: Partial<CalculatorInputs>) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    ...CALCULATOR_DEFAULTS,
    ...initialValues,
  });

  const outputs = useMemo(() => calculatePerformance(inputs), [inputs]);

  const updateInput = useCallback(
    <K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) => {
      setInputs((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const setPreset = useCallback((preset: Partial<CalculatorInputs>) => {
    setInputs((prev) => ({ ...prev, ...preset }));
  }, []);

  const reset = useCallback(() => {
    setInputs(CALCULATOR_DEFAULTS);
  }, []);

  return {
    inputs,
    outputs,
    updateInput,
    setPreset,
    reset,
  };
}
