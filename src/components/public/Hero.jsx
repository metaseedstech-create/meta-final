import React from 'react';
import { useContent } from '../../context/ContentContext';
import { ArrowRight, Sparkles, Star, CheckCircle2 } from '../Icons';

export const Hero = () => {
  const { content } = useContent();
  const { hero } = content;

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#e8f2fe] via-[#f0f7ff] to-[#e6f1fe] text-slate-800">
      {/* Decorative Ambient Glows – hidden on very small screens for perf */}
      <div className="hidden sm:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-sky-300/30 rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
      <div className="hidden sm:block absolute top-10 right-0 w-[280px] md:w-[450px] h-[280px] md:h-[450px] bg-blue-300/25 rounded-full blur-[100px] md:blur-[130px] pointer-events-none" />
      <div className="hidden sm:block absolute -bottom-10 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-200/30 rounded-full blur-[110px] md:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Floating Tag Badges */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 reveal">
          {hero.badge1 && (
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-bold uppercase tracking-wide shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {hero.badge1}
            </span>
          )}
          {hero.badge2 && (
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 border border-sky-200 text-sky-700 text-[10px] sm:text-xs font-bold uppercase tracking-wide shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              {hero.badge2}
            </span>
          )}
          {hero.badge3 && (
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 border border-indigo-200 text-indigo-700 text-[10px] sm:text-xs font-bold uppercase tracking-wide shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              {hero.badge3}
            </span>
          )}
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-5xl mx-auto reveal reveal-delay-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
            <span className="block">{hero.titleLine1}</span>
            <span className="block bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 bg-clip-text text-transparent">
              {hero.titleLine2}
            </span>
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-bold text-blue-950 mt-4 max-w-3xl mx-auto px-2">
            {hero.subtitle}
          </h2>

          <p className="text-sm text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed px-2">
            {hero.description}
          </p>

          {/* Action CTAs – stacked on mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7 px-4 sm:px-0">
            <a
              href={hero.ctaLink || '#contact'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 animate-pulse-glow"
            >
              <span>{hero.ctaText || 'Get a Free Consultation'}</span>
              <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            <a
              href={hero.secondaryCtaLink || '#portfolio'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-blue-50/80 text-blue-700 border border-blue-200 hover:border-blue-300 font-bold text-sm shadow-sm transition-all"
            >
              <span>{hero.secondaryCtaText || 'Explore Our Work'}</span>
            </a>
          </div>

          {/* Rating Badge */}
          {hero.floatingBadgeText && (
            <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-white/80 border border-blue-200 text-xs text-slate-700 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold">{hero.floatingBadgeText}</span>
            </div>
          )}
        </div>

        {/* Hero Visual Card / Media Inset */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto relative group reveal reveal-scale reveal-delay-3">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200 shadow-xl sm:shadow-2xl shadow-blue-500/15 bg-white">
            <img
              src={
                hero.bannerImage ||
                'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop'
              }
              alt="Meta Seeds Agency Banner"
              className="w-full h-44 sm:h-64 md:h-80 lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

            {/* Inset Badge Overlay – responsive and properly wrapping */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md border border-blue-100 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-base sm:text-lg shrink-0">
                  🌱
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-blue-800 font-bold">Meta Seeds Growth Engine</p>
                  <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight truncate">Custom Web Development & High ROAS Ads</p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg border border-emerald-200 shrink-0">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>100% Customized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
