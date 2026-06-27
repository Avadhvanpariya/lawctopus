"use client";

import React, { useState, useCallback } from "react";
import type { Message } from "@/types/chat";
import { Copy, Check, AlertCircle, RefreshCw } from "lucide-react";

// Minimal markdown-to-HTML renderer for bullets, bold, numbered lists
function renderMarkdown(text: string): string {
  return (
    text
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Numbered list items
      .replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>")
      // Bullet list items
      .replace(/^[-*]\s+(.+)$/gm, "<li>$1</li>")
      // Wrap consecutive <li> in <ul>
      .replace(/(<li>.*?<\/li>\n?)+/gs, (match) => `<ul class="list-disc pl-4 space-y-1">${match}</ul>`)
      // Line breaks
      .replace(/\n\n/g, "</p><p>")
      .replace(/\n/g, "<br/>")
  );
}

interface MessageBubbleProps {
  message: Message;
  onRetry?: () => void;
}

export default function MessageBubble({ message, onRetry }: MessageBubbleProps) {
  const [copied, setCopied] = useState(false);
  const isUser = message.role === "user";

  const handleCopy = useCallback(async () => {
    if (!message.content) return;
    await navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [message.content]);

  if (isUser) {
    return (
      <div className="flex justify-end px-4 py-1.5">
        <div
          className="max-w-[80%] bg-[#1B1B1B] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed"
          aria-label="Your message"
        >
          {message.content}
        </div>
      </div>
    );
  }

  if (message.isError) {
    return (
      <div className="flex items-start gap-3 px-4 py-1.5">
        <div className="w-7 h-7 rounded-full bg-[#1B1B1B] flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-[10px] font-bold text-white">AI</span>
        </div>
        <div className="max-w-[80%] bg-red-50 border border-red-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-red-700 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Something went wrong. Please try again.</span>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-sm w-fit"
              aria-label="Retry this message"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 px-4 py-1.5 group">
      <div
        className="w-7 h-7 rounded-full bg-[#1B1B1B] flex items-center justify-center shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold text-white">AI</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-1">
        <div
          className="bg-white border border-border-custom rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-text-primary leading-relaxed shadow-sm"
          aria-label="Assistant response"
        >
          <div
            className="prose-sm [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:space-y-1 [&_strong]:font-semibold [&_strong]:text-text-primary"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
          />
        </div>

        {/* Copy button — appears on hover */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pl-1">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-[10px] text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            aria-label={copied ? "Copied!" : "Copy response"}
          >
            {copied ? (
              <Check className="w-3 h-3 text-green-500" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
