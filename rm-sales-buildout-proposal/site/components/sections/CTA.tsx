"use client";

import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Button, Card } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { Calendar, Mail, ArrowRight, Shield, CheckCircle, Sparkles } from "lucide-react";

const guarantees = [
  "30-day pressure test before major commitment",
  "Documented systems you own forever",
  "Clear success metrics upfront",
  "Exit at any phase with assets delivered",
];

export function CTA() {
  return (
    <Section background="base" padding="large" id="cta">
      <Container>
        {/* Journey Recap */}
        <FadeInOnScroll>
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tint-green border border-green/20 mb-6">
              <Sparkles className="w-4 h-4 text-green" />
              <span className="text-sm font-medium text-green">You Made It</span>
            </div>
            <p className="text-body text-base sm:text-lg max-w-2xl mx-auto">
              You&apos;ve seen the numbers. You understand the problem. You know the solution.
              <br className="hidden sm:block" />
              <span className="text-heading font-medium">The only question left is: when do you want to start?</span>
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Guarantee Panel */}
          <FadeInOnScroll>
            <Card variant="accent" padding="large" className="h-full">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-heading">Our Guarantee</h3>
              </div>

              <p className="text-body text-sm sm:text-base mb-4 sm:mb-6">
                We structure this engagement to minimize your risk while maximizing accountability on our end.
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-body text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    {guarantee}
                  </li>
                ))}
              </ul>

              <div className="border-t border-blue/20 pt-4 sm:pt-6">
                <p className="text-muted italic text-xs sm:text-sm">
                  This proposal is valued at{" "}
                  <span className="text-green font-medium">$500</span>. It tells you exactly
                  what&apos;s wrong and how to fix it — even if you don&apos;t work with us.
                </p>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* CTA Content */}
          <FadeInOnScroll delay={0.1}>
            <div className="text-center lg:text-left">
              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6">
                Let&apos;s Prove It Works
              </h2>

              {/* Subhead */}
              <p className="text-lg sm:text-xl md:text-2xl text-body mb-6 sm:mb-8">
                <span className="text-green font-bold text-2xl sm:text-3xl">$4K</span> to start.{" "}
                <span className="text-green font-bold text-2xl sm:text-3xl">30 days</span> to show results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button href="#" size="large" className="w-full sm:w-auto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  href="mailto:chrix@raisethevibe.com"
                  variant="secondary"
                  size="large"
                  className="w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  chrix@raisethevibe.com
                </Button>
              </div>

              {/* Closing Statement */}
              <p className="text-muted text-sm sm:text-base">
                No pressure. Just a conversation about what&apos;s possible.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Trust Footer with Adam's Photo */}
        <FadeInOnScroll delay={0.3}>
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-4">
              {/* Adam's Photo */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-green/30">
                <Image
                  src="/images/team/adam-mcinnes.jpg"
                  alt="Adam McInnes - GHL Mastery"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-muted text-xs sm:text-sm">
                  Prepared by <span className="text-body font-medium">Chrix & Sarah</span> |{" "}
                  <span className="text-green font-medium">Raize The Vibe</span>
                </p>
                <p className="text-muted text-xs sm:text-sm mt-2">
                  For <span className="text-body font-medium">Adam McInnes & Brendan</span> |{" "}
                  GHL Mastery
                </p>
                <p className="text-muted text-xs sm:text-sm mt-2">February 2026</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
