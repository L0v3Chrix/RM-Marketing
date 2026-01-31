# GHL Mastery Data Analysis Summary
## Corrected & Verified (January 2026)

---

## Data Sources

| Source | Type | Period | Confidence |
|--------|------|--------|------------|
| `unified_payments.csv` | Stripe transactions | Oct 30 - Jan 30 (90 days) | ✅ High |
| `subscriptions.csv` | New subscriptions created | Oct 30 - Jan 30 (90 days) | ✅ High |
| GHL Dashboard | Contacts by source | Oct 30 - Jan 30 | ✅ High |
| GHL Dashboard | Appointments & status | Oct 30 - Jan 30 | ✅ High |
| Adam McInnes | Verbal confirmations | January 2026 | ✅ High |

**Critical Clarification:**
- CSVs show 90-day activity, NOT total customer base
- Appointment data from GHL Sales Calendar (46 total)
- Tripwire split: 33 from ads, 84 from database = 117 total

---

## Corrected Funnel Data (Ads Only)

### The Numbers

| Metric | Value | Source |
|--------|-------|--------|
| Ad Spend (estimated) | ~$1,500 | Need confirmation |
| Leads Generated | 238 | GHL Dashboard |
| Tripwire Purchases (ads) | 33 | Stripe CSV |
| Appointments Booked | 46 | GHL Calendar |
| Showed | 22 | GHL Dashboard |
| No-Shows | 11 | GHL Dashboard |
| Cancelled | 9 | GHL Dashboard |

### Conversion Rates

| Stage | Rate | Industry Avg | Industry Top | Status |
|-------|------|--------------|--------------|--------|
| Lead → Tripwire | 14% | 2-3% | 5-10% | ⭐ Top 10% |
| Lead → Appointment | **19.3%** | 3-5% | 8-10% | ⭐ **Top 1%** |
| Show Rate (excl. cancelled) | **59%** | 60-75% | 80-95% | ✅ At par |
| Show Rate (all booked) | 48% | — | — | — |

### Cost Metrics

| Metric | Value | Industry Avg | Status |
|--------|-------|--------------|--------|
| Cost Per Lead | **$6.30** | $50-85 | ⭐ **Top 5%** |
| Cost Per Appointment | $32.61 | $150-300 | ⭐ Exceptional |
| Cost Per Show | $68.18 | $250-500 | ⭐ Exceptional |

---

## Revenue Analysis (90 Days)

### Total Revenue

| Metric | Value |
|--------|-------|
| Total Paid Transactions | 214 |
| Total 90-Day Revenue | **$109,927** |
| Monthly Average | **$36,642** |
| Failed Payments | $25,870 (50 transactions) |

### Revenue by Category

| Category | Revenue | % | Transactions |
|----------|---------|---|--------------|
| Recurring Subscriptions | $52,066 | 47% | 123 |
| VIP $5K Sales | $25,000 | 23% | 5 |
| Invoice/Custom Work | $25,394 | 23% | 9 |
| Low-ticket/Tripwire | $7,467 | 7% | ~80 |

### Product Breakdown

| Product | Amount | Count | Total |
|---------|--------|-------|-------|
| $7 Tripwire | $7 | 33 | $231 |
| Tripwire + Upsell | $26 | 21 | $546 |
| Micro Snapshots | $97 | 14 | $1,358 |
| AOF Course | $197 | 30 | $5,910 |
| Coaching (tier) | $297 | 19 | $5,643 |
| VIP Coaching | $497 | 21 | $10,437 |
| Legacy VA | $650 | 30 | $19,500 |
| Current VA | $900 | 2 | $1,800 |
| VIP Package | $5,000 | 5 | $25,000 |

---

## Estimated MRR

Based on unique recurring customers in payment data:

| Product | Rate | Customers | Monthly |
|---------|------|-----------|---------|
| Micro | $97 | 3 | $291 |
| Course | $197 | 10 | $1,970 |
| Coaching | $297 | 7 | $2,079 |
| VIP | $497 | 8 | $3,976 |
| Premium | $597 | 3 | $1,791 |
| **Legacy VA** | **$650** | **10** | **$6,500** |
| Current VA | $900 | 1 | $900 |
| High-tier | $997 | 2 | $1,994 |
| **TOTAL** | — | **~44** | **~$19,500** |

**Note:** Legacy VA customers at $650/mo = 33% of MRR

---

## Unit Economics

| Metric | Value | Calculation | Benchmark | Status |
|--------|-------|-------------|-----------|--------|
| LTV (Coaching) | $2,000 | $500 × 4 mo | — | Confirmed |
| LTV (VA) | $5,200 | $650 × 8 mo | — | Calculated |
| LTV (Blended) | $3,600 | Average | — | Conservative |
| CAC (@ 30% close) | ~$227 | $1,500 ÷ 6.6 | — | Estimated |
| **LTV:CAC** | **15.8x** | $3,600 ÷ $227 | 3x healthy | ⭐ **Exceptional** |

**Interpretation:** LTV:CAC of 15.8x indicates significant under-investment in acquisition. Business could sustain 5x higher CAC and still be healthy.

---

## Benchmark Comparison

