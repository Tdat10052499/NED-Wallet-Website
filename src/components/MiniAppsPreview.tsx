import React from 'react';
import { Blocks, ArrowRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

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
    <section
      id="mini-apps"
      className="scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Mascot Companion */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>{t.miniApps.statusBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4">
              {t.miniApps.headline}
            </h2>
            <p className="text-base sm:text-lg text-stone-300 font-medium leading-relaxed mb-6">
              {t.miniApps.description}
            </p>

            {/* Mascot Companion Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-darkSurface/90 border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs text-left max-w-lg mx-auto">
              <img
                src={siteConfig.mascots.laughing}
                alt="NED Teddy laughing"
                className="w-9 h-9 object-contain drop-shadow"
                loading="lazy"
              />
              <span className="text-xs sm:text-sm font-bold text-brand-lavender">
                {t.mascot.miniAppsTip}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* 2-Column Showcase: Left = Real App Screenshot Chassis, Right = Modular Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-14">
          {/* Left Column: Real App MiniApps Hub Screenshot */}
          <div className="lg:col-span-5 flex justify-center">
            <RevealOnScroll animation="fade-up" delay={50} className="w-full max-w-sm">
              <div className="relative">
                {/* Mascot Peeking Over Top Frame */}
                <div className="absolute -top-7 -right-4 z-20 flex items-center gap-1.5 bg-brand-lime text-brand-inkBlack px-3 py-1 rounded-full border-2 border-brand-inkBlack font-black text-[11px] shadow-brutal-xs rotate-3 animate-float-slow">
                  <img
                    src={siteConfig.mascots.happy}
                    alt="NED Teddy happy"
                    className="w-5 h-5 object-contain"
                  />
                  <span>Hub Đa Tiện Ích</span>
                </div>

                {/* Neo-Brutalist Phone Frame */}
                <div className="bg-brand-darkSurface border-4 border-brand-inkBlack rounded-[2.5rem] p-3 sm:p-4 shadow-brutal-xl">
                  {/* Speaker notch */}
                  <div className="flex justify-center mb-3">
                    <div className="w-20 h-1.5 bg-stone-700 rounded-full" />
                  </div>

                  <div className="rounded-[1.8rem] overflow-hidden border-2 border-brand-inkBlack/60 bg-black aspect-[9/19] relative">
                    <img
                      src={siteConfig.screenshots.miniappsHub}
                      alt="N.E.D MiniApps Hub Screen"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Frame Footer Caption */}
                  <div className="mt-3 pt-2 text-center text-[11px] font-bold text-stone-400 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-lime" />
                    <span>Giao diện N.E.D MiniApps Hub trên Solana Devnet</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: 3 Structured Module Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Module 1 */}
            <RevealOnScroll animation="fade-up" delay={100}>
              <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs">
                    <Blocks className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-lavender bg-brand-lavender/10 px-2 py-0.5 rounded border border-brand-lavender/30">
                        Module 01 • Thanh toán
                      </span>
                      <span className="text-[10px] font-bold text-stone-400">Solana Pay Merchant</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-brand-offWhite mb-1">
                      {t.miniApps.module1}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3">
                      Quét mã QR chấp nhận thanh toán tức thì tại điểm bán (POS), tự động đối soát giao dịch trên Solana Devnet với phí xử lý 0%.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300">
                      <span className="inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" /> Mã QR Động
                      </span>
                      <span className="inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" /> Phí 0%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Module 2 */}
            <RevealOnScroll animation="fade-up" delay={200}>
              <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded border border-brand-lime/30">
                        Module 02 • Hoán đổi & Tài chính
                      </span>
                      <span className="text-[10px] font-bold text-stone-400">Jupiter Swap Lite</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-brand-offWhite mb-1">
                      {t.miniApps.module2}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3">
                      Hoán đổi token nhanh chóng với định tuyến thông minh, kết hợp các két tích lũy vi mô (Micro Savings) sinh lời theo block.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300">
                      <span className="inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" /> Định tuyến tối ưu
                      </span>
                      <span className="inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" /> Lãi tính theo block
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Module 3 */}
            <RevealOnScroll animation="fade-up" delay={300}>
              <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 sm:p-6 shadow-brutal card-brutal-interactive">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black flex-shrink-0 border-2 border-brand-inkBlack shadow-brutal-xs">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded border border-brand-cyan/30">
                        Module 03 • Đời sống & Tiện ích
                      </span>
                      <span className="text-[10px] font-bold text-stone-400">Web3 Gift Cards</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-brand-offWhite mb-1">
                      {t.miniApps.module3}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-stone-300 leading-relaxed mb-3">
                      Mua voucher ăn uống, di chuyển và nạp thẻ cào điện thoại bằng tài sản số chỉ trong một chạm mà không cần rời ví.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold text-stone-300">
                      <span className="inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lavender" /> Mã tức thì
                      </span>
                      <span className="inline-flex items-center gap-1 bg-brand-deepPurple px-2.5 py-1 rounded-lg border border-brand-inkBlack">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-lavender" /> Không cần KYC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Builder CTA Callout Box with Mascot Teddy Proud */}
        <RevealOnScroll animation="pop" delay={120}>
          <div className="relative bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start sm:items-center gap-4">
                <img
                  src={siteConfig.mascots.proud}
                  alt="NED Teddy proud"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain flex-shrink-0 drop-shadow"
                  loading="lazy"
                />
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                    Dành cho đối tác & nhà phát triển
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack">
                    Khám phá cổng hợp tác dành cho builder
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-stone-800 mt-1">
                    Xem lộ trình trao đổi ý tưởng và tích hợp MiniApp của bạn trực tiếp vào N.E.D Hub.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleExploreBuilders}
                className="btn-brutal-dark px-6 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 flex-shrink-0 cursor-pointer"
              >
                <span>{t.miniApps.cta}</span>
                <ArrowRight className="w-4 h-4 text-brand-lime" />
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
