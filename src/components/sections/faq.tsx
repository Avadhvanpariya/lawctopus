"use client";

import React from "react";
import Accordion from "../ui/accordion";

export default function FAQ() {
  const faqItems = [
    {
      id: "faq-1",
      trigger: "Who is this course designed for?",
      content:
        "This course is built for law students (3rd, 4th, 5th year), recent graduates, corporate legal associates, independent legal practitioners, and CA/CS professionals looking to add premium contract drafting and remote freelancing services to their skillset.",
    },
    {
      id: "faq-2",
      trigger: "What are the timings? Can I attend if I work full-time?",
      content:
        "Yes, absolutely. Classes are held live on Saturdays and Sundays from 4:00 PM to 6:00 PM IST. All sessions are recorded, transcribed, and uploaded to our learning portal within 2 hours, along with all slide decks and drafting exercises.",
    },
    {
      id: "faq-3",
      trigger: "How does the placement support actually work?",
      content:
        "Students who complete at least 80% of course assignments gain exclusive entry into our WhatsApp Placements Group. Here, corporate law firms, tech startups, and freelance contract agencies post direct hiring requirements. We also provide 1-on-1 resume optimization and LinkedIn facelift guidance.",
    },
    {
      id: "faq-4",
      trigger: "What is the 7-day money-back guarantee?",
      content:
        "We offer a 100% risk-free trial. If you attend the live sessions and review the materials during the first week and decide the course isn't right for you, just let us know within 7 days of the start date for a full, prompt refund. No questions asked.",
    },
    {
      id: "faq-5",
      trigger: "Do I receive a certificate upon graduation?",
      content:
        "Yes. Upon successful completion of the weekly drafting assignments and the capstone project, you will receive a secure, verifiable Diploma in Contract Drafting and Freelancing with a unique verification ID that you can display on LinkedIn.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-bg-base relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">FAQ</h2>
          <p className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-4">
            Everything you need to know about the schedule, syllabus, payments, and placement cell.
          </p>
        </div>

        {/* Accordion */}
        <Accordion items={faqItems} allowMultiple={true} />
      </div>
    </section>
  );
}
