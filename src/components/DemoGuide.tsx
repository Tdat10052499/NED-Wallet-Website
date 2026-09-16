import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Sparkles, AlertCircle } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';

export const DemoGuide: React.FC = () => {
  const { t, lang } = useI18n();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API fails
      const textarea = document.createElement('textarea');
      textarea.value = siteConfig.contactEmail;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const mailBody = lang === 'vi' ? siteConfig.demoMailBodyVi : siteConfig.demoMailBodyEn;
  const mailtoLink = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    siteConfig.demoMailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  return (
    <section id="demo" className="relative w-full bg-brand-warmCream text-brand-inkBlack py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.demoGuide.networkBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-5">
            {t.demoGuide.headline}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed">
            {t.demoGuide.subtitle}
          </p>
        </div>

        {/* Main Interactive Contact & Onboarding Card */}
        <div className="bg-white border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Step Guidance */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h3 className="text-xl font-black text-brand-inkBlack mb-1">
                {t.demoGuide.stepsTitle}
              </h3>
              <div className="space-y-3 text-sm font-bold text-stone-700">
                <div className="p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-lavender border border-brand-inkBlack flex items-center justify-center font-black text-xs flex-shrink-0">
                    1
                  </span>
                  <span>{t.demoGuide.stepA}</span>
                </div>
                <div className="p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-cyan border border-brand-inkBlack flex items-center justify-center font-black text-xs flex-shrink-0">
                    2
                  </span>
                  <span>{t.demoGuide.stepB}</span>
                </div>
                <div className="p-3 bg-brand-warmCream border-2 border-brand-inkBlack rounded-xl flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-lime border border-brand-inkBlack flex items-center justify-center font-black text-xs flex-shrink-0">
                    3
                  </span>
                  <span>{t.demoGuide.stepC}</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="flex items-center gap-2 mt-2 text-xs font-bold text-stone-500">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Bản thử nghiệm được cấp quyền qua email phục vụ kiểm thử cộng đồng.</span>
              </div>
            </div>

            {/* Right: Direct Email & Interactive Buttons */}
            <div className="lg:col-span-5 bg-brand-deepPurple text-brand-offWhite border-3 border-brand-inkBlack rounded-2xl p-6 shadow-brutal flex flex-col items-stretch text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-inkBlack border-2 border-brand-inkBlack flex items-center justify-center mx-auto mb-4 shadow-brutal-xs">
                <Mail className="w-6 h-6" />
              </div>

              <div className="text-xs font-black uppercase text-brand-lavender tracking-wider mb-2">
                {t.demoGuide.emailLabel}
              </div>

              {/* Selectable Email Box */}
              <div className="bg-brand-darkSurface border-2 border-brand-inkBlack rounded-xl p-3 text-sm sm:text-base font-black text-brand-lime tracking-wide select-all mb-5">
                {siteConfig.contactEmail}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <a
                  href={mailtoLink}
                  className="btn-brutal-primary w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.demoGuide.btnMailto}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`btn-brutal w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs transition-colors ${
                    copied
                      ? 'bg-brand-lime text-brand-inkBlack'
                      : 'bg-brand-warmCream text-brand-inkBlack'
                  }`}
                  aria-label="Sao chép địa chỉ email"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800" />
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

              {/* Future Direct Demo Hook */}
              {siteConfig.demoUrl && (
                <div className="mt-4 pt-4 border-t border-brand-lavender/20">
                  <a
                    href={siteConfig.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutal-cyan w-full py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-brutal-xs"
                  >
                    <span>Mở bản build Expo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
