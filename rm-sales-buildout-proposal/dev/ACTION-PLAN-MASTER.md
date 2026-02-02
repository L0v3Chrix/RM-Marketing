# Master Action Plan: GHL Mastery Proposal Revision

**Created:** February 1, 2026
**Status:** Planning Phase - No Execution Until Plan Complete

---

## SECTION 1: RAW NOTES RECORDED

### 1.1 Critical Data Architecture Issue

**Problem Identified:**
We made a grave error trying to tell the entire story with guesstimated data by combining incompatible data sources.

**The Three Data Silos:**

| Silo | Source | What It Contains | What It Proves |
|------|--------|------------------|----------------|
| **ADVERTISING** | Ad platform data | Ad spend, leads generated, CPL, tripwire sales | Marketing efficiency |
| **FINANCIAL** | Stripe CSV exports | Subscriptions, one-time sales, revenue by product | Actual money collected |
| **APPOINTMENTS** | GHL Sales Calendar | Bookings, shows, no-shows | Sales activity volume |

**Why They Don't Match:**
- Some $197 sales came from email blasts to database, NOT from appointments
- Revenue from appointments is understated (some appointments led to later purchases that show as "email sales")
- Tripwire conversions happen without appointments
- Database reactivation revenue has no appointment trail

**The Fix:**
- Present each silo independently with its own metrics
- Talk about discrepancies openly
- Make hypotheses about connections
- Stop forcing false conclusions

---

### 1.2 Payment Structure Conflict

**What's Currently on Site (from agent last night):**
```
$4K Upfront → $4K at 30 Days (320 hrs) → $8K at 60 Days
Total Phase 1: $16,000 over 60 days
```

**What We Documented Earlier Today:**
```
$4K deposit → $4K at $20K closed → 33% over $20K
Total Phase 1: ~$13,280 at $36K target (30 days)
```

**What Chrix Said in This Message:**
- $4K upfront
- $4K at 30 days based on "some kind of metric" (activity-based: "as long as we are banging phones")
- $8K at 60 days (revenue should be flowing by then)
- Cash quota for first 30 days should be $20K (justified by $2K made in January)
- Minimum 20 booked appointments per week
- $1,500 ad spend commitment during pressure test

**CLARIFICATION NEEDED:**
Which payment structure is correct?
- A) 30-day progressive ($4K + $4K @ $20K + 33% over)
- B) 60-day activity-based ($4K + $4K + $8K = $16K)

---

### 1.3 Narrative Additions Required

**"Why I'm Writing This" Section Must Include:**

1. **The Backstory:**
   - Came for podcast funnel (high-value $5K-$30K appointments)
   - Made himself available daily, requested to shadow Nick and Jonah
   - Got crickets for almost 2 weeks
   - Was NOT told this was a prospecting/cold calling position
   - Would have evaluated offer differently if he'd known
   - Reached out to Adam after 2 weeks of no appointments
   - Conversation evolved: Adam needs sales manager, Chrix qualified

2. **What I Actually Found:**
   - Podcast funnel isn't the play right now
   - GHL Mastery IS the validated offer
   - They're good at coaching even if they don't love it
   - Have clout, reputation, 10K database, full offer stack
   - Vetted dependable team (50:1 rarity among agency owners)
   - Haven't even touched their audience yet

3. **My Recommendation:**
   - Don't chase podcast unless Nick can figure it out (no bandwidth from Adam/Brendan)
   - Pack office hours → natural upsell to VA services
   - Ascension ladder: content → group → 1:1 → VA → DFY
   - Database is gold, hasn't been worked

4. **What I Actually Do:**
   - The $30K → $100K gap is my lane
   - Pay attention to numbers like life depends on it
   - Not the offer, customers, day-to-day — THE NUMBERS
   - Metrics and KPIs never lie, just need to be worked
   - This experience helped me find my offer
   - Asking to be first case study, will charge more next time
   - 3-5 of these per year = happy

5. **Why Not Commission-Only:**
   - On validated offer with booked appointments = happy to work commission
   - But this company has NONE of that:
     - No documented systems/SOPs
     - No checkout process
     - No one-time offers
     - No leads
     - No booked appointments
     - No KPIs
     - No team structure
   - Would be suicide mission
   - Will take 45-60 days to produce consistently
   - Can't work that hard on hope and prayer
   - Cold engine doesn't fire on first crank

