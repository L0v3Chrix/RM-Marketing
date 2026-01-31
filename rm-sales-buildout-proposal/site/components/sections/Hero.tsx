"use client";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { IndustryBenchmarks } from "@/components/data-viz";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <Section background="white" padding="hero" id="hero">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Media Block - Hidden on mobile, shown first on desktop */}
          <FadeInOnScroll className="order-2 lg:order-1">
            <IndustryBenchmarks
              title="Your Current Performance"
              benchmarks={[
                { label: "Lead-to-Appointment", yourValue: 19.3, industryMin: 3, industryMax: 5, format: "percent", higherIsBetter: true },
                { label: "Cost Per Lead", yourValue: 6.30, industryMin: 50, industryMax: 85, format: "currency", higherIsBetter: false },
                { label: "LTV:CAC Ratio", yourValue: 15.8, industryMin: 3, industryMax: 3, format: "ratio", higherIsBetter: true },
                { label: "Show Rate", yourValue: 59, industryMin: 60, industryMax: 75, format: "percent", higherIsBetter: true },
              ]}
            />
          </FadeInOnScroll>

          {/* Right: Content - Shown first on mobile */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Trust Badge */}
            <FadeInOnScroll delay={0.1}>
              <p className="text-muted text-sm mb-4 sm:mb-6">
                Prepared for <span className="text-heading font-medium">Adam McInnes & Brendan</span>{" "}
                <span className="text-muted">| GHL Mastery</span>
              </p>
            </FadeInOnScroll>

            {/* Main Headline */}
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading leading-tight mb-2 sm:mb-3">
                You&apos;re Sitting on a Million-Dollar Business.
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-green leading-tight mb-4 sm:mb-6">
                You Just Can&apos;t Sell It.
              </h2>
            </FadeInOnScroll>

            {/* Subheadline */}
            <FadeInOnScroll delay={0.3}>
              <p className="text-base sm:text-lg text-body leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                A custom proposal to build your sales infrastructure — the team, the
                systems, the processes — so you can finally capture the revenue
                you&apos;re leaving on the table.
              </p>
            </FadeInOnScroll>

            {/* CTA Button */}
            <FadeInOnScroll delay={0.4}>
              <div className="flex justify-center lg:justify-start">
                <Button href="#plan" size="large">
                  See the Full Plan
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </FadeInOnScroll>

            {/* Trust Row - Inline Metrics */}
            <FadeInOnScroll delay={0.5}>
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-green">19.3%</p>
                  <p className="text-xs text-muted">Booking Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-green">15.8x</p>
                  <p className="text-xs text-muted">LTV:CAC</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-green">$6.30</p>
                  <p className="text-xs text-muted">Cost/Lead</p>
                </div>
                <div className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-green">22</p>
                  <p className="text-xs text-muted">Shows in 90d</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Meta-Point */}
        <FadeInOnScroll delay={0.6}>
          <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border max-w-2xl mx-auto">
            <p className="text-muted italic text-sm">
              This proposal is worth{" "}
              <span className="text-green font-medium">$500</span> on its own. We&apos;re
              doing for your sales system what you do for others&apos; GHL systems.
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
