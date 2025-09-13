import React, { useState } from "react";
import { FaRobot, FaQuestionCircle, FaRocket, FaCog } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };
  // Quick actions
  const quickActions = [
    { icon: <FaQuestionCircle />, label: "I have a question", value: "I have a question" },
    { icon: <FaRocket />, label: "Get started", value: "Get started" },
    { icon: <FaCog />, label: "Account settings", value: "Account settings" },
  ];
  const handleQuickAction = (value) => {
    setMessages([...messages, { sender: "user", text: value }]);
  };
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-4 py-10 gap-10">
        {/* Left: Bot illustration and greeting */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 rounded-full p-4">
              <FaRobot className="text-6xl text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">Hello, how can I help you?</h1>
              <p className="text-gray-600 text-lg">Ask me anything or select an option below.</p>
            </div>
          </div>
          <div className="w-full mt-8">
            <div className="flex flex-col gap-3">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-lg text-gray-800 font-medium hover:bg-blue-50 transition"
                  onClick={() => handleQuickAction(action.value)}
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Right: Chat input and messages */}
        <div className="flex-1 flex flex-col justify-center items-center max-w-lg w-full">
          <div className="w-full mb-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 min-h-[120px] max-h-64 overflow-y-auto">
              {messages.length === 0 ? (
                <div className="text-gray-400 text-center">No messages yet.</div>
              ) : (
                messages.map((msg, idx) => (
                  <div key={idx} className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <span className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                      {msg.text}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="w-full flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
import React, { useState } from "react";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";
import MainLayout from "../layouts/MainLayout";

const initialMessages = [
  {
    sender: "bot",
    text: "Hi! I can help you create a habit bot or suggest routines. What would you like to do?",
  },
];

export default function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    // Simple bot logic for demo
    let botReply = "";
    if (input.toLowerCase().includes("habit")) {
      botReply = "Great! What habit would you like to track?";
    } else if (input.toLowerCase().includes("routine")) {
      botReply = "Awesome! Describe your routine and I'll help you build it.";
    } else if (input.toLowerCase().includes("suggest")) {
      botReply =
        "Here are some suggestions: Drink water, Morning walk, Read 10 pages.";
    } else {
      botReply =
        "I'm here to help with habits and routines. Try asking for suggestions!";
    }
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { sender: "bot", text: botReply }]);
    }, 600);
    setInput("");
  };

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Habit & Routine Chatbot
        </h2>
        <div className="h-64 overflow-y-auto border rounded p-4 mb-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <span
                className={`px-3 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </MainLayout>
  );
}
