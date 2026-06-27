"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import ChatWindow to keep it out of the initial bundle
const ChatWindow = dynamic(() => import("./ChatWindow"), { ssr: false });

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((v) => !v);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-[88px] lg:bottom-6 right-4 sm:right-6 z-50">
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Close course assistant" : "Open course assistant"}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          className="flex items-center gap-2.5 bg-[#1B1B1B] text-white pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-sm font-semibold tracking-tight">
            {isOpen ? "Close" : "Ask AI"}
          </span>
        </motion.button>
      </div>

      {/* Chat panel */}
      <ChatWindow isOpen={isOpen} onClose={close} />
    </>
  );
}
