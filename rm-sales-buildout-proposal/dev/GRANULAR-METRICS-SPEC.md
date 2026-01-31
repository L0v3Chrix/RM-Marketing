# Granular Metrics Funnel Specification

## The Full Sales Waterfall

Track every step from ad to upsell:

```
AD IMPRESSIONS
     ↓ Click Rate
CLICKS
     ↓ Opt-in Rate
LEADS (opt-ins)
     ↓ Call Attempt Rate
CALLS MADE
     ↓ Answer Rate
PERSONS REACHED
     ↓ Booking Rate
APPOINTMENTS BOOKED
     ↓ Show Rate
SHOWS
     ↓ Close Rate
SALES (Main Offer)
     ↓ Upsell Rate
UPSELLS / OTO
```

---

## Metric Definitions

### Lead Generation Phase

| Metric | Formula | Default | Notes |
|--------|---------|---------|-------|
| Cost Per Click | Ad Spend ÷ Clicks | ~$1.50 | Varies by platform |
| Click-to-Lead Rate | Leads ÷ Clicks | 30-50% | Landing page conversion |
| **Cost Per Lead** | Ad Spend ÷ Leads | **$6.00** | Key efficiency metric |

### Outreach Phase

| Metric | Formula | Default | Notes |
|--------|---------|---------|-------|
| Call Attempt Rate | Calls Made ÷ Leads | 80-100% | Should call every lead |
| **Answer Rate** | Persons Reached ÷ Calls Made | **30%** | Varies by time of day |
| Voicemail Rate | Voicemails ÷ Calls Made | 50% | For follow-up tracking |

### Booking Phase

| Metric | Formula | Default | Notes |
|--------|---------|---------|-------|
| **Booking Rate** | Appointments ÷ Persons Reached | **40%** | Conversation to appointment |
| Lead-to-Appointment | Appointments ÷ Leads | 19.3% | Combined metric |

### Appointment Phase

| Metric | Formula | Default | Notes |
|--------|---------|---------|-------|
| Confirmation Rate | Confirmed ÷ Booked | 80% | Responded to reminders |
| **Show Rate** | Shows ÷ Booked | **59%** | Actually attended |
| No-Show Rate | No-Shows ÷ Booked | 24% | Opportunity for recovery |
| Cancel Rate | Cancelled ÷ Booked | 20% | Pre-appointment cancels |

### Sales Phase

| Metric | Formula | Default | Notes |
|--------|---------|---------|-------|
| **Close Rate** | Sales ÷ Shows | **30%** | Main offer conversion |
| Downsell Rate | Downsells ÷ (Shows - Sales) | 20% | Non-buyers who take $197 |
| **Upsell Rate** | Upsells ÷ Sales | **20%** | Buyers who add more |

---

## Revenue Metrics

### Per-Stage Revenue

| Metric | Formula | Example |
|--------|---------|---------|
| Revenue Per Upsell | Upsell Price | $500 |
| Revenue Per Sale | Main Offer + (Upsell Rate × Upsell Price) | $2,000 + (0.2 × $500) = $2,100 |
| Revenue Per Show | (Close Rate × Rev/Sale) + (Downsell Rate × (1-Close) × $197) | $630 + $27.58 = $657.58 |
| Revenue Per Appointment | Rev/Show × Show Rate | $657.58 × 0.59 = $388 |
| Revenue Per Person | Rev/Apt × Booking Rate | $388 × 0.40 = $155 |
| Revenue Per Call | Rev/Person × Answer Rate | $155 × 0.30 = $46.50 |
| **Revenue Per Lead** | Rev/Call × Call Rate | **$46.50** |

### Cost Metrics

| Metric | Formula | Example |
|--------|---------|---------|
| Cost Per Lead | $6.00 | Input |
| Cost Per Person | CPL ÷ (Call Rate × Answer Rate) | $6 ÷ 0.24 = $25 |
| Cost Per Appointment | CPL ÷ Lead-to-Apt Rate | $6 ÷ 0.193 = $31.09 |
| **Cost Per Show** | Cost/Apt ÷ Show Rate | $31.09 ÷ 0.59 = **$52.69** |
| Cost Per Sale | Cost/Show ÷ Close Rate | $52.69 ÷ 0.30 = $175.63 |

