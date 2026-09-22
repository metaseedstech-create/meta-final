import React, { useState, useEffect } from 'react';
import { agencyConfig } from '../data/agencyConfig';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Building,
  ArrowRight
} from 'lucide-react';

export default function Contact({ preselectedService, onAuditSuccess }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Algorithmic SEO & Keyword Dominance',
    budget: '$3,000 – $6,000 / mo',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormState((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onAuditSuccess) onAuditSuccess();
    }, 1200);
  };

  const servicesList = [
    'Algorithmic SEO & Keyword Dominance',
    'Autonomous Social Media Management',
    'Precision Google & Meta Paid Ads',
    'Next-Gen High-Converting Web Architecture',
    'Autonomous 24/7 AI Chatbots & Agents',
    'Generative Content & Premium Branding',
    'High-Converting Landing Page ($1,299)',
    'Corporate & Business Website ($2,799)',
    'Next-Gen E-Commerce Platform ($4,899)',
    'Comprehensive Full-Funnel Growth Suite'
  ];

  const budgetOptions = [
    'Under $2,000 / mo',
    '$2,000 – $5,000 / mo',
    '$5,000 – $10,000 / mo',
    '$10,000 – $25,000 / mo',
    '$25,000+ / mo (Enterprise Scale)'
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 dark:text-electric-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Schedule Your Free <span className="text-gradient">40-Point Growth Audit</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Tell us about your business. We will dissect your current customer acquisition funnels, calculate ad waste, and send you a custom strategic teardown within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office HQ Card */}
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-7 border border-slate-200 dark:border-navy-800 shadow-sm space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-electric-500/10 text-electric-500">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    San Francisco Flagship HQ
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Silicon Valley Growth Engineering Hub
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-electric-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Office Address:</strong>
                    <span>{agencyConfig.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Direct Phone:</strong>
                    <a href={`tel:${agencyConfig.phone}`} className="hover:text-electric-500 transition-colors">
                      {agencyConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-cyanGlow-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Audit & Inquiries:</strong>
                    <a href={`mailto:${agencyConfig.email}`} className="hover:text-electric-500 transition-colors">
                      {agencyConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">Working Hours:</strong>
                    <span>{agencyConfig.hours}</span>
                  </div>
                </div>
              </div>

              {/* Simulated Interactive Map Location Preview */}
              <div className="pt-2">
                <div className="relative rounded-xl overflow-hidden h-36 bg-slate-200 dark:bg-navy-950 border border-slate-300 dark:border-navy-800 flex items-center justify-center text-center p-4">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="relative z-10">
                    <div className="inline-flex p-2 rounded-full bg-electric-600 text-white shadow-glow-blue mb-1 animate-bounce">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      San Francisco Financial District
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400">
                      Montgomery & California St
                    </span>
                  </div>
                </div>
              </div>

              {/* Transparency Commitment */}
              <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center space-x-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Zero spam guarantee. Your details are strictly confidential.</span>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-7 sm:p-10 border border-slate-200 dark:border-navy-800 shadow-xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Audit Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900 dark:text-white">{formState.name}</strong>. Our senior marketing strategists in San Francisco are already conducting the forensic scan of your domain. We will email the report to <strong className="text-electric-500">{formState.email}</strong> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-500 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-500 outline-none transition-all"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Primary Service Desired
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-500 outline-none transition-all"
                      >
                        {servicesList.map((s, idx) => (
                          <option key={idx} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Estimated Monthly Marketing Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-500 outline-none transition-all"
                    >
                      {budgetOptions.map((b, idx) => (
                        <option key={idx} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Website URL & Current Growth Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. www.mycompany.com — We are currently spending $6k/mo on Meta Ads but CPA has doubled. We need higher quality leads and a faster website."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-electric-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white shadow-glow-blue bg-gradient-to-r from-electric-600 via-electric-500 to-cyanGlow-500 hover:from-electric-500 hover:to-cyanGlow-400 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Running AI Preliminary Audit...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Request Free 40-Point Growth Audit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                    Average audit delivery time: <strong>18 hours</strong> • No sales pressure guarantee
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
