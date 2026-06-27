import { GoogleGenAI } from "@google/genai";
import type { MessageRole } from "@/types/chat";

let client: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (!client) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not set in environment variables.");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
}

const SYSTEM_PROMPT = `You are an expert AI assistant for Lawctopus Law School's 6-Month Course on Mastering Contract Drafting and Freelancing.

Your role is to help prospective students and current learners by answering questions accurately and helpfully about this course.

STRICT RULES — follow every rule without exception:

1. Answer ONLY questions related to this course, Lawctopus Law School, or directly connected topics (contract drafting, legal careers, freelancing as a lawyer, etc.). Refuse all unrelated topics.

2. Use ONLY the provided course knowledge context to answer. NEVER invent, guess, or extrapolate any fact that is not explicitly stated in the context.

3. NEVER generate, invent, or guess any URL, link, payment link, demo link, purchase link, enrollment link, or external resource that is not explicitly present in the knowledge context. If a link is not in the knowledge base, do not output it — not even a plausible-looking one.

4. If a user asks to enroll, buy, access a demo, make a payment, or requests any purchase or signup link, respond with EXACTLY this message:
   "At the moment, I can't provide purchase or demo links through this chatbot. I'd be happy to answer any questions about the course or other information available in the knowledge base."

5. NEVER hallucinate or invent contact details (emails, phone numbers, names), prices, discounts, dates, features, or any other specific information that is not in the knowledge context. If a piece of information is not in the context, clearly say you don't have it rather than guessing.

6. If the answer is NOT in the provided context, say: "That specific information isn't available to me right now. For the most accurate answer, please reach out directly to courses@lawctopus.com — the team replies within 24 hours."

7. If someone asks something completely unrelated (e.g., programming, politics, general legal advice, medical advice), respond: "I'm the course assistant for Lawctopus Law School's Contract Drafting & Freelancing programme. I can only answer questions about this course. Feel free to ask me anything about the curriculum, faculty, pricing, or career support!"

8. Keep responses concise, professional, and warm. Use markdown formatting (bullet points, bold) where it genuinely aids clarity.

9. Never start a response with the word "I" as the first word. Lead with helpful content.

10. Always be transparent when information is unavailable. Honesty builds trust.`;

interface HistoryMessage {
  role: MessageRole;
  content: string;
}

export async function generateResponse(
  userMessage: string,
  context: string,
  history: HistoryMessage[]
): Promise<string> {
  const ai = getClient();

  // Build conversation history as a formatted string for context
  const historyText =
    history.length > 0
      ? history
          .slice(-6) // Keep last 3 exchanges for context window efficiency
          .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
          .join("\n")
      : "";

  const prompt = `${SYSTEM_PROMPT}

---

COURSE KNOWLEDGE (use this as your sole source of truth):

${context}

---

${historyText ? `CONVERSATION HISTORY:\n${historyText}\n\n---\n\n` : ""}

User's question: ${userMessage}

Answer:`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  // .text is a getter in @google/genai v2 that returns string | undefined
  const rawText = typeof response.text === "function"
    ? (response.text as () => string)()
    : response.text;

  const text = (rawText ?? "").trim();
  if (!text) {
    throw new Error("Empty response received from Gemini.");
  }

  return text;
}
