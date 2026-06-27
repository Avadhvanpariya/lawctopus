"use client";

import React from "react";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 px-4 py-3" role="status" aria-label="Assistant is typing">
      <div className="w-7 h-7 rounded-full bg-[#1B1B1B] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-white">AI</span>
      </div>
      <div className="flex items-center gap-1 bg-white border border-border-custom rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/50 animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/50 animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-text-secondary/50 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}
