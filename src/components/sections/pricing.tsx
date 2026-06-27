"use client";

import React from "react";
import Button from "../ui/button";
import Badge from "../ui/badge";
import { Check, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

export default function Pricing() {
  const inclusions = [
    "8 Weeks of Live, Interactive Cohort Classes",
    "15+ Pre-formatted Drafting Templates (SaaS, NDA, MSA)",
    "Individual CV Audit & LinkedIn Profile Rewrite",
    "Direct Referrals & WhatsApp Placements Channel Access",
    "Verifiable Graduate Diploma with QR Code",
    "Lifetime Access to Course Recordings & Materials",
    "Negotiation Simulation & 1-on-1 Capstone Feedback",
  ];

  return (
    <section id="pricing" className="py-24 bg-bg-base relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Investment</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-none">
            An Investment in Your Career Autonomy
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-4">
            Join the cohort and master the practical skills corporate law offices actually value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: What's included */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 bg-white border border-border-custom rounded-3xl shadow-sm">
            <div>
              <h3 className="text-xl font-bold text-text-primary tracking-tight mb-8">
                Everything Included in Your Enrollment
              </h3>
              <ul className="space-y-5">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-sm md:text-base text-text-primary font-medium">
                    <div className="p-0.5 bg-green-500/10 rounded-md border border-green-500/20 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-8 border-t border-border-custom flex items-center gap-3 text-xs text-text-secondary">
              <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
              <span>Secure Checkout powered by Stripe and Razorpay. Corporate sponsorships available upon request.</span>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div className="lg:col-span-5 relative">
            {/* Background highlight */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />

            <div className="h-full bg-white border-2 border-primary rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-primary text-[#1B1B1B] font-bold text-[10px] tracking-wider uppercase px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Only 12 seats left</span>
              </div>

              <div>
                <Badge variant="muted" className="mb-6 font-semibold">
                  Cohort Pricing
                </Badge>

                {/* Pricing values */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-black text-text-primary">₹9,999</span>
                  <span className="text-lg text-text-secondary line-through">₹19,999</span>
                </div>
                <p className="text-xs text-text-secondary mb-8">
                  Inclusive of all taxes. Full course access.
                </p>

                {/* Installment details */}
                <div className="bg-bg-muted border border-border-custom rounded-2xl p-4 mb-8">
                  <div className="text-xs font-bold text-text-primary">No-Cost EMI Options Available</div>
                  <div className="text-xs text-text-secondary mt-1">Pay in 3 monthly installments of ₹3,333/mo.</div>
                </div>

                {/* Course Bonuses */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold text-text-primary uppercase tracking-wider">Included Bonuses:</div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span>Lifetime Client Intake templates (worth ₹3,000)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <span>AI Prompt Cheat-Sheet for Legal Auditing</span>
                  </div>
                </div>
              </div>

              {/* Enrollment CTA & Guarantee */}
              <div className="space-y-4">
                <Button href="#pricing" variant="primary" size="lg" className="w-full font-bold shadow-lg shadow-primary/20 py-4 hover:scale-[1.01] cursor-pointer">
                  Claim Your Seat Now
                </Button>
                
                <div className="text-center text-xs text-text-secondary font-medium">
                  <strong>7-Day Refund Policy</strong>: Try the first week risk-free.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
