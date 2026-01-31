# Interactive Scale Calculator Specification

## Overview

Build an interactive dashboard section where visitors can adjust inputs and see how the math changes in real-time. Pre-filled with our assumed data, but editable if they have different numbers.

---

## The Calculator Section

### Section Header
**"See Your Numbers"** or **"The Math—With Your Data"**

Subhead: *"We've pre-filled this with what we found. Change any number to see how your path to scale shifts."*

---

## Input Fields (Editable)

### Current State Inputs

| Field | Default Value | Format | Notes |
|-------|---------------|--------|-------|
| Current Ad Spend | $500 | $/month | Slider or input |
| Cost Per Lead | $6.00 | $ | Auto-calculates if they enter leads |
| Lead-to-Appointment Rate | 19.3% | % | Slider 5-40% |
| Show Rate | 59% | % | Slider 40-90% |
| Close Rate | 30% | % | Slider 15-50% |
| Average Sale Value | $2,000 | $ | Input field |
| Downsell Value | $197 | $ | For blended calculation |
| Downsell Rate | 20% | % | Of non-closes who buy downsell |

### Target Input

| Field | Default Value | Format |
|-------|---------------|--------|
| Monthly Revenue Target | $100,000 | $ |

---

## Calculated Outputs (Live Update)

### Current Performance (Based on Inputs)

| Metric | Calculation | Display |
|--------|-------------|---------|
| Leads/Month | Ad Spend ÷ CPL | Large number |
| Appointments/Month | Leads × Booking Rate | Large number |
| Shows/Month | Appointments × Show Rate | Large number |
| Sales/Month | Shows × Close Rate | Large number |
| **Revenue/Month** | Sales × Avg Sale + (Non-closes × Downsell Rate × $197) | **HIGHLIGHT** |
| **Revenue Per Show** | Revenue ÷ Shows | **KEY METRIC** |

### Path to Target

| Metric | Calculation | Display |
|--------|-------------|---------|
| Sales Needed | Target ÷ Avg Sale | Number |
| Shows Needed | Sales Needed ÷ Close Rate | Number |
| Appointments Needed | Shows Needed ÷ Show Rate | Number |
| Leads Needed | Appointments ÷ Booking Rate | Number |
| **Ad Spend Required** | Leads Needed × CPL | **HIGHLIGHT** |
| Calls Per Day | Shows Needed ÷ 20 working days | Number |
| Closers Needed | Calls Per Day ÷ 6 | Number (round up) |

---

## Visual Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│                     SEE YOUR NUMBERS                                │
│   Pre-filled with what we found. Change any number to recalculate. │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  YOUR INPUTS                          YOUR CURRENT PERFORMANCE      │
│  ────────────                         ────────────────────────      │
│                                                                     │
│  Ad Spend/Mo    [====●====] $500      Leads/Month        83         │
│  Cost Per Lead  [$6.00    ]           Appointments       16         │
│  Booking Rate   [====●====] 19.3%     Shows              9          │
│  Show Rate      [====●====] 59%       Sales              3          │
│  Close Rate     [====●====] 30%       ───────────────────────       │
│  Avg Sale       [$2,000   ]           MONTHLY REVENUE    $6,000     │
│  Downsell       [$197     ]           REVENUE/SHOW       $667       │
│                                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  YOUR TARGET: [$100,000] /month                                     │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    PATH TO $100K                            │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │                                                             │   │
│  │  Ad Spend Required     $6,100/mo                            │   │
│  │  Leads Needed          1,017/mo                             │   │
│  │  Appointments Needed   196/mo                               │   │
│  │  Shows Needed          116/mo                               │   │
│  │  Sales Needed          35/mo                                │   │
│  │  ─────────────────────────────────────                      │   │
│  │  Calls Per Day         5.8                                  │   │
│  │  Closers Needed        1                                    │   │
│  │                                                             │   │
│  │  REVENUE PER SHOW      $862                                 │   │
│  │                                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  [The constraint isn't the funnel. It's capacity.]                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Scale Slider (Optional Enhancement)

Add a "What If" slider that shows what happens as ad spend increases:

```
AD SPEND SLIDER
$500 ────────●──────────────────────────────────── $10,000

At $3,000/month:
├── 500 leads → 97 appointments → 57 shows → 17 sales
├── Revenue: $34,000/month
└── Revenue Per Show: $596
```

---

## Key Formulas

