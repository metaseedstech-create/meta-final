import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  Layers, 
  HeartHandshake, 
  Sparkles, 
  Check, 
  Send,
  Zap,
  TrendingUp,
  Smile,
  ShieldAlert
} from 'lucide-react';

export default function AIAdvantage() {
  const [activeTab, setActiveTab] = useState('lead-capture');

  // Interactive state for Ad Variations visualizer
  const [selectedVariant, setSelectedVariant] = useState(0);
  const adVariations = [
    { hook: "Tired of marketing agencies hiding behind vanity metrics?", cta: "See Exact Dollar Attribution", ctr: "4.8% CTR (Top 1%)" },
    { hook: "Scale your revenue with predictive machine learning ad bids.", cta: "Claim Your 40-Point Audit", ctr: "4.2% CTR" },
    { hook: "Why 200+ California founders fired their agency for NexusScale AI.", cta: "Read The Case Studies", ctr: "5.1% CTR (Winner)" }
  ];

  // Interactive state for Chatbot preview
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! Looking to increase sales or fix your website conversion rate?' },
    { sender: 'user', text: 'Our Google Ads CPA is getting too expensive.' },
    { sender: 'bot', text: 'Got it. Our AI ad engine re-clusters keyword intent and cuts fatigued ads within 48 hours. Want to schedule a free 15-min audit with our San Francisco team?' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const userMsg = inputVal;
    setInputVal('');
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev, 
        { sender: 'bot', text: 'Thanks for asking! We automatically map high-converting audience cohorts and prevent ad budget waste. Leave your email in the contact form below and we will send a custom teardown!' }
      ]);
    }, 700);
  };

  return (
    <section id="ai-advantage" className="py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyanGlow-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Algorithmic Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            How Artificial Intelligence <span className="text-gradient">Powers Our Work</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We don't use AI as a gimmick. We deploy specialized neural models across every layer of client acquisition to outpace competitors and eliminate manual latency.
          </p>
        </div>

        {/* 4 Feature Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { id: 'lead-capture', label: '24/7 Chatbot Lead Capture', icon: Bot },
            { id: 'seo-audit', label: 'Automated SEO Audits', icon: Search },
            { id: 'ad-variations', label: 'AI Ad Variations', icon: Layers },
            { id: 'sentiment-analysis', label: 'Sentiment & NLP Analysis', icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-xl font-bold text-xs sm:text-sm text-left transition-all border flex items-center space-x-3 ${
                  active
                    ? 'bg-electric-600 text-white border-electric-500 shadow-glow-blue'
                    : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-700'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${active ? 'text-white' : 'text-electric-500'}`} />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Interactive Showcase Container */}
        <div className="bg-white dark:bg-navy-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-navy-800 shadow-xl">
          
          {/* 1. 24/7 Chatbot Lead Capture */}
          {activeTab === 'lead-capture' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-electric-500/10 text-electric-600 dark:text-electric-400 border border-electric-500/20">
                  Feature 01 • Never Miss An Inbound Lead
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  24/7 Autonomous AI Chatbot Lead Capture
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Most website visitors bounce because no one answers their specific questions after 5 PM or on weekends. 
                  Our custom fine-tuned agents ingest your knowledge base, qualify visitor intent, handle complex pricing objections, and book calls directly into your calendar.
                </p>
                <div className="pt-2 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>+38% higher conversion compared to static contact forms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Integrates directly with HubSpot, Calendly, and Salesforce</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Seamless human handover trigger for high-priority VIP inquiries</span>
                  </div>
                </div>
              </div>

              {/* Interactive Chat Simulator */}
              <div className="lg:col-span-6">
                <div className="bg-slate-50 dark:bg-navy-950 rounded-2xl border border-slate-200 dark:border-navy-800 overflow-hidden shadow-lg">
                  <div className="bg-electric-600 px-4 py-3 flex items-center justify-between text-white text-xs font-bold">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>NexusLead AI Agent • Live Demo</span>
                    </div>
                    <span className="text-[10px] opacity-80">Response: &lt; 0.4s</span>
                  </div>
                  <div className="p-4 space-y-3 h-64 overflow-y-auto">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-xs ${
                            msg.sender === 'user'
                              ? 'bg-electric-600 text-white rounded-tr-none'
                              : 'bg-white dark:bg-navy-850 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-700 rounded-tl-none'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendMessage} className="p-2.5 border-t border-slate-200 dark:border-navy-800 flex items-center space-x-2 bg-white dark:bg-navy-900">
                    <input
                      type="text"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      placeholder="Type a message (e.g., 'What is your pricing?')..."
                      className="flex-1 bg-slate-100 dark:bg-navy-950 text-xs px-3 py-2 rounded-xl text-slate-900 dark:text-white border-0 focus:ring-1 focus:ring-electric-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-electric-600 hover:bg-electric-500 text-white rounded-xl"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* 2. Automated SEO Audits */}
          {activeTab === 'seo-audit' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyanGlow-500/10 text-cyanGlow-600 dark:text-cyanGlow-400 border border-cyanGlow-500/20">
                  Feature 02 • Algorithmic Rank Protection
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Automated Continuous SEO & Core Web Audits
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Search engine algorithms change hundreds of times a year. Our automated crawlers simulate Googlebot daily, detecting keyword cannibalization, dropped schemas, slow scripts, and crawl depth issues before they impact your rankings.
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Real-time SERP alert when a competitor attempts a content steal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Automated JSON-LD structured data injection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Continuous Core Web Vitals maintenance under Google's 2.5s LCP benchmark</span>
                  </div>
                </div>
              </div>

              {/* Interactive Audit Telemetry Card */}
              <div className="lg:col-span-6">
                <div className="bg-slate-50 dark:bg-navy-950 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-navy-800">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Live Telemetry Audit
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-500">
                      Audit Passed: 100/100
                    </span>
                  </div>

                  {/* Visual gauges */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                      <div className="text-2xl font-black text-emerald-500">99</div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">SEO Health</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                      <div className="text-2xl font-black text-electric-500">0.7s</div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">LCP Speed</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800">
                      <div className="text-2xl font-black text-cyanGlow-500">100%</div>
                      <div className="text-[11px] font-semibold text-slate-500 mt-1">Schema Valid</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                      <span>Core Web Vitals Index</span>
                      <span className="font-bold text-emerald-500">Optimal (Top 1% Tier)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-navy-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-electric-500 to-emerald-400 w-[96%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. AI Ad Variations */}
          {activeTab === 'ad-variations' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Feature 03 • Creative Testing Machine
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  AI-Generated Ad Creative & Copy Variations
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ad fatigue is the #1 reason why paid ad campaigns experience skyrocketing acquisition costs. We generate and test 100+ visual angles, hooks, and call-to-actions each week, shutting down loser variations automatically and funnelling budget into the winners.
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Dynamic algorithmic testing across Meta, Google, and LinkedIn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Automated budget auto-kill rule for ads with &lt; 2.5x ROAS</span>
                  </div>
                </div>
              </div>

              {/* Interactive Ad Switcher */}
              <div className="lg:col-span-6">
                <div className="bg-slate-50 dark:bg-navy-950 rounded-2xl p-5 border border-slate-200 dark:border-navy-800 space-y-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Select Ad Variant to Inspect AI Performance:
                  </span>
                  <div className="space-y-2">
                    {adVariations.map((variant, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedVariant(i)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                          selectedVariant === i
                            ? 'bg-electric-500/10 border-electric-500 text-slate-900 dark:text-white shadow-sm'
                            : 'bg-white dark:bg-navy-900 border-slate-200 dark:border-navy-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <div className="pr-2">
                          <span className="text-xs font-bold block text-electric-600 dark:text-electric-400">Variant #{i + 1}</span>
                          <span className="text-xs font-medium mt-0.5 block">"{variant.hook}"</span>
                        </div>
                        <span className="text-[11px] font-mono font-bold px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                          {variant.ctr}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Sentiment Analysis */}
          {activeTab === 'sentiment-analysis' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Feature 04 • Customer Listening
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Real-Time Customer Sentiment & Review NLP
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our natural language processing algorithms ingest reviews, social mentions, and support interactions in real time. We discover exact customer pain points and emotional desires, feeding them into your ad copy and landing page headlines for unbeatable resonance.
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Real-time alerts on negative review sentiment before it spreads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Emotional intent clustering for high-converting sales copywriting</span>
                  </div>
                </div>
              </div>

              {/* Sentiment NLP Visualizer */}
              <div className="lg:col-span-6">
                <div className="bg-slate-50 dark:bg-navy-950 rounded-2xl p-6 border border-slate-200 dark:border-navy-800 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-navy-800">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Sentiment Analysis Engine
                    </span>
                    <span className="text-xs font-bold text-emerald-500 flex items-center space-x-1">
                      <Smile className="w-3.5 h-3.5" />
                      <span>96.4% Positive Brand Affinity</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        <span>Trust & Transparency Affinity</span>
                        <span className="font-bold text-slate-900 dark:text-white">98%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-navy-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[98%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        <span>Speed & Delivery Satisfaction</span>
                        <span className="font-bold text-slate-900 dark:text-white">94%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-navy-800 rounded-full overflow-hidden">
                        <div className="h-full bg-electric-500 w-[94%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                        <span>Customer Service Intent</span>
                        <span className="font-bold text-slate-900 dark:text-white">96%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-navy-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyanGlow-500 w-[96%]"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
