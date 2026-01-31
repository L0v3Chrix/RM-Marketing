// Calculator formulas and logic
// Based on PATH-TO-100K-SCALE.md documentation

export interface CalculatorInputs {
  adSpend: number;
  costPerLead: number;
  bookingRate: number; // percentage (e.g., 19.3)
  showRate: number; // percentage (e.g., 59)
  closeRate: number; // percentage (e.g., 30)
  avgSaleValue: number;
  downsellValue: number;
  downsellRate: number; // percentage (e.g., 20)
  targetRevenue: number;
}

export interface CalculatorOutputs {
  // Current Performance
  leadsPerMonth: number;
  appointmentsPerMonth: number;
  showsPerMonth: number;
  salesPerMonth: number;
  downsellSales: number;
  revenuePerMonth: number;
  revenuePerShow: number;

  // Path to Target
  salesNeeded: number;
  showsNeeded: number;
  appointmentsNeeded: number;
  leadsNeeded: number;
  adSpendRequired: number;
  callsPerDay: number;
  closersNeeded: number;
}

const WORKING_DAYS_PER_MONTH = 20;
const CALLS_PER_CLOSER_PER_DAY = 6;

export function calculatePerformance(inputs: CalculatorInputs): CalculatorOutputs {
  const {
    adSpend,
    costPerLead,
    bookingRate,
    showRate,
    closeRate,
    avgSaleValue,
    downsellValue,
    downsellRate,
    targetRevenue,
  } = inputs;

  // Convert percentages to decimals
  const bookingRateDecimal = bookingRate / 100;
  const showRateDecimal = showRate / 100;
  const closeRateDecimal = closeRate / 100;
  const downsellRateDecimal = downsellRate / 100;

  // Current Performance Calculations
  const leadsPerMonth = adSpend / costPerLead;
  const appointmentsPerMonth = leadsPerMonth * bookingRateDecimal;
  const showsPerMonth = appointmentsPerMonth * showRateDecimal;
  const salesPerMonth = showsPerMonth * closeRateDecimal;
  const downsellSales = (showsPerMonth - salesPerMonth) * downsellRateDecimal;
  const revenuePerMonth =
    salesPerMonth * avgSaleValue + downsellSales * downsellValue;
  const revenuePerShow = showsPerMonth > 0 ? revenuePerMonth / showsPerMonth : 0;

  // Path to Target Calculations (working backwards from revenue goal)
  const salesNeeded = targetRevenue / avgSaleValue;
  const showsNeeded = salesNeeded / closeRateDecimal;
  const appointmentsNeeded = showsNeeded / showRateDecimal;
  const leadsNeeded = appointmentsNeeded / bookingRateDecimal;
  const adSpendRequired = leadsNeeded * costPerLead;
  const callsPerDay = showsNeeded / WORKING_DAYS_PER_MONTH;
  const closersNeeded = Math.ceil(callsPerDay / CALLS_PER_CLOSER_PER_DAY);

  return {
    // Current Performance
    leadsPerMonth: Math.round(leadsPerMonth),
    appointmentsPerMonth: Math.round(appointmentsPerMonth),
    showsPerMonth: Math.round(showsPerMonth),
    salesPerMonth: Math.round(salesPerMonth * 10) / 10,
    downsellSales: Math.round(downsellSales * 10) / 10,
    revenuePerMonth: Math.round(revenuePerMonth),
    revenuePerShow: Math.round(revenuePerShow),

    // Path to Target
    salesNeeded: Math.round(salesNeeded),
    showsNeeded: Math.round(showsNeeded),
    appointmentsNeeded: Math.round(appointmentsNeeded),
    leadsNeeded: Math.round(leadsNeeded),
    adSpendRequired: Math.round(adSpendRequired),
    callsPerDay: Math.round(callsPerDay * 10) / 10,
    closersNeeded: Math.max(1, closersNeeded),
  };
}

// Calculate ROI based on investment and projected revenue increase
export function calculateROI(
  investment: number,
  currentMonthlyRevenue: number,
  projectedMonthlyRevenue: number,
  months: number = 12
): {
  annualRevenueIncrease: number;
  roi: number;
  paybackMonths: number;
} {
  const monthlyIncrease = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualRevenueIncrease = monthlyIncrease * months;
  const roi = annualRevenueIncrease / investment;
  const paybackMonths =
    monthlyIncrease > 0 ? investment / monthlyIncrease : Infinity;

  return {
    annualRevenueIncrease: Math.round(annualRevenueIncrease),
    roi: Math.round(roi * 10) / 10,
    paybackMonths: Math.round(paybackMonths * 10) / 10,
  };
}
