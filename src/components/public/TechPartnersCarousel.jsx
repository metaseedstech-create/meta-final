import React from 'react';

export const TechPartnersCarousel = () => {
  const logos = [
    {
      name: "LOGAN SEO",
      subtitle: "Growth First",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-emerald-500" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "Brit Run",
      subtitle: "Solution Business",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-red-500" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: "SOLE GRAN",
      subtitle: "Solution Business",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-sky-500" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
        </svg>
      )
    },
    {
      name: "RIGHT WAY",
      subtitle: "Business Resources",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-indigo-600" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      name: "AWS Cloud",
      subtitle: "Infrastructure",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-amber-500" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      )
    },
    {
      name: "Cloudflare",
      subtitle: "Security & CDN",
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-orange-500" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      )
    }
  ];

  // Tripled array for continuous seamless infinite scrolling marquee
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <section className="py-10 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Infinite Auto Carousel Strip */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 overflow-hidden relative group">
          {/* Edge Blur Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

          {/* Infinite Marquee Track */}
          <div
            className="flex items-center gap-8 animate-marquee group-hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {marqueeItems.map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100/80 hover:bg-blue-50/80 hover:border-blue-200 transition-all cursor-pointer group/item shrink-0 shadow-xs"
              >
                <div className="group-hover/item:scale-110 transition-transform duration-300">
                  {logo.icon}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 group-hover/item:text-blue-700 transition-colors">
                    {logo.name}
                  </h4>
                  <p className="text-[10px] font-semibold text-slate-400">
                    {logo.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

