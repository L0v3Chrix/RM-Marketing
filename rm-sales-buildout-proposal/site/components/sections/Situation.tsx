"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { CheckCircle, AlertCircle, Users, Database, TrendingDown, CreditCard } from "lucide-react";

const proofPoints = [
  {
    metric: "19.3%",
    label: "Lead-to-Appointment Rate",
    context: "Industry benchmark: 3-5%",
    description: "Your ads work. Your messaging resonates. Your offer converts.",
    highlight: "This is not a marketing problem.",
    icon: CheckCircle,
    color: "green",
  },
  {
    metric: "15.8x",
    label: "LTV:CAC Ratio",
    context: "Healthy threshold: 3x",
    description: "You spend ~$40 to acquire a customer worth $635+.",
    highlight: "You could afford to scale. You just haven't.",
    icon: CheckCircle,
    color: "green",
  },
  {
    metric: "$6.30",
    label: "Cost Per Lead",
    context: "Industry average: $50-85",
    description: "In B2B. For qualified buyers interested in business automation.",
    highlight: "This is a strength, not a problem.",
    icon: CheckCircle,
    color: "green",
  },
];

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
    <Section background="light" id="situation">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              Where You Are Today
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              You&apos;re Not Broken. You&apos;re Bottlenecked.
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Let&apos;s look at what you&apos;ve built — and what&apos;s limiting it. GHL Mastery is a
              proven business. The constraint isn&apos;t your offer. It&apos;s capacity.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Proof Points - What's Working */}
        <FadeInOnScroll delay={0.1}>
          <h3 className="text-xl md:text-2xl font-semibold text-text-heading mb-8 text-center">
            The Numbers That Prove You&apos;re Not Broken
          </h3>
        </FadeInOnScroll>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-16">
          {proofPoints.map((point, index) => (
            <StaggerItem key={index}>
              <Card variant="highlight" padding="large" className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <point.icon className="w-6 h-6 text-green flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-green mb-1">
                      {point.metric}
                    </div>
                    <div className="text-text-heading font-medium">{point.label}</div>
                    <div className="text-text-muted text-sm italic">{point.context}</div>
                  </div>
                </div>
                <p className="text-text-body mb-3">{point.description}</p>
                <p className="text-text-heading font-semibold">{point.highlight}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Constraints - Where Opportunity Leaks */}
        <FadeInOnScroll delay={0.1}>
          <h3 className="text-xl md:text-2xl font-semibold text-text-heading mb-8 text-center">
            Where the Opportunity Leaks
          </h3>
        </FadeInOnScroll>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-16">
          {constraints.map((constraint, index) => (
            <StaggerItem key={index}>
              <Card variant="default" padding="default" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue/10">
                    <constraint.icon className="w-6 h-6 text-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-heading mb-2">
                      {constraint.issue}
                    </h4>
                    <p className="text-text-body mb-2">{constraint.description}</p>
                    <p className="text-text-muted text-sm italic">{constraint.detail}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* The Pattern */}
        <FadeInOnScroll>
          <Card variant="opportunity" padding="large" className="text-center max-w-3xl mx-auto">
            <AlertCircle className="w-10 h-10 text-blue mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-text-heading mb-4">
              Every &quot;problem&quot; traces back to the same root cause
            </h3>
            <p className="text-text-body text-lg mb-4">
              Adam is the sales team. When Adam is busy, sales stops.
            </p>
            <p className="text-green font-semibold text-xl">
              You&apos;re not broken. You&apos;re bottlenecked.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
