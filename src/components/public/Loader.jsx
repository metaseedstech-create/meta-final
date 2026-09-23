import React, { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';

export const Loader = () => {
  const { content } = useContent();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 35);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-[#050b1e] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none">
      {/* Soft Ambient Light Glow Behind Logo Circle */}
      <div
        className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full blur-[120px] transition-all duration-500 pointer-events-none"
        style={{
          background: progress > 80 ? 'rgba(239, 68, 68, 0.25)' : progress > 60 ? 'rgba(6, 182, 212, 0.25)' : progress > 40 ? 'rgba(226, 232, 240, 0.25)' : progress > 20 ? 'rgba(34, 197, 94, 0.25)' : 'rgba(251, 191, 36, 0.25)',
          opacity: 0.4 + (progress / 100) * 0.6
        }}
      />

      {/* CENTERPIECE LOGO CIRCLE ILLUMINATION - ZERO SPINNERS */}
      <div className="relative flex flex-col items-center justify-center p-6 text-center z-10">
        
        {/* LOGO WITH ILLUMINATING CIRCULAR BACKLIGHT IGNITION */}
        <div className="relative flex items-center justify-center mb-8">
          
          {/* Dynamic Light Ring Expanding Behind Logo Circle */}
          <div
            className="absolute rounded-full transition-all duration-300 blur-2xl opacity-60"
            style={{
              width: `${140 + (progress / 100) * 60}px`,
              height: `${140 + (progress / 100) * 60}px`,
              background: progress > 80 ? 'radial-gradient(circle, #ef4444 0%, transparent 70%)' : progress > 60 ? 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' : progress > 40 ? 'radial-gradient(circle, #e2e8f0 0%, transparent 70%)' : progress > 20 ? 'radial-gradient(circle, #22c55e 0%, transparent 70%)' : 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
            }}
          />

          {/* Official HD Logo Image - Sized so Name Below Emblem is High Contrast & Readable */}
          <div className="relative z-10 p-4 flex flex-col items-center overflow-hidden rounded-3xl bg-white/90 shadow-2xl">
            {/* Shimmer Light Reflection Sweep Across Logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '1.6s' }} />
            
            <img
              src="/images/metaseeds_logo.png"
              alt="Meta Seeds Tech Official Logo"
              className="h-32 sm:h-44 w-auto object-contain transition-all duration-300 contrast-[1.15]"
              style={{
                filter: `drop-shadow(0 0 ${12 + (progress / 100) * 35}px ${
                  progress > 80 ? 'rgba(239, 68, 68, 0.85)' : progress > 60 ? 'rgba(6, 182, 212, 0.85)' : progress > 40 ? 'rgba(226, 232, 240, 0.85)' : progress > 20 ? 'rgba(34, 197, 94, 0.85)' : 'rgba(251, 191, 36, 0.85)'
                })`,
                opacity: 0.8 + (progress / 100) * 0.2
              }}
            />
          </div>
        </div>

        {/* 5 Circuit Light Nodes Illuminating Sequentially as Loading Progresses */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${progress >= 20 ? 'bg-amber-400 shadow-[0_0_12px_#fbbf24] scale-125' : 'bg-slate-700 opacity-30'}`} />
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${progress >= 40 ? 'bg-emerald-500 shadow-[0_0_12px_#22c55e] scale-125' : 'bg-slate-700 opacity-30'}`} />
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${progress >= 60 ? 'bg-slate-200 shadow-[0_0_12px_#e2e8f0] scale-125' : 'bg-slate-700 opacity-30'}`} />
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${progress >= 80 ? 'bg-cyan-400 shadow-[0_0_12px_#06b6d4] scale-125' : 'bg-slate-700 opacity-30'}`} />
            <span className={`w-3 h-3 rounded-full transition-all duration-300 ${progress >= 95 ? 'bg-red-500 shadow-[0_0_12px_#ef4444] scale-125' : 'bg-slate-700 opacity-30'}`} />
          </div>
        </div>

        {/* Minimal Progress Bar */}
        <div className="w-52 sm:w-60 h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-inner mb-3">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 via-cyan-400 to-red-500 rounded-full transition-all duration-150 shadow-[0_0_12px_rgba(239,68,68,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-2 text-slate-300 text-xs font-mono font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>{progress < 100 ? `LOADING... ${progress}%` : 'OPENING METASEEDS...'}</span>
        </div>

      </div>
    </div>
  );
};


