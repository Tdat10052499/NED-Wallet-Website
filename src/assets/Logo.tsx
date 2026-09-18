import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10' }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={siteConfig.brandNedLogo}
        alt="N.E.D Wallet"
        className="h-full w-auto max-w-[180px] object-contain"
      />
    </div>
  );
};
