import React, { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';
import { X, Send, Sparkles, CheckCircle2, MessageCircle } from '../Icons';

export const ConnectPopup = () => {
  const { content, showToast } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);

  // Trigger popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!hasTriggered && window.scrollY > 300) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleManualOpen = () => {
    setIsVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) {
      showToast('Please enter your name and email/phone.', 'error');
      return;
    }
    setSubmitted(true);
    showToast('Consultation request received! Meta Seeds will connect shortly.', 'success');
    setTimeout(() => {
      setIsVisible(false);
      // Reset form after closing
      setTimeout(() => setSubmitted(false), 500);
    }, 4000);
  };

  return (
    <>
      {/* Floating Re-open Badge on Bottom-Right */}
      {!isVisible && (
        <button
          onClick={handleManualOpen}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#0a184e] hover:bg-red-600 text-white font-bold text-xs shadow-xl transition-all transform hover:scale-105"
          title="Open Quick Consultation Form"
        >
          <img src="/images/metaseeds_logo.png" alt="Meta Seeds Logo" className="w-5 h-5 object-contain" />
          <span>Let's Connect</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      )}

      {/* Popup Modal */}
      {isVisible && (
        <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 max-w-sm w-[calc(100vw-24px)] sm:w-[calc(100vw-48px)] bg-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <img src="/images/metaseeds_logo.png" alt="Meta Seeds Logo" className="h-8 w-auto object-contain rounded-lg" />
              <div>
                <h4 className="text-[15px] font-black text-[#0a194f] leading-tight">
                  Let's Connect — Meta Seeds
                </h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Online Now</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-blue-50 transition-colors"
              title="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
            Get a <strong className="text-blue-700">100% online website & SEO roadmap</strong> for your business within 24 hours.
          </p>

          {submitted ? (
            <div className="text-center py-6 bg-blue-50 rounded-2xl border border-blue-100">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3 drop-shadow-sm" />
              <p className="text-sm font-bold text-slate-900">Request Received!</p>
              <p className="text-xs text-slate-600 mt-1">We will reach out to you today.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 text-[13px] rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
              />

              <input
                type="text"
                required
                placeholder="WhatsApp Number or Email *"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3.5 py-2.5 text-[13px] rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
              />

              <input
                type="text"
                placeholder="Your Website or Requirement"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-3.5 py-2.5 text-[13px] rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
              />

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold text-[13px] uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Free Online Audit</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
            <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-500" /> 100% Online & Confidential</span>
          </div>
        </div>
      )}
    </>
  );
};
