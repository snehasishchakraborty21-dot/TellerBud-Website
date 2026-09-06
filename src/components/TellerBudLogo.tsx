import { useState } from 'react';
import { TELLERBUD_LOGO_URL } from '../config/site';

interface TellerBudLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function TellerBudLogo({ className = '', size = 'md' }: TellerBudLogoProps) {
  const [imgError, setImgError] = useState(false);

  // Logo Icon Height Requirements:
  // Header (md): approximately 68–76 px high (lg:h-[72px])
  // Footer (lg): approximately 58–64 px high (lg:h-[62px], sm:h-[54px], h-[46px])
  const iconDimensionClasses = {
    sm: 'h-[44px] sm:h-[48px] w-auto',
    md: 'h-[50px] sm:h-[62px] lg:h-[72px] w-auto',
    lg: 'h-[46px] sm:h-[54px] lg:h-[62px] w-auto',
  }[size];

  // Brand Text Size Requirements:
  // Header (md): approximately 32–36 px (lg:text-[34px])
  // Footer (lg): approximately 30–34 px (lg:text-[32px], sm:text-[27px], text-[24px])
  const titleSizeClasses = {
    sm: 'text-[18px] sm:text-[20px]',
    md: 'text-[24px] sm:text-[28px] lg:text-[34px]',
    lg: 'text-[24px] sm:text-[27px] lg:text-[32px]',
  }[size];

  // Spacing between logo icon and brand text: 12–16 px gap
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-3.5 sm:gap-4 lg:gap-4',
    lg: 'gap-3 sm:gap-3.5 lg:gap-4',
  }[size];

  const fallbackSizeClasses = {
    sm: 'w-[44px] h-[44px] text-sm',
    md: 'w-[50px] h-[50px] sm:w-[62px] sm:h-[62px] lg:w-[72px] lg:h-[72px] text-xl sm:text-2xl lg:text-3xl',
    lg: 'w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] lg:w-[62px] lg:h-[62px] text-xl sm:text-2xl lg:text-2xl',
  }[size];

  return (
    <div className={`inline-flex items-center ${gapClasses} shrink-0 ${className}`}>
      {/* Official TellerBud Logo Icon */}
      {!imgError ? (
        <img
          src={TELLERBUD_LOGO_URL}
          alt="TellerBud Icon"
          className={`${iconDimensionClasses} object-contain shrink-0`}
          style={{ imageRendering: 'auto' }}
          onError={() => setImgError(true)}
        />
      ) : (
        /* Fallback badge when logo image is not present */
        <div
          className={`${fallbackSizeClasses} bg-[#008C95] text-[#FCFCFB] font-bold rounded-2xl flex items-center justify-center tracking-tight shadow-xs shrink-0`}
        >
          TB
        </div>
      )}

      {/* Official TellerBud Brand Name (Bold, Deep Black, Vertically Centred, No Tagline) */}
      <span
        className={`font-heading font-bold text-[#090D10] ${titleSizeClasses} tracking-tight leading-none shrink-0 group-hover:text-[#008C95] transition-colors`}
      >
        TellerBud
      </span>
    </div>
  );
}



