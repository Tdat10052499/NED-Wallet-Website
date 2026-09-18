import React, { useState } from 'react';
import { Eye, Clock, Wallet, AlertCircle, PieChart, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const AssetOverview: React.FC = () => {
  const { t, lang } = useI18n();
  const [activeTab, setActiveTab] = useState<'home' | 'analytics'>('home');

  const screens = {
    home: {
      title: lang === 'vi' ? 'Trang Chủ Ví (Dashboard)' : 'Home Dashboard',
      caption: lang === 'vi' ? 'Thẻ US Dollar, số dư USDC và các thao tác nhanh' : 'US Dollar card, USDC balance and instant actions',
      src: siteConfig.screenshots.dashboardHome,
      badge: lang === 'vi' ? 'Trang chủ ví' : 'Wallet Home',
    },
    analytics: {
      title: lang === 'vi' ? 'Phân Tích Dòng Tiền' : 'Cashflow Analytics',
      caption: lang === 'vi' ? 'Biểu đồ thu chi, két tiết kiệm và hạn mức tháng' : 'Cashflow charts, savings vaults and monthly limits',
      src: siteConfig.screenshots.analyticsCashflow,
      badge: lang === 'vi' ? 'Quản lý tài chính' : 'Financial Hub',
    },
  };

  return (
    <section
      id="overview"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (50%): Real App Screenshot with Tab Switcher */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <RevealOnScroll animation="pop" delay={0}>
              {/* Tab Switcher */}
              <div className="flex items-center gap-2 mb-4 bg-white border-2 border-brand-inkBlack p-1 rounded-2xl shadow-brutal-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('home')}
                  className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === 'home'
                      ? 'bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs'
                      : 'text-stone-700 hover:bg-stone-100 border-2 border-transparent'
                  }`}
                >
                  Trang chủ ví
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('analytics')}
                  className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeTab === 'analytics'
                      ? 'bg-brand-cyan text-brand-inkBlack border-2 border-brand-inkBlack shadow-brutal-xs'
                      : 'text-stone-700 hover:bg-stone-100 border-2 border-transparent'
                  }`}
                >
                  Phân tích dòng tiền
                </button>
              </div>

              {/* Outer Neo-brutalist phone frame container */}
              <div className="bg-brand-inkBlack border-4 border-brand-inkBlack rounded-[40px] p-3 sm:p-4 shadow-brutal-xl max-w-xs sm:max-w-sm mx-auto">
                <div className="rounded-[28px] overflow-hidden border-2 border-brand-inkBlack bg-brand-warmCream shadow-inner">
                  <img
                    src={screens[activeTab].src}
                    alt={screens[activeTab].title}
                    className="w-full h-auto object-contain max-h-[540px] animate-appearance-smooth"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Caption OUTSIDE the image per blueprint specification */}
              <div className="mt-4 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase text-stone-700 shadow-brutal-xs">
                  <Eye className="w-3.5 h-3.5 text-brand-deepPurple" />
                  <span>{screens[activeTab].caption}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column (50%): Content, Headline & Overview Explanations */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <RevealOnScroll animation="fade-up" delay={120}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack text-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
                <span className="w-2 h-2 rounded-full bg-brand-inkBlack" />
                <span>{t.assetOverview.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight leading-[1.1] mb-5">
                {t.assetOverview.headline}
              </h2>

              <p className="text-base sm:text-lg font-medium text-stone-700 leading-relaxed mb-6">
                {t.assetOverview.description}
              </p>

              {/* Contextual Cards */}
              <div className="space-y-3.5 w-full mb-6">
                <div className="p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive">
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

                <div className="p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive">
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

                <div className="p-4 bg-white border-3 border-brand-inkBlack rounded-2xl shadow-brutal card-brutal-interactive">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs">
                      <PieChart className="w-5 h-5 text-brand-inkBlack" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-brand-inkBlack mb-1">
                        {lang === 'vi' ? 'Hạn Mức & Két Tiết Kiệm' : 'Budget Limits & Vaults'}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-stone-600 leading-relaxed">
                        {lang === 'vi'
                          ? 'Thiết lập hạn mức chi tiêu $2,000/tháng và phân loại quỹ tiết kiệm sinh lời an toàn.'
                          : 'Set smart $2,000 monthly spending limits and organize savings into secure vaults.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mascot Teddy Proud Companion Box */}
              <div className="w-full p-4 bg-brand-paleYellow border-3 border-brand-inkBlack rounded-2xl shadow-brutal flex items-center gap-4 mb-4">
                <img
                  src={siteConfig.mascots.proud}
                  alt="Teddy Mascot Proud"
                  className="w-14 h-14 object-contain flex-shrink-0"
                />
                <div>
                  <div className="text-xs font-black uppercase text-brand-deepPurple tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Teddy Đồng Hành Cùng Bạn</span>
                  </div>
                  <p className="text-xs font-bold text-stone-800 leading-relaxed mt-1">
                    {lang === 'vi'
                      ? 'N.E.D tự động phân loại mọi khoản thu, chi và chuyển tiền giúp bạn kiểm soát tài chính cá nhân như ứng dụng ngân hàng cao cấp.'
                      : 'N.E.D automatically tracks and categorizes inflows, outflows, and transfers with banking-grade clarity.'}
                  </p>
                </div>
              </div>

              {/* Clarification Disclaimer Note */}
              <div className="flex items-start gap-2.5 p-3.5 bg-white border-2 border-brand-inkBlack rounded-xl text-xs font-bold text-stone-700 shadow-brutal-xs">
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
