import React, { useState, useEffect } from 'react';

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Smooth progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 40);

    // Fade out after completion
    const timer = setTimeout(() => {
      setFadeOut(true);
      const hideTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(hideTimer);
    }, 1100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-all duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-6 text-center z-10 max-w-sm w-full">
        
        {/* Neat Soft Ambient Light Glow Behind Logo */}
        <div className="absolute w-48 h-48 rounded-full bg-emerald-100/60 blur-2xl animate-pulse pointer-events-none" />

        {/* Official Meta Seeds Logo */}
        <div className="relative z-10 p-3 mb-6 bg-white rounded-3xl shadow-lg shadow-emerald-500/10 border border-emerald-100 inline-flex items-center justify-center">
          <img
            src="/images/metaseeds_logo.png"
            alt="Meta Seeds Official Logo"
            className="h-20 sm:h-24 w-auto object-contain contrast-[1.08] animate-float"
          />
        </div>

        {/* Neat & Simple Minimal Emerald Loading Bar */}
        <div className="w-44 sm:w-56 h-1.5 bg-emerald-100/80 rounded-full overflow-hidden relative shadow-inner mb-3">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-full transition-all duration-150 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Clean Subtext */}
        <div className="flex items-center gap-2 text-slate-600 text-xs font-mono font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>{progress < 100 ? `Loading Meta Seeds... ${progress}%` : 'Welcome to Meta Seeds'}</span>
        </div>

      </div>
    </div>
  );
};
