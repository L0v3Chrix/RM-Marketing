# GHL Mastery Strategic Assessment
## Fortune 100-Level Analysis & Recommendations

**Prepared for:** Adam McInnes & Brendan (RM Marketing / GHL Mastery)
**Prepared by:** Chrix, Raise the Vibe
**Date:** January 2026
**Confidential**

---

## Executive Summary

GHL Mastery has **solid funnel fundamentals** with profitable unit economics, but is constrained by a capacity problem: **no dedicated sales team**.

This assessment reveals that the business is not broken—it's bottlenecked. The funnel is healthy and profitable. The unit economics support scaling. The constraint is human capital, not marketing effectiveness.

**Key Findings (with proper context):**
- 19.3% lead-to-appointment rate — above average for warm paid leads (15-20% typical)
- $68 cost per qualified show — competitive for coaching (industry: $100-300)
- 3-5x true LTV:CAC when including full acquisition costs — healthy range
- 22 qualified prospects showed up in 90 days—but no dedicated team to close them

**Note on Benchmarks:** Some early claims compared warm leads to cold lead averages. This document uses properly contextualized comparisons. See the Fortune 100 Critical Analysis for full methodology.

**Primary Recommendation:** Install a sales department immediately while working existing pipeline. Conservative annual opportunity: $200-400K Year 1.

---

## Table of Contents

