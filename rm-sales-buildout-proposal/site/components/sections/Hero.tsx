"use client";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { MetricCard } from "@/components/data-viz";
import { FadeInOnScroll } from "@/components/animations";
import { HERO_METRICS } from "@/lib/constants";

export function Hero() {
  return (
    <Section background="gradient" padding="hero" id="hero">
      <Container size="wide">
        {/* Trust Badge */}
        <FadeInOnScroll delay={0}>
          <div className="text-center mb-8">
            <p className="text-text-muted text-sm">
              Prepared by <span className="text-text-secondary">Chrix & Sara</span> for{" "}
              <span className="text-text-secondary">Adam McInnes & Brendan</span>{" "}
              <span className="text-text-tertiary">| GHL Mastery</span>
            </p>
          </div>
        </FadeInOnScroll>

        {/* Main Headline */}
        <FadeInOnScroll delay={0.1}>
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4">
              You&apos;re Sitting on a Million-Dollar Business.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold leading-tight">
              You Just Can&apos;t Sell It.
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Subheadline */}
        <FadeInOnScroll delay={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              A custom proposal to build your sales infrastructure — the team, the
              systems, the processes — so you can finally capture the revenue
              you&apos;re leaving on the table.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Meta-Point */}
        <FadeInOnScroll delay={0.3}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-text-muted italic text-sm md:text-base">
              This proposal is worth{" "}
              <span className="text-gold font-medium">$500</span> on its own. We&apos;re
              doing for your sales system what you do for others&apos; GHL systems.
            </p>
          </div>
        </FadeInOnScroll>

        {/* CTA Button */}
        <FadeInOnScroll delay={0.4}>
          <div className="flex justify-center mb-16">
            <Button href="#plan" size="large">
              See the Full Plan
            </Button>
          </div>
        </FadeInOnScroll>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {HERO_METRICS.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              prefix={"prefix" in metric ? metric.prefix : undefined}
              suffix={"suffix" in metric ? metric.suffix : undefined}
              comparison={metric.comparison}
              color={metric.color}
              decimals={"suffix" in metric && (metric.suffix === "%" || metric.suffix === "x") ? 1 : 0}
            />
          ))}
        </div>

        {/* Context Line */}
        <FadeInOnScroll delay={0.5}>
          <div className="text-center mt-8">
            <p className="text-text-muted text-sm">
              Based on 90-day data analysis. The numbers prove the foundation is solid.
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
