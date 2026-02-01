"use client";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { FunnelWaterfall } from "@/components/data-viz";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <Section background="white" padding="hero" id="hero">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Media Block - Sales Funnel Visualization (Mobile-friendly HTML) */}
          <div className="order-2 lg:order-1">
            <FunnelWaterfall />
          </div>

          {/* Right: Content - Shown first on mobile */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Trust Badge */}
            <FadeInOnScroll delay={0.1}>
              <p className="text-green text-sm font-medium mb-4 sm:mb-6">
                Prepared for <span className="text-heading">Adam & Brendan</span>{" "}
                <span className="text-green">| GHL Mastery</span>
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

            {/* Subheadline - Tightened */}
            <FadeInOnScroll delay={0.3}>
              <p className="text-base sm:text-lg text-body leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Your marketing is dialed. Your offer converts. The only thing missing? 
                A sales team that can handle the volume.
              </p>
            </FadeInOnScroll>

            {/* CTA Button */}
            <FadeInOnScroll delay={0.4}>
              <div className="flex justify-center lg:justify-start">
                <Button href="#plan" size="large">
                  See How We Fix That
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </FadeInOnScroll>

            {/* Trust Row - Simplified to 3 key metrics */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex items-center gap-6 sm:gap-10 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-green tracking-tight">
                    <CountUp end={6.30} decimals={2} prefix="$" duration={1.5} />
                  </p>
                  <p className="text-xs text-muted uppercase tracking-wider">Cost/Lead</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-green tracking-tight">
                    <CountUp end={19.3} decimals={1} suffix="%" duration={1.5} />
                  </p>
                  <p className="text-xs text-muted uppercase tracking-wider">Book Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-gold tracking-tight">
                    <CountUp end={59} suffix="%" duration={1.5} />
                  </p>
                  <p className="text-xs text-muted uppercase tracking-wider">Show Rate</p>
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
