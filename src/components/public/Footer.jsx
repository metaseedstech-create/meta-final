import React from 'react';
import { useContent } from '../../context/ContentContext';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Settings } from '../Icons';

export const Footer = ({ onOpenAdmin }) => {
  const { content } = useContent();
  const { settings, services } = content;

  return (
    <footer className="bg-[#0b1b3d] text-slate-300 border-t border-blue-900 pt-10 sm:pt-16 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 pb-8 sm:pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-sky-400 flex items-center justify-center font-black text-white text-xl shadow-lg">
                🌱
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                {settings.agencyName || 'Meta Seeds'}
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {settings.tagline ||
                'A leading Website Development Company and Digital Marketing Agency helping brands plant the seeds of sustainable digital growth.'}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {settings.socialLinks?.instagram && (
                <a
                  href={settings.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 hover:bg-pink-600/30 hover:border-pink-400 text-slate-200 hover:text-pink-300 flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {settings.socialLinks?.linkedin && (
                <a
                  href={settings.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 hover:bg-blue-600/30 hover:border-blue-400 text-slate-200 hover:text-blue-300 flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {settings.socialLinks?.twitter && (
                <a
                  href={settings.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 hover:bg-sky-600/30 hover:border-sky-400 text-slate-200 hover:text-sky-300 flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {(services || []).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-sky-300 transition-colors block py-0.5"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Office Details
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:underline text-sky-300">
                  {settings.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${settings.contactPhone}`} className="hover:underline text-sky-300">
                  {settings.contactPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {settings.agencyName || 'Meta Seeds'}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            {/* Direct Admin Access Button */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white font-bold transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Admin CMS</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
