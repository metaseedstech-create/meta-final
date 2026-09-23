import React, { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, ChevronDown, Instagram, Linkedin, Twitter, Facebook } from '../Icons';
import { MetaSeedsMark } from './MetaSeedsMark';

export const Navbar = ({ onOpenAdmin }) => {
  const { content } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const { settings, services } = content;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Announcement & Contact Bar */}
        <div className="bg-[#0a194f] text-white text-xs py-2 border-b border-white/10 hidden sm:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6 text-slate-200 text-[11px] font-medium">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call: {settings.contactPhone || '+91 85318 07262'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>Coimbatore, Tamil Nadu</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{settings.contactEmail || 'info@metaseeds.com'}</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href={settings.socialLinks?.facebook || '#'} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-3 h-3" />
              </a>
              <a href={settings.socialLinks?.instagram || '#'} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-3 h-3" />
              </a>
              <a href={settings.socialLinks?.twitter || '#'} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-3 h-3" />
              </a>
              <a href={settings.socialLinks?.linkedin || '#'} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? 'bg-white shadow-md border-b border-slate-100 py-2.5'
              : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Official Meta Seeds HD Logo - Sized so Name Below is Crisp & Visible */}
            <a href="#" className="flex items-center group py-0.5">
              <img
                src="/images/metaseeds_logo.png"
                alt="Meta Seeds Tech Official Logo"
                className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-all duration-300 contrast-[1.15] saturate-110 drop-shadow-sm"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm font-bold text-slate-800 hover:text-red-600 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-bold text-slate-800 hover:text-red-600 transition-colors">
                About Us
              </a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <a
                  href="#services"
                  className="text-sm font-bold text-slate-800 hover:text-red-600 flex items-center gap-1 transition-colors py-2"
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                </a>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-3 animate-fade-in-up">
                    {(services || []).map((srv) => (
                      <a
                        key={srv.id}
                        href={srv.title.toLowerCase().includes('iot') ? '#/iot' : '#services'}
                        onClick={() => setServicesDropdown(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-50 transition-colors group"
                      >
                        <span className="text-xs font-mono font-bold text-red-600 mt-0.5">
                          {srv.number}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                            {srv.title}
                          </div>
                          <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                            {srv.shortDesc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#portfolio" className="text-sm font-bold text-slate-800 hover:text-red-600 transition-colors">
                Portfolio
              </a>
              <a href="#contact" className="text-sm font-bold text-slate-800 hover:text-red-600 transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Template Red CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/30 transition-all transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Grid Menu Icon Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors shadow-md"
                aria-label="Toggle Menu"
              >
                <div className="grid grid-cols-2 gap-1 w-4 h-4">
                  <span className="w-1.5 h-1.5 rounded-sm bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-sm bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-sm bg-white"></span>
                  <span className="w-1.5 h-1.5 rounded-sm bg-white"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative w-full max-w-xs bg-white h-full p-6 flex flex-col justify-between shadow-2xl z-10 animate-slide-left">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <img
                  src="/images/metaseeds_logo.png"
                  alt="Meta Seeds Logo"
                  className="h-14 w-auto object-contain contrast-[1.15]"
                />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg bg-slate-100 text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3 py-6">
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-red-600">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-red-600">About Us</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-red-600">Services</a>
                <a href="#/iot" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-red-600">IoT Services</a>
                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-red-600">Portfolio</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-red-600">Contact Us</a>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-red-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
