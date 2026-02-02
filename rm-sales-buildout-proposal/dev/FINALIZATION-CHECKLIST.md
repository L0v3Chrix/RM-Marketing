# Finalization Checklist

**Created:** February 1, 2026
**Purpose:** Track all remaining fixes before handoff to dev

---

## CRITICAL FIXES

### 1. Name Corrections (Global)
- [ ] **Sarah** (no H) — fix everywhere, currently shows "Sarah" in some places
- [ ] **Chrix** — confirm spelling (user mentioned "H at the end" - need clarification)

**Files to check:**
- All copy files
- Dev agent prompt
- Site components
- Constants files

---

### 2. Adam Off Phones = DAY ONE

**WRONG:** "Adam transitions off phones in Phase 2"

**CORRECT:**
- Adam is off phones DAY ONE
- They hand over the entire pipeline to Chrix + Sarah
- This includes any scheduled sales meetings
- Chrix must be present for all existing appointments
- No commission = no conflict of interest with existing team

**Update in:**
- Process section
- Solution section
- Investment section
- Dev prompt

---

### 3. Dunning Deliverable Correction

**WRONG:** We chase failed payments ($25K)

**CORRECT:**
- We will TRAIN Jonah (their CS person) on payment dunning
- We will CREATE the SOP for them
- We do NOT have bandwidth to chase this money AND build new sales
- This is a handoff, not a do-for-you

**Update in:**
- Deliverables section
- What You Get lists
- Phase 1 description

---

### 4. Add LTV/Compounding Revenue Projection

**Current gap:** We're only showing new sales, not lifetime value

**The math:**
- Flagship: $500/month recurring
- Upsell: $900/month recurring
- Average retention: ~4 months (based on their data)

**Example:**
```
20 appointments in 30 days
× 25% close rate
= 5 new customers
× $500/month
= $2,500 new MRR

BUT over 4 months:
$2,500 × 4 = $10,000 LTV from those 5 customers

AND it compounds:
Month 1: $2,500 MRR (5 customers)
Month 2: $5,000 MRR (10 customers)
Month 3: $7,500 MRR (15 customers)
...
Month 12: $30,000 MRR (60 customers)
```

**Add:** Compounding growth projection visual showing annual trajectory

---

### 5. Clarify Revenue Attribution

**The question:** How much money came from those 22 appointment shows specifically?

**What we know:**
- Total 90-day revenue: ~$43K (from Stripe)
- Appointments booked: 46
- Appointments showed: 22
- Some revenue came from email blasts, not appointments

**What we need:**
- Revenue per show estimate
- This becomes the benchmark for what Chrix can deliver
- Key comparison: 22 shows in 90 days vs. 20+ shows in 30 days (same volume, 1/3 the time)

---

### 6. Add "No Equity/Perpetuity" Selling Point

**New messaging:**
> "We're not asking for a percentage of equity. We're not asking for a percentage of sales into perpetuity. You pay for the build. You own the result. That's what makes this an extremely good offer."

**Add to:**
- Investment section
- Comparison tables
- CTA section

---

### 7. Include Strategic Recommendations

**Missing from current copy:**

1. **YouTube Channel Optimization**
   - They have content, it's underutilized
   - Optimize titles, thumbnails, descriptions
   - Consistent posting schedule

2. **YouTube Ads**
   - Run ads on their YouTube content
   - Retarget viewers

3. **"Make GHL Not Suck" Campaign**
   - Contrarian hook
   - Target frustrated 3-12 month GHL users
   - Rage bait for 2026
   - Position as the antidote to GHL frustration

**Add section:** Strategic Recommendations / What Else We'd Do

---

### 8. Content Depth Check

**User feedback:** "I want somebody who isn't Brendan or Adam to be able to read this document and understand it 100%"

**Action:**
- Review each section for completeness
- Don't over-summarize
- Include enough context for any reader
- Spell out acronyms on first use
- Explain GHL Mastery's business model briefly

---

## DATA RECONCILIATION

Need to answer these questions clearly:

| Question | Answer Needed |
|----------|---------------|
| Revenue from 22 shows specifically? | $______ |
| Revenue per show average? | $______ |
| Where did the other ~$22K come from? | Database email, self-serve, other |
| Their current MRR? | $______ |
| Average customer retention? | ____ months |
| Churn rate? | ____% |

---

## DOCUMENT CLEANUP

### Files to Audit for Consistency

| File | Status | Notes |
|------|--------|-------|
| copy/00-COPY-MASTER.md | | Check pricing, names |
| copy/01-hero-section.md | | |
| copy/01b-why-im-writing-this.md | | |
| copy/02-problem-section.md | | Add 3-silo approach |
| copy/02b-what-they-dont-have.md | | |
| copy/03-opportunity-section.md | | Add LTV projections |
| copy/04-solution-section.md | | Adam off phones Day 1 |
| copy/05-process-section.md | | Fix timeline |
| copy/06-deliverables-section.md | | Fix dunning deliverable |
| copy/07-team-section.md | | Check names |
| copy/07b-why-not-commission.md | | |
| copy/08-investment-section.md | | Add no equity point |
| copy/09-faq-section.md | | Update for new pricing |
| copy/10-cta-section.md | | |
| copy/PRESENTATION-FRAMEWORK.md | | Master reference |
| dev/DEV-AGENT-PROMPT.md | | Full update needed |
| dev/OWNERS-QUIZ-SPEC.md | | |
| docs/06-PRICING-STRUCTURE.md | | Match Option B |
| site/lib/constants.ts | | |
| README.md | | |

---

## PROPOSED ORDER OF OPERATIONS

### Phase 1: Data & Names (30 min)
1. Global find/replace: Sarah → Sarah
2. Confirm Chrix spelling
3. Clarify revenue attribution questions
4. Calculate LTV projection

### Phase 2: Content Updates (1 hour)
1. Fix "Adam off phones" to Day 1
2. Fix dunning deliverable (train Jonah, not do it)
3. Add LTV/compounding projection section
4. Add "no equity/perpetuity" messaging
5. Add strategic recommendations section
6. Expand content for non-insider readability

### Phase 3: Document Cleanup (30 min)
1. Audit all files for consistency
2. Update dev agent prompt
3. Final pricing verification
4. Cross-reference all numbers

### Phase 4: Dev Handoff
1. Create final dev prompt with all updates
2. List all changes for implementation
3. Priority order for site updates

---

## QUESTIONS FOR USER

1. **Chrix spelling:** You mentioned "his name is missing an H at the end" — should it be "Chrixh" or is "Chrix" correct?

2. **Revenue from 22 shows:** Do you have the breakdown of how much revenue came specifically from the 22 appointment shows vs. email blasts/self-serve?

3. **Customer retention:** What's the average retention for the $500 coaching product? (Need for LTV calc)

4. **Strategic recommendations:** Should these be a separate section, or woven into "The Opportunity" section?

---

*Once these questions are answered, we can execute the full cleanup.*
