"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@/hooks/useChat";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const { messages, isLoading, error, sendMessage, retryLast, clearMessages } =
    useChat();

  const panelRef = useRef<HTMLDivElement>(null);

  // Trap focus inside panel when open
  useEffect(() => {
    if (!isOpen) return;
    const el = panelRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll<HTMLElement>(
      "button, textarea, [href], [tabindex]:not([tabindex='-1'])"
    );
    focusable[0]?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          key="chat-window"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Course Assistant"
          className={[
            "fixed z-50 flex flex-col",
            "bottom-[160px] lg:bottom-24 right-4 sm:right-6",
            "w-[calc(100vw-2rem)] sm:w-[380px]",
            "h-[520px] sm:h-[560px]",
            "bg-bg-base rounded-2xl shadow-2xl border border-border-custom overflow-hidden",
          ].join(" ")}
        >
          <ChatHeader
            onClose={onClose}
            onClear={clearMessages}
            messageCount={messages.length}
          />

          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            error={error}
            onRetry={retryLast}
            onSuggestedSelect={sendMessage}
          />

          <ChatInput onSend={sendMessage} isLoading={isLoading} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
