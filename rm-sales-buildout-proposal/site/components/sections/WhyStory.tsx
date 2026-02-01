"use client";

import { Container, Section } from "@/components/layout";
import { Card } from "@/components/ui";
import { FadeInOnScroll } from "@/components/animations";
import { MessageCircle, Target, Lightbulb, TrendingUp } from "lucide-react";

export function WhyStory() {
  return (
    <Section background="base" id="why">
      <Container>
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
              Before We Dive In
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              Why I&apos;m Writing This
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              This isn&apos;t a pitch deck. It&apos;s a conversation I need to have honestly.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Story - Personal and Direct */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* What I Expected */}
          <FadeInOnScroll delay={0.1}>
            <Card variant="default" padding="large" className="border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                    What I Came For
                  </h3>
                  <p className="text-text-secondary mb-4">
                    When I took this call, I expected the podcast funnel — high-value appointments 
                    in the $5K-$30K range. Pre-qualified guests ready for a conversation about 
                    their marketing. That&apos;s my wheelhouse.
                  </p>
                  <p className="text-text-secondary">
                    I made myself available daily. Asked to shadow Nick and Jonah to learn the flow.
                    Got crickets. Almost two weeks in, I hadn&apos;t received a single appointment.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* What I Found */}
          <FadeInOnScroll delay={0.2}>
            <Card variant="default" padding="large" className="border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-warning/20 flex-shrink-0">
                  <Target className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                    What I Actually Found
                  </h3>
                  <p className="text-text-secondary mb-4">
                    So I started digging under the hood. And what I found was interesting: 
                    the podcast funnel isn&apos;t the play right now. GHL Mastery is.
                  </p>
                  <p className="text-text-secondary mb-4">
                    You have something most businesses would kill for: a{" "}
                    <span className="text-success font-semibold">validated offer stack</span>,{" "}
                    <span className="text-success font-semibold">10K contacts in your database</span>, 
                    a real reputation in the GHL community, and tons of content.
                  </p>
                  <p className="text-text-secondary">
                    You&apos;re good at coaching — even if you don&apos;t love it. You have clout. 
                    And you have a vetted, dependable team that actually understands the software. 
                    That&apos;s rare. Maybe 50:1 among agency owners.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* The Strategic Recommendation */}
          <FadeInOnScroll delay={0.3}>
            <Card variant="accent" padding="large">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-success/20 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                    My Recommendation
                  </h3>
                  <p className="text-text-secondary mb-4">
                    <span className="font-semibold">Don&apos;t chase the podcast thing right now</span> — 
                    not if it requires bandwidth from you. Let Nick figure that out in parallel if he can.
                  </p>
                  <p className="text-text-secondary mb-4">
                    Instead, focus on what&apos;s already validated. The natural ascension ladder is sitting right there:
                  </p>
                  <ul className="space-y-2 text-text-secondary mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">1.</span>
                      <span>Pack your office hours — get that Zoom room to 100+ people</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">2.</span>
                      <span>People ask questions, you solve problems live</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">3.</span>
                      <span>Natural upsell: &quot;Want it done faster? Our trained VAs can build it for you.&quot;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">4.</span>
                      <span>Video content → group coaching → 1:1 coaching → trained VAs → DFY builds</span>
                    </li>
                  </ul>
                  <p className="text-text-secondary font-medium">
                    You haven&apos;t even touched your audience yet. The opportunity is right here.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>

          {/* Why I'm Qualified */}
          <FadeInOnScroll delay={0.4}>
            <Card variant="default" padding="large" className="border border-success/30">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-success/10 flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3">
                    What I Actually Do
                  </h3>
                  <p className="text-text-secondary mb-4">
                    This whole experience opened my eyes to my real lane. Here&apos;s the gap I solve:
                  </p>
                  <p className="text-text-primary font-semibold text-lg sm:text-xl mb-4">
                    <span className="text-accent">$30K → $100K</span> monthly revenue
                  </p>
                  <p className="text-text-secondary mb-4">
                    Getting from $0 to $30K is incredibly hard — few people do it. 
                    But $30K to $100K is the <em>same level of hard</em>, 
                    just different problems for different reasons.
                  </p>
                  <p className="text-text-secondary mb-4">
                    I pay attention to numbers like my life depends on it. Not the offer. 
                    Not the customers. Not the day-to-day. <span className="text-accent font-semibold">The numbers</span>. 
                    Metrics and KPIs — they never lie, they just need to be worked.
                  </p>
                  <p className="text-text-secondary font-medium">
                    Give me the shot. Give me the testimonial. Be my first case study. 
                    Next time, I&apos;m charging more. 3-5 of these per year and I&apos;m happy.
                  </p>
                </div>
              </div>
            </Card>
          </FadeInOnScroll>
        </div>
      </Container>
    </Section>
  );
}
