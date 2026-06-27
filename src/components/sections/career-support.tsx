"use client";

import React from "react";
import { CheckCircle2, MessageSquare, Briefcase, FileSearch, HelpCircle } from "lucide-react";
import Badge from "../ui/badge";

export default function CareerSupport() {
  const features = [
    {
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      title: "Placement Assistance Cell",
      description: "Direct alerts for legal internships, corporate associate positions, and remote freelance opportunities vetted by our team.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      title: "Exclusive Alumni Channel",
      description: "Instant access to a private Lawctopus jobs channel on WhatsApp, keeping you connected with active hiring managers.",
    },
    {
      icon: <FileSearch className="w-5 h-5 text-primary" />,
      title: "CV & LinkedIn Facelift",
      description: "A comprehensive audit of your resume and LinkedIn profile to ensure you rank high in applicant tracking systems (ATS).",
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-primary" />,
      title: "Mock Interview Runs",
      description: "Simulated interviews with corporate law practitioners to help you negotiate fees and answer technical questions.",
    },
  ];

  return (
    <section id="career-support" className="py-24 bg-bg-muted border-y border-border-custom relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Badge variant="primary" className="mb-4 font-semibold">
              Career Fulfillment
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight leading-[1.15] mb-6">
              We Don't Just Teach. <br />
              We Help You Get Hired.
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
              Skill building is only half the battle. Our dedicated support infrastructure is designed to help you monetize your knowledge as fast as possible.
            </p>

            <ul className="space-y-4">
              {[
                "Direct referrals to hiring legal tech firms",
                "Access to freelance proposal pitch templates",
                "Lifetime connection to Lawctopus alumni network",
                "Personalized 1-on-1 counseling calls",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base text-text-primary font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-border-custom hover:border-text-primary/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
              >
                <div className="p-2.5 bg-bg-base rounded-xl border border-border-custom mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-text-primary tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
