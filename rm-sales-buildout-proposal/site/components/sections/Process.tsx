"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Clock, CheckCircle, Users, FileText, TrendingUp, ArrowRight, AlertCircle, UserPlus, PhoneCall, Target } from "lucide-react";
import { INVESTMENT } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="bg-elevated py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              How It Works
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Prove first. Then build. We don&apos;t ask you to invest $40K-$55K on faith. 
              We earn your confidence in 30 days with a $5K test.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Timeline Visual */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16 p-6 bg-base rounded-xl border border-border-subtle overflow-x-auto">
            <div className="flex items-center justify-between min-w-[600px] gap-4">
              {/* Phase 1 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent-muted border-2 border-accent flex items-center justify-center mb-3">
                  <span className="text-accent font-bold text-lg">1</span>
                </div>
                <p className="font-semibold text-text-primary text-lg">Phase 1: The Proof</p>
                <p className="text-base text-text-muted">30 Days</p>
                <p className="text-base text-accent font-medium">{INVESTMENT.phase1.total.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</p>
              </div>

              {/* Decision Gate */}
              <div className="flex flex-col items-center px-4">
                <ArrowRight className="w-8 h-8 text-accent" />
                <div className="mt-2 px-3 py-1 bg-accent/10 rounded text-sm text-accent font-medium">
                  Decision Gate
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-success/10 border-2 border-success flex items-center justify-center mb-3">
                  <span className="text-success font-bold text-lg">2</span>
                </div>
                <p className="font-semibold text-text-primary text-lg">Phase 2: The Build</p>
                <p className="text-base text-text-muted">90 Days (Day 60-120)</p>
                <p className="text-base text-success font-medium">$30K - $45K</p>
              </div>

              <div className="flex flex-col items-center px-4">
                <ArrowRight className="w-8 h-8 text-text-muted" />
              </div>

              {/* Ongoing */}
              <div className="flex-1 text-center opacity-60">
                <div className="w-16 h-16 mx-auto rounded-full bg-card border-2 border-border flex items-center justify-center mb-3">
                  <span className="text-text-muted font-bold text-lg">3</span>
                </div>
                <p className="font-semibold text-text-primary text-lg">Ongoing Support</p>
                <p className="text-base text-text-muted">Optional</p>
                <p className="text-base text-text-muted">TBD</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Sales Team Hiring - NEW SECTION */}
        <FadeInOnScroll delay={0.15}>
          <div className="mb-12 p-6 md:p-8 bg-card rounded-xl border border-accent/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary">We Hire &amp; Train Your Sales Team</h3>
                <p className="text-text-muted text-base">Building from the ground up</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Starting Team */}
              <div>
                <h4 className="font-medium text-text-primary text-lg mb-4">Starting Configuration</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-base rounded-lg border border-border-subtle">
                    <div className="flex items-center gap-3 mb-2">
                      <Target className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-text-primary text-lg">1 Sales Manager</span>
                    </div>
                    <p className="text-text-muted text-base">Oversees pipeline, handles escalations, manages performance</p>
                  </div>
                  <div className="p-4 bg-base rounded-lg border border-border-subtle">
                    <div className="flex items-center gap-3 mb-2">
                      <PhoneCall className="w-5 h-5 text-success" />
                      <span className="font-semibold text-text-primary text-lg">1 Setter</span>
                    </div>
                    <p className="text-text-muted text-base">Books appointments, handles speed-to-lead, confirmation calls</p>
                  </div>
                </div>
                <p className="text-accent font-medium text-base mt-4">→ Then we build from there based on volume</p>
              </div>

              {/* The Math */}
              <div>
                <h4 className="font-medium text-text-primary text-lg mb-4">The Math (Realistic Capacity)</h4>
                <div className="p-4 bg-elevated rounded-lg border border-success/20">
                  <div className="space-y-4 text-base">
                    <div>
                      <p className="font-semibold text-text-primary">1 Closer Capacity:</p>
                      <p className="text-text-muted">4 appointments/day × 6 days/week = <span className="text-success font-bold">24 appts/week</span></p>
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">1 Setter Capacity:</p>
                      <p className="text-text-muted">4-6 appointments/day (setting 72hr to 5-day out)</p>
                      <p className="text-text-subtle text-sm mt-1">+ buffer time for confirmation calls</p>
                    </div>
                    <div className="pt-3 border-t border-border-subtle">
                      <p className="text-text-secondary">
                        <span className="text-accent font-medium">Key insight:</span> Setters need calendar buffer — they&apos;re not just dialing, they&apos;re confirming and warming up appointments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
              <p className="text-success font-semibold text-base">
                Chrix handles hiring, vetting, onboarding, and training. You just approve final candidates.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Phase 1 Details */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-12 p-6 md:p-8 bg-card rounded-xl border border-accent/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{INVESTMENT.phase1.name}</h3>
                <p className="text-text-muted text-base">{INVESTMENT.phase1.duration}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* What Happens */}
              <div>
                <h4 className="font-medium text-text-primary text-lg mb-4">What Happens</h4>
                <div className="space-y-4 text-text-secondary">
                  <div>
                    <p className="font-medium text-text-primary text-base">Week 1: Jump In</p>
                    <p className="text-base">We start working your leads immediately. No lengthy discovery phase. We learn by doing.</p>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary text-base">Week 2-4: Active Selling</p>
                    <ul className="list-disc list-inside text-text-muted space-y-1 mt-1 text-base">
                      <li>Database reactivation campaign launches</li>
                      <li>No-show recovery sequences go live</li>
                      <li>Failed payment dunning SOP created + Jonah trained</li>
                      <li>Chrix + Sarah handling inbound appointments</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary text-base">Day 30: Decision Time</p>
                    <p className="text-base">We review results. Did we hit 20 validated appointments + KPIs?</p>
                  </div>
                </div>
              </div>

              {/* The Gate */}
              <div>
                <h4 className="font-medium text-text-primary text-lg mb-4">The Gate</h4>
                <div className="p-4 bg-base rounded-lg mb-4">
                  <p className="text-accent font-semibold mb-2 text-base">20+ Validated Appointments</p>
                  <ul className="text-text-muted space-y-1 text-base">
                    <li>✓ Second milestone paid ($5K)</li>
                    <li>✓ Phase 2 is a no-brainer</li>
                    <li>✓ Momentum carries forward</li>
                  </ul>
                </div>
                <div className="p-4 bg-base rounded-lg">
                  <p className="text-warning font-semibold mb-2 text-base">Under 20 Appointments</p>
                  <ul className="text-text-muted space-y-1 text-base">
                    <li>→ Walk away with $5K invested</li>
                    <li>→ You keep all documentation</li>
                    <li>→ We have data on why</li>
                  </ul>
                </div>

                {/* Critical Note */}
                <div className="mt-4 p-4 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-success font-semibold text-base flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    CRITICAL: Adam Off Phones = DAY ONE
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Pipeline handed over immediately. Not Phase 2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Phase 2 Details */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-12 p-6 md:p-8 bg-card rounded-xl border border-success/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary">{INVESTMENT.phase2.name}</h3>
                <p className="text-text-muted text-base">{INVESTMENT.phase2.duration}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Month 1 */}
              <div className="p-4 bg-base rounded-lg">
                <h4 className="font-medium text-text-primary text-base mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-success" />
                  Month 1: Foundation
                </h4>
                <ul className="text-text-muted space-y-2 text-base">
                  <li>• Setter hired and onboarded</li>
                  <li>• Sales scripts documented</li>
                  <li>• CRM optimized for tracking</li>
                  <li>• Show-rate sequences deployed</li>
                </ul>
                <p className="text-success text-sm mt-3 font-medium">Deliverable: Setter trained + Sales Playbook v1</p>
              </div>

              {/* Month 2 */}
              <div className="p-4 bg-base rounded-lg">
                <h4 className="font-medium text-text-primary text-base mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-success" />
                  Month 2: Build
                </h4>
                <ul className="text-text-muted space-y-2 text-base">
                  <li>• Sales Manager in place</li>
                  <li>• Training program documented</li>
                  <li>• Cross-sell sequences deployed</li>
                  <li>• Team starting to hit stride</li>
                </ul>
                <p className="text-success text-sm mt-3 font-medium">Deliverable: Manager trained + Training materials</p>
              </div>

              {/* Month 3 */}
              <div className="p-4 bg-base rounded-lg">
                <h4 className="font-medium text-text-primary text-base mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Month 3: Scale &amp; Handoff
                </h4>
                <ul className="text-text-muted space-y-2 text-base">
                  <li>• Team running independently</li>
                  <li>• All SOPs documented</li>
                  <li>• Ad spend scaling</li>
                  <li>• Full handoff complete</li>
                </ul>
                <p className="text-success text-sm mt-3 font-medium">Deliverable: Full SOP docs + Team certified</p>
              </div>
            </div>

            {/* Dunning Note */}
            <div className="mt-6 p-4 bg-base rounded-lg border border-accent/20">
              <p className="text-accent font-semibold text-base">Dunning = Train Jonah</p>
              <p className="text-text-muted text-sm mt-1">
                We create SOP and train your CS person. We do NOT chase payments ourselves.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Your Involvement */}
        <FadeInOnScroll delay={0.4}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-xl border border-border-subtle">
              <h4 className="font-semibold text-text-primary text-lg mb-4">What We Need From You</h4>
              <div className="space-y-3 text-text-secondary">
                <p className="text-base"><strong className="text-text-primary">Time Investment:</strong> ~2-3 hours/week</p>
                <ul className="list-disc list-inside text-text-muted space-y-1 text-base">
                  <li>Weekly status call (30 min)</li>
                  <li>Approvals and feedback (async)</li>
                  <li>Final say on hires and major decisions</li>
                </ul>
                <p className="mt-4 text-base"><strong className="text-text-primary">Access:</strong> GHL admin, Stripe, ad accounts</p>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-success/20">
              <h4 className="font-semibold text-text-primary text-lg mb-4">What We Handle</h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start gap-2 text-base">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>All selling (Phase 1)</span>
                </li>
                <li className="flex items-start gap-2 text-base">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Recruitment and vetting</span>
                </li>
                <li className="flex items-start gap-2 text-base">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Training development</span>
                </li>
                <li className="flex items-start gap-2 text-base">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Systems building</span>
                </li>
                <li className="flex items-start gap-2 text-base">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Documentation</span>
                </li>
                <li className="flex items-start gap-2 text-base">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Project management</span>
                </li>
              </ul>
              <p className="text-accent font-medium mt-4 text-base">
                You focus on running your business. We build the sales infrastructure.
              </p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
