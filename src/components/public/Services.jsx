import React, { useRef, useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { ArrowRight, ChevronLeft, ChevronRight, Check } from '../Icons';

export const Services = () => {
  const { content } = useContent();
  const { services = [] } = content;
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-carousel timer effect
  useEffect(() => {
    if (isPaused || !services.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % services.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const cardWidth = 340; // card width + gap
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const nextIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % services.length;
    setActiveIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const getService3DIcon = (title = '') => {
    const t = title.toLowerCase();
    if (t.includes('web')) return '/images/icon_web_3d.jpg';
    if (t.includes('seo') || t.includes('optimization')) return '/images/icon_seo_3d.jpg';
    if (t.includes('iot')) return '/images/icon_iot_3d.jpg';
    if (t.includes('ecommerce')) return '/images/icon_ecommerce_3d.jpg';
    if (t.includes('research')) return '/images/icon_research_3d.jpg';
    return '/images/icon_enquiry_3d.jpg';
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0e2778] text-white overflow-hidden">
      {/* Dynamic Curved Top Wave SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-12 sm:h-16 text-[#f8fafc]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1200,0 L1200,60 C900,120 600,10 0,70 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-8">
        
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Interactive Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Our Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200">
            High-performance engineering across our 6 core technology domains.
          </p>
        </div>

        {/* Auto Carousel Container with Hover Pause & Navigation */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-900 border border-white/30 flex items-center justify-center transition-all shadow-xl backdrop-blur-md transform hover:scale-110 active:scale-95"
            aria-label="Previous Service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-900 border border-white/30 flex items-center justify-center transition-all shadow-xl backdrop-blur-md transform hover:scale-110 active:scale-95"
            aria-label="Next Service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Cards Horizontal Auto-Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => {
              const iconPath = getService3DIcon(service.title);
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.id || index}
                  className={`w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start rounded-3xl bg-white text-slate-900 p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-500 group ${
                    isActive
                      ? 'ring-4 ring-cyan-400/80 scale-[1.02] shadow-cyan-500/20'
                      : 'hover:-translate-y-2 opacity-95 hover:opacity-100'
                  }`}
                >
                  <div className="text-center">
                    {/* 3D Isometric Icon Top Center */}
                    <div className="w-20 h-20 mx-auto mb-4 relative flex items-center justify-center overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={iconPath}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed min-h-[48px]">
                      {service.shortDesc}
                    </p>

                    {/* Checklist */}
                    {service.items && service.items.length > 0 && (
                      <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 text-left">
                        {service.items.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                    <a
                      href={service.title.toLowerCase().includes('iot') ? '#/iot' : '#contact'}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700 hover:text-red-600 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Animated Active Index Dots Bar */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  scrollToIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]'
                    : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

