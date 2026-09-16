import React, { useRef, useEffect } from 'react';

interface PhoneTiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxTiltX?: number;
  maxTiltY?: number;
}

export const PhoneTiltWrapper: React.FC<PhoneTiltWrapperProps> = ({
  children,
  className = '',
  maxTiltX = 16,
  maxTiltY = 20,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let targetTransX = 0;
    let targetTransY = 0;

    let currentRotX = 0;
    let currentRotY = 0;
    let currentTransX = 0;
    let currentTransY = 0;

    let targetShadowX = 10;
    let targetShadowY = 12;
    let currentShadowX = 10;
    let currentShadowY = 12;

    let isMouseActive = false;
    let idleTimer: number;
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      isMouseActive = true;
      clearTimeout(idleTimer);

      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Normalized distance from cursor to center of phone (-1 to 1)
      const normX = Math.max(-1.5, Math.min(1.5, (e.clientX - cardCenterX) / (window.innerWidth / 2)));
      const normY = Math.max(-1.5, Math.min(1.5, (e.clientY - cardCenterY) / (window.innerHeight / 2)));

      // Phone looks AT the cursor:
      // When cursor is right (normX > 0), phone turns right: rotateY > 0
      // When cursor is bottom (normY > 0), phone tilts down: rotateX < 0
      targetRotY = normX * maxTiltY;
      targetRotX = -normY * maxTiltX;
      targetTransX = normX * 8;
      targetTransY = normY * 6;

      // Shadow moves opposite to light
      targetShadowX = 8 - normX * 12;
      targetShadowY = 10 + normY * 12;

      // Resume idle motion if mouse stops moving for 2.5s
      idleTimer = window.setTimeout(() => {
        isMouseActive = false;
      }, 2500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let clock = 0;
    const updatePhysics = () => {
      animFrameId = requestAnimationFrame(updatePhysics);
      clock += 0.02;

      if (!isMouseActive) {
        // Natural gentle breathing float when mouse is stationary
        const idleX = Math.sin(clock * 1.2) * 4;
        const idleY = Math.cos(clock * 0.9) * 6;
        targetRotX = idleX;
        targetRotY = idleY;
        targetTransX = Math.sin(clock * 0.8) * 3;
        targetTransY = Math.cos(clock * 1.1) * 4;
        targetShadowX = 10 + idleY * 0.8;
        targetShadowY = 12 + idleX * 0.8;
      }

      // Smooth Lerp Damping (0.08 spring-like responsiveness)
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentTransX += (targetTransX - currentTransX) * 0.08;
      currentTransY += (targetTransY - currentTransY) * 0.08;
      currentShadowX += (targetShadowX - currentShadowX) * 0.08;
      currentShadowY += (targetShadowY - currentShadowY) * 0.08;

      if (cardRef.current) {
        cardRef.current.style.transform = `
          perspective(1200px)
          translate3d(${currentTransX.toFixed(2)}px, ${currentTransY.toFixed(2)}px, 0px)
          rotateX(${currentRotX.toFixed(2)}deg)
          rotateY(${currentRotY.toFixed(2)}deg)
        `;
        cardRef.current.style.boxShadow = `
          ${currentShadowX.toFixed(1)}px ${currentShadowY.toFixed(1)}px 0px #111111
        `;
      }
    };

    updatePhysics();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimer);
      cancelAnimationFrame(animFrameId);
    };
  }, [maxTiltX, maxTiltY]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center [perspective:1200px] ${className}`}
    >
      <div
        ref={cardRef}
        className="w-full h-full will-change-transform [transform-style:preserve-3d] transition-[shadow] duration-75"
      >
        {children}
      </div>
    </div>
  );
};
