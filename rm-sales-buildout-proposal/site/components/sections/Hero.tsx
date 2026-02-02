"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

// YouTube Video ID for Adam's video
const VIDEO_ID = "Nzsu71lZjUU";

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Send message to YouTube iframe to toggle mute
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ 
          event: 'command', 
          func: isMuted ? 'unMute' : 'mute'
        }), 
        '*'
      );
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-base">
      {/* Video Background - Always autoplaying */}
      <div className="absolute inset-0 z-0">
        {/* YouTube Video as Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&iv_load_policy=3`}
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "177.77vh",
              height: "100vh",
              minWidth: "100%",
              minHeight: "56.25vw",
            }}
          />
        </div>
        
        {/* Fallback thumbnail while loading */}
        {!isLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg)` 
            }}
          />
        )}
        
        {/* Dark Overlay - Critical for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/85 to-base" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <FadeInOnScroll delay={0.1}>
              <p className="text-text-muted text-sm md:text-base mb-8">
                Prepared for <span className="text-text-primary font-medium">Adam & Brendan</span>
                <span className="text-accent ml-2 font-semibold">GHL Mastery</span>
              </p>
            </FadeInOnScroll>

            {/* Main Headlines */}
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-4 tracking-tight">
                You&apos;re Sitting on a<br />Million-Dollar Business.
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-accent leading-tight mb-8">
                You Just Can&apos;t Sell It.
              </h2>
            </FadeInOnScroll>

            {/* Subheadline */}
            <FadeInOnScroll delay={0.4}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                A custom proposal to build your sales infrastructure — the team, the systems, 
                the processes — so you can finally capture the revenue you&apos;re leaving on the table.
              </p>
            </FadeInOnScroll>

            {/* Scroll prompt - subtle indicator */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex justify-center">
                <p className="text-text-muted text-sm">
                  ↓ Scroll to see your numbers
                </p>
              </div>
            </FadeInOnScroll>

            {/* The Meta-Point */}
            <FadeInOnScroll delay={0.6}>
              <div className="mt-16 pt-8 border-t border-border-subtle max-w-2xl mx-auto">
                <p className="text-text-muted text-sm italic">
                  This proposal is worth{" "}
                  <span className="text-accent font-medium not-italic">$500</span> on its own. 
                  It tells you exactly what&apos;s wrong and how to fix it — even if you don&apos;t work with us.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Control - Always visible */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border text-text-primary hover:bg-card-hover transition-all duration-200"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Scroll Indicator */}
      <FadeInOnScroll delay={0.8}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

// Metrics Section - Key verified numbers with custom graphics
export function HeroMetrics() {
  return (
    <section id="hero-metrics" className="bg-elevated py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <p className="text-text-subtle text-sm uppercase tracking-widest mb-2">90-Day Verified Data</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">Your Funnel Today</h3>
          </div>
        </FadeInOnScroll>

        {/* Key Metrics Grid with Custom SVG Graphics */}
        <FadeInOnScroll delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Revenue */}
            <div className="relative p-6 bg-card rounded-xl border border-border-subtle overflow-hidden group hover:border-success/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Revenue Icon */}
              <div className="relative mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                  <rect x="4" y="24" width="8" height="20" rx="2" className="fill-success/30" />
                  <rect x="16" y="16" width="8" height="28" rx="2" className="fill-success/50" />
                  <rect x="28" y="8" width="8" height="36" rx="2" className="fill-success/70" />
                  <rect x="40" y="4" width="4" height="40" rx="2" className="fill-success" />
                  <circle cx="36" cy="8" r="6" className="fill-accent" stroke="#D4A574" strokeWidth="2"/>
                  <path d="M34 8h4M36 6v4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="relative text-3xl sm:text-4xl font-bold text-success tracking-tight">
                <CountUp end={109927} prefix="$" duration={1.5} />
              </p>
              <p className="relative text-sm text-text-muted uppercase tracking-wider mt-2">Total Revenue</p>
              <p className="relative text-xs text-text-subtle mt-2">90-day period</p>
            </div>

            {/* Cost Per Lead */}
            <div className="relative p-6 bg-card rounded-xl border border-border-subtle overflow-hidden group hover:border-success/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Lead Cost Icon */}
              <div className="relative mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                  <circle cx="24" cy="24" r="18" className="stroke-success/30" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="12" className="stroke-success/60" strokeWidth="3" fill="none"/>
                  <circle cx="24" cy="24" r="6" className="fill-success"/>
                  <path d="M24 4L24 8M24 40L24 44M4 24H8M40 24H44" className="stroke-accent" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="38" cy="10" r="5" className="fill-accent"/>
                  <path d="M37 10h2M38 9v2" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="relative text-3xl sm:text-4xl font-bold text-success tracking-tight">
                <CountUp end={6.30} decimals={2} prefix="$" duration={1.5} />
              </p>
              <p className="relative text-sm text-text-muted uppercase tracking-wider mt-2">Cost/Lead</p>
              <p className="relative text-xs text-text-subtle mt-2">Industry: $50-85</p>
            </div>

            {/* Show Rate */}
            <div className="relative p-6 bg-card rounded-xl border border-border-subtle overflow-hidden group hover:border-warning/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Show Rate Icon */}
              <div className="relative mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                  <rect x="6" y="8" width="36" height="32" rx="4" className="stroke-warning/40" strokeWidth="2" fill="none"/>
                  <path d="M6 16H42" className="stroke-warning/60" strokeWidth="2"/>
                  <circle cx="14" cy="12" r="2" className="fill-error"/>
                  <circle cx="22" cy="12" r="2" className="fill-warning"/>
                  <circle cx="30" cy="12" r="2" className="fill-success"/>
                  <rect x="12" y="22" width="8" height="8" rx="2" className="fill-success/60"/>
                  <rect x="12" y="32" width="8" height="4" rx="1" className="fill-success"/>
                  <rect x="24" y="22" width="8" height="14" rx="2" className="stroke-warning" strokeWidth="2" strokeDasharray="3 2" fill="none"/>
                  <circle cx="40" cy="8" r="6" className="fill-warning"/>
                  <text x="40" y="11" textAnchor="middle" fill="#0A1628" fontSize="8" fontWeight="bold">!</text>
                </svg>
              </div>
              <p className="relative text-3xl sm:text-4xl font-bold text-warning tracking-tight">
                <CountUp end={47.8} decimals={1} suffix="%" duration={1.5} />
              </p>
              <p className="relative text-sm text-text-muted uppercase tracking-wider mt-2">Show Rate</p>
              <p className="relative text-xs text-text-subtle mt-2">Target: 70%+</p>
            </div>

            {/* New Sales Revenue (90 days) */}
            <div className="relative p-6 bg-card rounded-xl border border-border-subtle overflow-hidden group hover:border-accent/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* New Sales Icon */}
              <div className="relative mb-4">
                <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                  <circle cx="24" cy="24" r="18" className="stroke-accent/40" strokeWidth="2" fill="none"/>
                  <path d="M24 14v20M18 20l6-6 6 6" className="stroke-accent" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="38" cy="10" r="6" className="fill-accent"/>
                  <path d="M36 10h4M38 8v4" stroke="#0A1628" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="relative text-3xl sm:text-4xl font-bold text-accent tracking-tight">
                <CountUp end={45999} prefix="$" duration={1.5} />
              </p>
              <p className="relative text-sm text-text-muted uppercase tracking-wider mt-2">New Sales Revenue</p>
              <p className="relative text-xs text-text-subtle mt-2">First-time customer revenue (90 days)</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Key Insight */}
        <FadeInOnScroll delay={0.4}>
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-text-secondary text-lg">
              Your marketing is dialed. Your offer converts. The only thing missing? 
              <span className="text-accent font-medium"> A sales team that can handle the volume.</span>
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
