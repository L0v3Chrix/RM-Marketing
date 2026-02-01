"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

// YouTube Video ID for Adam's video
const VIDEO_ID = "Nzsu71lZjUU";

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Mark as loaded after a brief delay for smooth transition
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* YouTube Embed as Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
            title="Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[177.77vh] min-h-[56.25vw] w-auto h-auto pointer-events-none"
            style={{
              width: "177.77vh",
              height: "100vh",
            }}
          />
        </div>
        
        {/* Fallback Thumbnail (shows while video loads) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ 
            backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg)` 
          }}
        />
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <FadeInOnScroll delay={0.1}>
              <p className="text-white/70 text-sm md:text-base mb-8">
                Prepared for <span className="text-white">Adam & Brendan</span>
                <span className="text-coral ml-2 font-medium">GHL Mastery</span>
              </p>
            </FadeInOnScroll>

            {/* Main Headlines - Bold, Overlaid */}
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
                You&apos;re Sitting on a<br />Million-Dollar Business.
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-coral leading-tight mb-8">
                You Just Can&apos;t Sell It.
              </h2>
            </FadeInOnScroll>

            {/* Subheadline */}
            <FadeInOnScroll delay={0.4}>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
                Your marketing is dialed. Your offer converts. The only thing missing? 
                A sales team that can handle the volume.
              </p>
            </FadeInOnScroll>

            {/* CTA Button */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex justify-center gap-4">
                <Button href="#calculator" size="large" variant="primary">
                  See How We Fix That
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Scroll Indicator */}
      <FadeInOnScroll delay={0.8}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}

// Metrics Section - Separated below the hero fold
export function HeroMetrics() {
  return (
    <section className="bg-warm py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <p className="text-text-muted text-sm uppercase tracking-widest mb-2">Current Performance</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">Your Funnel Today</h3>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="flex items-center justify-center gap-8 sm:gap-16 md:gap-24">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cta tracking-tight">
                <CountUp end={6.30} decimals={2} prefix="$" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Cost/Lead</p>
            </div>
            <div className="w-px h-16 bg-border-subtle" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cta tracking-tight">
                <CountUp end={19.3} decimals={1} suffix="%" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Book Rate</p>
            </div>
            <div className="w-px h-16 bg-border-subtle" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent tracking-tight">
                <CountUp end={59} suffix="%" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Show Rate</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Meta-Point */}
        <FadeInOnScroll delay={0.4}>
          <div className="text-center mt-16 pt-8 border-t border-border-subtle max-w-2xl mx-auto">
            <p className="text-text-muted italic text-sm">
              This proposal is worth{" "}
              <span className="text-accent font-medium">$500</span> on its own. We&apos;re
              doing for your sales system what you do for others&apos; GHL systems.
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
