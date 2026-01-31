"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem, CountUp } from "@/components/animations";
import { TrendingUp, Database, DollarSign, Target } from "lucide-react";

const revenueProjection = {
  current: 36000,
  target: 100000,
  gap: 64000,
  annualGap: 780000,
};

const databaseMath = [
  { scenario: "0.5% to coaching", customers: 50, revenue: 25000, type: "MRR" },
  { scenario: "1% to $197 course", customers: 100, revenue: 19700, type: "One-time" },
  { scenario: "0.2% to $5K build", customers: 20, revenue: 100000, type: "One-time" },
];

const productMix = [
  { product: "Coaching ($500/mo)", sales: 30, revenue: 15000 },
  { product: "VA Services ($900/mo)", sales: 15, revenue: 13500 },
  { product: "AOF Course ($197)", sales: 40, revenue: 7880 },
  { product: "Custom Builds ($3K avg)", sales: 12, revenue: 36000 },
  { product: "Renewals/MRR", sales: null, revenue: 27620 },
];

export function Opportunity() {
  return (
    <Section background="navy" id="opportunity">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              The Opportunity
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              What&apos;s Actually Possible
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Instead of looking at what&apos;s broken, let&apos;s look at what&apos;s working — and what
              happens when you actually build the systems to capitalize on it.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Revenue Gap Visualization */}
        <FadeInOnScroll delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Current vs Target Cards */}
            <Card variant="default" padding="large">
              <div className="text-center">
                <p className="text-text-muted text-sm uppercase tracking-wider mb-2">Current State</p>
                <div className="text-4xl md:text-5xl font-bold text-text-muted mb-2">
                  $<CountUp end={revenueProjection.current} duration={1.5} /><span className="text-2xl">/mo</span>
                </div>
                <p className="text-text-tertiary">Monthly Revenue</p>
              </div>
            </Card>

            <Card variant="highlight" padding="large">
              <div className="text-center">
                <p className="text-accent-green text-sm uppercase tracking-wider mb-2">Target State</p>
                <div className="text-4xl md:text-5xl font-bold text-accent-green mb-2">
                  $<CountUp end={revenueProjection.target} duration={1.5} /><span className="text-2xl">/mo</span>
                </div>
                <p className="text-text-secondary">Monthly Revenue</p>
              </div>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* The Gap Callout */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="opportunity" padding="large" className="text-center mb-16">
            <DollarSign className="w-12 h-12 text-gold mx-auto mb-4" />
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold mb-4">
              $<CountUp end={revenueProjection.annualGap} duration={2} /><span className="text-3xl">/year</span>
            </div>
            <p className="text-text-secondary text-xl mb-2">
              The cost of staying constrained
            </p>
            <p className="text-text-muted">
              ${(revenueProjection.gap).toLocaleString()}/month × 12 months = The opportunity you&apos;re leaving on the table
            </p>
          </Card>
        </FadeInOnScroll>

        {/* Database Opportunity */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Database className="w-8 h-8 text-gold" />
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                The Database Opportunity
              </h3>
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
                <CountUp end={10000} duration={1.5} />
              </div>
              <p className="text-text-secondary text-lg">contacts sitting idle</p>
              <p className="text-text-muted">People who already know you. Zero ad spend required.</p>
            </div>

            <StaggerChildren className="grid md:grid-cols-3 gap-6">
              {databaseMath.map((item, index) => (
                <StaggerItem key={index}>
                  <Card variant="default" padding="default" className="text-center">
                    <p className="text-text-muted text-sm mb-2">{item.scenario}</p>
                    <div className="text-2xl md:text-3xl font-bold text-accent-green mb-1">
                      ${item.revenue.toLocaleString()}
                    </div>
                    <p className="text-text-tertiary text-sm">
                      {item.customers} customers • {item.type}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeInOnScroll delay={0.3}>
              <p className="text-center text-text-secondary text-lg mt-8">
                A single reactivation campaign could generate{" "}
                <span className="text-gold font-semibold">$50,000-150,000</span>.
              </p>
            </FadeInOnScroll>
          </div>
        </FadeInOnScroll>

        {/* What $100K/Month Looks Like */}
        <FadeInOnScroll>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Target className="w-8 h-8 text-gold" />
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                What $100K/Month Looks Like
              </h3>
            </div>

            <Card variant="default" padding="large">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      <th className="text-left py-3 px-4 text-text-secondary font-medium">Product</th>
                      <th className="text-center py-3 px-4 text-text-secondary font-medium">Sales</th>
                      <th className="text-right py-3 px-4 text-text-secondary font-medium">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productMix.map((item, index) => (
                      <tr key={index} className="border-b border-border-subtle/50">
                        <td className="py-3 px-4 text-text-primary">{item.product}</td>
                        <td className="py-3 px-4 text-center text-text-muted">
                          {item.sales ?? "—"}
                        </td>
                        <td className="py-3 px-4 text-right text-accent-green font-medium">
                          ${item.revenue.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-navy-light">
                      <td className="py-4 px-4 text-text-primary font-bold">TOTAL</td>
                      <td className="py-4 px-4"></td>
                      <td className="py-4 px-4 text-right text-gold font-bold text-xl">
                        $100,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-text-muted text-sm mt-4 text-center">
                This isn&apos;t fantasy. This is math based on your current products and proven conversion
                rates — just with a real sales system behind them.
              </p>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Transition */}
        <FadeInOnScroll delay={0.2}>
          <div className="text-center mt-16">
            <p className="text-text-secondary text-lg mb-4">
              The question isn&apos;t &quot;Is this possible?&quot; The numbers prove it is.
            </p>
            <p className="text-gold font-semibold text-xl">
              The question is: &quot;How do we actually do it?&quot;
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
