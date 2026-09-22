import React from 'react';
import { useContent } from '../../context/ContentContext';

export const Stats = () => {
  const { content } = useContent();
  const { stats } = content;

  return (
    <section className="relative py-10 sm:py-16 bg-[#e6f1fe] border-y border-blue-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`text-center group p-4 sm:p-6 rounded-2xl bg-white/80 border border-blue-100 shadow-sm hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/10 transition-all hover:bg-white reveal reveal-scale reveal-delay-${Math.min(idx + 1, 6)}`}
            >
              <div className="flex items-center justify-center text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-sky-500 transition-all">
                  {item.count}
                </span>
                <span className="text-sky-500 text-xl sm:text-3xl sm:text-4xl font-extrabold ml-1">
                  {item.suffix}
                </span>
              </div>
              <h3 className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-tight">
                {item.title}
              </h3>
              {item.desc && (
                <p className="mt-1 text-[10px] sm:text-xs text-slate-500 font-medium leading-snug">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
