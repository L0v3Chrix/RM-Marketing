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
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-3">
              Quick Answers
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading">
              Common Questions
            </h2>
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
