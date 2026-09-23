import React, { useState, useEffect } from 'react';
import { ContentProvider } from './context/ContentContext';
import { PublicSite } from './pages/PublicSite';
import { AdminPanel } from './pages/AdminPanel';
import { IoTServices } from './pages/IoTServices';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (window.location.hash === '#/admin' || window.location.pathname === '/admin') return 'admin';
    if (window.location.hash === '#/iot') return 'iot';
    return 'public';
  });

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/admin') {
        setCurrentView('admin');
      } else if (window.location.hash === '#/iot') {
        setCurrentView('iot');
      } else if (window.location.hash === '' || window.location.hash === '#/') {
        setCurrentView('public');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAdmin = () => {
    setCurrentView('admin');
    window.location.hash = '#/admin';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewSite = () => {
    setCurrentView('public');
    window.location.hash = '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleViewIoT = () => {
    setCurrentView('iot');
    window.location.hash = '#/iot';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ContentProvider>
      {currentView === 'admin' ? (
        <AdminPanel onViewSite={handleViewSite} />
      ) : currentView === 'iot' ? (
        <IoTServices onOpenAdmin={handleOpenAdmin} onHome={handleViewSite} />
      ) : (
        <PublicSite onOpenAdmin={handleOpenAdmin} />
      )}
    </ContentProvider>
  );
}
