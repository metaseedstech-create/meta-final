import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Sparkles, Image } from '../Icons';

export const AdminHero = () => {
  const { content, updateSection } = useContent();
  const [formData, setFormData] = useState({ ...content.hero });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('hero', formData);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span>Customize Hero Section</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Edit the main headline, floating badges, description, CTA buttons, and banner visual.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Floating Badges */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          Floating Badges (Top of Hero)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Badge 1</label>
            <input
              type="text"
              value={formData.badge1 || ''}
              onChange={(e) => handleChange('badge1', e.target.value)}
              placeholder="growth driven"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Badge 2</label>
            <input
              type="text"
              value={formData.badge2 || ''}
              onChange={(e) => handleChange('badge2', e.target.value)}
              placeholder="digital marketing"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Badge 3</label>
            <input
              type="text"
              value={formData.badge3 || ''}
              onChange={(e) => handleChange('badge3', e.target.value)}
              placeholder="website development"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Main Headlines */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          Hero Headlines & Text
        </h3>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Title Line 1</label>
          <input
            type="text"
            value={formData.titleLine1 || ''}
            onChange={(e) => handleChange('titleLine1', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">
            Title Line 2 (Highlighted Gradient Text)
          </label>
          <input
            type="text"
            value={formData.titleLine2 || ''}
            onChange={(e) => handleChange('titleLine2', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Subtitle</label>
          <input
            type="text"
            value={formData.subtitle || ''}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Paragraph Description</label>
          <textarea
            rows={4}
            value={formData.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Buttons & CTA */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          Call to Action Buttons
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Primary CTA Text</label>
            <input
              type="text"
              value={formData.ctaText || ''}
              onChange={(e) => handleChange('ctaText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Primary CTA Link</label>
            <input
              type="text"
              value={formData.ctaLink || ''}
              onChange={(e) => handleChange('ctaLink', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Secondary CTA Text</label>
            <input
              type="text"
              value={formData.secondaryCtaText || ''}
              onChange={(e) => handleChange('secondaryCtaText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-300 mb-1">Secondary CTA Link</label>
            <input
              type="text"
              value={formData.secondaryCtaLink || ''}
              onChange={(e) => handleChange('secondaryCtaLink', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Floating Rating Tag</label>
          <input
            type="text"
            value={formData.floatingBadgeText || ''}
            onChange={(e) => handleChange('floatingBadgeText', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Banner Visual Inset */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          Hero Banner Image
        </h3>
        <div>
          <label className="block text-xs text-slate-300 mb-1">Banner Image URL</label>
          <input
            type="url"
            value={formData.bannerImage || ''}
            onChange={(e) => handleChange('bannerImage', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>
        {formData.bannerImage && (
          <div className="mt-3">
            <p className="text-[11px] text-slate-400 mb-2">Live Thumbnail Preview:</p>
            <img
              src={formData.bannerImage}
              alt="Preview"
              className="w-full max-w-md h-40 object-cover rounded-xl border border-white/10"
            />
          </div>
        )}
      </div>

      {/* Bottom Save Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Hero Changes</span>
        </button>
      </div>
    </form>
  );
};
