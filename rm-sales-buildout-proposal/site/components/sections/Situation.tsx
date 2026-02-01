"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { BeforeAfterCompare, IndustryBenchmarks } from "@/components/data-viz";
import { AlertTriangle } from "lucide-react";

export function Situation() {
  return (
    <Section background="gradient" id="situation">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-success text-sm font-medium tracking-wider uppercase mb-4">
              The Real Story
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              Here&apos;s What the Data Shows
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Data Honesty Note */}
        <FadeInOnScroll delay={0.05}>
          <Card variant="glass" padding="default" className="max-w-3xl mx-auto mb-8 border-warning/30">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-text-primary font-medium mb-2">A note on data</p>
                <p className="text-text-secondary text-sm">
                  The numbers below come from your GHL calendar (appointments) and Stripe (revenue). 
                  These don&apos;t always match cleanly — some sales came from email blasts to your 
                  database on the $197 product, not from booked appointments. We&apos;ll call out 
                  where we&apos;re making assumptions.
                </p>
              </div>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* Three Data Categories */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {/* Advertising Data */}
          <FadeInOnScroll delay={0.1}>
            <Card variant="glass" padding="default" className="h-full">
              <p className="text-accent text-xs font-medium uppercase tracking-wider mb-3">
                📢 Advertising (90 days)
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Ad Spend</span>
                  <span className="text-text-primary font-semibold">~$1,500</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Leads Generated</span>
                  <span className="text-text-primary font-semibold">238</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Cost Per Lead</span>
                  <span className="text-success font-semibold">$6.30</span>
                </div>
                <div className="pt-2 border-t border-border-subtle">
                  <p className="text-xs text-text-muted">
                    ✓ This is excellent. Industry average is $50-85/lead.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* Appointments Data */}
          <FadeInOnScroll delay={0.15}>
            <Card variant="glass" padding="default" className="h-full">
              <p className="text-warning text-xs font-medium uppercase tracking-wider mb-3">
                📅 Appointments (90 days)
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Booked</span>
                  <span className="text-text-primary font-semibold">46</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Showed Up</span>
                  <span className="text-text-primary font-semibold">22</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Show Rate</span>
                  <span className="text-warning font-semibold">48%</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Book Rate</span>
                  <span className="text-success font-semibold">19.3%</span>
                </div>
                <div className="pt-2 border-t border-border-subtle">
                  <p className="text-xs text-text-muted">
                    ⚠️ Book rate is great. Show rate needs work (industry: 60-70%).
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* Revenue Data */}
          <FadeInOnScroll delay={0.2}>
            <Card variant="glass" padding="default" className="h-full">
              <p className="text-success text-xs font-medium uppercase tracking-wider mb-3">
                💰 Revenue (90 days)
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Total Revenue</span>
                  <span className="text-text-primary font-semibold">$43K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">VIP ($5K+)</span>
                  <span className="text-text-primary font-semibold">$20.5K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">High-Ticket</span>
                  <span className="text-text-primary font-semibold">$16.5K</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-text-secondary text-sm">Course Sales</span>
                  <span className="text-text-primary font-semibold">$6K</span>
                </div>
                <div className="pt-2 border-t border-border-subtle">
                  <p className="text-xs text-text-muted">
                    ⚠️ Not all from appointments — some from email blasts.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>
        </div>

        {/* The Gap Analysis */}
        <FadeInOnScroll delay={0.2}>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <Card variant="glass" padding="large" className="border-accent/30">
              <h3 className="text-text-primary font-semibold text-lg mb-4">
                Where the Gaps Are
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-success text-sm font-medium mb-2">✓ What&apos;s Working</p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Cost per lead ($6.30) — exceptional</li>
                    <li>• Booking rate (19.3%) — above industry</li>
                    <li>• Offer converts when worked</li>
                    <li>• Multiple price points capturing demand</li>
                  </ul>
                </div>
                <div>
                  <p className="text-warning text-sm font-medium mb-2">⚠️ What&apos;s Not</p>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Show rate (48%) — losing half your appointments</li>
                    <li>• No dedicated sales capacity</li>
                    <li>• Database sitting untouched (10K contacts)</li>
                    <li>• Failed payments unrecovered ($25K)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Hypotheses */}
        <FadeInOnScroll delay={0.25}>
          <Card variant="glass" padding="large" className="max-w-3xl mx-auto mb-12 sm:mb-16 border-border">
            <h3 className="text-text-primary font-semibold text-lg mb-4">
              Our Hypotheses
            </h3>
            <p className="text-text-secondary mb-4">
              The data doesn&apos;t tell us everything. Here&apos;s what we&apos;re guessing:
            </p>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">1.</span>
                <span>
                  <strong className="text-text-primary">Low show rate</strong> is partly a speed-to-lead 
                  problem. Leads cool off fast. With no one following up same-day, half forget they booked.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">2.</span>
                <span>
                  <strong className="text-text-primary">Revenue from appointments</strong> is understated. 
                  Some appointments led to later purchases that show up as &quot;email sales&quot; in Stripe.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">3.</span>
                <span>
                  <strong className="text-text-primary">The database is gold</strong>. 10K contacts who 
                  already know you, haven&apos;t been worked. That&apos;s low-hanging fruit.
                </span>
              </li>
            </ul>
          </Card>
        </FadeInOnScroll>

        {/* Visual Benchmarks */}
        <FadeInOnScroll delay={0.3}>
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <BeforeAfterCompare />
              <IndustryBenchmarks />
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Root Cause */}
        <FadeInOnScroll delay={0.35}>
          <Card variant="glass" padding="large" className="text-center max-w-3xl mx-auto border-success/30">
            <p className="text-lg sm:text-xl md:text-2xl text-text-primary font-semibold mb-4">
              The pattern is clear:
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-success mb-4">
              Great funnel. No one to work it.
            </p>
            <p className="text-text-secondary text-base sm:text-lg">
              You&apos;re generating leads you can&apos;t convert because Adam is the entire 
              sales department — and he&apos;s got other things to do.
            </p>
          </Card>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
