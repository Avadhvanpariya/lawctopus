"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Code, Globe, Shield, Terminal, TrendingUp } from "lucide-react";

export default function Outcomes() {
  const steps = [
    {
      icon: <Code className="w-5 h-5 text-primary" />,
      title: "Master High-Value Drafting",
      description: "Graduate with hands-on practice drafting NDAs, Service Agreements, SaaS, and IP licensing contracts. You will know exactly how to protect client interests.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-primary" />,
      title: "Adopt AI Legal Tech Tools",
      description: "Learn to automate contract reviews, perform rapid legal research, and find loopholes using ChatGPT, Claude, and specialized legal software.",
    },
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      title: "Launch a Global Freelance Desk",
      description: "Set up optimized profiles on Upwork, Fiverr, and LinkedIn. Learn our outreach framework to secure international clients paying in USD/EUR.",
    },
    {
      icon: <Shield className="w-5 h-5 text-primary" />,
      title: "Build a Public Drafting Portfolio",
      description: "Publish your clean, non-confidential contracts on a digital portfolio site. Show recruiters and clients physical evidence of your drafting expertise.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      title: "Unlock Career & Income Opportunities",
      description: "Gain direct access to Lawctopus's exclusive WhatsApp placements group, custom resume audits, and mock interview preparations.",
    },
  ];

  return (
    <section className="py-24 bg-bg-muted border-y border-border-custom relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Your Journey</h2>
          <p className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
            What You Will Achieve
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-4 max-w-xl mx-auto">
            A linear progression designed to turn you into a highly skilled, client-ready legal contractor.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l border-border-custom/80 pl-8 ml-4 md:ml-8 space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Connector Dot */}
              <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-border-custom flex items-center justify-center shadow-sm group-hover:border-primary transition-colors duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              {/* Box */}
              <div className="bg-white border border-border-custom hover:border-text-primary/10 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="p-2.5 bg-bg-base rounded-xl border border-border-custom self-start">
                    {step.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary">
                      Milestone 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary tracking-tight mt-0.5">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed pl-0 sm:pl-16">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
