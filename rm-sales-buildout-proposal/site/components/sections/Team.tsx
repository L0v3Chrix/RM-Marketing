"use client";

import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { TEAM_MEMBERS } from "@/lib/constants";
import { User, CheckCircle } from "lucide-react";

// Team member images - use placeholders until real photos are added
const TEAM_IMAGES: Record<string, string | null> = {
  "Chrix": "/images/team/chrix.jpg",
  "Sarah": "/images/team/sarah.jpg",
};

export function Team() {
  return (
    <Section background="light" id="team">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Team
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4 sm:mb-6">
              Who&apos;s Building This
            </h2>
            <p className="text-body text-base sm:text-lg max-w-2xl mx-auto">
              Not consultants who give advice and disappear. Operators who build, sell, and transfer.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Team Cards */}
        <StaggerChildren className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <StaggerItem key={index}>
              <Card variant="default" padding="large" className="h-full">
                {/* Avatar */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green/10 flex items-center justify-center overflow-hidden relative">
                    {TEAM_IMAGES[member.name] ? (
                      <Image
                        src={TEAM_IMAGES[member.name]!}
                        alt={member.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Hide image on error, fallback icon will show
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    {/* Fallback icon - always rendered but hidden when image loads */}
                    <User className="w-8 h-8 sm:w-10 sm:h-10 text-green absolute" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-heading">{member.name}</h3>
                    <p className="text-green font-medium text-sm sm:text-base">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-body text-sm sm:text-base mb-4 sm:mb-6">{member.bio}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {member.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2 text-body text-xs sm:text-sm">
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
          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
            <Card variant="opportunity" padding="large" className="text-center">
              <blockquote className="text-lg sm:text-xl md:text-2xl text-heading italic mb-4">
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
