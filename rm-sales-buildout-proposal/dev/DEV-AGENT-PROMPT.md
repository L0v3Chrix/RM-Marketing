# Developer Agent Prompt: GHL Mastery Sales Buildout Proposal

## Project Overview

Build a custom proposal microsite for an 11-month sales consulting engagement with GHL Mastery (RM Marketing).

**Investment Structure:**
- Phase 1 (Pressure Test): Progressive Performance (30 days)
  - $4K deposit
  - $4K milestone at $20K closed revenue
  - 33% commission on revenue over $20K
- Phase 2 (Buildout): $36,000 ($12K × 3 months) + commission
- Ongoing Support: TBD (7 months)
- Total Year 1: ~$58,000-70,000 + commission

This is a personalized, premium pitch — not a generic landing page.

**Critical:** The site must match GHL Mastery's existing brand aesthetic. Dark backgrounds, gold/blue accents, tech-forward feel. Adam McInnes should look at this and immediately feel "this was made for us."

**Meta-Messaging:** We're doing for their sales system what they do for others' GHL systems. This proposal alone is worth $500—it tells them exactly what's wrong and how to fix it, even if they don't work with us.

---

## The Strategic Frame (READ THIS FIRST)

This proposal is NOT about fixing a broken business. It's about **unlocking a constrained one**.

**Key reframes the site must communicate:**

1. **"You're not broken, you're bottlenecked"**
   - 19.3% lead-to-appointment rate (above avg for warm paid leads)
   - $68 cost per qualified show (competitive: $100-300 typical)
   - 3-5x true LTV:CAC ratio (healthy threshold: 3x)
   - The problem isn't the funnel — it's that there's no team to work it

2. **"We start selling Day 1"**
   - This is NOT a "build for 90 days then turn it on" engagement
   - Week 1: Working current leads, reactivating database, closing deals
   - Systems get built WHILE sales happen

3. **"Adam gets his life back"**
   - Adam is stuck in the weeds
   - He should be creating content and doing high-ticket calls
   - We take everything else off his plate

4. **"The math works at scale"**
   - Current ~$35K/month
   - Target: $100K/month
   - $65K/month increase = $780K/year additional revenue
   - $60-80K investment = 10-13x ROI in year one

---

## Brand Reference & Assets

### Live References (Study These)
- **Main Sales Page:** joinghlmastery.com/vip/membership
- **YouTube Channel:** youtube.com/@adammcinnes
- **Style Reference:** Dark, premium, tech-forward
- **EXAMPLE SITE SCREENSHOTS:** See `/mnt/rm-marketing/Exsample Site frame work/` — Screenshots from contentcreator.ai showing the visual framework and layout style we want to emulate. Study these for section layouts, card designs, and overall composition.

### Brand Colors (Extract from their site)
```css
/* Primary */
--bg-primary: #0A1628;      /* Deep navy */
--bg-secondary: #0F172A;    /* Midnight blue */
--bg-card: #1E293B;         /* Card surfaces */

/* Accents */
--accent-gold: #D4A574;     /* CTAs, highlights */
--accent-blue: #3B82F6;     /* GHL logo blue, links */
--accent-green: #22C55E;    /* GHL logo green, success */
--accent-yellow: #FBBF24;   /* GHL logo gold */

/* Text */
--text-primary: #FFFFFF;
--text-secondary: #E2E8F0;
--text-muted: #94A3B8;
```

