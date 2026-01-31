"use client";

import { Container, Section } from "@/components/layout";
import { Accordion } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <Section background="navy" id="faq">
      <Container size="narrow">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              Questions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Frequently Asked
            </h2>
            <p className="text-text-secondary text-lg">
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
