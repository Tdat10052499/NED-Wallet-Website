import React from 'react';
import { Mail, Smartphone, Coins, AlertTriangle, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export const HowItWorks: React.FC = () => {
  const { t } = useI18n();

  const handleScrollToDemo = () => {
    const el = document.querySelector('#demo');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="relative w-full bg-brand-deepPurple text-brand-offWhite py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lime text-brand-lime font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
            <span>{t.howItWorks.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-5">
            {t.howItWorks.headline}
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-medium leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Step 1 */}
          <div className="relative bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack font-black text-xl flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs">
                  01
                </span>
                <Mail className="w-6 h-6 text-brand-lavender" />
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.howItWorks.step1Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.howItWorks.step1Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-lavender/20">
              <button
                onClick={handleScrollToDemo}
                className="text-xs font-black text-brand-lime hover:underline inline-flex items-center gap-1"
              >
                <span>Nhận email hướng dẫn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack font-black text-xl flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs">
                  02
                </span>
                <Smartphone className="w-6 h-6 text-brand-cyan" />
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.howItWorks.step2Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.howItWorks.step2Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-cyan/20">
              <span className="text-xs font-bold text-stone-400">
                Hỗ trợ thiết bị iOS & Android
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack font-black text-xl flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs">
                  03
                </span>
                <Coins className="w-6 h-6 text-brand-lime" />
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.howItWorks.step3Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.howItWorks.step3Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-lime/20">
              <span className="text-xs font-bold text-brand-lime">
                Tài sản thử nghiệm miễn phí
              </span>
            </div>
          </div>
        </div>

        {/* Mandatory Security & Test Warning Banner */}
        <div className="bg-brand-paleYellow text-brand-inkBlack border-4 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-400 border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs">
            <AlertTriangle className="w-7 h-7 text-brand-inkBlack" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-black uppercase tracking-wider text-amber-900 mb-1">
              {t.howItWorks.warningTitle}
            </div>
            <div className="text-base font-extrabold text-brand-inkBlack leading-snug">
              {t.howItWorks.warningText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
