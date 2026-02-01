"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { PhaseTimeline } from "@/components/data-viz";
import { ChevronRight, Clock, Wrench } from "lucide-react";

const milestones = [
  { milestone: "Agreement Signed", timing: "Day 0", payment: "$4,000" },
  { milestone: "Pressure Test Complete", timing: "Day 30", payment: "$4,000 (320 hrs delivered)" },
  { milestone: "Phase 2 Month 1", timing: "Day 31", payment: "$12,000" },
  { milestone: "Phase 2 Month 2", timing: "Day 61", payment: "$12,000" },
  { milestone: "Phase 2 Month 3", timing: "Day 91", payment: "$12,000" },
  { milestone: "Commission", timing: "Day 60+", payment: "Variable" },
  { milestone: "Ongoing Support", timing: "Day 121+", payment: "TBD" },
];

export function Process() {
  return (
    <Section background="base" id="process">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              The Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
              How It Works
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Prove first. Then build. We don&apos;t ask you to invest $44,000 on faith.
              We earn your confidence in 30 days.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Phase Timeline */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <PhaseTimeline />
          </div>
        </div>

        {/* Decision Gate */}
        <FadeInOnScroll delay={0.2}>
          <Card variant="accent" padding="large" className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 mb-4">
              <ChevronRight className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">The Decision Gate</h3>
            <p className="text-text-secondary mb-6">
              After the Pressure Test (30 days), you decide whether to continue.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-medium text-accent mb-2">If momentum is building</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• Appointments flowing</li>
                  <li>• Database responding</li>
                  <li>• Phase 2 is a no-brainer</li>
                </ul>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border-subtle">
                <p className="font-medium text-text-muted mb-2">If it&apos;s not working</p>
                <ul className="text-text-secondary text-sm space-y-1">
                  <li>• You&apos;re out $8K, not $52K</li>
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
            <Card variant="elevated" padding="default" className="max-w-2xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-text-secondary font-medium text-sm">Milestone</th>
                      <th className="text-center py-3 px-4 text-text-secondary font-medium text-sm">Timing</th>
                      <th className="text-right py-3 px-4 text-text-secondary font-medium text-sm">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milestones.map((item, index) => (
                      <tr key={index} className="border-b border-border-subtle last:border-0">
                        <td className="py-3 px-4 text-text-primary text-sm">{item.milestone}</td>
                        <td className="py-3 px-4 text-center text-text-muted text-sm">{item.timing}</td>
                        <td className="py-3 px-4 text-right text-accent font-medium text-sm">{item.payment}</td>
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
          <div className="grid sm:grid-cols-2 gap-6">
            <Card variant="default" padding="large" hover>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-accent" />
                <h4 className="text-lg font-semibold text-text-primary">Your Time Investment</h4>
              </div>
              <p className="text-3xl font-bold text-accent mb-4">2-3 hours/week</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Weekly status call (30 min)</li>
                <li>• Approvals and feedback (async)</li>
                <li>• Final say on hires and major decisions</li>
              </ul>
            </Card>

            <Card variant="default" padding="large" hover>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-accent" />
                <h4 className="text-lg font-semibold text-text-primary">What We Handle</h4>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
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
