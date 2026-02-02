"use client";

import { FadeInOnScroll, CountUp } from "@/components/animations";
import { TrendingUp, Target, Lightbulb, DollarSign, Youtube, MessageSquare, Calendar } from "lucide-react";

export function Opportunity() {
  return (
    <section id="opportunity" className="bg-elevated py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Opportunity</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What&apos;s Actually Possible
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Let&apos;s flip the script. Instead of what&apos;s broken, let&apos;s look at what&apos;s working — 
              and what happens when you actually build the systems to capitalize on it.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Foundation Is Solid */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              The Foundation Is Solid
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-card rounded-xl border border-success/20 text-center">
                <p className="text-4xl font-bold text-success mb-2">75%</p>
                <p className="text-sm text-text-muted mb-3">Retention (4 months)</p>
                <p className="text-xs text-text-subtle">VIP coaching member retention</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-success/20 text-center">
                <p className="text-4xl font-bold text-success mb-2">5.5x</p>
                <p className="text-sm text-text-muted mb-3">LTV:CAC Ratio</p>
                <p className="text-xs text-text-subtle">Healthy is 3x — you&apos;re nearly 2x that</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-success/20 text-center">
                <p className="text-4xl font-bold text-success mb-2">$6</p>
                <p className="text-sm text-text-muted mb-3">Cost Per Lead</p>
                <p className="text-xs text-text-subtle">Industry avg is $50-85</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-accent/20 text-center">
                <p className="text-4xl font-bold text-accent mb-2">100K+</p>
                <p className="text-sm text-text-muted mb-3">Frustrated GHL Users</p>
                <p className="text-xs text-text-subtle">Massive market waiting</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Math That Should Make You Nervous */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16 p-8 bg-base rounded-xl border border-border-subtle">
            <h3 className="text-xl font-semibold text-text-primary mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              The Math That Should Make You Nervous
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current State */}
              <div className="p-6 bg-card rounded-xl border border-warning/20">
                <h4 className="font-medium text-warning mb-4">Current State</h4>
                <div className="font-mono text-sm text-text-muted space-y-1">
                  <p>$500/mo ad spend ÷ $6/lead = ~80 leads/mo</p>
                  <p>80 leads → 15 appointments → 7 show → 2 close</p>
                  <p>2 closes × $2,000 avg = <span className="text-warning">$4,000/mo new sales</span></p>
                  <p className="mt-3 text-text-primary">ROAS: 8x (good, but throttled)</p>
                </div>
              </div>

              {/* With Fixed Funnel */}
              <div className="p-6 bg-card rounded-xl border border-success/20">
                <h4 className="font-medium text-success mb-4">With Fixed Funnel</h4>
                <div className="font-mono text-sm text-text-muted space-y-1">
                  <p>$500/mo ad spend ÷ $6/lead = ~80 leads/mo</p>
                  <p>80 leads → 28 appointments → 20 show → 7 close</p>
                  <p>7 closes × $2,000 avg = <span className="text-success">$14,000/mo new sales</span></p>
                  <p className="mt-3 text-text-primary">ROAS: 28x</p>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-text-primary font-medium">
              Same ad spend. Same leads. <span className="text-accent text-xl">3.5x the new sales revenue.</span>
            </p>
            <p className="text-center text-text-muted text-sm mt-2">
              The difference? A functioning sales system.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Database Opportunity */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-16 p-8 bg-card rounded-xl border border-accent/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              The Database Opportunity
            </h3>
            <p className="text-5xl font-bold text-accent mb-6">10,000 contacts sitting idle.</p>
            
            <h4 className="text-sm text-text-muted uppercase tracking-wider mb-4">Conservative Database Reactivation (1-3% conversion)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 px-4 text-text-muted font-medium">Scenario</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Rate</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Customers</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">New Sales Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">1% to coaching ($500/mo)</td>
                    <td className="py-3 px-4 text-right text-text-muted">1%</td>
                    <td className="py-3 px-4 text-right text-text-muted">100</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$50,000 MRR</td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">2% to $197 course</td>
                    <td className="py-3 px-4 text-right text-text-muted">2%</td>
                    <td className="py-3 px-4 text-right text-text-muted">200</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$39,400</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-text-secondary">0.3% to $5K DFY build</td>
                    <td className="py-3 px-4 text-right text-text-muted">0.3%</td>
                    <td className="py-3 px-4 text-right text-text-muted">30</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$150,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-primary font-semibold mt-6 text-lg">
              Even at conservative 1-3% reactivation: <span className="text-accent">$50,000-$150,000</span> in new sales.
            </p>
            <p className="text-text-muted text-sm mt-2">With zero ad spend. From people who already know you.</p>
          </div>
        </FadeInOnScroll>

        {/* Strategic Recommendations */}
        <FadeInOnScroll delay={0.4}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-text-primary mb-8 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-accent" />
              Strategic Recommendations
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* YouTube Optimization */}
              <div className="p-6 bg-card rounded-xl border border-border-subtle">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Youtube className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="font-semibold text-text-primary mb-3">YouTube Optimization</h4>
                <p className="text-text-muted text-sm mb-4">
                  Adam&apos;s content is gold. But it&apos;s not optimized for conversion.
                </p>
                <ul className="text-text-muted text-xs space-y-1">
                  <li>• Clear CTAs on every video</li>
                  <li>• &quot;Start Here&quot; playlist for new viewers</li>
                  <li>• End screens → opt-in pages</li>
                  <li>• Pin comments with offers</li>
                </ul>
              </div>

              {/* "Make GHL Not Suck" Campaign */}
              <div className="p-6 bg-card rounded-xl border border-accent/30">
                <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-text-primary mb-3">&quot;Make GHL Not Suck&quot;</h4>
                <p className="text-text-muted text-sm mb-4">
                  This is rage bait that prints money.
                </p>
                <blockquote className="text-text-secondary text-xs italic border-l-2 border-accent pl-3 mb-4">
                  &quot;GoHighLevel promised to change your business. Instead, it&apos;s destroying it. Here&apos;s how to actually make it work.&quot;
                </blockquote>
                <p className="text-accent text-xs font-medium">Pattern interrupt. Instant qualification.</p>
              </div>

              {/* Office Hours → Upsell Ladder */}
              <div className="p-6 bg-card rounded-xl border border-border-subtle">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-success" />
                </div>
                <h4 className="font-semibold text-text-primary mb-3">Office Hours → Upsell Ladder</h4>
                <p className="text-text-muted text-sm mb-4">
                  Pack office hours with coaching clients. Use it as the ascension point.
                </p>
                <div className="text-text-muted text-xs space-y-1">
                  <p>Content → Free resources</p>
                  <p>→ $197 course → Group coaching</p>
                  <p>→ 1:1 coaching → VA services</p>
                  <p>→ DFY builds ($3K-$30K)</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Compounding Effect - MRR Stacking */}
        <FadeInOnScroll delay={0.5}>
          <div className="mb-16 p-8 bg-elevated rounded-xl border border-success/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-success" />
              The Compounding Effect (True MRR Stacking)
            </h3>
            
            <p className="text-text-secondary mb-6">
              This is how recurring revenue <span className="text-success font-semibold">actually compounds</span> — 
              each month&apos;s new sales become next month&apos;s baseline.
            </p>

            {/* Compounding Math Example */}
            <div className="space-y-4 mb-8">
              {/* Month 0: Starting Point */}
              <div className="flex items-center gap-4 p-4 bg-base rounded-lg">
                <div className="w-20 text-center">
                  <p className="text-xs text-text-muted uppercase">Start</p>
                  <p className="text-sm font-semibold text-text-secondary">Current</p>
                </div>
                <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-text-muted/50 rounded-full" style={{ width: '25%' }} />
                </div>
                <div className="w-28 text-right">
                  <p className="text-xl font-bold text-text-primary">$50K</p>
                  <p className="text-xs text-text-muted">MMR</p>
                </div>
              </div>

              {/* Month 1: +$20K new recurring */}
              <div className="flex items-center gap-4 p-4 bg-base rounded-lg border border-success/20">
                <div className="w-20 text-center">
                  <p className="text-xs text-text-muted uppercase">Month 1</p>
                  <p className="text-sm font-semibold text-success">+$20K</p>
                </div>
                <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-text-muted/50 to-success/70 rounded-full" style={{ width: '35%' }} />
                </div>
                <div className="w-28 text-right">
                  <p className="text-xl font-bold text-success">$70K</p>
                  <p className="text-xs text-text-muted">MMR</p>
                </div>
              </div>

              {/* Month 2: +$50K new recurring */}
              <div className="flex items-center gap-4 p-4 bg-base rounded-lg border border-success/30">
                <div className="w-20 text-center">
                  <p className="text-xs text-text-muted uppercase">Month 2</p>
                  <p className="text-sm font-semibold text-success">+$50K</p>
                </div>
                <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-success/60 to-success rounded-full" style={{ width: '60%' }} />
                </div>
                <div className="w-28 text-right">
                  <p className="text-xl font-bold text-success">$120K</p>
                  <p className="text-xs text-text-muted">MMR</p>
                </div>
              </div>

              {/* Month 3: +$80K new recurring */}
              <div className="flex items-center gap-4 p-4 bg-base rounded-lg border border-accent/40">
                <div className="w-20 text-center">
                  <p className="text-xs text-text-muted uppercase">Month 3</p>
                  <p className="text-sm font-semibold text-accent">+$80K</p>
                </div>
                <div className="flex-1 h-3 bg-card rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-success to-accent rounded-full" style={{ width: '100%' }} />
                </div>
                <div className="w-28 text-right">
                  <p className="text-xl font-bold text-accent">$200K</p>
                  <p className="text-xs text-text-muted">MMR</p>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="p-6 bg-base rounded-lg border border-accent/20">
              <p className="text-text-primary font-semibold mb-3">
                The Math That Matters:
              </p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-success">→</span>
                  New sales become <span className="text-success font-medium">recurring revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">→</span>
                  Recurring compounds <span className="text-success font-medium">on top of recurring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">→</span>
                  75% retention at 4 months = clients worth <span className="text-success font-medium">$2,000+</span> LTV
                </li>
              </ul>
            </div>

            <div className="p-6 bg-success/10 rounded-lg mt-6 border border-success/30">
              <p className="text-accent font-bold text-xl text-center">
                $100K/month in new recurring = $1.2M+ annual once it stacks.
              </p>
              <p className="text-text-muted text-sm text-center mt-2">
                Every month you wait, you&apos;re not losing $15K — 
                you&apos;re losing <span className="text-text-primary font-medium">years</span> of compounding MRR.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Real Question */}
        <FadeInOnScroll delay={0.6}>
          <div className="text-center">
            <p className="text-text-secondary mb-4">You&apos;re not asking &quot;Is this possible?&quot;</p>
            <p className="text-text-primary font-medium text-lg mb-4">The numbers prove it is.</p>
            <p className="text-accent text-xl font-semibold">
              You&apos;re asking &quot;How do we actually do it?&quot;
            </p>
            <p className="text-text-muted text-sm mt-4">That&apos;s the next section.</p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
