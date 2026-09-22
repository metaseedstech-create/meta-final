import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Code2, Plus, Trash2 } from '../Icons';

export const AdminServices = () => {
  const { content, updateSection } = useContent();
  const [services, setServices] = useState([...(content.services || [])]);

  const handleServiceChange = (index, field, value) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  const handleItemChange = (srvIdx, itemIdx, field, value) => {
    const updated = [...services];
    const items = [...(updated[srvIdx].items || [])];
    items[itemIdx] = { ...items[itemIdx], [field]: value };
    updated[srvIdx] = { ...updated[srvIdx], items };
    setServices(updated);
  };

  const handleAddItem = (srvIdx) => {
    const updated = [...services];
    const items = [...(updated[srvIdx].items || [])];
    items.push({ title: 'New Feature', desc: 'Feature description' });
    updated[srvIdx] = { ...updated[srvIdx], items };
    setServices(updated);
  };

  const handleDeleteItem = (srvIdx, itemIdx) => {
    const updated = [...services];
    const items = updated[srvIdx].items.filter((_, i) => i !== itemIdx);
    updated[srvIdx] = { ...updated[srvIdx], items };
    setServices(updated);
  };

  const handleAddService = () => {
    const nextNum = services.length < 9 ? `0${services.length + 1}` : `${services.length + 1}`;
    setServices([
      ...services,
      {
        id: `srv-${Date.now()}`,
        number: nextNum,
        title: 'New Agency Service',
        shortDesc: 'Comprehensive solution description tailored for your clients.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        items: [
          { title: 'Feature 1', desc: 'Detail about this service capability' },
          { title: 'Feature 2', desc: 'Another key benefit for clients' },
        ],
      },
    ]);
  };

  const handleDeleteService = (index) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter((_, i) => i !== index));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('services', services);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span>Customize Core Services</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Add, remove, or edit services, including thumbnail images and nested feature bullets.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddService}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Service</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Services</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {services.map((srv, srvIdx) => (
          <div
            key={srv.id || srvIdx}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/10 space-y-6 relative group"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">
                  {srv.number}
                </span>
                <span className="text-sm font-bold text-white">
                  {srv.title || 'Untitled Service'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleDeleteService(srvIdx)}
                className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                title="Delete Service"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Number Prefix</label>
                <input
                  type="text"
                  value={srv.number}
                  onChange={(e) => handleServiceChange(srvIdx, 'number', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs text-slate-300 mb-1">Service Title</label>
                <input
                  type="text"
                  value={srv.title}
                  onChange={(e) => handleServiceChange(srvIdx, 'title', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Short Description</label>
              <textarea
                rows={2}
                value={srv.shortDesc}
                onChange={(e) => handleServiceChange(srvIdx, 'shortDesc', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Image URL</label>
              <input
                type="url"
                value={srv.image}
                onChange={(e) => handleServiceChange(srvIdx, 'image', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
              {srv.image && (
                <img
                  src={srv.image}
                  alt="Thumbnail"
                  className="w-32 h-20 object-cover rounded-lg border border-white/10 mt-2"
                />
              )}
            </div>

            {/* Nested Feature Bullets */}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Service Feature Bullets ({srv.items?.length || 0})
                </h4>
                <button
                  type="button"
                  onClick={() => handleAddItem(srvIdx)}
                  className="text-xs text-blue-400 hover:text-cyan-300 font-semibold"
                >
                  + Add Feature
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(srv.items || []).map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">
                        ITEM #{itemIdx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteItem(srvIdx, itemIdx)}
                        className="text-slate-400 hover:text-red-400"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) =>
                        handleItemChange(srvIdx, itemIdx, 'title', e.target.value)
                      }
                      placeholder="Feature Title"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 font-semibold"
                    />
                    <input
                      type="text"
                      value={item.desc}
                      onChange={(e) =>
                        handleItemChange(srvIdx, itemIdx, 'desc', e.target.value)
                      }
                      placeholder="Short feature description"
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] focus:outline-none focus:border-blue-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
