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
    <section id="portfolio" className="py-12 sm:py-16 md:py-24 bg-[#eaf3fe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Results</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Portfolio
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            Explore live websites, brand identities, and high-ROI advertising campaigns delivered by Meta Seeds.
          </p>
        </div>

        {/* Filter Pills – wraps on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mb-10 sm:mb-14 px-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-blue-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white border border-blue-200 rounded-3xl">
            <Folder className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-600 text-sm">
              No projects in this category yet. You can add them in the Admin Panel!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col shadow-sm"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={
                      item.image ||
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
                    }
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-blue-700 border border-blue-200 shadow-sm">
                    {item.category}
                  </span>

                  {/* External Link Icon */}
                  {item.link && item.link !== '#' && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-100 scale-75 shadow-md"
                      title="Visit Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.clientType || item.category}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{item.location || 'Client Project'}</span>
                    {item.link && item.link !== '#' ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                      >
                        View Live <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-slate-400">Case Study</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
