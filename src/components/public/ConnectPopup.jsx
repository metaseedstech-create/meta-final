import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../../context/ContentContext';
import { X, Send, Sparkles, CheckCircle2, Clock, MessageCircle } from '../Icons';

export const ConnectPopup = () => {
  const { content, showToast } = useContent();
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(20);
  const [formData, setFormData] = useState({ name: '', contact: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef(null);

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

  // 20-second countdown timer when visible
  useEffect(() => {
    if (isVisible && secondsRemaining > 0 && !submitted) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsVisible(false); // Auto disable after 20 seconds!
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, secondsRemaining, submitted]);

  const handleClose = () => {
    setIsVisible(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleManualOpen = () => {
    setIsVisible(true);
    setSecondsRemaining(20);
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
    }, 4000);
  };

  return (
    <>
      {/* Floating Re-open Badge on Bottom-Right */}
      {!isVisible && (
        <button
          onClick={handleManualOpen}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xl shadow-blue-500/25 transition-all transform hover:scale-105"
          title="Open Quick Consultation Form"
        >
          <span>🌱 Let's Connect</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        </button>
      )}

      {/* 20-Second Auto-Disabling Popup Modal */}
      {isVisible && (
        <div className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 max-w-sm w-[calc(100vw-24px)] sm:w-[calc(100vw-48px)] bg-white border-2 border-blue-300 rounded-2xl sm:rounded-3xl shadow-2xl shadow-blue-600/20 p-4 sm:p-6 animate-slide-up overflow-hidden">
          {/* Progress Countdown Bar (20 Seconds) */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-100">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 transition-all duration-1000 ease-linear"
              style={{ width: `${(secondsRemaining / 20) * 100}%` }}
            />
          </div>

          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌱</span>
              <div>
                <h4 className="text-sm font-black text-slate-900">
                  Let's Connect — Meta Seeds
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600">
                  <Clock className="w-3 h-3" />
                  <span>Closing in {secondsRemaining}s</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-blue-50 transition-colors"
              title="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Get a <strong className="text-blue-700">100% online website & SEO roadmap</strong> for your business within 24 hours.
          </p>

          {submitted ? (
            <div className="text-center py-4 bg-blue-50 rounded-2xl border border-blue-100">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-900">Request Received!</p>
              <p className="text-[11px] text-slate-600 mt-0.5">We will reach out to you today.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <input
                type="text"
                required
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-blue-50/50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />

              <input
                type="text"
                required
                placeholder="WhatsApp Number or Email *"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-blue-50/50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />

              <input
                type="text"
                placeholder="Your Website or Requirement"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl bg-blue-50/50 border border-blue-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Get Free Online Audit</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="mt-3 pt-2.5 border-t border-blue-100 flex items-center justify-between text-[10px] text-slate-600">
            <span>⚡ 100% Online & Confidential</span>
            <span className="font-mono text-blue-700 font-bold">{secondsRemaining}s</span>
          </div>
        </div>
      )}
    </>
  );
};
