# Developer Agent Prompt - RM Marketing Sales Proposal Site

**Last Updated:** February 1, 2026
**Project:** GHL Mastery / RM Marketing Sales Consulting Proposal
**Client:** Adam McInnes & Brendan (GHL Mastery)
**Consultant:** Chrix (Raise the Vibe)

---

## ⚠️ START HERE - Critical Updates

### Names (CORRECT SPELLING)
- **Chrix** - Lead consultant (Raise the Vibe)
- **Sarah** - Sales support (WITH the H)
- **Adam McInnes** - Client (GHL Mastery)
- **Brendan Barth** - Client partner
- **Jonah** - Their customer service person (we train him on dunning)

### Pricing Structure (OPTION B - FINAL)

**Phase 1: The Proof (60 Days)**
| Payment | Amount | Trigger |
|---------|--------|---------|
| Deposit | $5,000 | Agreement signed |
| Milestone | $5,000 | 20 qualified appointments delivered |
| **Phase 1 Total** | **$10,000** | |

**Phase 2: The Build (90 Days)**
| Payment | Amount | Trigger |
|---------|--------|---------|
| Month 1 | $10,000 + performance | Day 61 |
| Month 2 | $10,000 + performance | Day 91 |
| Month 3 | $10,000 + performance | Day 121 |

**Performance Component:** 15% of revenue over $35K baseline, capped at $15K/month

**Total Engagement:** $40,000 - $55,000

### Critical Implementation Rules

1. **Adam Off Phones = DAY ONE** - Not Phase 2. Pipeline handed over immediately.
2. **Dunning = Train Jonah** - We create SOP and train their CS person. We do NOT chase payments ourselves.
3. **Three Data Silos** - Present advertising, financial, and appointment data SEPARATELY. They don't perfectly connect.
4. **No Equity / No Perpetuity** - Key selling point. Client owns everything at end.

---

## File Structure & Navigation

```
rm-sales-buildout-proposal/
├── README.md                          # Project overview
│
├── copy/                              # ⭐ ALL WEBSITE COPY LIVES HERE
│   ├── 00-COPY-MASTER.md              # Master reference for copy decisions
│   ├── 01-hero-section.md             # Hero section copy
│   ├── 01b-why-im-writing-this.md     # Backstory section (Chrix's journey)
│   ├── 02-problem-section.md          # The problem/situation section
│   ├── 02b-what-they-dont-have.md     # Gap analysis section
│   ├── 03-opportunity-section.md      # Opportunity + Strategic Recommendations + LTV
│   ├── 04-solution-section.md         # The solution section
│   ├── 05-process-section.md          # Phase 1 & 2 process breakdown
│   ├── 06-deliverables-section.md     # What's included (full stack)
│   ├── 07-team-section.md             # Chrix + Sarah bios + 2-person advantage
│   ├── 07b-why-not-commission.md      # Why commission-only doesn't work
│   ├── 08-investment-section.md       # Pricing (Option B) + No Equity messaging
│   ├── 09-faq-section.md              # FAQ section
│   ├── 10-cta-section.md              # Call-to-action section
│   └── PRESENTATION-FRAMEWORK.md      # Master framework for section order
│
├── data/                              # ⭐ VERIFIED DATA & ANALYSIS
│   ├── VERIFIED-DATA-SUMMARY.md       # ⭐⭐⭐ THE SOURCE OF TRUTH FOR ALL NUMBERS
│   ├── DATA-ANALYSIS-SUMMARY.md       # Analysis notes
│   ├── ANOMALIES-AND-GAPS.md          # Data issues documented
│   └── raw-data/
│       ├── unified_payments.csv       # Stripe payment data (90 days)
│       └── subscriptions.csv          # Active Stripe subscriptions
│
├── design/                            # Design specifications
│   └── DESIGN-SYSTEM.md               # Colors, typography, spacing
│
├── dev/                               # Developer documentation
│   ├── DEV-AGENT-PROMPT.md            # ⭐ THIS FILE - Start here
│   ├── TECHNICAL-SPEC.md              # Technical requirements
│   ├── OWNERS-QUIZ-SPEC.md            # Quiz component spec
│   ├── INTERACTIVE-CALCULATOR-SPEC.md # ROI calculator spec
│   ├── VISUAL-CONTENT-SPEC.md         # Visual content requirements
│   ├── GRANULAR-METRICS-SPEC.md       # Metrics display spec
│   ├── ACTION-PLAN-MASTER.md          # Project action plan
│   └── FINALIZATION-CHECKLIST.md      # Final fixes checklist
│
├── docs/                              # Strategy & planning docs
│   ├── 00-PROJECT-BRIEF.md
│   ├── 01-MASTER-STRATEGY.md
│   ├── 02-CLIENT-ANALYSIS.md
│   ├── 03-SCOPE-OF-WORK.md
│   ├── 04-DELIVERABLES.md
│   ├── 05-TIMELINE.md
│   ├── 06-PRICING-STRUCTURE.md        # ⚠️ May be outdated - use this doc
│   ├── 07-SUCCESS-METRICS.md
│   └── 08-TEAM-BIOS.md
│
├── research/                          # Market research
│   ├── PRICING-RESEARCH-COMPLETE.md   # Competitor pricing research
│   └── OFFER-STRUCTURE-RECOMMENDATION.md # Final offer structure (Option B)
│
├── site/                              # ⭐ NEXT.JS APPLICATION
│   ├── app/
│   │   ├── layout.tsx                 # Root layout
│   │   └── page.tsx                   # Main page (assembles sections)
│   ├── components/
│   │   ├── sections/                  # Page sections (map to copy files)
│   │   ├── quiz/                      # Owner's Quiz components
│   │   ├── data-viz/                  # Data visualization components
│   │   ├── animations/                # Animation utilities
│   │   ├── layout/                    # Layout components
│   │   └── ui/                        # UI primitives
│   ├── hooks/
│   ├── lib/
│   │   ├── constants.ts               # ⚠️ UPDATE WITH VERIFIED DATA
│   │   ├── calculator.ts
│   │   └── utils.ts
│   └── package.json
│
└── spreadsheets/
    └── RM_Marketing_Financial_Model.xlsx
```

