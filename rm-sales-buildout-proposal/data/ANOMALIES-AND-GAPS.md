# Data Anomalies, Discrepancies & Assumptions

## The Investigation Arc

**Started:** "What's my commission opportunity as sales manager?"
**Discovered:** The funnel performs at 4-6x industry benchmarks — it's not broken, it's constrained
**Evolved:** "This is better positioned as a consulting engagement"
**Now:** "Prove value with 30-day trial before committing to full buildout"

---

## Known Data Discrepancies

### 1. Appointment Count Mismatch
| Source | Number | Notes |
|--------|--------|-------|
| GHL "Contacts by Source" | 17 | Only shows "Appointment" tagged contacts |
| GHL Sales Calendar | 46 | Actual appointments booked |
| **Resolution:** | 46 is correct | Calendar is authoritative source |

### 2. Tripwire Attribution Split
| Source | Count | Notes |
|--------|-------|-------|
| Initial assumption | 117 from ads | Wrong — mixed sources |
| Actual from ads | 33 | 14% conversion rate |
| Database campaign | 84 | Separate reactivation effort |
| **Impact:** | Tripwire conversion dropped from 49% to 14% |

### 3. New Sales vs Shows Math
| Metric | Value | Problem |
|--------|-------|---------|
| New sales ($197+) | 54 | From Stripe analysis |
| Shows | 22 | From calendar |
| Implied close rate | 245% | Impossible |
| **Resolution:** | Many sales come from nurture/self-serve, not calls |

### 4. subscriptions.csv Misinterpretation
| Initial Read | Correction |
|--------------|------------|
| Assumed: Total active MRR | Actual: NEW subscriptions in 90 days only |
| Impact: Early MRR calculations were wrong | Recalculated from payment patterns |

---

## Unconfirmed Assumptions

### Ad Spend (CRITICAL)
- **Assumed:** $1,500 over 90 days (~$500/month)
- **Source:** Estimate based on CPL math
- **Impact:** All CAC and ROI calculations depend on this
- **Need:** Actual ad spend confirmation from Adam

### Close Rate (CRITICAL)
- **Assumed:** 50-77% likely range
- **Source:** Inference from sales data
- **Known:** 4 VIP $5K sales definitely from calls (18% floor)
- **Need:** "Of 22 shows, how many purchased $497+?"

### Show Rate Baseline
- **Calculated:** 48% (22/46) or 59% (22/37 excl cancelled)
- **Question:** Is 9 cancellations normal or high?
- **Unknown:** Were cancellations rescheduled?

### Revenue Attribution
- **Known:** 54 new customers made first purchase $197+
- **Unknown:** Which came from calls vs nurture vs self-serve
- **Assumption:** VIP $5K = calls, $197 course = self-serve, $497-$650 = mixed

---

## Data We Don't Have

### Critical Gaps
1. **Actual monthly ad spend** — affects all unit economics
2. **Close rate by product** — VIP vs VA vs Coaching
3. **Churn rate by tier** — affects LTV accuracy
4. **Total active customer count** — only have 90-day activity
5. **Sales call recordings** — can't assess current approach

### Nice to Have
6. Upgrade path data (Course → Coaching → VA %)
7. Time-to-close by product tier
8. Lead quality by source
9. Historical data beyond 90 days
10. Attribution for 150 "N/A" source contacts

---

## Assumptions in the Proposal

| Assumption | Basis | Risk if Wrong |
|------------|-------|---------------|
| $1,500 ad spend | CPL back-calculation | CAC/ROI off by 2-5x |
| 50-77% close rate | Inference from revenue | Capacity projections wrong |
| $3,600 blended LTV | Payment pattern analysis | ROI projections off |
| 8-month average retention | Industry + payment data | LTV could be higher/lower |
| $100K/month target | Industry scaling patterns | May be too aggressive/conservative |

---

## The Commission Question (Original Investigation)

### Initial Framing
> "If I take this sales manager role, what's my realistic commission?"

### What We Found
- $197 course: 30% commission = $59/sale (one-time)
- Coaching $297-$497: Likely 10-20% = $30-$100/sale
- VIP $5K: Unknown split
- VA Program: Not commission-based (different structure)

### Why Consulting Makes More Sense
1. **Volume too low for pure commission** — 22 shows in 90 days = ~7/month
2. **Adam wants to exit sales entirely** — not just get help
3. **Systems need building** — can't just "plug in" a closer
4. **Risk/reward imbalance** — doing full buildout for uncertain commission

### The Pivot
Commission model: ~$500-2,000/month realistic
Consulting model: $8K for proof, $60K+ for buildout
**10-30x better economics for same work**

---

## Red Flags / Concerns

### Operational
1. **Failed payments: $25,870** — No dunning sequence exists
2. **Database dormant: 10,000 contacts** — Untapped but unknown quality
3. **No sales team: 0 FTEs** — Adam doing everything
4. **No CRM SOPs** — Tribal knowledge only

### Financial
1. **Legacy VA pricing ($650) vs new ($900)** — 10 customers at old rate = $2,500/mo delta
2. **Failed payment ratio: 23%** of transaction attempts failed
3. **Churn unknown** — LTV could be overstated

### Strategic
1. **Adam's bandwidth** — Will he actually hand off or micromanage?
2. **Brendan's role** — Co-founder involvement unclear
3. **Growth ceiling** — Is $100K/month realistic for this niche?

---

## What We're Confident About

| Metric | Confidence | Source |
|--------|------------|--------|
| 238 leads from ads | ✅ High | GHL Dashboard |
| 46 appointments booked | ✅ High | GHL Calendar (Adam confirmed) |
| 22 showed | ✅ High | GHL Dashboard |
| 19.3% lead-to-appointment | ✅ High | 46/238 |
| $6.30 CPL | ⚠️ Medium | Depends on ad spend assumption |
| 54 new customers | ✅ High | Stripe first-purchase analysis |
| $43K new customer revenue | ✅ High | Stripe data |
| $109K total 90-day revenue | ✅ High | Stripe paid transactions |
| $25.8K failed payments | ✅ High | Stripe failed transactions |

---

## Summary: State of the Data

**Strong Foundation:**
- Revenue data from Stripe is solid
- Funnel metrics are directionally correct
- Industry benchmarks are well-sourced

**Known Unknowns:**
- Close rate (need Adam to confirm)
- Ad spend (need Adam to confirm)
- Churn by tier (affects LTV)

**The Story Holds:**
Even with conservative assumptions, the business is performing well above benchmarks. The constraint is capacity, not funnel performance. The opportunity is real — we just need to confirm a few numbers to nail down the exact projections.
