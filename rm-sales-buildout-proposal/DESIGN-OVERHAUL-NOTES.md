# RM Marketing Proposal - Design System Overhaul

## Overview

Complete design system overhaul inspired by [bornthisway.foundation](https://bornthisway.foundation/) - a clean, elegant dark theme that feels premium and professional.

## What Was Changed

### Color Palette (globals.css)

**Removed:**
- Light blue template boxes (`#EFF6FF`, `bg-light-blue`)
- Gold/amber accents (`#F59E0B`, `#D97706`)
- Template navy colors (`#0F172A`, `#1E293B`)
- "GHL Mastery" blue branding (`#2563EB`)

**Added:**
- Dark backgrounds: `#0a0a0a` (base), `#111111` (elevated), `#161616` (card)
- Clean text hierarchy: `#ffffff` (primary), `#a1a1a1` (secondary), `#666666` (muted)
- Teal accent: `#14b8a6` (primary accent, replaces gold)
- Subtle borders: `#1f1f1f`, `#2a2a2a`, `#3a3a3a`

### Design Tokens

```css
--bg-base: #0a0a0a;
--bg-elevated: #111111;
--bg-card: #161616;
--text-primary: #ffffff;
--text-secondary: #a1a1a1;
--text-muted: #666666;
--accent: #14b8a6;
--success: #22c55e;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Components Updated

#### Layout Components
- `Section.tsx` - New background variants: base, elevated, card, gradient
- `Container.tsx` - Simplified sizing

#### UI Components
- `Button.tsx` - Teal accent, rounded-lg style, clean shadows
- `Card.tsx` - Dark cards with subtle borders, accent and glass variants
- `Accordion.tsx` - Dark theme FAQ styling
- `ChapterGate.tsx` - Teal accent badges and progress
- `ChapterProgress.tsx` - Dark header with teal progress bar

#### Section Components
- `Hero.tsx` - Dark background, teal metrics
- `Situation.tsx` - Gradient dark theme
- `Opportunity.tsx` - Teal data visualizations
- `Solution.tsx` - Accent cards for outcomes
- `Process.tsx` - Timeline with teal phases
- `Team.tsx` - Dark cards with accent borders
- `Investment.tsx` - Clean payment breakdown
- `FAQ.tsx` - Dark accordion
- `CTA.tsx` - Premium dark footer

#### Data Visualization
- `FunnelWaterfall.tsx` - Teal bars on dark background
- `BeforeAfterCompare.tsx` - Accent state comparisons
- `IndustryBenchmarks.tsx` - Teal benchmark bars
- `PhaseTimeline.tsx` - Multi-color phase indicators
- `ProgressivePayment.tsx` - Payment flow visualization
- `ROIComparison.tsx` - ROI bar chart
- `RevenueGap.tsx` - Gap analysis chart
- `RevenuePerShow.tsx` - Big number display
- `TeamStructure.tsx` - Team org chart

#### Quiz Components
- `OwnersQuiz.tsx` - Dark intro, progress bars, navigation

## Typography

- Primary font: Inter (weights 300-700)
- Heading color: `--text-primary` (#ffffff)
- Body color: `--text-secondary` (#a1a1a1)
- Muted/labels: `--text-muted` (#666666)
- Letter spacing: -0.02em for headings

## Key Design Decisions

1. **Dark base, not just dark mode** - The entire site is built dark-first, not as a dark mode toggle. This creates a premium, focused reading experience.

2. **Single accent color** - Teal (#14b8a6) replaces the gold/blue confusion. It's modern, not corporate, and stands out well against dark backgrounds.

3. **Subtle hierarchy** - Three levels of background darkness (base → elevated → card) create depth without heavy shadows.

4. **Minimal borders** - Using subtle gray borders (#2a2a2a) instead of colored borders keeps things clean.

5. **Consistent spacing** - Cards use default padding of `p-6` with `p-8` or `p-10` for large emphasis sections.

## Build Status

✅ Build passes successfully
✅ No TypeScript errors
✅ All components render correctly

## Commits

1. `4093c0f` - Initial design system and core component updates
2. `deb06b7` - Complete dark theme overhaul for all remaining components

---

*Updated: February 2026*
