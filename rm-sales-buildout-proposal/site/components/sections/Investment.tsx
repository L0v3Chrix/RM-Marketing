"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Shield, Check, X, Percent, ArrowRight } from "lucide-react";
import { INVESTMENT } from "@/lib/constants";

export function Investment() {
  const performanceExamples = [
    { revenue: "$35K (baseline)", base: "$10,000", performance: "$0", youPay: "$10,000", youKeep: "$25,000" },
    { revenue: "$50K", base: "$10,000", performance: "$2,250", youPay: "$12,250", youKeep: "$37,750" },
    { revenue: "$70K", base: "$10,000", performance: "$5,250", youPay: "$15,000*", youKeep: "$55,000" },
    { revenue: "$100K", base: "$10,000", performance: "$9,750", youPay: "$15,000*", youKeep: "$85,000" },
  ];

  return (
    <section id="investment" className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Investment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Prove First, Then Build
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We&apos;re doing for your sales system what you do for others&apos; GHL systems.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Structure Overview */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16 p-6 bg-card rounded-xl border border-border-subtle">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              The Engagement Structure
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <p className="text-accent text-sm font-medium uppercase mb-2">Phase 1</p>
                <p className="text-text-primary font-semibold">The Proof</p>
                <p className="text-text-muted text-sm">60 Days</p>
                <p className="text-2xl font-bold text-accent mt-2">$10,000</p>
                <p className="text-xs text-text-subtle">(fixed)</p>
              </div>
              <div className="p-4">
                <p className="text-success text-sm font-medium uppercase mb-2">Phase 2</p>
                <p className="text-text-primary font-semibold">The Build</p>
                <p className="text-text-muted text-sm">90 Days</p>
                <p className="text-2xl font-bold text-success mt-2">$30-45K</p>
                <p className="text-xs text-text-subtle">(base + perf)</p>
              </div>
              <div className="p-4 opacity-60">
                <p className="text-text-muted text-sm font-medium uppercase mb-2">Ongoing</p>
                <p className="text-text-primary font-semibold">Support</p>
                <p className="text-text-muted text-sm">Negotiate</p>
                <p className="text-2xl font-bold text-text-muted mt-2">TBD</p>
                <p className="text-xs text-text-subtle">(retainer)</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Phase 1 Details */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-12 p-8 bg-card rounded-xl border border-accent/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              {INVESTMENT.phase1.name} — $10,000
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Payment Structure */}
              <div>
                <h4 className="font-medium text-text-primary mb-4">Payment Structure</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                    <span className="text-text-secondary">Deposit</span>
                    <span className="text-accent font-semibold">$5,000</span>
                  </div>
                  <div className="flex items-center justify-center text-text-muted">
                    <ArrowRight className="w-4 h-4" />
                    <span className="text-xs mx-2">20 qualified appointments delivered</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                    <span className="text-text-secondary">Milestone</span>
                    <span className="text-accent font-semibold">$5,000</span>
                  </div>
                </div>
              </div>

              {/* The Guarantee */}
              <div className="p-4 bg-success/10 rounded-xl border border-success/30">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-success" />
                  <h4 className="font-semibold text-success">The Guarantee</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  {INVESTMENT.phase1.guarantee}
                </p>
                <p className="text-text-muted text-xs mt-3 italic">
                  We guarantee what WE control, not what you do with it.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Phase 2 Details */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-12 p-8 bg-card rounded-xl border border-success/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              {INVESTMENT.phase2.name} — $10,000/month base + performance
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Structure */}
              <div>
                <h4 className="font-medium text-text-primary mb-4">Monthly Structure</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-base rounded">
                    <span className="text-text-muted">Base Fee</span>
                    <span className="text-text-primary">$10,000/month</span>
                  </div>
                  <div className="flex justify-between p-2 bg-base rounded">
                    <span className="text-text-muted">Performance</span>
                    <span className="text-text-primary">15% of revenue over $35K</span>
                  </div>
                  <div className="flex justify-between p-2 bg-base rounded border border-success/20">
                    <span className="text-text-muted">Cap</span>
                    <span className="text-success font-medium">$15,000/month max</span>
                  </div>
                </div>
              </div>

              {/* Alignment Note */}
              <div className="flex items-center">
                <div className="p-4 bg-base rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Percent className="w-5 h-5 text-accent" />
                    <span className="font-medium text-text-primary">Performance Aligned</span>
                  </div>
                  <p className="text-text-muted text-sm">
                    At scale, you&apos;re paying 15% of total revenue. We leave 85% for you to run ads, 
                    pay commissions, and keep profit.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Examples Table */}
            <h4 className="font-medium text-text-primary mb-4">Performance Examples</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-2 px-3 text-text-muted font-medium">Your Revenue</th>
                    <th className="text-right py-2 px-3 text-text-muted font-medium">Base</th>
                    <th className="text-right py-2 px-3 text-text-muted font-medium">Performance</th>
                    <th className="text-right py-2 px-3 text-text-muted font-medium">You Pay</th>
                    <th className="text-right py-2 px-3 text-success font-medium">You Keep</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceExamples.map((row, index) => (
                    <tr key={index} className="border-b border-border-subtle">
                      <td className="py-2 px-3 text-text-primary">{row.revenue}</td>
                      <td className="py-2 px-3 text-right text-text-muted">{row.base}</td>
                      <td className="py-2 px-3 text-right text-text-muted">{row.performance}</td>
                      <td className="py-2 px-3 text-right text-accent">{row.youPay}</td>
                      <td className="py-2 px-3 text-right text-success font-medium">{row.youKeep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-text-subtle text-xs mt-2">*Capped at $15,000/month</p>
          </div>
        </FadeInOnScroll>

        {/* Total Investment Summary */}
        <FadeInOnScroll delay={0.4}>
          <div className="mb-12 p-8 bg-elevated rounded-xl border border-accent/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              Total Investment Summary
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <p className="text-text-muted text-sm">Phase 1 (The Proof)</p>
                <p className="text-2xl font-bold text-text-primary">$10,000</p>
              </div>
              <div>
                <p className="text-text-muted text-sm">Phase 2 (The Build)</p>
                <p className="text-2xl font-bold text-text-primary">$30,000 - $45,000</p>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="text-accent text-sm font-medium">Main Engagement</p>
                <p className="text-3xl font-bold text-accent">$40,000 - $55,000</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-text-muted text-sm mb-2">Your Potential Return:</p>
              <p className="text-success font-bold text-xl">$780,000/year at $100K/month run rate</p>
              <p className="text-accent font-semibold mt-1">ROI: 14-19x</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* No Equity / No Perpetuity */}
        <FadeInOnScroll delay={0.5}>
          <div className="p-8 bg-card rounded-xl border border-success/30">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              No Equity. No Perpetuity.
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-text-primary mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-error" />
                  We Don&apos;t Ask For
                </h4>
                <ul className="space-y-2 text-text-muted text-sm">
                  {INVESTMENT.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <X className="w-4 h-4 text-error" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-text-primary mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-success" />
                  You Own Everything
                </h4>
                <p className="text-text-secondary text-sm">
                  When this engagement ends, you own everything. Forever.
                </p>
                <p className="text-text-muted text-sm mt-3">
                  The systems. The processes. The playbooks. The trained team. All yours.
                </p>
                <p className="text-success font-medium text-sm mt-3">
                  No strings. No trailing royalties. No &quot;we get 5% of your revenue in perpetuity.&quot;
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.6}>
          <div className="mt-16 text-center">
            <p className="text-4xl font-bold text-accent mb-4">$5,000 to get started.</p>
            <p className="text-text-secondary text-lg mb-4">
              20 appointments in 30 days or walk away.
            </p>
            <p className="text-text-primary font-medium">
              Low risk for you. High reward if it works. No-brainer to continue.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
