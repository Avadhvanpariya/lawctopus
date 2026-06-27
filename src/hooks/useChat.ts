"use client";

import { useState, useCallback, useRef } from "react";
import type { Message, ChatState, ChatRequest } from "@/types/chat";

function generateId(): string {
  return Math.random().toString(36).slice(2, 11);
}

export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    // Optimistically add user message
    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    // Capture current messages snapshot synchronously before state updates
    const currentMessages = state.messages;

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    // Cancel previous in-flight request if any
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const body: ChatRequest = {
        message: trimmed,
        history: currentMessages
          .filter((m) => !m.isError)
          .map((m) => ({ role: m.role, content: m.content })),
      };

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      const assistantMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
        error: null,
      }));
    } catch (err: unknown) {
      if ((err as Error)?.name === "AbortError") return;

      const errorMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isError: true,
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
        error: (err as Error)?.message ?? "Something went wrong.",
      }));
    }
  }, [state.messages]);

  const retryLast = useCallback(() => {
    const lastUserMessage = [...state.messages]
      .reverse()
      .find((m) => m.role === "user");
    if (!lastUserMessage) return;

    // Remove the failed assistant response
    setState((prev) => ({
      ...prev,
      messages: prev.messages.filter(
        (m) => !(m.isError) && m.id !== lastUserMessage.id
      ),
      error: null,
    }));

    // Re-send the last user message
    sendMessage(lastUserMessage.content);
  }, [state.messages, sendMessage]);

  const clearMessages = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    setState({ messages: [], isLoading: false, error: null });
  }, []);

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
    retryLast,
    clearMessages,
  };
}
