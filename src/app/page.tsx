import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/sections/announcement";
import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import WhyUs from "@/components/sections/why-us";
import Outcomes from "@/components/sections/outcomes";
import Curriculum from "@/components/sections/curriculum";
import Faculty from "@/components/sections/faculty";
import CareerSupport from "@/components/sections/career-support";
import Testimonials from "@/components/sections/testimonials";
import Comparison from "@/components/sections/comparison";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import StickyMobileCTA from "@/components/sections/sticky-mobile-cta";
import ChatButton from "@/components/chat/ChatButton";

export const metadata: Metadata = {
  title: "Contract Drafting & Freelancing Diploma | Lawctopus Law School",
  description:
    "Go from legal drafting basics to structuring NDA, IP, and SaaS agreements. Access our placement cell, 1-on-1 resume audit, and start your global freelance business.",
  keywords: [
    "Contract Drafting Course",
    "Legal Freelancing",
    "Lawctopus Law School",
    "Upwork for Lawyers",
    "SaaS Contracts",
    "Non Disclosure Agreements",
  ],
  openGraph: {
    title: "Contract Drafting & Freelancing Course | Lawctopus Law School",
    description:
      "Go from legal drafting basics to structuring NDA, IP, and SaaS agreements. Build your portfolio and secure corporate or remote freelance roles.",
    url: "https://school.lawctopus.com/contract-drafting",
    siteName: "Lawctopus Law School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Drafting & Freelancing Course | Lawctopus Law School",
    description:
      "Master high-ticket contract drafting and legal freelancing with direct placements and 1-on-1 guidance from top law school alumni.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Diploma in Contract Drafting and Legal Freelancing",
    "description":
      "Master the art of contract drafting and build a high-income legal career. Go from basics to launching a global remote freelancing business with direct placement assistance.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Lawctopus Law School",
      "sameAs": "https://www.lawctopus.com",
    },
    "courseCode": "LLS-CDF-2026",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "live online",
      "duration": "P8W",
      "courseWorkload": "PT4H",
      "startDate": "2026-07-15",
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "price": 9999,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
    },
  };

  return (
    <>
      {/* Schema.org Injection for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen bg-bg-base font-sans antialiased text-text-primary selection:bg-primary/20">
        {/* Sticky elements */}
        <AnnouncementBar />
        <Navigation />

        {/* Main Content Layout */}
        <main className="flex-grow">
          <Hero />
          <SocialProof />
          <WhyUs />
          <Outcomes />
          <Curriculum />
          <Faculty />
          <CareerSupport />
          <Testimonials />
          <Comparison />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
        <StickyMobileCTA />
        <ChatButton />
      </div>
    </>
  );
}
