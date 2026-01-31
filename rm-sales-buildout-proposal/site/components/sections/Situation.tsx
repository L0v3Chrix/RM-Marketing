"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { IndustryBenchmarks } from "@/components/data-viz";
import { AlertCircle, Users, Database, TrendingDown, CreditCard } from "lucide-react";

const constraints = [
  {
    issue: "Capacity, Not Conversion",
    description: "238 leads in 90 days. 46 appointments booked. Handled by Adam when he has time.",
    detail: "There's no dedicated team working the leads. No setters making calls. No systematic follow-up.",
    icon: Users,
  },
  {
    issue: "Show Rate: Optimization Opportunity",
    description: "59% current show rate. Industry benchmark with proper sequences: 70-80%.",
    detail: "This isn't a crisis — it's a known optimization. Proven playbook. Just needs implementation.",
    icon: TrendingDown,
  },
  {
    issue: "The Database: Untapped Asset",
    description: "10,000 contacts sitting in your CRM. People who already know you.",
    detail: '"Apart from the podcast stuff, we haven\'t marketed for our own leads much at all."',
    icon: Database,
  },
  {
    issue: "Failed Payments: Easy Recovery",
    description: "$25,870 in failed payments over 90 days. Money people tried to pay you.",
    detail: "Standard recovery rate with dunning sequences: 65-75%. That's $16-19K recoverable with automation.",
    icon: CreditCard,
  },
];

export function Situation() {
  return (
    <Section background="navy-gradient" id="situation">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              Where You Are Today
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              You&apos;re Not Broken. You&apos;re Bottlenecked.
            </h2>
            <p className="text-inverse-muted text-base sm:text-lg max-w-2xl mx-auto">
              Let&apos;s look at what you&apos;ve built — and what&apos;s limiting it. GHL Mastery is a
              proven business. The constraint isn&apos;t your offer. It&apos;s capacity.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Proof Points - What's Working (Visual Benchmarks) */}
        <FadeInOnScroll delay={0.1}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">
            The Numbers That Prove You&apos;re Not Broken
          </h3>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
            <IndustryBenchmarks
              title="Your Performance vs. Industry"
              benchmarks={[
                { label: "Lead-to-Appointment", yourValue: 19.3, industryMin: 3, industryMax: 5, format: "percent", higherIsBetter: true },
                { label: "Cost Per Lead", yourValue: 6.30, industryMin: 50, industryMax: 85, format: "currency", higherIsBetter: false },
                { label: "LTV:CAC Ratio", yourValue: 15.8, industryMin: 3, industryMax: 3, format: "ratio", higherIsBetter: true },
              ]}
            />
          </div>
        </FadeInOnScroll>

        {/* Constraints - Where Opportunity Leaks */}
        <FadeInOnScroll delay={0.1}>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">
            Where the Opportunity Leaks
          </h3>
        </FadeInOnScroll>

        <StaggerChildren className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {constraints.map((constraint, index) => (
            <StaggerItem key={index}>
              <Card variant="default" padding="default" className="h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-blue/10">
                    <constraint.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-heading mb-2">
                      {constraint.issue}
                    </h4>
                    <p className="text-body text-sm sm:text-base mb-2">{constraint.description}</p>
                    <p className="text-muted text-xs sm:text-sm italic">{constraint.detail}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* The Pattern */}
        <FadeInOnScroll>
          <Card variant="inverse" padding="large" className="text-center max-w-3xl mx-auto border-blue/30">
            <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
              Every &quot;problem&quot; traces back to the same root cause
            </h3>
            <p className="text-inverse-muted text-base sm:text-lg mb-4">
              Adam is the sales team. When Adam is busy, sales stops.
            </p>
            <p className="text-green font-semibold text-lg sm:text-xl">
              You&apos;re not broken. You&apos;re bottlenecked.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
