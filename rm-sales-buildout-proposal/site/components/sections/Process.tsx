"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { TIMELINE_PHASES } from "@/lib/constants";
import { ChevronRight, CheckCircle, Clock, Users } from "lucide-react";

const milestones = [
  { milestone: "Agreement Signed", timing: "Day 0", payment: "$4,000" },
  { milestone: "Phase 1 Complete", timing: "Day 30", payment: "$4,000 (if $36K quota hit)" },
  { milestone: "Phase 2 Month 1", timing: "Day 31", payment: "$12,000" },
  { milestone: "Phase 2 Month 2", timing: "Day 61", payment: "$12,000" },
  { milestone: "Phase 2 Month 3", timing: "Day 91", payment: "$12,000" },
  { milestone: "Commission", timing: "Day 60+", payment: "Variable" },
  { milestone: "Ongoing Support", timing: "Day 121+", payment: "TBD" },
];

export function Process() {
  return (
    <Section background="navy" id="process">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-wider uppercase mb-4">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              How It Works
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Prove first. Then build. We don&apos;t ask you to invest $44,000 on faith.
              We earn your confidence in 30 days.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Timeline Visual */}
        <FadeInOnScroll delay={0.1}>
          <div className="relative mb-16">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="flex items-stretch gap-4">
                {TIMELINE_PHASES.map((phase, index) => (
                  <div key={index} className="flex-1 flex flex-col">
                    {/* Phase Header */}
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/20 text-gold font-bold text-lg mb-2">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{phase.name}</h3>
                      <p className="text-text-muted text-sm">{phase.duration}</p>
                    </div>

                    {/* Phase Card */}
                    <Card
                      variant={index === 0 ? "highlight" : "default"}
                      padding="default"
                      className="flex-1"
                    >
                      <div className="text-center mb-4">
                        <span className="text-2xl font-bold text-gold">{phase.investment}</span>
                      </div>
                      <ul className="space-y-2">
                        {phase.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-text-secondary text-sm">
                            <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    {/* Arrow */}
                    {index < TIMELINE_PHASES.length - 1 && (
                      <div className="absolute top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
                        style={{ left: `calc(${(index + 1) * (100 / TIMELINE_PHASES.length)}% - 12px)` }}>
                        <ChevronRight className="w-6 h-6 text-gold" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Connection Line */}
              <div className="absolute top-[72px] left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-gold via-gold to-text-tertiary -z-10" />
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {TIMELINE_PHASES.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Vertical Line */}
                  {index < TIMELINE_PHASES.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border-subtle" />
                  )}

                  <div className="flex gap-4">
                    {/* Phase Number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/20 text-gold font-bold flex items-center justify-center">
                      {phase.phase}
                    </div>

                    {/* Phase Content */}
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-lg font-bold text-text-primary">{phase.name}</h3>
                        <p className="text-text-muted text-sm">{phase.duration} • {phase.investment}</p>
                      </div>
                      <Card variant={index === 0 ? "highlight" : "default"} padding="compact">
                        <ul className="space-y-1">
                          {phase.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-text-secondary text-sm">
                              <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Decision Gate */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="opportunity" padding="large" className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-blue/20 mb-4">
              <ChevronRight className="w-8 h-8 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">The Decision Gate</h3>
            <p className="text-text-secondary mb-4">
              After Phase 1 (30 days), you decide whether to continue.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-accent-green/10 rounded-lg border border-accent-green/30">
                <p className="font-medium text-accent-green mb-2">If quota hit ($36K)</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• Phase 2 is a no-brainer</li>
                  <li>• We&apos;ve proven the model</li>
                  <li>• Momentum carries forward</li>
                </ul>
              </div>
              <div className="p-4 bg-text-tertiary/10 rounded-lg border border-border-subtle">
                <p className="font-medium text-text-muted mb-2">If quota missed</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• You&apos;re out $4K, not $44K</li>
                  <li>• We have data on why</li>
                  <li>• You can pivot or pause</li>
                </ul>
              </div>
            </div>
          </Card>
        </FadeInOnScroll>

        {/* Milestones Table */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-8 text-center">
              Payment Milestones
            </h3>
            <Card variant="default" padding="default" className="max-w-2xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-subtle">
                      <th className="text-left py-3 px-4 text-text-secondary font-medium">Milestone</th>
                      <th className="text-center py-3 px-4 text-text-secondary font-medium">Timing</th>
                      <th className="text-right py-3 px-4 text-text-secondary font-medium">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milestones.map((item, index) => (
                      <tr key={index} className="border-b border-border-subtle/50 last:border-0">
                        <td className="py-3 px-4 text-text-primary">{item.milestone}</td>
                        <td className="py-3 px-4 text-center text-text-muted">{item.timing}</td>
                        <td className="py-3 px-4 text-right text-gold font-medium">{item.payment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </FadeInOnScroll>

        {/* Your Involvement */}
        <FadeInOnScroll delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="default" padding="large">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold" />
                <h4 className="text-lg font-semibold text-text-primary">Your Time Investment</h4>
              </div>
              <p className="text-3xl font-bold text-gold mb-4">2-3 hours/week</p>
              <ul className="space-y-2 text-text-secondary">
                <li>• Weekly status call (30 min)</li>
                <li>• Approvals and feedback (async)</li>
                <li>• Final say on hires and major decisions</li>
              </ul>
            </Card>

            <Card variant="default" padding="large">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-accent-blue" />
                <h4 className="text-lg font-semibold text-text-primary">What We Handle</h4>
              </div>
              <ul className="space-y-2 text-text-secondary">
                <li>• All selling (Phase 1)</li>
                <li>• Recruitment and vetting</li>
                <li>• Training development</li>
                <li>• Systems building</li>
                <li>• Documentation</li>
                <li>• Project management</li>
              </ul>
            </Card>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
