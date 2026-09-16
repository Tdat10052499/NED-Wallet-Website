import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10', isDark = true }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon Mark based on official logo */}
      <div className="relative w-10 h-10 rounded-xl bg-brand-deepPurple border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden transition-transform hover:-rotate-3 flex-shrink-0">
        <img
          src={siteConfig.logoAsset}
          alt="N.E.D Logo"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback SVG if image not yet loaded
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Geometric fallback mark */}
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7 absolute inset-0 m-auto pointer-events-none -z-10">
          <path d="M12 28L24 8L36 28H12Z" fill="#B497F0" />
          <path d="M4 22L16 22L12 28L0 28Z" fill="#B497F0" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-black text-xl tracking-wider leading-none ${isDark ? 'text-brand-offWhite' : 'text-brand-inkBlack'}`}>
            N.E.D
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack rounded shadow-brutal-xs">
            DEVNET
          </span>
        </div>
        <span className={`text-[10px] font-extrabold uppercase tracking-widest leading-none mt-1 ${isDark ? 'text-brand-lavender' : 'text-stone-600'}`}>
          Wallet
        </span>
      </div>
    </div>
  );
};
