"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem, CountUp } from "@/components/animations";
import { RevenueGap, ROIComparison, RevenuePerShow } from "@/components/data-viz";
import { Database, Target } from "lucide-react";

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
    <Section background="base" id="opportunity">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              The Opportunity
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              What&apos;s Actually Possible
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Instead of looking at what&apos;s broken, let&apos;s look at what&apos;s working — and what
              happens when you actually build the systems to capitalize on it.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Revenue Gap Visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <RevenueGap />
            <ROIComparison />
          </div>
        </div>

        {/* Database Opportunity */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Database className="w-7 h-7 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                The Database Opportunity
              </h3>
            </div>

            {/* Revenue Per Show */}
            <div className="max-w-md mx-auto mb-8">
              <RevenuePerShow />
            </div>

            <div className="text-center mb-8">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 tracking-tight">
                <span className="text-accent"><CountUp end={10000} duration={1.5} /></span>
              </div>
              <p className="text-text-secondary text-xl font-medium">contacts sitting idle</p>
              <p className="text-text-muted text-base">People who already know you. Zero ad spend required.</p>
            </div>

            <StaggerChildren className="grid sm:grid-cols-3 gap-6">
              {databaseMath.map((item, index) => (
                <StaggerItem key={index}>
                  <Card variant="default" padding="default" className="text-center">
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-2">{item.scenario}</p>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1 tracking-tight">
                      ${item.revenue >= 100000 ? `${(item.revenue / 1000).toFixed(0)}K` : item.revenue.toLocaleString()}
                    </div>
                    <p className="text-text-muted text-sm">
                      {item.customers} customers • {item.type}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeInOnScroll delay={0.3}>
              <p className="text-center text-text-secondary text-lg mt-8">
                A single reactivation campaign could generate{" "}
                <span className="text-accent font-bold text-2xl">$50K-150K</span>.
              </p>
            </FadeInOnScroll>
          </div>
        </FadeInOnScroll>

        {/* What $100K/Month Looks Like */}
        <FadeInOnScroll>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Target className="w-7 h-7 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                What $100K/Month Looks Like
              </h3>
            </div>

            <Card variant="elevated" padding="large">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-text-secondary font-medium">Product</th>
                      <th className="text-center py-3 px-4 text-text-secondary font-medium">Sales</th>
                      <th className="text-right py-3 px-4 text-text-secondary font-medium">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productMix.map((item, index) => (
                      <tr key={index} className="border-b border-border-subtle">
                        <td className="py-3 px-4 text-text-primary">{item.product}</td>
                        <td className="py-3 px-4 text-center text-text-muted">
                          {item.sales ?? "—"}
                        </td>
                        <td className="py-3 px-4 text-right text-accent font-medium">
                          ${item.revenue.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-elevated">
                      <td className="py-4 px-4 text-text-primary font-bold">TOTAL</td>
                      <td className="py-4 px-4"></td>
                      <td className="py-4 px-4 text-right text-accent font-bold text-xl">
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
            <p className="text-accent font-semibold text-xl">
              The question is: &quot;How do we actually do it?&quot;
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
