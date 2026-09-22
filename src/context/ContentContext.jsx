import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultContent } from '../data/defaultContent';

const STORAGE_KEY = 'metaseeds_cms_data_v2';
const AUTH_KEY = 'metaseeds_admin_auth_v1';

const ContentContext = createContext(null);

export const ContentProvider = ({ children }) => {
  // Load content from localStorage or fallback to defaultContent
  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultContent,
          ...parsed,
          settings: { ...defaultContent.settings, ...(parsed.settings || {}) },
          hero: { ...defaultContent.hero, ...(parsed.hero || {}) },
          about: { ...defaultContent.about, ...(parsed.about || {}) },
        };
      }
    } catch (e) {
      console.error('Error loading content from localStorage:', e);
    }
    return defaultContent;
  });

  // Admin authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Toast notification system
  const [notification, setNotification] = useState(null);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type, id: Date.now() });
    setTimeout(() => {
      setNotification((curr) => (curr?.id ? null : curr));
    }, 3500);
  };

  // Save content to localStorage
  const saveContent = (updatedData) => {
    try {
      setContent(updatedData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      showToast('Changes saved successfully!', 'success');
      return true;
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      showToast('Error saving changes. Check storage quota.', 'error');
      return false;
    }
  };

  // Update specific section
  const updateSection = (sectionKey, newSectionData) => {
    const updated = {
      ...content,
      [sectionKey]: newSectionData,
    };
    return saveContent(updated);
  };

  // Reset to original defaults
  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setContent(defaultContent);
      showToast('All content has been reset to Meta Seeds defaults.', 'info');
    } catch (e) {
      console.error('Failed to reset content:', e);
    }
  };

  // Export JSON file
  const exportData = () => {
    try {
      const jsonStr = JSON.stringify(content, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `metaseeds-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Backup JSON downloaded!', 'success');
    } catch (e) {
      console.error('Export failed:', e);
      showToast('Export failed', 'error');
    }
  };

  // Import JSON file
  const importData = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!imported.hero || !imported.settings) {
          throw new Error('Invalid schema format');
        }
        saveContent(imported);
        showToast('Website content imported successfully!', 'success');
      } catch (err) {
        showToast('Invalid JSON file format', 'error');
      }
    };
    reader.readAsText(file);
  };

  // Login handler
  const login = (password) => {
    const validPassword = content.settings.adminPassword || 'admin';
    if (password === validPassword) {
      setIsAuthenticated(true);
      try {
        localStorage.setItem(AUTH_KEY, 'true');
      } catch {}
      showToast('Welcome to the Meta Seeds Admin Dashboard!', 'success');
      return true;
    } else {
      showToast('Incorrect password. Try again.', 'error');
      return false;
    }
  };

  // Logout handler
  const logout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch {}
    showToast('Logged out of Admin Panel', 'info');
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        saveContent,
        updateSection,
        resetToDefaults,
        exportData,
        importData,
        isAuthenticated,
        login,
        logout,
        notification,
        showToast,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
