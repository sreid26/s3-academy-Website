import React from 'react';

interface SkewedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'outline';
  className?: string;
}

export const SkewedButton: React.FC<SkewedButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'gold',
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-header uppercase tracking-[0.1em] transition-all duration-500 transform -skew-x-12 hover:-translate-y-1.5 active:translate-y-0 group overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy shadow-lg";
  
  // Responsive padding and font size based on mobile/desktop
  const responsiveStyles = "px-6 py-3 text-lg md:px-10 md:py-4 md:text-2xl";

  const variants = {
    gold: "bg-gold text-navy hover:shadow-[0_20px_40px_-12px_rgba(200,155,60,0.6)] border-none",
    navy: "bg-navy text-white hover:bg-navy/90 hover:shadow-[0_20px_40px_-12px_rgba(11,29,58,0.4)] border-none",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-navy hover:shadow-[0_15px_30px_-10px_rgba(200,155,60,0.4)]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${responsiveStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Glossy overlay effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" aria-hidden="true"></span>
      
      {/* Interaction glow layer */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity duration-300" aria-hidden="true"></span>
      
      {/* Content wrapper to un-skew text */}
      <span className="transform skew-x-12 inline-block relative z-10 flex items-center gap-3">
        {children}
      </span>
    </button>
  );
};