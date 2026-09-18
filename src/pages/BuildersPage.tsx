import React from 'react';
import { ArrowLeft, Blocks, Users, AlertCircle, LayoutDashboard, BookOpen, ArrowRight, UploadCloud, CheckCircle2, Globe, Server } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from '../components/RevealOnScroll';

interface BuildersPageProps {
  onNavigate: (path: string) => void;
}

export const BuildersPage: React.FC<BuildersPageProps> = ({ onNavigate }) => {
  const { t } = useI18n();

  const handleOpenDashboard = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/developer/dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDocs = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#journey') || document.querySelector('#architecture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack select-none">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.builders.backHome}</span>
        </button>
      </div>

      {/* 1. Hero Section for Builders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-24">
        <RevealOnScroll animation="fade-up">
          <div className="max-w-3xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
              <span>{t.builders.badgeStatus}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-offWhite tracking-tight leading-[1.1] mb-6">
              {t.builders.headline}
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 font-medium leading-relaxed mb-6">
              {t.builders.subtitle}
            </p>

            {/* Mascot Companion Pill for Builders */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-brand-darkSurface border-2 border-brand-lavender/40 rounded-2xl shadow-brutal-xs mb-8">
              <img
                src={siteConfig.mascots.proud}
                alt="NED Teddy proud"
                className="w-9 h-9 object-contain drop-shadow flex-shrink-0"
                loading="lazy"
              />
              <span className="text-xs sm:text-sm font-bold text-brand-lavender">
                {t.mascot.buildersTip}
              </span>
            </div>

            {/* 2 Buttons: Primary = Truy cập Dashboard, Secondary = Đọc Tài liệu API */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="/developer/dashboard"
                onClick={handleOpenDashboard}
                className="btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2.5 shadow-brutal cursor-pointer"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>{t.builders.btnDashboard}</span>
                <ArrowRight className="w-4 h-4 text-brand-lime" />
              </a>

              <a
                href="#journey"
                onClick={handleOpenDocs}
                className="btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal cursor-pointer bg-white text-brand-inkBlack hover:bg-stone-50"
              >
                <BookOpen className="w-5 h-5 text-brand-deepPurple" />
                <span>{t.builders.btnDocs}</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* 2. Explain Mini-App Section */}
      <section className="w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-inkBlack">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll animation="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs">
                  <span>Kiến trúc định hướng</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-inkBlack tracking-tight mb-4">
                  {t.builders.explainTitle}
                </h2>
                <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6">
                  {t.builders.explainDesc}
                </p>

                <div className="p-4 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-stone-700">
                    {t.builders.explainNote}
                  </span>
                </div>
              </div>

              {/* Simple Modular Diagram */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-white border-4 border-brand-inkBlack rounded-3xl p-6 shadow-brutal-xl">
                  <div className="text-xs font-black uppercase tracking-wider text-stone-500 mb-4 pb-2 border-b-2 border-brand-inkBlack">
                    Sơ đồ Kiến trúc Sandbox
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs">
                      <span>N.E.D Wallet Host UI</span>
                      <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack">Ví chủ</span>
                    </div>

                    <div className="p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl font-black text-sm text-center shadow-brutal-xs">
                      <div className="text-[10px] text-stone-500 uppercase font-black mb-1">Sandbox Web Container</div>
                      <div className="text-brand-inkBlack">DApp Độc Lập của Builder</div>
                      <div className="text-[10px] text-stone-600 font-bold mt-1">Tự lưu trữ • Khai báo URL qua Dashboard</div>
                    </div>

                    <div className="p-3 bg-brand-cyan border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs">
                      <span>Solana Devnet Settlement</span>
                      <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack">USDC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3. Platform Values (2 core values) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-brand-offWhite tracking-tight mb-3">
              {t.builders.valuesTitle}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-medium">
              Mục tiêu định hướng nền tảng nhằm đem lại lợi ích song hành cho cả người dùng và đối tác phát triển.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RevealOnScroll animation="fade-up" delay={0} className="h-full">
            <div className="h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive">
              <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.builders.val1Title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-stone-300 leading-relaxed">
                {t.builders.val1Desc}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delay={140} className="h-full">
            <div className="h-full bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-8 shadow-brutal card-brutal-interactive">
              <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
                <Blocks className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-brand-offWhite mb-3">
                {t.builders.val2Title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-stone-300 leading-relaxed">
                {t.builders.val2Desc}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 4. Automated Developer Journey (3 Steps) */}
      <section id="journey" className="w-full bg-brand-darkSurface text-brand-offWhite py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-inkBlack">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs">
                <span>{t.builders.journeyBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
                {t.builders.journeyTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 font-bold">
                {t.builders.journeyNotice}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
            {/* Step 1: Build & Tự Host */}
            <RevealOnScroll animation="fade-up" delay={0} className="h-full">
              <div className="h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5">
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-lavender mb-1">
                    Bước 01
                  </div>
                  <h3 className="text-xl font-black mb-2.5 text-brand-offWhite">
                    {t.builders.step1Title}
                  </h3>
                  <p className="text-sm font-medium text-stone-300 leading-relaxed">
                    {t.builders.step1Desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-lavender/20 flex items-center gap-2 text-xs font-bold text-stone-400">
                  <Globe className="w-3.5 h-3.5 text-brand-lime" />
                  <span>Chủ động hạ tầng & dữ liệu</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 2: Submit qua Portal */}
            <RevealOnScroll animation="fade-up" delay={120} className="h-full">
              <div className="h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-cyan mb-1">
                    Bước 02
                  </div>
                  <h3 className="text-xl font-black mb-2.5 text-brand-offWhite">
                    {t.builders.step2Title}
                  </h3>
                  <p className="text-sm font-medium text-stone-300 leading-relaxed">
                    {t.builders.step2Desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-cyan/20 flex items-center gap-2 text-xs font-bold text-stone-400">
                  <LayoutDashboard className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Khai báo qua Dashboard</span>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 3: Duyệt & Lên sóng */}
            <RevealOnScroll animation="fade-up" delay={240} className="h-full">
              <div className="h-full bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack font-black flex items-center justify-center border-2 border-brand-inkBlack shadow-brutal-xs mb-5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-brand-lime mb-1">
                    Bước 03
                  </div>
                  <h3 className="text-xl font-black mb-2.5 text-brand-offWhite">
                    {t.builders.step3Title}
                  </h3>
                  <p className="text-sm font-medium text-stone-300 leading-relaxed">
                    {t.builders.step3Desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brand-lime/20 flex items-center gap-2 text-xs font-bold text-stone-400">
                  <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                  <span>Phê duyệt & phân phối tự động</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. Final CTA: Bắt đầu Submit Dự án (Dẫn về Dashboard) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <RevealOnScroll animation="pop" delay={100}>
          <div className="bg-brand-lime text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-12 shadow-brutal-xl text-center">
            <div className="flex justify-center mb-4">
              <img
                src={siteConfig.mascots.waving}
                alt="NED Teddy waving"
                className="w-16 h-16 object-contain drop-shadow"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              {t.builders.ctaHeadline}
            </h2>
            <p className="text-base sm:text-lg font-bold text-stone-800 max-w-2xl mx-auto mb-8">
              {t.builders.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/developer/dashboard"
                onClick={handleOpenDashboard}
                className="btn-brutal-primary bg-brand-deepPurple text-brand-offWhite px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2.5 shadow-brutal w-full sm:w-auto cursor-pointer hover:bg-brand-deepPurple/90"
              >
                <UploadCloud className="w-5 h-5 text-brand-lime" />
                <span>{t.builders.ctaSubmit}</span>
                <ArrowRight className="w-5 h-5 text-brand-lime" />
              </a>

              <a
                href="#journey"
                onClick={handleOpenDocs}
                className="btn-brutal-secondary bg-white text-brand-inkBlack px-7 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto cursor-pointer hover:bg-stone-50"
              >
                <BookOpen className="w-5 h-5 text-brand-deepPurple" />
                <span>{t.builders.btnDocs}</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};
