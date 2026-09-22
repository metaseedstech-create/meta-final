import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Layers, Plus, Trash2 } from '../Icons';

export const AdminAbout = () => {
  const { content, updateSection } = useContent();
  const [about, setAbout] = useState({ ...content.about });

  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...(about.processSteps || [])];
    updatedSteps[index] = { ...updatedSteps[index], [field]: value };
    setAbout({ ...about, processSteps: updatedSteps });
  };

  const handleWhyChange = (index, field, value) => {
    const updatedWhy = [...(about.whyChooseUs || [])];
    updatedWhy[index] = { ...updatedWhy[index], [field]: value };
    setAbout({ ...about, whyChooseUs: updatedWhy });
  };

  const handleAddWhy = () => {
    const updatedWhy = [
      ...(about.whyChooseUs || []),
      {
        id: `w-${Date.now()}`,
        title: 'New Value Proposition',
        desc: 'Explanation of how this benefits your prospective clients.',
      },
    ];
    setAbout({ ...about, whyChooseUs: updatedWhy });
  };

  const handleDeleteWhy = (index) => {
    const updatedWhy = about.whyChooseUs.filter((_, i) => i !== index);
    setAbout({ ...about, whyChooseUs: updatedWhy });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('about', about);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-400" />
            <span>Customize About & Why Choose Us</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Edit the 3-step methodology, why-choose-us cards, and value proposition copy.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save About Section</span>
        </button>
      </div>

      {/* Main Section Copy */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          Header & Subtitle
        </h3>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Subtitle Badge</label>
          <input
            type="text"
            value={about.subtitle || ''}
            onChange={(e) => setAbout({ ...about, subtitle: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Main Heading</label>
          <input
            type="text"
            value={about.headline || ''}
            onChange={(e) => setAbout({ ...about, headline: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Detailed Description</label>
          <textarea
            rows={3}
            value={about.description || ''}
            onChange={(e) => setAbout({ ...about, description: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          3-Step Client Process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(about.processSteps || []).map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2"
            >
              <span className="text-xs font-mono font-bold text-blue-400">
                STEP {step.step || `0${idx + 1}`}
              </span>
              <input
                type="text"
                value={step.title}
                onChange={(e) => handleStepChange(idx, 'title', e.target.value)}
                placeholder="Step Title"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
              />
              <textarea
                rows={2}
                value={step.desc}
                onChange={(e) => handleStepChange(idx, 'desc', e.target.value)}
                placeholder="Step description"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Cards */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Why Choose Us Value Cards ({about.whyChooseUs?.length || 0})
          </h3>
          <button
            type="button"
            onClick={handleAddWhy}
            className="text-xs text-blue-400 hover:text-cyan-300 font-semibold"
          >
            + Add Card
          </button>
        </div>

        <div className="space-y-3">
          {(about.whyChooseUs || []).map((card, idx) => (
            <div
              key={card.id || idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-4"
            >
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={card.title}
                  onChange={(e) => handleWhyChange(idx, 'title', e.target.value)}
                  placeholder="Card Title"
                  className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
                />
                <textarea
                  rows={2}
                  value={card.desc}
                  onChange={(e) => handleWhyChange(idx, 'desc', e.target.value)}
                  placeholder="Description"
                  className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="button"
                onClick={() => handleDeleteWhy(idx)}
                className="p-1.5 text-slate-400 hover:text-red-400"
                title="Remove Card"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};
