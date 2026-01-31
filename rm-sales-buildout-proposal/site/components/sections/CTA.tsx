"use client";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { Calendar, Mail, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <Section background="gradient" padding="large" id="cta">
      <Container size="narrow">
        <FadeInOnScroll>
          <div className="text-center">
            {/* Main Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Ready to Prove It Works?
            </h2>

            {/* Subhead */}
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              <span className="text-gold font-semibold">$4K</span> to find out.{" "}
              <span className="text-gold font-semibold">30 days</span> to show results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
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
            <div className="max-w-xl mx-auto">
              <p className="text-text-muted italic mb-6">
                This proposal is valued at{" "}
                <span className="text-gold font-medium">$500</span>. It tells you exactly
                what&apos;s wrong and how to fix it — even if you don&apos;t work with us.
              </p>
              <p className="text-text-secondary font-medium">
                But you should work with us.
              </p>
            </div>

            {/* Trust Footer */}
            <div className="mt-16 pt-8 border-t border-border-subtle">
              <p className="text-text-tertiary text-sm">
                Prepared by <span className="text-text-muted">Chrix & Sara</span> |{" "}
                <span className="text-gold">Raize The Vibe</span>
              </p>
              <p className="text-text-tertiary text-sm mt-2">
                For <span className="text-text-muted">Adam McInnes & Brendan</span> |{" "}
                GHL Mastery
              </p>
              <p className="text-text-tertiary text-sm mt-2">February 2026</p>
            </div>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
