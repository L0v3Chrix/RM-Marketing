"use client";

import { FadeInOnScroll } from "@/components/animations";
import { Settings, Headphones, Search, Calendar, MessageSquare, User, ArrowDown, ArrowRight } from "lucide-react";

export function TeamStructure() {
  return (
    <FadeInOnScroll>
      <div className="bg-slate-800/80 rounded-2xl p-4 md:p-6 border border-slate-700">
        <h3 className="text-white font-bold text-base md:text-lg text-center mb-6">
          Your Dedicated Sales Team
        </h3>

        {/* Team Members - Stack vertically on mobile */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-6">
          {/* Chrix */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl p-3 md:p-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Settings className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base md:text-lg">CHRIX</h4>
              <p className="text-amber-400 text-xs md:text-sm">Sales Lead</p>
            </div>
            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded ml-auto">setter</span>
          </div>

          {/* Sarah */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl p-3 md:p-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
              <Headphones className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base md:text-lg">SARAH</h4>
              <p className="text-amber-400 text-xs md:text-sm">Account Manager</p>
            </div>
            <span className="text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded ml-auto">support</span>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-4">
          <ArrowDown className="w-6 h-6 text-amber-400" />
        </div>

        {/* Operations Row */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/20 rounded-xl p-4 mb-4">
          <div className="flex justify-center mb-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
              <User className="w-4 h-4 text-amber-400" />
            </div>
          </div>
          
          {/* Process Flow */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs md:text-sm font-medium">Prospecting</span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-amber-400 sm:hidden" />
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs md:text-sm font-medium">Booking</span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-400 hidden sm:block" />
            <ArrowDown className="w-4 h-4 text-amber-400 sm:hidden" />
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-3 py-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs md:text-sm font-medium">Support</span>
            </div>
          </div>

          <p className="text-center text-amber-400/80 text-xs mt-3 font-medium uppercase tracking-wide">
            Team Handles All Operational Tasks
          </p>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-4">
          <ArrowDown className="w-6 h-6 text-amber-400" />
        </div>

        {/* Client Result */}
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-2 border-amber-500/30 rounded-xl p-4 text-center">
          <h4 className="text-white font-bold text-lg mb-1">CLIENT</h4>
          <p className="text-amber-400 text-sm">Focuses on High-Value Activities</p>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
