# GHL Mastery Sales Buildout - Complete Checklist

**Status:** 🔴 NOT READY FOR CLIENT
**Last Updated:** 2026-01-31 16:15 CST

---

## 🚨 CRITICAL ISSUES

The site currently looks like a **templated Next.js website**:
- No custom images or graphics
- No branding (just default SVGs)
- No team photos
- Generic icon placeholders instead of data visualizations
- Missing the Stripe/Databox dashboard aesthetic

**Reference Site:** contentcreator.ai (screenshots in `Exsample Site frame work/`)

---

## 📁 MISSING ASSETS (Brand & Media)

### Team Photos
- [ ] Adam McInnes headshot
- [ ] Brendan headshot  
- [ ] Chrix headshot
- [ ] Sarah headshot

### Logos & Branding
- [ ] GHL Mastery logo (gold G, blue H, green L)
- [ ] GHL logo icon
- [ ] 1322 Legacy Strategies logo (if used)

### Screenshots & Demos
- [ ] GHL Dashboard screenshot
- [ ] Analytics/metrics dashboard screenshot
- [ ] Zoom community screenshot
- [ ] CRM pipeline screenshot

### Graphics (Required per Vision Doc)
- [ ] Funnel Waterfall — Calls→Persons→Appointments→Shows→Sales→Upsells
- [ ] Phase Timeline — 3-phase visual: Proof (30d) → Buildout (90d) → Handoff
- [ ] Progressive Payment — $4K → $4K@$20K → 33% flow diagram
- [ ] ROI Comparison — Investment vs Return bar chart (10-15x)
- [ ] Revenue Gap Chart — Current $36K → Target $100K with gap
- [ ] Revenue Per Show — Key metric spotlight with breakdown
- [ ] Team Structure — Chrix + Sarah roles visual
- [ ] Intent Score Gauge — 0-100 gauge with classification zones
- [ ] Before/After — NOW (muted) vs WITH SALES TEAM (gold glow)
- [ ] Industry Benchmarks — Your metrics vs industry comparison bars
- [ ] Decision Gate — Mutual opt-in visual

---

## 🎨 VISUAL/STYLING ISSUES

### Color Palette (Per Design System)
- [ ] Verify Deep Navy Background (`#0A1628`) is used
- [ ] Verify Gold Accent (`#D4A574`) on CTAs
- [ ] Verify Success Green (`#22C55E`) on positive metrics
- [ ] Check Electric Blue (`#3B82F6`) on interactive elements

### Typography
- [ ] Inter font loaded and applied
- [ ] Metric callouts use 64px desktop / 44px mobile
- [ ] Headlines match GHL Mastery premium feel

### Dashboard Aesthetic
- [ ] Hero section feels like Stripe/Databox, not generic Next.js
- [ ] Cards have proper depth and shadows
- [ ] Data visualizations are animated (count-up, bar grow)
- [ ] Subtle particle/grid background effects

---

## 📐 COMPONENT FIXES

### Hero Section
- [ ] Replace placeholder box with actual dashboard visual
- [ ] Add real screenshot or animated dashboard preview
- [ ] Trust row metrics styled as proper data cards

### Quiz Section
- [ ] 5-step flow implemented:
  - [ ] CurrentState (revenue, ad spend, CPL)
  - [ ] FunnelMetrics (answer/booking/show/close rates)
  - [ ] OfferEconomics (main offer, upsell, downsell)
  - [ ] YourGoal (target revenue, timeline)
  - [ ] IntentQualifier (ads, team, bottleneck)
- [ ] Results dashboard shows:
  - [ ] Key Metrics Cards (Revenue Per Show, Revenue Per Lead, LTV:CAC)
  - [ ] Funnel Waterfall visualization
  - [ ] Path to Goal breakdown
  - [ ] Intent-based dynamic CTA

### Data Visualizations (Check Existing)
- [ ] IndustryBenchmarks.tsx - verify renders properly
- [ ] IntentGauge.tsx - verify renders properly
- [ ] PhaseTimeline.tsx - verify renders properly
- [ ] ProgressivePayment.tsx - verify renders properly
- [ ] ROIComparison.tsx - verify renders properly
- [ ] RevenueGapChart.tsx - verify renders properly

