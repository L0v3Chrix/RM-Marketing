// Funnel calculation utilities
// Based on GRANULAR-METRICS-SPEC.md

export interface FunnelMetrics {
  // Input metrics
  adSpend: number;
  costPerLead: number;
  callAnswerRate: number;
  callToBookingRate: number;
  showRate: number;
  closeRate: number;
  upsellRate: number;
  downsellRate: number;

  // Offer pricing
  avgMainOffer: number;
  downsellPrice: number;
  upsellPrice: number;
}

export interface CalculatedMetrics {
  // Volume metrics
  leads: number;
  callsMade: number;
  personsReached: number;
  appointmentsBooked: number;
  shows: number;
  sales: number;
  upsells: number;
  downsells: number;

  // Revenue metrics
  revenuePerShow: number;
  revenuePerLead: number;
  revenuePerCall: number;
  monthlyRevenue: number;

  // Cost metrics
  costPerShow: number;
  costPerSale: number;
  costPerAppointment: number;

  // Efficiency metrics
  ltvCac: number;
  revenueToAdSpend: number;
  profitPerSale: number;
}

export const DEFAULT_METRICS: FunnelMetrics = {
  adSpend: 500,
  costPerLead: 6.00,
  callAnswerRate: 0.30,
  callToBookingRate: 0.40,
  showRate: 0.59,
  closeRate: 0.30,
  upsellRate: 0.20,
  downsellRate: 0.20,
  avgMainOffer: 2000,
  downsellPrice: 197,
  upsellPrice: 500,
};

export function calculateFunnel(metrics: FunnelMetrics): CalculatedMetrics {
  const {
    adSpend,
    costPerLead,
    callAnswerRate,
    callToBookingRate,
    showRate,
    closeRate,
    upsellRate,
    downsellRate,
    avgMainOffer,
    downsellPrice,
    upsellPrice,
  } = metrics;

  // Volume calculations
  const leads = adSpend / costPerLead;
  const callsMade = leads; // Assume 100% call attempt rate
  const personsReached = callsMade * callAnswerRate;
  const appointmentsBooked = personsReached * callToBookingRate;
  const shows = appointmentsBooked * showRate;
  const sales = shows * closeRate;
  const upsells = sales * upsellRate;
  const nonBuyers = shows - sales;
  const downsells = nonBuyers * downsellRate;

  // Revenue calculations
  const revenuePerShow =
    (closeRate * avgMainOffer) +
    (closeRate * upsellRate * upsellPrice) +
    ((1 - closeRate) * downsellRate * downsellPrice);

  const revenuePerAppointment = revenuePerShow * showRate;
  const revenuePerPerson = revenuePerAppointment * callToBookingRate;
  const revenuePerCall = revenuePerPerson * callAnswerRate;
  const revenuePerLead = revenuePerCall; // Assuming 100% call attempt rate

  const mainOfferRevenue = sales * avgMainOffer;
  const upsellRevenue = upsells * upsellPrice;
  const downsellRevenue = downsells * downsellPrice;
  const monthlyRevenue = mainOfferRevenue + upsellRevenue + downsellRevenue;

  // Cost calculations
  const costPerAppointment = costPerLead / (callAnswerRate * callToBookingRate);
  const costPerShow = costPerAppointment / showRate;
  const costPerSale = costPerShow / closeRate;

  // Efficiency calculations
  const avgRevenuePerSale = avgMainOffer + (upsellRate * upsellPrice);
  const ltvCac = avgRevenuePerSale / costPerSale;
  const revenueToAdSpend = monthlyRevenue / adSpend;
  const profitPerSale = avgRevenuePerSale - costPerSale;

  return {
    leads: Math.round(leads),
    callsMade: Math.round(callsMade),
    personsReached: Math.round(personsReached),
    appointmentsBooked: Math.round(appointmentsBooked),
    shows: Math.round(shows),
    sales: Math.round(sales),
    upsells: Math.round(upsells),
    downsells: Math.round(downsells),
    revenuePerShow,
    revenuePerLead,
    revenuePerCall,
    monthlyRevenue,
    costPerShow,
    costPerSale,
    costPerAppointment,
    ltvCac,
    revenueToAdSpend,
    profitPerSale,
  };
}

export function calculateTargetRequirements(
  targetRevenue: number,
  metrics: FunnelMetrics
): {
  adSpendRequired: number;
  leadsNeeded: number;
  callsNeeded: number;
  appointmentsNeeded: number;
  showsNeeded: number;
  salesNeeded: number;
  callsPerDay: number;
  closersNeeded: number;
} {
  const calculated = calculateFunnel(metrics);

  // Work backwards from target revenue
  const revenueMultiplier = targetRevenue / calculated.monthlyRevenue;

  const salesNeeded = Math.ceil(calculated.sales * revenueMultiplier);
  const showsNeeded = Math.ceil(salesNeeded / metrics.closeRate);
  const appointmentsNeeded = Math.ceil(showsNeeded / metrics.showRate);
  const callsNeeded = Math.ceil(appointmentsNeeded / (metrics.callAnswerRate * metrics.callToBookingRate));
  const leadsNeeded = callsNeeded; // Assuming 100% call attempt rate
  const adSpendRequired = leadsNeeded * metrics.costPerLead;

  // Assuming 22 working days per month, 20 calls per closer per day
  const callsPerDay = Math.ceil(callsNeeded / 22);
  const closersNeeded = Math.ceil(callsPerDay / 20);

  return {
    adSpendRequired,
    leadsNeeded,
    callsNeeded,
    appointmentsNeeded,
    showsNeeded,
    salesNeeded,
    callsPerDay,
    closersNeeded,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(value));
}
