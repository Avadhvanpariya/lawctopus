"use client";

import React, { useState, useRef, useCallback } from "react";
import { SendHorizonal, Loader2 } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = useCallback(() => {
    const text = value.trim();
    if (!text || isLoading) return;
    onSend(text);
    setValue("");
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }, [value, isLoading, onSend]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      // Auto-grow textarea
      e.target.style.height = "auto";
      e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
    },
    []
  );

  return (
    <div className="border-t border-border-custom bg-white px-4 py-3">
      <div className="flex items-end gap-2 bg-bg-muted border border-border-custom rounded-xl px-3 py-2 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all duration-200">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask about the course..."
          disabled={isLoading}
          rows={1}
          aria-label="Type your message"
          aria-multiline="true"
          className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-secondary/60 resize-none outline-none min-h-[24px] max-h-[120px] leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSend}
          disabled={!value.trim() || isLoading}
          aria-label="Send message"
          className="mb-0.5 p-1.5 rounded-lg bg-primary text-[#1B1B1B] hover:bg-[#E08F10] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 shrink-0 active:scale-95"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <SendHorizonal className="w-4 h-4" />
          )}
        </button>
      </div>
      <p className="text-[10px] text-text-secondary/50 text-center mt-2 select-none">
        Enter to send · Shift + Enter for new line
      </p>
    </div>
  );
}
