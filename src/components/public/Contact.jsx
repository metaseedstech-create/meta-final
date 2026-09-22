import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Sparkles } from '../Icons';

export const Contact = () => {
  const { content, showToast } = useContent();
  const { settings } = content;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Custom Website Development',
    'Responsive UI/UX Design',
    'E-Commerce Online Store',
    'Search Engine Optimization (SEO)',
    'Google Ads / PPC',
    'Social Media Marketing (Meta)',
    'Branding & Identity',
  ];

  const toggleService = (srv) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please provide your name and email.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Inquiry sent! Meta Seeds team will contact you within 24 hours.', 'success');
  };

  const whatsappUrl = `https://wa.me/${(settings.whatsappNumber || '+918531807262').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    settings.whatsappMessage || 'Hello Meta Seeds, I want a free consultation!'
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-[#f0f7ff] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Info & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
                Ready to Grow With Meta Seeds?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Get in touch with our team in Coimbatore today for a free website audit, competition analysis, and customized growth roadmap.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-blue-100 flex items-start gap-4 hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    Office Location
                  </h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {settings.address || 'Near Hopes College, Coimbatore, Tamil Nadu'}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-blue-100 flex items-start gap-4 hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="text-sm font-bold text-blue-600 hover:underline transition-colors mt-0.5 block"
                  >
                    {settings.contactEmail || 'info@metaseeds.com'}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-blue-100 flex items-start gap-4 hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    Call Us Directly
                  </h4>
                  <a
                    href={`tel:${settings.contactPhone}`}
                    className="text-sm font-bold text-blue-600 hover:underline transition-colors mt-0.5 block"
                  >
                    {settings.contactPhone || '+91 85318 07262'}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-blue-100 flex items-start gap-4 hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                    Working Hours
                  </h4>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">
                    {settings.workingHours || 'Monday – Friday, 9:00 AM – 6:00 PM'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Meta Seeds on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-12 rounded-3xl bg-white border border-blue-200 shadow-xl shadow-blue-500/5">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Meta Seeds received your consultation request. A digital growth strategist will contact you at{' '}
                    <span className="text-blue-600 font-semibold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', services: [], message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-xs font-semibold text-blue-700 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Request a Free Audit & Plan</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out this quick form and Meta Seeds will prepare a tailored website & digital strategy.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-blue-50/40 border border-blue-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-blue-50/40 border border-blue-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number (WhatsApp preferred)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-blue-50/40 border border-blue-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Services You're Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const isChecked = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isChecked
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'bg-blue-50 text-slate-700 hover:bg-blue-100 border border-blue-200'
                            }`}
                          >
                            {isChecked ? '✓ ' : '+ '}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Tell Us About Your Project & Goals
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We need a modern website and Google Ads campaign to generate 50+ inquiries monthly..."
                      className="w-full px-4 py-3 rounded-xl bg-blue-50/40 border border-blue-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Submit Free Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
