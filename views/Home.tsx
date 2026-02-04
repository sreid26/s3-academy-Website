import React from 'react';
import { Icon } from '@iconify/react';
import { PageId } from '../types';
import { SkewedButton } from '../components/SkewedButton';
import { S3Logo } from '../components/S3Logo';

interface HomeProps {
  onNavigate?: (id: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      {/* Changed to min-h-screen to ensure buttons and scroll indicator have ample vertical separation */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090" 
            alt="S3 Academy Basketball Hero" 
            className="w-full h-full object-cover opacity-30 grayscale brightness-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy"></div>
          
          <video 
            autoPlay loop muted playsInline 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-10 pointer-events-none"
          >
            <source src="https://cdn.coverr.co/videos/setting-the-ball-for-a-slam-dunk-2633/1080p.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container-tight relative z-10 text-center px-4 animate-fade-in py-20">
          <div className="mb-14 flex justify-center">
             <S3Logo size="md" showText={false} variant="gold" className="animate-panther" />
          </div>
          <span className="text-gold font-bold uppercase tracking-[0.6em] text-[10px] md:text-[11px] mb-8 block">
            Engineering The Next Generation
          </span>
          <h1 className="text-white text-5xl md:text-7xl lg:text-[10rem] font-header italic leading-[0.85] tracking-tighter uppercase mb-12 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            Where <span className="text-gold">Scholars</span> <br /> Become Champions
          </h1>
          <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto mb-16 italic leading-relaxed">
            Integrating elite collegiate academic standards with professional-grade athletic performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
            <SkewedButton 
              variant="gold"
              onClick={() => scrollToSection('essentials-section')}
              className="w-full sm:w-auto"
            >
              ENROLL NOW
            </SkewedButton>
            <SkewedButton 
              variant="outline"
              onClick={() => scrollToSection('philosophy-section')}
              className="w-full sm:w-auto"
            >
              THE PHILOSOPHY
            </SkewedButton>
          </div>
        </div>
        
        {/* Interactive Scroll Indicator - Positioned lower with higher z-index to avoid button overlap */}
        <button 
          onClick={() => scrollToSection('metrics-section')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-30 hover:opacity-100 hover:scale-110 transition-all duration-500 cursor-pointer group focus:outline-none z-20"
          aria-label="Scroll to next section"
        >
          <div className="w-[1px] h-14 bg-gradient-to-b from-gold to-transparent group-hover:h-20 transition-all duration-500"></div>
          <span className="text-[10px] font-black text-gold uppercase tracking-[0.5em] mt-2">Scroll</span>
        </button>
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
                id: 'academics'
              },
              { 
                title: 'Admissions', 
                icon: 'solar:square-academic-cap-bold-duotone', 
                desc: 'Start your application process and join the S3 Academy family today.',
                linkText: 'Apply Now →',
                id: 'admissions'
              },
              { 
                title: 'Athletics', 
                icon: 'solar:cup-first-bold-duotone', 
                desc: 'Explore our national-level basketball program and performance lab.',
                linkText: 'Go Team →',
                id: 'basketball'
              },
              { 
                title: 'Parent Portal', 
                icon: 'solar:users-group-rounded-bold-duotone', 
                desc: 'Access student progress, grades, and resources for our families.',
                linkText: 'Login →',
                id: 'home'
              },
              { 
                title: 'Forms & Documents', 
                icon: 'solar:document-text-bold-duotone', 
                desc: 'Download important school forms, health records, and handbooks.',
                linkText: 'Download →',
                id: 'home'
              },
              { 
                title: 'Contact Us', 
                icon: 'solar:phone-bold-duotone', 
                desc: 'Get in touch with our admissions or administrative team.',
                linkText: 'Contact →',
                id: 'contact'
              }
            ].map((card) => (
              <div 
                key={card.title} 
                className="bg-white border border-slate-100 rounded-[22px] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-start group hover:-translate-y-2 cursor-pointer"
                onClick={() => onNavigate?.(card.id as PageId)}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-offWhite rounded-2xl flex items-center justify-center mb-8 md:mb-10 group-hover:bg-gold/10 transition-colors">
                  <Icon icon={card.icon} width="32" className="text-gold md:w-[36px] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-navy text-2xl md:text-3xl font-header italic uppercase tracking-wide mb-4">{card.title}</h3>
                <p className="text-slate text-sm md:text-base font-medium leading-relaxed mb-8 md:mb-10 flex-grow opacity-70">
                  {card.desc}
                </p>
                <button className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gold group-hover:text-navy transition-colors flex items-center gap-2">
                  {card.linkText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section id="philosophy-section" className="relative py-40 md:py-64 bg-navy text-white text-center overflow-hidden border-y border-white/10 scroll-mt-24">
        
        {/* Cinematic Modern Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070" 
            alt="The Engineering of Performance" 
            className="w-full h-full object-cover opacity-[0.15] scale-110 blur-[0.5px] brightness-[0.4]"
          />
          
          {/* Layered Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy"></div>
          
          {/* Refined Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(rgba(192, 160, 98, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 160, 98, 0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
          </div>

          {/* HUD Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/5 rounded-full animate-[spin_40s_linear_infinite] opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full animate-[spin_80s_linear_infinite] opacity-10"></div>
          
          {/* Subtle Scanning Light */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-[bounce_10s_infinite] blur-sm"></div>
        </div>

        {/* Technical Data Stream Indicators */}
        <div className="absolute top-24 left-12 md:left-32 opacity-20 text-left hidden md:block">
          <div className="w-12 h-[2px] bg-gold mb-3"></div>
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gold">BIO_METRIC_ENGINE</p>
          <p className="text-[11px] font-header italic text-white/40">v.3.2.0_STANDARDS</p>
        </div>

        <div className="absolute bottom-24 right-12 md:right-32 opacity-20 text-right hidden md:block">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gold mb-3">PERFORMANCE_LAB</p>
          <p className="text-[11px] font-header italic text-white/40">DATA_DRIVEN_EXCELLENCE</p>
          <div className="w-12 h-[2px] bg-gold ml-auto mt-3"></div>
        </div>

        <div className="container-tight relative z-10 px-4">
          <div className="inline-block relative mb-16 group">
            <div className="absolute -inset-x-32 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent -translate-y-1/2 hidden md:block scale-x-75 group-hover:scale-x-100 transition-transform duration-1000"></div>
            <div className="relative z-10 bg-navy/80 p-5 border border-gold/30 backdrop-blur-md rounded-sm transform hover:rotate-1 transition-transform">
               <S3Logo size="sm" showText={false} variant="gold" />
            </div>
          </div>

          <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-header italic leading-[0.85] uppercase tracking-tighter mb-16 max-w-6xl mx-auto">
            "Athleticism is <br className="hidden md:block" /> a gift, but <br />
            <span className="relative inline-block px-6 md:px-12 py-3 md:py-6 mt-4">
              <span className="absolute inset-0 bg-gold skew-x-[-12deg] shadow-[0_0_60px_rgba(200,155,60,0.3)]"></span>
              <span className="relative text-navy z-10">hard work is a requirement.</span>
            </span>"
          </h2>

          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
               <div className="w-16 h-[1.5px] bg-gold/30"></div>
               <p className="text-gold font-black uppercase tracking-[0.8em] text-[12px] md:text-[18px] italic">
                 THE S3 ACADEMY CREED
               </p>
               <div className="w-16 h-[1.5px] bg-gold/30"></div>
            </div>
          </div>
        </div>

        {/* UI Corners */}
        <div className="absolute top-16 left-16 w-20 h-20 border-t-2 border-l-2 border-gold/20 pointer-events-none"></div>
        <div className="absolute top-16 right-16 w-20 h-20 border-t-2 border-r-2 border-gold/20 pointer-events-none"></div>
        <div className="absolute bottom-16 left-16 w-20 h-20 border-b-2 border-l-2 border-gold/20 pointer-events-none"></div>
        <div className="absolute bottom-16 right-16 w-20 h-20 border-b-2 border-r-2 border-gold/20 pointer-events-none"></div>
      </section>
    </div>
  );
};
