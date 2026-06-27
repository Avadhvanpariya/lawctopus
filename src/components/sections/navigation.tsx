"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Faculty", href: "#faculty" },
    { label: "Career Support", href: "#career-support" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-custom/80 nav-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
        >
          <Image
            src="/Lawctopus.webp"
            alt="Lawctopus Logo"
            width={160}
            height={60}
            className="h-10 md:h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="#pricing" variant="primary" size="sm" className="font-semibold">
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-text-primary hover:bg-bg-muted rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border-custom shadow-xl z-50 flex flex-col p-6 gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors py-2 border-b border-border-custom/40 last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button
              href="#pricing"
              onClick={() => setIsOpen(false)}
              variant="primary"
              size="md"
              className="w-full text-center font-bold"
            >
              Enroll Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
