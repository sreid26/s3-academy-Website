import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { PageId, NavItem } from '../types';
import { S3Logo } from './S3Logo';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageId;
  onNavigate: (id: PageId) => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'academics', label: 'Academics' },
  { id: 'basketball', label: 'Basketball' },
  { id: 'admissions', label: 'Admissions' },
  { id: 'faculty', label: 'Faculty & Coaches' },
  { id: 'alumni', label: 'Alumni' },
  { id: 'donate', label: 'Donate' },
  { id: 'contact', label: 'Contact' },
];

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Unified gap for perfect rhythm across the desktop header
  const GAP_CLASS = "gap-6 lg:gap-8";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-navy border-b border-white/10 h-[80px] md:h-[94px] flex items-center shadow-lg transition-all">
        <div className={`container-tight w-full flex items-center ${GAP_CLASS} px-4`}>
          
          {/* Logo Section */}
          <div className="cursor-pointer group flex-shrink-0" onClick={() => onNavigate('home')}>
            <S3Logo size="sm" showText={true} variant="gold" />
          </div>

          {/* Navigation Links - Desktop */}
          <nav className={`hidden xl:flex items-center ${GAP_CLASS}`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-widest transition-all relative group py-2 whitespace-nowrap ${
                  activePage === item.id ? 'text-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Action - Desktop */}
          <div className="hidden xl:block flex-shrink-0">
            <button 
              onClick={() => onNavigate('admissions')}
              className="btn-premium py-2.5 px-6 lg:px-8 text-[10px] lg:text-[11px]"
            >
              APPLY NOW
            </button>
          </div>

          {/* Mobile UI Group - Pushed to right via ml-auto for mobile layout balance */}
          <div className="xl:hidden ml-auto flex items-center gap-4">
            <button 
              onClick={() => onNavigate('admissions')}
              className="bg-gold text-navy text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform"
            >
              APPLY
            </button>
            <button 
              className="text-gold hover:scale-110 active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon icon={isMenuOpen ? "solar:close-square-bold" : "solar:hamburger-menu-bold"} width="32" className="md:w-[36px]" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="xl:hidden bg-navy absolute top-[80px] md:top-[94px] w-full left-0 border-b border-white/10 p-6 md:p-8 flex flex-col gap-4 md:gap-5 animate-fade-in shadow-2xl backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsMenuOpen(false); }}
                className={`text-xl md:text-2xl font-header uppercase tracking-widest text-left transition-colors ${activePage === item.id ? 'text-gold' : 'text-white hover:text-gold'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('admissions'); setIsMenuOpen(false); }}
              className="btn-premium w-full mt-4 py-4 text-base"
            >
              START APPLICATION
            </button>
          </div>
        )}
      </header>

      {/* Content Wrapper */}
      <main className="flex-grow pt-[80px] md:pt-[94px] bg-white">
        {children}
      </main>

      {/* Modern High-End Footer */}
      <footer className="bg-navy pt-24 md:pt-32 pb-12 text-white border-t border-white/5">
        <div className="container-tight px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-24">
            <div className="md:col-span-5 space-y-8 md:space-y-10 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <S3Logo size="md" variant="gold" />
              </div>
              <p className="text-white/40 text-sm md:text-base max-w-sm mx-auto md:mx-0 leading-relaxed italic">
                S3 Academy is dedicated to creating a transformative environment where academic excellence and athletic achievement work hand in hand.
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                 {['instagram', 'youtube', 'facebook'].map(social => (
                   <Icon key={social} icon={`simple-icons:${social}`} className="text-white/20 hover:text-gold cursor-pointer transition-colors" width="24" />
                 ))}
              </div>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">The Academy</h4>
                <ul className="space-y-4 md:space-y-5 text-[13px] md:text-sm text-white/50 font-medium">
                  <li onClick={() => onNavigate('academics')} className="hover:text-gold cursor-pointer transition-colors">Curriculum</li>
                  <li onClick={() => onNavigate('basketball')} className="hover:text-gold cursor-pointer transition-colors">Performance Lab</li>
                  <li onClick={() => onNavigate('faculty')} className="hover:text-gold cursor-pointer transition-colors">Our Faculty</li>
                </ul>
              </div>
              <div className="space-y-6 md:space-y-8">
                <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">Resources</h4>
                <ul className="space-y-4 md:space-y-5 text-[13px] md:text-sm text-white/50 font-medium">
                  <li onClick={() => onNavigate('admissions')} className="hover:text-gold cursor-pointer transition-colors">Admissions</li>
                  <li onClick={() => onNavigate('alumni')} className="hover:text-gold cursor-pointer transition-colors">Alumni Network</li>
                  <li onClick={() => onNavigate('donate')} className="hover:text-gold cursor-pointer transition-colors">Giving Back</li>
                </ul>
              </div>
              <div className="space-y-6 md:space-y-8 text-right sm:text-left">
                <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px]">Contact</h4>
                <div className="text-[13px] md:text-sm text-white/50 space-y-3 md:space-y-4 font-medium leading-relaxed">
                  <p>1201 Commerce St.<br />Petersburg, VA 23803</p>
                  <p className="text-white font-black text-base md:text-lg whitespace-nowrap">(804) 732-2255</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between text-[10px] md:text-[11px] text-white/20 font-bold uppercase tracking-[0.3em] text-center sm:text-left">
            <p>© 2025 S3 ACADEMY. ALL RIGHTS RESERVED.</p>
            <div className="flex justify-center sm:justify-start gap-8 md:gap-12 mt-6 sm:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
