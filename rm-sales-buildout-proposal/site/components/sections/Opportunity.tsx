"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem, CountUp } from "@/components/animations";
import { RevenueGapChart } from "@/components/data-viz";
import { Database, Target } from "lucide-react";

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
    <Section background="white" id="opportunity">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Opportunity
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6">
              What&apos;s Actually Possible
            </h2>
            <p className="text-body text-base sm:text-lg max-w-2xl mx-auto">
              Instead of looking at what&apos;s broken, let&apos;s look at what&apos;s working — and what
              happens when you actually build the systems to capitalize on it.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Revenue Gap Visualization */}
        <FadeInOnScroll delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <RevenueGapChart
              currentRevenue={revenueProjection.current}
              targetRevenue={revenueProjection.target}
              label="Monthly Revenue"
            />
          </div>
        </FadeInOnScroll>

        {/* Database Opportunity */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <Database className="w-6 h-6 sm:w-8 sm:h-8 text-blue" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading">
                The Database Opportunity
              </h3>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-green mb-2">
                <CountUp end={10000} duration={1.5} />
              </div>
              <p className="text-body text-base sm:text-lg">contacts sitting idle</p>
              <p className="text-muted text-sm sm:text-base">People who already know you. Zero ad spend required.</p>
            </div>

            <StaggerChildren className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {databaseMath.map((item, index) => (
                <StaggerItem key={index}>
                  <Card variant="default" padding="default" className="text-center">
                    <p className="text-muted text-sm mb-2">{item.scenario}</p>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green mb-1">
                      ${item.revenue.toLocaleString()}
                    </div>
                    <p className="text-muted text-sm">
                      {item.customers} customers • {item.type}
                    </p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <FadeInOnScroll delay={0.3}>
              <p className="text-center text-body text-base sm:text-lg mt-6 sm:mt-8">
                A single reactivation campaign could generate{" "}
                <span className="text-green font-semibold">$50,000-150,000</span>.
              </p>
            </FadeInOnScroll>
          </div>
        </FadeInOnScroll>

        {/* What $100K/Month Looks Like */}
        <FadeInOnScroll>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-heading">
                What $100K/Month Looks Like
              </h3>
            </div>

            <Card variant="default" padding="large">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 sm:px-4 text-body font-medium text-sm sm:text-base">Product</th>
                      <th className="text-center py-3 px-2 sm:px-4 text-body font-medium text-sm sm:text-base">Sales</th>
                      <th className="text-right py-3 px-2 sm:px-4 text-body font-medium text-sm sm:text-base">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productMix.map((item, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 px-2 sm:px-4 text-heading text-sm sm:text-base">{item.product}</td>
                        <td className="py-3 px-2 sm:px-4 text-center text-muted text-sm sm:text-base">
                          {item.sales ?? "—"}
                        </td>
                        <td className="py-3 px-2 sm:px-4 text-right text-green font-medium text-sm sm:text-base">
                          ${item.revenue.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-light">
                      <td className="py-4 px-2 sm:px-4 text-heading font-bold">TOTAL</td>
                      <td className="py-4 px-2 sm:px-4"></td>
                      <td className="py-4 px-2 sm:px-4 text-right text-green font-bold text-lg sm:text-xl">
                        $100,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted text-xs sm:text-sm mt-4 text-center">
                This isn&apos;t fantasy. This is math based on your current products and proven conversion
                rates — just with a real sales system behind them.
              </p>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Transition */}
        <FadeInOnScroll delay={0.2}>
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-body text-base sm:text-lg mb-4">
              The question isn&apos;t &quot;Is this possible?&quot; The numbers prove it is.
            </p>
            <p className="text-green font-semibold text-lg sm:text-xl">
              The question is: &quot;How do we actually do it?&quot;
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
