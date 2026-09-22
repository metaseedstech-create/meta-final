import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Folder, Plus, Trash2, ExternalLink } from '../Icons';

export const AdminPortfolio = () => {
  const { content, updateSection } = useContent();
  const [portfolio, setPortfolio] = useState([...(content.portfolio || [])]);
  const [categories, setCategories] = useState([
    ...(content.portfolioCategories || ['All', 'Web Design', 'Brand Logos', 'Posters', 'SEO', 'Meta Ads']),
  ]);

  const handleItemChange = (index, field, value) => {
    const updated = [...portfolio];
    updated[index] = { ...updated[index], [field]: value };
    setPortfolio(updated);
  };

  const handleAddProject = () => {
    setPortfolio([
      {
        id: `p-${Date.now()}`,
        title: 'New Client Project',
        category: 'Web Design',
        clientType: 'Website Development',
        location: 'Coimbatore, India',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        link: 'https://example.com',
      },
      ...portfolio,
    ]);
  };

  const handleDeleteProject = (index) => {
    if (window.confirm('Delete this portfolio project?')) {
      setPortfolio(portfolio.filter((_, i) => i !== index));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('portfolio', portfolio);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Folder className="w-5 h-5 text-blue-400" />
            <span>Customize Portfolio Case Studies ({portfolio.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Add live client websites, logo redesigns, posters, and Meta Ads case studies with preview thumbnails.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddProject}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Case Study</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Portfolio</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.map((item, idx) => (
          <div
            key={item.id || idx}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 relative group"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-blue-400">
                CASE STUDY #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => handleDeleteProject(idx)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                title="Delete Project"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Project Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => handleItemChange(idx, 'title', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Category Tab</label>
                <select
                  value={item.category}
                  onChange={(e) => handleItemChange(idx, 'category', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0d1430] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="Web Design">Web Design</option>
                  <option value="Brand Logos">Brand Logos</option>
                  <option value="Posters">Posters</option>
                  <option value="SEO">SEO</option>
                  <option value="Meta Ads">Meta Ads</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Client Tag / Type</label>
                <input
                  type="text"
                  value={item.clientType || ''}
                  onChange={(e) => handleItemChange(idx, 'clientType', e.target.value)}
                  placeholder="e.g. Website Development"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Location / Market</label>
                <input
                  type="text"
                  value={item.location || ''}
                  onChange={(e) => handleItemChange(idx, 'location', e.target.value)}
                  placeholder="e.g. Coimbatore, India"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Live Project URL</label>
                <input
                  type="text"
                  value={item.link || ''}
                  onChange={(e) => handleItemChange(idx, 'link', e.target.value)}
                  placeholder="https://client-site.com"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Image URL</label>
              <input
                type="url"
                value={item.image || ''}
                onChange={(e) => handleItemChange(idx, 'image', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-xl border border-white/10 mt-2"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
