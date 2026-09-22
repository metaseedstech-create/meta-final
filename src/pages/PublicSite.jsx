import React from 'react';
import { Loader } from '../components/public/Loader';
import { Cursor } from '../components/public/Cursor';
import { Navbar } from '../components/public/Navbar';
import { Hero } from '../components/public/Hero';
import { Stats } from '../components/public/Stats';
import { Services } from '../components/public/Services';
import { Portfolio } from '../components/public/Portfolio';
import { About } from '../components/public/About';
import { Testimonials } from '../components/public/Testimonials';
import { Clients } from '../components/public/Clients';
import { FAQ } from '../components/public/FAQ';
import { Contact } from '../components/public/Contact';
import { TechPartnersCarousel } from '../components/public/TechPartnersCarousel';
import { ConnectPopup } from '../components/public/ConnectPopup';
import { Footer } from '../components/public/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useContent } from '../context/ContentContext';

export const PublicSite = ({ onOpenAdmin }) => {
  const { content } = useContent();
  // Activates scroll-triggered reveal animations site-wide
  useScrollReveal();

  return (
    <div data-theme={content.settings.themeColor || 'blue'} className="min-h-screen bg-[#f0f7ff] text-slate-800 font-sans selection:bg-blue-600 selection:text-white relative">
      <Loader />
      <Cursor />
      <Navbar onOpenAdmin={onOpenAdmin} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Clients />
        <FAQ />
        <Contact />
        {/* Technology & Hosting Partners Carousel */}
        <TechPartnersCarousel />
      </main>
      <Footer onOpenAdmin={onOpenAdmin} />
      {/* 20-second Auto-Disabling Scroll Popup */}
      <ConnectPopup />
    </div>
  );
};
