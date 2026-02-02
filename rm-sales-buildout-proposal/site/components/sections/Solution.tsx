"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Wrench, Target, Users, Check, X, Zap, FileText, Headphones } from "lucide-react";
import { SOLUTION_PILLARS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  UsersRound: <Users className="w-6 h-6" />,
};

export function Solution() {
  const deliverables = [
    "Sales Infrastructure Audit",
    "Show-Up System (SMS + Email)",
    "Lead Nurture Sequences",
    "Database Reactivation Campaign",
    "Dunning/Recovery System",
    "Attribution & Tracking",
    "KPI Dashboard",
    "Sales Process Playbook",
    "Scripts (All Products)",
    "Objection Handling Guide",
    "Setter Recruitment + Training",
    "Closer Recruitment + Training",
    "Compensation Structures",
    "Ad Messaging Strategy",
    "Cross-Sell Sequences",
    "Handoff Documentation",
    "90-Day Optimization",
    "30-Day Post-Handoff Support",
  ];

  const notIncluded = [
    { item: "Not running your ads", reason: "You keep control of ad spend" },
    { item: "Not building new products", reason: "We work with what you have" },
    { item: "Not doing sales forever", reason: "We build and hand off" },
    { item: "Not giving generic advice", reason: "Everything is custom to your situation" },
    { item: "Not creating dependency", reason: "You own everything we build" },
  ];

  const successCriteria = [
    "You have a setter booking qualified appointments",
    "You have a closer converting those appointments",
    "Show rate is 70%+ (not 48%)",
    "Lead-to-appointment rate has doubled",
    "Failed payments are being recovered automatically",
    "Your database has been reactivated",
    "You have real-time visibility into all metrics",
    "Everything is documented and transferable",
    "You're on track for $100K/month",
  ];

  return (
    <section id="solution" className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What We Build For You
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              You don&apos;t need advice. You need execution. You don&apos;t need a sales person. 
              You need a sales <span className="text-accent font-medium">department</span>.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Big Picture Callout */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16 p-8 bg-elevated rounded-xl border border-accent/30 text-center">
            <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed">
              We will build your sales infrastructure — the people, the processes, and the technology — 
              so you can scale to <span className="text-accent">$100K/month</span> and beyond.
            </p>
            <p className="text-text-muted mt-4">
              This isn&apos;t coaching. This isn&apos;t consulting where we give you a PDF and wish you luck.
            </p>
            <p className="text-text-primary font-semibold mt-2">
              We build it. We install it. We train your team. We hand you the keys.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Three Pillars */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-text-primary mb-8 text-center">
              What &quot;Sales Infrastructure&quot; Actually Means
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {SOLUTION_PILLARS.map((pillar, index) => (
                <div key={index} className="p-6 bg-card rounded-xl border border-border-subtle">
                  <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-4 text-accent">
                    {iconMap[pillar.icon]}
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">{pillar.title}</h4>
                  <p className="text-text-muted text-sm mb-4">{pillar.subtitle}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                        <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Our Approach */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-16 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary">Our Approach</h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Build, Don&apos;t Advise</h4>
                  <p className="text-text-muted text-sm">We don&apos;t deliver reports that sit in folders. We build working systems in your GHL account.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Install, Don&apos;t Suggest</h4>
                  <p className="text-text-muted text-sm">We don&apos;t give you job descriptions and say &quot;good luck hiring.&quot; We recruit, vet, and train the people.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Prove, Don&apos;t Promise</h4>
                  <p className="text-text-muted text-sm">We don&apos;t make claims without data. Every decision is based on your numbers, and we track results obsessively.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-success" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Transfer, Don&apos;t Depend</h4>
                  <p className="text-text-muted text-sm">We don&apos;t create dependency. Everything we build is yours. Every system is documented. Every person is trained.</p>
                </div>
              </div>
            </div>

            {/* What This Is NOT */}
            <div className="p-6 bg-card rounded-xl border border-warning/20">
              <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-warning" />
                What This Is NOT
              </h3>
              <div className="space-y-4">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-warning mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary font-medium text-sm">{item.item}</p>
                      <p className="text-text-muted text-xs">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Deliverables Stack */}
        <FadeInOnScroll delay={0.4}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-text-primary mb-8 text-center">
              The Deliverables Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {deliverables.map((item, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-card rounded-lg border border-border-subtle text-center text-sm text-text-secondary hover:border-accent/30 transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-center text-accent font-semibold mt-6">
              18 deliverables. 150 days. One functioning sales department.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Success Criteria */}
        <FadeInOnScroll delay={0.5}>
          <div className="p-8 bg-elevated rounded-xl border border-success/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <Check className="w-6 h-6 text-success" />
              What Success Looks Like
            </h3>
            <p className="text-text-muted mb-6">At the end of this engagement:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {successCriteria.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-4">You&apos;ve built the hard parts.</p>
            <p className="text-text-primary font-medium text-lg mb-4">
              The products. The expertise. The content library. The VA network. The dev team.
            </p>
            <p className="text-accent text-xl font-semibold">
              Now you need the sales engine to monetize it all.
            </p>
            <p className="text-text-muted mt-4">That&apos;s what we build.</p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
