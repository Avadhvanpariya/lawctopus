"use client";

import React from "react";
import Button from "../ui/button";
import Badge from "../ui/badge";
import { motion } from "framer-motion";
import { Users, Video, Award, Briefcase, Play, Calendar, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-bg-base pt-16 pb-24 md:py-32">
      {/* Background radial highlight */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="primary" className="font-semibold tracking-wider">
                Interactive Live Cohort
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tight leading-[1.1] mb-6"
            >
              Draft with Authority. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary/70">
                Earn with Autonomy.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl mb-8"
            >
              Go from complete legal basics to drafting commercial agreements and landing high-ticket freelancing clients. A luxury masterclass by Lawctopus.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Button href="#pricing" variant="primary" size="lg" className="font-bold">
                Enroll in Next Cohort
              </Button>
              <Button href="#curriculum" variant="secondary" size="lg" className="font-semibold">
                Explore Curriculum
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-8 border-t border-border-custom"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-border-custom">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">5,000+</div>
                  <div className="text-xs text-text-secondary">Students trained</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-border-custom">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">Live</div>
                  <div className="text-xs text-text-secondary">Zoom sessions</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-border-custom">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">Certified</div>
                  <div className="text-xs text-text-secondary">Verified diploma</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-border-custom">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">Placement</div>
                  <div className="text-xs text-text-secondary">Full assistance</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Mockup Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[16/11] bg-white border border-border-custom rounded-2xl shadow-2xl p-4 overflow-hidden group select-none">
              {/* Mockup Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-border-custom">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <div className="text-xs text-text-secondary font-mono tracking-tight bg-bg-muted px-3 py-1 rounded-md border border-border-custom">
                  lawctopus.school/lms
                </div>
                <div className="w-6" />
              </div>

              {/* Mockup Dashboard Content */}
              <div className="grid grid-cols-3 gap-3 pt-3 h-full pb-6">
                {/* Sidebar */}
                <div className="border-r border-border-custom/80 pr-2 space-y-2.5 hidden sm:block">
                  <div className="h-4 bg-bg-muted rounded w-20" />
                  <div className="space-y-1.5">
                    <div className="h-6 bg-primary/10 rounded flex items-center px-1.5 gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="h-2 bg-primary/40 rounded w-10" />
                    </div>
                    <div className="h-6 rounded flex items-center px-1.5 gap-1.5 hover:bg-bg-muted">
                      <span className="w-1.5 h-1.5 bg-text-secondary/40 rounded-full" />
                      <span className="h-2 bg-text-secondary/20 rounded w-8" />
                    </div>
                    <div className="h-6 rounded flex items-center px-1.5 gap-1.5 hover:bg-bg-muted">
                      <span className="w-1.5 h-1.5 bg-text-secondary/40 rounded-full" />
                      <span className="h-2 bg-text-secondary/20 rounded w-12" />
                    </div>
                  </div>
                </div>

                {/* Main panel */}
                <div className="col-span-3 sm:col-span-2 flex flex-col justify-between gap-3 h-full">
                  {/* Video Mockup */}
                  <div className="relative flex-1 bg-[#1B1B1B] rounded-xl overflow-hidden flex items-center justify-center group/video shadow-inner">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.6)_100%)] z-10" />
                    {/* Play button with glow */}
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover/video:scale-105 transition-all duration-300 z-20 cursor-pointer">
                      <Play className="w-5 h-5 text-[#1B1B1B] fill-current translate-x-0.5" />
                    </div>
                    {/* Caption bar */}
                    <div className="absolute bottom-2 left-2 right-2 bg-white/10 backdrop-blur-md rounded-lg py-1.5 px-3 z-20 flex items-center justify-between border border-white/10">
                      <span className="text-[10px] text-white/95 font-semibold">Contract Drafting: Masterclass</span>
                      <span className="text-[9px] text-[#FCB900] bg-white/10 px-1.5 py-0.5 rounded-full font-medium">LIVE</span>
                    </div>
                  </div>

                  {/* Certification preview or active task */}
                  <div className="border border-border-custom bg-bg-muted rounded-xl p-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-primary/10 border border-primary/20 rounded-md">
                        <Award className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-text-primary leading-none mb-0.5">Freelancer Diploma</div>
                        <div className="text-[9px] text-text-secondary">Fully verifiable certificate</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-5 -right-3 md:-right-6 bg-white border border-border-custom shadow-xl rounded-xl p-3.5 flex items-center gap-3 animate-bounce-slow max-w-[200px]">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Calendar className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-text-primary leading-none mb-1">Batch Starting</p>
                <p className="text-[10px] text-text-secondary leading-none">July 2026 Cohort</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
