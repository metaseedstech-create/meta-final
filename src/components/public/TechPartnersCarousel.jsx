import React from 'react';
import { Sparkles, Server, Code2, Globe, Shield, Zap } from '../Icons';

export const TechPartnersCarousel = () => {
  const partners = [
    {
      name: "Meta Seeds",
      role: "Official Digital Agency",
      icon: "🌱",
      badge: "Core Engine",
      color: "from-blue-600 to-sky-500",
      textColor: "text-blue-700",
      bgBadge: "bg-blue-100 text-blue-800"
    },
    {
      name: "Hostinger",
      role: "Cloud Web Hosting",
      icon: "⚡",
      badge: "Hosting Partner",
      color: "from-indigo-600 to-purple-600",
      textColor: "text-indigo-700",
      bgBadge: "bg-indigo-100 text-indigo-800"
    },
    {
      name: "GitHub",
      role: "CI/CD & Code Deployment",
      icon: "🐙",
      badge: "DevOps & Cloud",
      color: "from-slate-800 to-slate-950",
      textColor: "text-slate-800",
      bgBadge: "bg-slate-100 text-slate-800"
    },
    {
      name: "MilesWeb",
      role: "Managed Indian Servers",
      icon: "🚀",
      badge: "Fast Hosting",
      color: "from-sky-600 to-blue-600",
      textColor: "text-sky-700",
      bgBadge: "bg-sky-100 text-sky-800"
    },
    {
      name: "Cloudflare",
      role: "Global Edge CDN & SSL",
      icon: "🛡️",
      badge: "Enterprise Security",
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-700",
      bgBadge: "bg-amber-100 text-amber-800"
    },
    {
      name: "AWS Cloud",
      role: "Amazon Web Services",
      icon: "☁️",
      badge: "99.99% Uptime",
      color: "from-orange-500 to-amber-600",
      textColor: "text-orange-700",
      bgBadge: "bg-orange-100 text-orange-800"
    },
    {
      name: "Meta Ads",
      role: "Instagram & Facebook Growth",
      icon: "📱",
      badge: "Meta Certified",
      color: "from-blue-600 to-indigo-600",
      textColor: "text-blue-700",
      bgBadge: "bg-blue-100 text-blue-800"
    },
    {
      name: "Google Cloud",
      role: "SEO & Google Ads Network",
      icon: "🔍",
      badge: "Google Certified",
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-700",
      bgBadge: "bg-emerald-100 text-emerald-800"
    }
  ];

  // Duplicate list to achieve continuous seamless loop
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-16 bg-gradient-to-b from-[#e8f2fe] via-[#f0f7ff] to-[#e4effd] border-t border-blue-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cloud & Hosting Ecosystem</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900">
          Powered by Global Cloud, Hosting & Development Partners
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
          Every website and marketing project by Meta Seeds is hosted on high-availability cloud infrastructure with enterprise security and instant CDN delivery.
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#e8f2fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#e4effd] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max items-center gap-6 animate-marquee hover:[animation-play-state:paused] py-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/90 border border-blue-100 shadow-md shadow-blue-500/5 hover:border-blue-300 hover:shadow-xl transition-all duration-300 shrink-0 group hover:-translate-y-1"
            >
              {/* Icon / Logo Emoji */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-50 to-sky-100 border border-blue-200 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform shrink-0">
                {item.icon}
              </div>

              {/* Partner Info */}
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.bgBadge}`}>
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
