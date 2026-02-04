import React from 'react';

interface S3LogoProps {
  className?: string;
  variant?: 'gold' | 'white' | 'navy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const S3Logo: React.FC<S3LogoProps> = ({ 
  className = '', 
  variant = 'gold', 
  size = 'md',
  showText = true 
}) => {
  const sizeMap = {
    sm: 'w-14 h-14',
    md: 'w-28 h-28',
    lg: 'w-56 h-56',
    xl: 'w-80 h-80'
  };

  const colors = {
    gold: '#C89B3C',
    white: '#FFFFFF',
    navy: '#0B1D3A',
    grey: '#4A5568'
  };

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <div className={`${sizeMap[size]} relative logo-glow`}>
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#C89B3C" />
              <stop offset="100%" stopColor="#8A6D3B" />
            </linearGradient>
          </defs>

          {/* Main Shield / Circle Background */}
          <circle cx="200" cy="200" r="190" fill={colors.gold} />
          <circle cx="200" cy="200" r="182" fill={colors.white} />
          <circle cx="200" cy="200" r="174" fill={colors.navy} />
          
          {/* Inner Decorative Circle with Stars */}
          <circle cx="200" cy="200" r="145" fill="#1A2B44" stroke={colors.gold} strokeWidth="2" />
          
          {/* S and 3 Side Flankers */}
          <g fill={colors.gold} stroke={colors.navy} strokeWidth="8" paintOrder="stroke" className="font-header font-black italic">
            {/* The "S" */}
            <path d="M45,110 L140,110 L140,150 L85,150 L85,185 L140,185 L140,290 L45,290 L45,250 L100,250 L100,215 L45,215 Z" />
            {/* The "3" */}
            <path d="M260,110 L355,110 L355,290 L260,290 L260,250 L315,250 L315,215 L270,215 L270,185 L315,185 L315,150 L260,150 Z" />
          </g>

          {/* Panther Head (Simplified but aggressive representation of provided asset) */}
          <g transform="translate(200, 205)">
             {/* Ears */}
             <path d="M-85,-65 L-40,-45 L-60,-10 Z" fill={colors.navy} stroke={colors.white} strokeWidth="2" />
             <path d="M85,-65 L40,-45 L60,-10 Z" fill={colors.navy} stroke={colors.white} strokeWidth="2" />
             
             {/* Main Face Shape */}
             <path d="M-75,0 C-75,-60 -40,-85 0,-85 C40,-85 75,-60 75,0 C75,80 40,115 0,115 C-40,115 -75,80 -75,0 Z" fill={colors.navy} stroke={colors.white} strokeWidth="2" />
             
             {/* Snarl Lines & Eyes */}
             <path d="M-35,-25 Q-20,-40 -5,-25 M35,-25 Q20,-40 5,-25" fill="none" stroke={colors.white} strokeWidth="3" />
             <circle cx="-22" cy="-22" r="5" fill="white" />
             <circle cx="22" cy="-22" r="5" fill="white" />
             
             {/* Muzzle & Teeth */}
             <path d="M-25,40 Q0,70 25,40 L18,90 Q0,105 -18,90 Z" fill={colors.navy} stroke={colors.gold} strokeWidth="1" />
             <path d="M-15,45 L-10,65 L-5,45 M15,45 L10,65 L5,45" fill="white" />
             <path d="M-10,85 Q0,95 10,85" fill="none" stroke={colors.gold} strokeWidth="2" />

             {/* Whiskers */}
             <g stroke={colors.white} strokeWidth="1" opacity="0.4">
                <line x1="-60" y1="20" x2="-100" y2="10" />
                <line x1="-65" y1="40" x2="-110" y2="45" />
                <line x1="60" y1="20" x2="100" y2="10" />
                <line x1="65" y1="40" x2="110" y2="45" />
             </g>
          </g>

          {/* Academy Arched Text at Bottom */}
          <path id="academyArc" d="M 80,310 A 130,130 0 0,0 320,310" fill="none" />
          <text fill={colors.gold} className="font-header text-[42px] font-black uppercase tracking-widest">
            <textPath href="#academyArc" startOffset="50%" textAnchor="middle">
              ACADEMY
            </textPath>
          </text>

          {/* Triple Star Crown at Top */}
          <g transform="translate(200, 55)" fill={colors.gold}>
            <path d="M0,-15 L4,-5 L15,-5 L6,2 L9,12 L0,6 L-9,12 L-6,2 L-15,-5 L-4,-5 Z" />
            <path d="M-40,0 L-36,10 L-25,10 L-34,17 L-31,27 L-40,21 L-49,27 L-46,17 L-55,10 L-44,10 Z" opacity="0.8" />
            <path d="M40,0 L44,10 L55,10 L46,17 L49,27 L40,21 L31,27 L34,17 L25,10 L36,10 Z" opacity="0.8" />
          </g>

          {/* Boundary Stars */}
          <g fill={colors.gold}>
            <circle cx="85" cy="220" r="6" />
            <circle cx="70" cy="180" r="6" />
            <circle cx="315" cy="220" r="6" />
            <circle cx="330" cy="180" r="6" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-header leading-[0.85] tracking-tighter italic uppercase ${variant === 'navy' ? 'text-navy' : 'text-white'} ${size === 'sm' ? 'text-4xl' : size === 'md' ? 'text-5xl' : 'text-8xl'}`}>
            S3 <span className="text-gold">Academy</span>
          </span>
          <span className="text-gold font-black uppercase tracking-[0.4em] text-[8px] md:text-[11px] mt-2">Excellence Re-Engineered</span>
        </div>
      )}
    </div>
  );
};
