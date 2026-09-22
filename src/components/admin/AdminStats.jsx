import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, BarChart3, Plus, Trash2 } from '../Icons';

export const AdminStats = () => {
  const { content, updateSection } = useContent();
  const [stats, setStats] = useState([...(content.stats || [])]);

  const handleChange = (index, field, value) => {
    const updated = [...stats];
    updated[index] = { ...updated[index], [field]: value };
    setStats(updated);
  };

  const handleAdd = () => {
    setStats([
      ...stats,
      {
        id: `s-${Date.now()}`,
        count: '100',
        suffix: '+',
        title: 'New Metric',
        desc: 'Description',
      },
    ]);
  };

  const handleDelete = (index) => {
    if (stats.length <= 1) return;
    setStats(stats.filter((_, i) => i !== index));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('stats', stats);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-400" />
            <span>Customize Stats & Counters</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Edit the numbers, plus symbols, and labels shown on the public counter strip.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Counter</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Stats</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((item, idx) => (
          <div
            key={item.id || idx}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 relative group"
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-blue-400">
                COUNTER #{idx + 1}
              </span>
              {stats.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleDelete(idx)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                  title="Remove this metric"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-xs text-slate-300 mb-1">Number Count</label>
                <input
                  type="text"
                  value={item.count}
                  onChange={(e) => handleChange(idx, 'count', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Suffix</label>
                <input
                  type="text"
                  value={item.suffix || ''}
                  onChange={(e) => handleChange(idx, 'suffix', e.target.value)}
                  placeholder="+"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Title / Metric Name</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleChange(idx, 'title', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Subtitle / Context</label>
              <input
                type="text"
                value={item.desc || ''}
                onChange={(e) => handleChange(idx, 'desc', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
