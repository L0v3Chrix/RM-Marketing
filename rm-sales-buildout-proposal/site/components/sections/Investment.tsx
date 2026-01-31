"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { ProgressivePayment } from "@/components/data-viz";
import { DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";

const phase1Includes = [
  "Chrix + Sarah working leads full-time for 30 days",
  "Database reactivation campaign",
  "No-show recovery sequences",
  "Failed payment dunning implementation",
  "Documentation of what works",
  "Target: $36K closed revenue",
];

const phase2Months = [
  {
    month: "Month 1: Foundation",
    items: ["Setter hired and trained", "Sales scripts documented", "CRM optimized", "Show-rate sequences live"],
  },
  {
    month: "Month 2: Build",
    items: ["Closer hired and trained", "Training program documented", "Cross-sell sequences live", "Team hitting stride"],
  },
  {
    month: "Month 3: Scale & Handoff",
    items: ["Team running independently", "All SOPs documented", "Adam transitioned out of sales"],
  },
];

export function Investment() {
  // Calculate example Phase 1 total at $36K target
  const targetRevenue = 36000;
  const deposit = 4000;
  const milestone = 4000;
  const performanceBonus = (targetRevenue - 20000) * 0.33;
  const phase1Total = deposit + milestone + performanceBonus;

  return (
    <Section background="white" id="investment">
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
              We don&apos;t ask you to invest $50K on faith. We earn your confidence in 30 days with progressive, performance-based pricing.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Two Phase Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Phase 1 - Progressive Performance */}
          <FadeInOnScroll delay={0.1}>
            <div className="h-full flex flex-col">
              <ProgressivePayment
                deposit={4000}
                milestone={4000}
                milestoneThreshold={20000}
                bonusPercent={33}
                targetRevenue={36000}
              />
              
              {/* What You Get - Additional Details */}
              <Card variant="highlight" padding="default" className="mt-4 flex-1">
                <h4 className="text-sm font-medium text-body uppercase mb-4">What You Get</h4>
                <ul className="space-y-2">
                  {phase1Includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-body text-sm">
                      <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
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
                    You decide if you want to continue. We decide if we can help.
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
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading mb-2">
                  $<CountUp end={36000} duration={1.5} />
                </div>
                <p className="text-muted">90 Days | Full Team Installation</p>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <h4 className="text-sm font-medium text-body uppercase mb-4">Payment Structure</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-green">$12K</p>
                    <p className="text-muted text-xs">Month 1</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-green">$12K</p>
                    <p className="text-muted text-xs">Month 2</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-green">$12K</p>
                    <p className="text-muted text-xs">Month 3</p>
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
          <Card variant="opportunity" padding="large" className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-blue mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-heading mb-6">Total Investment Summary</h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left mb-6 text-sm sm:text-base">
              <div className="text-body">Phase 1 (Progressive)</div>
              <div className="text-green font-semibold text-right">$4K + $4K @ $20K + 33%</div>
              <div className="text-body">Phase 2 (Buildout)</div>
              <div className="text-green font-semibold text-right">$36,000</div>
              <div className="text-heading font-bold border-t border-border pt-2">Main Engagement</div>
              <div className="text-green font-bold text-right border-t border-border pt-2">~$49K+</div>
            </div>
            <p className="text-sm text-muted italic">Phase 1 is performance-based. You pay for results.</p>
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
                <p className="text-muted text-sm mb-2">Year 1 Investment</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-body">~$50K</p>
              </Card>
              <Card variant="default" padding="default" className="text-center">
                <p className="text-muted text-sm mb-2">Year 1 Revenue Increase</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green">$230-380K</p>
              </Card>
              <Card variant="default" padding="default" className="text-center">
                <p className="text-muted text-sm mb-2">Year 1 ROI</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green">5-8x</p>
              </Card>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Opportunity Cost */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="problem" padding="large" className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-red" />
              <h3 className="text-lg sm:text-xl font-semibold text-heading">
                The Cost of Waiting
              </h3>
            </div>
            <p className="text-body mb-4 sm:mb-6 text-sm sm:text-base">
              Every month without a dedicated sales team is revenue you&apos;ll never get back:
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center mb-4 sm:mb-6">
              <div>
                <p className="text-muted text-xs sm:text-sm mb-1">Conservative</p>
                <p className="text-lg sm:text-xl font-bold text-body">$15K/mo</p>
                <p className="text-red text-xs sm:text-sm">$180K/year</p>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm mb-1">Moderate</p>
                <p className="text-lg sm:text-xl font-bold text-body">$25K/mo</p>
                <p className="text-red text-xs sm:text-sm">$300K/year</p>
              </div>
              <div>
                <p className="text-muted text-xs sm:text-sm mb-1">Aggressive</p>
                <p className="text-lg sm:text-xl font-bold text-body">$40K/mo</p>
                <p className="text-red text-xs sm:text-sm">$480K/year</p>
              </div>
            </div>
            <p className="text-center text-red font-semibold text-sm sm:text-base">
              If you wait 6 months, that&apos;s $90,000-240,000 you&apos;ll never get back.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="highlight" padding="large" className="text-center max-w-2xl mx-auto">
            <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-green mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading mb-4">
              $4,000 to find out if this works.
            </h3>
            <p className="text-body text-base sm:text-lg mb-4">
              Performance-based pricing means we only win when you win. Low risk for you. High reward if it works.
            </p>
            <p className="text-green font-medium italic">
              If we hit $20K, you know it&apos;s working. Continue and scale.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
