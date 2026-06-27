"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#1B1B1B] text-[#FAFAF8] py-2.5 px-4 text-center text-xs md:text-sm font-medium z-50 relative flex items-center justify-center gap-2 border-b border-white/10">
      <div className="flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
        <span>Live Cohort starting soon. Limited seats available.</span>
      </div>
      <span className="hidden md:inline text-white/40">|</span>
      <a
        href="#pricing"
        className="inline-flex items-center gap-1 text-primary hover:text-accent font-semibold transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-[#1B1B1B] rounded-sm"
      >
        <span>Register before the price increases</span>
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
