import React, { useState } from 'react';
import { portfolioData } from '../data/agencyData';
import { 
  TrendingUp, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';

export default function Portfolio({ onOpenAuditModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SaaS', 'E-Commerce', 'Healthcare', 'Fintech', 'Local Business'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="portfolio" className="py-24 bg-slate-100/50 dark:bg-navy-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Proven Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Client Results Backed by <span className="text-gradient">Verifiable Metrics</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real businesses. Real attribution. Explore how our AI systems generated quantifiable shifts in customer acquisition, ROAS, and recurring revenue.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-electric-600 text-white shadow-glow-blue'
                    : 'bg-white dark:bg-navy-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:border-electric-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-navy-900/80 rounded-2xl border border-slate-200 dark:border-navy-800 overflow-hidden hover:border-electric-500/60 dark:hover:border-electric-500/60 transition-all duration-300 group hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Image with category tag & duration */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-500/90 text-white flex items-center space-x-1 shadow">
                    <Clock className="w-3 h-3" />
                    <span>{project.duration}</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-xs font-black tracking-wide text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 inline-block">
                    {project.metrics.headlineGain}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-electric-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Before vs After Metric Comparison Box */}
                <div className="pt-4 border-t border-slate-100 dark:border-navy-800/80 space-y-2.5">
                  <div className="bg-red-50/60 dark:bg-red-950/20 p-2.5 rounded-xl border border-red-200/50 dark:border-red-900/30">
                    <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase block tracking-wider">
                      Before Engagement:
                    </span>
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {project.metrics.before}
                    </span>
                  </div>

                  <div className="bg-emerald-50/60 dark:bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-200/50 dark:border-emerald-900/30">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase block tracking-wider">
                      After NexusScale AI:
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {project.metrics.after}
                    </span>
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50 dark:bg-navy-950 border-t border-slate-100 dark:border-navy-800">
                <button
                  onClick={onOpenAuditModal}
                  className="w-full py-2 text-xs font-bold text-electric-600 dark:text-electric-400 hover:text-electric-700 dark:hover:text-electric-300 flex items-center justify-center space-x-1"
                >
                  <span>Replicate These Results For Your Business</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