### Section Content
- [ ] Situation section has real data visuals, not just text
- [ ] Opportunity section shows gap/potential with charts
- [ ] Solution section shows team structure visually
- [ ] Process section has animated phase timeline
- [ ] Investment section has progressive payment diagram
- [ ] Calculator section interactive and animated
- [ ] Team section has actual photos

---

## 📱 RESPONSIVE CHECK

- [ ] Mobile (< 640px) looks polished, not just "functional"
- [ ] Tablet (640-1024px) layout works
- [ ] Desktop (> 1024px) is premium
- [ ] Touch targets are 48px minimum
- [ ] No horizontal scrolling anywhere

---

## ⚡ ANIMATIONS

- [ ] Number count-up: 1.5s ease-out
- [ ] Bar grow: 1s ease-out, 0.2s stagger
- [ ] Fade in: 0.6s ease-out on scroll
- [ ] Step transitions: 0.4s with exit animations
- [ ] Reduced-motion preference respected

---

## 🔢 DEFAULT VALUES (Verify in Calculator)

```javascript
adSpend: 500,
costPerLead: 6.00,
callAnswerRate: 30%,
callToBookingRate: 40%,
showRate: 59%,
closeRate: 30%,
upsellRate: 20%,
avgMainOffer: $2,000,
downsellPrice: $197,
upsellPrice: $500
```

---

## 📊 KEY METRICS TO DISPLAY

- [ ] 19.3% Lead-to-Appointment (industry: 3-5%)
- [ ] $6.30 Cost Per Lead (industry: $50-85)
- [ ] 15.8x LTV:CAC (healthy: 3x+)
- [ ] 59% Show Rate
- [ ] ~$628 Revenue Per Show

---

## 🧭 INTENT SCORING SYSTEM

### Explicit Signals (Quiz Answers) — Up to 65 Points
| Signal | Points |
|--------|--------|
| Revenue > $100K/mo | +15 |
| Revenue $50-100K | +10 |
| Revenue $25-50K | +5 |
| Running ads consistently | +15 |
| Running ads sometimes | +8 |
| No sales team | +20 |
| Just me handling sales | +15 |
| Bottleneck: "No time for sales" | +20 |
| Bottleneck: "Leads don't convert" | +15 |
| Timeline: Immediately | +25 |
| Timeline: This month | +15 |

### Behavioral Signals — Up to 35 Points
| Signal | Points |
|--------|--------|
| Completes quiz < 2 min | +10 |
| Adjusts sliders 3+ times | +5 |
| Revisits previous steps | +8 |
| Spends 30+ sec on results | +12 |
| Return visitor | +20 |

### Intent Classification
| Range | Classification | CTA |
|-------|----------------|-----|
| 0-15 | BROWSING | "Learn More" |
| 16-30 | LEARNING | "See How It Works" |
| 31-50 | EVALUATING | "See the Full Plan" |
| 51-75 | READY_TO_BUY | "Start Phase 1" |
| 76+ | URGENT | "Call Now" + Phone |

---

## ✅ DEFINITION OF DONE

Before showing to client:

1. [ ] Matches GHL Mastery dark aesthetic
2. [ ] Gold accents used consistently
3. [ ] All metrics framed positively
4. [ ] Mobile responsive (tested on actual device)
5. [ ] Typography readable on dark backgrounds
6. [ ] CTAs are prominent and gold
7. [ ] Data visualizations are clear AND animated
8. [ ] Photos of Adam/Brendan/Team integrated
9. [ ] Animations are subtle but present
10. [ ] Loads fast (< 3s on 3G)
11. [ ] **DOES NOT** look like a template — looks custom/premium

---

## 🎯 PRIORITY ORDER

1. **P0 - Blocking:** Get team photos and brand assets
2. **P0 - Blocking:** Create/source the 11 required graphics
3. **P1 - Critical:** Fix Hero section with real visuals
4. **P1 - Critical:** Ensure data-viz components render properly
5. **P2 - Important:** Polish all section visuals
6. **P2 - Important:** Verify quiz flow complete
7. **P3 - Nice to Have:** Animation polish
8. **P3 - Nice to Have:** Performance optimization

---

*Target: Premium Stripe/Databox dashboard aesthetic, NOT a template.*
