"use client";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { ArrowRight, BarChart3 } from "lucide-react";

export function Hero() {
  return (
    <Section background="white" padding="hero" id="hero">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Media Block */}
          <FadeInOnScroll>
            <div className="bg-light rounded-3xl p-8 aspect-[4/3] flex flex-col items-center justify-center border border-border-light">
              <div className="w-20 h-20 rounded-2xl bg-green/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-10 h-10 text-green" />
              </div>
              <p className="text-text-heading font-semibold text-lg mb-2">
                Sales Infrastructure Dashboard
              </p>
              <p className="text-text-muted text-center max-w-xs">
                Complete visibility into your sales pipeline, team performance, and revenue growth
              </p>
            </div>
          </FadeInOnScroll>

          {/* Right: Content */}
          <div className="text-left">
            {/* Trust Badge */}
            <FadeInOnScroll delay={0.1}>
              <p className="text-text-muted text-sm mb-6">
                Prepared for <span className="text-text-heading font-medium">Adam McInnes & Brendan</span>{" "}
                <span className="text-text-muted">| GHL Mastery</span>
              </p>
            </FadeInOnScroll>

            {/* Main Headline */}
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-heading leading-tight mb-3">
                You&apos;re Sitting on a Million-Dollar Business.
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green leading-tight mb-6">
                You Just Can&apos;t Sell It.
              </h2>
            </FadeInOnScroll>

            {/* Subheadline */}
            <FadeInOnScroll delay={0.3}>
              <p className="text-lg text-text-body leading-relaxed mb-8 max-w-lg">
                A custom proposal to build your sales infrastructure — the team, the
                systems, the processes — so you can finally capture the revenue
                you&apos;re leaving on the table.
              </p>
            </FadeInOnScroll>

            {/* CTA Button */}
            <FadeInOnScroll delay={0.4}>
              <Button href="#plan" size="large">
                See the Full Plan
                <ArrowRight className="w-5 h-5" />
              </Button>
            </FadeInOnScroll>

            {/* Trust Row - Inline Metrics */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-border-light">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green">19.3%</p>
                  <p className="text-xs text-text-muted">Booking Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green">15.8x</p>
                  <p className="text-xs text-text-muted">LTV:CAC</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green">$6.30</p>
                  <p className="text-xs text-text-muted">Cost/Lead</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green">22</p>
                  <p className="text-xs text-text-muted">Shows in 90d</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Meta-Point */}
        <FadeInOnScroll delay={0.6}>
          <div className="text-center mt-16 pt-8 border-t border-border-light max-w-2xl mx-auto">
            <p className="text-text-muted italic text-sm">
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
