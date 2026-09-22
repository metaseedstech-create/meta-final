import React, { useState, useEffect } from 'react';
import { agencyConfig } from '../data/agencyConfig';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenAuditModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Websites', href: '#websites' },
    { name: 'Hosting', href: '#hosting' },
    { name: 'Client Satisfaction', href: '#satisfaction' },
    { name: 'AI Advantage', href: '#ai-advantage' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/40 border-b border-slate-200 dark:border-navy-800' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-blue-900/40 via-electric-600/30 to-cyanGlow-600/30 border-b border-white/5 py-1.5 px-4 text-xs font-medium text-slate-700 dark:text-slate-300 hidden md:flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>San Francisco AI Marketing HQ • Client Retention: <strong className="text-emerald-500 font-bold">98.2%</strong></span>
        </div>
        <div className="flex items-center space-x-4">
          <a href={`tel:${agencyConfig.phone}`} className="flex items-center space-x-1 hover:text-electric-400 transition-colors">
            <PhoneCall className="w-3 h-3 text-electric-400" />
            <span>{agencyConfig.phone}</span>
          </a>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">Zero Black-Box Transparency Guarantee</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-600 to-cyanGlow-400 p-[1.5px] shadow-glow-blue transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-electric-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Nexus<span className="text-electric-500 dark:text-electric-400">Scale</span>
                </span>
                <span className="text-xs font-black tracking-widest px-1.5 py-0.5 rounded bg-electric-500/10 dark:bg-electric-500/20 text-electric-600 dark:text-electric-400 border border-electric-500/30">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 block -mt-0.5 tracking-wider font-medium">
                SAN FRANCISCO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-electric-600 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-850/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area: Theme toggle + CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Dark mode switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-navy-800 text-slate-600 dark:text-slate-300 hover:text-electric-600 dark:hover:text-white bg-white/60 dark:bg-navy-900/60 hover:bg-slate-100 dark:hover:bg-navy-800 transition-all shadow-sm"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenAuditModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-semibold text-sm text-white shadow-glow-blue transition-all duration-300 transform active:scale-95 bg-gradient-to-r from-electric-600 to-electric-500 hover:from-electric-500 hover:to-cyanGlow-500 flex items-center space-x-2"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-navy-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 focus:outline-none"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white dark:bg-navy-950 border-b border-slate-200 dark:border-navy-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl transition-all">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-200 dark:border-navy-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-sm text-white bg-gradient-to-r from-electric-600 to-cyanGlow-500 shadow-glow-blue flex items-center justify-center space-x-2"
            >
              <span>Get Free 40-Point AI Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
