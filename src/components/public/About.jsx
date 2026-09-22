import React from 'react';
import { useContent } from '../../context/ContentContext';
import { Sparkles, ShieldCheck, Target, Layers, TrendingUp, HeartHandshake } from '../Icons';

export const About = () => {
  const { content } = useContent();
  const { about, settings } = content;

  const getIcon = (idx) => {
    switch (idx % 5) {
      case 0: return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 1: return <Target className="w-5 h-5 text-sky-600" />;
      case 2: return <Layers className="w-5 h-5 text-indigo-600" />;
      case 3: return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      default: return <HeartHandshake className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-[#f0f7ff] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* 3-Step Process Strip */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Process</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 px-2">
              How Meta Seeds Turns Visitors Into Loyal Clients
            </h3>
          </div>

          {/* Steps grid — 1 col mobile, 3 col md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {(about.processSteps || []).map((step, idx) => (
              <div
                key={idx}
                className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-blue-100 shadow-lg shadow-blue-500/5 hover:border-blue-300 transition-all group reveal reveal-delay-${Math.min(idx + 1, 4)}`}
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 mb-3 font-mono">
                  {step.step || `0${idx + 1}`}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
                <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-blue-500 opacity-30 group-hover:scale-150 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us — stacked on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start pt-10 sm:pt-12 border-t border-blue-100">

          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 reveal reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest mb-4">
              <span>{about.subtitle || 'Why Choose Meta Seeds'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              {about.headline ||
                `A results-driven agency focused on growth, performance, and measurable success.`}
            </h2>

            <p className="mt-4 sm:mt-6 text-sm text-slate-600 leading-relaxed">
              {about.description}
            </p>

            <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-blue-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                  🌱
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Meta Seeds Growth Guarantee</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Dedicated lead generation and conversion focus</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-7 space-y-4 reveal reveal-right reveal-delay-2">
            {(about.whyChooseUs || []).map((card, idx) => (
              <div
                key={card.id || idx}
                className="p-5 sm:p-6 md:p-7 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/5 transition-all group"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
