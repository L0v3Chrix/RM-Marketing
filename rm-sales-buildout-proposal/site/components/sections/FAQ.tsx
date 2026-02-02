"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Accordion } from "@/components/ui";

const faqItems = [
  {
    question: "What if we don't hit 20 appointments by Day 30?",
    answer: "That's our guarantee. If we haven't generated at least 20 qualified appointments from your existing database by Day 30, you can walk away with just the $5K deposit invested. You keep everything we built — the sequences, the documentation, the learnings.",
    category: "Risk",
  },
  {
    question: "How much of Adam's time does this take?",
    answer: "2-3 hours per week max. One 30-minute strategy call plus occasional Slack questions. The whole point is to get Adam off the phones DAY ONE and back to content creation. Pipeline is handed over immediately.",
    category: "Time",
  },
  {
    question: "Who handles the dunning/failed payments?",
    answer: "We create the SOP and train Jonah (your CS person) on the dunning process. We do NOT chase payments ourselves — we build the system so your team can recover that $25K+ in failed payments systematically.",
    category: "Process",
  },
  {
    question: "Who owns what you build?",
    answer: "You do. 100%. Scripts, systems, SOPs, documentation — all yours. No equity, no perpetual revenue share, no licensing fees. We build independence, not dependency. When this engagement ends, you own everything forever.",
    category: "Ownership",
  },
  {
    question: "Why can't I just hire a sales manager instead?",
    answer: "A sales manager runs what exists. You don't have anything to run yet. You need the infrastructure built first — the systems, the processes, the scripts, the tracking. Then you can hire someone to manage it. That's exactly what we deliver. Alternative: $80K+ salary with 6-9 month ramp time vs. our $40-55K with results in 30 days.",
    category: "Alternatives",
  },
  {
    question: "What if I've tried other consultants before?",
    answer: "We're not consultants who give you a strategy deck and wish you luck. We build working systems in your GHL. We recruit and train actual people. We stay for 150 days to make sure it works. Everything we create is yours to keep. If previous engagements failed because of lack of implementation, this one won't have that problem.",
    category: "Differentiator",
  },
  {
    question: "Do you guarantee specific revenue numbers?",
    answer: "We guarantee deliverables — the systems, the documentation, the trained team. We don't guarantee specific revenue numbers because too many variables are outside our control (ad performance, market conditions, execution by your team post-handoff). That said, our performance bonus is tied to results. We're incentivized to get you to $100K/month.",
    category: "Results",
  },
  {
    question: "What happens if something goes wrong during the engagement?",
    answer: "We have a clear escalation process. Yellow flag (metric at 75% target): Discuss in weekly call. Orange flag (metric at 50% target): Immediate strategy adjustment. Red flag (declining week-over-week): Emergency intervention. We don't leave problems to fester — we address them in real-time.",
    category: "Process",
  },
  {
    question: "Who actually does the work?",
    answer: "Chrix and Sarah. Directly. No junior staff, no offshore teams, no subcontractors. When you hire us, you get us. Every call, every follow-up, every close — it's us.",
    category: "Team",
  },
  {
    question: "What if the person you hire doesn't work out?",
    answer: "Hiring is never 100% certain. Here's our approach: Rigorous vetting reduces risk. Training increases success probability. 90-day ramp period allows for assessment. If needed, we help recruit a replacement within scope. Our goal is to hand you a functioning team, not just fill seats.",
    category: "Hiring",
  },
  {
    question: "Will you run our ads?",
    answer: "No. Advertising management is outside this scope. We will provide ad messaging strategy — the 'I Hate High Level' positioning, headline examples, copy direction. But actual media buying remains with you or your agency.",
    category: "Scope",
  },
  {
    question: "What's not included that I should budget for?",
    answer: "Ad spend ($1,500-$5,000/month recommended), team salaries after handoff ($3,000-8,000/month for setter + closer), and tool subscriptions (GHL, dialers, etc.). You're paying us to build the system. You're paying your team to run it.",
    category: "Investment",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-elevated py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Questions You Might Have
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Accordion FAQ */}
        <FadeInOnScroll delay={0.1}>
          <Accordion items={faqItems} />
        </FadeInOnScroll>

        {/* Still Have Questions */}
        <FadeInOnScroll delay={0.2}>
          <div className="mt-12 text-center p-6 bg-card rounded-xl border border-border-subtle">
            <p className="text-text-secondary mb-4">Still have questions?</p>
            <a 
              href="mailto:chrix@raisethevibe.com" 
              className="text-accent font-medium hover:text-accent-hover transition-colors"
            >
              Email Chrix → chrix@raisethevibe.com
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
