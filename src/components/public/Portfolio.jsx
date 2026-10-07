import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { ExternalLink, Sparkles, Folder } from '../Icons';

export const Portfolio = () => {
  const { content } = useContent();
  const { portfolio, portfolioCategories } = content;
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = portfolioCategories || ['All', 'Web Design', 'Brand Logos', 'Posters', 'SEO', 'Meta Ads'];

  const filteredItems =
    activeCategory === 'All'
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#f8fafc] relative text-slate-900">
      {/* Background glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Client Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            Explore live web platforms, IoT hardware systems, eCommerce stores, and Google #1 ranking case studies delivered by Meta Seeds.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-14 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white border border-slate-200 shadow-sm max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Portfolio */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <Folder className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 text-sm">
              No projects in this category yet. You can add them in the Admin Panel!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
            {filteredItems.map((item, index) => {
              const isLarge = index % 5 === 0 || index % 5 === 3;
              const colSpanClass = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <div
                  key={item.id}
                  className={`card-3d group relative rounded-3xl overflow-hidden bg-white border border-slate-200 flex flex-col justify-between hover:border-blue-400 transition-all duration-500 shadow-md ${colSpanClass}`}
                >
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={
                        item.image ||
                        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
                      }
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Pill */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-blue-700 border border-blue-200 shadow-md">
                      {item.category}
                    </span>

                    {/* External Link Icon */}
                    {item.link && item.link !== '#' && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-100 scale-75 shadow-lg"
                        title="Visit Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.clientType || item.category}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>{item.location || 'Client Project'}</span>
                      {item.link && item.link !== '#' ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1.5"
                        >
                          View Live <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-slate-400">Case Study</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
