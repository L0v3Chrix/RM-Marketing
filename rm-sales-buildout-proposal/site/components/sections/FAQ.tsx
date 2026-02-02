"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Accordion } from "@/components/ui";

const faqItems = [
  {
    question: "What if we don't hit 20 appointments by Day 30?",
    answer: "Then you get your money back. Seriously. We're so confident we can find people in your database who actually WANT your help that we'll bet on it. If we're wrong, you keep everything we built and walk away with just the $5K deposit invested. But let's be real — 10,000 contacts and we can't find 20 people interested? That's like saying there's no one at a steakhouse who wants meat. 🥩",
    category: "Risk",
  },
  {
    question: "How much of Adam's time does this take?",
    answer: "Less than scrolling your 'I'll deal with this later' bookmark folder. 2-3 hours per week max. One 30-minute call plus occasional Slack pings. The whole point is getting Adam OFF the phones and back to making content that makes people say 'wow this guy actually knows GHL.' Which is the plan, right? Right? 😅",
    category: "Time",
  },
  {
    question: "Why can't I just hire a sales manager instead?",
    answer: "Great question! You absolutely CAN. Go hire a $80K/year sales manager, wait 6-9 months for them to 'learn the product,' and then discover they need systems, scripts, training programs, and a team to manage. You know what sales managers manage? SALES TEAMS. You don't have one. It's like hiring a pilot for a plane that hasn't been built yet. We build the plane. Then you hire the pilot. 🛩️",
    category: "Alternatives",
  },
  {
    question: "What if I've tried consultants before and they sucked?",
    answer: "Oh, you mean the ones who gave you a 47-page PDF of 'strategic recommendations' and then vanished like your gym membership motivation in February? Yeah, we hate those guys too. We don't give you a strategy deck and wish you luck. We build actual working systems. In YOUR GHL. That YOU own. And we stick around for 150 days to make sure it actually works. Revolutionary concept, we know. 📊",
    category: "Differentiator",
  },
  {
    question: "Who owns what you build?",
    answer: "You do. All of it. 100%. No equity ask, no perpetual revenue share, no 'licensing fees' (the most creative way consultants have invented to keep billing you forever). When we're done, you own everything — scripts, systems, SOPs, documentation. It's like hiring a contractor to build a house, not a landlord to rent you one forever. Weird that this needs to be said. 🏠",
    category: "Ownership",
  },
  {
    question: "Do you guarantee I'll hit $100K/month?",
    answer: "We guarantee deliverables — the systems, the team, the documentation. We can NOT guarantee your leads suddenly become more attracted to you, or that the economy cooperates, or that Mercury isn't in retrograde. But here's the thing: our performance bonus is tied to YOUR results. So if you don't hit the numbers, we don't get paid extra. We're literally incentivized to make you money. Funny how that works. 💰",
    category: "Results",
  },
  {
    question: "What happens if something goes wrong?",
    answer: "Things go wrong in every engagement. The question is: do you have someone who will pretend everything is fine, or someone with a color-coded panic system? We have: Yellow flag (75% of target) = 'let's chat.' Orange flag (50% of target) = 'emergency strategy session.' Red flag (declining week-over-week) = 'all hands on deck.' We don't bury problems — we solve them before they become disasters. 🚨",
    category: "Process",
  },
  {
    question: "Who actually does the work? Like... really?",
    answer: "Chrix and Sarah. That's it. No mysterious 'implementation team' in a timezone you can't spell. No fresh-out-of-college associates. No offshore contractors Googling 'what is GoHighLevel.' When you hire us, you GET us. Every call, every follow-up, every close. If that sounds expensive, remember what you're currently paying for: leads that go cold and a database that collects digital dust. 🧹",
    category: "Team",
  },
  {
    question: "What if the person you hire for my team doesn't work out?",
    answer: "Then we find another one. Hiring isn't an exact science — sometimes people look great on paper and then reveal they think 'follow-up' means texting once and praying. That's why we have a 90-day ramp period. If someone isn't cutting it, we recruit their replacement. Our goal is a working team, not just warm bodies in seats pretending to be salespeople. 👥",
    category: "Hiring",
  },
  {
    question: "Will you run our ads?",
    answer: "Nope. Stay in your lane, right? We're sales infrastructure specialists, not media buyers. We WILL help with ad messaging strategy — like that 'I Hate High Level' angle that makes frustrated GHL users stop scrolling. But the actual button-clicking in Facebook Ads Manager? That's your jam (or your agency's). We just make sure the leads you're paying for actually turn into money. 🎯",
    category: "Scope",
  },
  {
    question: "What's not included that I should budget for?",
    answer: "Real talk: Ad spend ($500-$3,000/month, depending on how fast you want to grow), team salaries after we hand it over ($3K-8K/month for a setter + closer), and your existing GHL/tool subscriptions. Think of it this way: you pay us to build the car. You still need gas to drive it. But at least now you HAVE a car instead of... whatever you're currently doing. 🚗",
    category: "Investment",
  },
  {
    question: "Seriously though, why should I trust you?",
    answer: "Because we made you read this entire proposal instead of just asking for a call. Because we showed you YOUR data and said 'here's what's broken' instead of vague promises. Because we have a money-back guarantee tied to actual results. And honestly? Because you've read this far, which means some part of you knows this makes sense. That gut feeling? It's not the breakfast burrito. It's clarity. 🌯✨",
    category: "Trust",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-elevated py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Real Talk Section</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Questions Your Inner Skeptic is Screaming
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Look, we get it. You&apos;ve been burned before. Here&apos;s the honest answers to everything you&apos;re too polite to ask.
            </p>
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
