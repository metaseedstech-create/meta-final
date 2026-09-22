import React, { useRef } from 'react';
import { useContent } from '../../context/ContentContext';
import { Star, Sparkles } from '../Icons';

export const Testimonials = () => {
  const { content } = useContent();
  const { testimonials, settings } = content;
  const trackRef = useRef(null);

  if (!testimonials || testimonials.length === 0) return null;

  // Duplicate for seamless infinite loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-[#e8f2fe] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Business Leaders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            Read how businesses accelerated their growth with{' '}
            <span className="font-bold text-blue-600">
              {settings.agencyName || 'Meta Seeds'}
            </span>.
          </p>
        </div>
      </div>

      {/* ── Auto-scrolling Carousel (no arrows, slow, infinite) ── */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade edge */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#e8f2fe] to-transparent" />
        {/* Right fade edge */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#e8f2fe] to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-6 animate-testimonial-scroll"
          style={{ width: 'max-content' }}
        >
          {doubled.map((item, idx) => (
            <div
              key={`${item.id || idx}-${idx}`}
              className="w-72 sm:w-80 md:w-96 flex-shrink-0 p-5 sm:p-7 rounded-3xl bg-white border border-blue-100 shadow-md shadow-blue-500/5 flex flex-col justify-between hover:border-blue-300 hover:shadow-xl transition-all group"
            >
              {/* Stars */}
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 italic leading-relaxed line-clamp-4">
                  "{item.review}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-blue-100 flex items-center gap-3">
                <img
                  src={
                    item.avatar ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=dbeafe&color=1d4ed8&size=80`
                  }
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-blue-200 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.role ? `${item.role}, ` : ''}{item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA below carousel */}
      <div className="text-center mt-12 reveal reveal-delay-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 animate-pulse-glow"
        >
          <span>Join Our Happy Clients</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
};
