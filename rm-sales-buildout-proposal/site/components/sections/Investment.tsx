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
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Investment
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6">
              Prove First, Then Build
            </h2>
            <p className="text-body text-base sm:text-lg max-w-2xl mx-auto">
              No $50K leap of faith. We earn your confidence over 60 days with 
              milestone-based payments tied to real progress.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Why Upfront Payment - Honest Discussion */}
        <FadeInOnScroll delay={0.1}>
          <Card variant="default" padding="large" className="max-w-3xl mx-auto mb-12 border border-border">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-heading mb-3">
                  Why Not Commission-Only?
                </h3>
                <p className="text-body mb-4">
                  I&apos;ll be honest — here&apos;s what&apos;s missing that would make 
                  commission-only work:
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 text-body text-sm mb-4">
                  <li>• Documented systems & SOPs</li>
                  <li>• One-time offer checkout flow</li>
                  <li>• Consistent lead flow</li>
                  <li>• Booked appointments</li>
                  <li>• Defined KPIs</li>
                  <li>• Team structure</li>
                </ul>
                <p className="text-body">
                  A cold engine doesn&apos;t fire on the first crank. This will take 45-60 days 
                  to start producing consistently. I can&apos;t work that hard on hope and prayer.
                </p>
              </div>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* Two Phase Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Phase 1 - Progressive Performance */}
          <FadeInOnScroll delay={0.1}>
            <div className="h-full flex flex-col">
              {/* Progressive Payment Visual - Mobile-friendly HTML */}
              <div className="mb-4">
                <ProgressivePayment />
              </div>
              
              {/* Requirements */}
              <Card variant="default" padding="default" className="mb-4 border border-blue/30">
                <h4 className="text-sm font-medium text-heading uppercase mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue" />
                  Requirements to Earn Phase 1
                </h4>
                <div className="space-y-3">
                  {phase1Requirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <req.icon className="w-4 h-4 text-blue" />
                        <span className="text-body text-sm">{req.label}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-green font-semibold">{req.value}</span>
                        <p className="text-xs text-muted">{req.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* What You Get - Additional Details */}
              <Card variant="accent" padding="default" className="flex-1">
                <h4 className="text-sm font-medium text-body uppercase mb-4">What You Get</h4>
                <ul className="space-y-2">
                  {phase1Includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-body text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Decision Gate */}
                <div className="mt-6 pt-4 border-t border-green/30 text-center">
                  <p className="text-xs text-muted mb-1">After Phase 1</p>
                  <p className="text-sm font-medium text-heading">
                    Mutual Opt-In Decision
                  </p>
                  <p className="text-xs text-muted">
                    You decide if you want to continue. I decide if I can help.
                  </p>
                </div>
              </Card>
            </div>
          </FadeInOnScroll>

          {/* Phase 2 */}
          <FadeInOnScroll delay={0.2}>
            <Card variant="default" padding="large" className="h-full">
              <div className="text-center mb-6">
                <p className="text-blue text-sm font-medium uppercase tracking-wider mb-2">
                  Phase 2: The Buildout Sprint
                </p>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-heading mb-2 tracking-tight">
                  <span className="text-green">$</span><CountUp end={36} duration={1.5} /><span className="text-green">K</span>
                </div>
                <p className="text-muted">90 Days | Full Team Installation</p>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <h4 className="text-sm font-medium text-body uppercase mb-4">Payment Structure</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-green">$12K</p>
                    <p className="text-muted text-xs">Month 3</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-green">$12K</p>
                    <p className="text-muted text-xs">Month 4</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-green">$12K</p>
                    <p className="text-muted text-xs">Month 5</p>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-medium text-body uppercase mb-4">What You Get</h4>
              <div className="space-y-4">
                {phase2Months.map((month, index) => (
                  <div key={index}>
                    <p className="text-heading font-medium text-sm mb-1">{month.month}</p>
                    <ul className="text-muted text-xs space-y-1 pl-4">
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
          <Card variant="accent" padding="large" className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-blue mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-heading mb-6">Total Investment Summary</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left mb-6 text-sm sm:text-base">
              <div className="text-body">Phase 1 (60 days)</div>
              <div className="text-green font-semibold text-right">$16,000</div>
              <div className="text-body">Phase 2 (90 days)</div>
              <div className="text-green font-semibold text-right">$36,000</div>
              <div className="text-body">Ad spend (minimum)</div>
              <div className="text-blue font-semibold text-right">$1,500</div>
              <div className="text-heading font-bold border-t border-border pt-2">Full Engagement</div>
              <div className="text-green font-bold text-right border-t border-border pt-2">$52K + ad spend</div>
            </div>
            <p className="text-sm text-muted italic">
              Phase 1 payments tied to milestones. You pay as we deliver.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* The $20K Quota Justification */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="default" padding="large" className="max-w-3xl mx-auto mb-12 sm:mb-16 border border-green/30">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green" />
              <h3 className="text-lg sm:text-xl font-semibold text-heading">
                Why $20K in 30 Days is Reasonable
              </h3>
            </div>
            <p className="text-body mb-4 sm:mb-6 text-sm sm:text-base">
              In January, with no dedicated sales effort, GHL Mastery did{" "}
              <span className="text-green font-semibold">$2K</span> in revenue. 
              That&apos;s the baseline with Adam handling everything else.
            </p>
            <p className="text-body mb-4 sm:mb-6 text-sm sm:text-base">
              Add dedicated sales capacity + database reactivation + no-show recovery + 
              failed payment dunning, and <span className="text-green font-semibold">10x</span> that 
              number becomes the reasonable floor.
            </p>
            <div className="bg-green/10 rounded-lg p-4 text-center">
              <p className="text-heading font-semibold">
                $2K baseline → $20K target = 10x improvement
              </p>
              <p className="text-sm text-body mt-1">
                Not by doing more of the same — by doing it at all.
              </p>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* ROI Section */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-12 sm:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-heading mb-6 sm:mb-8 text-center">
              Return on Investment
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <Card variant="default" padding="default" className="text-center">
                <p className="text-muted text-xs uppercase tracking-wider mb-2">Year 1 Investment</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-body tracking-tight">
                  ~<span className="text-blue">$52K</span>
                </p>
              </Card>
              <Card variant="default" padding="default" className="text-center">
                <p className="text-muted text-xs uppercase tracking-wider mb-2">Year 1 Revenue Increase</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="text-green">$180</span>-<span className="text-green">300K</span>
                </p>
              </Card>
              <Card variant="default" padding="default" className="text-center">
                <p className="text-muted text-xs uppercase tracking-wider mb-2">Year 1 ROI</p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-green tracking-tight">3-6x</p>
              </Card>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Timeline Context */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="default" padding="large" className="max-w-3xl mx-auto mb-12 sm:mb-16 border border-border">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue" />
              <h3 className="text-lg sm:text-xl font-semibold text-heading">
                What This Unlocks
              </h3>
            </div>
            <p className="text-body mb-4 sm:mb-6 text-sm sm:text-base">
              With a dedicated sales system in place, here&apos;s what the math looks like:
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-4 sm:mb-6">
              <div>
                <p className="text-muted text-xs sm:text-sm mb-1">Conservative</p>
                <p className="text-lg sm:text-xl font-bold text-body">$15K/mo</p>
                <p className="text-green text-xs sm:text-sm">+$180K/year</p>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm mb-1">Moderate</p>
                <p className="text-lg sm:text-xl font-bold text-body">$25K/mo</p>
                <p className="text-green text-xs sm:text-sm">+$300K/year</p>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm mb-1">Aggressive</p>
                <p className="text-lg sm:text-xl font-bold text-body">$40K/mo</p>
                <p className="text-green text-xs sm:text-sm">+$480K/year</p>
              </div>
            </div>
            <p className="text-center text-body font-medium text-sm sm:text-base">
              The sooner your sales system is running, the sooner you start capturing this growth.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="accent" padding="large" className="text-center max-w-2xl mx-auto">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-4">
              <span className="text-green text-3xl sm:text-4xl md:text-5xl">$4K</span> to get started.
            </h3>
            <p className="text-body text-base sm:text-lg mb-4">
              Progressive payments mean you pay as we prove it works. 
              Low risk to start. Clear milestones to continue.
            </p>
            <p className="text-green font-semibold text-lg">
              If we hit <span className="text-2xl font-bold">$20K</span> in 30 days, 
              you know the system is working.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
