"use client";

import React from "react";
import Button from "../ui/button";
import Badge from "../ui/badge";
import { ShieldCheck, Users, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-bg-base relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-[#1B1B1B] rounded-3xl p-8 md:p-16 text-center text-[#FAFAF8] shadow-2xl overflow-hidden border border-white/5">
          {/* Radial light glow */}
          <div className="absolute top-[-100%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(246,161,30,0.06)_0%,transparent_60%)] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
            <Badge variant="primary" className="mb-6 font-semibold bg-primary/10 border-primary/20 text-primary">
              Limited Availability
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-6">
              Ready to Design Your <br />
              Independent Legal Career?
            </h2>

            <p className="text-[#FAFAF8]/70 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
              Don't spend another year studying dry textbooks. Master the practical contract drafts corporate hiring managers actually hire for.
            </p>

            <div className="w-full sm:w-auto flex flex-col items-center gap-4 mb-10">
              <Button href="#pricing" variant="primary" size="lg" className="w-full sm:w-auto font-bold shadow-lg shadow-primary/10">
                Enroll and Claim Seat
              </Button>
              <div className="flex items-center gap-1.5 text-xs text-[#FAFAF8]/60">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Risk-free 7-day refund guarantee</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full pt-8 border-t border-white/10 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 border border-white/10 rounded-xl">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">NLSIU & NUJS</div>
                  <div className="text-xs text-[#FAFAF8]/60">Expert instructors</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 border border-white/10 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">92% Hiring Rate</div>
                  <div className="text-xs text-[#FAFAF8]/60">Within 3 months</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 border border-white/10 rounded-xl">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Cohort Starts</div>
                  <div className="text-xs text-[#FAFAF8]/60">July 2026 Batch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