---

### 1.4 Site Design Issues

| Issue | Current State | Required Fix |
|-------|---------------|--------------|
| Light blue boxes | Template Next.js look | Remove entirely |
| Color palette | Gold/brown/dark gray | Match GHL brand (navy, blue, green) |
| Hero section | No video | Embed Adam's YouTube video |
| Step navigation | Clicking step 1→2 lands mid-section | Fix scroll position to top of section |
| Quiz | Exists, works, could be improved | Minor refinements (lower priority) |

---

### 1.5 Data Presentation Strategy

**BEFORE (Wrong Approach):**
Trying to calculate:
- Revenue per appointment (but not all revenue comes from appointments)
- LTV:CAC (but acquisition channels are mixed)
- Cost per show (but show data doesn't match revenue data)

**AFTER (Correct Approach):**

**Silo 1: Advertising Performance**
```
Ad Spend: $1,500/90 days
Leads Generated: 238
Cost Per Lead: $6.30
Tripwire Sales: [from ads directly]
```
Conclusion: Marketing is efficient.

**Silo 2: Financial Reality**
```
Total Revenue (90 days): $43K
- VIP ($5K+): $20.5K
- High-Ticket: $16.5K
- Course Sales ($197): $6K

Revenue Sources:
- From appointments: ~$20.5K
- From nurture/self-serve/database: ~$22.5K
```
Conclusion: Multiple revenue streams, not all appointment-driven.

**Silo 3: Appointment Activity**
```
Booked: 46
Showed: 22
Show Rate: 48%
Book Rate: 19.3%
```
Conclusion: Good booking, show rate needs work.

**The Hypotheses:**
1. Low show rate is partly speed-to-lead problem
2. Revenue from appointments is understated (later purchases)
3. Database is gold (10K contacts, unworked)
4. $197 sales came from email blast, not appointments

**Benefits of Connecting Later:**
- Once systems are in place, can track attribution
- Will know exactly which revenue came from which source
- Can calculate true revenue per show
- Can optimize each channel independently

---

## SECTION 2: RESEARCH & INVESTIGATION REQUIRED

### 2.1 Data Source Verification
- [ ] Read Stripe CSV file in project folder
- [ ] Read appointment data from GHL export
- [ ] Read advertising data if available
- [ ] Document exact discrepancies between sources
- [ ] Create accurate numbers for each silo

### 2.2 Payment Structure Clarification
- [ ] Review conversation history for latest decision
- [ ] Identify which structure Chrix wants implemented
- [ ] Document final structure clearly
- [ ] Update all docs to match

### 2.3 Site Design Audit
- [ ] Screenshot current site state
- [ ] Document all template elements to remove
- [ ] Find Adam's YouTube channel video to embed
- [ ] Identify scroll behavior fix needed

### 2.4 Copy Gap Analysis
- [ ] Compare current site copy to narrative requirements
- [ ] Identify what's missing
- [ ] Draft new sections for "Why I'm Writing This"
- [ ] Draft "Why Not Commission" section

---

## SECTION 3: ORCHESTRATION PLAN

### Wave 1: Research & Documentation (Parallel)

```
┌─────────────────────────────────────────────────────────────────────┐
│  AGENT A: Data Audit          │  AGENT B: Copy Inventory           │
│  ───────────────────          │  ─────────────────────             │
│  • Read Stripe CSV            │  • Catalog current site copy       │
│  • Read appointment data      │  • Identify missing narratives     │
│  • Document discrepancies     │  • Flag incorrect payment info     │
│  • Create 3-silo breakdown    │  • List sections needing update    │
├───────────────────────────────┼─────────────────────────────────────┤
│  AGENT C: Design Audit        │  AGENT D: Structure Clarification  │
│  ───────────────────          │  ──────────────────────────────    │
│  • Document template elements │  • Compile payment structure opts  │
│  • Find YouTube video URL     │  • Create decision summary         │
│  • Note scroll behavior       │  • Prepare clarification question  │
│  • List color fixes needed    │  • Document timeline options       │
└─────────────────────────────────────────────────────────────────────┘
```

### Gate 1: User Clarification
Before proceeding, confirm with Chrix:
- Which payment structure is final?
- 30-day or 60-day Phase 1?
- Activity-based or revenue-based milestones?

### Wave 2: Content Creation (After Clarification)

```
┌─────────────────────────────────────────────────────────────────────┐
│  AGENT E: Copy Writing         │  AGENT F: Data Visualization      │
│  ─────────────────             │  ─────────────────────────        │
│  • Write "Why I'm Writing"    │  • Create 3-silo data displays    │
│  • Write "Why Not Commission" │  • Build hypothesis section       │
│  • Update payment sections    │  • Design discrepancy callouts    │
│  • Add backstory narrative    │  • Create "what we know" cards    │
├────────────────────────────────┼────────────────────────────────────┤
│  AGENT G: Dev Instructions     │  AGENT H: Graphics Creation       │
│  ──────────────────────        │  ──────────────────────           │
│  • Update DEV-AGENT-PROMPT    │  • Create 3-silo diagram          │
│  • Add design fix checklist   │  • Create data flow visual        │
│  • Add scroll behavior fix    │  • Create hypothesis cards        │
│  • Add video embed spec       │  • Create payment timeline        │
└─────────────────────────────────────────────────────────────────────┘
```

### Wave 3: Verification & QA

```
┌─────────────────────────────────────────────────────────────────────┐
│  AGENT I: Content Verification │  AGENT J: Technical Verification  │
│  ─────────────────────────     │  ───────────────────────────      │
│  • Cross-check all numbers    │  • Verify all docs updated        │
│  • Validate 3 silos accurate  │  • Check for conflicting info     │
│  • Review narrative flow      │  • Ensure dev prompt complete     │
│  • Confirm payment structure  │  • Verify graphics specs match    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 4: COMPLETION CHECKLIST

### 4.1 Data Architecture
- [ ] Advertising silo documented with accurate numbers
- [ ] Financial silo documented with Stripe data
- [ ] Appointment silo documented with GHL data
- [ ] Discrepancies identified and explained
- [ ] Hypotheses written for connections
- [ ] Benefits of future data connection documented

### 4.2 Payment Structure
- [ ] Final structure confirmed with user
- [ ] All copy files updated to match
- [ ] Dev prompt updated
- [ ] Site constants updated
- [ ] Investment component updated
- [ ] Process section updated

### 4.3 Narrative Additions
- [ ] "Why I'm Writing This" section complete
- [ ] Backstory included (podcast → GHL Mastery pivot)
- [ ] "What I Actually Do" section ($30K-$100K gap)
- [ ] "Why Not Commission" section complete
- [ ] Case study ask included

### 4.4 Design Fixes
- [ ] Light blue boxes removal documented
- [ ] Color palette fixes specified
- [ ] YouTube video embed URL identified
- [ ] Scroll behavior fix specified
- [ ] All fixes in dev prompt

### 4.5 Dev Agent Prompt
- [ ] Data silo presentation added
- [ ] Payment structure updated
- [ ] Design fixes added
- [ ] Narrative requirements added
- [ ] Verification checkpoints added
- [ ] Parallel agent instructions included

---

## SECTION 5: IMMEDIATE CLARIFICATION NEEDED

**Before any execution, need Chrix to confirm:**

### Question 1: Payment Structure
Which is correct?

**Option A: 30-Day Progressive (what we documented earlier)**
- $4K deposit
- $4K at $20K closed revenue
- 33% of revenue over $20K
- Total at $36K target: ~$13,280

**Option B: 60-Day Activity-Based (what's on current site)**
- $4K upfront
- $4K at 30 days (320 hours delivered)
- $8K at 60 days (revenue flowing)
- Total: $16,000

**Option C: Hybrid (from your latest message)**
- $4K upfront
- $4K at 30 days (activity-based)
- $8K at 60 days (revenue-based)
- $20K cash quota for first 30 days
- Minimum 20 appointments/week
- $1,500 ad spend commitment

### Question 2: Phase 1 Duration
- 30 days or 60 days?

### Question 3: Success Metric
- Activity-based (hours worked, calls made)?
- Revenue-based ($20K or $36K quota)?
- Hybrid (activity first 30, revenue by 60)?

---

## NEXT STEPS

1. **Present this plan to Chrix for review**
2. **Get clarification on payment structure questions**
3. **Once confirmed, begin Wave 1 research in parallel**
4. **Complete Gate 1 before Wave 2**
5. **Execute Wave 2 content creation**
6. **Verify with Wave 3**
7. **Deliver updated dev prompt for site build**

---

*This document will be updated as research progresses and clarifications are received.*
