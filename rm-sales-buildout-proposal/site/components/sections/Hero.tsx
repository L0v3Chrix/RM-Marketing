"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { ArrowRight, Volume2, VolumeX, Play } from "lucide-react";

// YouTube Video ID for Adam's video
const VIDEO_ID = "Nzsu71lZjUU";

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-base">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {showVideo ? (
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
        ) : (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg)` 
            }}
          />
        )}
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-base/70 via-base/80 to-base" />
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

            {/* CTA Buttons */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="#calculator" size="large" variant="primary">
                  See the Full Plan
                  <ArrowRight className="w-5 h-5" />
                </Button>
                {!showVideo && (
                  <Button 
                    onClick={() => setShowVideo(true)} 
                    size="large" 
                    variant="secondary"
                  >
                    <Play className="w-5 h-5" />
                    Watch Adam&apos;s Video
                  </Button>
                )}
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

      {/* Mute/Unmute Control */}
      {showVideo && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border text-text-primary hover:bg-card-hover transition-all duration-200"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      )}

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

// Metrics Section - Key verified numbers
export function HeroMetrics() {
  return (
    <section className="bg-elevated py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <p className="text-text-subtle text-sm uppercase tracking-widest mb-2">90-Day Verified Data</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">Your Funnel Today</h3>
          </div>
        </FadeInOnScroll>

        {/* Key Metrics Grid */}
        <FadeInOnScroll delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Total Revenue */}
            <div className="text-center p-6 bg-card rounded-xl border border-border-subtle">
              <p className="text-3xl sm:text-4xl font-bold text-success tracking-tight">
                <CountUp end={109927} prefix="$" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Total Revenue</p>
              <p className="text-xs text-text-subtle mt-2">90-day period</p>
            </div>

            {/* Cost Per Lead */}
            <div className="text-center p-6 bg-card rounded-xl border border-border-subtle">
              <p className="text-3xl sm:text-4xl font-bold text-success tracking-tight">
                <CountUp end={6.30} decimals={2} prefix="$" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Cost/Lead</p>
              <p className="text-xs text-text-subtle mt-2">Industry: $50-85</p>
            </div>

            {/* Show Rate */}
            <div className="text-center p-6 bg-card rounded-xl border border-border-subtle">
              <p className="text-3xl sm:text-4xl font-bold text-warning tracking-tight">
                <CountUp end={47.8} decimals={1} suffix="%" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Show Rate</p>
              <p className="text-xs text-text-subtle mt-2">Target: 70%+</p>
            </div>

            {/* Failed Payments */}
            <div className="text-center p-6 bg-card rounded-xl border border-border-subtle">
              <p className="text-3xl sm:text-4xl font-bold text-accent tracking-tight">
                <CountUp end={25870} prefix="$" duration={1.5} />
              </p>
              <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mt-2">Failed Payments</p>
              <p className="text-xs text-text-subtle mt-2">Recovery opportunity</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Key Insight */}
        <FadeInOnScroll delay={0.4}>
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-text-secondary">
              Your marketing is dialed. Your offer converts. The only thing missing? 
              <span className="text-accent font-medium"> A sales team that can handle the volume.</span>
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
