import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { ChevronDown, Sparkles } from '../Icons';

export const FAQ = () => {
  const { content } = useContent();
  const { faqs } = content;
  const [openIdx, setOpenIdx] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (index) => {
    setOpenIdx(openIdx === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-[#eaf3fe] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Find quick answers about Meta Seeds website development packages and digital marketing deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.id || idx}
                className="rounded-2xl bg-white border border-blue-100 overflow-hidden transition-all hover:border-blue-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 transition-colors"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-blue-100 pt-4 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
