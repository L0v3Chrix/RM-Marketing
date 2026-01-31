"use client";

import { Container, Section } from "@/components/layout";
import { Accordion } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <Section background="light" id="faq">
      <Container size="narrow">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              Questions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6">
              Frequently Asked
            </h2>
            <p className="text-body text-base sm:text-lg">
              The questions you&apos;re probably thinking about.
            </p>
          </div>
        </FadeInOnScroll>

        {/* FAQ Accordion */}
        <FadeInOnScroll delay={0.1}>
          <Accordion items={FAQ_ITEMS} />
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
