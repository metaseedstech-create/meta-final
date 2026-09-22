import React, { useState, useEffect } from 'react';
import { useContent } from '../../context/ContentContext';

export const Loader = () => {
  const { content } = useContent();
  const [loading, setLoading] = useState(true);
  const brandName = (content.settings.logoText || 'METASEEDS').toUpperCase();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-b from-[#ebf4ff] via-[#f2f8ff] to-[#e6f1fe] flex flex-col items-center justify-center transition-all duration-700 pointer-events-none">
      {/* Soft Ambient Light Glows */}
      <div className="absolute w-96 h-96 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-72 h-72 bg-sky-300/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center overflow-hidden z-10">
        {/* Animated Sprout / Seed Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-indigo-600 flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-blue-500/30 mb-6 animate-bounce">
          🌱
        </div>

        {/* Animated letter by letter METASEEDS */}
        <div className="flex tracking-[0.25em] text-2xl sm:text-4xl md:text-5xl font-black text-slate-900">
          {brandName.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block animate-letter-bounce text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700"
              style={{
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      
      {/* Light blue progress indicator */}
      <div className="w-48 h-1.5 bg-blue-100 rounded-full mt-6 overflow-hidden relative shadow-inner z-10">
        <div className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 animate-loading-bar rounded-full"></div>
      </div>

      <p className="text-xs text-blue-700 font-semibold mt-3.5 tracking-wider uppercase z-10">
        {content.settings.tagline || 'Growing Your Digital Presence...'}
      </p>
    </div>
  );
};
