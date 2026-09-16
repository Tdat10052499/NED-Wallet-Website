import React from 'react';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

interface FinalCTAProps {
  onNavigate: (path: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  const { t, lang } = useI18n();

  const mailBody = lang === 'vi' ? siteConfig.demoMailBodyVi : siteConfig.demoMailBodyEn;
  const mailtoLink = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    siteConfig.demoMailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  const handleBuilderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/builders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-brand-warmCream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll animation="pop">
          {/* Large Lavender Block with Thick Black Borders & Hard Shadow */}
          <div className="bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-14 shadow-brutal-xl text-center relative overflow-hidden">
            {/* Subtle Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-6 shadow-brutal-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-deepPurple" />
              <span>N.E.D Wallet • Solana Devnet</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
              {t.finalCta.headline}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg font-bold text-stone-800 leading-relaxed mb-8 max-w-xl mx-auto">
              {t.finalCta.description}
            </p>

            {/* Actions: Primary Mailto & Secondary Builder Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={mailtoLink}
                className="btn-brutal-primary px-8 py-4 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                <span>{t.finalCta.btnPrimary}</span>
              </a>

              <button
                type="button"
                onClick={handleBuilderClick}
                className="btn-brutal-secondary px-6 py-4 rounded-2xl text-sm sm:text-base font-black flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50"
              >
                <span>{t.finalCta.builderLink}</span>
                <ArrowRight className="w-4 h-4 text-brand-deepPurple" />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
