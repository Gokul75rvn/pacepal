import React, { useState } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const exampleQuestions = [
  "How do I add a new habit?",
  "Suggest a morning routine.",
  "How can I improve my habit streak?",
  "What are the benefits of tracking habits?",
  "How do I set reminders?",
  "Troubleshoot: My habit isn't saving."
];

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am your Habit Tracker Bot. Ask me anything about habits, routines, or app features.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: getBotResponse(input) }]);
    }, 600);
    setInput('');
  };

  const getBotResponse = (question) => {
    // Simple keyword-based responses for demo
    if (question.toLowerCase().includes('add') && question.toLowerCase().includes('habit')) {
      return 'To add a new habit, go to the Habits page and click "Add Habit".';
    }
    if (question.toLowerCase().includes('routine')) {
      return 'You can build routines in the Routine Builder. Try adding habits and setting time blocks.';
    }
    if (question.toLowerCase().includes('streak')) {
      return 'Keep marking your habits as complete every day to maintain your streak!';
    }
    if (question.toLowerCase().includes('reminder')) {
      return 'Set reminders in the Habits or Settings page to get notified.';
    }
    if (question.toLowerCase().includes('troubleshoot') || question.toLowerCase().includes('issue')) {
      return 'Try refreshing the page or checking your internet connection. If the problem persists, contact support.';
    }
    return 'I am here to help! Please ask about habits, routines, analytics, notifications, or app settings.';
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 flex flex-col" style={{ minHeight: '320px', maxHeight: '400px', overflowY: 'auto' }}>
        <div className="flex items-center mb-2">
          <FaRobot className="text-primary text-2xl mr-2" />
          <span className="font-bold text-lg text-dark">HabitTraky Bot</span>
        </div>
        <div className="flex-1 mb-2 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-100 text-dark'}`}>{msg.text}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type your question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-dark transition"
            onClick={handleSend}
          >
            <FaPaperPlane />
            Send
          </button>
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Try: {exampleQuestions.map((q, i) => (
            <span key={i} className="mr-2 cursor-pointer underline" onClick={() => setInput(q)}>{q}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
