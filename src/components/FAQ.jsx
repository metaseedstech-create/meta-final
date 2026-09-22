import React, { useState } from 'react';
import { faqData } from '../data/agencyData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Transparency First</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Straight answers to the questions serious business owners ask before hiring an agency.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-electric-500/20 text-electric-500' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-navy-800/80 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions CTA banner */}
        <div className="mt-12 bg-electric-500/10 border border-electric-500/20 rounded-2xl p-6 text-center sm:flex sm:items-center sm:justify-between">
          <div className="text-left mb-4 sm:mb-0">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Talk directly to one of our marketing engineers in San Francisco.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs shadow-glow-blue transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us Directly</span>
          </a>
        </div>

      </div>
    </section>
  );
}
