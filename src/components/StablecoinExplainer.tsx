import React from 'react';
import { Info, HelpCircle, CheckCircle } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export const StablecoinExplainer: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="w-full bg-brand-warmCream text-brand-inkBlack py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-lg relative overflow-hidden">
          {/* Top accent badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase shadow-brutal-xs">
              <HelpCircle className="w-4 h-4 text-brand-inkBlack" />
              <span>{t.stablecoin.badge}</span>
            </div>
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Solana USDC
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack tracking-tight mb-4">
            {t.stablecoin.headline}
          </h3>

          <div className="bg-brand-warmCream border-2 border-brand-inkBlack rounded-2xl p-5 mb-5 shadow-brutal-xs">
            <p className="text-base sm:text-lg font-bold text-stone-800 leading-relaxed">
              "{t.stablecoin.content}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-bold text-stone-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{t.stablecoin.highlightNote}</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-500">
              <Info className="w-3.5 h-3.5" />
              <span>Tìm hiểu thêm trong phần FAQ bên dưới</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
