import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Sparkles, AlertTriangle } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const DemoGuide: React.FC = () => {
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

  const mailBody = lang === 'vi' ? siteConfig.demoMailBodyVi : siteConfig.demoMailBodyEn;
  const mailtoLink = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    siteConfig.demoMailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  const steps = [
    {
      num: t.demoGuide.step1Num,
      title: t.demoGuide.step1Title,
      desc: t.demoGuide.step1Desc,
      color: 'bg-brand-lavender',
    },
    {
      num: t.demoGuide.step2Num,
      title: t.demoGuide.step2Title,
      desc: t.demoGuide.step2Desc,
      color: 'bg-brand-cyan',
    },
    {
      num: t.demoGuide.step3Num,
      title: t.demoGuide.step3Title,
      desc: t.demoGuide.step3Desc,
      color: 'bg-brand-lime',
    },
  ];

  return (
    <section
      id="demo"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.demoGuide.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4">
              {t.demoGuide.headline}
            </h2>
            <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed">
              {t.demoGuide.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* 3 Step Cards Horizontal Row on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, idx) => (
            <RevealOnScroll key={step.num} animation="fade-up" delay={idx * 120} className="h-full">
              <div className="h-full bg-white border-3 border-brand-inkBlack rounded-3xl p-6 sm:p-7 shadow-brutal card-brutal-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`w-12 h-12 rounded-2xl ${step.color} border-2 border-brand-inkBlack flex items-center justify-center font-black text-xl text-brand-inkBlack shadow-brutal-xs`}
                    >
                      {step.num}
                    </span>
                    <span className="text-[10px] font-black uppercase text-stone-500 tracking-wider">
                      Bước {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-brand-inkBlack mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Contact & Demo Action Card */}
        <RevealOnScroll animation="pop" delay={150}>
          <div className="bg-brand-deepPurple text-brand-offWhite border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left explanation */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black uppercase tracking-wider text-brand-lavender mb-3">
                  <Mail className="w-3.5 h-3.5 text-brand-lime" />
                  <span>{t.demoGuide.contactCardTitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3 text-brand-offWhite">
                  Nhận quyền truy cập thử nghiệm qua email
                </h3>
                <p className="text-sm sm:text-base text-stone-300 font-medium leading-relaxed">
                  Bản demo được điều phối trực tiếp qua email để đảm bảo hướng dẫn cài đặt Expo đúng với thiết bị của bạn và tiếp nhận phản hồi hiệu quả.
                </p>
              </div>

              {/* Right Email and Actions */}
              <div className="lg:col-span-5 bg-brand-darkSurface border-3 border-brand-inkBlack rounded-2xl p-5 shadow-brutal flex flex-col items-stretch text-center">
                <div className="text-xs font-black uppercase tracking-wider text-stone-400 mb-2">
                  {t.demoGuide.emailLabel}
                </div>

                {/* Selectable Email Box */}
                <div className="bg-brand-deepPurple border-2 border-brand-inkBlack rounded-xl p-3 text-sm sm:text-base font-black text-brand-lime tracking-wide select-all mb-4">
                  {siteConfig.contactEmail}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2.5">
                  <a
                    href={mailtoLink}
                    className="btn-brutal-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{t.demoGuide.btnMailto}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`btn-brutal w-full py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs transition-colors cursor-pointer ${
                      copied
                        ? 'bg-brand-lime text-brand-inkBlack'
                        : 'bg-white text-brand-inkBlack'
                    }`}
                    aria-label="Sao chép địa chỉ email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-800 stroke-[3]" />
                        <span>{t.demoGuide.btnCopied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{t.demoGuide.btnCopy}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Future Direct Demo Hook (only if configured) */}
                {siteConfig.demoUrl && (
                  <div className="mt-3 pt-3 border-t border-brand-lavender/20">
                    <a
                      href={siteConfig.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-brutal-cyan w-full py-2 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-brutal-xs"
                    >
                      <span>Mở bản build Expo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Test Environment Warning Callout */}
        <RevealOnScroll animation="fade-up" delay={200}>
          <div className="bg-brand-paleYellow text-brand-inkBlack border-3 border-brand-inkBlack rounded-2xl p-4 sm:p-5 shadow-brutal-sm flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400 border-2 border-brand-inkBlack flex items-center justify-center flex-shrink-0 shadow-brutal-xs">
              <AlertTriangle className="w-5 h-5 text-brand-inkBlack stroke-[2.5]" />
            </div>
            <div className="text-xs sm:text-sm font-black text-brand-inkBlack leading-snug">
              {t.demoGuide.warningNotice}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
