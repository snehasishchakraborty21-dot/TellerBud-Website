import { useState } from 'react';

interface TellerBudLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TellerBudLogo({ className = '', size = 'md' }: TellerBudLogoProps) {
  const [imgError, setImgError] = useState(false);

  const dimensionClasses = {
    sm: 'h-[38px] sm:h-[44px] w-auto',
    md: 'h-[50px] sm:h-[60px] lg:h-[74px] w-auto',
    lg: 'h-[52px] sm:h-[60px] lg:h-[64px] w-auto',
  }[size];

  const badgeSizeClasses = {
    sm: 'w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] text-lg',
    md: 'w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[74px] lg:h-[74px] text-2xl sm:text-3xl lg:text-4xl',
    lg: 'w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] lg:w-[64px] lg:h-[64px] text-2xl sm:text-3xl lg:text-4xl',
  }[size];

  const titleSizeClasses = {
    sm: 'text-base sm:text-lg',
    md: 'text-[24px] sm:text-[28px] lg:text-[34px]',
    lg: 'text-[25px] sm:text-[28px] lg:text-[31px]',
  }[size];

  const taglineSizeClasses = {
    sm: 'text-[8.5px] sm:text-[9.5px]',
    md: 'text-[9.5px] sm:text-[10.5px] lg:text-[11.5px]',
    lg: 'text-[10px] sm:text-[11px] lg:text-[11.5px]',
  }[size];

  return (
    <div className={`flex items-center gap-3.5 sm:gap-4 lg:gap-4.5 ${className}`}>
      {!imgError ? (
        <img
          src="/assets/tellerbud-logo.png"
          alt="TellerBud Logo"
          className={`${dimensionClasses} object-contain shrink-0`}
          style={{ imageRendering: 'auto' }}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Prominent official branding badge fallback when logo image is not present */
        <div className={`${badgeSizeClasses} bg-[#008C95] rounded-2xl flex items-center justify-center text-white font-extrabold shadow-sm shrink-0 border border-[#008C95]/20`}>
          <span className="font-sans tracking-tight">TB</span>
        </div>
      )}

      {/* Official TellerBud Brand Name & Tagline */}
      <div className="flex flex-col justify-center leading-none shrink-0">
        <span className={`${titleSizeClasses} font-extrabold tracking-tight text-[#090D10] group-hover:text-[#008C95] transition-colors`}>
          TellerBud
        </span>
        <span className={`${taglineSizeClasses} font-extrabold tracking-widest text-[#008C95] uppercase mt-1`}>
          MOBILE MONEY CONVENIENCE
        </span>
      </div>
    </div>
  );
}

