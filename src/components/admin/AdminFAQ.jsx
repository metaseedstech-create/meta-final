import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, HelpCircle, Plus, Trash2 } from '../Icons';

export const AdminFAQ = () => {
  const { content, updateSection } = useContent();
  const [faqs, setFaqs] = useState([...(content.faqs || [])]);

  const handleChange = (index, field, value) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: value };
    setFaqs(updated);
  };

  const handleAdd = () => {
    setFaqs([
      ...faqs,
      {
        id: `f-${Date.now()}`,
        question: 'New Frequently Asked Question?',
        answer: 'Detailed and clear answer for your visitors explaining your services or guarantees.',
      },
    ]);
  };

  const handleDelete = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('faqs', faqs);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span>Customize FAQ Accordion ({faqs.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Answer common questions about pricing, timelines, tech stack, and marketing deliverables.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Question</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save FAQs</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={faq.id || idx}
            className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-400">
                FAQ #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => handleDelete(idx)}
                className="p-1 text-slate-400 hover:text-red-400"
                title="Delete FAQ"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Question</label>
              <input
                type="text"
                value={faq.question}
                onChange={(e) => handleChange(idx, 'question', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Answer</label>
              <textarea
                rows={3}
                value={faq.answer}
                onChange={(e) => handleChange(idx, 'answer', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