```javascript
// Current State
leadsPerMonth = adSpend / costPerLead
appointmentsPerMonth = leadsPerMonth * bookingRate
showsPerMonth = appointmentsPerMonth * showRate
salesPerMonth = showsPerMonth * closeRate
downsellSales = (showsPerMonth - salesPerMonth) * downsellRate
revenuePerMonth = (salesPerMonth * avgSaleValue) + (downsellSales * downsellValue)
revenuePerShow = revenuePerMonth / showsPerMonth

// Path to Target
salesNeeded = targetRevenue / avgSaleValue
showsNeeded = salesNeeded / closeRate
appointmentsNeeded = showsNeeded / showRate
leadsNeeded = appointmentsNeeded / bookingRate
adSpendRequired = leadsNeeded * costPerLead
callsPerDay = showsNeeded / 20  // 20 working days
closersNeeded = Math.ceil(callsPerDay / 6)  // 6 calls per closer per day
```

---

## Preset Scenarios (Quick Buttons)

| Scenario | Ad Spend | Close Rate | Avg Sale | What It Shows |
|----------|----------|------------|----------|---------------|
| Current | $500 | 30% | $2,000 | Where they are now |
| Phase 1 Target | $3,000 | 35% | $2,500 | $36K goal |
| Scale Mode | $6,000 | 35% | $3,000 | $100K path |
| Aggressive | $10,000 | 40% | $3,500 | What's possible |

---

## Mobile Layout

Stack vertically:
1. Inputs (collapsible)
2. Current Performance
3. Target Input
4. Path to Target
5. Scale Slider

---

## Design Notes

- **Dark theme** matching the rest of the site
- **Gold accent** on key metrics (Revenue, Revenue Per Show, Ad Spend Required)
- **Smooth animations** when numbers update
- **Instant calculation** — no submit button needed
- **Tooltip hints** explaining each metric
- **Lock icon** on metrics that auto-calculate (they can unlock to override)

---

## Revenue Per Show — The Key Metric

This should be prominently displayed throughout:

```
┌─────────────────────────────────┐
│     REVENUE PER SHOW            │
│                                 │
│         $862                    │
│                                 │
│  Every show is worth $862       │
│  in expected revenue.           │
│                                 │
│  Miss a show = lose $862        │
│  Add a closer = capture more    │
└─────────────────────────────────┘
```

---

## Integration with Proposal

The calculator appears after the "Opportunity" section, before "Investment." It lets them:

1. **Validate our assumptions** — Do our numbers match their reality?
2. **See the scale path** — What does it take to hit $100K?
3. **Understand Revenue Per Show** — The value of every appointment
4. **Self-qualify** — If the math works, the investment makes sense

---

## Phase 1 Target Note

When showing Phase 1, highlight:

```
PHASE 1 TARGET: $36,000 in 30 days

At your current metrics, this requires:
├── ~60 shows in 30 days (2/day)
├── ~18 sales at $2,000 avg
├── Revenue Per Show: $600
└── Ad Spend: ~$3,000 for the month
```

---

## Technical Implementation

**React Component Structure:**
```
<ScaleCalculator>
  <InputPanel>
    <SliderInput name="adSpend" />
    <NumberInput name="costPerLead" />
    <SliderInput name="bookingRate" />
    <SliderInput name="showRate" />
    <SliderInput name="closeRate" />
    <NumberInput name="avgSale" />
  </InputPanel>

  <OutputPanel>
    <CurrentPerformance />
    <RevenuePerShow highlight />
  </OutputPanel>

  <TargetPanel>
    <NumberInput name="targetRevenue" />
    <PathToTarget />
    <ClosersNeeded />
  </OutputPanel>

  <ScaleSlider />
  <PresetButtons />
</ScaleCalculator>
```

**State Management:**
- All inputs in React state
- Outputs calculated via useMemo
- Debounce slider inputs for performance

**Libraries:**
- Recharts for any visualizations
- Framer Motion for number transitions
- React Hook Form or simple useState

---

## Default Values (Pre-filled)

Based on our analysis:

```javascript
const defaults = {
  adSpend: 500,
  costPerLead: 6.00,
  bookingRate: 0.193,  // 19.3%
  showRate: 0.59,      // 59%
  closeRate: 0.30,     // 30% (assumed)
  avgSaleValue: 2000,
  downsellValue: 197,
  downsellRate: 0.20,  // 20% of non-closes
  targetRevenue: 100000
}
```

---

*This calculator is the "prove it to yourself" moment in the proposal.*
