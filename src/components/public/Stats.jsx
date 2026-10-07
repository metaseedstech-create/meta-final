import React, { useState, useEffect, useRef } from 'react';
import { useContent } from '../../context/ContentContext';
import { Laptop, Users, Rocket, Globe } from '../Icons';

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10) || 0;
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="flex items-center justify-center text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-violet-300 transition-all">
        {hasAnimated ? count : value}
      </span>
      <span className="text-cyan-400 text-xl sm:text-3xl sm:text-4xl font-extrabold ml-1">
        {suffix}
      </span>
    </div>
  );
};

export const Stats = () => {
  const { content } = useContent();
  const { stats } = content;

  const statIcons = [
    <Laptop className="w-5 h-5 text-cyan-400" />,
    <Users className="w-5 h-5 text-blue-400" />,
    <Rocket className="w-5 h-5 text-violet-400" />,
    <Globe className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section className="relative py-12 sm:py-20 bg-[#050816] border-y border-white/10 overflow-hidden text-white">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`card-3d-dark text-center group p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 transition-all reveal reveal-scale reveal-delay-${Math.min(idx + 1, 6)}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center icon-3d-badge">
                {statIcons[idx % statIcons.length]}
              </div>
              
              <AnimatedCounter value={item.count} suffix={item.suffix} />

              <h3 className="mt-3 text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                {item.title}
              </h3>
              {item.desc && (
                <p className="mt-1.5 text-[10px] sm:text-xs text-slate-400 font-medium leading-snug">
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
