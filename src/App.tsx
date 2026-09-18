import React, { useState, useEffect } from 'react';
import { I18nProvider } from './i18n/I18nContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BuildersPage } from './pages/BuildersPage';
import { DeveloperDashboardPage } from './pages/DeveloperDashboardPage';

export const App: React.FC = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const appPath = window.location.pathname.startsWith(basePath)
    ? window.location.pathname.slice(basePath.length) || '/'
    : window.location.pathname;
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (appPath.startsWith('/developer')) return '/developer/dashboard';
    return appPath.startsWith('/builders') ? '/builders' : '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const currentAppPath = window.location.pathname.startsWith(basePath)
        ? window.location.pathname.slice(basePath.length) || '/'
        : window.location.pathname;
      if (currentAppPath.startsWith('/developer')) {
        setCurrentPath('/developer/dashboard');
      } else if (currentAppPath.startsWith('/builders')) {
        setCurrentPath('/builders');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path.startsWith('#')) return;
    if (path !== currentPath) {
      const targetPath = basePath ? `${basePath}${path === '/' ? '' : path.slice(1)}` : path;
      window.history.pushState({}, '', targetPath);
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
          {currentPath === '/developer/dashboard' ? (
            <DeveloperDashboardPage onNavigate={handleNavigate} />
          ) : currentPath === '/builders' ? (
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
