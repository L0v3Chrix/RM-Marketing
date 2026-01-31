# Design System: RM Marketing Proposal Site

## Overview

This proposal site should mirror the GHL Mastery brand aesthetic — dark, premium, tech-forward. The design must feel like an extension of their existing sales pages, not a generic business proposal.

**Reference:** joinghlmastery.com/vip/membership

---

## Design Principles

### 1. Match Their Brand
This proposal should look like it belongs in the GHL Mastery ecosystem. Dark backgrounds, gold/blue accents, tech-forward aesthetic. Adam should feel like this was made *for* them.

### 2. Premium & Confident
This is a serious engagement. The design should feel like money — clean, bold, no clutter. Every element earns its place.

### 3. Data as Proof
Numbers tell the story. Their numbers are strong (17% booking rate, 5.6x LTV:CAC, $6 CPL). Showcase the data prominently.

### 4. Mobile-First
Adam and Brendan will review this on phones first. Every element must work beautifully on mobile.

### 5. Action-Oriented
This isn't a report to read — it's a decision to make. Clear CTAs, obvious next steps.

---

## Color Palette

### Primary Colors (GHL Mastery Brand)

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy Background | `#0A1628` | Primary background |
| Midnight Blue | `#0F172A` | Section alternates |
| Electric Blue | `#3B82F6` | Links, interactive elements |
| Success Green | `#22C55E` | Positive metrics, success states |
| Gold Accent | `#D4A574` | CTAs, highlights, premium feel |
| Bright Gold | `#FBBF24` | Secondary accents |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Alert Red | `#EF4444` | Problem callouts (use sparingly) |
| Warm Orange | `#F97316` | Warnings, attention |
| Soft Blue | `#60A5FA` | Info callouts |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Primary text on dark |
| Light Gray | `#E2E8F0` | Body text |
| Medium Gray | `#94A3B8` | Secondary text, captions |
| Muted | `#64748B` | Tertiary information |

### Background Variations

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Navy | `#0A1628` | Primary sections |
| Midnight | `#0F172A` | Alternate sections |
| Dark Card | `#1E293B` | Card backgrounds |
| Subtle Gradient | `linear-gradient(180deg, #0A1628 0%, #0F172A 100%)` | Section transitions |

---

## Typography

### Font Stack

**Primary Font:** Inter (matches their existing site)
- Clean, modern, highly readable
- Excellent weight range
- Web-optimized

**Fallback:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|----------------|---------------|--------|-------------|
| H1 (Hero) | 56px | 32px | 700 | 1.1 |
| H2 (Section) | 40px | 26px | 700 | 1.2 |
| H3 (Subsection) | 28px | 22px | 600 | 1.3 |
| H4 (Card Title) | 22px | 18px | 600 | 1.4 |
| Body Large | 20px | 18px | 400 | 1.6 |
| Body | 18px | 16px | 400 | 1.7 |
| Body Small | 16px | 14px | 400 | 1.6 |
| Caption | 14px | 12px | 400 | 1.5 |

### Special Typography