### Efficiency Metrics

| Metric | Formula | Healthy Range |
|--------|---------|---------------|
| **LTV:CAC** | Avg LTV ÷ Cost Per Sale | 3-5x |
| Revenue:Ad Spend | Monthly Revenue ÷ Ad Spend | 10x+ |
| Profit Per Sale | Revenue/Sale - Cost/Sale | $1,900+ |

---

## Dashboard Display

### The Waterfall Visual

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SALES FUNNEL ANALYTICS                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  LEADS          333     ████████████████████████████████ 100%      │
│      ↓ Calls made (100%)                                            │
│  CALLS          333     ████████████████████████████████ 100%      │
│      ↓ Answer rate (30%)                                            │
│  PERSONS        100     ██████████░░░░░░░░░░░░░░░░░░░░░░  30%      │
│      ↓ Booking rate (40%)                                           │
│  APPOINTMENTS    40     ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░  12%      │
│      ↓ Show rate (59%)                                              │
│  SHOWS           24     ███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   7%      │
│      ↓ Close rate (30%)                                             │
│  SALES            7     █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   2%      │
│      ↓ Upsell rate (20%)                                            │
│  UPSELLS          1     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  0.4%     │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│  REVENUE THIS PERIOD                                                │
│  ─────────────────────                                              │
│  Main Offers:    7 × $2,000  =  $14,000                             │
│  Downsells:      3 × $197    =  $591                                │
│  Upsells:        1 × $500    =  $500                                │
│  ─────────────────────────────────────────                          │
│  TOTAL:                         $15,091                             │
│                                                                     │
│  REVENUE PER SHOW:  $628.79                                         │
│  REVENUE PER LEAD:  $45.32                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Metric Cards

Display these prominently:

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   $6.00      │  │   $52.69     │  │   $628.79    │  │   12.0x      │
│  Cost/Lead   │  │  Cost/Show   │  │  Rev/Show    │  │  Rev:Cost    │
└──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘
```

---

## Pressure Test Tracking (Phase 1)

### Daily Dashboard

Track these daily during the 30-day pressure test:

| Metric | Day 1 | Day 7 | Day 14 | Day 21 | Day 30 |
|--------|-------|-------|--------|--------|--------|
| Ad Spend (cumulative) | | | | | $2,000 |
| Leads | | | | | 333 |
| Calls Made | | | | | 333 |
| Persons Reached | | | | | 100 |
| Appointments | | | | | 40 |
| Shows | | | | | 24 |
| Sales | | | | | 7 |
| **Revenue** | | | | | **$36K target** |

### Weekly Conversion Review

Every Friday, review:
1. Which stage has the biggest drop-off?
2. What's our Revenue Per Show trending?
3. Are we on pace for $36K?
4. Where do we need to optimize?

---

## Integration with Calculator

The interactive calculator should allow adjusting each rate:

```
FUNNEL OPTIMIZER

Adjust any rate to see impact on revenue:

Answer Rate:     [====●====] 30%
Booking Rate:    [====●====] 40%
Show Rate:       [====●====] 59%
Close Rate:      [====●====] 30%
Upsell Rate:     [====●====] 20%

At these rates:
├── Revenue Per Show: $628
├── Revenue Per Lead: $45
├── Monthly Revenue @ $2K spend: $15,000
└── To hit $36K, need: $4,800 ad spend

OPTIMIZE: If you increase show rate to 70%:
└── Revenue jumps to $17,600 (+17%)
```

---

## Why This Matters

**Old approach:** Track leads → appointments → sales
**New approach:** Track every conversion point

Benefits:
1. **Find the bottleneck** — Which stage is underperforming?
2. **Optimize precisely** — Fix the right thing
3. **Predict accurately** — Know revenue per input
4. **Scale confidently** — Math works at any volume

---

## Data Collection Requirements

### From GHL/CRM
- Leads by source
- Call logs (attempts, answers, duration)
- Appointment bookings
- Show/no-show status
- Deal stage changes

### From Stripe
- Payment amounts
- Product purchased
- Upsells/downsells

### From Ads Platform
- Spend
- Clicks
- CPL

---

*If you can't measure it, you can't improve it.*
