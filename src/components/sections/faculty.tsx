"use client";

import React from "react";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import Button from "../ui/button";

export default function Faculty() {
  const team = [
    {
      name: "Tanuj Kalia",
      role: "CEO & Founder, Lawctopus",
      almaMater: "NUJS, Kolkata Alumnus",
      experience: "10+ Years in Legal Education & Counseling",
      achievement: "Author of 'Law as a Career'",
      initials: "TK",
      gradient: "from-amber-400 to-orange-500",
      linkedin: "https://linkedin.com/in/tanujkalia",
    },
    {
      name: "Sanjay Kabra",
      role: "Corporate Advisor & CA",
      almaMater: "NLSIU, Bangalore Alumnus",
      experience: "8+ Years in Corporate & Financial Law",
      achievement: "Advised 50+ startup founders on contract compliance",
      initials: "SK",
      gradient: "from-blue-400 to-indigo-500",
      linkedin: "https://linkedin.com/in/sanjaykabra",
    },
    {
      name: "Bhakti Madan",
      role: "Course Director & Coordinator",
      almaMater: "Legal Drafting Lead, Lawctopus",
      experience: "5+ Years training 3,000+ law students",
      achievement: "Designed 20+ specialized legal curricula",
      initials: "BM",
      gradient: "from-teal-400 to-emerald-500",
      linkedin: "https://linkedin.com/in/bhaktimadan",
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-bg-base relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Instructors</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
            Learn from the Practitioners
          </p>
          <p className="text-text-secondary text-base md:text-lg mt-6 leading-relaxed">
            Direct guidance from corporate specialists who draft agreements and consult high-growth companies daily.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-border-custom hover:border-text-primary/10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Editorial Avatar */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-6 flex items-center justify-center bg-gradient-to-br border border-border-custom shadow-inner select-none font-sans text-2xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-90`} />
                  <span className="relative z-10">{member.initials}</span>
                </div>

                <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mt-1 mb-6">
                  {member.role}
                </p>

                {/* Details Stack */}
                <div className="space-y-4 border-t border-border-custom/50 pt-6 mb-8 text-sm">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" />
                    <span className="text-text-secondary">{member.almaMater}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" />
                    <span className="text-text-secondary">{member.experience}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" />
                    <span className="text-text-secondary font-medium">{member.achievement}</span>
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
