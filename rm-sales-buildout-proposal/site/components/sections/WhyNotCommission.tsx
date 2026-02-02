"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Check, X, AlertTriangle, Calculator, HardHat } from "lucide-react";

export function WhyNotCommission() {
  const requirements = [
    { item: "Validated offer", has: true },
    { item: "Documented systems & SOPs", has: false },
    { item: "Checkout process optimized", has: false },
    { item: "One-time offers configured", has: false },
    { item: "Consistent lead flow", has: "partial" },
    { item: "Booked appointments waiting", has: false },
    { item: "Defined KPIs & expectations", has: false },
    { item: "Team structure", has: false },
  ];

  const commissionMath = [
    { rate: "10%", total: "$2,050", monthly: "$683", hourly: "$2.13/hr" },
    { rate: "15%", total: "$3,075", monthly: "$1,025", hourly: "$3.20/hr" },
    { rate: "20%", total: "$4,100", monthly: "$1,367", hourly: "$4.27/hr" },
  ];

  return (
    <section id="why-not-commission" className="bg-elevated py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">Let&apos;s Address the Elephant</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Not Commission-Only?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              I&apos;ll be honest — here&apos;s what&apos;s missing that would make commission-only work.
            </p>
          </div>
        </FadeInOnScroll>

        {/* What Commission-Only Needs */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-12 p-6 bg-card rounded-xl border border-border-subtle">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              What Commission-Only Needs
            </h3>
            <p className="text-text-secondary mb-6">
              For me to walk in and work pure commission, you need:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-base rounded-lg">
                  {req.has === true ? (
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                  ) : req.has === "partial" ? (
                    <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-error flex-shrink-0" />
                  )}
                  <span className={`text-sm ${req.has === true ? 'text-text-primary' : 'text-text-muted'}`}>
                    {req.item}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-accent font-semibold mt-6 text-center text-lg">
              You have 1 of 8.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Real Commission Math */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-12 p-6 bg-card rounded-xl border border-warning/20">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-6 h-6 text-warning" />
              <h3 className="text-xl font-semibold text-text-primary">The Real Commission Math</h3>
            </div>
            
            <p className="text-text-secondary mb-4">
              Let&apos;s look at Adam&apos;s actual numbers from the last 90 days:
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-base rounded-lg">
              <div>
                <p className="text-text-muted text-sm">Total new customer revenue</p>
                <p className="text-text-primary font-medium">$43,000</p>
              </div>
              <div>
                <p className="text-text-muted text-sm">From appointment shows (22)</p>
                <p className="text-text-primary font-medium">~$20,500</p>
              </div>
            </div>
            
            <p className="text-text-secondary mb-4 text-sm">
              Commission would only apply to the appointment-driven revenue — the $20,500 from shows we actually worked.
            </p>
            
            <p className="text-text-muted mb-4 text-sm">
              Here&apos;s what that looks like for 2 people over 90 days:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-2 px-3 text-text-muted font-medium">Commission Rate</th>
                    <th className="text-right py-2 px-3 text-text-muted font-medium">90-Day Total</th>
                    <th className="text-right py-2 px-3 text-text-muted font-medium">Monthly</th>
                    <th className="text-right py-2 px-3 text-text-muted font-medium">Hourly (per person)</th>
                  </tr>
                </thead>
                <tbody>
                  {commissionMath.map((row, index) => (
                    <tr key={index} className="border-b border-border-subtle">
                      <td className="py-2 px-3 text-text-primary">{row.rate}</td>
                      <td className="py-2 px-3 text-right text-text-muted">{row.total}</td>
                      <td className="py-2 px-3 text-right text-text-muted">{row.monthly}</td>
                      <td className="py-2 px-3 text-right text-error font-medium">{row.hourly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-error font-medium mt-4 text-center">
              All below minimum wage for skilled sales work.
            </p>
            <p className="text-text-muted text-xs text-center mt-1">
              Federal minimum wage is $7.25/hr. This isn&apos;t me being greedy. It&apos;s math.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Reality */}
        <FadeInOnScroll delay={0.3}>
          <div className="mb-12 p-6 bg-base rounded-xl border border-accent/30">
            <blockquote className="text-xl md:text-2xl font-medium text-accent text-center mb-4">
              &quot;Cold engine doesn&apos;t fire on the first crank.&quot;
            </blockquote>
            <p className="text-text-secondary text-center">
              This thing is going to take 45-60 days to start producing consistently. 
              There might be a few nice one-offs — God has a funny way of smiling on hard work. 
              But I can&apos;t work as hard as I&apos;m signing up to work on hope and prayer.
            </p>
          </div>
        </FadeInOnScroll>

        {/* The Frame */}
        <FadeInOnScroll delay={0.4}>
          <div className="p-6 bg-card rounded-xl border border-border-subtle">
            <div className="flex items-center gap-3 mb-6">
              <HardHat className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-text-primary">The Frame</h3>
            </div>
            
            <p className="text-text-secondary mb-6">Think of it this way:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 bg-base rounded-lg border border-warning/20">
                <p className="font-medium text-warning mb-2">Commission-only</p>
                <p className="text-text-muted text-sm">
                  I&apos;m a closer waiting for appointments. Great when appointments are flowing. 
                  Terrible when building from scratch.
                </p>
              </div>
              <div className="p-4 bg-base rounded-lg border border-success/20">
                <p className="font-medium text-success mb-2">This engagement</p>
                <p className="text-text-muted text-sm">
                  I&apos;m a contractor building the house. You pay for construction. 
                  Then you live in the house. Then we can talk about ongoing maintenance.
                </p>
              </div>
            </div>
            
            <p className="text-text-secondary text-center">
              You don&apos;t pay a contractor commission on your future rent. 
              You pay them to build something that <span className="text-accent font-medium">produces</span> rent.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
