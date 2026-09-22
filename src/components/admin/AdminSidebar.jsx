import React from 'react';
import {
  Layout,
  Sparkles,
  BarChart3,
  Code2,
  Folder,
  Layers,
  Star,
  Building,
  HelpCircle,
  Phone,
  Settings,
  Eye,
  LogOut,
  Download,
  Upload,
  RotateCcw
} from '../Icons';

export const AdminSidebar = ({
  activeTab,
  setActiveTab,
  onViewSite,
  onLogout,
  agencyName,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Layout },
    { id: 'hero', label: 'Hero Section', icon: Sparkles },
    { id: 'stats', label: 'Stats Counter', icon: BarChart3 },
    { id: 'services', label: 'Services (4)', icon: Code2 },
    { id: 'portfolio', label: 'Portfolio Projects', icon: Folder },
    { id: 'about', label: 'About & Process', icon: Layers },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'clients', label: 'Client Brands', icon: Building },
    { id: 'faq', label: 'FAQ Accordion', icon: HelpCircle },
    { id: 'contact', label: 'Contact & WhatsApp', icon: Phone },
    { id: 'settings', label: 'Site Settings & SEO', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0a0f24] border-r border-white/10 flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-md">
              CMS
            </div>
            <div>
              <h2 className="text-sm font-bold text-white leading-none">
                {agencyName || 'Meta Seeds'}
              </h2>
              <span className="text-[10px] text-blue-400 font-mono">Live Admin Panel</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-190px)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Actions */}
      <div className="p-3 border-t border-white/10 space-y-2">
        <button
          onClick={onViewSite}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs font-semibold transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Public Site</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-300 text-xs font-medium transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};
