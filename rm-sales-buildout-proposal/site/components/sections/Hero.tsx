"use client";

import { useState } from "react";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import { FadeInOnScroll, CountUp } from "@/components/animations";
import { FunnelWaterfall } from "@/components/data-viz";
import { ArrowRight, Play } from "lucide-react";

// YouTube Video Embed Component with elegant styling
function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border-default group">
      {!isPlaying ? (
        <>
          {/* Thumbnail with gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/30 to-transparent" />
          
          {/* Play button overlay */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group/play"
            aria-label="Play video"
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 w-20 h-20 rounded-full bg-accent/30 animate-ping" />
              {/* Button */}
              <div className="relative w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-xl transition-transform duration-300 group-hover/play:scale-110">
                <Play className="w-8 h-8 text-base ml-1" fill="currentColor" />
              </div>
            </div>
          </button>

          {/* Label */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-text-primary text-sm font-medium opacity-90">
              🎬 Watch: Adam on HighLevel Mastery
            </p>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="GHL Mastery Introduction"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}

export function Hero() {
  return (
    <Section background="base" padding="hero" id="hero">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Video + Funnel Visualization */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Hero Video */}
            <FadeInOnScroll delay={0.1}>
              <YouTubeEmbed videoId="Nzsu71lZjUU" />
            </FadeInOnScroll>
            
            {/* Funnel Visualization - smaller below video on desktop */}
            <FadeInOnScroll delay={0.2}>
              <div className="hidden lg:block">
                <FunnelWaterfall />
              </div>
            </FadeInOnScroll>
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Trust Badge */}
            <FadeInOnScroll delay={0.1}>
              <p className="text-text-muted text-sm mb-6">
                Prepared for <span className="text-text-secondary">Adam & Brendan</span>
                <span className="text-accent ml-2">GHL Mastery</span>
              </p>
            </FadeInOnScroll>

            {/* Main Headline */}
            <FadeInOnScroll delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-3">
                You&apos;re Sitting on a Million-Dollar Business.
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent leading-tight mb-6">
                You Just Can&apos;t Sell It.
              </h2>
            </FadeInOnScroll>

            {/* Subheadline */}
            <FadeInOnScroll delay={0.3}>
              <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Your marketing is dialed. Your offer converts. The only thing missing? 
                A sales team that can handle the volume.
              </p>
            </FadeInOnScroll>

            {/* CTA Button */}
            <FadeInOnScroll delay={0.4}>
              <div className="flex justify-center lg:justify-start">
                <Button href="#calculator" size="large">
                  See How We Fix That
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </FadeInOnScroll>

            {/* Metrics Row */}
            <FadeInOnScroll delay={0.5}>
              <div className="flex items-center gap-8 sm:gap-12 mt-10 pt-8 border-t border-border-subtle justify-center lg:justify-start">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-accent tracking-tight">
                    <CountUp end={6.30} decimals={2} prefix="$" duration={1.5} />
                  </p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Cost/Lead</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-accent tracking-tight">
                    <CountUp end={19.3} decimals={1} suffix="%" duration={1.5} />
                  </p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Book Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-text-secondary tracking-tight">
                    <CountUp end={59} suffix="%" duration={1.5} />
                  </p>
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Show Rate</p>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Mobile: Show funnel below content */}
        <FadeInOnScroll delay={0.6}>
          <div className="lg:hidden mt-12">
            <FunnelWaterfall />
          </div>
        </FadeInOnScroll>

        {/* Meta-Point */}
        <FadeInOnScroll delay={0.7}>
          <div className="text-center mt-16 pt-8 border-t border-border-subtle max-w-2xl mx-auto">
            <p className="text-text-muted italic text-sm">
              This proposal is worth{" "}
              <span className="text-accent font-medium">$500</span> on its own. We&apos;re
              doing for your sales system what you do for others&apos; GHL systems.
            </p>
          </div>
        </FadeInOnScroll>
      </Container>
    </Section>
  );
}
