"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { INVESTMENT } from "@/lib/constants";
import { DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";

const phase1Includes = [
  "Chrix + Sara working leads full-time for 30 days",
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

const roiComparison = [
  { label: "Year 1 Investment", value: "$60,000", color: "text-text-muted" },
  { label: "Year 1 Revenue Increase", value: "$230-380K", color: "text-accent-green" },
  { label: "Year 1 ROI", value: "4-6x", color: "text-gold" },
];

export function Investment() {
  return (
    <Section background="navy" id="investment">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              The Investment
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Prove First, Then Build
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We don&apos;t ask you to invest $44,000 on faith. We earn your confidence in 30 days.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Two Phase Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Phase 1 */}
          <FadeInOnScroll delay={0.1}>
            <Card variant="highlight" padding="large" className="h-full">
              <div className="text-center mb-6">
                <p className="text-accent-green text-sm font-medium uppercase tracking-wider mb-2">
                  Phase 1: The Pressure Test
                </p>
                <div className="text-5xl md:text-6xl font-bold text-text-primary mb-2">
                  $<CountUp end={8000} duration={1.5} />
                </div>
                <p className="text-text-muted">30 Days | Chrix + Sara Selling</p>
              </div>

              <div className="border-t border-accent-green/30 pt-6 mb-6">
                <h4 className="text-sm font-medium text-text-secondary uppercase mb-4">Payment Structure</h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gold">$4,000</p>
                    <p className="text-text-muted text-sm">Deposit (to start)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gold">$4,000</p>
                    <p className="text-text-muted text-sm">Day 30 (if quota hit)</p>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-medium text-text-secondary uppercase mb-4">What You Get</h4>
              <ul className="space-y-2">
                {phase1Includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
                    <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInOnScroll>

          {/* Phase 2 */}
          <FadeInOnScroll delay={0.2}>
            <Card variant="default" padding="large" className="h-full">
              <div className="text-center mb-6">
                <p className="text-gold text-sm font-medium uppercase tracking-wider mb-2">
                  Phase 2: The Buildout Sprint
                </p>
                <div className="text-5xl md:text-6xl font-bold text-text-primary mb-2">
                  $<CountUp end={36000} duration={1.5} />
                </div>
                <p className="text-text-muted">90 Days | Full Team Installation</p>
              </div>

              <div className="border-t border-border-subtle pt-6 mb-6">
                <h4 className="text-sm font-medium text-text-secondary uppercase mb-4">Payment Structure</h4>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xl font-bold text-gold">$12K</p>
                    <p className="text-text-muted text-xs">March</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gold">$12K</p>
                    <p className="text-text-muted text-xs">April</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gold">$12K</p>
                    <p className="text-text-muted text-xs">May</p>
                  </div>
                </div>
                <p className="text-text-tertiary text-xs text-center mt-2">+ Commission starting Day 45</p>
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
          <Card variant="opportunity" padding="large" className="text-center mb-16 max-w-2xl mx-auto">
            <DollarSign className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-6">Total Investment Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-left mb-6">
              <div className="text-text-secondary">Phase 1 (Pressure Test)</div>
              <div className="text-gold font-semibold text-right">$8,000</div>
              <div className="text-text-secondary">Phase 2 (Buildout)</div>
              <div className="text-gold font-semibold text-right">$36,000</div>
              <div className="text-text-primary font-bold border-t border-border-subtle pt-2">Main Engagement</div>
              <div className="text-gold font-bold text-right border-t border-border-subtle pt-2">$44,000</div>
              <div className="text-text-muted">Ongoing Support (est.)</div>
              <div className="text-text-secondary text-right">$14-21K</div>
              <div className="text-text-muted">Commission</div>
              <div className="text-text-secondary text-right">Variable</div>
              <div className="text-text-primary font-bold border-t border-border-subtle pt-2">Full Year (Est.)</div>
              <div className="text-gold font-bold text-right border-t border-border-subtle pt-2">$58-65K</div>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* ROI Section */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-8 text-center">
              Return on Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {roiComparison.map((item, index) => (
                <Card key={index} variant="default" padding="default" className="text-center">
                  <p className="text-text-muted text-sm mb-2">{item.label}</p>
                  <p className={`text-3xl md:text-4xl font-bold ${item.color}`}>{item.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Opportunity Cost */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="default" padding="large" className="max-w-3xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-accent-red" />
              <h3 className="text-xl font-semibold text-text-primary">
                The Cost of Waiting
              </h3>
            </div>
            <p className="text-text-secondary mb-6">
              Every month without a dedicated sales team is revenue you&apos;ll never get back:
            </p>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div>
                <p className="text-text-muted text-sm mb-1">Conservative</p>
                <p className="text-xl font-bold text-text-secondary">$15K/mo</p>
                <p className="text-accent-red text-sm">$180K/year</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Moderate</p>
                <p className="text-xl font-bold text-text-secondary">$25K/mo</p>
                <p className="text-accent-red text-sm">$300K/year</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Aggressive</p>
                <p className="text-xl font-bold text-text-secondary">$40K/mo</p>
                <p className="text-accent-red text-sm">$480K/year</p>
              </div>
            </div>
            <p className="text-center text-gold font-semibold">
              If you wait 6 months, that&apos;s $90,000-240,000 you&apos;ll never get back.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="highlight" padding="large" className="text-center max-w-2xl mx-auto">
            <TrendingUp className="w-10 h-10 text-accent-green mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              $4,000 to find out if this works.
            </h3>
            <p className="text-text-secondary text-lg mb-4">
              30 days to prove it. Low risk for you. High reward if it works.
            </p>
            <p className="text-gold font-medium italic">
              No-brainer to continue.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
