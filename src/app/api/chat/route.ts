import { NextRequest, NextResponse } from "next/server";
import { retrieveRelevantSections } from "@/lib/knowledge";
import { generateResponse } from "@/lib/ai";
import type { ChatRequest } from "@/types/chat";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatRequest;

    const { message, history } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message is required and must be a non-empty string." },
        { status: 400 }
      );
    }

    if (message.trim().length > 2000) {
      return NextResponse.json(
        { error: "Message is too long. Please keep it under 2000 characters." },
        { status: 400 }
      );
    }

    // Retrieve only the relevant sections — not the entire knowledge base
    const context = retrieveRelevantSections(message.trim());

    // Call Gemini server-side — API key never exposed to client
    const content = await generateResponse(
      message.trim(),
      context,
      Array.isArray(history) ? history : []
    );

    return NextResponse.json({ content });
  } catch (err: unknown) {
    console.error("[chat/route] Error:", err);

    const isRateLimit =
      err instanceof Error && err.message?.includes("429");

    if (isRateLimit) {
      return NextResponse.json(
        { error: "The assistant is busy right now. Please try again in a moment." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
