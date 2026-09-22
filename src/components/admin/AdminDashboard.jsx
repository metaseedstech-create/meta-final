import React, { useRef } from 'react';
import { useContent } from '../../context/ContentContext';
import {
  Sparkles,
  Folder,
  Code2,
  Star,
  Download,
  Upload,
  RotateCcw,
  Eye,
  CheckCircle2,
  ShieldCheck
} from '../Icons';

export const AdminDashboard = ({ setActiveTab, onViewSite }) => {
  const { content, exportData, importData, resetToDefaults } = useContent();
  const fileInputRef = useRef(null);

  const stats = [
    { label: 'Active Services', value: content.services?.length || 0, tab: 'services', icon: Code2, color: 'text-blue-400' },
    { label: 'Portfolio Items', value: content.portfolio?.length || 0, tab: 'portfolio', icon: Folder, color: 'text-cyan-400' },
    { label: 'Client Reviews', value: content.testimonials?.length || 0, tab: 'testimonials', icon: Star, color: 'text-amber-400' },
    { label: 'Client Brands', value: content.clients?.length || 0, tab: 'clients', icon: ShieldCheck, color: 'text-emerald-400' },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      importData(file);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Top Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900/50 border border-blue-500/20 backdrop-blur-md relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CMS Active & Synchronized</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Welcome to Your Agency Control Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Customize every headline, image, counter, service, and project on your website. All changes update instantly in real-time.
            </p>
          </div>

          <button
            onClick={onViewSite}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all shrink-0"
          >
            <Eye className="w-4 h-4" />
            <span>Preview Live Site</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              onClick={() => setActiveTab(item.tab)}
              className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 cursor-pointer transition-all hover:bg-slate-900/80 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{item.label}</span>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <div className="text-3xl font-black text-white mt-3 group-hover:text-blue-400 transition-colors">
                {item.value}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Click to edit section →</p>
            </div>
          );
        })}
      </div>

      {/* Quick Jump Shortcuts */}
      <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
          Quick Page Editors
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { label: 'Hero & Badges', tab: 'hero' },
            { label: 'Stats Counters', tab: 'stats' },
            { label: 'Services Grid', tab: 'services' },
            { label: 'Portfolio Projects', tab: 'portfolio' },
            { label: 'About & Process', tab: 'about' },
            { label: 'Client Reviews', tab: 'testimonials' },
            { label: 'Brand Logos', tab: 'clients' },
            { label: 'FAQ Answers', tab: 'faq' },
            { label: 'Contact & WhatsApp', tab: 'contact' },
            { label: 'SEO & Agency Name', tab: 'settings' },
          ].map((sc) => (
            <button
              key={sc.tab}
              onClick={() => setActiveTab(sc.tab)}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold border border-white/5 text-left transition-colors flex items-center justify-between"
            >
              <span>{sc.label}</span>
              <span className="text-slate-400">→</span>
            </button>
          ))}
        </div>
      </div>

      {/* Backup, Export & Reset Section */}
      <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 space-y-4">
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Backup & Data Management
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Export all website content to a JSON file for safe backup, import a saved configuration, or reset to original defaults.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Export Button */}
          <button
            onClick={exportData}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Export Backup (.JSON)</span>
          </button>

          {/* Import Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors"
          >
            <Upload className="w-4 h-4 text-cyan-400" />
            <span>Import JSON File</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json"
            className="hidden"
          />

          {/* Reset Button */}
          <button
            onClick={() => {
              if (window.confirm('Reset all content back to original defaults? Any custom edits will be replaced.')) {
                resetToDefaults();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold text-xs border border-red-500/20 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset to Original Defaults</span>
          </button>
        </div>
      </div>
    </div>
  );
};
