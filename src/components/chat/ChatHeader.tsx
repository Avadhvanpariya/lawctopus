"use client";

import React from "react";
import { X, Trash2 } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onClear: () => void;
  messageCount: number;
}

export default function ChatHeader({ onClose, onClear, messageCount }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3.5 border-b border-border-custom bg-white shrink-0 rounded-t-2xl">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-[#1B1B1B] flex items-center justify-center shadow-sm">
          <span className="text-xs font-black text-white tracking-tight">LLS</span>
        </div>
        <div>
          <h2 className="text-sm font-bold text-text-primary leading-tight">Course Assistant</h2>
          <p className="text-[10px] text-text-secondary leading-none mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            <span>Online · Lawctopus Law School</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {messageCount > 0 && (
          <button
            onClick={onClear}
            aria-label="Clear conversation"
            title="Clear conversation"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-muted rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-muted rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
