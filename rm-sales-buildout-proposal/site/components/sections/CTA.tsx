"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Button } from "@/components/ui";
import { ArrowRight, Calendar, Mail, Download } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="bg-base py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main CTA */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <p className="text-accent text-sm uppercase tracking-widest mb-3">Next Steps</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              Ready to Build Your Sales Department?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              You&apos;ve seen the data. You know what&apos;s broken. You know what it&apos;s costing you.
              The question isn&apos;t whether you need this. The question is how long you&apos;re willing to wait.
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                href="https://calendly.com/chrix-rtv/ghl-mastery" 
                size="large" 
                variant="primary"
              >
                Schedule a Call with Chrix
                <Calendar className="w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-text-muted text-sm">
              30 minutes. No pressure. Let&apos;s see if this is the right fit.
            </p>
          </div>
        </FadeInOnScroll>

        {/* What Happens Next */}
        <FadeInOnScroll delay={0.1}>
          <div className="mb-16 p-6 bg-card rounded-xl border border-border-subtle">
            <h3 className="text-lg font-semibold text-text-primary mb-6 text-center">
              What Happens When You Click
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-accent-muted text-accent flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <p className="font-medium text-text-primary mb-1">Schedule a call</p>
                <p className="text-text-muted text-sm">Pick a time that works for you</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-accent-muted text-accent flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <p className="font-medium text-text-primary mb-1">30-minute discussion</p>
                <p className="text-text-muted text-sm">We&apos;ll review the proposal, answer questions</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-accent-muted text-accent flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <p className="font-medium text-text-primary mb-1">Decision time</p>
                <p className="text-text-muted text-sm">If it&apos;s a fit, we move forward. If not, no hard feelings.</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* No Pressure Promise */}
        <FadeInOnScroll delay={0.2}>
          <div className="mb-16 p-6 bg-elevated rounded-xl border border-success/20 text-center">
            <h3 className="text-lg font-semibold text-success mb-3">No Pressure Promise</h3>
            <p className="text-text-secondary">
              This isn&apos;t a high-pressure sales call. We&apos;ll talk through the proposal, answer your questions, 
              and see if the fit is right. If it&apos;s not the right time or the right solution, we&apos;ll tell you.
            </p>
            <p className="text-text-muted text-sm mt-3">
              Our reputation is built on honest advice, not closed deals.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Alternative CTAs */}
        <FadeInOnScroll delay={0.3}>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Email Option */}
            <div className="p-6 bg-card rounded-xl border border-border-subtle text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary mb-2">Prefer Email?</h4>
              <p className="text-text-muted text-sm mb-4">
                Have questions before the call? Reach out directly.
              </p>
              <a 
                href="mailto:chrix@raisethevibe.com" 
                className="text-accent font-medium hover:text-accent-hover transition-colors"
              >
                chrix@raisethevibe.com
              </a>
            </div>

            {/* PDF Download */}
            <div className="p-6 bg-card rounded-xl border border-border-subtle text-center">
              <Download className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-text-primary mb-2">Need More Time?</h4>
              <p className="text-text-muted text-sm mb-4">
                Download the proposal to review at your own pace.
              </p>
              <Button variant="secondary" size="small">
                Download PDF
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </FadeInOnScroll>

        {/* The Bottom Line */}
        <FadeInOnScroll delay={0.4}>
          <div className="p-8 bg-gradient-to-br from-accent-muted to-transparent rounded-xl border border-accent/30 text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Every Month You Wait Costs $15,000-$30,000
            </h3>
            <p className="text-text-secondary mb-6">
              That&apos;s not a scare tactic. That&apos;s the math.
            </p>
            <ul className="text-text-muted text-sm space-y-1 mb-6 max-w-md mx-auto">
              <li>• $5,000+ in no-show appointments</li>
              <li>• $5,000+ in leads going cold</li>
              <li>• $8,000+ in database decay</li>
              <li>• $3,000+ in failed payment leakage</li>
            </ul>
            <p className="text-accent font-semibold text-lg">
              Let&apos;s stop the bleeding and build the machine.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Footer */}
        <FadeInOnScroll delay={0.5}>
          <div className="mt-16 pt-8 border-t border-border-subtle">
            <div className="text-center">
              <p className="text-text-muted text-sm mb-4">
                This proposal is valued at <span className="text-accent font-medium">$500</span>. 
                It tells you exactly what&apos;s wrong and how to fix it — even if you don&apos;t work with us.
              </p>
              <p className="text-text-primary font-medium italic">
                But you should work with us.
              </p>
            </div>

            <div className="mt-8 text-center text-text-subtle text-xs">
              <p className="mb-2">Prepared by <span className="text-text-muted">Chrix & Sarah</span> | Raize The Vibe</p>
              <p>For <span className="text-text-muted">Adam McInnes & Brendan</span> | GHL Mastery</p>
              <p className="mt-2">February 2026</p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
