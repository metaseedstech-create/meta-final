import React from 'react';
import { useContent } from '../../context/ContentContext';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, Settings } from '../Icons';
import { MetaSeedsMark } from './MetaSeedsMark';

export const Footer = ({ onOpenAdmin }) => {
  const { content } = useContent();
  const { settings, services = [] } = content;

  return (
    <footer className="bg-[#0a194f] text-slate-300 relative overflow-hidden">
      {/* Dynamic Curved Top Wave SVG */}
      <div className="w-full overflow-hidden leading-none pointer-events-none -mb-1">
        <svg
          className="relative block w-full h-10 sm:h-16 text-[#f8fafc]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C300,90 600,-40 900,60 C1050,110 1150,40 1200,80 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Official Meta Seeds HD Logo with Small White Background Badge Shape */}
            <a href="#" className="inline-block group py-1">
              <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center border border-white/20">
                <img
                  src="/images/metaseeds_logo.png"
                  alt="Meta Seeds Tech Official Logo"
                  className="h-14 sm:h-16 w-auto object-contain contrast-[1.05]"
                />
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {settings.tagline ||
                'Meta Seeds is a multi-faceted technology organization formed with a vision to become a leader in Web Development, SEO, IoT Services, eCommerce Platforms, and Research Projects.'}
            </p>
          </div>

          {/* Col 2: Our Services (Template style with » bullets) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {(services || []).map((s) => (
                <a
                  key={s.id}
                  href={s.title.toLowerCase().includes('iot') ? '#/iot' : '#services'}
                  className="hover:text-red-400 transition-colors flex items-center gap-1.5 py-1 text-slate-300 font-medium"
                >
                  <span className="text-red-500 font-bold">»</span>
                  <span>{s.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4">
              Contacts
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 font-medium">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${settings.contactPhone}`} className="hover:text-white">
                  {settings.contactPhone || '+91 85318 07262'}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{settings.address || 'Near Hopes College, Coimbatore, Tamil Nadu 641001'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-white">
                  {settings.contactEmail || 'info@metaseeds.com'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar (Template Style) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            Copyright © {new Date().getFullYear()} Meta Seeds. All right reserved
          </p>

          {/* Social Icons & Admin CMS Link */}
          <div className="flex items-center gap-4">
            <a href={settings.socialLinks?.facebook || '#'} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href={settings.socialLinks?.instagram || '#'} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href={settings.socialLinks?.twitter || '#'} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href={settings.socialLinks?.linkedin || '#'} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenAdmin}
              className="ml-3 inline-flex items-center gap-1.5 text-blue-300 hover:text-white font-bold transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
