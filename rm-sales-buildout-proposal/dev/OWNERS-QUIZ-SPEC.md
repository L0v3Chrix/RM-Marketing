# Owner's Quiz / Intent-Based Progressive Form

## Overview

At the very top of the site (before any static content), present an interactive, progressive quiz that:
1. Engages the visitor immediately
2. Collects their actual data (replaces our assumptions)
3. Personalizes the rest of the proposal based on their answers
4. Pre-qualifies their intent level
5. Routes to personalized experience based on detected intent

---

## Intent Detection Model

### Signal Categories

**Explicit Signals (Direct from Quiz Answers)**
| Signal | Data Point | Weight |
|--------|-----------|--------|
| Revenue level | Monthly revenue input | High |
| Timeline urgency | "How soon?" answer | Critical |
| Bottleneck admission | "Biggest problem?" | High |
| Team status | "Who handles sales?" | Medium |
| Ad activity | "Running ads?" | Medium |

**Behavioral Signals (During Quiz)**
| Signal | Detection | Weight |
|--------|-----------|--------|
| Completion speed | Fast = urgent, Slow = researching | Medium |
| Slider adjustments | Multiple changes = engaged | Low |
| Step revisits | Going back = evaluating seriously | Medium |
| Time on results | Long = considering action | High |

**Contextual Signals (External)**
| Signal | Detection | Weight |
|--------|-----------|--------|
| Traffic source | Direct = warm, Search = cold | High |
| Device type | Desktop = serious, Mobile = browsing | Low |
| Time of visit | Business hours = active search | Low |
| Return visitor | Multiple visits = high intent | Critical |

### Intent Classification

Based on combined signals, classify into intent stages:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    INTENT CLASSIFICATION MODEL                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  BROWSING (Score 0-15)                                               │
│  └── Just looking, no urgency, low engagement                        │
│      → Show: Educational content, case study                         │
│                                                                      │
│  LEARNING (Score 16-30)                                              │
│  └── Interested but researching, comparing options                   │
│      → Show: Detailed process, methodology proof                     │
│                                                                      │
│  EVALUATING (Score 31-50)                                            │
│  └── Serious consideration, weighing decision                        │
│      → Show: ROI calculator focus, testimonials                      │
│                                                                      │
│  READY TO BUY (Score 51-75)                                          │
│  └── High urgency, clear problem, wants solution                     │
│      → Show: Direct CTA, pricing prominent, fast path                │
│                                                                      │
│  URGENT/CRISIS (Score 76+)                                           │
│  └── Immediate need, pain is acute                                   │
│      → Show: Immediate booking option, phone number                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Form Structure: Progressive Steps

### Step 1: Current State
**Header:** "Let's see where you are"

| Question | Input Type | Options/Format |
|----------|------------|----------------|
| What's your current monthly revenue? | Slider or input | $0 - $500K |
| How much are you spending on ads? | Slider | $0 - $20K/month |
| What's your cost per lead? | Input | $ amount |

### Step 2: Funnel Metrics
**Header:** "Your funnel performance"

| Question | Input Type | Default |
|----------|------------|---------|
| Out of 100 calls, how many pick up? | Slider % | 30% |
| Of those, how many book an appointment? | Slider % | 40% |
| Of booked appointments, how many show? | Slider % | 59% |
| Of shows, how many buy? | Slider % | 30% |
| Of buyers, how many take an upsell? | Slider % | 20% |

### Step 3: Revenue Per Sale
**Header:** "Your offer economics"

| Question | Input Type | Default |
|----------|------------|---------|
| Average main offer price | Input | $2,000 |
| Downsell/OTO price | Input | $197 |
| Upsell price (if any) | Input | $500 |

### Step 4: Your Goal
**Header:** "Where do you want to be?"

| Question | Input Type | Options |
|----------|------------|---------|
| Monthly revenue target | Slider | $50K - $500K |
| Timeline to get there | Select | 30 days / 60 days / 90 days / 6 months |

### Step 5: Intent Qualifier
**Header:** "What's your situation?"

| Question | Options |
|----------|---------|
| Are you currently running ads? | Yes, consistently / Sometimes / No |
| Do you have someone handling sales? | Yes, full team / Just me / No one |
| What's your biggest bottleneck? | Not enough leads / Leads don't convert / No time for sales / Don't know |
| How soon do you want to solve this? | Immediately / This month / This quarter / Just exploring |

---

## Output: Personalized Dashboard

After completing the quiz, show a personalized results page:

### Your Numbers (Based on Quiz Inputs)

