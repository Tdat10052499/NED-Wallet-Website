import React from 'react';
import { Logo } from '../assets/Logo';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('/');
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-brand-deepPurple text-brand-offWhite border-t-4 border-brand-inkBlack py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-brand-lavender/20">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <button
              onClick={() => handleNavClick('/')}
              className="mb-4 text-left"
              aria-label="N.E.D Wallet Home"
            >
              <Logo isDark={true} />
            </button>
            <p className="text-sm font-medium text-stone-300 max-w-md leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black text-brand-lime">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>{t.footer.statusTag}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="text-xs font-black uppercase tracking-wider text-brand-lavender">
              {t.footer.quickLinks}
            </div>
            <nav className="flex flex-col gap-2 text-sm font-bold text-stone-300">
              <button
                onClick={() => handleNavClick('#experience')}
                className="text-left hover:text-white transition-colors"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => handleNavClick('#how-it-works')}
                className="text-left hover:text-white transition-colors"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => handleNavClick('/builders')}
                className="text-left hover:text-white transition-colors"
              >
                {t.nav.builders}
              </button>
              <button
                onClick={() => handleNavClick('#faq')}
                className="text-left hover:text-white transition-colors"
              >
                {t.nav.faq}
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <div className="text-xs font-black uppercase tracking-wider text-brand-lavender">
              {t.footer.contact}
            </div>
            <div className="text-sm font-bold text-stone-300">
              Email nhóm phát triển:
            </div>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm font-black text-brand-cyan hover:underline break-all"
            >
              {siteConfig.contactEmail}
            </a>
            <div className="text-xs text-stone-400 font-medium mt-1">
              Phản hồi hướng dẫn trong vòng 24 giờ làm việc.
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-medium text-stone-400">
          <p className="max-w-3xl leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <div className="text-stone-500 flex-shrink-0">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};
