"use client";

import { useState } from "react";
import { FadeInOnScroll } from "@/components/animations";
import { Calendar, Rocket, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Chrix's phone number for SMS
const CHRIX_PHONE = "+15126010680";
const SMS_BODY = encodeURIComponent("OMG Chrix thank you so much. Can't wait to get started. Let's meet ");

function BlastOffModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [countdown, setCountdown] = useState(3);
  const [showBlastOff, setShowBlastOff] = useState(false);

  const handleOpen = () => {
    setCountdown(3);
    setShowBlastOff(false);
    
    // Countdown animation
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowBlastOff(true);
          return 0;
        }
        return prev - 1;
      });
    }, 800);
  };

  // Start countdown when modal opens
  if (isOpen && countdown === 3 && !showBlastOff) {
    setTimeout(handleOpen, 100);
  }

  const handleBlastOff = () => {
    // Open SMS with pre-filled message
    window.location.href = `sms:${CHRIX_PHONE}?body=${SMS_BODY}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-base/90 backdrop-blur-md" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-elevated rounded-2xl border border-accent/30 p-8 md:p-12 max-w-lg w-full text-center shadow-2xl shadow-accent/20"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Rocket icon */}
            <motion.div
              animate={showBlastOff ? { y: [-10, 10], rotate: [0, -5, 5, 0] } : {}}
              transition={{ duration: 0.5, repeat: showBlastOff ? Infinity : 0 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-8"
            >
              <Rocket className={`w-10 h-10 ${showBlastOff ? 'text-accent animate-pulse' : 'text-accent/60'}`} />
            </motion.div>

            {/* Content */}
            {!showBlastOff ? (
              <>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  You&apos;re About to Make the Best Decision You&apos;ve Ever Made
                </h3>
                <p className="text-text-secondary text-lg mb-8">
                  The rocket ship is leaving the ground...
                </p>
                
                {/* Countdown */}
                <motion.div
                  key={countdown}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-7xl font-bold text-accent mb-4"
                >
                  {countdown}
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <Sparkles className="w-4 h-4 text-accent/60" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                    Ready for Liftoff! 🚀
                  </h3>
                  <p className="text-text-secondary mb-8">
                    Click below to text Chrix directly and lock in your call.
                  </p>
                  
                  {/* BLAST OFF Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBlastOff}
                    className="w-full py-5 px-8 bg-gradient-to-r from-accent to-accent-hover text-text-dark font-bold text-xl rounded-xl shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all flex items-center justify-center gap-3"
                  >
                    <Rocket className="w-6 h-6" />
                    BLAST OFF
                    <Rocket className="w-6 h-6 transform rotate-45" />
                  </motion.button>
                  
                  <p className="text-text-muted text-xs mt-4">
                    Opens your text messages with a pre-filled message
                  </p>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CTA() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="cta" className="bg-base py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Blast Off Modal */}
        <BlastOffModal isOpen={showModal} onClose={() => setShowModal(false)} />

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
            
            {/* Primary CTA - Opens Modal */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-3 bg-accent text-text-dark px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
              >
                <Rocket className="w-5 h-5" />
                Schedule a Call with Chrix
                <Calendar className="w-5 h-5" />
              </motion.button>
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
