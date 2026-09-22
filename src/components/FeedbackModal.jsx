import React, { useState } from 'react';
import { Star, X, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function FeedbackModal({ isOpen, onClose, onAddReview }) {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [comment, setComment] = useState('');
  const [selectedTags, setSelectedTags] = useState(['Transparency', 'ROI']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const availableTags = [
    'Transparency',
    'ROI & Revenue',
    'Speed & Delivery',
    'AI Precision',
    'Account Management',
    'Honest Reporting'
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name,
      company: company || 'Verified Client',
      rating,
      tags: selectedTags,
      comment,
      date: 'Just now'
    };

    if (onAddReview) onAddReview(newReview);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setCompany('');
      setComment('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-navy-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 dark:border-navy-700 shadow-2xl relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Thank You For Your Feedback!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Your transparent rating helps us continuously refine our AI marketing algorithms and client service benchmarks.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-electric-600 dark:text-electric-400 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Verified Client Voice</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">
              Rate Your Experience with Us
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              We hold ourselves to total transparency. How did our team and AI campaigns perform against your growth targets?
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Star Rating Select */}
              <div className="text-center py-3 bg-slate-50 dark:bg-navy-950 rounded-2xl border border-slate-100 dark:border-navy-800">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block mb-2">
                  Select Your Rating (1 to 5 Stars)
                </span>
                <div className="flex items-center justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          (hoverRating || rating) >= star
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-xs font-semibold text-amber-500 block mt-1">
                  {rating === 5 && "Outstanding — Exceeded Targets"}
                  {rating === 4 && "Great — Strong Results"}
                  {rating === 3 && "Good — Met Baseline"}
                  {rating <= 2 && "Needs Improvement"}
                </span>
              </div>

              {/* Client Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Sterling"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-electric-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                    Company / Brand
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Sterling & Co."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-electric-500"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
                  Highlights:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {availableTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-electric-600 text-white'
                            : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Review Comment */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Your Feedback / Comment *
                </label>
                <textarea
                  rows={3}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share details on your revenue lift, reporting transparency, or team speed..."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 text-xs text-slate-900 dark:text-white outline-none focus:ring-1 focus:ring-electric-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-electric-600 to-cyanGlow-500 shadow-glow-blue hover:opacity-95 transition-all"
              >
                Submit Verified Client Review
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
