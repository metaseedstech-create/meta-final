import React, { useState, useEffect } from 'react';
import { ContentProvider } from './context/ContentContext';
import { PublicSite } from './pages/PublicSite';
import { AdminPanel } from './pages/AdminPanel';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.hash === '#/admin' || window.location.pathname === '/admin'
      ? 'admin'
      : 'public';
  });

  // Listen to hash changes (e.g. if user navigates to #/admin)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/admin') {
        setCurrentView('admin');
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

  return (
    <ContentProvider>
      {currentView === 'admin' ? (
        <AdminPanel onViewSite={handleViewSite} />
      ) : (
        <PublicSite onOpenAdmin={handleOpenAdmin} />
      )}
    </ContentProvider>
  );
}
