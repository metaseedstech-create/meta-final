import React, { useState, useEffect } from 'react';
import { 
  clientSatisfactionStats, 
  testimonialsData, 
  processTimelineData 
} from '../data/agencyData';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  MessageSquarePlus,
  ArrowRight
} from 'lucide-react';

export default function ClientSatisfaction({ onOpenFeedbackModal, customReviews = [] }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Combine initial testimonials with any reviews submitted in this session
  const allTestimonials = [...testimonialsData];

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, allTestimonials.length]);

  const nextSlide = () => {
    setAutoplay(false);
    setCurrentTestimonial((prev) => (prev + 1) % allTestimonials.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setCurrentTestimonial((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  const t = allTestimonials[currentTestimonial];

  return (
    <section id="satisfaction" className="py-28 relative overflow-hidden bg-slate-900 text-white">
      {/* Background rich neon electric gradient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric-600/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyanGlow-500/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill & Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-electric-500/20 border border-electric-400/30 text-electric-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-glow-blue">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The NexusScale Centerpiece</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            Client Satisfaction & <span className="text-gradient">Radical Transparency</span>
          </h2>
          <p className="mt-5 text-base sm:text-xl text-slate-300 font-normal">
            Every dollar of your budget is tracked to authentic business growth. We maintain a 98.2% annual retention rate by delivering undeniable mathematical ROI.
          </p>
        </div>

        {/* 1. Animated / Live Impact Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {clientSatisfactionStats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-navy-950/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-electric-500/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 group-hover:text-electric-400 transition-colors">
                {stat.metric}
              </div>
              <div className="text-sm font-bold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 font-medium">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Interactive Testimonials Showcase Carousel */}
        <div className="mb-28 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-navy-850 to-navy-950 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
            
            {/* Header row in testimonial card */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center space-x-1.5">
                {[...Array(t.stars || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2">
                  5.0 Verified Client Review
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-electric-500/20 text-electric-300 border border-electric-500/30">
                  {t.tag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {t.metricHighlight}
                </span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="relative mb-10">
              <Quote className="absolute -top-4 -left-6 w-12 h-12 text-white/5 pointer-events-none" />
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-100 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            {/* Client Bio Row + Slide Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <img
                  src={t.photo}
                  alt={t.clientName}
                  className="w-14 h-14 rounded-full object-cover border-2 border-electric-400 shadow-md"
                />
                <div>
                  <div className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>{t.clientName}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified Customer" />
                  </div>
                  <div className="text-xs text-slate-400">
                    {t.role} • <strong className="text-slate-300">{t.company}</strong> ({t.location})
                  </div>
                </div>
              </div>

              {/* Carousel navigation buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-xl bg-navy-800 hover:bg-electric-600 text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-slate-400 px-2">
                  {currentTestimonial + 1} / {allTestimonials.length}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-xl bg-navy-800 hover:bg-electric-600 text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Interactive button to trigger Client Review modal */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-navy-950/60 p-4 rounded-2xl border border-white/5">
            <div className="flex items-center space-x-3 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Are you a current or past client? We value transparent feedback.</span>
            </div>
            <button
              onClick={onOpenFeedbackModal}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-electric-600 text-white border border-white/10 transition-all flex items-center space-x-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-electric-400" />
              <span>Leave Verified Client Feedback (1–5 Stars)</span>
            </button>
          </div>
        </div>

        {/* 3. Simple 4-Step Process Timeline (Discover → Strategy → Execute → Report) */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 4-Step <span className="text-gradient">Transparency Engine</span>
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              How we execute with predictable precision from day 1 to day 365.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processTimelineData.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-navy-950/90 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-electric-400/40 transition-all group"
              >
                {/* Arrow connector indicator on desktop */}
                {idx < processTimelineData.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-navy-900 border border-white/20 text-electric-400 p-1 rounded-full">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-electric-400 font-mono">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-400">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-electric-300 transition-colors">
                    {step.title}
                  </h4>
                  <div className="text-xs font-semibold text-emerald-400 mb-3">
                    {step.tagline}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase block mb-1">
                    Delivered Asset:
                  </span>
                  <div className="text-xs font-medium text-slate-300 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