### GHL Logo
The GoHighLevel logo uses three colors:
- **G:** Gold/yellow (#FBBF24)
- **H:** Blue (#3B82F6)
- **L:** Green (#22C55E)

### Photography Available
From their existing materials (screenshots provided):
- Adam McInnes headshots (multiple angles)
- Brendan headshots
- Dashboard/analytics screenshots showing growth
- Zoom community call screenshots
- "Roadmap to Success" timeline graphic

### Typography
- **Font:** Inter (matches their site)
- **Weights:** 400, 500, 600, 700

### Digital Assets (WEBP Reference Files)
Reference graphics are available in `/mnt/rm-marketing/` as WEBP files:
- `tmp4yh8h7yh.webp`
- `tmpwhaenslk.webp`
- `tmplfjxmo0v.webp`
- `tmpu5n36oop.webp`
- `tmpfuvnp2iw.webp`

**Note:** WEBP files may not be directly usable. Take screenshots of these for reference, then recreate/adapt the visual style for custom graphics.

---

## AGENT ORCHESTRATION: Parallel & Swarming Tasks

### Execution Strategy
This project should be executed using **parallel subagents** for maximum efficiency. Spin up concurrent tasks that don't have dependencies.

### Task Parallelization

**Wave 1 (Parallel - No Dependencies):**
```
┌─────────────────────────────────────────────────────────────────────┐
│  AGENT 1: Quiz Component       │  AGENT 2: Graphics Creation        │
│  ─────────────────────────     │  ──────────────────────────        │
│  • Build Owner's Quiz UI       │  • Create 6-11 custom graphics     │
│  • Implement intent scoring    │  • Dashboard-style visuals         │
│  • Progressive form steps      │  • Funnel waterfall graphics       │
│                                │  • ROI visualization charts        │
├────────────────────────────────┼────────────────────────────────────┤
│  AGENT 3: Calculator           │  AGENT 4: Content Sections         │
│  ─────────────────────────     │  ──────────────────────────        │
│  • Interactive calculator UI   │  • Update Investment section       │
│  • Real-time math updates      │  • Update Process section          │
│  • Scale slider component      │  • Progressive payment display     │
└─────────────────────────────────────────────────────────────────────┘
```

**Wave 2 (After Wave 1 completes):**
```
┌─────────────────────────────────────────────────────────────────────┐
│  AGENT 5: Integration          │  AGENT 6: Polish & Animation       │
│  ─────────────────────────     │  ──────────────────────────        │
│  • Connect quiz to content     │  • Add micro-interactions          │
│  • Dynamic content routing     │  • Counter animations              │
│  • Personalized data flow      │  • Scroll-triggered effects        │
└─────────────────────────────────────────────────────────────────────┘
```

### Subagent Spawning Commands

When using Claude Code, spawn parallel agents like this:

```bash
# Wave 1 - Run simultaneously
claude "Build the Owner's Quiz component per OWNERS-QUIZ-SPEC.md" &
claude "Create custom graphics for the proposal site" &
claude "Build the interactive calculator per INTERACTIVE-CALCULATOR-SPEC.md" &
claude "Update content sections with progressive payment structure" &
wait

# Wave 2 - After Wave 1 completes
claude "Integrate quiz with dynamic content routing" &
claude "Add animations and polish" &
wait
```

### Orchestration Best Practices
1. **Independence first:** Start with tasks that have no dependencies
2. **Swarm on graphics:** Graphics creation is fully parallelizable
3. **Merge carefully:** Integration tasks come last
4. **Test continuously:** Each agent should verify its own output

---

## CUSTOM GRAPHICS CREATION (6-11 Images)

### Required Graphics

Create these custom graphics in dashboard/data visualization style:

| # | Graphic | Purpose | Style |
|---|---------|---------|-------|
| 1 | **Funnel Waterfall** | Show calls → persons → appointments → shows → sales → upsells | Animated SVG, numbers cascade down |
| 2 | **Phase Timeline** | 11-month engagement visual | Horizontal timeline with gates |
| 3 | **Progressive Payment** | $4K → $4K → 33% breakdown | Stacked bar or step diagram |
| 4 | **ROI Comparison** | Investment vs Return bars | Animated growth chart |
| 5 | **Scale Calculator** | Ad spend → Revenue projection | Interactive gauge or slider |
| 6 | **Current vs Target** | $35K → $100K journey | Progress arc or speedometer |
| 7 | **Revenue Per Show** | $600-900 per show math | Data card with breakdown |
| 8 | **Team Structure** | Before/After org chart | Side-by-side comparison |
| 9 | **Intent Score Gauge** | Browsing → Ready to Buy | Colored progress indicator |
| 10 | **Opportunity Cost** | Monthly loss visualization | Declining chart or warning |
| 11 | **Decision Gate** | Phase 1 → Phase 2 visual | Checkpoint/milestone graphic |

### Graphic Style Requirements

```
STYLE: Sales Dashboard Aesthetic
─────────────────────────────────
• Dark backgrounds (#0A1628, #0F172A)
• Accent colors: Gold (#D4A574), Blue (#3B82F6), Green (#22C55E)
• Clean data cards with subtle shadows
• Animated counters and progress bars
• NO stock photos
• Data IS the visual
• Think: Stripe, Databox, HubSpot dashboards
```

### Implementation Options

**Option A: React/SVG Components**
Create as animated React components with Framer Motion

**Option B: Static Images**
Generate using:
- Figma exports
- AI image generation (reference WEBP files for style)
- Canvas/D3.js renders saved as PNG

**Option C: Hybrid**
Key graphics as React components, supporting visuals as optimized images

### Reference the WEBP Assets
Before creating graphics, screenshot and study the WEBP files in `/mnt/rm-marketing/` to understand the visual language and adapt it.

---

## CRITICAL DESIGN REQUIREMENTS

### 1. Match Example Site EXACTLY
The layout in `/mnt/rm-marketing/Exsample Site frame work/` is the template. Match:
- Section layouts
- Card designs
- Spacing and composition
- Visual hierarchy

**Do not freestyle the design. Replicate the framework.**

### 2. Interactive, Not Static
This is NOT a static brochure. It's an interactive experience:
- Owner's Quiz at the very top (before any content)
- Live calculators that update in real-time
- Sliders and inputs they can adjust
- Personalized results based on their data

### 3. Sales Dashboard Aesthetic
Think Stripe, Databox, HubSpot dashboards:
- Clean data cards
- Progress bars and gauges
- Animated number counters
- Waterfall funnels
- Real-time calculations

**No stock photos. No generic marketing imagery. Data IS the visual.**

---

## SECTION 0: OWNER'S QUIZ (First Thing They See)

**CRITICAL:** Before any static content, present an interactive quiz.

**See full spec:** `/dev/OWNERS-QUIZ-SPEC.md`

### Flow:
1. Quiz starts immediately (no hero first)
2. Progressive steps (5 sections)
3. Collects their actual numbers
4. Shows personalized dashboard with their data
5. Rest of proposal loads below with their numbers pre-filled

### Quiz Steps:
1. Current State (revenue, ad spend, CPL)
2. Funnel Metrics (answer rate, booking rate, show rate, close rate, upsell rate)
3. Offer Economics (avg sale, downsell, upsell prices)
4. Goal (target revenue, timeline)
5. Intent Qualifier (situation, bottleneck, urgency)

### Output:
- Personalized funnel waterfall
- Gap analysis (current vs target)
- Path to their goal (calculated)
- Revenue Per Show metric

---

## GRANULAR METRICS FUNNEL

**See full spec:** `/dev/GRANULAR-METRICS-SPEC.md`

Track every conversion point:

```
CALLS MADE
    ↓ [30%] Answer Rate
PERSONS REACHED
    ↓ [40%] Booking Rate
APPOINTMENTS BOOKED
    ↓ [59%] Show Rate
SHOWS
    ↓ [30%] Close Rate
SALES
    ↓ [20%] Upsell Rate
UPSELLS
```

Display this waterfall visualization throughout. It's the core analytical framework.

Key metrics to highlight:
- **Revenue Per Show:** ~$600-900
- **Revenue Per Call:** ~$46
- **Revenue Per Lead:** ~$45
- **Cost Per Show:** ~$53

---

## Site Structure

Build a single-page, scroll-based proposal with these sections:

### 1. HERO
**Purpose:** Hook with the big idea

```
Headline: "You Built a Million-Dollar Machine. Let's Turn It On."
Subhead: "A 90-day engagement to install a complete sales department — while generating revenue from Day 1."

Metrics Row (4 animated cards):
- 19.3% | Lead-to-Appointment | (Warm lead avg: 15-20%) — with comparison bar
- $68 | Cost Per Show | (Coaching avg: $100-300) — with savings callout
- 3-5x | LTV:CAC Ratio | (Healthy: 3x+) — with gauge/meter visual
- 46 | Appointments in 90 Days | (22 showed) — with funnel mini-graphic

CTA: "See the Full Plan"
```

**Visual:** NO hero image or video. The metrics ARE the hero. Clean dark background with glowing metric cards. Numbers count up on scroll. Each card shows a mini-comparison (your number vs industry).

### 2. THE SITUATION (Not "Problems")
**Purpose:** Show we understand their position

Frame as: "Where you are" — not "what's wrong"

- Adam is wearing too many hats
- No one working the leads consistently
- Database sitting dormant
- Strong foundation, no team to scale it
- Every hour Adam spends on sales is an hour not spent on content

**Tone:** Empathetic, not critical. This is recognition, not diagnosis.

### 3. THE OPPORTUNITY
**Purpose:** Show the math visually

**Visual Treatment:** This section should be HEAVY on data graphics. Build these:

1. **Side-by-side comparison cards:**
   - Left: "NOW" (dark, muted) — Right: "WITH SALES TEAM" (gold accent, glowing)

2. **Revenue growth chart:**
   - Horizontal bar or area chart
   - Shows $36K current → $100K target
   - Animated fill on scroll

3. **The $780K Gap callout:**
   - Large typography: "$780,000/year"
   - Subtext: "The cost of staying constrained"
   - Visual: Gap between two lines/bars

4. **Funnel visualization:**
   - 238 leads → 46 appointments → 22 shows → X closes
   - Show where revenue leaks (failed payments $25K)

```
Current State vs. Scaled State

NOW:
- ~$36K/month revenue
- 46 appointments in 90 days (22 showed)
- 1 person working leads (Adam, occasionally)
- Database dormant

WITH SALES TEAM:
- 150+ appointments/month capacity
- Database reactivation campaign
- Failed payments recovered ($25K leaking)
- 2-3 closers working full pipeline
- $100K+/month realistic target

THE GAP:
$65K/month × 12 = $780K/year
That's the opportunity cost of staying constrained.
```

5. **Path to $100K Scale Table:**

Build an interactive or animated table showing the scale path:

| Target | Ad Spend | Leads | Apts | Shows | Sales | Closers |
|--------|----------|-------|------|-------|-------|---------|
| $36K (now) | $500 | 79 | 15 | 9 | 3 | 0 |
| $50K | $2,100 | 333 | 64 | 38 | 11 | 1 |
| $75K | $4,200 | 667 | 129 | 76 | 23 | 1-2 |
| **$100K** | **$6,100** | **968** | **187** | **110** | **33** | **2** |

**Key callout:** "$100K/month = only $6K in ad spend + dedicated closer"

**Visual:** Slider or stepper showing "What happens when you increase ad spend"

### 4. WHAT WE DO
**Purpose:** Clear deliverables

Three categories:

**Sell (Immediate)**
- Work existing leads Day 1
- Launch database reactivation campaign
- Handle inbound appointments
- Close deals while building systems

**Build (Ongoing)**
- Hiring system for setters/closers
- Sales scripts and training
- CRM workflows and automation
- Show rate optimization sequences
- Failed payment recovery system

**Install (Permanent)**
- Trained sales team (2-4 people)
- Manager/team lead structure
- Performance dashboards
- SOPs and documentation
- Adam only touches high-ticket calls

### 5. THE PROCESS
**Purpose:** Show the phased approach — prove first, then build

**Visual:** Horizontal timeline with two major phases and decision gate

```
PHASE 1: THE PROOF (Days 1-30)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Investment: Progressive ($4K + $4K @ $20K + 33% over)
- Chrix + Sara selling full time
- Database reactivation campaign
- Work existing leads
- Target: $36K closed revenue
- Document everything as we go
         │
         ▼
    [DECISION GATE]
    How much did we close?
    $20K = milestone unlocked
    $36K = Phase 2 is obvious
         │
         ▼
PHASE 2: THE BUILDOUT (Days 31-120)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Investment: $36K ($12K × 3 months)
- Hire setters + closers
- Full training program
- Systems + automation
- SOPs + documentation
- Handoff: Adam on content only
```

**Visual treatment:** Timeline with clear gate between phases. Phase 1 highlighted as "current focus."

### 6. THE TEAM
**Purpose:** Credibility

**Chrix (Lead)**
- 20 years sales experience
- Former [relevant background]
- Hands-on operator, not just advisor

**Sara (Sales Support)**
- [Bio needed]
- Working alongside Chrix during pressure test
- Handles follow-up, scheduling, pipeline management

**Photo treatment:** Dark background, professional, matches their style

### 7. THE INVESTMENT
**Purpose:** Present the progressive approach — pay for performance, not promises

**Visual Treatment:**

1. **Three-phase timeline:**
   - Phase 1 card (highlighted): Progressive performance (Feb)
   - Arrow/gate: "Mutual opt-in"
   - Phase 2 card: $36K buildout (Mar-May)
   - Phase 3: Ongoing support (Jun-Dec)

2. **Phase 1 breakdown:**
   - $4K deposit → $4K at $20K closed → 33% of revenue over $20K

3. **ROI visualization:**
   - Investment bar: ~$50K main engagement
   - Return bar: $230-380K Year 1 (4-6x)
   - Opportunity cost: $15-40K/month lost without action

```
PHASE 1: PROGRESSIVE PERFORMANCE
┌─────────────────────────────────────┐
│ Deposit: $4,000 (to start)          │
│ Milestone: $4,000 (at $20K closed)  │
│ Bonus: 33% of revenue over $20K     │
│                                     │
│ Example @ $36K: $13,280 total       │
│ (You keep $22,720)                  │
│                                     │
│ What you get:                       │
│ • Chrix + Sara selling for 30 days  │
│ • Database reactivation             │
│ • We only earn more when you do     │
└─────────────────────────────────────┘
              ↓
        [If successful]
              ↓
PHASE 2: THE BUILDOUT — $36,000
┌─────────────────────────────────────┐
│ Month 1 (March): $12,000            │
│ Month 2 (April): $12,000            │
│ Month 3 (May): $12,000              │
│ + Commission (30-45 days in)        │
│                                     │
│ What you get:                       │
│ • Full sales team installed         │
│ • Training, systems, SOPs           │
│ • Adam doing only VIP calls         │
└─────────────────────────────────────┘
              ↓
ONGOING SUPPORT (Jun-Dec)
┌─────────────────────────────────────┐
│ Monthly strategy calls              │
│ Team coaching + optimization        │
│ Pricing TBD ($2-3K/month range)     │
└─────────────────────────────────────┘

MAIN ENGAGEMENT: $44,000
FULL YEAR (Est.): $58,000-65,000
ROI: 4-6x Year 1

PRESSURE TEST AD SPEND:
├─ Minimum: $1,500
└─ Recommended: $2,000 for 30-day trial

Why $2,000? Need same leads in 30 days as 90 days currently:
├─ 243 leads in 90 days → Need 243+ in 30 days
├─ Buffer for conversion drop
└─ $36K quota is priority #1
```

**Mutual Benefit Callout:** Include section about how this is mutually beneficial — they help launch Raise the Vibe, we help them scale. Testimonial and case study for Chrix, success story for Adam.

**Meta-Positioning Callout:** "We're doing for your sales system what you do for others' GHL systems." This proposal is valued at $500 — it tells you exactly how to fix the problem, even if you don't work with us.

**Note on Ad Spend:** For the 30-day pressure test, recommend $2,500-3,500 in ad spend. At $6.30 CPL and 19.3% booking rate, this generates ~50-70 appointments — enough to prove the model.

### 8. FAQ
**Purpose:** Handle objections

Key questions:
- "What if we don't hit $80K/month?"
- "Who owns the systems you build?"
- "How much of Adam's time does this require?"
- "What happens after 90 days?"
- "What's included vs. not included?"

### 9. FINAL CTA
**Purpose:** Drive action with low-risk framing

```
Headline: "Ready to Prove It Works?"
Subhead: "$4K to find out. 30 days to show results."

CTA Button: "Schedule a Call" → Calendar link

Below: chrix@raisethevibe.com
```

**Tone:** Confident but not pushy. The trial structure removes pressure.

---

## Technical Stack

### Recommended
- **Framework:** Next.js 14 (App Router) or Astro
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle)
- **Deployment:** Vercel

### Alternative (Simpler)
- **Static HTML/CSS/JS**
- **Tailwind via CDN**
- **Deploy anywhere**

### If Client Prefers Native
- **GHL Landing Page Builder**
- **Custom CSS for brand match**

---

## Component Checklist

Build these reusable components:

```
Layout:
- [ ] Container (max-width wrapper)
- [ ] Section (vertical padding, background variants)
- [ ] Grid (responsive columns)

Typography:
- [ ] Heading (H1-H4, styled per design system)
- [ ] Body (variants: large, regular, small)
- [ ] Caption

Data Display:
- [ ] MetricCard (large number + label + context)
- [ ] ComparisonTable (current vs. future)
- [ ] Timeline (horizontal desktop, vertical mobile)
- [ ] PriceTable (structured pricing display)

Interactive:
- [ ] Button (primary gold, secondary outline, ghost)
- [ ] Accordion (FAQ)
- [ ] ScrollReveal (fade-in on scroll)

Media:
- [ ] TeamMember (photo + bio)
- [ ] IconFeature (icon + title + description)
```

---

## Visual Content: Data Graphics Over Stock Media

**IMPORTANT:** Replace typical hero images, stock photos, and promotional videos with **dashboard-style metrics and data visualizations** that illustrate the math.

### What to Build Instead of Images/Videos

**Replace hero background video/image with:**
- Animated metric cards showing the key numbers
- Clean data visualization (not stock photos of "success")
- The numbers ARE the visual appeal

**Replace testimonial videos with:**
- Revenue growth chart (Current $36K → Target $100K)
- Funnel visualization showing conversion rates
- Before/after comparison graphics

**Replace product screenshots with:**
- Dashboard mockups showing:
  - 19.3% lead-to-appointment rate (with industry comparison bar)
  - Cost per lead comparison ($6.30 vs $50-85 industry)
  - LTV:CAC ratio visualization (15.8x vs 3x healthy)
  - Close rate analysis breakdown
  - Revenue by channel pie chart

### Data Visualizations to Create

| Section | Visualization |
|---------|---------------|
| Hero | 4 metric cards with proper industry comparison |
| Opportunity | Side-by-side: Current State vs Scaled State |
| Opportunity | Gap chart: $36K → $100K with opportunity cost callout |
| Investment | ROI calculator visual (4-6x Year 1 return) |
| Close Rate | Funnel showing 238 leads → 46 appointments → 22 shows → sales |
| Revenue | Breakdown chart: VIP $20.5K, High-ticket $16K, Mid $2.5K, Course $3.5K |
| Mutual Benefit | Two-column: What Adam/Brendan get vs What Chrix/Sara get |

### Actual Data for Graphics (Use These Numbers)

**Funnel Metrics (90 Days from Ads):**
- 238 leads generated
- 46 appointments booked (19.3% conversion)
- 22 showed (48% show rate on all booked, 59% excluding cancelled)
- 11 no-shows, 9 cancelled

**New Customer Revenue (90 Days):**
- VIP $5,000+: 4 sales = $20,500
- High-ticket $497-$997: 25 sales = $16,484
- Mid-ticket $297: 8 sales = $2,535
- AOF Course $197: 17 sales = $3,555
- **Total: 54 new customers = $43,074**

**Industry Comparison Bars (Properly Benchmarked):**
- Lead-to-Appointment: 19.3% vs 15-20% warm lead avg (above average)
- Cost Per Show: $68 vs $100-300 coaching industry (competitive)
- LTV:CAC: 3-5x (full costs) vs 3x healthy threshold (healthy)

**Revenue Leak Callout:**
- Failed payments in 90 days: $25,870
- Recovery opportunity: $16,000-$19,000 (65-75% recovery rate)

### Chart/Graphic Style

```css
/* Match the dark theme */
--chart-bg: #0F172A;
--chart-grid: #1E293B;
--chart-accent-1: #D4A574;  /* Gold for primary data */
--chart-accent-2: #3B82F6;  /* Blue for comparison */
--chart-accent-3: #22C55E;  /* Green for positive/growth */
--chart-text: #E2E8F0;
```

### Libraries Recommended
- **Recharts** or **Chart.js** for React
- **ApexCharts** for vanilla JS
- Keep animations subtle (number count-ups, bar grows)

### The Goal

When Adam looks at this site, he should see HIS data visualized beautifully — not generic business imagery. The data tells the story. The graphics prove the math.

**Think:** Stripe dashboard aesthetic meets consulting pitch deck.

---

## Interactive Scale Calculator

**CRITICAL SECTION:** Build an interactive calculator that lets visitors adjust inputs and see how the math changes in real-time.

**See full spec:** `/dev/INTERACTIVE-CALCULATOR-SPEC.md`

### Key Features:
- Pre-filled with our data (editable)
- Inputs: Ad spend, CPL, booking rate, show rate, close rate, avg sale, downsell
- Outputs: Leads, appointments, shows, sales, revenue, **Revenue Per Show**
- "Path to Target" calculator for any revenue goal
- Scale slider showing what happens as ad spend increases

### Revenue Per Show — THE Key Metric

Display this prominently throughout the proposal:

```
REVENUE PER SHOW: $600-900
Every show = $600-900 in expected revenue
Miss a show = lose $600-900
Add capacity = capture more
```

This metric ties everything together:
- Current state: ~$667/show (based on current performance)
- At scale: ~$900/show (with better close rate + avg sale)
- Phase 1 target: $36K ÷ 60 shows = $600/show

---

## Animation Guidelines

Keep it subtle. This is a premium proposal, not a flashy marketing site.

**Do:**
- Fade sections in on scroll
- Animate metrics counting up to final number
- Subtle hover states on buttons and cards
- Smooth accordion expand/collapse

**Don't:**
- Parallax scrolling
- Complex page transitions
- Auto-playing anything
- Excessive motion

**Respect:** `prefers-reduced-motion`

---

## Performance Requirements

- Page load: <3s on 3G
- Lighthouse score: 90+ all categories
- Images: WebP, lazy loaded
- Fonts: Subset, preloaded

---

## Content Sources

All copy and data in this repository:

| Content | Location |
|---------|----------|
| Project overview | `/docs/00-PROJECT-BRIEF.md` |
| Strategy | `/docs/01-MASTER-STRATEGY.md` |
| Client data | `/docs/02-CLIENT-ANALYSIS.md` |
| Deliverables | `/docs/04-DELIVERABLES.md` |
| Timeline | `/docs/05-TIMELINE.md` |
| Pricing | `/docs/06-PRICING-STRUCTURE.md` |
| Team bios | `/docs/08-TEAM-BIOS.md` |
| Section copy | `/copy/*.md` |
| Design specs | `/design/DESIGN-SYSTEM.md` |
| **Visual content spec** | **`/dev/VISUAL-CONTENT-SPEC.md`** ← READ THIS |
| **Path to $100K** | **`/docs/PATH-TO-100K-SCALE.md`** ← SCALE MODEL |
| **Interactive Calculator** | **`/dev/INTERACTIVE-CALCULATOR-SPEC.md`** ← BUILD THIS |
| **Owner's Quiz** | **`/dev/OWNERS-QUIZ-SPEC.md`** ← FIRST THING ON PAGE |
| **Granular Metrics** | **`/dev/GRANULAR-METRICS-SPEC.md`** ← FUNNEL TRACKING |
| Raw data | `/data/` |
| Data analysis | `/data/DATA-ANALYSIS-SUMMARY.md` |
| Anomalies & gaps | `/data/ANOMALIES-AND-GAPS.md` |

**IMPORTANT:** Read `/dev/VISUAL-CONTENT-SPEC.md` for detailed specifications on every chart, graph, and data visualization needed for each section.

**IMPORTANT:** Read `/docs/PATH-TO-100K-SCALE.md` for the scale model showing exactly how to reach $100K/month with ad spend, leads, appointments, and shows projections.

---

## Pre-Build Checklist

Before starting:

- [ ] Review joinghlmastery.com/vip/membership for style reference
- [ ] Download/screenshot brand assets from their site
- [ ] Confirm hosting approach with Chrix
- [ ] Get headshots for Chrix and Sara
- [ ] Confirm calendar link for CTA

---

## Delivery

### Files to Deliver
- Source code (GitHub repo)
- Deployed preview URL
- Asset files (if using their images)

### Handoff Notes
- Document any assumptions made
- List any assets still needed
- Provide brief instructions for content updates

---

## Questions?

**Contact:** Chrix
**Email:** chrix@raisethevibe.com

---

## Key Reminders

1. **Match their brand.** Dark, premium, gold accents.
2. **Frame positively.** They're constrained, not broken.
3. **Show the math VISUALLY.** Build charts and dashboards, not stock images.
4. **No hero videos or stock photos.** Metrics and data graphics ARE the visuals.
5. **Mobile first.** They'll review on phones.
6. **Clear CTA.** One primary action: schedule a call.
7. **Think Stripe dashboard meets pitch deck.** Clean, data-rich, premium.
