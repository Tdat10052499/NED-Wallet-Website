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
  const floorShadowRef = useRef<HTMLDivElement>(null);

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
      }

      // Smooth Lerp Damping (0.08 spring responsiveness)
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      currentTransX += (targetTransX - currentTransX) * 0.08;
      currentTransY += (targetTransY - currentTransY) * 0.08;

      if (cardRef.current) {
        // 3D Perspective Phone Rotation & Translation
        cardRef.current.style.transform = `
          perspective(1200px)
          translate3d(${currentTransX.toFixed(2)}px, ${currentTransY.toFixed(2)}px, 0px)
          rotateX(${currentRotX.toFixed(2)}deg)
          rotateY(${currentRotY.toFixed(2)}deg)
        `;

        // Multi-tier 3D elevation shadow matching rounded-[48px] contour with negative spread to prevent any corner poking
        const shadowX = (currentTransX * -0.6).toFixed(1);
        const shadowY = (26 + currentTransY * 0.5).toFixed(1);
        cardRef.current.style.boxShadow = `
          ${shadowX}px ${shadowY}px 32px -4px rgba(0, 0, 0, 0.7),
          0px 8px 16px -2px rgba(0, 0, 0, 0.4)
        `;
      }

      // Dynamic 3D Floor Contact Shadow under the phone
      if (floorShadowRef.current) {
        const floorX = (-currentTransX * 1.5).toFixed(1);
        const floorScaleX = (1 + Math.abs(currentRotY) * 0.015).toFixed(2);
        const floorScaleY = (1 - Math.abs(currentRotX) * 0.02).toFixed(2);
        const floorOpacity = Math.max(0.3, Math.min(0.7, 0.55 - currentTransY * 0.02)).toFixed(2);

        floorShadowRef.current.style.transform = `
          translateX(${floorX}px)
          scale(${floorScaleX}, ${floorScaleY})
        `;
        floorShadowRef.current.style.opacity = floorOpacity;
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
      {/* Dynamic 3D Floor Contact Shadow under phone */}
      <div
        ref={floorShadowRef}
        className="absolute -bottom-8 w-[82%] h-12 bg-black/60 rounded-[100%] blur-2xl pointer-events-none transition-transform duration-75 will-change-transform z-0"
        aria-hidden="true"
      />

      {/* Main 3D Tilted Card */}
      <div
        ref={cardRef}
        className="relative w-full h-full will-change-transform [transform-style:preserve-3d] transition-[shadow] duration-75 rounded-[48px] z-10"
      >
        {children}
      </div>
    </div>
  );
};
