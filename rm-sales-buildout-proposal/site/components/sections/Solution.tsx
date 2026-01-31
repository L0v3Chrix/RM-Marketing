"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Target,
  Cog,
  Users,
  CheckCircle,
  XCircle,
  Zap,
} from "lucide-react";
import { SOLUTION_PILLARS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Cog,
  Users,
};

const deliverables = [
  "Sales Infrastructure Audit",
  "Show-Up System (SMS + Email)",
  "Lead Nurture Sequences",
  "Database Reactivation Campaign",
  "Dunning/Recovery System",
  "Attribution & Tracking",
  "KPI Dashboard",
  "Sales Process Playbook",
  "Scripts (All Products)",
  "Objection Handling Guide",
  "Setter Recruitment + Training",
  "Closer Recruitment + Training",
  "Compensation Structures",
  "Ad Messaging Strategy",
  "Cross-Sell Sequences",
  "Handoff Documentation",
  "90-Day Optimization",
  "30-Day Post-Handoff Support",
];

const successCriteria = [
  "You have a setter booking qualified appointments",
  "You have a closer converting those appointments",
  "Show rate is 70%+ (not 59%)",
  "Failed payments are being recovered automatically",
  "Your database has been reactivated",
  "Real-time visibility into all metrics",
  "Everything is documented and transferable",
  "You're on track for $100K/month",
];

const notIncluded = [
  { item: "Not running your ads", detail: "You keep control of ad spend" },
  { item: "Not building new products", detail: "We work with what you have" },
  { item: "Not doing sales forever", detail: "We build and hand off" },
  { item: "Not giving generic advice", detail: "Everything is custom to your situation" },
  { item: "Not creating dependency", detail: "You own everything we build" },
];

export function Solution() {
  return (
    <Section background="navy-gradient" id="solution">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Solution
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What We Build For You
            </h2>
            <p className="text-text-inverse-secondary text-lg max-w-2xl mx-auto">
              You don&apos;t need advice. You need execution. You don&apos;t need a sales person.
              You need a sales <strong className="text-green">department</strong>.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Big Picture Callout */}
        <FadeInOnScroll delay={0.1}>
          <Card variant="inverse" padding="large" className="text-center mb-16 max-w-4xl mx-auto border-blue/30">
            <Zap className="w-10 h-10 text-blue mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-white font-semibold mb-4">
              We will build your sales infrastructure — the people, the processes, and the technology
              — so you can scale to $100K/month and beyond.
            </p>
            <p className="text-text-inverse-muted">
              We build it. We install it. We train your team. We hand you the keys.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* Three Pillars */}
        <FadeInOnScroll delay={0.1}>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 text-center">
            What &quot;Sales Infrastructure&quot; Actually Means
          </h3>
        </FadeInOnScroll>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-16">
          {SOLUTION_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <StaggerItem key={index}>
                <Card variant="inverse" padding="large" className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-green/20">
                      <Icon className="w-6 h-6 text-green" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                      <p className="text-text-inverse-muted text-sm">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {pillar.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-text-inverse-secondary">
                        <span className="text-green mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Deliverables Stack */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 text-center">
              The Deliverables Stack
            </h3>
            <Card variant="inverse" padding="large" className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-2">
                {deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-navy rounded-lg border border-border-dark text-text-inverse-secondary text-center font-medium text-sm"
                  >
                    {deliverable}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-green font-semibold">
                18 deliverables. 90 days. One functioning sales department.
              </p>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Success Criteria & Not Included */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Success Criteria */}
          <FadeInOnScroll delay={0.1}>
            <Card variant="inverse" padding="large" className="h-full border-green/30">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                What Success Looks Like
              </h4>
              <ul className="space-y-3">
                {successCriteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
                    <span className="text-text-inverse-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInOnScroll>

          {/* Not Included */}
          <FadeInOnScroll delay={0.2}>
            <Card variant="inverse" padding="large" className="h-full">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                What This Is NOT
              </h4>
              <ul className="space-y-4">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium">{item.item}</span>
                      <span className="text-text-inverse-muted"> — {item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInOnScroll>
        </div>
      </Container>
    </Section>
  );
}
