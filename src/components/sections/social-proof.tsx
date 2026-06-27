"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ to, suffix = "", duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = to;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30;
    const totalSteps = Math.round(totalMiliseconds / incrementTime);
    const stepValue = end / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextCount = Math.round(stepValue * currentStep);
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(nextCount);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration, isInView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function SocialProof() {
  const partners = [
    { name: "Razorpay" },
    { name: "ICICI Bank" },
    { name: "PolicyBazaar" },
    { name: "L&T Finance" },
    { name: "Khaitan & Co" },
    { name: "JSA Law" },
  ];

  return (
    <section className="bg-bg-muted py-16 border-y border-border-custom overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stats Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
              <span className="text-sm font-bold text-text-primary ml-2">4.9 / 5.0</span>
              <span className="text-xs text-text-secondary">(1,200+ reviews)</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-text-primary">
              Proven Outcomes. <br />
              Trusted by Top Brands.
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              Our students get hired by leading corporations, top tier law firms, and high-growth fintech companies.
            </p>

            {/* Micro Counter Grid */}
            <div className="grid grid-cols-3 gap-6 mt-4 w-full">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl md:text-3xl font-black text-text-primary">
                  <Counter to={92} suffix="%" />
                </div>
                <div className="text-xs text-text-secondary mt-1">Placement rate</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl md:text-3xl font-black text-text-primary">
                  <Counter to={5000} suffix="+" />
                </div>
                <div className="text-xs text-text-secondary mt-1">Careers boosted</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-2xl md:text-3xl font-black text-text-primary">
                  <Counter to={150} suffix="K+" />
                </div>
                <div className="text-xs text-text-secondary mt-1">Freelance earnings</div>
              </div>
            </div>
          </div>

          {/* Logos Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-xs font-semibold tracking-wider text-text-secondary uppercase">
              Where our alumni work & intern
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white border border-border-custom rounded-xl py-5 px-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span className="text-sm font-extrabold tracking-widest text-text-secondary/50 uppercase select-none font-mono">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
