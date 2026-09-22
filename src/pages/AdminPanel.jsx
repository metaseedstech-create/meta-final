import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { AdminDashboard } from '../components/admin/AdminDashboard';
import { AdminHero } from '../components/admin/AdminHero';
import { AdminStats } from '../components/admin/AdminStats';
import { AdminServices } from '../components/admin/AdminServices';
import { AdminPortfolio } from '../components/admin/AdminPortfolio';
import { AdminAbout } from '../components/admin/AdminAbout';
import { AdminTestimonials } from '../components/admin/AdminTestimonials';
import { AdminClients } from '../components/admin/AdminClients';
import { AdminFAQ } from '../components/admin/AdminFAQ';
import { AdminContact } from '../components/admin/AdminContact';
import { AdminSettings } from '../components/admin/AdminSettings';
import { Lock, ArrowRight, Eye, ShieldCheck, Sparkles } from '../components/Icons';

export const AdminPanel = ({ onViewSite }) => {
  const { content, isAuthenticated, login, logout, notification } = useContent();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(passwordInput);
  };

  // If not logged in, show sleek login gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b19] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl relative z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-blue-500/25">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="text-2xl font-extrabold text-white">Agency Admin Access</h2>
          <p className="text-xs text-slate-400 mt-1">
            Sign in to manage and customize all pages for {content.settings.agencyName || 'Meta Seeds'}
          </p>

          <form onSubmit={handleLoginSubmit} className="mt-6 space-y-4">
            <div className="text-left">
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Admin Password
              </label>
              <input
                type="password"
                required
                autoFocus
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Hint: Default password is <span className="text-blue-400 font-mono">admin</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>Unlock Admin Panel</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onViewSite}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard setActiveTab={setActiveTab} onViewSite={onViewSite} />;
      case 'hero':
        return <AdminHero />;
      case 'stats':
        return <AdminStats />;
      case 'services':
        return <AdminServices />;
      case 'portfolio':
        return <AdminPortfolio />;
      case 'about':
        return <AdminAbout />;
      case 'testimonials':
        return <AdminTestimonials />;
      case 'clients':
        return <AdminClients />;
      case 'faq':
        return <AdminFAQ />;
      case 'contact':
        return <AdminContact />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminDashboard setActiveTab={setActiveTab} onViewSite={onViewSite} />;
    }
  };

  return (
    <div data-theme={content.settings.themeColor || 'blue'} className="min-h-screen bg-[#070b19] text-slate-100 flex">
      {/* Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onViewSite={onViewSite}
        onLogout={logout}
        agencyName={content.settings.agencyName}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top bar */}
        <header className="h-16 border-b border-white/10 bg-[#0a0f24]/80 backdrop-blur-md px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
              CMS Section:
            </span>
            <span className="text-sm font-bold text-white capitalize">
              {activeTab}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onViewSite}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs font-semibold transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Live Site</span>
            </button>
          </div>
        </header>

        {/* Scrollable Editor Container */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-10 max-w-6xl w-full mx-auto">
          {renderTabContent()}
        </main>
      </div>

      {/* Toast Notification */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-[99999] px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-3 animate-fade-in-up ${
            notification.type === 'error'
              ? 'bg-red-950/90 border-red-500/40 text-red-200'
              : notification.type === 'info'
              ? 'bg-cyan-950/90 border-cyan-500/40 text-cyan-200'
              : 'bg-emerald-950/90 border-emerald-500/40 text-emerald-200'
          }`}
        >
          <ShieldCheck className="w-5 h-5 shrink-0" />
          <span className="text-xs font-semibold">{notification.message}</span>
        </div>
      )}
    </div>
  );
};
