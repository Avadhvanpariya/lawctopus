"use client";

import React from "react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Core Focus",
      oldWay: "Rote memorization of legal sections and historic contract theories.",
      lawctopusWay: "Drafting-first practice under real corporate NDA and SaaS scenarios.",
      status: true,
    },
    {
      feature: "Drafting Methods",
      oldWay: "Copy-pasting outdated templates found on free internet sites.",
      lawctopusWay: "Mastering the anatomy of clauses to write contracts from scratch.",
      status: true,
    },
    {
      feature: "AI Integration",
      oldWay: "No guidance on using AI, leaving you to type manually.",
      lawctopusWay: "Using Claude, ChatGPT, and legal AI tools to audit drafts in seconds.",
      status: true,
    },
    {
      feature: "Career Training",
      oldWay: "Zero instruction on client acquisition or launching freelance desks.",
      lawctopusWay: "Step-by-step setup on Fiverr/Upwork and high-ticket client negotiation.",
      status: true,
    },
    {
      feature: "Placement Pipeline",
      oldWay: "Apply cold on job boards with generic resumes and hope for the best.",
      lawctopusWay: "Direct access to private hiring channels and custom portfolio reviews.",
      status: true,
    },
  ];

  return (
    <section className="py-24 bg-bg-muted border-y border-border-custom relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Comparison</h2>
          <p className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
            The Academic Way vs. The Lawctopus Way
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-4">
            See how our applied method contrasts with traditional, theory-only legal courses.
          </p>
        </div>

        {/* Desktop Comparison Grid */}
        <div className="hidden md:block overflow-hidden border border-border-custom rounded-3xl bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-muted/80 border-b border-border-custom">
                <th className="p-6 text-sm font-bold text-text-primary uppercase tracking-wider w-1/4">Feature</th>
                <th className="p-6 text-sm font-bold text-text-secondary uppercase tracking-wider w-3/8">Traditional Courses</th>
                <th className="p-6 text-sm font-bold text-primary uppercase tracking-wider w-3/8">Lawctopus Law School</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/50">
              {comparisonData.map((item, idx) => (
                <tr key={idx} className="hover:bg-bg-muted/30 transition-colors duration-150">
                  <td className="p-6 font-bold text-text-primary text-sm">{item.feature}</td>
                  <td className="p-6 text-sm text-text-secondary leading-relaxed flex items-start gap-2.5">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item.oldWay}</span>
                  </td>
                  <td className="p-6 text-sm text-text-primary font-medium leading-relaxed bg-primary/[0.01]">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item.lawctopusWay}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Layout (Stacked Cards) */}
        <div className="block md:hidden space-y-8">
          {comparisonData.map((item, idx) => (
            <div key={idx} className="bg-white border border-border-custom rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-text-primary border-b border-border-custom/50 pb-3 mb-4">
                {item.feature}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wide">Traditional Method</h4>
                    <p className="text-sm text-text-secondary mt-1">{item.oldWay}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pt-3 border-t border-border-custom/30">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wide">Lawctopus Method</h4>
                    <p className="text-sm text-text-primary font-medium mt-1">{item.lawctopusWay}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