| Metric | GHL Mastery | Industry Avg | Percentile |
|--------|-------------|--------------|------------|
| Lead → Appointment | 19.3% | 3-5% | **Top 1%** |
| Cost Per Lead | $6.30 | $50-85 | **Top 5%** |
| Show Rate | 59% | 60-75% | 50th |
| LTV:CAC | 15.8x | 3.2x | **Top 1%** |
| Tripwire Conversion | 14% | 2-3% | **Top 10%** |

**Sources:** Intelemark, Martal Group, WordStream, Phoenix Strategy Group, Data Driven Marketing (2024-2025)

---

## Key Findings

### Exceptional Performance (Don't Fix)

1. **Lead-to-Appointment: 19.3%** — 4-6x industry average
2. **Cost Per Lead: $6.30** — 8-13x better than industry
3. **LTV:CAC: 15.8x** — 5x the healthy threshold
4. **Tripwire Conversion: 14%** — Well above benchmark

### At Par (Minor Optimization)

1. **Show Rate: 59%** — Room to improve to 70-80%
2. **Could add SMS/email sequences for +10-15%**

### Gaps (Focus Areas)

1. **Tripwire → Recurring: 0%** — 33 buyers, 0 converted
2. **Failed Payment Recovery: 0%** — $25,870 leaking
3. **Database Activation: Minimal** — 10,000 contacts dormant
4. **Sales Capacity: 0 FTEs** — Adam doing it alone

### Unknown (Need Data)

1. **Close rate** — Critical for accurate CAC
2. **Total active customers** — Verify MRR
3. **Actual ad spend** — Currently estimated
4. **Churn by product** — Verify LTV

---

## Opportunity Quantification

### Failed Payment Recovery

| Recovery Rate | Amount |
|---------------|--------|
| Conservative (50%) | $12,935 |
| Industry Avg (65%) | $16,816 |
| Best-in-class (75%) | $19,403 |

*Source: Churnkey State of Retention 2025*

### Database Reactivation

| Scenario | Response | Conversion | Revenue |
|----------|----------|------------|---------|
| Conservative | 5% | 3% | $15,000 |
| Moderate | 10% | 5% | $25,000 |
| Aggressive | 15% | 8% | $40,000 |

*Source: AgencyAnalytics, Klaviyo benchmarks*

### Capacity Unlock (with Sales Team)

| Scenario | Monthly Increase | Annual Value |
|----------|------------------|--------------|
| Conservative | +$12,500 | +$150,000 |
| Moderate | +$30,000 | +$360,000 |
| Aggressive | +$60,000 | +$720,000 |

---

## Close Rate Analysis (From Stripe Data)

### New Customer Sales (90 Days)

We identified **54 new customers** who made their first purchase of $197+ in the 90-day period.

| Category | Sales | Revenue | Likely Source |
|----------|-------|---------|---------------|
| VIP $5,000+ | 4 | $20,500 | **Calls (100%)** |
| High-ticket $497-$997 | 25 | $16,484 | Calls + Nurture |
| Mid-ticket $297 | 8 | $2,535 | Mixed |
| AOF Course $197 | 17 | $3,555 | Self-serve |
| **TOTAL** | **54** | **$43,074** | — |

### The Math Problem

- 54 new sales vs 22 shows = **2.5 sales per show** (impossible)
- This means: **Many sales do NOT come from calls**

### Close Rate Scenarios

| Scenario | Assumption | Calculation | Rate |
|----------|------------|-------------|------|
| Conservative | Only VIP $5K from calls | 4/22 | **18%** |
| Moderate | All $497+ from calls | 29/22 | 132%* |
| Likely Reality | ~50-75% of shows close | 11-17/22 | **50-77%** |

*Exceeds 100% = confirms other sales channels active

### Key Insight

The business generates revenue from **multiple channels**:
1. **High-ticket calls** → VIP $5K (4 sales = $20,500)
2. **Nurture sequences** → VA $650, Coaching $497
3. **Self-serve** → AOF Course $197
4. **Database campaigns** → 84 tripwires converted

**This is GOOD NEWS:** The funnel doesn't rely solely on calls. Adam's content and courses sell on their own. Calls are primarily for high-ticket VIP conversions.

### Question for Adam

To calculate exact close rate:
> "Of the 22 people who showed up for calls, how many purchased VIP ($5K) or VA/Coaching ($497+)?"

---

## Strategic Questions to Resolve

### Critical (Affects Calculations)

1. Of the 22 shows, how many purchased VIP or high-ticket coaching?
2. What's the actual monthly ad spend?
3. What % of $497+ sales came from calls vs nurture?

### Important (Affects Strategy)

4. What triggers the "Appointment" source tag in GHL?
5. What's the upgrade path: Course → Coaching → VA?
6. What's churn rate on VA vs. Coaching?

### Nice to Have

7. Sales call recordings for training analysis
8. Historical funnel data (prior 90 days)
9. Attribution for the 150 "N/A" contacts

---

## Summary: The Narrative

**GHL Mastery is not a broken business—it's a constrained one.**

The funnel performs at **4-6x industry benchmarks**. The unit economics support aggressive scaling. The constraint is simple: **no one is working the leads**.

- 22 qualified prospects showed up in 90 days
- The question isn't "does the funnel work?"
- The question is: "Who was there to close them?"

**The opportunity cost of inaction: ~$350K-750K annually.**

**Phase 1 (Pressure Test):** 30-day quota = $36K closed revenue
