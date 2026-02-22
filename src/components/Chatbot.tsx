import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Bot, User, ChevronDown } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  'What does Joseph do?',
  'What are his skills?',
  'Tell me about his projects',
  'How can I contact him?',
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: text,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    // Cancel any previous request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: '',
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Parse the SSE stream
      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith('data:')) continue;
          const data = trimmed.slice(5).trim();
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            // Handle AI SDK UIMessage stream format
            if (parsed.type === 'text-delta' && parsed.textDelta) {
              setMessages((prev) => {
                const copy = [...prev];
                const last = copy[copy.length - 1];
                if (last && last.role === 'assistant') {
                  copy[copy.length - 1] = {
                    ...last,
                    content: last.content + parsed.textDelta,
                  };
                }
                return copy;
              });
            }
          } catch {
            // skip invalid JSON
          }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput('');
    sendMessage(text);
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-base-300 text-base-content'
            : 'bg-primary text-primary-content'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <ChevronDown className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-8rem)] rounded-2xl shadow-2xl border border-base-300 overflow-hidden flex flex-col bg-base-100 animate-in">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-content">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary-content/20 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight">{"Joseph's Assistant"}</h3>
                <p className="text-xs opacity-80">Ask me anything about Joseph</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-circle btn-sm text-primary-content hover:bg-primary-content/20"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-base-200 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      {"Hi! I'm Joseph's portfolio assistant. I can tell you about his skills, projects, experience, and more. What would you like to know?"}
                    </p>
                  </div>
                </div>

                {/* Suggested questions */}
                <div className="pl-9 flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestionClick(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat messages */}
            {messages.map((message) => {
              if (!message.content && message.role === 'assistant' && !isLoading) return null;

              const isUser = message.role === 'user';

              return (
                <div
                  key={message.id}
                  className={`flex gap-2 ${isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isUser ? 'bg-secondary/10' : 'bg-primary/10'
                    }`}
                  >
                    {isUser ? (
                      <User className="w-4 h-4 text-secondary" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl px-3 py-2 max-w-[85%] ${
                      isUser
                        ? 'bg-primary text-primary-content rounded-tr-sm'
                        : 'bg-base-200 text-base-content rounded-tl-sm'
                    }`}
                  >
                    {message.content ? (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    ) : (
                      <div className="flex gap-1 py-1">
                        <span
                          className="w-2 h-2 bg-base-content/40 rounded-full animate-bounce"
                          style={{ animationDelay: '0ms' }}
                        />
                        <span
                          className="w-2 h-2 bg-base-content/40 rounded-full animate-bounce"
                          style={{ animationDelay: '150ms' }}
                        />
                        <span
                          className="w-2 h-2 bg-base-content/40 rounded-full animate-bounce"
                          style={{ animationDelay: '300ms' }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Typing indicator when loading and last message has content */}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].role === 'user' && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-base-200 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-base-content/40 rounded-full animate-bounce"
                        style={{ animationDelay: '0ms' }}
                      />
                      <span
                        className="w-2 h-2 bg-base-content/40 rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      />
                      <span
                        className="w-2 h-2 bg-base-content/40 rounded-full animate-bounce"
                        style={{ animationDelay: '300ms' }}
                      />
                    </div>
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-base-300 bg-base-100"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="input input-bordered input-sm flex-1 rounded-full text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="btn btn-primary btn-sm btn-circle"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
