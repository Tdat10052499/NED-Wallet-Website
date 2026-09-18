import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Mail,
  Copy,
  Check,
  Sparkles,
  AlertTriangle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Shield,
} from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { siteConfig } from '../config/siteConfig';
import { RevealOnScroll } from './RevealOnScroll';
import { DemoExpoModal } from './DemoExpoModal';

export const DemoGuide: React.FC = () => {
  const { t, lang } = useI18n();
  const [copied, setCopied] = useState(false);
  const [isExpoModalOpen, setIsExpoModalOpen] = useState(false);

  // Local Video Element Ref & Playback State
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Viewport Intersection State for Pure 60/120 FPS CSS Zoom & Blur
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);


  // IntersectionObserver: Plays & zooms to 100% when in view, pauses & shrinks to 75% when scrolled away
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsPlaying(true);
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch(() => {});
          }
        } else {
          setIsInView(false);
          setIsPlaying(false);
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      {
        // Triggers smoothly when ~30% of the video container is visible in viewport
        threshold: 0.3,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const openModal = () => setIsExpoModalOpen(true);
    window.addEventListener('open-demo-guide', openModal);
    return () => window.removeEventListener('open-demo-guide', openModal);
  }, []);

  // Click on video opens the YouTube link in a new tab
  const handleVideoClick = () => {
    window.open(siteConfig.demoVideo.url, '_blank', 'noopener,noreferrer');
  };

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  }, []);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(siteConfig.contactEmail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      }
    } catch {
      // Fallback
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

        {/* Video Showcase Container with Pure GPU Hardware Zoom & Blur Transition */}
        <div ref={containerRef} className="relative w-full mb-14">
          <div
            className="w-full will-change-transform origin-center"
            style={{
              transform: isInView ? 'scale(1)' : 'scale(0.75)',
              filter: isInView ? 'blur(0px)' : 'blur(12px)',
              opacity: isInView ? 1 : 0.6,
              transition:
                'transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms ease-out, opacity 700ms ease-out',
            }}
          >
            {/* Neo-Brutalist Video Chassis */}
            <div
              onClick={handleVideoClick}
              className="relative w-full bg-brand-darkSurface border-4 border-brand-inkBlack rounded-3xl sm:rounded-[36px] overflow-hidden shadow-brutal-xl transition-all cursor-pointer"
            >
              {/* Window Titlebar (Clean Neo-Brutalist Hardware Controls without percentage) */}
              <div className="bg-brand-inkBlack px-4 sm:px-6 py-3 border-b-3 border-brand-inkBlack flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 border border-brand-inkBlack inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 border border-brand-inkBlack inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 border border-brand-inkBlack inline-block" />
                  <span className="ml-2 text-xs font-black text-brand-lavender hidden sm:inline-block">
                    {t.demoGuide.videoBadge}
                  </span>
                </div>

                {/* Status indicator: Live / Paused (No percentage numbers) */}
                <div className="flex items-center gap-2">
                  {isPlaying ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-lime text-brand-inkBlack font-black text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-brutal-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                      <span>{t.demoGuide.autoPlaying}</span>
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-700 text-stone-300 font-bold text-[10px] tracking-wider flex items-center gap-1">
                      <span>{t.demoGuide.paused}</span>
                    </span>
                  )}
                </div>

                {/* Right Controls: Audio & Play/Pause */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    className={`px-2.5 py-1 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer border ${
                      !isMuted
                        ? 'bg-brand-lime text-brand-inkBlack border-brand-inkBlack shadow-brutal-xs'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border-stone-600'
                    }`}
                    title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                  >
                    {!isMuted ? (
                      <Volume2 className="w-3.5 h-3.5" />
                    ) : (
                      <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                    )}
                    <span className="hidden sm:inline">
                      {!isMuted ? t.demoGuide.unmute : t.demoGuide.muted}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={togglePlay}
                    className="px-2.5 py-1 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-600 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
                    title={isPlaying ? 'Tạm dừng' : 'Phát'}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Tạm dừng</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span className="hidden sm:inline">Phát</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Main Video Viewport (16:9 Aspect Ratio) */}
              <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
                {/* Local Source HTML5 Video Player from Assets */}
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={siteConfig.demoVideo.thumbnail}
                  className="w-full h-full object-cover object-center bg-black"
                >
                  <source src={siteConfig.demoVideo.localVideoAsset} type="video/mp4" />
                  <source src={siteConfig.demoVideo.rawLocalVideoAsset} type="video/mp4" />
                </video>

                {/* Subtle Neo-Brutalist Dark Backdrop Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              </div>

              {/* Bottom Frame Status Bar (No external YouTube link, pure status) */}
              <div className="bg-brand-darkSurface px-4 sm:px-6 py-3 border-t-2 border-brand-lavender/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-bold text-stone-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
                  <span className="text-stone-300">
                    Video trải nghiệm thực tế N.E.D Wallet trên Solana Devnet
                  </span>
                </div>

                <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  <span>1080p HD • Chạm để xem trên YouTube</span>
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
                  <button
                    type="button"
                    onClick={() => setIsExpoModalOpen(true)}
                    className="btn-brutal-lime w-full py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-brutal-xs cursor-pointer"
                  >
                    <span>Trải nghiệm demo qua Expo Go</span>
                  </button>
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

        <DemoExpoModal isOpen={isExpoModalOpen} onClose={() => setIsExpoModalOpen(false)} />

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
    </section>
  );
};
