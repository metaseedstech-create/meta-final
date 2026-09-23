import React from 'react';
import { useContent } from '../../context/ContentContext';
import { ArrowRight, Star } from '../Icons';

export const Hero = () => {
  const { content } = useContent();
  const { hero } = content;

  return (
    <div className="relative bg-[#f0f7ff] pt-24 sm:pt-32 pb-12 overflow-hidden">
      
      {/* MAIN CONSTELLATION ORGANIC CANVAS CONTAINER WITH ANIMATED BACKGROUND EFFECTS */}
      <section className="relative mx-4 sm:mx-6 lg:mx-8 rounded-[2.5rem] sm:rounded-[4rem] md:rounded-[5rem] bg-gradient-to-br from-[#051246] via-[#0b2174] to-[#12339d] text-white overflow-hidden shadow-2xl border border-blue-400/20 py-20 sm:py-28 md:py-36">
        
        {/* 1. DYNAMIC AMBIENT LIGHT GLOW ORBS (ANIMATED BACKGROUND EFFECTS) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-blue-500/20 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-red-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />

        {/* Shimmer Light Reflection Sweep Pass */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" style={{ animationDuration: '7s' }} />

        {/* 2. FLOATING VIBRANT COLOR BLOBS (WITH ANIMATED PULSING GLOW RIMS) */}
        {/* Top-Left Floating Cyan Blob with Red Glow Rim */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 rounded-[35%_65%_65%_35%/35%_35%_65%_65%] bg-gradient-to-br from-cyan-300 to-sky-400 shadow-[0_0_40px_rgba(239,68,68,0.9)] z-20 pointer-events-none animate-float opacity-90" />
        
        {/* Bottom-Left Floating Royal Blue Blob with Red Glow Rim */}
        <div className="absolute -bottom-6 left-8 sm:left-14 w-28 h-28 sm:w-40 sm:h-40 rounded-[60%_40%_35%_65%/55%_40%_60%_45%] bg-gradient-to-tr from-blue-700 to-indigo-900 shadow-[0_0_50px_rgba(239,68,68,0.95)] z-20 pointer-events-none animate-float delay-1000 opacity-95" />

        {/* 3. INTRICATE ANIMATED CONSTELLATION NETWORK MESH SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          {/* Constellation Connecting Line Web */}
          <path d="M 40 80 L 160 170 L 300 110 L 450 210 L 580 130 L 720 250 L 880 170 L 1040 280 L 1200 150" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.65" />
          <path d="M 90 280 L 220 400 L 380 300 L 520 460 L 690 340 L 850 470 L 1010 360 L 1180 500" stroke="#ffffff" strokeWidth="0.9" strokeDasharray="5 4" fill="none" opacity="0.55" />
          <path d="M 40 80 L 90 280 M 160 170 L 220 400 M 300 110 L 380 300 M 450 210 L 520 460 M 580 130 L 690 340 M 720 250 L 850 470 M 880 170 L 1010 360 M 1040 280 L 1180 500" stroke="#ffffff" strokeWidth="0.7" fill="none" opacity="0.5" />

          {/* Intersecting Mesh Lines */}
          <path d="M 160 170 L 380 300 M 300 110 L 450 210 M 450 210 L 690 340 M 580 130 L 850 470 M 720 250 L 1010 360" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.4" />

          {/* Polygon Web Facets */}
          <polygon points="160,170 300,110 220,400" fill="rgba(255,255,255,0.04)" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />
          <polygon points="450,210 580,130 520,460" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />
          <polygon points="720,250 880,170 690,340" fill="rgba(255,255,255,0.04)" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />
          <polygon points="880,170 1040,280 850,470" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth="0.6" opacity="0.5" />

          {/* Glowing Animated Node Dots (Pulsing at Staggered Rhythms) */}
          <circle cx="160" cy="170" r="4" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2s' }} />
          <circle cx="300" cy="110" r="3.5" fill="#38bdf8" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.4s' }} />
          <circle cx="450" cy="210" r="4.5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2.4s', animationDelay: '0.9s' }} />
          <circle cx="580" cy="130" r="3.5" fill="#60a5fa" className="animate-pulse" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }} />
          <circle cx="720" cy="250" r="5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2.6s', animationDelay: '1.2s' }} />
          <circle cx="880" cy="170" r="4" fill="#38bdf8" className="animate-pulse" style={{ animationDuration: '3.4s', animationDelay: '0.7s' }} />
          <circle cx="1040" cy="280" r="4.5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2.3s', animationDelay: '1.5s' }} />
          <circle cx="220" cy="400" r="3.5" fill="#60a5fa" className="animate-pulse" style={{ animationDuration: '3.6s', animationDelay: '0.6s' }} />
          <circle cx="520" cy="460" r="4.5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1.1s' }} />
          <circle cx="690" cy="340" r="4" fill="#38bdf8" className="animate-pulse" style={{ animationDuration: '3.1s', animationDelay: '0.5s' }} />
          <circle cx="850" cy="470" r="5" fill="#ffffff" className="animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '1.4s' }} />
        </svg>

        {/* 4. HERO CONTENT & TYPOGRAPHY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline & Action Button */}
            <div className="lg:col-span-7 text-left reveal reveal-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.06] text-white font-heading drop-shadow-md">
                We bring you <br />
                <span className="text-white">new customers</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg font-medium text-slate-200 mt-5 max-w-xl leading-relaxed">
                We build effective strategies to help you reach customers, and prospects across the entire web.
              </p>

              {/* Red Pill Action Button */}
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/40 transition-all transform hover:scale-105 active:scale-95"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Rating Strip */}
              <div className="flex items-center gap-2.5 mt-8 text-xs text-slate-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold">{hero.floatingBadgeText || 'Verified 4.9/5 Rating on Google'}</span>
              </div>
            </div>

            {/* Right Column: 3D Isometric Ecosystem Illustration */}
            <div className="lg:col-span-5 reveal reveal-right">
              <div className="relative max-w-md mx-auto lg:max-w-none group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/20 p-2 backdrop-blur-md">
                  <img
                    src="/images/hero_3d.jpg"
                    alt="Meta Seeds 3D Ecosystem"
                    className="w-full h-72 sm:h-96 md:h-[400px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 3 TEMPLATE FLOATING HIGHLIGHT CARDS */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-20 md:-mt-24 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Web Development */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between text-center reveal reveal-left">
            <div>
              <div className="w-20 h-20 mx-auto mb-5 relative flex items-center justify-center">
                <img src="/images/icon_web_3d.jpg" alt="Web Development" className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Web Development
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Custom corporate websites, ultra-fast web applications, and responsive UI/UX built to match your growth goals.
              </p>
            </div>
            <div className="mt-8 pt-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>

          {/* Card 2: IoT Services & Research */}
          <div className="bg-gradient-to-b from-[#0b1a4f] to-[#183696] rounded-3xl p-7 sm:p-8 border border-blue-400/30 shadow-2xl shadow-blue-900/40 hover:-translate-y-3 transition-all duration-300 group flex flex-col justify-between text-center text-white md:-mt-4 relative overflow-hidden reveal reveal-scale">
            <div>
              <div className="w-24 h-24 mx-auto mb-5 relative flex items-center justify-center">
                <img src="/images/icon_iot_3d.jpg" alt="IoT Services" className="w-full h-full object-cover rounded-2xl shadow-xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">
                IoT Services & Research
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Smart connected hardware, cloud telemetry dashboards, and deep research feasibility initiatives for industrial scaling.
              </p>
            </div>
            <div className="mt-8 pt-4">
              <a
                href="#/iot"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/40 transition-all"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>

          {/* Card 3: SEO */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between text-center reveal reveal-right">
            <div>
              <div className="w-20 h-20 mx-auto mb-5 relative flex items-center justify-center">
                <img src="/images/icon_seo_3d.jpg" alt="SEO" className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">
                Search Engine Optimization
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rank #1 on Google and attract high-converting organic traffic with our proven, data-backed SEO strategies.
              </p>
            </div>
            <div className="mt-8 pt-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};



