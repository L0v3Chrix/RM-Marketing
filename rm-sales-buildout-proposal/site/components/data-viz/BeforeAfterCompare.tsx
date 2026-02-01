"use client";

import { FadeInOnScroll } from "@/components/animations";
import { CloudRain, TrendingUp, CalendarX, Sparkles, Users, BarChart3 } from "lucide-react";

export function BeforeAfterCompare() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {/* NOW - Problem State */}
      <FadeInOnScroll>
        <div className="bg-card rounded-2xl p-5 md:p-6 border border-border-subtle">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-text-muted text-sm font-medium uppercase tracking-wider">Now</span>
          </div>
          
          {/* Visual representation */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative">
              <CloudRain className="w-12 h-12 md:w-16 md:h-16 text-text-muted mb-2" />
              <div className="absolute -top-2 -right-2 flex gap-1">
                <CalendarX className="w-5 h-5 text-text-muted" />
              </div>
            </div>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-text-primary text-center mb-3">
            Wearing all hats,<br />missing opportunities
          </h3>
          
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full"></span>
              Adam handles sales when he has time
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full"></span>
              No dedicated follow-up system
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full"></span>
              Leads go cold after 48 hours
            </li>
          </ul>
        </div>
      </FadeInOnScroll>

      {/* Arrow for mobile */}
      <div className="flex justify-center md:hidden">
        <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[16px] border-l-transparent border-r-transparent border-t-accent"></div>
      </div>

      {/* WITH SALES TEAM - Solution State */}
      <FadeInOnScroll delay={0.1}>
        <div className="bg-accent/10 rounded-2xl p-5 md:p-6 border border-accent/30">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent text-sm font-medium uppercase tracking-wider">With Sales Team</span>
          </div>
          
          {/* Visual representation */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-accent mb-2" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
            </div>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold text-text-primary text-center mb-3">
            Driving growth,<br />focused on results
          </h3>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="text-center bg-card rounded-lg py-2 px-1">
              <div className="flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3 text-accent" />
                <span className="text-accent font-bold text-sm">+35%</span>
              </div>
              <span className="text-text-muted text-xs">Revenue</span>
            </div>
            <div className="text-center bg-card rounded-lg py-2 px-1">
              <div className="flex items-center justify-center gap-1">
                <BarChart3 className="w-3 h-3 text-accent" />
                <span className="text-accent font-bold text-sm">+50%</span>
              </div>
              <span className="text-text-muted text-xs">Leads</span>
            </div>
            <div className="text-center bg-card rounded-lg py-2 px-1">
              <div className="flex items-center justify-center gap-1">
                <TrendingUp className="w-3 h-3 text-accent" />
                <span className="text-accent font-bold text-sm">+20%</span>
              </div>
              <span className="text-text-muted text-xs">Convert</span>
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  );
}
