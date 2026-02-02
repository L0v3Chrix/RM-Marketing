"use client";

import { FadeInOnScroll, CountUp } from "@/components/animations";
import { DataCard } from "@/components/ui";
import { BarChart3, Calendar, DollarSign, TrendingDown, AlertTriangle, Database } from "lucide-react";
import { DATA_SILOS, CURRENT_STATE } from "@/lib/constants";

export function Situation() {
  return (
    <section id="situation" className="bg-elevated py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">Where You Are Today</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              The Current State
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Let&apos;s look at what you&apos;ve built — and what&apos;s limiting it. GHL Mastery is a proven business. 
              The constraint isn&apos;t your offer. It&apos;s capacity.
            </p>
          </div>
        </FadeInOnScroll>

        {/* THREE DATA SILOS - Per spec: present separately */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-text-primary mb-8 text-center">
              Three Data Silos (Presented Separately)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Advertising Data */}
              <DataCard
                title={DATA_SILOS.advertising.title}
                metrics={DATA_SILOS.advertising.metrics}
                note={DATA_SILOS.advertising.note}
                icon={<BarChart3 className="w-5 h-5" />}
              />

              {/* Appointment Data */}
              <DataCard
                title={DATA_SILOS.appointments.title}
                metrics={DATA_SILOS.appointments.metrics}
                note={DATA_SILOS.appointments.note}
                icon={<Calendar className="w-5 h-5" />}
              />

              {/* Financial Data */}
              <DataCard
                title={DATA_SILOS.financial.title}
                metrics={DATA_SILOS.financial.metrics}
                note={DATA_SILOS.financial.note}
                icon={<DollarSign className="w-5 h-5" />}
              />
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Numbers That Prove You're Not Broken */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
              The Numbers That Prove You&apos;re Not Broken
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Your Funnel Works */}
              <div className="p-6 bg-card rounded-xl border border-border-subtle">
                <p className="text-4xl font-bold text-success mb-2">19.3%</p>
                <p className="text-sm text-text-muted uppercase tracking-wider mb-4">Lead-to-Appointment Rate</p>
                <p className="text-text-secondary text-sm">
                  Industry benchmark for B2B coaching is 5-10%. You&apos;re nearly <span className="text-success font-medium">2x the standard</span>.
                </p>
                <p className="text-accent text-sm mt-3 font-medium">This is not a marketing problem.</p>
              </div>

              {/* Your Unit Economics Work */}
              <div className="p-6 bg-card rounded-xl border border-border-subtle">
                <p className="text-4xl font-bold text-success mb-2">5.6x</p>
                <p className="text-sm text-text-muted uppercase tracking-wider mb-4">LTV:CAC Ratio</p>
                <p className="text-text-secondary text-sm">
                  You spend ~$360 to acquire a customer worth $2,000+. A healthy business needs 3x. 
                  You have nearly <span className="text-success font-medium">double that headroom</span>.
                </p>
                <p className="text-accent text-sm mt-3 font-medium">You could afford to scale. You just haven&apos;t.</p>
              </div>

              {/* Your Lead Costs Are Excellent */}
              <div className="p-6 bg-card rounded-xl border border-border-subtle">
                <p className="text-4xl font-bold text-success mb-2">$6</p>
                <p className="text-sm text-text-muted uppercase tracking-wider mb-4">Cost Per Lead</p>
                <p className="text-text-secondary text-sm">
                  In B2B. For qualified buyers interested in business automation. 
                  Most people in this space pay <span className="text-text-muted">$15-30</span>.
                </p>
                <p className="text-accent text-sm mt-3 font-medium">This is a strength, not a problem.</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Real Constraint */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-16 p-8 bg-base rounded-xl border border-accent/20">
            <h3 className="text-2xl font-semibold text-text-primary mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-warning" />
              The Real Constraint: No One&apos;s Working It
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Capacity, Not Conversion */}
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-3">Capacity, Not Conversion</h4>
                <p className="text-text-secondary mb-4">
                  You generated 238 leads in 90 days. 46 appointments booked. Those appointments? 
                  Handled by Adam when he has time.
                </p>
                <p className="text-text-primary font-medium mb-4">There&apos;s no dedicated team working the leads.</p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• No setters making calls</li>
                  <li>• No systematic follow-up</li>
                  <li>• No one&apos;s job to convert</li>
                </ul>
                <p className="text-text-secondary text-sm mt-4 italic">
                  When Adam gets busy (which is always), leads go cold. Not because they&apos;re bad leads — 
                  because no one&apos;s talking to them.
                </p>
              </div>

              {/* Show Rate: Optimization Opportunity */}
              <div>
                <h4 className="text-lg font-medium text-text-primary mb-3">Show Rate: Optimization Opportunity</h4>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-warning">47.8%</span>
                  <span className="text-text-muted">current show rate</span>
                </div>
                <p className="text-text-secondary mb-4">
                  22 of 46 showed over 90 days. Industry benchmark with proper sequences: 60-70%.
                </p>
                <p className="text-text-secondary text-sm">
                  This isn&apos;t a crisis — it&apos;s a known optimization. SMS confirmations, pre-call videos, 
                  reminder sequences. Proven playbook. Just needs implementation.
                </p>
                <p className="text-success font-medium text-sm mt-4">
                  Improving to 70% show rate = <span className="text-text-primary">45% more effective appointments</span>.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Untapped Database */}
        <FadeInOnScroll delay={0.4}>
          <div className="mb-16 p-8 bg-card rounded-xl border border-border-subtle">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-text-primary">The Database: Untapped Asset</h4>
                <p className="text-text-muted">10,000 contacts sitting in your CRM</p>
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              People who already know you. Bought something. Attended a webinar. Downloaded content.
            </p>
            <blockquote className="text-text-muted italic border-l-4 border-accent pl-4 my-4">
              &quot;Apart from the podcast stuff, we haven&apos;t marketed for our own leads much at all.&quot;
            </blockquote>
            <p className="text-accent font-medium">
              This isn&apos;t a problem. It&apos;s a goldmine waiting to be worked.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Revenue Timing */}
        <FadeInOnScroll delay={0.5}>
          <div className="mb-16">
            <h4 className="text-lg font-medium text-text-primary mb-6 flex items-center gap-3">
              <TrendingDown className="w-5 h-5 text-warning" />
              Revenue Timing: Seasonal or Structural?
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 px-4 text-text-muted font-medium">Month</th>
                    <th className="text-right py-3 px-4 text-text-muted font-medium">New Customer Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-primary">November 2025</td>
                    <td className="py-3 px-4 text-right text-success font-medium">$33,936</td>
                  </tr>
                  <tr className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-primary">December 2025</td>
                    <td className="py-3 px-4 text-right text-warning font-medium">$8,885</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-text-primary">January 2026</td>
                    <td className="py-3 px-4 text-right text-error font-medium">$2,031</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-text-secondary text-sm mt-4">
              This looks alarming in isolation. But context matters: holiday seasonality, founders 
              focused on other projects, no systematic sales process running.
            </p>
            <p className="text-accent font-medium mt-2">The engine isn&apos;t broken. It just isn&apos;t running.</p>
          </div>
        </FadeInOnScroll>

        {/* The Pattern */}
        <FadeInOnScroll delay={0.6}>
          <div className="text-center p-8 bg-elevated rounded-xl border border-accent/30">
            <h3 className="text-2xl font-bold text-text-primary mb-4">The Pattern</h3>
            <p className="text-text-secondary mb-6">Every &quot;problem&quot; traces back to the same root cause:</p>
            <p className="text-3xl md:text-4xl font-bold text-accent mb-6">You have no sales team.</p>
            <ul className="text-text-muted text-sm space-y-2 max-w-md mx-auto text-left">
              <li>• Leads go cold → No one working them</li>
              <li>• Show rate suffers → No confirmation sequences</li>
              <li>• Database sits idle → No one running campaigns</li>
              <li>• Failed payments accumulate → No dunning system</li>
              <li>• Revenue fluctuates → No consistent sales process</li>
            </ul>
            <p className="text-text-primary font-semibold mt-8 text-lg">
              Adam is the sales team. When Adam is busy, sales stops.
            </p>
            <p className="text-success font-bold mt-4 text-xl">
              You&apos;re not broken. You&apos;re bottlenecked.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
