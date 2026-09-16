import React from 'react';
import { Blocks, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
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
      className="scroll-mt-20 relative w-full bg-brand-deepPurple text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
              <span>{t.miniApps.statusBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-offWhite tracking-tight mb-4">
              {t.miniApps.headline}
            </h2>
            <p className="text-base sm:text-lg text-stone-300 font-medium leading-relaxed">
              {t.miniApps.description}
            </p>
          </div>
        </RevealOnScroll>

        {/* Modular Extensible Architecture Visual Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Module 1 */}
          <RevealOnScroll animation="fade-up" delay={0} className="h-full">
            <div className="h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-5 border-2 border-brand-inkBlack shadow-brutal-xs">
                  <Blocks className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-brand-lavender mb-2">
                  Định hướng tích hợp 01
                </div>
                <h3 className="text-xl font-black text-brand-offWhite mb-2">
                  {t.miniApps.module1}
                </h3>
                <p className="text-sm font-medium text-stone-300 leading-relaxed">
                  Thiết kế module cho phép mở các dịch vụ tiện ích số trực tiếp từ danh mục bên trong ví.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-lavender/20 flex items-center gap-2 text-xs font-bold text-stone-400">
                <span className="w-2 h-2 rounded-full bg-brand-lime" />
                <span>Không cần rời giao diện ví</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Module 2 */}
          <RevealOnScroll animation="fade-up" delay={140} className="h-full">
            <div className="h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-5 border-2 border-brand-inkBlack shadow-brutal-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-brand-lime mb-2">
                  Định hướng tích hợp 02
                </div>
                <h3 className="text-xl font-black text-brand-offWhite mb-2">
                  {t.miniApps.module2}
                </h3>
                <p className="text-sm font-medium text-stone-300 leading-relaxed">
                  Không gian cho các ứng dụng tương tác cộng đồng và minigame gắn với định danh người dùng.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-lime/20 flex items-center gap-2 text-xs font-bold text-stone-400">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                <span>Trải nghiệm mượt mà</span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Module 3 */}
          <RevealOnScroll animation="fade-up" delay={280} className="h-full">
            <div className="h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 flex flex-col justify-between shadow-brutal card-brutal-interactive">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black mb-5 border-2 border-brand-inkBlack shadow-brutal-xs">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-2">
                  Định hướng tích hợp 03
                </div>
                <h3 className="text-xl font-black text-brand-offWhite mb-2">
                  {t.miniApps.module3}
                </h3>
                <p className="text-sm font-medium text-stone-300 leading-relaxed">
                  Cơ chế thanh toán vi mô và tương tác token Devnet dễ dàng thông qua các API nội bộ dự kiến.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-cyan/20 flex items-center gap-2 text-xs font-bold text-stone-400">
                <span className="w-2 h-2 rounded-full bg-brand-lavender" />
                <span>Tiếp cận người dùng sớm</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Builder CTA Callout Box */}
        <RevealOnScroll animation="pop" delay={120}>
          <div className="bg-brand-lavender text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-8 shadow-brutal-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-stone-700 mb-1">
                Dành cho đối tác & nhà phát triển
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-inkBlack">
                Khám phá cổng hợp tác dành cho builder
              </h3>
              <p className="text-sm sm:text-base font-bold text-stone-800 mt-1">
                Xem lộ trình trao đổi ý tưởng và phối hợp thử nghiệm tích hợp cùng đội ngũ N.E.D.
              </p>
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
        </RevealOnScroll>
      </div>
    </section>
  );
};
