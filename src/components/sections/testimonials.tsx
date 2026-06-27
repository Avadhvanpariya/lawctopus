"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Badge from "../ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ananya Deshmukh",
      info: "NLU, Odisha Graduate • Freelance Counsel",
      income: "₹85,000 in first 40 days",
      title: "Drafting skills gave me client confidence",
      quote:
        "The step-by-step guidance on operative clauses gave me the confidence to pitch to real clients. I secured two retainer contracts from US tech companies within weeks of graduating.",
      initials: "AD",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Rohit Sen",
      info: "Independent Legal Practitioner",
      income: "₹1,20,000 retainer secured",
      title: "The freelancing module is a goldmine",
      quote:
        "Most law schools teach you history, not the business of law. Lawctopus taught me how to set up Upwork, draft proposals, and price my services. That made all the difference.",
      initials: "RS",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Bhavna Sharma",
      info: "Corporate Legal Associate",
      income: "Got placed at Tier-1 Firm",
      title: "Clean drafting stands out to recruiters",
      quote:
        "Recruiters are tired of copy-pasted templates. In my interview, I presented my portfolio of SaaS and NDA agreements built during the course. They were deeply impressed by my precision.",
      initials: "BS",
      gradient: "from-rose-500 to-pink-500",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const active = reviews[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-bg-base relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Testimonials</h2>
          <p className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
            Success Stories from Our Alumni
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-4 max-w-md mx-auto">
            See how our graduates transitioned into high-income legal consultants.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative bg-white border border-border-custom rounded-3xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[300px]">
            {/* Review content */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                  <Badge variant="primary" className="ml-3 font-semibold normal-case text-[11px]">
                    {active.income}
                  </Badge>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-text-primary tracking-tight mb-4">
                  "{active.title}"
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed italic mb-8">
                  "{active.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-br ${active.gradient} shadow-sm select-none`}>
                  {active.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">{active.name}</h4>
                  <p className="text-xs text-text-secondary">{active.info}</p>
                </div>
              </div>
            </div>

            {/* Video-Style Mockup Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[240px] aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg group select-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 z-10" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Subtext overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                  <p className="text-xs font-bold text-white mb-0.5">{active.name}</p>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">{active.income}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 border border-border-custom hover:border-text-primary/20 rounded-xl bg-white text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 border border-border-custom hover:border-text-primary/20 rounded-xl bg-white text-text-secondary hover:text-text-primary transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
