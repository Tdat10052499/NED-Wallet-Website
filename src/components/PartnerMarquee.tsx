import React, { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { RevealOnScroll } from './RevealOnScroll';

interface PartnerItem {
  id: string;
  name: string;
  logoSrc?: string;
  isCustomSvg?: boolean;
  tag: string;
}

export const PartnerMarquee: React.FC = () => {
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag & Scroll Interaction State
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);

  const partners: PartnerItem[] = [
    {
      id: 'northaxis',
      name: 'NorthAxis',
      logoSrc: '/partners/northaxis.png',
      tag: 'Partner',
    },
    {
      id: 'unihackfest',
      name: 'UniHackfest',
      logoSrc: '/partners/unihackfest.png',
      tag: 'Hackathon',
    },
    {
      id: 'vanlang',
      name: 'Van Lang University',
      logoSrc: '/partners/vanlang.png',
      tag: 'Academic',
    },
    {
      id: 'solana',
      name: 'Solana Devnet',
      isCustomSvg: true,
      tag: 'Blockchain',
    },
    {
      id: 'expo',
      name: 'Expo Mobile',
      isCustomSvg: true,
      tag: 'Platform',
    },
  ];

  // 6 identical sets to ensure infinite continuous coverage across all viewport widths
  const marqueeList = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  // Physics animation loop: moves based on user scroll velocity + manual drag
  useEffect(() => {
    let targetX = 0;
    let currentX = 0;
    let animId: number;

    const handleScroll = () => {
      // Speed factor: 1.15 px per scroll px
      targetX = window.scrollY * 1.15 + dragOffset.current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial position based on current scroll position
    targetX = window.scrollY * 1.15 + dragOffset.current;
    currentX = targetX;

    const updatePhysics = () => {
      animId = requestAnimationFrame(updatePhysics);

      // Spring lerp damping (0.08) for silky smooth inertia
      currentX += (targetX - currentX) * 0.08;

      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const setWidth = totalWidth > 0 ? totalWidth / 6 : 1350;

        // Modulo wrap so it never ends or cuts off
        const wrappedX = ((currentX % setWidth) + setWidth) % setWidth;
        trackRef.current.style.transform = `translate3d(${-wrappedX.toFixed(2)}px, 0px, 0px)`;
      }
    };

    updatePhysics();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Manual drag-to-scrub support
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    dragOffset.current -= delta * 1.8;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const delta = e.touches[0].clientX - dragStartX.current;
    dragOffset.current -= delta * 1.8;
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative w-full bg-brand-lime text-brand-inkBlack py-7 sm:py-9 border-b-4 border-brand-inkBlack overflow-hidden z-20 select-none">
      {/* Neo-brutalist subtle diagonal stripes */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #111111,
            #111111 12px,
            transparent 12px,
            transparent 24px
          )`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <RevealOnScroll animation="fade-up" delay={0}>
          {/* Header Ribbon Stamp */}
          <div className="flex items-center justify-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-inkBlack text-brand-offWhite font-black text-xs uppercase tracking-wider shadow-brutal-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-lime animate-spin" style={{ animationDuration: '6s' }} />
              <span>{t.marquee.tag}</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Marquee Box Frame Container */}
      <RevealOnScroll animation="pop" delay={100}>
        <div
          className="relative w-full overflow-hidden py-2 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Dynamic Track: Moves based on User Scroll & Drag */}
          <div
            ref={trackRef}
            className="flex items-center gap-4 sm:gap-6 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {marqueeList.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="bg-white border-3 border-brand-inkBlack rounded-2xl px-6 py-3 shadow-brutal flex items-center justify-center gap-3 min-w-[220px] sm:min-w-[260px] h-[80px] sm:h-[88px] transition-all hover:-translate-y-1 hover:shadow-brutal-lg select-none group flex-shrink-0"
              >
                {partner.logoSrc ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={partner.logoSrc}
                      alt={partner.name}
                      className="max-h-11 sm:max-h-13 max-w-[180px] sm:max-w-[210px] object-contain transition-transform group-hover:scale-105 pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                ) : partner.id === 'solana' ? (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-deepPurple text-white flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs">
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-brand-cyan">
                        <path
                          d="M4.5 17.5H16.5L19.5 14.5H7.5L4.5 17.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M4.5 6.5H16.5L19.5 9.5H7.5L4.5 6.5Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.5 10.5H19.5L16.5 13.5H4.5L7.5 10.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-inkBlack leading-tight">SOLANA</div>
                      <div className="text-[10px] font-extrabold text-stone-500 uppercase">Devnet Network</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-lavender text-brand-inkBlack flex items-center justify-center font-black border-2 border-brand-inkBlack shadow-brutal-xs">
                      <span className="text-sm font-black">E</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-black text-brand-inkBlack leading-tight">EXPO</div>
                      <div className="text-[10px] font-extrabold text-stone-500 uppercase">Mobile Preview</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
