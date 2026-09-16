import React from 'react';
import { Blocks, Layers, Sparkles, ArrowRight, Construction } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface MiniAppsPreviewProps {
  onNavigate: (path: string) => void;
}

export const MiniAppsPreview: React.FC<MiniAppsPreviewProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  const handleExploreBuilders = () => {
    onNavigate('/builders');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
            <Construction className="w-3.5 h-3.5 text-brand-lime" />
            <span>{t.miniApps.status}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-5">
            {t.miniApps.headline}
          </h2>

          <p className="text-base sm:text-lg text-stone-300 font-medium leading-relaxed">
            {t.miniApps.description}
          </p>
        </div>

        {/* 3 Geometric Extensible Architecture Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {/* Module 1 */}
          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
                <Blocks className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-lavender mb-2">
                Kiến trúc module 01
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.miniApps.card1Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.miniApps.card1Desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-lavender/20 flex items-center gap-2 text-xs font-bold text-stone-400">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Định hướng tích hợp</span>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-lime mb-2">
                Kiến trúc module 02
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.miniApps.card2Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.miniApps.card2Desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-lime/20 flex items-center gap-2 text-xs font-bold text-stone-400">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span>Định hướng tích hợp</span>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
                <Layers className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-2">
                Kiến trúc module 03
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.miniApps.card3Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.miniApps.card3Desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-cyan/20 flex items-center gap-2 text-xs font-bold text-stone-400">
              <span className="w-2 h-2 rounded-full bg-brand-lavender" />
              <span>Định hướng tích hợp</span>
            </div>
          </div>
        </div>

        {/* Builder Invitation Callout */}
        <div className="bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-10 shadow-brutal-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Bạn là nhà phát triển muốn thử nghiệm mini-app?
            </h3>
            <p className="text-base font-bold text-stone-800 leading-relaxed">
              Chúng tôi đang trong giai đoạn tiếp nhận ý tưởng và phối hợp thử nghiệm trực tiếp cùng các builder quan tâm.
            </p>
          </div>

          <button
            onClick={handleExploreBuilders}
            className="btn-brutal-primary bg-brand-deepPurple text-brand-offWhite border-3 border-brand-inkBlack px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-brutal flex-shrink-0"
          >
            <span>{t.miniApps.cta}</span>
            <ArrowRight className="w-4 h-4 text-brand-lime" />
          </button>
        </div>
      </div>
    </section>
  );
};
