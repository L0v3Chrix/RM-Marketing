"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { ProgressivePayment } from "@/components/data-viz";
import { DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle, Calendar, Target } from "lucide-react";

const phase1Requirements = [
  {
    icon: DollarSign,
    label: "Ad Spend Commitment",
    value: "$1,500",
    detail: "Minimum during pressure test",
  },
  {
    icon: Calendar,
    label: "Appointment Volume",
    value: "20/week",
    detail: "Minimum appointments booked",
  },
  {
    icon: Target,
    label: "30-Day Quota",
    value: "$20K",
    detail: "Based on $2K January baseline",
  },
];

const phase1Includes = [
  "Chrix working leads full-time for 60 days",
  "Database reactivation campaign",
  "No-show recovery sequences",
  "Failed payment dunning implementation",
  "Documentation of what works",
  "Weekly metrics reviews",
];

const phase2Months = [
  {
    month: "Month 3: Foundation",
    items: ["Setter hired and trained", "Sales scripts documented", "CRM optimized", "Show-rate sequences live"],
  },
  {
    month: "Month 4: Build",
    items: ["Closer hired and trained", "Training program documented", "Cross-sell sequences live", "Team hitting stride"],
  },
  {
    month: "Month 5: Scale & Handoff",
    items: ["Team running independently", "All SOPs documented", "Adam transitioned out of sales"],
  },
];