**Metric Callouts**
- Size: 64px desktop / 44px mobile
- Weight: 700
- Color: Gold (#D4A574) or Green (#22C55E)
- Optional: Slight letter-spacing

**Pull Quotes**
- Size: 24px desktop / 20px mobile
- Weight: 500
- Style: Italic
- Left border: Gold accent

---

## Spacing System

### Base Unit: 8px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight element spacing |
| sm | 8px | Standard element gaps |
| md | 16px | Component padding |
| lg | 24px | Section component gaps |
| xl | 32px | Large component gaps |
| 2xl | 48px | Section padding |
| 3xl | 64px | Major section breaks |
| 4xl | 96px | Hero/CTA vertical space |

### Section Spacing

- Vertical padding between sections: 64-96px
- Horizontal padding (desktop): 80-120px
- Horizontal padding (mobile): 20px
- Max content width: 1200px
- Reading width (text blocks): 720px

---

## Components

### Buttons

**Primary CTA (Gold)**
```css
background: linear-gradient(135deg, #D4A574 0%, #B8956A 100%);
color: #0A1628;
padding: 16px 32px;
border-radius: 8px;
font-size: 18px;
font-weight: 600;
box-shadow: 0 4px 20px rgba(212, 165, 116, 0.3);
transition: all 200ms ease;
/* Hover: lift + increase shadow */
```

**Secondary CTA (Outlined)**
```css
background: transparent;
border: 2px solid #D4A574;
color: #D4A574;
padding: 14px 28px;
border-radius: 8px;
/* Hover: fill with gold, dark text */
```

**Ghost Button**
```css
background: transparent;
border: 1px solid #64748B;
color: #E2E8F0;
padding: 12px 24px;
border-radius: 8px;
/* Hover: border brightens */
```

### Cards

**Standard Card**
```css
background: #1E293B;
border: 1px solid #334155;
border-radius: 12px;
padding: 24px;
```

**Highlight Card (Good News)**
```css
background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%);
border: 1px solid rgba(34, 197, 94, 0.3);
border-radius: 12px;
padding: 32px;
```

**Problem Card (Issues - Use Sparingly)**
```css
background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
border-left: 4px solid #EF4444;
border-radius: 0 12px 12px 0;
padding: 24px 24px 24px 28px;
```

**Opportunity Card (Reframe)**
```css
background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
border: 1px solid rgba(59, 130, 246, 0.3);
border-radius: 12px;
padding: 32px;
```

### Metric Callouts

**Large Metric**
```
┌─────────────────────────┐
│      17%                │  ← 64px, bold, green
│   Lead-to-Appointment   │  ← 14px, gray
│  Industry avg: 5-10%    │  ← 12px, muted, italic
└─────────────────────────┘
background: #1E293B;
border-radius: 12px;
padding: 32px;
text-align: center;
```

### Tables

**Data Table**
```css
/* Header */
background: #1E293B;
color: #E2E8F0;
font-weight: 600;

/* Rows */
background: alternating #0F172A / #0A1628;
border-bottom: 1px solid #334155;

/* Cell */
padding: 16px;
```

### FAQ Accordion

**Collapsed**
```css
background: #1E293B;
border: 1px solid #334155;
border-radius: 8px;
padding: 20px 24px;
/* Icon: Plus sign, gold color, right-aligned */
```

**Expanded**
```css
background: #0F172A;
border: 1px solid #3B82F6;
border-radius: 8px;
padding: 20px 24px;
/* Icon: Minus sign */
/* Answer: Below, separated by subtle line */
```

---

## Layout Patterns

### Hero Section
- Full-width dark gradient background
- Subtle animated particles or grid effect (optional)
- Centered text alignment
- Large headline + subhead
- Metric callouts in row (4 across desktop, 2x2 mobile)
- Single prominent gold CTA

### Content Sections
- Alternating dark navy / midnight backgrounds
- Left-aligned text (easier to read)
- Max width: 1200px, centered
- Text blocks max: 720px

### Two-Column Layout
- Used for: Current State vs. Opportunity, Before/After
- Desktop: 50/50 split
- Mobile: Stacks vertically
- Use contrasting card styles (problem/opportunity)

### Card Grids
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (stacked)
- Consistent card height per row

### Timeline
- Horizontal on desktop (connected nodes)
- Vertical on mobile
- Gold accent line connecting phases
- Current phase highlighted

---

## Imagery & Assets

### GHL Mastery Assets to Use
- GHL Logo (gold G, blue H, green L)
- Adam McInnes photos (multiple available)
- Brendan photos
- Dashboard/analytics screenshots
- Zoom call community screenshots
- "Roadmap to Success" graphic style

### Photography Style
- Use their existing photos — maintains brand consistency
- Dark, professional lighting
- Tech-forward backgrounds

### Data Visualizations
- Dark backgrounds with light data
- Gold/green for positive trends
- Simple, minimal charts
- Animated count-up numbers

### Icons
- Line style (not filled)
- Consistent stroke width (2px)
- 24px or 32px size
- White or gold color on dark

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | < 640px | Phones |
| Tablet | 640px - 1024px | Tablets, small laptops |
| Desktop | > 1024px | Laptops, monitors |

### Mobile Considerations
- Touch targets: 48px minimum
- Button width: Full-width on mobile
- Font sizes: Reduced but readable (see scale)
- Horizontal scrolling: Never
- Card grids: Single column
- Metric callouts: 2x2 grid

---

## Animation

### Principles
- Subtle, premium feel
- Purposeful (guides attention)
- Fast (200-300ms)
- Respectful of reduced-motion preferences

### Recommended Animations
- **Fade in on scroll:** Sections appear as user scrolls
- **Button hover:** Slight lift + glow increase
- **Accordion expand:** Smooth height transition
- **Metric count-up:** Numbers animate to final value
- **Subtle particle/grid background:** Very subtle, not distracting

### Animation Timing
- Default: 200ms ease-out
- Longer transitions: 300ms ease-in-out
- Stagger delay: 50-100ms between elements

---

## Brand Assets Required

```
/assets
├── logos/
│   ├── ghl-mastery-logo.svg (or PNG)
│   ├── ghl-logo-icon.svg
│   └── 1322-legacy-logo.svg (if used)
├── images/
│   ├── adam-mcginnes-headshot.jpg
│   ├── brendan-headshot.jpg
│   ├── chrix-headshot.jpg (for proposal)
│   ├── justin-porter-headshot.jpg (for proposal)
│   ├── dashboard-screenshot.png
│   ├── zoom-community.png
│   └── roadmap-graphic.png
└── icons/
    └── (using Lucide or similar icon set)
```

**Note:** Pull assets directly from their existing site/YouTube where possible to maintain consistency.

---

## Key Messaging Alignment

The site should reinforce these core messages:

1. **You're not broken, you're constrained** — The funnel works. The economics are strong. You just can't scale without a team.

2. **17% booking is excellent** — Industry average is 5-10%. Frame this as a strength, not a problem.

3. **We start selling Day 1** — This isn't a "build then sell" engagement. Revenue generation begins immediately.

4. **Adam gets his time back** — The real value: Adam can focus on content and high-value calls while the machine runs.

5. **$65K/month increase = $780K/year** — Frame the ROI in annual terms. This is not an expense, it's an investment.

---

## Design Checklist

Before finalizing:

- [ ] Matches GHL Mastery dark aesthetic
- [ ] Gold accents used consistently
- [ ] All metrics framed positively where appropriate
- [ ] Mobile responsive (test on actual device)
- [ ] Typography readable on dark backgrounds
- [ ] CTAs are prominent and gold
- [ ] Data visualizations are clear
- [ ] Photos of Adam/Brendan integrated
- [ ] Animations are subtle
- [ ] Loads fast (<3s on 3G)
