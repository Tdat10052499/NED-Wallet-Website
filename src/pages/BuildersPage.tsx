import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowLeft, Blocks, Zap, Users, ShieldAlert, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';

interface BuildersPageProps {
  onNavigate: (path: string) => void;
}

export const BuildersPage: React.FC<BuildersPageProps> = ({ onNavigate }) => {
  const { t, lang } = useI18n();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteConfig.contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      }
    } catch {
      // Proceed to fallback
    }

    try {
      const textarea = document.createElement('textarea');
      textarea.value = siteConfig.contactEmail;
      textarea.style.position = 'fixed';
      textarea.style.left = '-999999px';
      textarea.style.top = '-999999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback failed
    }
  };

  const mailBody = lang === 'vi' ? siteConfig.builderMailBodyVi : siteConfig.builderMailBodyEn;
  const mailtoLink = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    siteConfig.builderMailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  return (
    <div className="w-full bg-brand-deepPurple text-brand-offWhite min-h-screen selection:bg-brand-lime selection:text-brand-inkBlack">
      {/* Top Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={() => {
            onNavigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-darkSurface text-brand-offWhite border-2 border-brand-inkBlack rounded-xl font-bold text-xs shadow-brutal-xs hover:text-brand-lime transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.builders.backHome}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkSurface border-2 border-brand-lavender text-brand-lavender text-xs font-black uppercase tracking-wider mb-6 shadow-brutal-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
            <span>{t.builders.badgeStatus}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-offWhite tracking-tight leading-[1.1] mb-6">
            {t.builders.headline}
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 font-medium leading-relaxed mb-8">
            {t.builders.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={mailtoLink}
              className="btn-brutal-primary px-7 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal"
            >
              <Mail className="w-5 h-5" />
              <span>{t.builders.cta}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-brutal-secondary px-6 py-3.5 rounded-2xl text-base font-black flex items-center justify-center gap-2 shadow-brutal"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-700" />
                  <span>{t.builders.btnCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>{t.builders.btnCopy}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* What is Mini-App section */}
      <section className="w-full bg-brand-warmCream text-brand-inkBlack py-20 px-4 sm:px-6 lg:px-8 border-y-4 border-brand-inkBlack">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs">
                {t.builders.tag}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-inkBlack tracking-tight mb-5">
                {t.builders.whatIsTitle}
              </h2>
              <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6">
                {t.builders.whatIsDesc}
              </p>

              {/* Development status note */}
              <div className="bg-white border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal-sm flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs font-bold text-stone-700 leading-relaxed">
                  {t.builders.statusCardDesc}
                </p>
              </div>
            </div>

            {/* Geometric Concept Visualization */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white border-4 border-brand-inkBlack rounded-3xl p-6 shadow-brutal-xl">
                <div className="text-xs font-black uppercase tracking-wider text-stone-500 mb-4 pb-2 border-b-2 border-brand-inkBlack">
                  Cấu trúc Mini-App Concept
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-brand-lavender border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs">
                    <span>N.E.D Wallet Core UI</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack">Host</span>
                  </div>

                  <div className="p-4 bg-brand-paleYellow border-2 border-brand-inkBlack rounded-2xl font-black text-sm text-center shadow-brutal-xs">
                    <div className="text-xs text-stone-500 uppercase font-black mb-1">Sandbox Container</div>
                    <div>Ứng dụng của bạn (Mini-App)</div>
                    <div className="text-[10px] text-stone-600 font-bold mt-1">Dịch vụ • Minigame • Tiện ích</div>
                  </div>

                  <div className="p-3 bg-brand-cyan border-2 border-brand-inkBlack rounded-xl font-black text-xs flex items-center justify-between shadow-brutal-xs">
                    <span>Solana Devnet Settlement</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-brand-inkBlack">USDC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build with N.E.D Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-offWhite tracking-tight mb-4">
            {t.builders.whyBuildTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive">
            <div className="w-12 h-12 rounded-2xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-brand-offWhite mb-3">
              {t.builders.why1Title}
            </h3>
            <p className="text-sm font-medium text-stone-300 leading-relaxed">
              {t.builders.why1Desc}
            </p>
          </div>

          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive">
            <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-brand-offWhite mb-3">
              {t.builders.why2Title}
            </h3>
            <p className="text-sm font-medium text-stone-300 leading-relaxed">
              {t.builders.why2Desc}
            </p>
          </div>

          <div className="bg-brand-darkSurface border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal card-brutal-interactive">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-brand-inkBlack flex items-center justify-center font-black mb-6 border-2 border-brand-inkBlack shadow-brutal-xs">
              <Blocks className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-brand-offWhite mb-3">
              {t.builders.why3Title}
            </h3>
            <p className="text-sm font-medium text-stone-300 leading-relaxed">
              {t.builders.why3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Proposed Collaboration Journey */}
      <section className="w-full bg-brand-darkSurface text-brand-offWhite py-20 px-4 sm:px-6 lg:px-8 border-t-4 border-brand-inkBlack">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender text-brand-inkBlack border-2 border-brand-inkBlack rounded-xl text-xs font-black uppercase mb-4 shadow-brutal-xs">
              Lộ trình tiếp cận
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              {t.builders.journeyTitle}
            </h2>
            <p className="text-base text-stone-300 font-medium">
              {t.builders.journeySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal">
              <div className="text-3xl font-black text-brand-lavender mb-4">
                {t.builders.step1Num}
              </div>
              <h3 className="text-xl font-black mb-2">
                {t.builders.step1Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.builders.step1Desc}
              </p>
            </div>

            <div className="bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal">
              <div className="text-3xl font-black text-brand-cyan mb-4">
                {t.builders.step2Num}
              </div>
              <h3 className="text-xl font-black mb-2">
                {t.builders.step2Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.builders.step2Desc}
              </p>
            </div>

            <div className="bg-brand-deepPurple border-3 border-brand-inkBlack rounded-3xl p-7 shadow-brutal">
              <div className="text-3xl font-black text-brand-lime mb-4">
                {t.builders.step3Num}
              </div>
              <h3 className="text-xl font-black mb-2">
                {t.builders.step3Title}
              </h3>
              <p className="text-sm font-medium text-stone-300 leading-relaxed">
                {t.builders.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Direct CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-brand-lime text-brand-inkBlack border-4 border-brand-inkBlack rounded-3xl p-8 sm:p-12 shadow-brutal-xl text-center">
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-brand-inkBlack" />
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            {t.builders.bottomCtaTitle}
          </h2>
          <p className="text-base sm:text-lg font-bold text-stone-800 max-w-2xl mx-auto mb-8">
            {t.builders.bottomCtaDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={mailtoLink}
              className="btn-brutal-primary bg-brand-deepPurple text-brand-offWhite px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 text-brand-lime" />
              <span>Gửi đề xuất hợp tác</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="btn-brutal-secondary bg-white px-7 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-brutal w-full sm:w-auto"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-emerald-700" />
                  <span>{t.builders.btnCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>{t.builders.btnCopy}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