export function Investment() {
  return (
    <Section background="base" id="investment">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              The Investment
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Prove First, Then Build
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              No $50K leap of faith. We earn your confidence over 60 days with 
              milestone-based payments tied to real progress.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Why Upfront Payment */}
        <FadeInOnScroll delay={0.1}>
          <Card variant="elevated" padding="large" className="max-w-3xl mx-auto mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Why Not Commission-Only?
                </h3>
                <p className="text-text-secondary mb-4">
                  I&apos;ll be honest — here&apos;s what&apos;s missing that would make 
                  commission-only work:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-text-secondary text-sm mb-4">
                  <li>• Documented systems & SOPs</li>
                  <li>• One-time offer checkout flow</li>
                  <li>• Consistent lead flow</li>
                  <li>• Booked appointments</li>
                  <li>• Defined KPIs</li>
                  <li>• Team structure</li>
                </ul>
                <p className="text-text-secondary">
                  A cold engine doesn&apos;t fire on the first crank. This will take 45-60 days 
                  to start producing consistently. I can&apos;t work that hard on hope and prayer.
                </p>
              </div>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* Two Phase Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Phase 1 */}
          <FadeInOnScroll delay={0.1}>
            <div className="h-full flex flex-col">
              <div className="mb-4">
                <ProgressivePayment />
              </div>
              
              {/* Requirements */}
              <Card variant="default" padding="default" className="mb-4 border-accent/30">
                <h4 className="text-sm font-medium text-text-primary uppercase mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-accent" />
                  Requirements to Earn Phase 1
                </h4>
                <div className="space-y-3">
                  {phase1Requirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <req.icon className="w-4 h-4 text-accent" />
                        <span className="text-text-secondary text-sm">{req.label}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-accent font-semibold">{req.value}</span>
                        <p className="text-xs text-text-muted">{req.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* What You Get */}
              <Card variant="accent" padding="default" className="flex-1">
                <h4 className="text-sm font-medium text-text-secondary uppercase mb-4">What You Get</h4>
                <ul className="space-y-2">
                  {phase1Includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Decision Gate */}
                <div className="mt-6 pt-4 border-t border-accent/20 text-center">
                  <p className="text-xs text-text-muted mb-1">After Phase 1</p>
                  <p className="text-sm font-medium text-text-primary">
                    Mutual Opt-In Decision
                  </p>
                  <p className="text-xs text-text-muted">
                    You decide if you want to continue. I decide if I can help.
                  </p>
                </div>
              </Card>
            </div>
          </FadeInOnScroll>

          {/* Phase 2 */}
          <FadeInOnScroll delay={0.2}>
            <Card variant="elevated" padding="large" className="h-full">
              <div className="text-center mb-6">
                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-2">
                  Phase 2: The Buildout Sprint
                </p>
                <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary mb-2 tracking-tight">
                  <span className="text-accent">$</span><CountUp end={36} duration={1.5} /><span className="text-accent">K</span>
                </div>
                <p className="text-text-muted text-sm sm:text-base">90 Days | Full Team Installation</p>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <h4 className="text-sm font-medium text-text-secondary uppercase mb-4">Payment Structure</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xl font-bold text-accent">$12K</p>
                    <p className="text-text-muted text-xs">Month 3</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-accent">$12K</p>
                    <p className="text-text-muted text-xs">Month 4</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-accent">$12K</p>
                    <p className="text-text-muted text-xs">Month 5</p>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-medium text-text-secondary uppercase mb-4">What You Get</h4>
              <div className="space-y-4">
                {phase2Months.map((month, index) => (
                  <div key={index}>
                    <p className="text-text-primary font-medium text-sm mb-1">{month.month}</p>
                    <ul className="text-text-muted text-xs space-y-1 pl-4">
                      {month.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </FadeInOnScroll>
        </div>

        {/* Total Investment */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="accent" padding="large" className="text-center mb-16 max-w-2xl mx-auto">
            <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-6">Total Investment Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-left mb-6">
              <div className="text-text-secondary">Phase 1 (60 days)</div>
              <div className="text-accent font-semibold text-right">$16,000</div>
              <div className="text-text-secondary">Phase 2 (90 days)</div>
              <div className="text-accent font-semibold text-right">$36,000</div>
              <div className="text-text-secondary">Ad spend (minimum)</div>
              <div className="text-text-secondary font-semibold text-right">$1,500</div>
              <div className="text-text-primary font-bold border-t border-border pt-2">Full Engagement</div>
              <div className="text-accent font-bold text-right border-t border-border pt-2">$52K + ad spend</div>
            </div>
            <p className="text-sm text-text-muted italic">
              Phase 1 payments tied to milestones. You pay as we deliver.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* $20K Quota Justification */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="elevated" padding="large" className="max-w-3xl mx-auto mb-16 border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">
                Why $20K in 30 Days is Reasonable
              </h3>
            </div>
            <p className="text-text-secondary mb-6">
              In January, with no dedicated sales effort, GHL Mastery did{" "}
              <span className="text-accent font-semibold">$2K</span> in revenue. 
              That&apos;s the baseline with Adam handling everything else.
            </p>
            <p className="text-text-secondary mb-6">
              Add dedicated sales capacity + database reactivation + no-show recovery + 
              failed payment dunning, and <span className="text-accent font-semibold">10x</span> that 
              number becomes the reasonable floor.
            </p>
            <div className="bg-accent/10 rounded-lg p-4 text-center">
              <p className="text-text-primary font-semibold">
                $2K baseline → $20K target = 10x improvement
              </p>
              <p className="text-sm text-text-secondary mt-1">
                Not by doing more of the same — by doing it at all.
              </p>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* ROI Section */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-text-primary mb-6 sm:mb-8 text-center">
              Return on Investment
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
              <Card variant="default" padding="default" className="text-center p-3 sm:p-4">
                <p className="text-text-muted text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">Year 1 Investment</p>
                <p className="text-xl sm:text-3xl md:text-5xl font-bold text-text-secondary tracking-tight">
                  ~<span className="text-accent">$52K</span>
                </p>
              </Card>
              <Card variant="default" padding="default" className="text-center p-3 sm:p-4">
                <p className="text-text-muted text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">Year 1 Revenue Increase</p>
                <p className="text-lg sm:text-2xl md:text-4xl font-bold tracking-tight">
                  <span className="text-accent">$180</span>-<span className="text-accent">300K</span>
                </p>
              </Card>
              <Card variant="default" padding="default" className="text-center p-3 sm:p-4">
                <p className="text-text-muted text-[10px] sm:text-xs uppercase tracking-wider mb-1 sm:mb-2">Year 1 ROI</p>
                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-accent tracking-tight">3-6x</p>
              </Card>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Timeline Context */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="elevated" padding="large" className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">
                What This Unlocks
              </h3>
            </div>
            <p className="text-text-secondary mb-6">
              With a dedicated sales system in place, here&apos;s what the math looks like:
            </p>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div>
                <p className="text-text-muted text-sm mb-1">Conservative</p>
                <p className="text-xl font-bold text-text-secondary">$15K/mo</p>
                <p className="text-accent text-sm">+$180K/year</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Moderate</p>
                <p className="text-xl font-bold text-text-secondary">$25K/mo</p>
                <p className="text-accent text-sm">+$300K/year</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Aggressive</p>
                <p className="text-xl font-bold text-text-secondary">$40K/mo</p>
                <p className="text-accent text-sm">+$480K/year</p>
              </div>
            </div>
            <p className="text-center text-text-secondary font-medium">
              The sooner your sales system is running, the sooner you start capturing this growth.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="accent" padding="large" className="text-center max-w-2xl mx-auto">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-3 sm:mb-4">
              <span className="text-accent text-3xl sm:text-4xl md:text-5xl">$4K</span> to get started.
            </h3>
            <p className="text-text-secondary text-sm sm:text-lg mb-3 sm:mb-4">
              Progressive payments mean you pay as we prove it works. 
              Low risk to start. Clear milestones to continue.
            </p>
            <p className="text-accent font-semibold text-sm sm:text-lg">
              If we hit <span className="text-xl sm:text-2xl font-bold">$20K</span> in 30 days, 
              you know the system is working.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
