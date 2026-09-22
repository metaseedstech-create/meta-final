import React, { useState, useEffect } from 'react';
import { agencyConfig } from '../data/agencyConfig';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Zap, 
  Activity,
  Play,
  BarChart3,
  Bot
} from 'lucide-react';

export default function Hero({ onOpenAuditModal }) {
  const [liveMetricIndex, setLiveMetricIndex] = useState(0);

  const tickerEvents = [
    { title: "Meta Dynamic Ad Optimization", desc: "Automated copy iteration #42 increased CTR by +38% on cold audience", time: "Just now" },
    { title: "Search Intent Clustered", desc: "Added 12 commercial keywords; displaced competitor from #1 position", time: "2 min ago" },
    { title: "Autonomous Budget Shift", desc: "Reallocated $1,400 from fatigued campaign into 5.2x ROAS ad set", time: "4 min ago" },
    { title: "AI Chatbot Qualified Lead", desc: "Captured enterprise demo inquiry via 24/7 autonomous booking agent", time: "6 min ago" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveMetricIndex((prev) => (prev + 1) % tickerEvents.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [tickerEvents.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-electric-600/15 via-cyanGlow-500/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-electric-500/30 bg-electric-500/10 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-electric-500 dark:text-electric-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              San Francisco's #1 Client-First AI Marketing Agency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-6">
            Scale Your Revenue with{' '}
            <span className="text-gradient">Precision AI-Driven</span>{' '}
            Marketing
          </h1>

          {/* Subheading emphasizing transparency & client satisfaction */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            We fuse predictive artificial intelligence with radical financial transparency. 
            No vague vanity metrics, no black-box contracts — just verifiable customer acquisition, 
            rapid algorithmic testing, and real-time attribution dashboards.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenAuditModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white shadow-glow-blue bg-gradient-to-r from-electric-600 via-electric-500 to-cyanGlow-500 hover:from-electric-500 hover:to-cyanGlow-400 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-3 group"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
              <span>Get Free 40-Point Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-800 dark:text-white bg-white/80 dark:bg-navy-900/80 hover:bg-slate-100 dark:hover:bg-navy-800 border border-slate-300 dark:border-navy-700 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>See Our Work & Metrics</span>
              <ArrowRight className="w-4 h-4 text-electric-500" />
            </a>
          </div>

          {/* Trust Badges - Required: "200+ Clients | 4.9/5 Rating | 98% Retention" */}
          <div className="pt-6 border-t border-slate-200 dark:border-navy-800/80 max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold mb-4">
              VERIFIED CLIENT OUTCOMES • ZERO SMOKE AND MIRRORS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
              <div className="bg-white/60 dark:bg-navy-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-navy-800 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center">
                  200+
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Active Scale Clients
                </div>
              </div>

              <div className="bg-white/60 dark:bg-navy-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-navy-800 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center space-x-1">
                  <span>4.9/5</span>
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 inline" />
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Client Satisfaction
                </div>
              </div>

              <div className="bg-white/60 dark:bg-navy-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-navy-800 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center">
                  98%
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Retention Rate
                </div>
              </div>

              <div className="bg-white/60 dark:bg-navy-900/40 p-4 rounded-xl border border-slate-200/80 dark:border-navy-800 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-electric-600 dark:text-electric-400 flex items-center">
                  $45M+
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                  Tracked Revenue
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Hero Dashboard Visual */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-200 via-electric-500/20 to-cyanGlow-500/10 dark:from-navy-700 dark:via-electric-600/30 dark:to-navy-900 shadow-2xl shadow-electric-600/10">
            <div className="bg-white dark:bg-navy-900/90 rounded-[14px] p-4 sm:p-6 backdrop-blur-xl border border-white/20 dark:border-navy-800">
              
              {/* Header bar of the dashboard simulator */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-navy-800">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono flex items-center space-x-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>NEXUS-AI ENGINE v4.8 • LIVE ATTRIBUTION FEED</span>
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>99.99% Telemetry Uptime</span>
                  </span>
                </div>
              </div>

              {/* Real-time stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
                <div className="bg-slate-50 dark:bg-navy-950/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-navy-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Average ROAS</span>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 flex items-baseline space-x-1.5">
                    <span>4.62x</span>
                    <span className="text-xs font-bold text-emerald-500">+140%</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-navy-950/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-navy-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Weekly AI Ad Iterations</span>
                  <div className="text-xl sm:text-2xl font-black text-electric-600 dark:text-electric-400 mt-1 flex items-baseline space-x-1.5">
                    <span>128</span>
                    <span className="text-xs font-bold text-slate-400">variants</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-navy-950/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-navy-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Lead Conversion Velocity</span>
                  <div className="text-xl sm:text-2xl font-black text-cyanGlow-600 dark:text-cyanGlow-400 mt-1 flex items-baseline space-x-1.5">
                    <span>3.8x</span>
                    <span className="text-xs font-bold text-emerald-500">Faster</span>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-navy-950/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-navy-800">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Automated Spend Guard</span>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1 flex items-baseline space-x-1.5">
                    <span>$0.00</span>
                    <span className="text-xs font-bold text-emerald-500">Waste</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Live Event Banner */}
              <div className="bg-slate-100/80 dark:bg-navy-950/80 rounded-xl p-3.5 border border-slate-200 dark:border-navy-800 flex items-center justify-between transition-all">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-electric-500/10 text-electric-500 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="truncate text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                      <span>{tickerEvents[liveMetricIndex].title}</span>
                      <span className="text-[10px] text-electric-500 font-mono">({tickerEvents[liveMetricIndex].time})</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
                      {tickerEvents[liveMetricIndex].desc}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 shrink-0 pl-2">
                  Auto-Resolved ✓
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
