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
    <Section background="white" id="process">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-green text-sm font-medium tracking-wider uppercase mb-4">
              The Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              How It Works
            </h2>
            <p className="text-text-body text-lg max-w-2xl mx-auto">
              Prove first. Then build. We don&apos;t ask you to invest $44,000 on faith.
              We earn your confidence in 30 days.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Horizontal 3-Step Timeline */}
        <FadeInOnScroll delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {TIMELINE_PHASES.map((phase, index) => (
              <div key={index} className="relative">
                {/* Number circle */}
                <div className="w-16 h-16 rounded-full bg-green text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {phase.phase}
                </div>

                {/* Connection line (hidden on last) */}
                {index < TIMELINE_PHASES.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-border-light" />
                )}

                {/* Card */}
                <Card variant={index === 0 ? "highlight" : "default"} padding="default" className="text-center h-full">
                  <h3 className="text-xl font-bold text-text-heading mb-2">{phase.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{phase.duration}</p>
                  <p className="text-green font-semibold mb-4">{phase.investment}</p>
                  <ul className="text-left space-y-2">
                    {phase.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-body text-sm">
                        <CheckCircle className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Decision Gate */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="opportunity" padding="large" className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue/20 mb-4">
              <ChevronRight className="w-8 h-8 text-blue" />
            </div>
            <h3 className="text-xl font-bold text-text-heading mb-4">The Decision Gate</h3>
            <p className="text-text-body mb-4">
              After Phase 1 (30 days), you decide whether to continue.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-tint-green rounded-lg border border-green/30">
                <p className="font-medium text-green mb-2">If quota hit ($36K)</p>
                <ul className="text-text-body text-sm space-y-1">
                  <li>• Phase 2 is a no-brainer</li>
                  <li>• We&apos;ve proven the model</li>
                  <li>• Momentum carries forward</li>
                </ul>
              </div>
              <div className="p-4 bg-light rounded-lg border border-border-light">
                <p className="font-medium text-text-muted mb-2">If quota missed</p>
                <ul className="text-text-body text-sm space-y-1">
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
            <h3 className="text-xl md:text-2xl font-semibold text-text-heading mb-8 text-center">
              Payment Milestones
            </h3>
            <Card variant="default" padding="default" className="max-w-2xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-light">
                      <th className="text-left py-3 px-4 text-text-body font-medium">Milestone</th>
                      <th className="text-center py-3 px-4 text-text-body font-medium">Timing</th>
                      <th className="text-right py-3 px-4 text-text-body font-medium">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milestones.map((item, index) => (
                      <tr key={index} className="border-b border-border-light/50 last:border-0">
                        <td className="py-3 px-4 text-text-heading">{item.milestone}</td>
                        <td className="py-3 px-4 text-center text-text-muted">{item.timing}</td>
                        <td className="py-3 px-4 text-right text-green font-medium">{item.payment}</td>
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
                <Clock className="w-6 h-6 text-green" />
                <h4 className="text-lg font-semibold text-text-heading">Your Time Investment</h4>
              </div>
              <p className="text-3xl font-bold text-green mb-4">2-3 hours/week</p>
              <ul className="space-y-2 text-text-body">
                <li>• Weekly status call (30 min)</li>
                <li>• Approvals and feedback (async)</li>
                <li>• Final say on hires and major decisions</li>
              </ul>
            </Card>

            <Card variant="default" padding="large">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue" />
                <h4 className="text-lg font-semibold text-text-heading">What We Handle</h4>
              </div>
              <ul className="space-y-2 text-text-body">
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
