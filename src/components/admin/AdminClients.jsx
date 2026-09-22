import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Building, Plus, Trash2 } from '../Icons';

export const AdminClients = () => {
  const { content, updateSection } = useContent();
  const [clients, setClients] = useState([...(content.clients || [])]);

  const handleChange = (index, field, value) => {
    const updated = [...clients];
    updated[index] = { ...updated[index], [field]: value };
    setClients(updated);
  };

  const handleAdd = () => {
    setClients([
      ...clients,
      {
        id: `c-${Date.now()}`,
        name: 'New Brand Partner',
        logo: '',
        category: 'Industry / Sector',
      },
    ]);
  };

  const handleDelete = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('clients', clients);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Building className="w-5 h-5 text-blue-400" />
            <span>Customize Client Brands ({clients.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Manage the brand names and logos displayed in the client marquee and trust grid.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Brand</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Clients</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((c, idx) => (
          <div
            key={c.id || idx}
            className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3 relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400">
                BRAND #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => handleDelete(idx)}
                className="p-1 text-slate-400 hover:text-red-400"
                title="Remove Brand"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Brand Name</label>
              <input
                type="text"
                value={c.name}
                onChange={(e) => handleChange(idx, 'name', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Industry / Category</label>
              <input
                type="text"
                value={c.category || ''}
                onChange={(e) => handleChange(idx, 'category', e.target.value)}
                placeholder="e.g. EdTech & AIoT"
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Logo Image URL (Optional)</label>
              <input
                type="url"
                value={c.logo || ''}
                onChange={(e) => handleChange(idx, 'logo', e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
