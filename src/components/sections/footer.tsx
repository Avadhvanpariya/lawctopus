"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border-custom py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 & 2: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <Image
                src="/Lawctopus.webp"
                alt="Lawctopus Logo"
                width={150}
                height={38}
                className="h-21 w-auto object-contain"
              />
            </div>
            <p className="text-text-secondary max-w-sm leading-relaxed">
              We empower law students and practitioners with the practical skills required to build independent, high-impact careers in contract drafting and corporate compliance.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com/lawctopus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
                className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-text-primary uppercase tracking-wider text-xs">Course</h3>
            <ul className="space-y-2">
              <li>
                <a href="#curriculum" className="text-text-secondary hover:text-text-primary transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#faculty" className="text-text-secondary hover:text-text-primary transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-4">
            <h3 className="font-bold text-text-primary uppercase tracking-wider text-xs">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2 text-text-secondary">
                <Mail className="w-4 h-4 text-text-secondary shrink-0" />
                <a href="mailto:school@lawctopus.com" className="hover:text-text-primary transition-colors">
                  school@lawctopus.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-text-secondary">
                <Phone className="w-4 h-4 text-text-secondary shrink-0" />
                <span>+91 99999 88888</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-custom/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>© {currentYear} Lawctopus Law School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
