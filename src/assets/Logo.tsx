import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10', isDark = true }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon Mark */}
      <div className="relative w-10 h-10 rounded-xl bg-brand-lavender border-2 border-brand-inkBlack shadow-brutal-xs flex items-center justify-center overflow-hidden transition-transform hover:-rotate-3">
        <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
          {/* N block geometric icon */}
          <rect x="6" y="8" width="6" height="24" rx="2" fill="#111111" />
          <path d="M12 9L28 31H22L6 9H12Z" fill="#111111" />
          <rect x="28" y="8" width="6" height="24" rx="2" fill="#111111" />
          {/* Accent dot */}
          <circle cx="20" cy="14" r="3" fill="#D5FF00" stroke="#111111" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black text-xl tracking-wider ${isDark ? 'text-brand-offWhite' : 'text-brand-inkBlack'}`}>
            N.E.D
          </span>
          <span className="px-1.5 py-0.2 text-[10px] font-black uppercase tracking-widest bg-brand-cyan text-brand-inkBlack border border-brand-inkBlack rounded">
            DEVNET
          </span>
        </div>
        <span className={`text-[10px] font-extrabold uppercase tracking-widest -mt-1 ${isDark ? 'text-brand-lavender' : 'text-stone-600'}`}>
          Wallet
        </span>
      </div>
    </div>
  );
};
