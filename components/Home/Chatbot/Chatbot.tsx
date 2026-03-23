"use client";

import { useState } from "react";

// ✅ Define message type
type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  // ✅ Replace any[] with Message[]
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ important
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage: Message = {
        role: "bot",
        content: data.reply || "No response",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage: Message = {
        role: "bot",
        content: "Something went wrong ❌",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-zinc-900 text-white rounded-xl shadow-lg p-4">
      <h2 className="text-lg font-bold mb-2">Chat with me 🤖</h2>

      <div className="h-60 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded ${
              msg.role === "user"
                ? "bg-purple-600 text-right"
                : "bg-gray-700"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          className="flex-1 p-2 rounded bg-black border border-gray-600"
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-3 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}