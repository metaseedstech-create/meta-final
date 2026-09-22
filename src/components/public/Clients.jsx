import React from 'react';
import { useContent } from '../../context/ContentContext';
import { Building } from '../Icons';

export const Clients = () => {
  const { content } = useContent();
  const { clients } = content;

  if (!clients || clients.length === 0) return null;

  return (
    <section id="clients" className="py-20 bg-[#f0f7ff] border-t border-blue-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-700 font-bold">
            Trusted by 120+ Growth-Driven Brands & Startups
          </p>
        </div>

        {/* Grid of Client Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, idx) => (
            <div
              key={client.id || idx}
              className="p-6 rounded-2xl bg-white border border-blue-100 hover:border-blue-300 flex flex-col items-center justify-center text-center transition-all group hover:bg-blue-50/50 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-8 max-w-[80%] object-contain"
                  />
                ) : (
                  <Building className="w-6 h-6" />
                )}
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {client.name}
              </h4>
              {client.category && (
                <p className="text-[11px] text-slate-500 mt-1">
                  {client.category}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
