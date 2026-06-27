"use client";

import React, { useEffect, useRef } from "react";
import type { Message } from "@/types/chat";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onRetry: () => void;
  onSuggestedSelect: (q: string) => void;
}

export default function ChatMessages({
  messages,
  isLoading,
  error,
  onRetry,
  onSuggestedSelect,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const showSuggestions = messages.length === 0 && !isLoading;

  // Auto-scroll to bottom on new messages or loading state change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <div
      className="flex-1 overflow-y-auto overscroll-contain scroll-smooth py-4 space-y-1"
      role="log"
      aria-live="polite"
      aria-label="Conversation"
    >
      {/* Welcome message */}
      {messages.length === 0 && (
        <div className="px-4 pb-2">
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-[#1B1B1B] flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-white">AI</span>
            </div>
            <div className="bg-white border border-border-custom rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-text-primary leading-relaxed shadow-sm max-w-[85%]">
              <p className="font-semibold mb-1">Welcome to Lawctopus Law School!</p>
              <p className="text-text-secondary text-xs leading-relaxed">
                Ask me anything about the <strong>Contract Drafting &amp; Freelancing course</strong> — curriculum, faculty, pricing, career support, and more.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Suggested chips */}
      {showSuggestions && (
        <SuggestedQuestions onSelect={onSuggestedSelect} />
      )}

      {/* Conversation messages */}
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          onRetry={message.isError ? onRetry : undefined}
        />
      ))}

      {/* Typing indicator */}
      {isLoading && <TypingIndicator />}

      {/* General error banner (non-message errors) */}
      {error && !messages.some((m) => m.isError) && (
        <p className="text-xs text-red-500 text-center px-4 py-1">{error}</p>
      )}

      {/* Auto-scroll anchor */}
      <div ref={bottomRef} />
    </div>
  );
}
