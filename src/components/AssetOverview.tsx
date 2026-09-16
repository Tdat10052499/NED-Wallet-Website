import React from 'react';
import { Eye, Clock, Wallet, AlertCircle } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const AssetOverview: React.FC = () => {
  const { t } = useI18n();

  return (
    <section
      id="overview"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (55%): Real App Screenshot with Brutalist Frame */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <RevealOnScroll animation="pop" delay={0}>
              {/* Outer Neo-brutalist phone frame container */}
              <div className="bg-brand-lavender/30 border-4 border-brand-inkBlack rounded-3xl p-4 sm:p-5 shadow-brutal-xl max-w-sm sm:max-w-md mx-auto">
                <div className="rounded-2xl overflow-hidden border-3 border-brand-inkBlack shadow-brutal-sm bg-white">
                  <img
                    src={siteConfig.homeScreenshotAsset}
                    alt="Giao diện tổng quan N.E.D Wallet"
                    className="w-full h-auto object-contain max-h-[580px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Caption OUTSIDE the image per blueprint specification */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase text-stone-700 shadow-brutal-xs">
                  <Eye className="w-3.5 h-3.5 text-brand-deepPurple" />
                  <span>{t.assetOverview.captionNote}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column (45%): Content, Headline & Overview Explanations */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <RevealOnScroll animation="fade-up" delay={120}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
                <span className="w-2 h-2 rounded-full bg-brand-inkBlack" />
                <span>{t.assetOverview.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5">
                {t.assetOverview.headline}
              </h2>

              <p className="text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-8">
                {t.assetOverview.description}
              </p>

              {/* Two Contextual Cards */}
              <div className="space-y-4 w-full mb-6">
                <div className="p-4 sm:p-5 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-lime border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs">
                      <Wallet className="w-5 h-5 text-brand-inkBlack" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-brand-inkBlack mb-1">
                        {t.assetOverview.balanceCardTitle}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-stone-600 leading-relaxed">
                        {t.assetOverview.balanceCardDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs">
                      <Clock className="w-5 h-5 text-brand-inkBlack" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-brand-inkBlack mb-1">
                        {t.assetOverview.recentCardTitle}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-stone-600 leading-relaxed">
                        {t.assetOverview.recentCardDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clarification Disclaimer Note */}
              <div className="flex items-start gap-2.5 p-3.5 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700">
                <AlertCircle className="w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{t.assetOverview.disclaimerNotice}</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
