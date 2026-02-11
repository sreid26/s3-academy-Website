import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { S3Logo } from './components/S3Logo';
import { SEO } from './components/SEO';
import { SkewedButton } from './components/SkewedButton';

// Recreated components since we cannot import them easily if paths are messy, but SkewedButton was imported from ../components/SkewedButton. 
// I will keep the imports as they were but assume relative paths.
// Actually, I'll use standard buttons to match the Design System I just created in index.css (.btn-premium) to ensure consistency.

export const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-offWhite overflow-hidden">
      <SEO
        title="Home"
        description="S3 Academy: Where Scholars Become Champions. Elite basketball program and college-preparatory academics in Virginia."
        canonical="/"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090"
            alt="S3 Academy Basketball Hero"
            className="w-full h-full object-cover opacity-30 grayscale brightness-90 scale-105"
            loading="eager" // LCP optimization
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy"></div>
        </div>

        <div className="container-tight relative z-10 text-center px-4 animate-fade-in py-20 mt-10">
          <div className="mb-10 flex justify-center">
            <div className="w-72 h-72 relative logo-glow animate-panther">
              <img
                src="/assets/images/s3_logo_main.png"
                alt="S3 Academy Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <span className="text-gold font-bold uppercase tracking-[0.6em] text-[10px] md:text-[11px] mb-6 block">
            Engineering The Next Generation
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-[9rem] font-header italic leading-[0.85] tracking-tighter uppercase mb-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            Where <span className="text-gold">Scholars</span> <br /> Become Champions
          </h1>
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto mb-12 italic leading-relaxed">
            Integrating elite collegiate academic standards with professional-grade athletic performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <Link to="/admissions">
              <SkewedButton variant="gold">
                ENROLL NOW
              </SkewedButton>
            </Link>
            <SkewedButton
              variant="outline"
              onClick={() => scrollToSection('philosophy-section')}
            >
              THE PHILOSOPHY
            </SkewedButton>
          </div>
        </div>

        {/* Interactive Scroll Indicator - Removed as requested */}
      </section>

      {/* Metrics Section */}
      <section id="metrics-section" className="bg-offWhite border-y border-slate-200 py-16 scroll-mt-24">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'College Placement', value: '100%' },
            { label: 'D1 Scholarships', value: '85+' },
            { label: 'State Titles', value: '9' },
            { label: 'Average GPA', value: '3.94' }
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-navy font-header text-5xl md:text-6xl italic tracking-tighter transition-colors group-hover:text-gold">{stat.value}</div>
              <div className="text-slate text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVERYDAY ESSENTIALS ================= */}
      <section id="essentials-section" className="py-section bg-[#F8FAFC] scroll-mt-24">
        <div className="container-tight">
          <div className="text-center mb-16 md:mb-24 px-4">
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block">For Students & Families</span>
            <h2 className="text-navy text-5xl md:text-8xl font-header italic uppercase tracking-tighter leading-none mb-6">Everyday <br /> Essentials</h2>
            <div className="h-1 md:h-1.5 w-24 md:w-32 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter">
            {[
              {
                title: 'Academic Calendar',
                icon: 'solar:calendar-bold-duotone',
                desc: 'View important dates and school events throughout the year.',
                linkText: 'View Calendar →',
                path: '/academics'
              },
              {
                title: 'Admissions',
                icon: 'solar:square-academic-cap-bold-duotone',
                desc: 'Start your application process and join the S3 Academy family today.',
                linkText: 'Apply Now →',
                path: '/admissions'
              },
              {
                title: 'Athletics',
                icon: 'solar:cup-first-bold-duotone',
                desc: 'Explore our national-level basketball program and performance lab.',
                linkText: 'Go Team →',
                path: '/basketball'
              },
              {
                title: 'Parent Portal',
                icon: 'solar:users-group-rounded-bold-duotone',
                desc: 'Access student progress, grades, and resources for our families.',
                linkText: 'Login →',
                path: '#' // Placeholder as this likely goes to external
              },
              {
                title: 'Forms & Documents',
                icon: 'solar:document-text-bold-duotone',
                desc: 'Download important school forms, health records, and handbooks.',
                linkText: 'Download →',
                path: '#'
              },
              {
                title: 'Contact Us',
                icon: 'solar:phone-bold-duotone',
                desc: 'Get in touch with our admissions or administrative team.',
                linkText: 'Contact →',
                path: '/contact'
              }
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-100 rounded-[22px] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-start group hover:-translate-y-2 cursor-pointer h-full"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-offWhite rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-gold/10 transition-colors">
                  <Icon icon={card.icon} width="32" className="text-gold md:w-[36px] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-navy text-2xl md:text-3xl font-header italic uppercase tracking-wide mb-4">{card.title}</h3>
                <p className="text-slate text-sm md:text-base font-medium leading-relaxed mb-8 md:mb-10 flex-grow opacity-70">
                  {card.desc}
                </p>
                <Link to={card.path} className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gold group-hover:text-navy transition-colors flex items-center gap-2 mt-auto">
                  {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section id="philosophy-section" className="relative py-40 md:py-64 bg-navy text-white text-center overflow-hidden border-y border-white/10 scroll-mt-24">
        {/* Kept existing cinematic background logic */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
            alt="The Engineering of Performance"
            className="w-full h-full object-cover opacity-[0.15] scale-110 blur-[0.5px] brightness-[0.4]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy"></div>
        </div>

        <div className="container-tight relative z-10 px-4">
          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-header italic leading-[0.85] uppercase tracking-tighter mb-16 max-w-6xl mx-auto">
            "Athleticism is <br className="hidden md:block" /> a gift, but <br />
            <span className="relative inline-block px-6 md:px-12 py-3 md:py-6 mt-4">
              <span className="absolute inset-0 bg-gold skew-x-[-12deg] shadow-[0_0_60px_rgba(200,155,60,0.3)]"></span>
              <span className="relative text-navy z-10">hard work is a requirement.</span>
            </span>"
          </h2>

          <div className="flex items-center justify-center gap-4 md:gap-8 opacity-80">
            <div className="h-[1px] bg-gold w-12 md:w-24"></div>
            <span className="text-gold font-black uppercase tracking-[0.3em] text-sm md:text-xl whitespace-nowrap">
              The S3 Academy Creed
            </span>
            <div className="h-[1px] bg-gold w-12 md:w-24"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
