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
                <p className="text-sm text-text-muted mb-3">Retention (6 months)</p>
                <p className="text-xs text-text-subtle">VA services retention is exceptional</p>
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
                  <p>$6/lead × 40 leads/week = $240/week ad spend</p>
                  <p>40 leads → 7 appointments → 2.5 show → 1.5 close</p>
                  <p>1.5 closes × $500 avg = <span className="text-warning">$750/week revenue</span></p>
                  <p className="mt-3 text-text-primary">ROAS: 3.1x (good, but throttled)</p>
                </div>
              </div>

              {/* With Fixed Funnel */}
              <div className="p-6 bg-card rounded-xl border border-success/20">
                <h4 className="font-medium text-success mb-4">With Fixed Funnel</h4>
                <div className="font-mono text-sm text-text-muted space-y-1">
                  <p>$6/lead × 40 leads/week = $240/week ad spend</p>
                  <p>40 leads → 14 appointments → 10 show → 7 close</p>
                  <p>7 closes × $500 avg = <span className="text-success">$3,500/week revenue</span></p>
                  <p className="mt-3 text-text-primary">ROAS: 14.6x</p>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-text-primary font-medium">
              Same ad spend. Same leads. <span className="text-accent text-xl">4.7x the revenue.</span>
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
            
            <h4 className="text-sm text-text-muted uppercase tracking-wider mb-4">The Conservative Math</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 px-4 text-text-muted font-medium">Scenario</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Conversion</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Customers</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">0.5% to coaching</td>
                    <td className="py-3 px-4 text-right text-text-muted">50</td>
                    <td className="py-3 px-4 text-right text-text-muted">50 × $500</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$25,000 MRR</td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-secondary">1% to $197 course</td>
                    <td className="py-3 px-4 text-right text-text-muted">100</td>
                    <td className="py-3 px-4 text-right text-text-muted">100 × $197</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$19,700</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-text-secondary">0.2% to $5K build</td>
                    <td className="py-3 px-4 text-right text-text-muted">20</td>
                    <td className="py-3 px-4 text-right text-text-muted">20 × $5,000</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$100,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-primary font-semibold mt-6 text-lg">
              A single reactivation campaign could generate <span className="text-accent">$50,000-$150,000</span>.
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

        {/* LTV Compounding */}
        <FadeInOnScroll delay={0.5}>
          <div className="mb-16 p-8 bg-elevated rounded-xl border border-success/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-success" />
              The Compounding Effect (LTV Projection)
            </h3>
            
            <p className="text-text-secondary mb-6">
              Why $100K/Month is Actually Bigger Than It Looks
            </p>
            
            <p className="text-text-secondary mb-4">
              New revenue isn&apos;t one-time. It <span className="text-success font-medium">compounds</span>.
            </p>
            
            <p className="text-text-secondary mb-6">
              When you close a $500/mo coaching client, that&apos;s not $500. That&apos;s:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-base rounded-lg">
                <p className="text-2xl font-bold text-text-primary">$1,500</p>
                <p className="text-xs text-text-muted">3 months</p>
              </div>
              <div className="text-center p-4 bg-base rounded-lg">
                <p className="text-2xl font-bold text-text-primary">$2,000</p>
                <p className="text-xs text-text-muted">4 months</p>
              </div>
              <div className="text-center p-4 bg-base rounded-lg">
                <p className="text-2xl font-bold text-text-primary">$3,000</p>
                <p className="text-xs text-text-muted">6 months</p>
              </div>
              <div className="text-center p-4 bg-base rounded-lg border border-success/30">
                <p className="text-2xl font-bold text-success">$6,000</p>
                <p className="text-xs text-text-muted">12 months</p>
              </div>
            </div>

            <p className="text-text-secondary mb-4">
              With 75% retention at 6 months, your average coaching client is worth 
              <span className="text-success font-bold"> $3,000+</span> over their lifetime.
            </p>

            <div className="p-6 bg-base rounded-lg mt-6">
              <p className="text-accent font-bold text-xl text-center">
                $100K/month in new sales = $1.2M+ annual revenue once the MRR stacks.
              </p>
              <p className="text-text-muted text-sm text-center mt-2">
                This is why the sales problem matters. Every month you wait, you&apos;re not losing $15K — 
                you&apos;re losing <span className="text-text-primary font-medium">years</span> of compounding LTV.
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
