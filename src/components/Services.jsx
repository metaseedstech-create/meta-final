import React from 'react';
import { servicesData } from '../data/agencyData';
import { 
  Search, 
  Share2, 
  Target, 
  Code2, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

const iconMap = {
  Search,
  Share2,
  Target,
  Code2,
  Bot,
  Sparkles
};

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-electric-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyanGlow-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            High-Performance <span className="text-gradient">AI-Engineered</span> Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Every service is augmented by machine learning models to maximize speed, cut acquisition costs, and provide total transparency into every dollar spent.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-navy-900/60 rounded-2xl p-7 border border-slate-200 dark:border-navy-800 hover:border-electric-500/60 dark:hover:border-electric-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-500/10 flex flex-col justify-between"
              >
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-500/5 to-cyanGlow-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                <div>
                  {/* Top Bar: Icon + Highlight Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 p-3.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-electric-600 dark:text-electric-400 group-hover:bg-electric-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide text-electric-600 dark:text-electric-400 bg-electric-500/10 px-2.5 py-1 rounded-full border border-electric-500/20">
                      {service.shortName}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-electric-600 dark:group-hover:text-electric-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-navy-800/80 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Highlight & Direct CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-navy-800">
                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{service.highlight}</span>
                  </div>
                  
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-navy-800 hover:bg-electric-600 hover:text-white dark:hover:bg-electric-600 dark:hover:text-white transition-all flex items-center justify-center space-x-1.5 group/btn"
                  >
                    <span>Request Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
