import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { S3Logo } from './S3Logo';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  // Removed Home as requested for desktop
  { path: '/academics', label: 'Academics' },
  { path: '/basketball', label: 'Basketball' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/faculty', label: 'Faculty & Coaches' },
  { path: '/alumni', label: 'Alumni' },
  { path: '/donate', label: 'Donate' },
  { path: '/contact', label: 'Contact' },
];

export const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const GAP_CLASS = "gap-6 lg:gap-8";

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy">
      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md h-[40px] md:h-[84px] shadow-xl py-2' : 'bg-navy h-[80px] md:h-[94px]'
          } border-b border-white/10 flex items-center`}
      >
        <div className={`container-tight w-full flex items-center ${GAP_CLASS} px-4`}>

          {/* Logo Section */}
          <Link to="/" className="cursor-pointer group flex-shrink-0">
            <S3Logo size="xl" showText={true} variant="gold" />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className={`hidden xl:flex items-center ${GAP_CLASS} ml-auto`}>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  text-[10px] lg:text-[11px] font-bold uppercase tracking-widest transition-all relative group py-2 whitespace-nowrap
                  ${isActive ? 'text-gold' : 'text-white/70 hover:text-white'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA Action - Desktop (Renamed to match user request: APPLY) */}
          <div className="hidden xl:block flex-shrink-0 ml-8">
            <Link
              to="/admissions"
              className="btn-premium py-2.5 px-6 lg:px-8 text-[10px] lg:text-[11px]"
            >
              APPLY NOW
            </Link>
          </div>

          {/* Mobile UI Group */}
          <div className="xl:hidden ml-auto flex items-center gap-4">
            <Link
              to="/admissions"
              className="bg-gold text-navy text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform"
            >
              APPLY
            </Link>
            <button
              className="text-gold hover:scale-110 active:scale-95 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Icon icon={isMenuOpen ? "solar:close-square-bold" : "solar:hamburger-menu-bold"} width="32" className="md:w-[36px]" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="xl:hidden bg-navy absolute top-full w-full left-0 border-b border-white/10 p-6 md:p-8 flex flex-col gap-4 md:gap-5 animate-fade-in shadow-2xl backdrop-blur-xl h-[calc(100vh-80px)] overflow-y-auto">
            <NavLink to="/" className="text-xl md:text-2xl font-header uppercase tracking-widest text-left text-white hover:text-gold block py-2 border-b border-white/5">
              Home
            </NavLink>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  text-xl md:text-2xl font-header uppercase tracking-widest text-left transition-colors block py-2 border-b border-white/5
                  ${isActive ? 'text-gold' : 'text-white hover:text-gold'}
                `}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/admissions"
              className="btn-premium w-full mt-4 py-4 text-base"
            >
              START APPLICATION
            </Link>
          </div>
        )}
      </header>

      {/* Content Wrapper */}
      <main className="flex-grow pt-[80px] md:pt-[94px] bg-offWhite">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[color:var(--navy)] text-white font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* TOP GRID */}
          <div className="py-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-12 items-start">
              {/* Brand */}
              <div className="md:col-span-4 min-w-0">
                <div className="max-w-[360px]">
                  <div className="flex items-center gap-4">
                    {/* Logo mark only (no giant wordmark) */}
                    <img
                      src="/assets/images/s3_logo_main.png"
                      alt="S3 Academy Logo"
                      className="shrink-0 h-14 w-14 object-contain"
                    />

                    {/* Compact wordmark */}
                    <div className="leading-tight">
                      <div className="font-header italic uppercase tracking-tight text-white text-[20px]">
                        S3 <span className="text-gold">Academy</span>
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/70">
                        Excellence Re-Engineered
                      </div>
                    </div>
                  </div>

                  {/* Short mission / description */}
                  <p className="mt-6 text-white/60 italic leading-relaxed">
                    S3 Academy is dedicated to creating a transformative environment where academic
                    excellence and athletic achievement work hand in hand.
                  </p>

                  {/* Social icons row stays below */}
                  <div className="flex gap-6 mt-6">
                    {['instagram', 'youtube', 'facebook'].map(social => (
                      <Icon key={social} icon={`simple-icons:${social}`} className="text-white/20 hover:text-gold cursor-pointer transition-colors" width="20" />
                    ))}
                  </div>
                </div>
              </div>

              {/* The Academy */}
              <div className="md:col-span-3">
                <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-5">The Academy</h4>
                <ul className="space-y-4 text-sm text-white/50 font-medium">
                  <li><Link to="/academics" className="hover:text-white cursor-pointer transition-colors">Curriculum</Link></li>
                  <li><Link to="/basketball" className="hover:text-white cursor-pointer transition-colors">Performance Lab</Link></li>
                  <li><Link to="/faculty" className="hover:text-white cursor-pointer transition-colors">Our Faculty</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="md:col-span-3">
                <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-5">Resources</h4>
                <ul className="space-y-4 text-sm text-white/50 font-medium">
                  <li><Link to="/admissions" className="hover:text-white cursor-pointer transition-colors">Admissions</Link></li>
                  <li><Link to="/alumni" className="hover:text-white cursor-pointer transition-colors">Alumni Network</Link></li>
                  <li><Link to="/donate" className="hover:text-white cursor-pointer transition-colors">Giving Back</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="md:col-span-2">
                <h4 className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-5">Contact</h4>
                <div className="text-sm text-white/50 space-y-4 font-medium leading-relaxed">
                  <p>1201 Commerce St.<br />Petersburg, VA 23803</p>
                  <a
                    href="tel:8047322255"
                    className="mt-4 inline-block text-white/80 font-medium hover:text-white hover:underline underline-offset-4"
                  >
                    (804) 732-2255
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/10 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white/60 text-sm">
              <div>© 2025 S3 Academy. All rights reserved.</div>
              <div className="flex gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
