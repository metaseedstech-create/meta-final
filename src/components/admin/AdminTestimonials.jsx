import React, { useState } from 'react';
import { useContent } from '../../context/ContentContext';
import { Save, Star, Plus, Trash2 } from '../Icons';

export const AdminTestimonials = () => {
  const { content, updateSection } = useContent();
  const [testimonials, setTestimonials] = useState([...(content.testimonials || [])]);

  const handleChange = (index, field, value) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    setTestimonials(updated);
  };

  const handleAdd = () => {
    setTestimonials([
      {
        id: `t-${Date.now()}`,
        name: 'New Client Name',
        role: 'CEO',
        company: 'Company Name',
        rating: 5,
        review: 'Their website design and marketing strategies brought amazing results to our enterprise.',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
      },
      ...testimonials,
    ]);
  };

  const handleDelete = (index) => {
    if (window.confirm('Delete this testimonial?')) {
      setTestimonials(testimonials.filter((_, i) => i !== index));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateSection('testimonials', testimonials);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 animate-fade-in-up">
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>Customize Client Testimonials ({testimonials.length})</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Add or edit client quotes, 5-star ratings, company names, and avatar photos.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Review</span>
          </button>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Testimonials</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={t.id || idx}
            className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-4 relative group"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-amber-400">
                REVIEW #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => handleDelete(idx)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors"
                title="Delete Testimonial"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Client Name</label>
                <input
                  type="text"
                  value={t.name}
                  onChange={(e) => handleChange(idx, 'name', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Company / Business</label>
                <input
                  type="text"
                  value={t.company}
                  onChange={(e) => handleChange(idx, 'company', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-300 mb-1">Role / Designation</label>
                <input
                  type="text"
                  value={t.role || ''}
                  onChange={(e) => handleChange(idx, 'role', e.target.value)}
                  placeholder="e.g. Managing Director"
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Star Rating (1-5)</label>
                <select
                  value={t.rating || 5}
                  onChange={(e) => handleChange(idx, 'rating', Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-[#0d1430] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value={5}>★★★★★ 5 Stars</option>
                  <option value={4}>★★★★☆ 4 Stars</option>
                  <option value={3}>★★★☆☆ 3 Stars</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Review Body Text</label>
              <textarea
                rows={3}
                value={t.review}
                onChange={(e) => handleChange(idx, 'review', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">Avatar Image URL</label>
              <input
                type="url"
                value={t.avatar || ''}
                onChange={(e) => handleChange(idx, 'avatar', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
              />
              {t.avatar && (
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover mt-2 border border-white/10"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};
