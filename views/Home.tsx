import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './icons-bundle'; // Pre-load Experience S3 SVG icons offline
import { Link } from 'react-router-dom';
import { S3Logo } from './components/S3Logo';
import { SEO } from './components/SEO';
import NewsBanner from './components/NewsBanner';
import { ParallaxTour } from './components/ParallaxTour';
import { AnimatedCounter } from './components/AnimatedCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { placementsData, getLogoUrl, Placement, CollegeLogoImage } from './Alumni';
import { VideoModal } from './components/VideoModal';

function getD1LogoStrip(alumni: Placement[]) {
  const map = new Map<string, { logo: string; domain: string }>();

  for (const a of alumni) {
    if (String(a.division).toUpperCase() !== "D1") continue;
    const domain = a.collegeLogoDomain?.trim() || "";
    const logoUrl = getLogoUrl(domain);
    if (!logoUrl) continue;

    if (!map.has(a.college)) map.set(a.college, { logo: logoUrl, domain });
  }

  return Array.from(map, ([college, { logo, domain }]) => ({ college, logo, domain }));
}

const TiltCard = ({ children, className = '', key }: { children: any, className?: string, key?: any }) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates between -1 and 1
    const xNorm = (x / rect.width - 0.5) * 2;
    const yNorm = (y / rect.height - 0.5) * 2;

    // Rotate max 6 degrees
    const rotateX = yNorm * -6;
    const rotateY = xNorm * 6;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
      zIndex: 10
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), z-index 0.5s',
      zIndex: 1
    });
  };

  return (
    <div
      className={`relative will-change-transform ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const revealRef = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-offWhite overflow-hidden" ref={revealRef}>
      <SEO
        title="Home"
        description="S3 Academy: Where Scholars Become Champions. Elite basketball program and college-preparatory academics in Virginia."
        canonical="/"
      />

      {/* 1) HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.35}px)`,
            willChange: 'transform'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&fm=webp"
            alt="S3 Academy Basketball Hero"
            className="w-full h-full object-cover opacity-50 grayscale brightness-[0.7] animate-ken-burns origin-center"
            loading="eager"
            fetchPriority="high"
            width="2090"
            height="1393"
          />
          <div className="s3-hero-overlay"></div>
          {/* Animated Spotlight Sweep */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-sweep pointer-events-none mix-blend-screen opacity-60"></div>
        </div>

        <div className="container-tight relative z-10 text-center px-4 animate-fade-in py-20 mt-10">
          <div className="mb-10 flex justify-center">
            <div className="w-72 h-72 relative logo-glow animate-panther">
              <img
                src="/assets/images/s3_logo_main.png"
                alt="S3 Academy Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
                width="400"
                height="400"
              />
            </div>
          </div>
          <span className="text-gold font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[11px] mb-6 block drop-shadow-md">
            Engineering The Next Generation
          </span>
          <h1 className="displayHeadline flex flex-col items-center mb-6 md:mb-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <span className="block">Where <span className="text-gold">Scholars</span></span>
            <span className="block">Become Champions</span>
          </h1>
          <p className="bodyText text-white/95 text-base md:text-lg lg:text-xl font-medium max-w-[560px] md:max-w-[620px] mx-auto mb-3 drop-shadow-md tracking-wide">
            Integrating elite collegiate academic standards with <br className="hidden md:block" /> professional-grade athletic performance.
          </p>

          {/* Hero CTAs Wrapper */}
          <div className="flex flex-col items-center justify-center w-full mt-6 z-20 relative">
            {/* Row 1: Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-[14px] md:gap-[24px] w-full max-w-[300px] sm:max-w-none">
              <Link
                to="/enrollment"
                className="inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#0b1d3a] bg-[#c89b3c] transform -skew-x-[15deg] w-full sm:w-auto heroPrimaryBtn"
              >
                <span className="transform skew-x-[15deg]">ENROLL NOW</span>
              </Link>
              <button
                onClick={() => scrollToSection('why-s3-section')}
                className="inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#c89b3c] border-2 border-[#c89b3c] transform -skew-x-[15deg] w-full sm:w-auto heroSecondaryBtn"
              >
                <span className="transform skew-x-[15deg]">THE PHILOSOPHY</span>
              </button>
            </div>

            {/* Row 2: Explore Micro-link */}
            <div
              className="flex justify-center items-center gap-[10px] mt-[14px] md:mt-[18px] cursor-pointer group hover:opacity-80 transition-opacity animate-bounce-subtle"
              onClick={() => scrollToSection('why-s3-section')}
            >
              <span className="font-sans text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] block group-hover:underline decoration-gold underline-offset-4">Explore the S3 Standard</span>
              <Icon icon="solar:round-alt-arrow-down-bold-duotone" className="w-5 h-5 text-gold opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* 2) TRUST LOGOS STRIP (COLLEGE PLACEMENTS) */}
      <section className="py-12 md:py-16 bg-navy text-white text-center border-b border-white/5 relative overflow-hidden">
        <div className="container-tight relative z-10 reveal-on-scroll">

          {/* Logo Marquee */}
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 overflow-hidden w-full">
            <div className="text-gold font-sans font-black uppercase tracking-widest text-[11px] whitespace-nowrap z-20 relative bg-navy px-4 group">
              <span className="relative z-10">PLACED AT</span>
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gold/30 -z-10 w-[200vw] -ml-[100vw]"></div>
            </div>

            <div className="flex relative w-full overflow-hidden group/marquee mt-2 mask-edges">
              <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] opacity-70 hover:opacity-100 transition-opacity duration-500 will-change-transform">

                {/* Track A */}
                <div className="flex items-center gap-x-12 md:gap-x-20 pr-12 md:pr-20 min-w-max">
                  {[...getD1LogoStrip(placementsData), ...getD1LogoStrip(placementsData)].map((x, i) => (
                    <CollegeLogoImage
                      key={`A-${x.college}-${i}`}
                      domain={x.domain}
                      alt={`${x.college} logo`}
                      className="h-[36px] md:h-[42px] w-[100px] md:w-[120px] object-contain filter brightness-0 invert opacity-80 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block shrink-0 px-2"
                      hideOnFallback={true}
                      disableFaviconFallback={true}
                    />
                  ))}
                </div>

                {/* Track B */}
                <div className="flex items-center gap-x-12 md:gap-x-20 pr-12 md:pr-20 min-w-max" aria-hidden="true">
                  {[...getD1LogoStrip(placementsData), ...getD1LogoStrip(placementsData)].map((x, i) => (
                    <CollegeLogoImage
                      key={`B-${x.college}-${i}`}
                      domain={x.domain}
                      alt={`${x.college} logo`}
                      className="h-[36px] md:h-[42px] w-[100px] md:w-[120px] object-contain filter brightness-0 invert opacity-80 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-300 inline-block shrink-0 px-2"
                      hideOnFallback={true}
                      disableFaviconFallback={true}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Soft Fade Edges (Desktop Only) */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-navy to-transparent pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-navy to-transparent pointer-events-none hidden md:block"></div>
      </section >

      {/* 3) EXPERIENCE S3 */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="reveal-on-scroll">
              <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">EXPERIENCE S3</span>
              <h2 className="sectionHeadline mb-6">Take a 2–3 minute campus tour</h2>
              <p className="bodyText text-lg md:text-xl font-medium mb-8">
                A day in the life at S3 Academy—academics, training, culture, and the pipeline to the next level.
              </p>

              <ul className="space-y-6 mb-10">
                <li className="flex items-start">
                  <div className="mt-1 mr-4 shrink-0 bg-navy/5 p-2 rounded-lg text-gold shadow-sm ring-1 ring-slate-200">
                    <Icon icon="solar:diploma-verified-bold-duotone" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-navy mb-1.5 uppercase tracking-wide text-sm">Academics Built for College Readiness</h4>
                    <p className="bodyText text-sm">Small-class support, accountability, and high standards that travel with our athletes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 shrink-0 bg-navy/5 p-2 rounded-lg text-gold shadow-sm ring-1 ring-slate-200">
                    <Icon icon="solar:basketball-bold-duotone" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-navy mb-1.5 uppercase tracking-wide text-sm">Professional-Grade Basketball Development</h4>
                    <p className="bodyText text-sm">Skill work, strength & conditioning, and performance tracking designed for the next level.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-4 shrink-0 bg-navy/5 p-2 rounded-lg text-gold shadow-sm ring-1 ring-slate-200">
                    <Icon icon="solar:map-arrow-up-bold-duotone" className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-navy mb-1.5 uppercase tracking-wide text-sm">Placement Support That Doesn’t Guess</h4>
                    <p className="bodyText text-sm">Recruiting guidance, film strategy, exposure planning, and a network that opens doors.</p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-3.5 font-black uppercase tracking-widest text-[#0B1D3A] bg-[#C89B3C] transform -skew-x-[15deg] transition-all hover:bg-[#d4a849] hover:-translate-y-0.5 shadow-md w-full sm:w-auto"
                >
                  <span className="transform skew-x-[15deg] flex items-center justify-center gap-2">
                    <Icon icon="solar:play-circle-bold" className="w-5 h-5 shrink-0" />
                    Watch Tour
                  </span>
                </button>
                <Link
                  to="/alumni"
                  className="inline-flex items-center justify-center px-8 py-3.5 font-black uppercase tracking-widest text-[#0B1D3A] border-2 border-slate-200 bg-white transform -skew-x-[15deg] transition-all hover:bg-slate-50 hover:border-slate-300 shadow-sm w-full sm:w-auto"
                >
                  <span className="transform skew-x-[15deg]">Explore Alumni Outcomes</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Premium Video Card */}
            <div className="reveal-on-scroll delay-200">
              <TiltCard>
                <div
                  className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-[0_20px_40px_rgba(11,29,58,0.12)] ring-1 ring-slate-200/60"
                  onClick={() => setIsVideoModalOpen(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Open video tour"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsVideoModalOpen(true);
                    }
                  }}
                >
                  <img
                    src="https://img.youtube.com/vi/Gz1QEMtVZ9A/maxresdefault.jpg"
                    alt="S3 Academy Campus Tour Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90"></div>

                  {/* Pill */}
                  <div className="absolute top-4 lg:top-6 left-4 lg:left-6 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 pointer-events-none">
                    <span className="font-sans font-bold uppercase tracking-widest text-[10px] text-white select-none">CAMPUS TOUR</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center text-navy shadow-[0_0_30px_rgba(200,155,60,0.5)] transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold ring-4 ring-white/10 group-hover:ring-white/20">
                      <Icon icon="solar:play-bold" className="w-8 h-8 md:w-10 md:h-10 ml-1.5" />
                    </div>
                  </div>

                  {/* Bottom Text Area */}
                  <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 pointer-events-none">
                    <h3 className="font-header font-bold text-2xl md:text-3xl text-white uppercase tracking-wider drop-shadow-md mb-1 break-words leading-none">Watch Tour</h3>
                    <p className="font-sans text-white/90 text-[13px] md:text-sm font-medium tracking-wide">2–3 minutes &bull; Day in the life</p>
                  </div>
                </div>
              </TiltCard>
              <div className="text-center mt-5">
                <a href="https://youtu.be/Gz1QEMtVZ9A" target="_blank" rel="noopener noreferrer" className="font-sans font-bold text-[11px] uppercase tracking-widest text-slate-400 hover:text-navy transition-colors inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full hover:bg-slate-100/50">
                  <Icon icon="solar:link-circle-linear" className="w-4 h-4 shrink-0" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) WHY S3 (4 PILLARS) */}
      <section id="why-s3-section" className="py-16 md:py-24 bg-offWhite scroll-mt-24" >
        <div className="container-tight">
          <div className="text-center mb-16 md:mb-20 px-4 reveal-on-scroll">
            <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">The S3 Standard</span>
            <h2 className="sectionHeadline mb-6">WHY S3 ACADEMY</h2>
            <div className="h-1 lg:h-1.5 w-16 lg:w-24 bg-gold mx-auto relative overflow-hidden animate-draw-line mb-8">
              <div className="absolute inset-y-0 right-0 w-2 bg-navy -skew-x-12 transform origin-right translate-x-1"></div>
            </div>

            {/* Proof Row */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 font-sans font-bold text-[9px] md:text-[11px] uppercase tracking-widest text-slate-500 max-w-3xl mx-auto">
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-gold/50 cursor-pointer transition-colors block shrink-0">Academics</span>
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-gold/50 cursor-pointer transition-colors block shrink-0">Basketball Lab</span>
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-gold/50 cursor-pointer transition-colors block shrink-0">Recruiting Support</span>
              <span className="bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm hover:border-gold/50 cursor-pointer transition-colors block shrink-0">Character</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Academic Excellence",
                icon: "solar:diploma-verified-bold-duotone",
                desc: "Rigorous, college-ready academic standards designed to challenge and prepare scholars."
              },
              {
                title: "Elite Basketball Development",
                icon: "solar:basketball-bold-duotone",
                desc: "Focused on building high-level skill, elite basketball IQ, and professional-grade physical performance."
              },
              {
                title: "Character & Leadership",
                icon: "solar:shield-star-bold-duotone",
                desc: "Fostering absolute discipline, integrity, and daily mentorship to build men of character."
              },
              {
                title: "College Placement Support",
                icon: "solar:route-bold-duotone",
                desc: "Comprehensive recruiting guidance and premier exposure to maximize collegiate playing opportunities."
              }
            ].map((pillar, idx) => (
              <TiltCard key={idx} className={`reveal-on-scroll delay-${(idx + 1) * 100} h-full`}>
                <div className={`bg-white p-8 md:p-10 border border-slate-100 hover:border-gold/40 shadow-sm hover:shadow-[0_20px_40px_rgba(200,155,60,0.12)] -translate-y-0 hover:-translate-y-2 transition-all duration-500 rounded-2xl text-center group flex flex-col items-center h-full`}>
                  <div className="w-16 h-16 mx-auto bg-slate-50 group-hover:bg-gold/10 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-[0_0_15px_rgba(200,155,60,0.3)] border border-slate-100 group-hover:border-gold/30">
                    <Icon icon={pillar.icon} className="w-8 h-8 text-navy group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-sans font-black text-[17px] md:text-[20px] uppercase tracking-wide text-navy mb-4 group-hover:text-gold transition-colors duration-500 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-[13px] md:text-sm font-medium leading-[1.6] opacity-90 group-hover:opacity-100 transition-opacity max-w-[240px] mx-auto">
                    {pillar.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section >

      {/* 4) PROOF STATS ROW */}
      <section id="metrics-section" className="bg-navy border-y-[6px] border-gold relative overflow-hidden py-0">
        {/* Subtle Brand Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy/40 via-navy to-[#051021] pointer-events-none z-0"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

        <div className="container-tight relative z-10 flex flex-col md:flex-row shadow-2xl reveal-on-scroll">
          {[
            { label: 'College Placement', value: 100, suffix: '%', micro: 'Of all graduates' },
            { label: 'D1 Scholarships', value: 85, suffix: '+', micro: 'Secured for athletes' },
            { label: 'State Titles', value: 9, suffix: '', micro: 'Championship pedigree' },
            { label: 'Average GPA', value: 3.94, suffix: '', decimals: 2, micro: 'Academic excellence' }
          ].map((stat, idx) => (
            <div key={stat.label} className={`flex-1 text-center group py-16 md:py-24 px-6 md:px-8 border-b md:border-b-0 md:border-r border-white/10 relative ${idx === 3 ? 'md:border-r-0 border-b-0' : ''}`}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-[2px] bg-gold/30 group-hover:bg-gold transition-colors duration-500 rounded-full"></div>
              <div className="font-header font-black text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-[0_4px_24px_rgba(255,255,255,0.15)] leading-[1.1] pb-2 transition-all duration-700 group-hover:scale-105 group-hover:from-gold group-hover:via-gold group-hover:to-gold/50">
                <AnimatedCounter
                  end={stat.value as number}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2500 + (idx * 500)} // Stagger the finish times slightly
                  delay={400 + (idx * 150)} // Delay until reveal animation brings text onto screen
                />
              </div>
              <div className="font-sans text-gold/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] mt-6 group-hover:text-gold transition-colors">
                {stat.label}
              </div>
              <p className="font-sans text-white/50 text-[10px] md:text-[11px] font-medium tracking-wide mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                {stat.micro}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote Strip */}
        <div className="w-full bg-[#051021] py-4 px-6 text-center border-t border-white/5">
          <p className="text-slate-400 text-[10px] font-medium tracking-widest uppercase opacity-80">
            * Program outcomes reflected across recent elite cohorts.
          </p>
        </div>

        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 blur-[100px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 blur-[100px] pointer-events-none mix-blend-screen"></div>
      </section >

      {/* 5) EVERYDAY ESSENTIALS */}
      <section id="essentials-section" className="py-16 md:py-24 bg-[#F8FAFC] scroll-mt-24">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 px-4 gap-6 reveal-on-scroll">
            <div>
              <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">For Students & Families</span>
              <h2 className="sectionHeadline">Everyday Essentials</h2>
              <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gold mt-6 animate-draw-line origin-left"></div>
            </div>
            {/* Elevated CTA for essentials */}
            <Link to="/academics" className="btn-outline shrink-0 text-xs md:text-sm mx-auto md:mx-0 px-8 py-3 bg-white hover:bg-gold hover:text-navy focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2">
              VIEW CURRICULUM
            </Link>
          </div>

          {/* Scannability Category Chips */}
          <div className="flex flex-wrap gap-2 md:gap-3 px-4 md:px-0 mb-10 reveal-on-scroll delay-100">
            {['All', 'Academics', 'Admissions', 'Athletics', 'Resources'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1 ${activeCategory === cat
                  ? 'bg-navy text-white border-navy shadow-md'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-gold/50 hover:text-navy hover:shadow-sm'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {[
              {
                title: 'Academic Calendar',
                category: 'Academics',
                icon: 'solar:calendar-bold-duotone',
                desc: 'Important dates and school events throughout the academic year.',
                linkText: 'View Calendar',
                path: '/academics'
              },
              {
                title: 'Admissions',
                category: 'Admissions',
                icon: 'solar:square-academic-cap-bold-duotone',
                desc: 'Begin your journey and join the S3 Academy family today.',
                linkText: 'Apply Now',
                path: '/enrollment'
              },
              {
                title: 'Athletics',
                category: 'Athletics',
                icon: 'solar:cup-first-bold-duotone',
                desc: 'Explore our national-level basketball program and lab.',
                linkText: 'Go Team',
                path: '/basketball'
              },
              {
                title: 'Parent Portal',
                category: 'Resources',
                icon: 'solar:users-group-rounded-bold-duotone',
                desc: 'Access real-time student progress, grades, and updates.',
                linkText: 'Login',
                path: '#'
              },
              {
                title: 'Forms & Documents',
                category: 'Resources',
                icon: 'solar:document-text-bold-duotone',
                desc: 'Required health records, waivers, and student handbooks.',
                linkText: 'Download',
                path: '#'
              },
              {
                title: 'Contact Us',
                category: 'Admissions',
                icon: 'solar:phone-bold-duotone',
                desc: 'Reach out directly to our administrative and admissions team.',
                linkText: 'Contact',
                path: '/contact'
              }
            ].map((card, idx) => (
              <TiltCard
                key={card.title}
                className={`reveal-on-scroll delay-${(idx % 3 + 1) * 100} ${activeCategory === 'All' || activeCategory === card.category ? 'block' : 'hidden'} h-full group`}
              >
                <Link to={card.path} className="bg-white border border-slate-200 rounded-xl p-8 transition-shadow duration-300 flex flex-col items-start hover:shadow-[0_15px_30px_rgba(200,155,60,0.1)] hover:border-gold/40 h-full relative overflow-hidden block text-left">
                  {/* Subtle Top Glow Base */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="flex items-center gap-5 mb-5 w-full text-left">
                    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0 border border-slate-100 group-hover:border-gold/20 shadow-sm">
                      <Icon icon={card.icon} width="24" className="text-slate-400 group-hover:text-gold transition-colors" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-sans font-black uppercase text-slate-400 tracking-widest leading-none mb-1 group-hover:text-gold/80 transition-colors">{card.category}</span>
                      <h3 className="font-sans font-bold text-navy text-lg md:text-xl uppercase tracking-wide m-0 leading-tight group-hover:text-gold transition-colors">{card.title}</h3>
                    </div>
                  </div>

                  <p className="font-sans text-slate-500 text-[13px] md:text-sm font-medium leading-relaxed mb-6 flex-grow text-left">
                    {card.desc}
                  </p>

                  {/* Upgraded Card CTA */}
                  <div className="font-sans w-full pt-4 border-t border-slate-100 flex items-center justify-between text-navy font-bold text-[10px] md:text-xs uppercase tracking-widest group-hover:text-gold transition-colors">
                    <span className="flex items-center gap-2 group-hover:underline decoration-gold underline-offset-4">
                      {card.linkText}
                    </span>
                    <Icon icon="solar:arrow-right-line-duotone" width="18" className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5) IN THE NEWS MODULE */}
      < NewsBanner />

      {/* 6) ALUMNI OUTCOMES */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200 scroll-mt-24">
        <div className="container-tight">
          <div className="text-center mb-16 md:mb-20 px-4 reveal-on-scroll">
            <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">Alumni Outcomes</span>
            <h2 className="sectionHeadline mb-6">This is a Pipeline to College</h2>
            <div className="h-1 lg:h-1.5 w-16 lg:w-24 bg-gold mx-auto relative overflow-hidden animate-draw-line">
              <div className="absolute inset-y-0 right-0 w-2 bg-navy -skew-x-12 transform origin-right translate-x-1"></div>
            </div>
            <p className="font-sans text-slate-500 font-medium max-w-2xl mx-auto mt-6 text-sm md:text-base">
              Our student-athletes don't just graduate; they elevate to the next level of elite collegiate competition.
            </p>
          </div>

          <div className="relative group/carousel reveal-on-scroll">
            {/* Keyboard-accessible fade masking edges */}
            <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 md:px-0 pb-12 overflow-y-hidden hide-scrollbar -mx-4 sm:mx-0 w-full scroll-smooth" tabIndex={0} aria-label="Alumni Gallery">
              {placementsData.filter(p => p.division === 'D1' && p.image).slice(0, 8).map((alumni, idx) => (
                <TiltCard key={idx} className={`snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[340px] lg:w-[300px] xl:w-[280px] reveal-on-scroll delay-${(idx % 4 + 1) * 100} group relative bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-100 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(200,155,60,0.15)] transition-shadow duration-500 cursor-pointer`}>
                  {/* Image Section */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: alumni.imagePosition || '50% 15%' }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Status Label */}
                    <div className="font-sans absolute top-4 left-4 bg-gold text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10 transition-transform group-hover:scale-105">
                      {alumni.status} <span className="font-black">{alumni.college}</span>
                    </div>

                    {/* College Logo Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg p-2 shadow-lg flex items-center justify-center border border-slate-100 z-10 transition-transform group-hover:scale-110">
                      <CollegeLogoImage domain={alumni.collegeLogoDomain} alt={alumni.college} className="max-w-full max-h-full object-contain" disableFaviconFallback={true} hideOnFallback={true} />
                    </div>

                    {/* Content Section */}
                    <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                      <p className="font-sans text-gold font-bold uppercase tracking-widest text-[10px] mb-1">Class of {alumni.year}</p>
                      <h4 className="font-sans font-black text-white uppercase text-xl md:text-2xl tracking-tight m-0 drop-shadow-md">
                        {alumni.name}
                      </h4>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          <div className="text-center font-sans mt-2 flex flex-col md:flex-row justify-center items-center gap-4">
            <Link to="/alumni" className="btn-outline border-navy text-navy hover:bg-navy hover:text-gold px-12 py-4 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2">
              EXPLORE ALL ALUMNI
            </Link>
            <Link to="/alumni" className="btn-link text-[10px] md:text-xs">
              <span className="flex items-center gap-1.5">
                <Icon icon="solar:map-point-bold-duotone" className="w-4 h-4" />
                See Full Alumni Map
              </span>
            </Link>
          </div>
        </div>
      </section >

      {/* 7) ENROLLMENT CTA (Final Conversion Block) */}
      < section className="relative py-10 md:py-20 bg-navy text-white text-center border-t-8 border-gold overflow-hidden" >
        {/* Subtle Background Glow */}
        < div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" ></div >

        <div className="container-tight relative z-10 px-4 reveal-on-scroll">
          <h2 className="sectionHeadline mb-6 drop-shadow-lg">
            READY TO JOIN <br className="md:hidden" /><span className="text-gold">S3 ACADEMY?</span>
          </h2>
          <p className="font-sans text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a visit, start your application, or request information.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-[300px] sm:max-w-none mx-auto mt-6">
            <Link
              to="/enrollment"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#0b1d3a] bg-[#c89b3c] overflow-hidden transform -skew-x-[15deg] transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(200,155,60,0.3)] hover:shadow-[0_0_40px_rgba(200,155,60,0.6)]"
            >
              <div className="absolute top-0 left-0 w-0 h-full bg-white transition-all duration-500 ease-out group-hover:w-full z-0"></div>
              <span className="relative z-10 transform skew-x-[15deg] transition-transform duration-300 group-hover:scale-105">ENROLL NOW</span>
            </Link>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#c89b3c] border-2 border-[#c89b3c] overflow-hidden transform -skew-x-[15deg] transition-all duration-300 w-full sm:w-auto"
            >
              <div className="absolute top-0 left-0 w-0 h-full bg-[#c89b3c] transition-all duration-500 ease-out group-hover:w-full z-0"></div>
              <span className="relative z-10 transform skew-x-[15deg] transition-colors duration-300 group-hover:text-[#0b1d3a]">SCHEDULE A VISIT</span>
            </Link>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="btn-link text-xs tracking-[0.2em] opacity-80 hover:opacity-100">
              REQUEST INFO
            </Link>
          </div>
        </div>
      </section >

      {/* Floating Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="Gz1QEMtVZ9A"
      />

    </div >
  );
};
