import React, { useState } from 'react';
import { agencyConfig } from '../data/agencyConfig';
import { 
  Sparkles, 
  Send, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  ShieldCheck, 
  Check, 
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer({ onOpenAuditModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-electric-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          
          {/* Column 1: Agency Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-electric-600 to-cyanGlow-400 p-[1px]">
                <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-electric-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Nexus<span className="text-electric-400">Scale</span> AI
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed max-w-sm">
              The client-first AI digital marketing agency based in San Francisco, CA. 
              Engineering predictable, measurable revenue through machine learning algorithms and 100% financial transparency.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={agencyConfig.social.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-electric-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={agencyConfig.social.twitter} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-electric-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/5"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={agencyConfig.social.github} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-electric-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={agencyConfig.social.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 hover:bg-electric-600 text-slate-300 hover:text-white transition-colors flex items-center justify-center border border-white/5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certified Google Premier Partner & Meta Business Partner</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Core AI Services</a></li>
              <li><a href="#websites" className="hover:text-white transition-colors">Website Architecture</a></li>
              <li><a href="#hosting" className="hover:text-white transition-colors">Hosting & Maintenance</a></li>
              <li><a href="#satisfaction" className="hover:text-white transition-colors">Client Satisfaction</a></li>
              <li><a href="#ai-advantage" className="hover:text-white transition-colors">The AI Advantage</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Verified Case Studies</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Transparency FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Specialized Solutions
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Algorithmic SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Scaling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Meta & Google Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI 24/7 Chatbots</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Full-Stack Web Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Identity Systems</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              AI Growth Briefing
            </h4>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Join 4,500+ founders receiving our bi-weekly breakdown of shift algorithms, ad tactics, and tested AI prompts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span>Subscribed! Check your inbox for the prompt pack.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="founder@company.com"
                    className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-navy-900 border border-navy-800 text-xs text-white placeholder:text-slate-500 focus:ring-1 focus:ring-electric-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-electric-600 hover:bg-electric-500 text-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 block">
                  Zero spam. Unsubscribe in one click anytime.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright + Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {agencyConfig.name} ({agencyConfig.city}, {agencyConfig.state}). All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Attribution SLA</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-white transition-colors ml-4"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
