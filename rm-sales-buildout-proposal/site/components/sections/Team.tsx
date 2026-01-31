"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { TEAM_MEMBERS } from "@/lib/constants";
import { User, CheckCircle } from "lucide-react";

export function Team() {
  return (
    <Section background="light" id="team">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              Who&apos;s Building This
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Not consultants who give advice and disappear. Operators who build, sell, and transfer.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Team Cards */}
        <StaggerChildren className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <StaggerItem key={index}>
              <Card variant="default" padding="large" className="h-full">
                {/* Avatar Placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center">
                    <User className="w-10 h-10 text-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-heading">{member.name}</h3>
                    <p className="text-green font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-body mb-6">{member.bio}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {member.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2 text-text-body text-sm">
                      <CheckCircle className="w-4 h-4 text-green flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Philosophy Quote */}
        <FadeInOnScroll delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto">
            <Card variant="opportunity" padding="large" className="text-center">
              <blockquote className="text-xl md:text-2xl text-text-heading italic mb-4">
                &quot;Sales isn&apos;t magic. It&apos;s math. Once you know your numbers, you know exactly what
                levers to pull.&quot;
              </blockquote>
              <p className="text-green font-medium">— Chrix</p>
            </Card>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
