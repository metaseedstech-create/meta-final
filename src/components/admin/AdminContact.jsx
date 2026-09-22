import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Phone, Mail, MapPin, Clock, MessageCircle } from '../Icons';

export const AdminContact = () => {
  const { content, updateSection } = useContent();
  const [settings, setSettings] = useState({ ...content.settings });

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
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
            <Phone className="w-5 h-5 text-blue-400" />
            <span>Customize Contact Details & WhatsApp</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Update your Coimbatore office address, contact numbers, email inbox, and WhatsApp chat links.
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Contact Info</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Office Address */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Physical Address</span>
          </div>
          <textarea
            rows={3}
            value={settings.address || ''}
            onChange={(e) => handleChange('address', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>

        {/* Working Hours */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>Working Hours</span>
          </div>
          <input
            type="text"
            value={settings.workingHours || ''}
            onChange={(e) => handleChange('workingHours', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Official Email</span>
          </div>
          <input
            type="email"
            value={settings.contactEmail || ''}
            onChange={(e) => handleChange('contactEmail', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Phone Number</span>
          </div>
          <input
            type="tel"
            value={settings.contactPhone || ''}
            onChange={(e) => handleChange('contactPhone', e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* WhatsApp Section */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-emerald-500/20 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Quick Contact Configuration</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-slate-300 mb-1">
              WhatsApp Number (with country code, e.g. +918531807262)
            </label>
            <input
              type="text"
              value={settings.whatsappNumber || ''}
              onChange={(e) => handleChange('whatsappNumber', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Default Inquiry Message
            </label>
            <input
              type="text"
              value={settings.whatsappMessage || ''}
              onChange={(e) => handleChange('whatsappMessage', e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
