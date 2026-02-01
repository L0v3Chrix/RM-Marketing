# RM Marketing Proposal - Full Redesign Plan
**Created:** 2026-02-01 01:35 CST
**Status:** PLANNING - Awaiting Chrix approval before execution

---

## The Problem

I've been making incremental color changes that miss the mark. The best version was before all my changes. I need to:
1. Actually study the reference sites
2. Understand what makes them work
3. Create custom graphics and proper visual hierarchy
4. Execute properly with 7-11 iterations per major decision

---

## Reference Site Analysis

### Born This Way Foundation (bornthisway.foundation)

**What makes it work:**
- Full-bleed hero image with people (emotional, human)
- Animated rotating text: "TOWARD LOVE / KINDNESS / BRAVERY / ACCEPTANCE"
- Coral/salmon pink accent on dark photo background
- "TO [X]" naming convention for navigation
- Card-based content sections with clear hierarchy
- Clean footer with logo, contact, social links
- Professional nonprofit aesthetic - warm but serious

**Key visual elements:**
- Large hero photo (not data viz or video)
- Text overlaid on imagery
- Soft, warm accent color (coral pink)
- White/light content sections after hero
- Rounded cards with subtle shadows

### ContentCreator.ai (your other example)

**What makes it work:**
- Dark hero with VIDEO autoplay
- AI-generated imagery throughout (faces, scenes)
- Bold stats with large numbers
- Mixed dark/light sections
- Image grids showing the product in action
- Testimonials with real photos
- Pricing cards with clear hierarchy
- Very graphics-heavy throughout

**Key visual elements:**
- Video in hero section
- Custom illustrations/graphics in every section
- Blue/purple gradient backgrounds
- Glassmorphism cards
- Lots of product screenshots
- Photo testimonials

---

## Current Site Problems

### 1. No Custom Graphics
- Every section is just text + data viz
- No photos, illustrations, or custom visuals
- Looks like a dashboard, not a proposal

### 2. Color Confusion
- Went from good → dark → light → worse
- Need to pick ONE direction and commit

### 3. Missing Visual Hierarchy
- No full-bleed hero image
- Video is small, not impactful
- Data viz is good but not enough

### 4. No Emotional Connection
- All logic, no feeling
- Need imagery that connects to the "why"

---

## The Redesign Plan

### Phase 1: Visual Direction Decision

**Option A: Born This Way Style**
- Full-bleed hero image of Adam/Brendan or their team
- Light/cream backgrounds for content
- Coral/warm accent color
- Warm, professional, nonprofit-adjacent

**Option B: ContentCreator.ai Style**
- Full-bleed hero VIDEO (Adam's YouTube)
- Dark backgrounds with gradients
- Blue/teal accent color
- Bold, tech-forward, sales-focused

**Recommendation:** Option B fits better for a sales proposal. The ContentCreator.ai style is designed to sell.

### Phase 2: Graphics Creation Needed

| Section | Current | Needed |
|---------|---------|--------|
| Hero | Small video + funnel | FULL-SCREEN video background OR large centered video |
| Why Story | Text only | Photo of Chrix? Illustration? |
| Situation | Data cards | Keep but add context imagery |
| Calculator | Sliders + results | Keep - this is good |
| Investment | Text + cards | Timeline graphic, team photos |
| Process | Phase cards | Visual timeline with icons |
| CTA | Button | Background image + clear CTA |

### Phase 3: File-by-File Changes

**globals.css**
- [ ] Pick ONE color scheme and commit
- [ ] Remove all the conflicting variables
- [ ] Add proper gradient backgrounds

**Hero.tsx**
- [ ] Make video FULL WIDTH or much larger
- [ ] Add dark overlay for text readability
- [ ] Bigger, bolder headline
- [ ] Remove the funnel from hero (move to Situation)

**WhyStory.tsx**
- [ ] Add visual element (photo or illustration)
- [ ] Better typography hierarchy

**Situation.tsx**
- [ ] Move funnel visualization here
- [ ] Add context/explanation graphics

**Calculator.tsx**
- [ ] This is good, minor polish only

**Investment.tsx**
- [ ] Add visual timeline
- [ ] Commission math section is good

**Process.tsx**
- [ ] Visual phase timeline
- [ ] Icons for each step

**CTA.tsx**
- [ ] Background image or gradient
- [ ] Bigger, bolder

---

## Execution Order

1. **Get Chrix approval on visual direction** (Option A or B?)
2. **Source/create graphics** (what images do we have? need?)
3. **Rebuild Hero section** (biggest impact)
4. **Update color scheme** (one time, properly)
5. **Add graphics to each section** (one by one)
6. **Polish and verify** (mobile, accessibility)

---

## Questions for Chrix

1. **Visual direction:** Option A (Born This Way - warm/professional) or Option B (ContentCreator - bold/sales)?

2. **Graphics sources:** 
   - Do you have photos of yourself, Sarah, Adam, Brendan?
   - Should we use stock photos? AI-generated?
   - Any specific imagery you want included?

3. **The video:** Should Adam's video be full-screen hero background, or large centered embed like current?

4. **What did "before dark mode" look like?** Can you send a screenshot of the version you liked?

---

## Next Steps

Awaiting your answers before I execute. I won't make any more incremental changes - next update will be the proper redesign.
