"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { BeforeAfterCompare, IndustryBenchmarks } from "@/components/data-viz";

export function Situation() {
  return (
    <Section background="navy-gradient" id="situation">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Real Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Here&apos;s What We See in Your Numbers
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Narrative Block - The Story */}
        <FadeInOnScroll delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <Card variant="inverse" padding="large" className="border-blue/30">
              <p className="text-inverse-muted text-base sm:text-lg leading-relaxed mb-6">
                GHL Mastery has something most businesses would kill for: a{" "}
                <span className="text-green font-medium">$6 cost per lead</span> and a{" "}
                <span className="text-green font-medium">19% booking rate</span>. 
                That&apos;s not good — that&apos;s exceptional.
              </p>
              <p className="text-inverse-muted text-base sm:text-lg leading-relaxed mb-6">
                But here&apos;s the pattern we keep seeing: 238 leads come in over 90 days. 
                46 book appointments. Only 22 actually show up. And who&apos;s working those leads?
              </p>
              <p className="text-white text-lg sm:text-xl font-semibold mb-6">
                Adam. When he has time. Between everything else.
              </p>
              <p className="text-inverse-muted text-base sm:text-lg leading-relaxed">
                That&apos;s not a conversion problem. That&apos;s a capacity problem. The machine 
                generates leads faster than one person can possibly work them.
              </p>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Visual Benchmarks - Simplified */}
        <FadeInOnScroll delay={0.2}>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <BeforeAfterCompare />
              <IndustryBenchmarks />
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Root Cause - Single Clear Message */}
        <FadeInOnScroll delay={0.3}>
          <Card variant="inverse" padding="large" className="text-center max-w-3xl mx-auto border-green/30">
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-4">
              The root cause is simple:
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green mb-4">
              No sales team. Just Adam.
            </p>
            <p className="text-inverse-muted text-base sm:text-lg">
              Meanwhile, <span className="text-white">10,000 contacts</span> sit untouched in your CRM, 
              and <span className="text-white">$25K in failed payments</span> go unrecovered. 
              Not because you don&apos;t know how — because there&apos;s no one to do it.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
