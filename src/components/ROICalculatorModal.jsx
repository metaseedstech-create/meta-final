import React, { useState } from 'react';
import { X, Sparkles, TrendingUp, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ROICalculatorModal({ isOpen, onClose, onProceedToContact }) {
  const [adSpend, setAdSpend] = useState(8000);
  const [monthlyVisitors, setMonthlyVisitors] = useState(12000);
  const [currentCvr, setCurrentCvr] = useState(1.5);

  if (!isOpen) return null;

  // Realistic AI impact calculations
  // Average AI improvements: +120% CVR, -38% CPA, 22% ad waste eliminated
  const currentLeads = Math.round(monthlyVisitors * (currentCvr / 100));
  const projectedCvr = (currentCvr * 2.1).toFixed(1);
  const projectedLeads = Math.round(monthlyVisitors * (projectedCvr / 100));
  const extraLeads = projectedLeads - currentLeads;
  const estimatedWasteSaved = Math.round(adSpend * 0.24);
  const projectedRevenueGain = Math.round(extraLeads * 140); // average lead value metric

  const handleApplyToContact = () => {
    onClose();
    if (onProceedToContact) {
      onProceedToContact({
        adSpend,
        monthlyVisitors,
        notes: `Calculated from AI Audit Simulator: $${adSpend}/mo ad spend, ${monthlyVisitors} visitors/mo. Projected +${extraLeads} leads/mo.`
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-navy-900 rounded-3xl max-w-2xl w-full p-6 sm:p-9 border border-slate-200 dark:border-navy-700 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          aria-label="Close calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Growth Estimator</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Instant 40-Point AI Opportunity Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Simulate the mathematical impact of autonomous ad testing, chatbot lead capture, and Core Web Vitals optimization on your business.
          </p>
        </div>

        {/* Sliders Area */}
        <div className="space-y-5 bg-slate-50 dark:bg-navy-950 p-5 rounded-2xl border border-slate-200/80 dark:border-navy-800 mb-6">
          
          {/* Monthly Ad Spend Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
              <span>Monthly Ad Budget (Meta + Google)</span>
              <span className="text-sm font-black text-electric-600 dark:text-electric-400 font-mono">
                ${adSpend.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-electric-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>$1,000</span>
              <span>$25,000</span>
              <span>$50,000+</span>
            </div>
          </div>

          {/* Monthly Traffic Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
              <span>Monthly Website Visitors</span>
              <span className="text-sm font-black text-electric-600 dark:text-electric-400 font-mono">
                {monthlyVisitors.toLocaleString()} visits
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full accent-electric-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1,000</span>
              <span>50,000</span>
              <span>100,000+</span>
            </div>
          </div>

          {/* Current Conversion Rate Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
              <span>Current Website Conversion Rate</span>
              <span className="text-sm font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {currentCvr}%
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={currentCvr}
              onChange={(e) => setCurrentCvr(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>0.5% (Low)</span>
              <span>2.5% (Avg)</span>
              <span>5.0% (High)</span>
            </div>
          </div>

        </div>

        {/* Projected AI Lift Result Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-center">
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
              Estimated Waste Saved
            </span>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              +${estimatedWasteSaved.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-500 block mt-0.5">from fatigued ad cuts</span>
          </div>

          <div className="p-4 rounded-2xl bg-electric-50 dark:bg-electric-950/30 border border-electric-200 dark:border-electric-900/40">
            <span className="text-[10px] font-bold text-electric-600 dark:text-electric-400 uppercase tracking-wider block">
              Projected Extra Leads
            </span>
            <div className="text-xl sm:text-2xl font-black text-electric-600 dark:text-electric-400 mt-1">
              +{extraLeads.toLocaleString()} / mo
            </div>
            <span className="text-[10px] text-slate-500 block mt-0.5">CVR jumps to {projectedCvr}%</span>
          </div>

          <div className="p-4 rounded-2xl bg-cyanGlow-50 dark:bg-cyanGlow-950/30 border border-cyanGlow-200 dark:border-cyanGlow-900/40">
            <span className="text-[10px] font-bold text-cyanGlow-600 dark:text-cyanGlow-400 uppercase tracking-wider block">
              Est. Monthly Gross Lift
            </span>
            <div className="text-xl sm:text-2xl font-black text-cyanGlow-600 dark:text-cyanGlow-400 mt-1">
              +${projectedRevenueGain.toLocaleString()}
            </div>
            <span className="text-[10px] text-slate-500 block mt-0.5">based on baseline model</span>
          </div>
        </div>

        {/* Claim Audit CTA */}
        <div className="space-y-3">
          <button
            onClick={handleApplyToContact}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white shadow-glow-blue bg-gradient-to-r from-electric-600 via-electric-500 to-cyanGlow-500 hover:opacity-95 transition-all flex items-center justify-center space-x-2"
          >
            <span>Lock In Free 40-Point Audit with These Estimates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="text-center">
            <span className="text-[11px] text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Free, non-binding audit prepared by senior San Francisco engineers.</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
