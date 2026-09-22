import React, { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Clock, ChevronDown, Sparkles } from '../Icons';

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-blue-500/5 border-b border-blue-100'
            : 'bg-[#f0f7ff]/90 backdrop-blur-sm border-b border-blue-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Brand Logo - Meta Seeds */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
              🌱
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {settings.agencyName || 'Meta Seeds'}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 -mt-1">
                {settings.logoSubtitle || 'DIGITAL AGENCY'}
              </span>
            </div>
          </a>

          {/* Clean & Easy Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>

            {/* Services with Simple Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors py-2"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-72 bg-white border border-blue-100 rounded-2xl shadow-xl shadow-blue-500/10 p-2.5 animate-fade-in-up">
                  {services.map((srv) => (
                    <a
                      key={srv.id}
                      href="#services"
                      onClick={() => setServicesDropdown(false)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                    >
                      <span className="text-xs font-mono font-bold text-blue-600 mt-0.5">
                        {srv.number}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {srv.title}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {srv.shortDesc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#portfolio"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#testimonials"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Free Consultation CTA - hidden on xs, visible from sm */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 animate-pulse-glow"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-blue-50 border border-blue-200 text-slate-800 hover:bg-blue-100 transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5 text-blue-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Offcanvas Drawer for Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs bg-white border-l border-blue-100 h-full p-5 flex flex-col justify-between overflow-y-auto shadow-2xl z-10 animate-slide-left">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center font-bold text-white text-base">
                    🌱
                  </div>
                  <span className="font-extrabold text-slate-900 text-lg">{settings.agencyName || 'Meta Seeds'}</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-blue-50 text-slate-600 hover:text-slate-900 hover:bg-blue-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 py-5 border-b border-blue-100">
                <p className="text-[11px] uppercase tracking-wider text-blue-600 font-bold mb-1">
                  Navigation
                </p>
                {[
                  { label: 'Home', href: '#' },
                  { label: 'Services', href: '#services' },
                  { label: 'Portfolio', href: '#portfolio' },
                  { label: 'About Us', href: '#about' },
                  { label: 'Client Reviews', href: '#testimonials' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact Us', href: '#contact' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors py-1.5 flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="py-5 space-y-3 text-xs text-slate-600">
                <p className="text-[11px] uppercase tracking-wider text-blue-600 font-bold">
                  Quick Contact
                </p>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{settings.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`mailto:${settings.contactEmail}`} className="hover:underline text-blue-600 font-medium">
                    {settings.contactEmail}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                  <a href={`tel:${settings.contactPhone}`} className="hover:underline text-blue-600 font-medium">
                    {settings.contactPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-blue-100 space-y-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
