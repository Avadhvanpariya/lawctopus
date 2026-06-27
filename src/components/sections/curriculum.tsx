"use client";

import React from "react";
import Accordion from "../ui/accordion";
import Button from "../ui/button";
import { Download } from "lucide-react";

export default function Curriculum() {
  const weeks = [
    {
      id: "week-1",
      trigger: "Week 1: Core Fundamentals & Plain English Principles",
      content: (
        <div className="space-y-3">
          <p>
            Learn the core philosophy of commercial drafting: precision, brevity, and clarity. Shift away from confusing archaic terms to modern Plain English.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Anatomy of a contract: Preamble, Recitals, and Definitions</li>
            <li>Eliminating double negatives and unnecessary legalese</li>
            <li>Live Session: Rewriting a poorly drafted agreement</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-2",
      trigger: "Week 2: Designing Operative Clauses & Payment Flow",
      content: (
        <div className="space-y-3">
          <p>
            Master the core clauses that define the commercial heart of any deal. You will learn to draft obligations, rights, and complex financial terms.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Drafting Representations & Warranties (and why they fail)</li>
            <li>Covenants vs. Conditions Precedent</li>
            <li>Defining payment schedules, milestone triggers, and interest on defaults</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-3",
      trigger: "Week 3: Boilerplate Engineering & Risk Allocation",
      content: (
        <div className="space-y-3">
          <p>
            Boilerplates are not "standard text." Learn how minor changes in boilerplate clauses can transfer millions of dollars in liability risk between parties.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Indemnification vs. Limitation of Liability</li>
            <li>Sleek Force Majeure clauses tailored for the post-pandemic market</li>
            <li>Governing Law & Dispute Resolution: Drafting arbitration and jurisdiction clauses</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-4",
      trigger: "Week 4: Commercial NDA & Master Service Agreements",
      content: (
        <div className="space-y-3">
          <p>
            Draft the two most common business agreements in the corporate world. Learn the exact clauses required to protect trade secrets and specify technical deliverables.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Bilateral vs. Unilateral Non-Disclosure Agreements</li>
            <li>Independent Contractor Agreements vs. MSAs</li>
            <li>SOW (Statement of Work) architecture and deliverables definition</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-5",
      trigger: "Week 5: Tech Contracts, SaaS, & IP Licensing",
      content: (
        <div className="space-y-3">
          <p>
            Tech contracts command the highest fees. Learn how to draft specialized agreements for software licensing, cloud hosting, and IP transfer.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>SaaS terms of service and Service Level Agreements (SLA)</li>
            <li>Intellectual Property (IP) assignment and licensing mechanics</li>
            <li>Data protection, confidentiality, and GDPR compliance clauses</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-6",
      trigger: "Week 6: AI-Powered Drafting & Research Speedruns",
      content: (
        <div className="space-y-3">
          <p>
            Use cutting-edge AI technologies to draft contracts twice as fast while maintaining 100% legal accuracy.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Prompt engineering for legal review and loophole discovery</li>
            <li>Automating clause variations and formatting checks</li>
            <li>Ethical and privacy boundaries when utilizing AI models</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-7",
      trigger: "Week 7: Launching Your Global Freelance Business",
      content: (
        <div className="space-y-3">
          <p>
            Turn your skills into cash. We guide you step-by-step through setting up remote freelancing profiles and onboarding international clients.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Setting up premium, high-converting Upwork & Fiverr profiles</li>
            <li>Pricing strategy: Fixed fee vs. Hourly billing</li>
            <li>Client intake procedures: NDAs, engagement letters, and payment escrows</li>
          </ul>
        </div>
      ),
    },
    {
      id: "week-8",
      trigger: "Week 8: Portfolio Building, Negotiation, & Capstone",
      content: (
        <div className="space-y-3">
          <p>
            The grand finale. Put your skills to the test with real-time negotiations and lock in your course credentials.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-text-secondary pl-2">
            <li>Live negotiation simulation: Representing buyer vs. seller</li>
            <li>Creating an online digital portfolio showing off anonymized drafts</li>
            <li>Capstone project review, individual feedback, and graduation</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="curriculum" className="py-24 bg-bg-base relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Syllabus</h2>
          <p className="text-3xl md:text-4xl font-black text-text-primary tracking-tight leading-none">
            An 8-Week Applied Curriculum
          </p>
          <p className="text-text-secondary text-sm md:text-base mt-4 max-w-lg mx-auto">
            Each week features 1 live workshop, 1 drafting assignment, and interactive peer review.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion items={weeks} allowMultiple={false} className="mb-12" />

        {/* Secondary download CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white border border-border-custom rounded-2xl gap-4">
          <div className="text-left">
            <h3 className="text-sm font-bold text-text-primary">Want a full offline copy?</h3>
            <p className="text-xs text-text-secondary mt-0.5">Download the complete detailed curriculum PDF with reading list.</p>
          </div>
          <Button variant="outline" size="sm" className="font-semibold gap-2 border-primary text-primary hover:bg-primary/5 cursor-pointer">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
