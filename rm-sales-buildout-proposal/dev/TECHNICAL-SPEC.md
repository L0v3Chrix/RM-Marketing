# Technical Specification

## Project: RM Marketing Proposal Microsite

### Version: 1.0
### Date: January 2026

---

## 1. Overview

### 1.1 Purpose
Single-page proposal website presenting an $80,000 sales consulting engagement to RM Marketing.

### 1.2 Users
- Primary: Adam McInnes & Brendan (RM Marketing founders)
- Secondary: Any stakeholders they share it with

### 1.3 Goals
- Present data-driven case for engagement
- Create premium, professional impression
- Drive to CTA (schedule call)

---

## 2. Technical Stack

### 2.1 Recommended Stack
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 3.4+
Animations: Framer Motion
Icons: Lucide React
Fonts: Inter (Google Fonts)
Deployment: Vercel
```

### 2.2 Alternative Stack (Simpler)
```
Framework: Static HTML
Styling: Custom CSS + CSS Variables
Animations: CSS transitions + Intersection Observer
Icons: SVG inline
Fonts: Inter (self-hosted or Google Fonts)
Deployment: Any static host
```

### 2.3 GHL Native Option
```
Framework: GHL Page Builder
Styling: Custom CSS injection
Limitations: Less flexibility, more constraints
```

---

## 3. File Structure (Next.js)

```
/rm-proposal
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Grid.tsx
│   ├── typography/
│   │   ├── Heading.tsx
│   │   └── Body.tsx
│   ├── data/
│   │   ├── MetricCard.tsx
│   │   ├── DataTable.tsx
│   │   ├── FunnelDiagram.tsx
│   │   └── Timeline.tsx
│   ├── interactive/
│   │   ├── Button.tsx
│   │   ├── Accordion.tsx
│   │   └── Card.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Opportunity.tsx
│       ├── Solution.tsx
│       ├── Process.tsx
│       ├── Deliverables.tsx
│       ├── Team.tsx
│       ├── Investment.tsx
│       ├── FAQ.tsx
│       └── CTA.tsx
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── public/
│   ├── images/
│   └── fonts/
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## 4. Component Specifications

### 4.1 Container
```tsx
interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}

// Sizes
// default: max-w-6xl (1152px)
// narrow: max-w-3xl (768px) - for text-heavy content
// wide: max-w-7xl (1280px) - for full sections
```

### 4.2 Section
```tsx
interface SectionProps {
  children: React.ReactNode;
  id?: string;
  background?: 'white' | 'gray' | 'blue' | 'green' | 'red';
  padding?: 'default' | 'large';
  className?: string;
}

// Backgrounds map to design system colors
// Padding: default (py-16 md:py-24), large (py-24 md:py-32)
```

### 4.3 MetricCard
```tsx
interface MetricCardProps {
  value: string | number;
  label: string;
  prefix?: string; // e.g., "$"
  suffix?: string; // e.g., "%"
  color?: 'default' | 'green' | 'red';
  animate?: boolean; // Count-up animation
}
```

### 4.4 DataTable
```tsx
interface DataTableProps {
  headers: string[];
  rows: (string | number)[][];
  highlightLast?: boolean; // For total rows
  className?: string;
}
```

### 4.5 Accordion (FAQ)
```tsx
interface AccordionItem {
  question: string;
  answer: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}
```

### 4.6 Button
```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  href?: string;
  onClick?: () => void;
  className?: string;
}
```

---