---

## Verified Data (FROM CSV - Source of Truth)

**Period:** November 1, 2025 - January 30, 2026 (90 Days)

### Executive Summary

| Metric | Value |
|--------|-------|
| **Total Paid Revenue** | $109,927.38 |
| **Total Transactions** | 214 |
| **Unique Customers** | 120 |
| **First-Time Revenue** | $45,998.88 |
| **Repeat Revenue** | $63,928.50 |
| **Failed Payments (Opportunity)** | $25,870.38 |
| **Refunds** | $5,508.00 |
| **Net After Refunds** | $104,419.38 |

### Complete Transaction Breakdown (For Presentation)

| Amount | Total | First-Time | Repeat | Total Rev | Commissionable |
|--------|-------|------------|--------|-----------|----------------|
| $7.00 | 33 | 33 | 0 | $231.00 | |
| $26.00 | 21 | 21 | 0 | $546.00 | |
| $97.00 | 14 | 8 | 6 | $1,358.00 | |
| $100.00 | 6 | 1 | 5 | $600.00 | |
| $125.00 | 1 | 1 | 0 | $125.00 | |
| $197.00 | 30 | 13 | 17 | $5,910.00 | |
| $248.50 | 11 | 4 | 7 | $2,733.50 | ✓ |
| $297.00 | 19 | 6 | 13 | $5,643.00 | ✓ |
| $303.00 | 1 | 1 | 0 | $303.00 | |
| $450.00 | 1 | 1 | 0 | $450.00 | |
| $497.00 | 21 | 12 | 9 | $10,437.00 | ✓ |
| $500.00 | 1 | 0 | 1 | $500.00 | |
| $597.00 | 4 | 2 | 2 | $2,388.00 | ✓ |
| $630.00 | 1 | 1 | 0 | $630.00 | |
| $650.00 | 30 | 8 | 22 | $19,500.00 | ✓ |
| $651.88 | 1 | 1 | 0 | $651.88 | |
| $900.00 | 2 | 0 | 2 | $1,800.00 | ✓ |
| $997.00 | 5 | 2 | 3 | $4,985.00 | ✓ |
| $1,250.00 | 1 | 0 | 1 | $1,250.00 | |
| $1,997.00 | 1 | 1 | 0 | $1,997.00 | |
| $2,724.00 | 1 | 0 | 1 | $2,724.00 | |
| $3,405.00 | 1 | 0 | 1 | $3,405.00 | |
| $4,500.00 | 1 | 0 | 1 | $4,500.00 | |
| $5,000.00 | 5 | 3 | 2 | $25,000.00 | |
| $5,500.00 | 1 | 1 | 0 | $5,500.00 | |
| $6,760.00 | 1 | 0 | 1 | $6,760.00 | |
| **TOTAL** | **214** | **120** | **94** | **$109,927.38** | |

### Commissionable Revenue Summary

| Metric | Value |
|--------|-------|
| Commissionable Transactions | 92 |
| Commissionable Revenue | $47,486.50 |
| First-Time Commissionable | $17,128.00 |

