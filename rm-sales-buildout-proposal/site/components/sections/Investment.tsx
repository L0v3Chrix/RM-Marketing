"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Shield, Check, X, Percent, ArrowRight, Calendar, DollarSign, Target } from "lucide-react";

export function Investment() {
  // CORRECT pricing structure
  const paymentSchedule = [
    { payment: "Deposit", amount: "$5,000", trigger: "Agreement signed", phase: 1 },
    { payment: "Milestone 1", amount: "$5,000", trigger: "Day 30 — 20 validated appointments + KPI metrics", phase: 1 },
    { payment: "Month 2", amount: "$10,000", trigger: "Day 60", phase: 2 },
    { payment: "Month 3", amount: "$10,000 + performance", trigger: "Day 90", phase: 2 },
    { payment: "Month 4", amount: "$10,000 + performance", trigger: "Day 120", phase: 2 },
  ];

  const performanceExamples = [
    { revenue: "$35K (baseline)", base: "$10,000", performance: "$0", youPay: "$10,000", youKeep: "$25,000" },
    { revenue: "$50K", base: "$10,000", performance: "$2,250", youPay: "$12,250", youKeep: "$37,750" },
    { revenue: "$70K", base: "$10,000", performance: "$5,250", youPay: "$15,000*", youKeep: "$55,000" },
    { revenue: "$100K", base: "$10,000", performance: "$9,750", youPay: "$15,000*", youKeep: "$85,000" },
  ];

  const keyPoints = [
    "No equity ask",
    "No perpetual revenue share", 
    "No ongoing licensing fees",
    "Client owns everything at end of engagement",
  ];

  return (
    <section id="investment" className="bg-base py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">The Investment</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Prove First, Then Build
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              We&apos;re doing for your sales system what you do for others&apos; GHL systems.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Payment Schedule - The Source of Truth */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16 p-6 md:p-8 bg-card rounded-xl border border-accent/30">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6 text-center">
              Payment Schedule
            </h3>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b-2 border-accent/30">
                    <th className="text-left py-4 px-4 text-text-muted font-semibold">Payment</th>
                    <th className="text-right py-4 px-4 text-text-muted font-semibold">Amount</th>
                    <th className="text-left py-4 px-4 text-text-muted font-semibold">Trigger</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentSchedule.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-border-subtle ${row.phase === 1 ? 'bg-accent/5' : ''}`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${row.phase === 1 ? 'bg-accent/20 text-accent' : 'bg-success/20 text-success'}`}>
                            {row.phase === 1 ? <Target className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
                          </div>
                          <span className="text-text-primary font-medium">{row.payment}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className={`font-bold text-lg ${row.phase === 1 ? 'text-accent' : 'text-success'}`}>
                          {row.amount}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-text-secondary">{row.trigger}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-elevated">
                    <td className="py-4 px-4 text-text-primary font-bold text-lg">Total Engagement</td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-bold text-xl text-accent">$40,000 - $55,000</span>
                    </td>
                    <td className="py-4 px-4 text-text-muted">~120 Days</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {paymentSchedule.map((row, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg ${row.phase === 1 ? 'bg-accent/10 border border-accent/30' : 'bg-success/10 border border-success/30'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-text-primary text-lg">{row.payment}</span>
                    <span className={`font-bold text-xl ${row.phase === 1 ? 'text-accent' : 'text-success'}`}>
                      {row.amount}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm">{row.trigger}</p>
                </div>
              ))}
              <div className="p-4 bg-elevated rounded-lg border border-accent/30 text-center">
                <p className="text-text-muted text-sm mb-1">Total Engagement</p>
                <p className="text-2xl font-bold text-accent">$40,000 - $55,000</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Phase Breakdown */}
        <FadeInOnScroll delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Phase 1 */}
            <div className="p-6 md:p-8 bg-card rounded-xl border border-accent/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Phase 1: The Proof</h3>
                  <p className="text-text-muted">First 30 Days — $10,000</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                  <span className="text-text-secondary">Deposit (Day 0)</span>
                  <span className="text-accent font-bold text-lg">$5,000</span>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
                <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                  <span className="text-text-secondary">Milestone (Day 30)</span>
                  <span className="text-accent font-bold text-lg">$5,000</span>
                </div>
              </div>

              {/* The Guarantee */}
              <div className="p-4 bg-success/10 rounded-xl border border-success/30">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-success" />
                  <h4 className="font-semibold text-success">The Guarantee</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  If by Day 30, we haven&apos;t generated at least 20 validated appointments + hit KPI metrics, 
                  you can walk away with just the $5K deposit invested.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 md:p-8 bg-card rounded-xl border border-success/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                  <span className="text-success font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">Phase 2: The Build</h3>
                  <p className="text-text-muted">Days 60-120 — $30K-$45K</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                  <span className="text-text-secondary">Day 60</span>
                  <span className="text-success font-bold">$10,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                  <span className="text-text-secondary">Day 90</span>
                  <span className="text-success font-bold">$10,000 + perf</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-base rounded-lg">
                  <span className="text-text-secondary">Day 120</span>
                  <span className="text-success font-bold">$10,000 + perf</span>
                </div>
              </div>

              {/* Performance Note */}
              <div className="p-4 bg-base rounded-xl border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-success" />
                  <span className="font-medium text-text-primary">Performance Component</span>
                </div>
                <p className="text-text-muted text-sm">
                  15% of revenue over $35K baseline, capped at $15K/month.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Performance Examples */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-16 p-6 md:p-8 bg-elevated rounded-xl border border-border-subtle">
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              How Performance Works
            </h3>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 px-4 text-text-muted font-medium">Your Revenue</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Base</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">Performance</th>
                    <th className="text-right py-3 px-4 text-accent font-medium">You Pay</th>
                    <th className="text-right py-3 px-4 text-success font-medium">You Keep</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceExamples.map((row, index) => (
                    <tr key={index} className="border-b border-border-subtle">
                      <td className="py-3 px-4 text-text-primary font-medium">{row.revenue}</td>
                      <td className="py-3 px-4 text-right text-text-muted">{row.base}</td>
                      <td className="py-3 px-4 text-right text-text-muted">{row.performance}</td>
                      <td className="py-3 px-4 text-right text-accent font-medium">{row.youPay}</td>
                      <td className="py-3 px-4 text-right text-success font-bold">{row.youKeep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {performanceExamples.map((row, index) => (
                <div key={index} className="p-4 bg-card rounded-lg border border-border-subtle">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-text-primary font-semibold">{row.revenue}</span>
                    <span className="text-success font-bold text-lg">Keep {row.youKeep}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">You pay: <span className="text-accent">{row.youPay}</span></span>
                    <span className="text-text-subtle">({row.performance} perf)</span>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-text-subtle text-xs mt-4 text-center">*Capped at $15,000/month</p>
          </div>
        </FadeInOnScroll>

        {/* No Equity / No Perpetuity */}
        <FadeInOnScroll delay={0.4}>
          <div className="p-6 md:p-8 bg-card rounded-xl border border-success/30">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-6 text-center">
              No Equity. No Perpetuity. No Strings.
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-text-primary mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-error" />
                  We Don&apos;t Ask For
                </h4>
                <ul className="space-y-3 text-text-muted">
                  {keyPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-base">
                      <X className="w-4 h-4 text-error flex-shrink-0" />
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
                <p className="text-text-secondary text-base mb-3">
                  When this engagement ends, you own everything. Forever.
                </p>
                <p className="text-text-muted">
                  The systems. The processes. The playbooks. The trained team. All yours.
                </p>
                <p className="text-success font-medium mt-4">
                  No strings. No trailing royalties. No &quot;we get 5% of your revenue in perpetuity.&quot;
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Bottom Line */}
        <FadeInOnScroll delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-4xl md:text-5xl font-bold text-accent mb-4">$5,000 to get started.</p>
            <p className="text-text-secondary text-lg md:text-xl mb-4">
              20 validated appointments in 30 days or walk away.
            </p>
            <p className="text-text-primary font-medium text-lg">
              Low risk for you. High reward if it works. No-brainer to continue.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
