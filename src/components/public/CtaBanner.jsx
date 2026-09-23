import React from 'react';
import { ArrowRight } from '../Icons';

export const CtaBanner = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 via-rose-600 to-red-700 p-8 sm:p-12 md:p-14 shadow-2xl shadow-red-600/30 text-white reveal">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-tight text-white">
                Get Your Site Optimised & Converting Now
              </h2>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-rose-100 max-w-2xl leading-relaxed font-medium">
                Through careful selection, we've curated a team of digital engineering & marketing experts.
              </p>
            </div>

            {/* Template Blue "Submit Now" Button */}
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-full bg-[#0a184e] hover:bg-blue-900 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all transform hover:scale-105 active:scale-95 group"
              >
                <span>Submit Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
