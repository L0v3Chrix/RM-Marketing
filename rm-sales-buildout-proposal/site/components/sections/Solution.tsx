"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import {
  Target,
  Wrench,
  UsersRound,
  CheckCircle,
} from "lucide-react";

const outcomes = [
  {
    title: "A Real Sales Team",
    description: "Setters booking calls. Closers closing deals. Not Adam doing everything.",
    icon: UsersRound,
  },
  {
    title: "70%+ Show Rates",
    description: "Automated sequences that get people to actually show up.",
    icon: Target,
  },
  {
    title: "Revenue on Autopilot",
    description: "Failed payments recovered. Database reactivated. Money you're leaving on the table — captured.",
    icon: CheckCircle,
  },
  {
    title: "Systems That Scale",
    description: "Scripts, playbooks, dashboards. Everything documented. Nothing lives in Adam's head.",
    icon: Wrench,
  },
  {
    title: "Adam Off the Phones",
    description: "You focus on content and vision. The team handles sales.",
    icon: Target,
  },
];

export function Solution() {
  return (
    <Section background="gradient" id="solution">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              What Changes
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              From Bottleneck to Breakthrough
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              You don&apos;t need advice. You don&apos;t need a sales person. 
              You need a sales <span className="text-accent font-semibold">department</span>.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Core Promise */}
        <FadeInOnScroll delay={0.1}>
          <Card variant="accent" padding="large" className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-text-primary font-semibold mb-3">
              In 90 days, GHL Mastery will have a functioning sales operation 
              that runs without Adam.
            </p>
            <p className="text-text-secondary">
              We build it. We train the team. We hand you the keys.
            </p>
          </Card>
        </FadeInOnScroll>

        {/* 5 Key Outcomes */}
        <FadeInOnScroll delay={0.2}>
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-8 text-center">
            What You Get
          </h3>
        </FadeInOnScroll>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <StaggerItem key={index}>
              <Card variant="default" padding="default" hover className="h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                    <outcome.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-1">
                      {outcome.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Ownership Note */}
        <FadeInOnScroll delay={0.3}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-text-secondary">
              <span className="text-text-primary font-medium">You own everything we build.</span>{" "}
              Scripts, systems, documentation — it&apos;s all yours. 
              We&apos;re not creating dependency. We&apos;re building independence.
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
