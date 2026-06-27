"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Cpu, Compass, Users } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Real-World Drafting",
      description: "Learn to draft NDA, IP Assignment, SaaS, and Service Agreements from scratch. No copy-pasting generic templates.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary" />,
      title: "AI Legal Tech Tools",
      description: "Leverage AI tools for legal research, contract review, and automated proofreading to double your drafting speed.",
    },
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Career & Portfolio Support",
      description: "Build a polished digital portfolio showing your draft contracts to attract corporate recruiters and freelance clients.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "1-on-1 Alumni Mentorship",
      description: "Direct guidance and feedback from corporate lawyers and alumni of tier-1 national law schools (NLSIU, NUJS).",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Why Lawctopus</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight leading-[1.15]">
            Built for execution. <br className="hidden sm:inline" />
            Designed for careers.
          </p>
          <p className="text-text-secondary text-base md:text-lg mt-6 leading-relaxed">
            Forget theoretical textbooks. Our focus is helping you land jobs, acquire freelance gigs, and draft contracts like a pro.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-border-custom hover:border-text-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-start text-left"
            >
              <div className="p-3 bg-bg-base rounded-xl border border-border-custom mb-6 group-hover:scale-105 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text-primary tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
