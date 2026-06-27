export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
  isError?: boolean;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ChatRequest {
  message: string;
  history: Array<{
    role: MessageRole;
    content: string;
  }>;
}

export interface ChatResponse {
  content: string;
  error?: string;
}
