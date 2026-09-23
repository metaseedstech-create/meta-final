import React from 'react';
import { Loader } from '../components/public/Loader';
import { Cursor } from '../components/public/Cursor';
import { Navbar } from '../components/public/Navbar';
import { Hero } from '../components/public/Hero';
import { About } from '../components/public/About';
import { Services } from '../components/public/Services';
import { Team } from '../components/public/Team';
import { TechPartnersCarousel } from '../components/public/TechPartnersCarousel';
import { Stats } from '../components/public/Stats';
import { Portfolio } from '../components/public/Portfolio';
import { Testimonials } from '../components/public/Testimonials';
import { Clients } from '../components/public/Clients';
import { FAQ } from '../components/public/FAQ';
import { Contact } from '../components/public/Contact';
import { CtaBanner } from '../components/public/CtaBanner';
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
        {/* 1. Hero with 2-column 3D visual & 3 Overlapping Highlight Cards */}
        <Hero />

        {/* 2. About Us with 3D Holographic Workstation Illustration */}
        <About />

        {/* 3. Our Core Services Dark Curved Carousel (6 Core Services) */}
        <Services />

        {/* 4. Meet Our Expert Team Works For Your Business (Blob Shape Profiles) */}
        <Team />

        {/* 5. Technology & Hosting Partners Carousel */}
        <TechPartnersCarousel />

        {/* 6. Proven Performance Stats */}
        <Stats />

        {/* 7. Client Reviews & Trust */}
        <Testimonials />

        {/* 8. Portfolio & Work */}
        <Portfolio />

        {/* 9. Clients List */}
        <Clients />

        {/* 10. Frequently Asked Questions */}
        <FAQ />

        {/* 11. Contact Form & Map */}
        <Contact />

        {/* 12. Full-Width High Impact Conversion CTA Banner */}
        <CtaBanner />
      </main>

      {/* 13. Deep Wavy Footer */}
      <Footer onOpenAdmin={onOpenAdmin} />

      {/* 14. Interactive Connect / Enquiry Modal Popup */}
      <ConnectPopup />
    </div>
  );
};
