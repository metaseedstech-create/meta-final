import React, { useState, useEffect } from 'react';

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Keep loader for 1.2s for clean presentation
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600); // 600ms fade transition
      return () => clearTimeout(removeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center px-4 text-center">
        {/* Meta Seeds Official Logo with Gentle Scale Pulse */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-emerald-100/60 rounded-full blur-xl animate-pulse pointer-events-none" />
          <img
            src="/images/metaseeds_logo.png"
            alt="Meta Seeds Official Logo"
            className="h-16 sm:h-20 w-auto object-contain relative z-10 contrast-[1.1] animate-float"
          />
        </div>

        {/* Minimal Progress Track */}
        <div className="w-40 sm:w-52 h-1.5 bg-emerald-100/80 rounded-full overflow-hidden relative shadow-inner">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-full animate-loading-bar" />
        </div>

        {/* Minimal Subtext */}
        <p className="mt-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 animate-pulse">
          Loading Meta Seeds...
        </p>
      </div>
    </div>
  );
};
