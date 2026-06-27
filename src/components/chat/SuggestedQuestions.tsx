"use client";

import React from "react";

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
}

const SUGGESTIONS = [
  "Course duration",
  "Curriculum overview",
  "Who are the faculty?",
  "Are sessions recorded?",
  "Career support",
  "Placement assistance",
  "Pricing and fees",
  "Certificate offered?",
  "AI tools included?",
  "Who is eligible?",
  "Live class schedule",
];

export default function SuggestedQuestions({ onSelect }: SuggestedQuestionsProps) {
  return (
    <div className="px-4 pb-3">
      <p className="text-[10px] uppercase font-bold tracking-wider text-text-secondary mb-2">
        Suggested Questions
      </p>
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onSelect(q)}
            className="text-xs px-3 py-1.5 rounded-lg border border-border-custom bg-white text-text-secondary hover:border-primary/40 hover:text-text-primary hover:bg-bg-muted transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Ask: ${q}`}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