```
┌─────────────────────────────────────────────────────────────────────┐
│                     YOUR CURRENT FUNNEL                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   AD SPEND          LEADS           CALLS           ANSWERS         │
│   $[input]    →     [calc]    →     [calc]    →     [calc]         │
│                                                                     │
│   APPOINTMENTS      SHOWS           SALES           UPSELLS         │
│   [calc]      →     [calc]    →     [calc]    →     [calc]         │
│                                                                     │
│   ─────────────────────────────────────────────────────────────     │
│                                                                     │
│   MONTHLY REVENUE: $[calculated]                                    │
│   REVENUE PER SHOW: $[calculated]                                   │
│   REVENUE PER CALL: $[calculated]                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Your Gap

```
┌─────────────────────────────────────────────────────────────────────┐
│                        THE GAP                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   CURRENT              TARGET              GAP                      │
│   $[their revenue]  →  $[their goal]   =  $[difference]/month      │
│                                                                     │
│   To hit your target, you need:                                     │
│   • [X] more leads/month                                            │
│   • [X] more shows/month                                            │
│   • [X] more sales/month                                            │
│   • $[X] more ad spend                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### The Path (Calculated for Their Goal)

```
┌─────────────────────────────────────────────────────────────────────┐
│              PATH TO $[THEIR TARGET]/MONTH                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Ad Spend Required:        $[calc]/month                           │
│   Leads Needed:             [calc]/month                            │
│   Calls Needed:             [calc]/month                            │
│   Appointments Needed:      [calc]/month                            │
│   Shows Needed:             [calc]/month                            │
│   Sales Needed:             [calc]/month                            │
│   ─────────────────────────────                                     │
│   Calls Per Day:            [calc]                                  │
│   Closers Needed:           [calc]                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## The Granular Metrics Funnel

Display this waterfall throughout the proposal:

```
CALLS MADE
    ↓ [X]% Answer Rate
PERSONS REACHED
    ↓ [X]% Booking Rate
APPOINTMENTS BOOKED
    ↓ [X]% Show Rate
SHOWS
    ↓ [X]% Close Rate
SALES
    ↓ [X]% Upsell Rate
UPSELLS/OTO
```

### Default Values (Pre-filled)

```javascript
const defaultMetrics = {
  // Ad metrics
  adSpend: 500,
  costPerLead: 6.00,

  // Call metrics
  callAnswerRate: 0.30,      // 30% of calls answered
  callToBookingRate: 0.40,   // 40% of answers book

  // Appointment metrics
  showRate: 0.59,            // 59% show rate

  // Sales metrics
  closeRate: 0.30,           // 30% close rate
  upsellRate: 0.20,          // 20% take upsell

  // Revenue
  avgMainOffer: 2000,
  downsellPrice: 197,
  upsellPrice: 500
}
```

### Calculated Metrics

```javascript
// Revenue Per Show
revenuePerShow = (closeRate * avgMainOffer) +
                 ((1 - closeRate) * downsellRate * downsellPrice) +
                 (closeRate * upsellRate * upsellPrice)

// Revenue Per Call
revenuePerCall = revenuePerShow * showRate * callToBookingRate * callAnswerRate

// Revenue Per Lead
revenuePerLead = revenuePerCall * (callsMade / leads)

// Calls needed for target
callsNeeded = targetRevenue / revenuePerCall
```

---

## UX Flow

1. **Landing:** Quiz starts immediately (no hero section first)
2. **Progress:** Show step indicator (1 of 5, 2 of 5, etc.)
3. **Animation:** Smooth transitions between steps
4. **Validation:** Light validation, don't block progress
5. **Results:** Animated dashboard build-out
6. **Scroll:** After results, rest of proposal loads below
7. **Sticky:** Key metrics stay visible as they scroll

---

## Mobile Experience

- Full-screen steps
- Large touch targets
- Swipe between steps
- Simplified dashboard view
- Collapsible sections

---

## Data Persistence

- Save answers to localStorage
- Allow editing any answer later
- Recalculate in real-time
- Option to email themselves the results

---

## Intent Scoring Engine

### Explicit Signal Scoring (From Quiz Answers)

| Factor | Points | Rationale |
|--------|--------|-----------|
| Revenue > $100K | +15 | High capacity to invest |
| Revenue $50K-$100K | +10 | Solid foundation |
| Revenue $25K-$50K | +5 | Growth stage |
| Running ads consistently | +15 | Already investing in leads |
| Running ads sometimes | +8 | Understands the game |
| No sales team | +20 | Clear gap we solve |
| Just me handling sales | +15 | Bandwidth problem |
| Bottleneck = "No time for sales" | +20 | Perfect fit |
| Bottleneck = "Leads don't convert" | +15 | Needs our help |
| Bottleneck = "Not enough leads" | +10 | Partial fit |
| Timeline = "Immediately" | +25 | High urgency |
| Timeline = "This month" | +15 | Active buyer |
| Timeline = "This quarter" | +5 | Future buyer |
| Timeline = "Just exploring" | 0 | Low intent |
| Goal > current revenue × 2 | +10 | Ambitious, motivated |

### Behavioral Signal Scoring (During Quiz)

| Behavior | Points | Detection |
|----------|--------|-----------|
| Completes quiz < 2 min | +10 | Decisive, knows their numbers |
| Adjusts sliders 3+ times | +5 | Engaged with data |
| Revisits previous steps | +8 | Seriously evaluating |
| Spends 30+ sec on results | +12 | Considering action |
| Scrolls full results page | +5 | Thorough evaluation |
| Return visitor (cookie) | +20 | High intent signal |

### Contextual Signal Scoring

| Context | Points | Detection |
|---------|--------|-----------|
| Direct traffic | +10 | Intentional visit |
| Referral from known source | +15 | Warm lead |
| Business hours (M-F 9-6) | +5 | Active work mode |
| Desktop device | +5 | Serious research |

### Intent Classification & Routing

```javascript
const classifyIntent = (score) => {
  if (score >= 76) return 'URGENT';
  if (score >= 51) return 'READY_TO_BUY';
  if (score >= 31) return 'EVALUATING';
  if (score >= 16) return 'LEARNING';
  return 'BROWSING';
};