### Revenue by Tier

| Tier | Transactions | Revenue | % of Total |
|------|--------------|---------|------------|
| Tripwire ($7-$50) | 54 | $777 | 0.7% |
| Low Ticket ($51-$250) | 62 | $10,727 | 9.8% |
| Mid Ticket ($251-$600) | 47 | $19,721 | 17.9% |
| High Ticket ($601-$1000) | 39 | $27,567 | 25.1% |
| Premium ($1000+) | 12 | $51,136 | 46.5% |

### Funnel Metrics (From GHL)

| Metric | Value |
|--------|-------|
| Ad Spend (90 days) | $1,500 |
| Leads Generated | 238 |
| Appointments Booked | 46 |
| Appointments Showed | 22 |
| Show Rate | 47.8% |
| Estimated Close Rate | 30% |
| CPL | $6.30 |
| CAC | $227 |

### Active Stripe MRR

| Amount | Count | MRR |
|--------|-------|-----|
| $497 | 4 | $1,988 |
| $297 | 1 | $297 |
| $197 | 1 | $197 |
| $900 | 1 | $900 |
| **TOTAL** | **7** | **$3,382** |

**Note:** VA services ($650) are invoiced separately, not as Stripe subscriptions. True MRR is higher.

---

## Section Order (FINAL)

1. **Owner's Quiz** (gate before content) - `components/quiz/`
2. **Hero** - `01-hero-section.md` → Embed Adam's YouTube video
3. **Why I'm Writing This** - `01b-why-im-writing-this.md` → Chrix's backstory
4. **The Numbers (Problem)** - `02-problem-section.md` → THREE DATA SILOS (present separately)
5. **What They Don't Have** - `02b-what-they-dont-have.md` → Gap analysis
6. **The Opportunity** - `03-opportunity-section.md` → Strategic Recommendations + LTV Compounding
7. **The Solution** - `04-solution-section.md`
8. **The Process** - `05-process-section.md` → Phase 1 (60 days) & Phase 2 (90 days)
9. **The Team** - `07-team-section.md` → Chrix + Sarah, 2-person advantage
10. **Why Not Commission** - `07b-why-not-commission.md` → Math showing why it doesn't work
11. **The Investment** - `08-investment-section.md` → Option B pricing + No Equity messaging
12. **FAQ** - `09-faq-section.md`
13. **CTA** - `10-cta-section.md`

---

## Key Messaging Points

### 1. Two-Person Advantage
```
When Chrix is CLOSING... Sarah is BOOKING.
When Sarah is BOOKING... Chrix is CLOSING.
No gaps. No missed leads. No "I was busy."
```

### 2. No Equity / No Perpetuity
- No equity ask
- No perpetual revenue share
- No ongoing licensing fees
- Client owns everything at end of engagement

### 3. LTV Compounding
- $500/mo coaching × 4 months = $2,000 LTV
- MRR compounds: $100K/month in new sales = $1.2M+ annually

### 4. The Guarantee (Phase 1)
"If by Day 30, we haven't generated at least 20 qualified appointments from your existing database, you can walk away with just the $5K deposit invested."

### 5. Strategic Recommendations (Include in Opportunity section)
- YouTube Optimization
- "Make GHL Not Suck" Campaign
- Office Hours → Upsell Ladder

---

## Design Requirements

### Colors
- **NO light blue boxes** - User hates them
- Use **gold/brown/dark gray** palette
- Dark backgrounds (#0A1628, #0F172A)
- Gold accent (#D4A574)
- Professional, premium feel

### Style
- Dashboard aesthetic (think Stripe, Databox)
- Clean data cards
- Animated counters
- No stock photos - DATA is the visual

---

## Build & Run

```bash
cd site
npm install
npm run dev
```

Site runs on `http://localhost:3000`

---

## Files That MUST Be Updated

### 1. `site/lib/constants.ts`
Replace ALL placeholder data with verified numbers from `data/VERIFIED-DATA-SUMMARY.md`

### 2. All section components
Each should pull copy from corresponding markdown file in `copy/`

### 3. Pricing displays
Must reflect Option B structure ($5K/$5K Phase 1, $10K+perf × 3 Phase 2)

---

## Questions?

1. `data/VERIFIED-DATA-SUMMARY.md` - All verified numbers
2. `copy/PRESENTATION-FRAMEWORK.md` - Section structure
3. `research/OFFER-STRUCTURE-RECOMMENDATION.md` - Pricing rationale
4. `dev/FINALIZATION-CHECKLIST.md` - Remaining fixes

**Contact:** Chrix - chrix@raisethevibe.com
