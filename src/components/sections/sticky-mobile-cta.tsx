"use client";

import React, { useEffect, useState } from "react";
import Button from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility based on scroll position (past the hero section, approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-white/90 backdrop-blur-md border-t border-border-custom/80 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] flex items-center justify-between gap-4 pb-safe-bottom"
        >
          <div className="text-left pl-2">
            <span className="text-[9px] uppercase font-extrabold tracking-wider text-text-secondary block leading-none mb-1">
              July 2026 Cohort
            </span>
            <span className="text-base font-black text-text-primary">
              ₹9,999 <span className="text-xs text-text-secondary line-through font-normal ml-1">₹19,999</span>
            </span>
          </div>
          <Button href="#pricing" variant="primary" size="sm" className="font-extrabold px-6 py-2.5 shadow-md hover:scale-[1.02] cursor-pointer">
            Enroll Now
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
