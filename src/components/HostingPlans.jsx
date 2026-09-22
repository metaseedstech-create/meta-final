import React, { useState } from 'react';
import { hostingPlansData } from '../data/agencyData';
import { 
  Server, 
  ShieldCheck, 
  Clock, 
  RotateCcw, 
  Lock, 
  Check, 
  Zap,
  HelpCircle
} from 'lucide-react';

export default function HostingPlans({ onSelectPlan }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="hosting" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Server className="w-3.5 h-3.5" />
            <span>Infrastructure & Peace of Mind</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Hosting & Continuous <span className="text-gradient">Maintenance</span> Plans
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Keep your website blazing fast, impenetrable to security threats, and supported by veteran engineers around the clock.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-200 dark:bg-navy-900 border border-slate-300 dark:border-navy-800">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                !annualBilling
                  ? 'bg-white dark:bg-navy-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center space-x-1.5 ${
                annualBilling
                  ? 'bg-white dark:bg-navy-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-extrabold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {hostingPlansData.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white dark:bg-navy-900 border-2 border-electric-500 shadow-2xl shadow-electric-500/15 md:-translate-y-2'
                    : 'bg-white dark:bg-navy-950/60 border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-electric-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center space-x-1">
                    <Zap className="w-3 h-3 text-amber-300 fill-amber-300" />
                    <span>Recommended For Scaling Brands</span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 min-h-[32px]">
                    {plan.subtitle}
                  </p>

                  {/* Pricing Box */}
                  <div className="my-6 pb-6 border-b border-slate-100 dark:border-navy-800">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-black text-slate-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        / month {annualBilling ? '(billed annually)' : ''}
                      </span>
                    </div>
                  </div>

                  {/* Core Guarantee Badges */}
                  <div className="space-y-3 bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border border-slate-200/60 dark:border-navy-800/80 mb-6">
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <Server className="w-4 h-4 text-electric-500 shrink-0" />
                      <span>{plan.uptime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <Lock className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.ssl}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <RotateCcw className="w-4 h-4 text-cyanGlow-500 shrink-0" />
                      <span>{plan.backups}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>SLA: {plan.supportResponse}</span>
                    </div>
                  </div>

                  {/* What else is included */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                      Plan Inclusions:
                    </span>
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan select CTA */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs transition-all ${
                    plan.popular
                      ? 'bg-electric-600 hover:bg-electric-500 text-white shadow-glow-blue'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-navy-800 dark:hover:bg-navy-750 text-slate-900 dark:text-white'
                  }`}
                >
                  Select {plan.name}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
