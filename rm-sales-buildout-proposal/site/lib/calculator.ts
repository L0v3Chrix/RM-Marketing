// Calculator formulas and logic
// Based on GRANULAR-METRICS-SPEC.md documentation

export interface CalculatorInputs {
  adSpend: number;
  costPerLead: number;
  // Granular funnel metrics
  callAnswerRate: number; // percentage (e.g., 30) - % of leads that answer
  callToBookingRate: number; // percentage (e.g., 40) - % of answered calls that book
  bookingRate: number; // percentage (e.g., 19.3) - Combined rate for display
  showRate: number; // percentage (e.g., 59)
  closeRate: number; // percentage (e.g., 30)
  upsellRate: number; // percentage (e.g., 20)
  avgSaleValue: number;
  upsellValue: number;
  downsellValue: number;
  downsellRate: number; // percentage (e.g., 20)
  targetRevenue: number;
}

export interface CalculatorOutputs {
  // Current Performance - Granular Funnel
  leadsPerMonth: number;
  callsMade: number;
  personsReached: number;
  appointmentsPerMonth: number;
  showsPerMonth: number;
  salesPerMonth: number;
  upsells: number;
  downsellSales: number;
  revenuePerMonth: number;

  // Key Metrics
  revenuePerShow: number;
  revenuePerLead: number;
  costPerShow: number;
  costPerSale: number;
  ltvCac: number;

  // Path to Target
  salesNeeded: number;
  showsNeeded: number;
  appointmentsNeeded: number;
  leadsNeeded: number;
  adSpendRequired: number;
  callsPerDay: number;
  closersNeeded: number;
}

const WORKING_DAYS_PER_MONTH = 22;
const CALLS_PER_CLOSER_PER_DAY = 20;

export function calculatePerformance(inputs: CalculatorInputs): CalculatorOutputs {
  const {
    adSpend,
    costPerLead,
    callAnswerRate,
    callToBookingRate,
    showRate,
    closeRate,
    upsellRate,
    avgSaleValue,
    upsellValue,
    downsellValue,
    downsellRate,
    targetRevenue,
  } = inputs;

  // Convert percentages to decimals
  const answerRateDecimal = callAnswerRate / 100;
  const bookingRateDecimal = callToBookingRate / 100;
  const showRateDecimal = showRate / 100;
  const closeRateDecimal = closeRate / 100;
  const upsellRateDecimal = upsellRate / 100;
  const downsellRateDecimal = downsellRate / 100;

  // Current Performance Calculations - Granular Funnel
  const leadsPerMonth = adSpend / costPerLead;
  const callsMade = leadsPerMonth; // 100% call attempt rate
  const personsReached = callsMade * answerRateDecimal;
  const appointmentsPerMonth = personsReached * bookingRateDecimal;
  const showsPerMonth = appointmentsPerMonth * showRateDecimal;
  const salesPerMonth = showsPerMonth * closeRateDecimal;
  const upsells = salesPerMonth * upsellRateDecimal;
  const nonBuyers = showsPerMonth - salesPerMonth;
  const downsellSales = nonBuyers * downsellRateDecimal;

  // Revenue calculations
  const mainOfferRevenue = salesPerMonth * avgSaleValue;
  const upsellRevenue = upsells * upsellValue;
  const downsellRevenue = downsellSales * downsellValue;
  const revenuePerMonth = mainOfferRevenue + upsellRevenue + downsellRevenue;

  // Key metrics
  const revenuePerShow = showsPerMonth > 0
    ? (closeRateDecimal * avgSaleValue) +
      (closeRateDecimal * upsellRateDecimal * upsellValue) +
      ((1 - closeRateDecimal) * downsellRateDecimal * downsellValue)
    : 0;
  const revenuePerLead = leadsPerMonth > 0 ? revenuePerMonth / leadsPerMonth : 0;
  const costPerAppointment = costPerLead / (answerRateDecimal * bookingRateDecimal);
  const costPerShow = costPerAppointment / showRateDecimal;
  const costPerSale = costPerShow / closeRateDecimal;
  const avgRevenuePerSale = avgSaleValue + (upsellRateDecimal * upsellValue);
  const ltvCac = costPerSale > 0 ? avgRevenuePerSale / costPerSale : 0;

  // Path to Target Calculations (working backwards from revenue goal)
  const salesNeeded = targetRevenue / avgRevenuePerSale;
  const showsNeeded = salesNeeded / closeRateDecimal;
  const appointmentsNeeded = showsNeeded / showRateDecimal;
  const callsNeeded = appointmentsNeeded / (answerRateDecimal * bookingRateDecimal);
  const leadsNeeded = callsNeeded; // 100% call attempt rate
  const adSpendRequired = leadsNeeded * costPerLead;
  const callsPerDay = callsNeeded / WORKING_DAYS_PER_MONTH;
  const closersNeeded = Math.ceil(callsPerDay / CALLS_PER_CLOSER_PER_DAY);

  return {
    // Current Performance - Granular Funnel
    leadsPerMonth: Math.round(leadsPerMonth),
    callsMade: Math.round(callsMade),
    personsReached: Math.round(personsReached),
    appointmentsPerMonth: Math.round(appointmentsPerMonth),
    showsPerMonth: Math.round(showsPerMonth),
    salesPerMonth: Math.round(salesPerMonth * 10) / 10,
    upsells: Math.round(upsells * 10) / 10,
    downsellSales: Math.round(downsellSales * 10) / 10,
    revenuePerMonth: Math.round(revenuePerMonth),

    // Key Metrics
    revenuePerShow: Math.round(revenuePerShow),
    revenuePerLead: Math.round(revenuePerLead * 100) / 100,
    costPerShow: Math.round(costPerShow),
    costPerSale: Math.round(costPerSale),
    ltvCac: Math.round(ltvCac * 10) / 10,

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
