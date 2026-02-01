"use client";

import Image from "next/image";
import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll, StaggerChildren, StaggerItem } from "@/components/animations";
import { TeamStructure } from "@/components/data-viz";
import { TEAM_MEMBERS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export function Team() {
  return (
    <Section background="elevated" id="team">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              The Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Who&apos;s Building This
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Not consultants who give advice and disappear. Operators who build, sell, and transfer.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Team Structure Visual */}
        <div className="max-w-3xl mx-auto mb-16">
          <TeamStructure />
        </div>

        {/* Featured Team Photo */}
        <FadeInOnScroll delay={0.15}>
          <div className="max-w-md mx-auto mb-12">
            <Image
              src="/images/team/chrix-and-sarah.jpg"
              alt="Chrix and Sarah - Your Sales Team"
              width={500}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg border border-border"
            />
            <p className="text-center text-text-muted text-sm mt-4">Chrix & Sarah — Your dedicated sales operators</p>
          </div>
        </FadeInOnScroll>

        {/* Team Cards */}
        <StaggerChildren className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <StaggerItem key={index}>
              <Card variant="default" padding="large" hover className="h-full">
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden relative shadow-lg border-2 border-accent/30">
                    <Image
                      src={member.name === "Chrix" ? "/images/team/chrix.jpg" : "/images/team/chrix-and-sarah.jpg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{member.name}</h3>
                    <p className="text-accent font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-secondary mb-6">{member.bio}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {member.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-center gap-2 text-text-secondary text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
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
            <Card variant="accent" padding="large" className="text-center">
              <blockquote className="text-xl md:text-2xl text-text-primary italic mb-4">
                &quot;Sales isn&apos;t magic. It&apos;s math. Once you know your numbers, you know exactly what
                levers to pull.&quot;
              </blockquote>
              <p className="text-accent font-medium">— Chrix</p>
            </Card>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