const getExperience = (intent) => {
  switch(intent) {
    case 'URGENT':
      return {
        cta: 'Book Emergency Call',
        showPhone: true,
        pricingPosition: 'prominent',
        contentOrder: ['booking', 'pricing', 'process'],
        urgencyMessaging: true
      };
    case 'READY_TO_BUY':
      return {
        cta: 'Start Phase 1',
        showPhone: false,
        pricingPosition: 'prominent',
        contentOrder: ['pricing', 'process', 'proof'],
        urgencyMessaging: false
      };
    case 'EVALUATING':
      return {
        cta: 'See the Full Plan',
        showPhone: false,
        pricingPosition: 'after-proof',
        contentOrder: ['calculator', 'proof', 'process', 'pricing'],
        urgencyMessaging: false
      };
    case 'LEARNING':
      return {
        cta: 'See How It Works',
        showPhone: false,
        pricingPosition: 'bottom',
        contentOrder: ['methodology', 'proof', 'calculator', 'pricing'],
        urgencyMessaging: false
      };
    case 'BROWSING':
      return {
        cta: 'Learn More',
        showPhone: false,
        pricingPosition: 'hidden-until-scroll',
        contentOrder: ['education', 'methodology', 'proof'],
        urgencyMessaging: false
      };
  }
};
```

### Visual Intent Indicator (Internal Dashboard)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    VISITOR INTENT DASHBOARD                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Current Score: [████████████████░░░░░░░░░░░░░░░░] 52/100           │
│  Classification: READY TO BUY                                        │
│                                                                      │
│  Signal Breakdown:                                                   │
│  ├── Explicit (Quiz):     35 pts                                     │
│  ├── Behavioral:          12 pts                                     │
│  └── Contextual:           5 pts                                     │
│                                                                      │
│  Key Triggers:                                                       │
│  ✓ Revenue > $50K (+10)                                              │
│  ✓ Timeline = "Immediately" (+25)                                    │
│  ✓ Return visitor (+20)                                              │
│  ✗ No bottleneck admission                                           │
│                                                                      │
│  Recommended Experience: PRICING PROMINENT                           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Dynamic Content Routing

Based on intent score, dynamically adjust:

### 1. CTA Button Text
| Intent | Primary CTA | Secondary CTA |
|--------|-------------|---------------|
| Urgent | "Call Now" | "Book Today" |
| Ready to Buy | "Start Phase 1" | "See Pricing" |
| Evaluating | "See the Full Plan" | "Calculate ROI" |
| Learning | "See How It Works" | "Read Case Study" |
| Browsing | "Learn More" | "See Examples" |

### 2. Content Section Order
Reorder page sections based on intent:

**High Intent (Ready/Urgent):**
1. Personalized Results
2. Pricing & Investment
3. Process Overview
4. Book Call CTA

**Medium Intent (Evaluating):**
1. Personalized Results
2. Interactive Calculator
3. Case Study / Proof
4. Process Deep-Dive
5. Pricing
6. CTA

**Low Intent (Learning/Browsing):**
1. Personalized Results
2. Educational Content
3. Methodology
4. Case Study
5. Calculator
6. Process
7. Pricing (soft)

### 3. Messaging Tone
| Intent | Tone | Example |
|--------|------|---------|
| Urgent | Direct, solution-focused | "Let's solve this now." |
| Ready | Confident, next-steps | "Here's exactly what happens next." |
| Evaluating | Proof-heavy, logical | "The math proves it works." |
| Learning | Educational, helpful | "Here's how sales departments actually work." |
| Browsing | Curious, inviting | "Ever wonder why some businesses scale and others don't?" |

---

## Design Notes

- **Dashboard aesthetic:** Think Stripe, Databox, HubSpot dashboards
- **Dark theme:** Match GHL Mastery brand
- **Gold accents:** Highlight key numbers
- **Animated numbers:** Count up as they calculate
- **Charts:** Mini sparklines or progress bars where relevant
- **No stock photos:** Data IS the visual

---

## Integration with Rest of Proposal

After the quiz:
1. Their data populates the interactive calculator
2. Projections use their numbers, not our assumptions
3. ROI calculations personalized to their situation
4. Phase 1 target shows what it means for THEM

---

*The quiz IS the hook. Make it impossible not to complete.*
