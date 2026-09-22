import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall
} from 'lucide-react';
import { agencyConfig } from '../data/agencyConfig';

export default function AIChatWidget({ onOpenAuditModal, onSelectService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! I'm NexusBot, the AI concierge for ${agencyConfig.name} in San Francisco. How can I accelerate your business growth today?`,
      time: 'Just now'
    }
  ]);

  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "What makes your AI different?",
    "How much does a website cost?",
    "What is your client retention rate?",
    "Book a free 40-point audit"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [isOpen, messages]);

  const botResponses = {
    "different": "Unlike agencies running manual ads once a week, our AI engine tests 100+ creative and copy variations weekly, models server-side attribution, and eliminates ad spend waste in real time. Plus, you get 100% data ownership.",
    "website": "Our custom website builds start at $1,299 for high-converting landing pages, $2,799 for full corporate business websites, and $4,899 for enterprise e-commerce platforms. All delivered with sub-second speeds and SEO architecture.",
    "retention": `Our annual client retention rate is ${agencyConfig.trustMetrics.retention} (compared to the 65% industry average) with an average verified rating of ${agencyConfig.trustMetrics.rating}. We work on flexible month-to-month terms because results keep clients with us.`,
    "audit": "Awesome! You can click the 'Get Free Audit' button to open our 40-point forensic audit request, or leave your email right here and our San Francisco team will prepare your custom teardown."
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Determine AI response
    setTimeout(() => {
      let reply = "Thanks for your inquiry! Our senior growth team in San Francisco analyzes all requests personally. Would you like to schedule a free 40-point audit or explore a specific service?";
      const lower = query.toLowerCase();

      if (lower.includes('different') || lower.includes('why')) {
        reply = botResponses.different;
      } else if (lower.includes('cost') || lower.includes('price') || lower.includes('website')) {
        reply = botResponses.website;
      } else if (lower.includes('retention') || lower.includes('rating') || lower.includes('satisfaction')) {
        reply = botResponses.retention;
      } else if (lower.includes('audit') || lower.includes('book') || lower.includes('free')) {
        reply = botResponses.audit;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Expanded Chat Drawer */}
      {isOpen ? (
        <div className="w-[92vw] sm:w-[380px] h-[520px] bg-white dark:bg-navy-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-navy-700 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-electric-600 to-cyanGlow-500 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-navy-950 flex items-center justify-center border border-white/20">
                  <Bot className="w-5 h-5 text-electric-400" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white"></span>
              </div>
              <div>
                <div className="text-sm font-bold flex items-center space-x-1">
                  <span>NexusBot AI</span>
                  <Sparkles className="w-3 h-3 text-amber-300" />
                </div>
                <span className="text-[11px] opacity-90 block">
                  San Francisco Growth Concierge • Online
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics Bar inside Widget */}
          <div className="bg-slate-50 dark:bg-navy-950 px-4 py-2 border-b border-slate-200 dark:border-navy-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>Client Retention: <strong className="text-emerald-500">98%</strong></span>
            <span>Avg Reply: <strong className="text-electric-500">&lt; 1 sec</strong></span>
          </div>

          {/* Chat Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-navy-950/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-electric-600 text-white rounded-br-none shadow-sm'
                      : 'bg-white dark:bg-navy-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-750 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p>{m.text}</p>
                  <span className={`block text-[9px] mt-1.5 ${m.sender === 'user' ? 'text-blue-100 text-right' : 'text-slate-400'}`}>
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestion Pills */}
          <div className="px-3 py-2 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-800 overflow-x-auto whitespace-nowrap space-x-1.5 scrollbar-none flex">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:bg-electric-500 hover:text-white dark:hover:bg-electric-600 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about our AI marketing..."
              className="flex-1 bg-slate-100 dark:bg-navy-950 text-xs px-3.5 py-2.5 rounded-xl text-slate-900 dark:text-white border-0 focus:ring-1 focus:ring-electric-500 outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 bg-electric-600 hover:bg-electric-500 disabled:opacity-40 text-white rounded-xl shadow-glow-blue transition-all"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      ) : (
        /* Floating Button Trigger */
        <button
          onClick={() => setIsOpen(true)}
          className="relative group p-4 rounded-2xl bg-gradient-to-tr from-electric-600 to-cyanGlow-500 text-white shadow-2xl shadow-electric-600/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-3"
          aria-label="Open AI chat widget"
        >
          {/* Pulsing indicator */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>

          <Bot className="w-6 h-6 animate-pulse" />
          <span className="hidden sm:inline-block font-bold text-xs pr-1">
            Chat with AI Concierge
          </span>
        </button>
      )}

    </div>
  );
}