## 5. Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1E3A5F',
        'success-green': '#2E7D32',
        'alert-red': '#D32F2F',
        'warm-orange': '#F57C00',
        'light-blue': '#E3F2FD',
        'light-green': '#E8F5E9',
        'light-red': '#FFEBEE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-mobile': ['2.25rem', { lineHeight: '1.1', fontWeight: '700' }],
      },
      maxWidth: {
        'reading': '45rem', // 720px for text blocks
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 6. Data Constants

```typescript
// lib/constants.ts

export const METRICS = {
  revenue90Day: 109927,
  showRate: 35,
  noShows: 11,
  totalAppointments: 17,
  costPerLead: 6,
  ltvCacRatio: 5.5,
  databaseSize: 10000,
  failedPayments: 25870,
  newCustomerDecline: 94,
  targetShowRate: 70,
  currentMRR: 11876,
}

export const PRICING = {
  total: 80000,
  deposit: 20000,
  phase2: 20000,
  phase3: 20000,
  performanceBonus: 20000,
}

export const TIMELINE = {
  phase1: { start: 1, end: 4, name: 'Diagnostic & Infrastructure' },
  phase2: { start: 5, end: 8, name: 'Team & Process Buildout' },
  phase3: { start: 9, end: 12, name: 'Optimization & Handoff' },
}

export const CONTACT = {
  name: 'Chrix',
  email: 'chrix@raisethevibe.com',
  company: 'Raise the Vibe',
}

export const CLIENT = {
  name: 'Adam McInnes & Brendan',
  company: 'GHL Mastery / RM Marketing',
}
```

---

## 7. Animation Specifications

### 7.1 Scroll Animations
Use Intersection Observer or Framer Motion `whileInView`:

```tsx
// Framer Motion example
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
>
  {children}
</motion.div>
```

### 7.2 Count-Up Animation
For metric numbers:

```tsx
// Using react-countup or custom implementation
<CountUp
  end={109927}
  prefix="$"
  separator=","
  duration={2}
  enableScrollSpy
  scrollSpyOnce
/>
```

### 7.3 Reduced Motion
Always respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. SEO & Meta

```tsx
// app/layout.tsx
export const metadata = {
  title: 'Sales Department Buildout Proposal | GHL Mastery',
  description: 'A custom proposal to build complete sales infrastructure for GHL Mastery.',
  robots: 'noindex, nofollow', // Private proposal
}
```

---

## 9. Performance Requirements

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |
| Page Weight | < 1MB |

### Optimization Strategies
- Use Next.js Image component for automatic optimization
- Lazy load below-fold sections
- Minimize JavaScript bundle
- Preload critical fonts
- Use WebP/AVIF for images

---

## 10. Accessibility Requirements

### WCAG 2.1 AA Compliance

- [ ] Color contrast: 4.5:1 for normal text, 3:1 for large text
- [ ] Focus indicators: Visible on all interactive elements
- [ ] Heading hierarchy: Proper H1 → H2 → H3 structure
- [ ] Alt text: All images have descriptive alt text
- [ ] Keyboard navigation: All interactive elements reachable
- [ ] ARIA: Proper labels and roles where needed
- [ ] Reduced motion: Respect user preferences

---

## 11. Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 14+ |
| Chrome Mobile | Last 2 versions |

---

## 12. Deployment

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Next.js
   - Build command: `next build`
   - Output directory: `.next`
3. Set environment variables (if any)
4. Configure custom domain (optional)
5. Enable Analytics (optional)

### Environment Variables

```
# .env.local (if needed)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...
NEXT_PUBLIC_GA_ID=G-XXXXXXXX
```

---

## 13. Testing

### Manual Testing Checklist

- [ ] Desktop Chrome: All sections render
- [ ] Desktop Firefox: All sections render
- [ ] Desktop Safari: All sections render
- [ ] Mobile Safari (iPhone): Responsive layout
- [ ] Mobile Chrome (Android): Responsive layout
- [ ] Tablet: Responsive layout
- [ ] Slow 3G: Page loads acceptably
- [ ] Keyboard only: Can navigate entire page
- [ ] Screen reader: Content is accessible

### Automated Testing (Optional)

```bash
# Lighthouse CI
npx lighthouse https://proposal-url.com --view

# Accessibility
npx pa11y https://proposal-url.com
```

---

## 14. Handoff Checklist

Before marking complete:

- [ ] All copy matches source files
- [ ] All metrics are accurate
- [ ] All images are optimized and loading
- [ ] CTA links work correctly
- [ ] Mobile responsive
- [ ] Accessibility audit passes
- [ ] Performance targets met
- [ ] Cross-browser tested
- [ ] Deployed to production URL
- [ ] Client can access

---

## 15. Maintenance

### Post-Launch
- Monitor for errors
- Update metrics if data changes
- Adjust CTA links as needed

### Future Enhancements
- Add analytics tracking
- A/B test headlines
- Add video sections
- Interactive ROI calculator

