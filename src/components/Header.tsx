import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { Logo } from '../assets/Logo';
import { useI18n } from '../i18n/I18nContext';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const { t, lang, setLang } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus trap / auto-focus close button when opened
  useEffect(() => {
    if (mobileMenuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDemoOpen = () => {
    setMobileMenuOpen(false);
    if (currentPath !== '/') {
      onNavigate('/');
      window.setTimeout(() => window.dispatchEvent(new CustomEvent('open-demo-guide')), 150);
      return;
    }
    window.dispatchEvent(new CustomEvent('open-demo-guide'));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-deepPurple/95 border-b-3 border-brand-inkBlack backdrop-blur-none px-4 sm:px-6 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg p-1 text-left flex items-center"
          aria-label="N.E.D Wallet Home"
        >
          <Logo isDark={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('#experience')}
            className="px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors"
          >
            {t.nav.experience}
          </button>
          <button
            onClick={handleDemoOpen}
            className="px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors"
          >
            {t.nav.getStarted}
          </button>
          <button
            onClick={() => handleNavClick('/builders')}
            className={`px-3 py-1.5 text-sm font-bold rounded-lg transition-colors border-2 ${
              currentPath === '/builders'
                ? 'bg-brand-lavender text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs'
                : 'text-brand-offWhite border-transparent hover:border-brand-lavender/50'
            }`}
          >
            {t.nav.builders}
          </button>
          <button
            onClick={() => handleNavClick('#faq')}
            className="px-3 py-1.5 text-sm font-bold text-brand-offWhite hover:text-brand-lavender rounded-lg transition-colors"
          >
            {t.nav.faq}
          </button>
        </nav>

        {/* Right Action Area */}
        <div className="hidden md:flex items-center gap-3">
          {/* Bilingual Switcher */}
          <div className="flex items-center bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs">
            <button
              onClick={() => setLang('vi')}
              className={`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${
                lang === 'vi'
                  ? 'bg-brand-lime text-brand-inkBlack border border-brand-inkBlack'
                  : 'text-stone-300 hover:text-white'
              }`}
              aria-label="Chuyển sang Tiếng Việt"
              aria-pressed={lang === 'vi'}
            >
              VI
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs font-black rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-brand-lime text-brand-inkBlack border border-brand-inkBlack'
                  : 'text-stone-300 hover:text-white'
              }`}
              aria-label="Switch to English"
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>

          {/* Primary Demo CTA Button */}
          <button
            onClick={handleDemoOpen}
            className="btn-brutal-primary px-4 py-2 rounded-xl text-sm font-black flex items-center gap-1.5"
          >
            <span>{t.nav.tryDemo}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick Lang Switch on Mobile */}
          <button
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="px-2.5 py-1 text-xs font-black bg-brand-darkSurface border-2 border-brand-inkBlack text-brand-offWhite rounded-lg shadow-brutal-xs flex items-center gap-1"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs"
            aria-label="Open Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand-deepPurple/80 backdrop-blur-sm flex justify-end md:hidden animate-in fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            ref={mobileMenuRef}
            className="w-[85%] max-w-sm h-full bg-brand-warmCream border-l-4 border-brand-inkBlack p-6 flex flex-col justify-between shadow-brutal-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-brand-inkBlack mb-6">
                <Logo isDark={false} />
                <button
                  ref={closeButtonRef}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-white border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs hover:bg-brand-paleYellow"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-brand-inkBlack" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('#experience')}
                  className="w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30"
                >
                  {t.nav.experience}
                </button>
                <button
                  onClick={handleDemoOpen}
                  className="w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30"
                >
                  {t.nav.getStarted}
                </button>
                <button
                  onClick={() => handleNavClick('/builders')}
                  className={`w-full text-left py-3 px-4 border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs ${
                    currentPath === '/builders' ? 'bg-brand-lavender' : 'bg-white hover:bg-brand-lavender/30'
                  }`}
                >
                  {t.nav.builders}
                </button>
                <button
                  onClick={() => handleNavClick('#faq')}
                  className="w-full text-left py-3 px-4 bg-white border-2 border-brand-inkBlack rounded-xl font-black text-brand-inkBlack shadow-brutal-xs hover:bg-brand-lavender/30"
                >
                  {t.nav.faq}
                </button>
              </nav>
            </div>

            {/* Bottom Controls in Drawer */}
            <div className="pt-6 border-t-2 border-brand-inkBlack flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-stone-600">Ngôn ngữ / Language:</span>
                <div className="flex bg-white border-2 border-brand-inkBlack rounded-xl p-1 shadow-brutal-xs">
                  <button
                    onClick={() => setLang('vi')}
                    className={`px-3 py-1 text-xs font-black rounded-lg ${
                      lang === 'vi' ? 'bg-brand-lime border border-brand-inkBlack' : 'text-stone-600'
                    }`}
                  >
                    VI
                  </button>
                  <button
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 text-xs font-black rounded-lg ${
                      lang === 'en' ? 'bg-brand-lime border border-brand-inkBlack' : 'text-stone-600'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <button
                onClick={handleDemoOpen}
                className="w-full py-3 bg-brand-lavender text-brand-inkBlack border-3 border-brand-inkBlack rounded-xl font-black text-sm shadow-brutal flex items-center justify-center gap-2"
              >
                <span>{t.nav.tryDemo}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
