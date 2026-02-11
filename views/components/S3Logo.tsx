import React from 'react';

interface S3LogoProps {
  className?: string;
  variant?: 'gold' | 'white' | 'navy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const S3Logo = ({
  className = '',
  variant = 'gold',
  size = 'md',
  showText = true
}: S3LogoProps) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-16 h-16",
  } as const;



  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className={`${sizeMap[size]} relative logo-glow`}>
        <img
          src="/assets/images/s3_logo_main.png"
          alt="S3 Academy Logo"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-header leading-[0.85] tracking-tighter italic uppercase ${variant === 'navy' ? 'text-navy' : 'text-white'} 
            ${size === 'sm' ? 'text-base' :
              size === 'md' ? 'text-lg' :
                size === 'lg' ? 'text-xl' : 'text-2xl'}`}>
            S3 <span className="text-gold">Academy</span>
          </span>
          <span className={`text-gold font-black uppercase tracking-[0.4em] mt-0.5 ${size === 'sm' ? 'text-[5px]' : 'text-[7px]'}`}>Excellence Re-Engineered</span>
        </div>
      )}
    </div>
  );
};
