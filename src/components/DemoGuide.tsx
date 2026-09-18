import React, { useState, useEffect, useRef } from 'react';
import { Mail, Copy, Check, ExternalLink, Sparkles, AlertTriangle, Play, X, Maximize2, CheckCircle2, Shield } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';

export const DemoGuide: React.FC = () => {
  const { t, lang } = useI18n();
  const [copied, setCopied] = useState(false);

  // Video State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll Progress (0 = 75% scale, blurred; 1 = 100% scale, crystal clear)
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse Follower Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start zoom when top of frame enters viewport bottom
            const start = windowHeight * 0.95;
            // Complete zoom when frame is nicely centered / comfortably viewed
            const end = windowHeight * 0.22;

            const raw = (start - rect.top) / (start - end);
            const clamped = Math.max(0, Math.min(1, raw));
            setScrollProgress(clamped);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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

  // Dynamic values calculated from scroll:
  // Initial: scale 0.75, blur 12px, opacity 0.6
  // Scroll in: scale 1.00, blur 0px, opacity 1.0
  const currentScale = 0.75 + 0.25 * scrollProgress;
  const currentBlur = (1 - scrollProgress) * 12;
  const currentOpacity = 0.6 + 0.4 * scrollProgress;

  const quickTakeaways = [
    {
      num: '01',
      title: t.demoGuide.step1Title,
      desc: t.demoGuide.step1Desc,
      color: 'bg-brand-lavender',
      tag: 'Không Seedphrase',
    },
    {
      num: '02',
      title: t.demoGuide.step2Title,
      desc: t.demoGuide.step2Desc,
      color: 'bg-brand-lime',
      tag: 'Shake & Split 20m',
    },
    {
      num: '03',
      title: t.demoGuide.step3Title,
      desc: t.demoGuide.step3Desc,
      color: 'bg-brand-cyan',
      tag: 'Định danh @tên.sol',
    },
  ];

  return (
    <section
      id="demo"
      className="scroll-mt-20 relative w-full bg-brand-warmCream text-brand-inkBlack py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-inkBlack select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <RevealOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lime border-2 border-brand-inkBlack font-black text-xs uppercase tracking-wider mb-4 shadow-brutal-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.demoGuide.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-inkBlack tracking-tight mb-4">
              {t.demoGuide.headline}
            </h2>

            <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-6">
              {t.demoGuide.subtitle}
            </p>

            {/* Mascot Tip Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border-2 border-brand-inkBlack rounded-2xl shadow-brutal-xs text-xs sm:text-sm font-bold text-stone-800">
              <img
                src={siteConfig.mascots.curious}
                alt="Teddy Curious"
                className="w-8 h-8 object-contain drop-shadow"
              />
              <span>{t.mascot.demoTip}</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Scroll-Driven Zoom & Clear Video Showcase Container */}
        <div ref={containerRef} className="relative w-full mb-14">
          <div
            className="w-full will-change-transform transition-all duration-150 ease-out origin-center"
            style={{
              transform: `scale(${currentScale})`,
              filter: `blur(${currentBlur}px)`,
              opacity: currentOpacity,
            }}
          >
            {/* Neo-Brutalist Video Chassis */}
            <div
              onMouseEnter={() => !isPlaying && setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onMouseMove={handleMouseMove}
              onClick={() => {
                if (!isPlaying) setIsPlaying(true);
              }}
              className={`relative w-full bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl sm:rounded-[36px] overflow-hidden shadow-brutal-xl transition-all ${
                !isPlaying ? 'cursor-none group' : ''
              }`}
            >
              {/* Window Titlebar (Neo-Brutalist Hardware Controls) */}
              <div className="bg-brand-inkBlack px-4 sm:px-6 py-3 border-b-3 border-brand-inkBlack flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 border border-brand-inkBlack inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 border border-brand-inkBlack inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border border-brand-inkBlack inline-block" />
                  <span className="ml-2 text-xs font-black text-brand-lavender hidden sm:inline-block">
                    {t.demoGuide.videoBadge}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-lime text-brand-inkBlack font-black text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-inkBlack animate-pulse" />
                    <span>Solana Devnet</span>
                  </span>

                  {isPlaying && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlaying(false);
                      }}
                      className="px-2.5 py-0.5 rounded-lg bg-stone-700 text-stone-200 hover:bg-rose-600 hover:text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <X className="w-3 h-3" />
                      <span>{t.demoGuide.closeVideo}</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className="p-1 rounded-lg text-stone-400 hover:text-white transition-colors cursor-pointer"
                    title="Mở toàn màn hình"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Main Video Viewport (16:9 Aspect Ratio) */}
              <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
                {isPlaying ? (
                  <iframe
                    src={siteConfig.demoVideo.embedUrl}
                    title="N.E.D Wallet Video Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <>
                    {/* YouTube High-Res Thumbnail with Brutalist Touch */}
                    <img
                      src={siteConfig.demoVideo.thumbnail}
                      alt="N.E.D Wallet Walkthrough Video Thumbnail"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />

                    {/* Subtle Neo-Brutalist Dark Backdrop Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                    {/* Central Play Accent (Breathing Neo-Brutalist Play Button) */}
                    <div className="absolute z-20 flex flex-col items-center gap-3 pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-brand-lime text-brand-inkBlack border-3 sm:border-4 border-brand-inkBlack shadow-brutal flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-brand-inkBlack" />
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/95 border-2 border-brand-inkBlack rounded-xl shadow-brutal-xs text-xs font-black text-brand-inkBlack">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                        <span>Bấm để xem video trải nghiệm</span>
                      </div>
                    </div>

                    {/* Dynamic Follower Cursor Button [Mở video ->] */}
                    {isHovering && (
                      <div
                        className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
                        style={{
                          left: `${cursorPos.x}px`,
                          top: `${cursorPos.y}px`,
                        }}
                      >
                        <div className="flex items-center gap-2 bg-brand-lime text-brand-inkBlack border-3 border-brand-inkBlack px-4 py-2.5 rounded-full font-black text-xs sm:text-sm shadow-brutal whitespace-nowrap animate-in zoom-in-75 duration-150 select-none">
                          <Play className="w-3.5 h-3.5 fill-current text-brand-inkBlack" />
                          <span>{t.demoGuide.openVideo}</span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Bottom Frame Status Bar */}
              <div className="bg-brand-darkSurface px-4 sm:px-6 py-3 border-t-2 border-brand-lavender/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-stone-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
                  <span className="text-stone-300">
                    Hướng dẫn thao tác thực tế trên N.E.D Wallet (Solana Devnet)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-stone-400">Độ phân giải: 1080p HD</span>
                  <span>•</span>
                  <a
                    href={siteConfig.demoVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-brand-lime hover:underline flex items-center gap-1 font-black"
                  >
                    <span>Mở trên YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Takeaways from Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickTakeaways.map((item, idx) => (
            <RevealOnScroll key={item.num} animation="fade-up" delay={idx * 100} className="h-full">
              <div className="h-full bg-white border-3 border-brand-inkBlack rounded-3xl p-6 shadow-brutal card-brutal-interactive flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-10 h-10 rounded-xl ${item.color} border-2 border-brand-inkBlack flex items-center justify-center font-black text-base text-brand-inkBlack shadow-brutal-xs`}
                    >
                      {item.num}
                    </span>
                    <span className="text-[10px] font-black uppercase text-stone-600 px-2 py-0.5 bg-brand-warmCream border border-brand-inkBlack rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-brand-inkBlack mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-inkBlack/10 flex items-center gap-2 text-[11px] font-black text-brand-deepPurple">
                  <Shield className="w-3.5 h-3.5 text-brand-lime" />
                  <span>An toàn & Miễn phí phí Gas</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Contact & Demo Action Card */}
        <RevealOnScroll animation="pop" delay={120}>
          <div className="bg-brand-deepPurple text-brand-offWhite border-4 border-brand-inkBlack rounded-3xl p-6 sm:p-10 shadow-brutal-xl mb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left explanation */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-darkSurface border border-brand-lavender rounded-lg text-xs font-black uppercase tracking-wider text-brand-lavender mb-3">
                  <Mail className="w-3.5 h-3.5 text-brand-lime" />
                  <span>{t.demoGuide.contactCardTitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3 text-brand-offWhite">
                  Nhận link cài đặt thử nghiệm qua email
                </h3>
                <p className="text-sm sm:text-base text-stone-300 font-medium leading-relaxed">
                  Bản demo được gửi kèm hướng dẫn chi tiết qua Expo để bạn tự mình trải nghiệm các tính năng trong video trực tiếp trên điện thoại.
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
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Test Environment Warning Callout */}
        <RevealOnScroll animation="fade-up" delay={160}>
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

      {/* Fullscreen Cinema Modal Player */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl overflow-hidden shadow-brutal-xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-brand-inkBlack px-4 sm:px-6 py-3 border-b-2 border-brand-inkBlack flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 border border-brand-inkBlack" />
                <span className="w-3 h-3 rounded-full bg-amber-400 border border-brand-inkBlack" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 border border-brand-inkBlack" />
                <span className="ml-2 text-xs font-black text-brand-offWhite">
                  N.E.D Wallet — Video Hướng Dẫn Trải Nghiệm
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-rose-600 text-white rounded-lg font-black text-xs border border-brand-inkBlack hover:bg-rose-700 transition-colors cursor-pointer flex items-center gap-1 shadow-brutal-xs"
              >
                <X className="w-3.5 h-3.5" />
                <span>{t.demoGuide.closeVideo}</span>
              </button>
            </div>

            {/* Modal Video Iframe */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={siteConfig.demoVideo.embedUrl}
                title="N.E.D Wallet Video Walkthrough Fullscreen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
