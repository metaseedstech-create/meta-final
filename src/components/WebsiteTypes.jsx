import React from 'react';
import { websiteTypesData } from '../data/agencyData';
import { 
  Check, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function WebsiteTypes({ onSelectWebsiteType }) {
  return (
    <section id="websites" className="py-24 bg-slate-100/60 dark:bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyanGlow-500/10 border border-cyanGlow-500/20 text-cyanGlow-600 dark:text-cyanGlow-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Engineered For Conversion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Website Types We <span className="text-gradient">Architect & Build</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No cookie-cutter drag-and-drop templates. We construct custom high-velocity digital real estate optimized for search rankings, sub-second speed, and maximum lead capture.
          </p>
        </div>

        {/* Pricing & Deliverable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteTypesData.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between ${
                tier.popular
                  ? 'bg-white dark:bg-navy-900 border-2 border-electric-500 shadow-2xl shadow-electric-500/15 lg:-translate-y-2'
                  : 'bg-white dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800 hover:border-slate-400 dark:hover:border-navy-700 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Most Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-electric-600 to-cyanGlow-500 text-white text-xs font-black tracking-wider uppercase shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Category & Title */}
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {tier.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {tier.name}
                  </h3>
                </div>

                {/* Price & Delivery Time */}
                <div className="py-4 border-y border-slate-100 dark:border-navy-800 mb-5">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xs text-slate-500">Starting from</span>
                    <span className="text-3xl font-black text-slate-900 dark:text-white">
                      {tier.startingPrice}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Delivery: {tier.deliveryTime}</span>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-6">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Ideal For:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                    "{tier.idealFor}"
                  </p>
                </div>

                {/* What's Included */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-2">
                    What's Included:
                  </span>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-electric-500/10 text-electric-600 dark:text-electric-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectWebsiteType(tier.name)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-electric-600 to-cyanGlow-500 text-white shadow-glow-blue hover:opacity-95'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-900 dark:text-white'
                }`}
              >
                <span>Get Started with {tier.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Build Guarantee note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>All web builds include 100% source code ownership, clean Git repos, and zero vendor lock-in.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
