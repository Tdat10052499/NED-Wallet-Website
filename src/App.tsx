import React, { useState, useEffect } from 'react';
import { I18nProvider } from './i18n/I18nContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BuildersPage } from './pages/BuildersPage';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname.startsWith('/builders') ? '/builders' : '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname.startsWith('/builders') ? '/builders' : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path.startsWith('#')) return;
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  return (
    <I18nProvider>
      <div className="flex flex-col min-h-screen bg-brand-deepPurple font-sans text-brand-inkBlack selection:bg-brand-lime selection:text-brand-inkBlack">
        {/* Persistent Neo-Brutalist Header */}
        <Header currentPath={currentPath} onNavigate={handleNavigate} />

        {/* Page Content View */}
        <div className="flex-grow">
          {currentPath === '/builders' ? (
            <BuildersPage onNavigate={handleNavigate} />
          ) : (
            <HomePage onNavigate={handleNavigate} />
          )}
        </div>

        {/* Persistent Neo-Brutalist Footer */}
        <Footer currentPath={currentPath} onNavigate={handleNavigate} />
      </div>
    </I18nProvider>
  );
};

export default App;
