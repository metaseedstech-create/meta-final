import React from 'react';
import { useContent } from '../../context/ContentContext';
import { ArrowRight, Check, Sparkles } from '../Icons';

export const Services = () => {
  const { content } = useContent();
  const { services, settings } = content;

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-[#f0f7ff] relative overflow-hidden">
      {/* Soft Blue Glows */}
      <div className="hidden md:block absolute top-1/3 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-10 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>
          <h2 className="text-lg sm:text-3xl md:text-4xl font-black text-slate-900 leading-snug px-2">
            At {settings.agencyName || 'Meta Seeds'}, we help businesses build strong digital foundations through high-performance websites and ROI-focused marketing.
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto mt-5 rounded-full" />
        </div>

        {/* Services Grid — single col on mobile, alternating on lg */}
        <div className="space-y-8 sm:space-y-14">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id || index}
                className={`rounded-2xl sm:rounded-3xl bg-white border border-blue-100 shadow-lg shadow-blue-500/5 hover:border-blue-300 transition-all group overflow-hidden ${isEven ? 'reveal reveal-left' : 'reveal reveal-right'}`}
              >
                {/* Mobile: stacked layout. Desktop: side-by-side grid */}
                <div className={`flex flex-col lg:grid lg:grid-cols-12 lg:gap-0 items-stretch`}>

                  {/* Image block */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`relative h-44 sm:h-64 lg:h-full min-h-[200px] sm:min-h-[260px] overflow-hidden`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-md">
                        {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Text block */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Sub-items */}
                    {service.items && service.items.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-blue-100">
                        {service.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 hover:border-blue-200 transition-all"
                          >
                            <div className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3" />
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-6">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors group/btn"
                      >
                        <span>Discuss this with Meta Seeds</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
