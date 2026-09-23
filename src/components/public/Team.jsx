import React from 'react';
import { useContent } from '../../context/ContentContext';

export const Team = () => {
  const { content } = useContent();
  const { team = [] } = content;

  // Exact template blob background accents (Green, Red, Blue, Orange)
  const blobAccents = [
    {
      blobBg: 'bg-emerald-400',
      shapeStyle: 'rounded-[40%_60%_70%_30%/40%_50%_60%_50%]',
    },
    {
      blobBg: 'bg-rose-500',
      shapeStyle: 'rounded-[60%_40%_30%_70%/50%_40%_50%_60%]',
    },
    {
      blobBg: 'bg-sky-500',
      shapeStyle: 'rounded-[40%_60%_70%_30%/50%_60%_30%_60%]',
    },
    {
      blobBg: 'bg-amber-500',
      shapeStyle: 'rounded-[60%_40%_40%_60%/60%_30%_70%_40%]',
    },
  ];

  return (
    <section id="team" className="py-20 sm:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Background circle watermark on left */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 rounded-full bg-slate-200/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Template Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
            Our Specialists Worker
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Meet our expert team works <br className="hidden sm:block" /> for your business
          </h2>
        </div>

        {/* 4 Team Member Cards with Blob Cutout Shape */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const blob = blobAccents[index % blobAccents.length];

            return (
              <div
                key={member.id || index}
                className="text-center group reveal"
              >
                {/* Organic Colored Blob Image Frame (Template Style) */}
                <div className="relative w-56 h-64 mx-auto mb-5 flex items-center justify-center">
                  <div className={`absolute inset-0 ${blob.blobBg} ${blob.shapeStyle} opacity-90 group-hover:scale-105 transition-transform duration-500`} />
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`relative w-48 h-56 object-cover ${blob.shapeStyle} shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>

                {/* Member Name & Role */}
                <h3 className="text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
