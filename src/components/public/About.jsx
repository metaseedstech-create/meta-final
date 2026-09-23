import React from 'react';
import { useContent } from '../../context/ContentContext';
import { ArrowRight } from '../Icons';

export const About = () => {
  const { content } = useContent();
  const { about } = content;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Soft watermark map background */}
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
            </div>
          </div>

          {/* Right Column: Template Style About Text */}
          <div className="lg:col-span-6 reveal reveal-right text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              About us
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
              {about.description ||
                'Meta Seeds is a multi-faceted technology organization formed with a vision to become a leader in various domains such as Web Development, Search Engine Optimization (SEO), IoT Services, eCommerce Platforms, and Research Feasibility Projects.'}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Established with a strong team to keep pace with the fast growing and latest technologies, Meta Seeds is committed to provide the best service. The company has diverse experience in delivering high-converting web assets, IoT hardware integration, and guaranteed Google search results.
            </p>

            {/* Red Pill Action Button (Template style) */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all transform hover:scale-105"
              >
                <span>About More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
