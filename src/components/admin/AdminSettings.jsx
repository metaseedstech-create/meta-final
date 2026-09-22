import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Settings, Key, Globe, Share2, Palette } from '../Icons';

export const AdminSettings = () => {
  const { content, updateSection } = useContent();
  const [settings, setSettings] = useState({ ...content.settings });

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (network, value) => {
    setSettings((prev) => ({
      ...prev,
      socialLinks: {
        ...(prev.socialLinks || {}),
        [network]: value,
      },
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('settings', settings);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            <span>Site Identity, SEO & Security</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Configure your agency branding, Google SEO meta tags, and admin panel password.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Settings</span>
        </button>
      </div>

      {/* Brand Identity */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <span>Agency Brand Identity</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Agency Name</label>
            <input
              type="text"
              value={settings.agencyName || ''}
              onChange={(e) => handleChange('agencyName', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">Logo Text / Monogram</label>
            <input
              type="text"
              value={settings.logoText || ''}
              onChange={(e) => handleChange('logoText', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">Logo Subtitle</label>
            <input
              type="text"
              value={settings.logoSubtitle || ''}
              onChange={(e) => handleChange('logoSubtitle', e.target.value)}
              placeholder="AGENCY"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Agency Tagline</label>
          <input
            type="text"
            value={settings.tagline || ''}
            onChange={(e) => handleChange('tagline', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* SEO Metadata */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span>Search Engine Optimization (SEO) Meta</span>
        </h3>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Browser Title Tag (SEO Title)</label>
          <input
            type="text"
            value={settings.seoTitle || ''}
            onChange={(e) => handleChange('seoTitle', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Meta Description</label>
          <textarea
            rows={2}
            value={settings.seoDescription || ''}
            onChange={(e) => handleChange('seoDescription', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>

        <div>
          <label className="block text-xs text-slate-300 mb-1">Meta Keywords</label>
          <input
            type="text"
            value={settings.seoKeywords || ''}
            onChange={(e) => handleChange('seoKeywords', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Share2 className="w-4 h-4 text-indigo-400" />
          <span>Social Media Profiles</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">Instagram URL</label>
            <input
              type="url"
              value={settings.socialLinks?.instagram || ''}
              onChange={(e) => handleSocialChange('instagram', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">LinkedIn URL</label>
            <input
              type="url"
              value={settings.socialLinks?.linkedin || ''}
              onChange={(e) => handleSocialChange('linkedin', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">Facebook URL</label>
            <input
              type="url"
              value={settings.socialLinks?.facebook || ''}
              onChange={(e) => handleSocialChange('facebook', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">Twitter / X URL</label>
            <input
              type="url"
              value={settings.socialLinks?.twitter || ''}
              onChange={(e) => handleSocialChange('twitter', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Theme Color Settings */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Palette className="w-4 h-4 text-fuchsia-400" />
          <span>Website Theme Color</span>
        </h3>

        <div className="max-w-md">
          <label className="block text-xs text-slate-300 mb-3">
            Select the primary brand color for the public website.
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              { id: 'blue', name: 'Blue (Default)', color: 'bg-blue-600' },
              { id: 'emerald', name: 'Emerald', color: 'bg-emerald-500' },
              { id: 'rose', name: 'Rose', color: 'bg-rose-500' },
              { id: 'violet', name: 'Violet', color: 'bg-violet-600' },
              { id: 'amber', name: 'Amber', color: 'bg-amber-500' },
            ].map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => handleChange('themeColor', theme.id)}
                className={`flex flex-col items-center gap-2 p-2 rounded-xl border transition-all ${
                  (settings.themeColor || 'blue') === theme.id
                    ? 'border-blue-400 bg-blue-500/10'
                    : 'border-transparent hover:bg-white/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-full shadow-lg ${theme.color}`} />
                <span className="text-[10px] text-slate-300 font-medium">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Admin Password Gate */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-blue-500/20 space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Key className="w-4 h-4 text-blue-400" />
          <span>Admin Security</span>
        </h3>

        <div className="max-w-md">
          <label className="block text-xs text-slate-300 mb-1">
            Admin Panel Access Password
          </label>
          <input
            type="text"
            value={settings.adminPassword || 'admin'}
            onChange={(e) => handleChange('adminPassword', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-blue-500"
          />
          <p className="text-[11px] text-slate-400 mt-1">
            Default password is <code className="text-blue-400">admin</code>. You can change it here anytime.
          </p>
        </div>
      </div>
    </form>
  );
};
