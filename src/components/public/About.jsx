import React from 'react';
import { useContent } from '../../context/ContentContext';
import { ArrowRight, Globe, Laptop, Code2, CheckCircle2 } from '../Icons';

export const About = () => {
  const { content } = useContent();
  const { about } = content;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Soft watermark background */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Laptop & Character Illustration */}
          <div className="lg:col-span-6 reveal reveal-left">
            <div className="relative max-w-lg mx-auto lg:max-w-none group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                <img
                  src="/images/about_3d.jpg"
                  alt="Meta Seeds About Us"
                  className="w-full h-80 sm:h-[420px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Glass Feature Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-blue-100 shadow-xl flex items-center gap-3 animate-float">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-md">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">100% Online Delivery</h4>
                  <p className="text-[11px] text-slate-500 font-medium">End-to-End Client Execution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Template Style About Text */}
          <div className="lg:col-span-6 reveal reveal-right text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Global Digital Excellence</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              About Meta Seeds
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {about.description ||
                'Meta Seeds is a multi-faceted 100% online technology organization formed with a vision to lead in Website Development, Search Engine Optimization (SEO), IoT Telemetry, eCommerce Architecture, and Technical Research Projects.'}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Custom Next.js & React Stacks</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-bold text-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Remote Online Project Completion</span>
              </div>
            </div>

            {/* Red Pill Action Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all transform hover:scale-105"
              >
                <span>Discover More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
