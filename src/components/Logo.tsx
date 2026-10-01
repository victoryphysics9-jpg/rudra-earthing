import React, { useState, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

interface LogoProps {
  variant?: 'light' | 'dark';
  src?: string;
  className?: string;
  onSecretTrigger?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  src,
  className = '',
  onSecretTrigger,
}) => {
  const [imageError, setImageError] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Logo source: explicitly provided src OR footer logo if light variant OR header logo
  const logoSrc = src || (variant === 'light' ? siteConfig.FOOTER_LOGO : siteConfig.HEADER_LOGO);

  const handleClick = (e: React.MouseEvent) => {
    // Secret 5-click counter to open admin login
    clickCountRef.current += 1;

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0;
      if (onSecretTrigger) {
        e.stopPropagation();
        onSecretTrigger();
      }
      return;
    }

    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2500);
  };

  return (
    <div
      onClick={handleClick}
      className={`inline-flex items-center cursor-pointer select-none transition-transform hover:opacity-95 ${className}`}
      title="Rudra Earthing Systems"
    >
      {!imageError ? (
        // The logo image (Navbar or Footer specific)
        <img
          src={logoSrc}
          alt="Rudra Earthing Systems"
          className="h-12 w-auto object-contain max-w-[260px]"
          onError={() => setImageError(true)}
        />
      ) : (
        // Clean fallback until user places logo.png / logo-footer.png into public/
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md flex items-center justify-center text-white font-black text-2xl tracking-tighter">
            R
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`text-xl font-extrabold tracking-tight uppercase ${variant === 'light' ? 'text-white' : 'text-slate-950'}`}>
              Rudra
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-amber-500">
              Earthing Systems
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