1. [Data Foundation](#1-data-foundation)
2. [Funnel Performance Analysis](#2-funnel-performance-analysis)
3. [Financial Analysis](#3-financial-analysis)
4. [Benchmark Comparison](#4-benchmark-comparison)
5. [Opportunity Quantification](#5-opportunity-quantification)
6. [Gap Analysis](#6-gap-analysis)
7. [Strategic Questions](#7-strategic-questions)
8. [Recommendations](#8-recommendations)
9. [Financial Projections](#9-financial-projections)
10. [Implementation Roadmap](#10-implementation-roadmap)

---

## 1. Data Foundation

### 1.1 Data Sources

| Source | Type | Period | Confidence |
|--------|------|--------|------------|
| unified_payments.csv | Stripe transactions | Oct 30, 2025 - Jan 30, 2026 | ✅ High |
| subscriptions.csv | New subscriptions | Oct 30, 2025 - Jan 30, 2026 | ✅ High |
| GHL Dashboard | Contacts by source | Oct 30, 2025 - Jan 30, 2026 | ✅ High |
| GHL Dashboard | Appointments | Oct 30, 2025 - Jan 30, 2026 | ✅ High |
| Adam McInnes | Verbal confirmation | January 2026 | ✅ High |

### 1.2 Confirmed Metrics

| Metric | Value | Source |
|--------|-------|--------|
| Ad leads generated | 238 | GHL Dashboard |
| Tripwire purchases (ads) | 33 | Stripe CSV |
| Tripwire purchases (database) | 84 | Adam confirmation |
| Total appointments | 46 | GHL Calendar |
| Showed | 22 | GHL Dashboard |
| No-showed | 11 | GHL Dashboard |
| Cancelled | 9 | GHL Dashboard |
| 90-day revenue | $109,927 | Stripe CSV |
| Failed payments | $25,870 | Stripe CSV |

### 1.3 Data Gaps (Requires Follow-Up)

| Missing Data | Impact | Priority |
|--------------|--------|----------|
| Close rate (shows → sales) | Cannot calculate true CAC | 🔴 Critical |
| Total active customer count | Cannot verify MRR | 🟡 High |
| Lead source for each appointment | Cannot fully attribute | 🟡 High |
| Churn rates by product | Cannot verify LTV | 🟡 High |
| Actual ad spend | Using estimate | 🟢 Medium |

---

## 2. Funnel Performance Analysis

### 2.1 The Corrected Funnel

```
                    ┌─────────────────────────────────────┐
                    │         238 AD LEADS                │
                    │      ($6.30 CPL / ~$1,500 spend)    │
                    └─────────────────┬───────────────────┘
                                      │
                           ┌──────────▼──────────┐
                           │   19.3% BOOK RATE   │ ← Above avg for warm leads
                           │  (Warm lead avg: 15-20%)  │
                           └──────────┬──────────┘
                                      │
                    ┌─────────────────▼───────────────────┐
                    │         46 APPOINTMENTS             │
                    │        ($32.61 per booking)         │
                    └─────────────────┬───────────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
    ┌─────────▼─────────┐   ┌────────▼────────┐   ┌─────────▼─────────┐
    │    22 SHOWED      │   │   11 NO-SHOW    │   │   9 CANCELLED     │
    │      (48%)        │   │     (24%)       │   │     (20%)         │
    └─────────┬─────────┘   └─────────────────┘   └───────────────────┘
              │
              │ Excluding cancelled:
              │ 59% show rate (industry: 60-75%)
              │
    ┌─────────▼─────────┐
    │    ? CLOSED       │ ← UNKNOWN - CRITICAL GAP
    │   ($68.18/show)   │
    └───────────────────┘
```

### 2.2 Conversion Rate Analysis

| Stage | GHL Mastery | Proper Benchmark | Industry Top | Status |
|-------|-------------|------------------|--------------|--------|
| Lead → Appointment | **19.3%** | 15-20% (warm leads) | 25-30% | Slightly above avg |
| Appointment → Show | **59%** | 60-75% | 80-95% | Slightly below avg |
| Show → Close | **Unknown** | 20-25% | 30-40% | Need data |

**Citation Sources:**
- Lead-to-appointment: WordStream, Ruler Analytics (warm paid leads)
- Show rates: Roezan, Close.com industry benchmarks
- Close rates: Arrows.to High-Ticket Closing Report 2024

**Note:** The often-cited 3-5% booking rate refers to cold outbound leads, not warm inbound from paid ads. Comparing warm leads to cold lead benchmarks is misleading.

### 2.3 Key Insight: The Funnel Is Not The Problem

The 19.3% lead-to-appointment rate is **solid**. This indicates:

1. **Ad creative is working** — Message resonates with target audience
2. **Offer is compelling** — People want what GHL Mastery sells
3. **Landing pages convert** — Technical execution is solid
4. **Price point is right** — No friction at booking stage

**The breakdown occurs after the appointment is booked—when human intervention is required.**

---

## 3. Financial Analysis

### 3.1 Revenue Breakdown (90 Days)

| Category | Revenue | % of Total | Transactions |
|----------|---------|------------|--------------|
| Recurring subscriptions | $52,066 | 47% | 123 |
| VIP $5K sales | $25,000 | 23% | 5 |
| Invoice/custom work | $25,394 | 23% | 9 |
| Low-ticket/tripwire | $7,467 | 7% | ~80 |
| **TOTAL** | **$109,927** | 100% | 214 |

### 3.2 Estimated MRR Composition

| Product | Rate | Est. Customers | Monthly Value |
|---------|------|----------------|---------------|
| Micro Snapshots | $97 | 3 | $291 |
| AOF Course | $197 | 10 | $1,970 |
| Coaching (tier) | $297 | 7 | $2,079 |
| VIP Coaching | $497 | 8 | $3,976 |
| Premium | $597 | 3 | $1,791 |
| **Legacy VA** | **$650** | **10** | **$6,500** |
| Current VA | $900 | 1 | $900 |
| High-tier | $997 | 2 | $1,994 |
| **TOTAL** | — | **~44** | **~$19,500** |

**Note:** Legacy VA customers at $650/mo represent 33% of MRR. These are sticky, high-value customers.

### 3.3 Unit Economics

| Metric | Value | Calculation | Benchmark | Status |
|--------|-------|-------------|-----------|--------|
| Cost Per Lead | $6.30 | $1,500 ÷ 238 | $50-85 | ⭐ Exceptional |
| Cost Per Appointment | $32.61 | $1,500 ÷ 46 | $150-300 | ⭐ Exceptional |
| Cost Per Show | $68.18 | $1,500 ÷ 22 | $250-500 | ⭐ Exceptional |
| LTV (Coaching) | $2,000 | $500 × 4 months | — | Confirmed |
| LTV (VA) | $5,200 | $650 × 8 months | — | Calculated |
| LTV (Blended) | $3,600 | Average | — | Conservative |
| CAC (at 30% close) | $227 | $1,500 ÷ 6.6 closes | — | Estimated |
| **LTV:CAC Ratio** | **15.8x** | $3,600 ÷ $227 | 3x healthy | ⭐ Exceptional |

**Critical Note:** LTV:CAC of 15.8x indicates **significant under-investment in acquisition**. Industry guidance suggests:
- Below 3x: Unsustainable
- 3-5x: Healthy
- Above 6x: Under-investing in growth

*Source: Phoenix Strategy Group, First Page Sage, Tely.ai SaaS benchmarks*

### 3.4 Failed Payment Analysis

| Metric | Value |
|--------|-------|
| Failed transactions | 50 |
| Failed amount | $25,870 |
| % of total attempted | 19% |
| Monthly average | $8,623 |

**Recovery Opportunity:**
- Conservative (50% recovery): $12,935
- Industry average (60-70%): $15,522 - $18,109
- Best-in-class (75-85%): $19,403 - $21,990

*Source: Churnkey State of Retention 2025, ProsperStack, Slickerhq*

---

## 4. Benchmark Comparison

### 4.1 Performance vs. Industry (Properly Benchmarked)

| Metric | GHL Mastery | Proper Benchmark | Status |
|--------|-------------|------------------|--------|
| Lead → Appointment | 19.3% | 15-20% (warm leads) | Slightly above avg |
| Cost Per Show | $68 | $100-300 (coaching) | Good |
| Show Rate | 59% | 60-75% | Slightly below avg |
| LTV:CAC (full costs) | 3-5x | 3-5x (healthy) | Healthy |
| Tripwire Conversion | 14% | 2-3% (general) | Good |

**Note:** Original benchmarks compared opt-ins to SQLs and warm leads to cold leads. This table uses apples-to-apples comparisons.

### 4.2 Where GHL Mastery Performs Well

**1. Cost Per Qualified Show**
- $68 per sales-ready show is competitive
- Industry average for coaching: $100-300 per qualified appointment
- **Solid efficiency, room for scale**

**2. Appointment Booking Rate**
- 19.3% booking rate is above warm lead average (15-20%)
- Good targeting and offer-market fit
- **Healthy funnel fundamentals**

**3. Unit Economics**
- 3-5x LTV:CAC (when including full costs) is healthy
- Direct ad spend efficiency is very good
- **Supports profitable scaling**

### 4.3 Where GHL Mastery is Average

**1. Show Rate (59%)**
- Industry average: 60-75%
- Best-in-class: 80-95%
- Gap to best-in-class: 20-35 percentage points
- **Optimization opportunity, not crisis**

**2. Tripwire-to-Paid Conversion (0%)**
- Industry average: 5-15%
- 33 tripwire buyers, 0 converted to recurring
- **Clear gap requiring attention**

---

## 5. Opportunity Quantification

### 5.1 Revenue at Risk

| Issue | Monthly Impact | Annual Impact | Confidence |
|-------|----------------|---------------|------------|
| No sales team (capacity) | $20,000-40,000 | $240,000-480,000 | Medium |
| Failed payment leakage | $3,000-6,000 | $36,000-72,000 | High |
| Tripwire non-conversion | $1,500-3,000 | $18,000-36,000 | Medium |
| Database dormancy | $5,000-15,000 | $60,000-180,000 | Medium |
| **TOTAL** | **$29,500-64,000** | **$354,000-768,000** | — |

### 5.2 The Capacity Constraint Math

**Current State:**
- 22 shows in 90 days = 7.3 shows/month
- At 30% close rate = 2.2 sales/month
- At $3,600 LTV = $7,920/month from ad funnel

**With Dedicated Sales Team:**
- Same funnel, same ads, same spend
- But 100% of shows get proper follow-up
- Plus systematic no-show recovery
- Plus database reactivation
- Plus failed payment dunning

**Conservative Projection:**
- Shows: 7.3 → 10/month (improved show rate)
- Close rate: 30% → 35% (trained closers)
- Sales: 2.2 → 3.5/month
- Revenue: $7,920 → $12,600/month
- **Delta: +$4,680/month = +$56,160/year**

**Aggressive Projection (with scaled ad spend):**
- Ad spend: $500/month → $5,000/month
- Leads: 79/month → 790/month (10x)
- Appointments: 15/month → 150/month
- Shows: 9/month → 90/month
- Sales: 2.7/month → 27/month
- Revenue: $9,720/month → $97,200/month
- **Delta: +$87,480/month = +$1,049,760/year**

### 5.3 Database Opportunity

| Segment | Est. Contacts | Response Rate | Conversion | Revenue |
|---------|---------------|---------------|------------|---------|
| Past buyers (non-recurring) | 2,000 | 10-15% | 5% | $10,000-15,000 |
| Tripwire only | 3,000 | 5-10% | 3% | $4,500-9,000 |
| Leads (no purchase) | 5,000 | 3-5% | 2% | $3,000-5,000 |
| **TOTAL** | **10,000** | — | — | **$17,500-29,000** |

*Response rates based on: AgencyAnalytics, Klaviyo benchmarks, HubSpot Community data*

---

## 6. Gap Analysis

### 6.1 Critical Gaps

| Gap | Current State | Target State | Impact |
|-----|---------------|--------------|--------|
| Sales capacity | 0 dedicated FTEs | 2-3 FTEs | 🔴 Critical |
| Close rate tracking | Unknown | Tracked daily | 🔴 Critical |
| Dunning sequences | None | Automated | 🟡 High |
| Tripwire nurture | None | 7-day sequence | 🟡 High |
| Database campaigns | Sporadic | Systematic | 🟡 High |

### 6.2 Operational Gaps

| Area | Gap | Recommendation |
|------|-----|----------------|
| CRM | 44% contacts unattributed | Fix source tagging |
| Calendar | Multiple calendars, hard to track | Consolidate reporting |
| Payment | 19% failure rate, no recovery | Implement dunning |
| Follow-up | Manual, inconsistent | Automate sequences |
| Reporting | Dashboard but no action cadence | Weekly review rhythm |

### 6.3 Strategic Gaps

| Question | Current Answer | Ideal Answer |
|----------|----------------|--------------|
| Who closes the sales? | Adam (when available) | Dedicated closer(s) |
| Who nurtures no-shows? | No one | Setter(s) |
| Who works the database? | No one | Setter(s) + automation |
| Who recovers failed payments? | Manual/sporadic | Automated sequences |
| Who tracks performance? | Sporadic | Daily/weekly cadence |

---

## 7. Strategic Questions

### 7.1 Questions for Adam & Brendan

**Revenue & Sales:**
1. Of the 22 appointments that showed, how many closed? What were they?
2. What's the actual close rate on VIP calls vs. coaching calls?
3. Who currently handles sales calls? How much time per week?
4. What's the average time from lead to close?

**Products:**
5. Is the $197 course one-time or recurring?
6. What's the upgrade path from course → coaching → VA?
7. What's the churn rate on $497 coaching vs. $650 VA?
8. Are there any customers on both coaching AND VA?

**Operations:**
9. What's the actual monthly ad spend? (I've estimated $500/mo)
10. Why are there multiple calendars? Can they be consolidated?
11. Who monitors the GHL dashboard? How often?
12. Is there any sales documentation (scripts, processes)?

**Strategy:**
13. What's Adam's ideal role in 12 months?
14. Is there appetite to 10x ad spend if results support it?
15. What's the ceiling on VA customers (capacity constraint)?
16. Is there interest in a high-ticket ($10K+) offer?

### 7.2 Data Requests

| Request | Purpose | Priority |
|---------|---------|----------|
| Close rate by product | Accurate CAC calculation | 🔴 Critical |
| Full customer list with MRR | Verify total MRR | 🟡 High |
| Actual ad spend by month | Accurate CPL calculation | 🟡 High |
| Churn data by product | Verify LTV assumptions | 🟡 High |
| Sales call recordings (if any) | Identify training needs | 🟢 Medium |

---

## 8. Recommendations

### 8.1 Immediate Actions (Week 1)

| Action | Owner | Impact | Effort |
|--------|-------|--------|--------|
| Implement failed payment dunning | Brendan | +$3-6K/mo | Low |
| Fix CRM source attribution | Brendan | Visibility | Low |
| Start working existing leads | Chrix | Revenue | Medium |
| Launch database reactivation | Chrix | +$5-15K one-time | Medium |

### 8.2 Short-Term (Month 1-2)

| Action | Owner | Impact | Effort |
|--------|-------|--------|--------|
| Hire setter | Chrix | Capacity | High |
| Build tripwire nurture sequence | Chrix | +$1.5-3K/mo | Medium |
| Document sales process | Chrix | Scalability | Medium |
| Implement show-rate sequences | Brendan | +10-15% shows | Low |

### 8.3 Medium-Term (Month 2-3)

| Action | Owner | Impact | Effort |
|--------|-------|--------|--------|
| Hire closer | Chrix | Capacity | High |
| Increase ad spend to $5K/mo | Adam | 10x leads | Medium |
| Build training program | Chrix | Consistency | High |
| Implement cross-sell sequences | Chrix | +MRR | Medium |

### 8.4 Long-Term (Month 3+)

| Action | Owner | Impact | Effort |
|--------|-------|--------|--------|
| Scale ad spend to $10-15K/mo | Adam | Scale | Medium |
| Add second closer | Chrix | Capacity | High |
| Launch YouTube content strategy | Adam | Brand | High |
| Consider high-ticket ($10K+) offer | Team | Revenue | High |

---

## 9. Financial Projections

### 9.1 Conservative Scenario

**Assumptions:**
- Ad spend: $500 → $2,500/month
- Show rate: 59% → 65%
- Close rate: 30% (assumed)
- Failed payment recovery: 50%
- Database: $15K one-time

| Month | Ad Spend | Leads | Shows | Sales | New MRR | Total Revenue |
|-------|----------|-------|-------|-------|---------|---------------|
| Current | $500 | 79 | 7 | 2 | $1,000 | $36,000 |
| Month 1 | $1,500 | 238 | 15 | 5 | $2,500 | $42,000 |
| Month 2 | $2,000 | 317 | 21 | 6 | $3,000 | $48,000 |
| Month 3 | $2,500 | 397 | 26 | 8 | $4,000 | $55,000 |

**90-Day Impact:**
- New MRR added: $9,500
- Database revenue: $15,000
- Failed payment recovery: $13,000
- **Total new revenue: ~$37,500**

### 9.2 Moderate Scenario

**Assumptions:**
- Ad spend: $500 → $5,000/month
- Show rate: 59% → 70%
- Close rate: 35%
- Failed payment recovery: 65%
- Database: $25K one-time

| Month | Ad Spend | Leads | Shows | Sales | New MRR | Total Revenue |
|-------|----------|-------|-------|-------|---------|---------------|
| Current | $500 | 79 | 7 | 2 | $1,000 | $36,000 |
| Month 1 | $2,500 | 397 | 28 | 10 | $5,000 | $50,000 |
| Month 2 | $4,000 | 635 | 44 | 15 | $7,500 | $65,000 |
| Month 3 | $5,000 | 794 | 56 | 20 | $10,000 | $80,000 |

**90-Day Impact:**
- New MRR added: $22,500
- Database revenue: $25,000
- Failed payment recovery: $17,000
- **Total new revenue: ~$64,500**

### 9.3 Aggressive Scenario

**Assumptions:**
- Ad spend: $500 → $10,000/month
- Show rate: 59% → 75%
- Close rate: 38%
- Failed payment recovery: 75%
- Database: $40K one-time

| Month | Ad Spend | Leads | Shows | Sales | New MRR | Total Revenue |
|-------|----------|-------|-------|-------|---------|---------------|
| Current | $500 | 79 | 7 | 2 | $1,000 | $36,000 |
| Month 1 | $5,000 | 794 | 60 | 23 | $11,500 | $60,000 |
| Month 2 | $7,500 | 1,190 | 89 | 34 | $17,000 | $85,000 |
| Month 3 | $10,000 | 1,587 | 119 | 45 | $22,500 | $110,000 |

**90-Day Impact:**
- New MRR added: $51,000
- Database revenue: $40,000
- Failed payment recovery: $19,000
- **Total new revenue: ~$110,000**

### 9.4 Scenario Comparison

| Scenario | Investment | 90-Day Revenue | 12-Month Revenue | ROI |
|----------|------------|----------------|------------------|-----|
| Conservative | $60,000 | +$37,500 | +$150,000 | 2.5x |
| Moderate | $60,000 | +$64,500 | +$300,000 | 5x |
| Aggressive | $80,000 | +$90,000 | +$500,000 | 6.3x |

**Important:** 8-13x ROI is achievable Year 2+, not Year 1. First-year expectations should be 2-5x. See Fortune 100 Critical Analysis for methodology.

---

## 10. Implementation Roadmap

### 10.1 Phase 1: Foundation (Weeks 1-4)

```
Week 1:
├── Start working existing pipeline (Chrix + Sarah)
├── Launch database reactivation campaign
├── Implement dunning sequences
└── Fix CRM attribution

Week 2:
├── Continue sales activity
├── Document current sales process
├── Begin setter recruitment
└── Build tripwire nurture sequence

Week 3:
├── Interview setter candidates
├── Deploy show-rate optimization
├── Analyze first database results
└── Increase ad spend to $2,500

Week 4:
├── Hire setter
├── Begin setter training
├── Review month 1 metrics
└── Plan month 2 initiatives
```

### 10.2 Phase 2: Build (Weeks 5-8)

```
Week 5:
├── Setter working leads
├── Begin closer recruitment
├── Cross-sell sequence deployment
└── Database campaign wave 2

Week 6:
├── Interview closer candidates
├── Setter hitting stride
├── Increase ad spend to $4,000
└── Build sales training materials

Week 7:
├── Hire closer
├── Begin closer training
├── Review mid-engagement metrics
└── Identify optimization opportunities

Week 8:
├── Closer shadowing
├── Team calibration
├── Increase ad spend to $5,000
└── Prepare for handoff phase
```

### 10.3 Phase 3: Scale & Handoff (Weeks 9-12)

```
Week 9:
├── Full team operational
├── Closer taking calls solo
├── Process documentation finalized
└── Performance dashboard live

Week 10:
├── Scale ad spend to target level
├── Optimize based on data
├── Team hitting rhythm
└── Adam transitioning out of sales

Week 11:
├── Team running independently
├── Final optimizations
├── Documentation complete
└── Knowledge transfer

Week 12:
├── Final review
├── Handoff complete
├── 30-day support period begins
└── Success criteria assessment
```

---

## Appendix A: Industry Benchmark Sources

| Benchmark | Source | Year |
|-----------|--------|------|
| B2B appointment booking rates | Intelemark, Martal Group | 2024 |
| Show rate benchmarks | Roezan, Close.com | 2024 |
| Close rate benchmarks | Arrows.to, WJHL | 2024 |
| Facebook CPL | WordStream | 2024-2025 |
| LTV:CAC ratios | Phoenix Strategy Group, First Page Sage | 2024 |
| Tripwire conversion | Data Driven Marketing, Stan.store | 2024 |
| Database reactivation | AgencyAnalytics, Klaviyo, HubSpot | 2024-2025 |
| Failed payment recovery | Churnkey, ProsperStack, Slickerhq | 2025 |

---

## Appendix B: Assumptions & Limitations

### Assumptions Made

1. **Ad spend:** Estimated at $500/month (~$1,500/90 days) based on earlier conversation
2. **Close rate:** Assumed 30% (industry average for coaching) — needs confirmation
3. **LTV:** Using Brendan's $2,000 coaching figure and calculated $5,200 VA figure
4. **MRR:** Estimated from 90-day payment patterns, not verified customer count

### Limitations

1. Close rate is unknown — all CAC and ROI calculations are estimates
2. Full customer list not available — MRR is inferred
3. Churn rates not confirmed — LTV may vary
4. Attribution gaps in CRM — some metrics may be incomplete

---

## Appendix C: Glossary

| Term | Definition |
|------|------------|
| CAC | Customer Acquisition Cost |
| CPL | Cost Per Lead |
| LTV | Lifetime Value |
| MRR | Monthly Recurring Revenue |
| Dunning | Automated failed payment recovery process |
| Tripwire | Low-priced offer to convert leads to buyers |
| Show Rate | % of booked appointments that attend |
| Close Rate | % of attended appointments that purchase |

---

*Document Version: 2.0*
*Last Updated: January 2026*
*Classification: Confidential*
