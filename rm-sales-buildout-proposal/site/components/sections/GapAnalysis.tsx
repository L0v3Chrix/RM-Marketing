"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Check, X, AlertCircle } from "lucide-react";

export function GapAnalysis() {
  const gaps = [
    {
      title: "No Dedicated Sales Capacity",
      description: "Adam IS the sales team. When he's creating content, leads die. When he's on a coaching call, no one's following up.",
    },
    {
      title: "No Speed-to-Lead System",
      description: "Leads cool off in 24-48 hours. No one's calling same-day. By the time someone reaches out, they've forgotten why they booked.",
    },
    {
      title: "No Show-Up Sequences",
      description: "48% show rate. Industry standard is 60-70%. Half your appointments are ghosting because there's no pre-call nurture.",
    },
    {
      title: "No Database Reactivation",
      description: "10,000 contacts sitting cold. These are people who already know you. Zero ad spend required to work them.",
    },
    {
      title: "No Failed Payment Recovery",
      description: "$25K in dunning opportunities. Money already earned, not collected. Low-hanging fruit that no one's picking.",
    },
    {
      title: "No Documented Systems",
      description: "Nothing exists outside Adam's head. You can't hire into chaos. New people have nothing to follow.",
    },
    {
      title: "No KPIs or Tracking",
      description: "Can't improve what you can't measure. Flying blind on what's actually working.",
    },
    {
      title: "No Team Structure",
      description: "No setters. No closers. No accountability. No comp plan. No one to manage even if you hired a manager.",
    },
  ];

  const haveItems = [
    "Great offer",
    "Leads coming in",
    "Content machine",
    "Reputation",
  ];

  const needItems = [
    "Dedicated team",
    "Speed-to-lead",
    "70%+ show rate",
    "Database worked",
    "Payments recovered",
    "Full SOPs",
    "KPI dashboard",
    "Setter + Closer",
  ];

  return (
    <section id="gap" className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Gap</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What&apos;s Missing
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The funnel isn&apos;t the problem. Everything around it is.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Missing Pieces Grid */}
        <FadeInOnScroll delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {gaps.map((gap, index) => (
              <div 
                key={index} 
                className="p-6 bg-card rounded-xl border border-border-subtle hover:border-warning/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-warning" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-2">{gap.title}</h4>
                    <p className="text-text-muted text-sm">{gap.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        {/* The Key Insight */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16 p-8 bg-elevated rounded-xl border border-accent/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3">The Key Insight</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  <span className="text-accent font-semibold">You can&apos;t hire a sales manager into this.</span>
                </p>
                <p className="text-text-secondary mt-3">
                  There&apos;s nothing for them to manage. No systems to run. No team to lead. 
                  No processes to optimize.
                </p>
                <p className="text-text-primary font-medium mt-4">
                  You need someone to <span className="text-accent">BUILD</span> the department first. 
                  Then hand it off.
                </p>
                <p className="text-text-muted text-sm mt-3 italic">
                  That&apos;s not a sales manager. That&apos;s a sales architect.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Visual Gap Analysis */}
        <FadeInOnScroll delay={0.3}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* What You Have */}
            <div className="p-6 bg-card rounded-xl border border-success/20">
              <h4 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-success" />
                What You Have
              </h4>
              <div className="space-y-3">
                {haveItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Need */}
            <div className="p-6 bg-card rounded-xl border border-accent/20">
              <h4 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-warning" />
                What You Need
              </h4>
              <div className="space-y-3">
                {needItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded border border-accent" />
                    <span className="text-text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-text-secondary mb-4">
              The question isn&apos;t &quot;Is the business viable?&quot;
            </p>
            <p className="text-text-primary font-medium text-lg mb-4">
              The numbers prove it is.
            </p>
            <p className="text-accent text-xl font-semibold">
              The question is: &quot;What happens when you actually staff it?&quot;
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
