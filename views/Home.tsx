import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { S3Logo } from './components/S3Logo';
import { SEO } from './components/SEO';
import NewsBanner from './components/NewsBanner';
import { ParallaxTour } from './components/ParallaxTour';
import { AnimatedCounter } from './components/AnimatedCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const revealRef = useScrollReveal();

  return (
    <div className="bg-offWhite overflow-hidden" ref={revealRef}>
      <SEO
        title="Home"
        description="S3 Academy: Where Scholars Become Champions. Elite basketball program and college-preparatory academics in Virginia."
        canonical="/"
      />

      {/* 1) HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&fm=webp"
            alt="S3 Academy Basketball Hero"
            className="w-full h-full object-cover opacity-50 grayscale brightness-[0.7] scale-105"
            loading="eager"
            fetchPriority="high"
            width="2090"
            height="1393"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/80"></div>
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
          <span className="font-sans text-gold/90 font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs mb-6 block">
            The Future of Elite Performance
          </span>
          <h1 className="text-white text-[4rem] md:text-[6.5rem] lg:text-[9rem] font-header font-bold leading-[0.85] tracking-[-0.04em] uppercase mb-6 md:mb-8 [text-shadow:0_6px_12px_rgba(0,0,0,0.6)] flex flex-col items-center">
            <div className="relative inline-block tracking-[-0.02em] transform -skew-x-[12deg] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] mb-1 md:mb-2 lg:mb-3">
              Scholars
            </div>
            <div className="text-gold relative inline-block tracking-[-0.02em] transform -skew-x-[12deg] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] mb-1 md:mb-2 lg:mb-3">
              Champions
            </div>
            <div className="relative inline-block tracking-[-0.02em] transform -skew-x-[12deg] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
              Leaders
            </div>
          </h1>
          <p className="font-sans text-white/95 text-base md:text-lg lg:text-xl font-medium max-w-[560px] md:max-w-[620px] mx-auto mb-6 leading-relaxed tracking-wide md:mt-12">
            Integrating elite collegiate academic standards with professional-grade athletic performance.
          </p>

          <div className="font-sans flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-10 md:mb-12 text-white/60 font-semibold uppercase tracking-[0.25em] text-[8.5px] md:text-[10px]">
            <span>100% College Placement</span>
            <span className="hidden md:inline w-1 h-1 bg-gold/50 rounded-full mx-1"></span>
            <span>85+ D1 Scholarships</span>
            <span className="hidden md:inline w-1 h-1 bg-gold/50 rounded-full mx-1"></span>
            <span>3.94 Avg GPA</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-[300px] sm:max-w-none mx-auto mt-6">
            <Link
              to="/enrollment"
              className="relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#0b1d3a] bg-[#c89b3c] transform -skew-x-[15deg] transition-all duration-300 hover:bg-white w-full sm:w-auto hover:-translate-y-1 shadow-[0_0_20px_rgba(200,155,60,0.3)] hover:shadow-[0_0_30px_rgba(200,155,60,0.6)]"
            >
              <span className="transform skew-x-[15deg]">ENROLL NOW</span>
            </Link>
            <button
              onClick={() => scrollToSection('why-s3-section')}
              className="relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#c89b3c] border-2 border-[#c89b3c] transform -skew-x-[15deg] transition-all duration-300 hover:bg-[#c89b3c] hover:text-[#0b1d3a] w-full sm:w-auto"
            >
              <span className="transform skew-x-[15deg]">THE PHILOSOPHY</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2) TRUST LOGOS STRIP (COLLEGE PLACEMENTS) */}
      <section className="py-10 bg-navy text-white text-center border-b border-white/5 relative overflow-hidden">
        <div className="container-tight relative z-10 reveal-on-scroll">
          <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-50 mb-8 text-gold">Trusted by Elite College Programs</h3>

          {/* Logo Grid - Responsive */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-80 hover:opacity-100 transition-opacity duration-500">
            {/* 
              These are placeholders. 
              Replace the div tags with <img> tags using white/monochrome versions of real college logos at a consistent height (e.g., h-8).
            */}
            {[
              "Duke", "UNC", "NC State", "Virginia", "Maryland", "Georgetown", "Villanova", "UConn"
            ].map((college) => (
              <div key={college} className={`h-10 md:h-12 px-6 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white/10 hover:border-white/20 ${college === "Villanova" || college === "UConn" ? "hidden md:flex" : ""}`}>
                <span className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white/70">{college}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Fade Edges (Desktop Only) */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-navy to-transparent pointer-events-none hidden md:block"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-navy to-transparent pointer-events-none hidden md:block"></div>
      </section>

      {/* 3) WHY S3 (4 PILLARS) */}
      <section id="why-s3-section" className="py-10 md:py-20 bg-offWhite scroll-mt-24">
        <div className="container-tight">
          <div className="text-center mb-16 md:mb-20 px-4 reveal-on-scroll">
            <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">The S3 Standard</span>
            <h2 className="text-navy text-4xl md:text-5xl lg:text-6xl font-header font-bold uppercase tracking-tight leading-tight mb-6">WHY S3 ACADEMY</h2>
            <div className="h-1 lg:h-1.5 w-16 lg:w-24 bg-gold mx-auto relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 w-2 bg-navy -skew-x-12 transform origin-right translate-x-1"></div>
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
              <div key={idx} className={`reveal-on-scroll delay-${(idx + 1) * 100} bg-white p-8 md:p-10 border border-slate-100 hover:border-transparent border-t-4 border-t-transparent hover:border-t-gold shadow-sm hover:shadow-[0_20px_40px_rgba(11,29,58,0.08)] hover:-translate-y-2 transition-all duration-500 rounded-2xl text-center group flex flex-col items-center`}>
                <div className="w-14 h-14 mx-auto bg-slate-50 group-hover:bg-gold/10 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 group-hover:scale-110">
                  <Icon icon={pillar.icon} className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-500" />
                </div>
                <h3 className="font-sans font-bold text-lg md:text-[20px] uppercase tracking-wide text-navy mb-4 group-hover:text-gold transition-colors duration-500 leading-tight">
                  {pillar.title}
                </h3>
                <p className="font-sans text-slate-600 text-[13px] md:text-sm font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) PROOF STATS ROW */}
      <section id="metrics-section" className="bg-navy border-y-[6px] border-gold relative overflow-hidden py-0">
        <div className="container-tight relative z-10 flex flex-col md:flex-row shadow-2xl reveal-on-scroll">
          {[
            { label: 'College Placement', value: 100, suffix: '%' },
            { label: 'D1 Scholarships', value: 85, suffix: '+' },
            { label: 'State Titles', value: 9, suffix: '' },
            { label: 'Average GPA', value: 3.94, suffix: '', decimals: 2 }
          ].map((stat, idx) => (
            <div key={stat.label} className={`flex-1 text-center group py-16 md:py-24 px-6 md:px-8 border-b md:border-b-0 md:border-r border-white/10 ${idx === 3 ? 'md:border-r-0 border-b-0' : ''}`}>
              <div className="text-white font-header font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight transition-colors group-hover:text-gold drop-shadow-lg leading-none">
                <AnimatedCounter
                  end={stat.value as number}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2500 + (idx * 500)} // Stagger the finish times slightly
                />
              </div>
              <div className="font-sans text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] mt-6">
                {stat.label}
              </div>
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
      </section>

      {/* 5) EVERYDAY ESSENTIALS */}
      <section id="essentials-section" className="py-10 md:py-20 bg-[#F8FAFC] scroll-mt-24">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 px-4 gap-6 reveal-on-scroll">
            <div>
              <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">For Students & Families</span>
              <h2 className="text-navy text-4xl md:text-5xl lg:text-6xl font-header font-bold uppercase tracking-tight leading-none">Everyday Essentials</h2>
              <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gold mt-6"></div>
            </div>
            {/* Elevated CTA for essentials */}
            <Link to="/academics" className="btn-outline shrink-0 text-xs md:text-sm mx-auto md:mx-0 px-8 py-3 bg-white">
              VIEW CURRICULUM
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {[
              {
                title: 'Academic Calendar',
                icon: 'solar:calendar-bold-duotone',
                desc: 'Important dates and school events throughout the academic year.',
                linkText: 'View Calendar',
                path: '/academics'
              },
              {
                title: 'Admissions',
                icon: 'solar:square-academic-cap-bold-duotone',
                desc: 'Begin your journey and join the S3 Academy family today.',
                linkText: 'Apply Now',
                path: '/enrollment'
              },
              {
                title: 'Athletics',
                icon: 'solar:cup-first-bold-duotone',
                desc: 'Explore our national-level basketball program and lab.',
                linkText: 'Go Team',
                path: '/basketball'
              },
              {
                title: 'Parent Portal',
                icon: 'solar:users-group-rounded-bold-duotone',
                desc: 'Access real-time student progress, grades, and updates.',
                linkText: 'Login',
                path: '#'
              },
              {
                title: 'Forms & Documents',
                icon: 'solar:document-text-bold-duotone',
                desc: 'Required health records, waivers, and student handbooks.',
                linkText: 'Download',
                path: '#'
              },
              {
                title: 'Contact Us',
                icon: 'solar:phone-bold-duotone',
                desc: 'Reach out directly to our administrative and admissions team.',
                linkText: 'Contact',
                path: '/contact'
              }
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`reveal-on-scroll delay-${(idx % 3 + 1) * 100} bg-white border border-slate-200 rounded-xl p-8 transition-all duration-300 flex flex-col items-start group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(200,155,60,0.15)] hover:border-gold/30 cursor-pointer h-full relative overflow-hidden`}
              >
                {/* Subtle Top Glow Base */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex items-center gap-5 mb-5 w-full">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0 border border-slate-100 group-hover:border-gold/20">
                    <Icon icon={card.icon} width="24" className="text-slate-400 group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-sans font-bold text-navy text-lg md:text-xl uppercase tracking-wide m-0 leading-tight group-hover:text-gold transition-colors">{card.title}</h3>
                </div>

                <p className="font-sans text-slate-500 text-[13px] md:text-sm font-medium leading-relaxed mb-6 flex-grow">
                  {card.desc}
                </p>

                {/* Upgraded Card CTA */}
                <Link to={card.path} className="font-sans w-full pt-4 border-t border-slate-100 flex items-center justify-between text-navy font-bold text-[10px] md:text-xs uppercase tracking-widest group-hover:text-gold transition-colors">
                  <span className="flex items-center gap-2">
                    {card.linkText}
                  </span>
                  <Icon icon="solar:arrow-right-line-duotone" width="18" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5) IN THE NEWS MODULE */}
      <NewsBanner />

      {/* 6) ALUMNI OUTCOMES */}
      <section className="py-10 md:py-20 bg-white border-y border-slate-200 scroll-mt-24">
        <div className="container-tight">
          <div className="text-center mb-16 md:mb-20 px-4 reveal-on-scroll">
            <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">Alumni Outcomes</span>
            <h2 className="text-navy text-4xl md:text-5xl lg:text-6xl font-header font-bold uppercase tracking-tight leading-tight mb-6">This is a Pipeline to College</h2>
            <div className="h-1 lg:h-1.5 w-16 lg:w-24 bg-gold mx-auto relative overflow-hidden">
              <div className="absolute inset-y-0 right-0 w-2 bg-navy -skew-x-12 transform origin-right translate-x-1"></div>
            </div>
            <p className="font-sans text-slate-500 font-medium max-w-2xl mx-auto mt-6 text-sm md:text-base">
              Our student-athletes don't just graduate; they elevate to the next level of elite collegiate competition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 mb-12">
            {[
              {
                name: "Doris Reid",
                year: "Class of 2025",
                college: "NC State",
                status: "Committed to",
                image: "/assets/images/students-classroom.png",
                logo: "/assets/images/s3_logo_main.png"
              },
              {
                name: "Player Two",
                year: "Class of 2024",
                college: "Duke University",
                status: "Signed with",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&fm=webp",
                logo: "/assets/images/s3_logo_main.png"
              },
              {
                name: "Player Three",
                year: "Class of 2024",
                college: "Virginia",
                status: "Signed with",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&fm=webp",
                logo: "/assets/images/s3_logo_main.png"
              },
              {
                name: "Player Four",
                year: "Class of 2023",
                college: "Georgetown",
                status: "Placed at",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&fm=webp",
                logo: "/assets/images/s3_logo_main.png"
              }
            ].map((alumni, idx) => (
              <div key={idx} className={`reveal-on-scroll delay-${(idx + 1) * 100} group relative bg-[#F8FAFC] rounded-2xl overflow-hidden border border-slate-100 hover:border-gold/50 shadow-sm hover:shadow-[0_15px_30px_rgba(200,155,60,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer`}>
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Status Label */}
                  <div className="font-sans absolute top-4 left-4 bg-gold text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-10 transition-transform group-hover:scale-105">
                    {alumni.status} <span className="font-black">{alumni.college}</span>
                  </div>

                  {/* College Logo Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg p-2 shadow-lg flex items-center justify-center border border-slate-100 z-10 transition-transform group-hover:scale-110">
                    <img src={alumni.logo} alt={alumni.college} className="max-w-full max-h-full object-contain" />
                  </div>

                  {/* Content Section */}
                  <div className="absolute bottom-0 left-0 p-6 w-full z-20">
                    <p className="font-sans text-gold font-bold uppercase tracking-widest text-[10px] mb-1">{alumni.year}</p>
                    <h4 className="font-sans font-black text-white uppercase text-xl md:text-2xl tracking-tight m-0 drop-shadow-md">
                      {alumni.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/alumni" className="btn-outline border-navy text-navy hover:bg-navy hover:text-gold px-12 py-4 shadow-sm hover:shadow-lg">
              EXPLORE ALL ALUMNI
            </Link>
          </div>
        </div>
      </section>

      {/* 7) ENROLLMENT CTA (Final Conversion Block) */}
      <section className="relative py-10 md:py-20 bg-navy text-white text-center border-t-8 border-gold overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container-tight relative z-10 px-4 reveal-on-scroll">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-header font-bold leading-none uppercase tracking-tight mb-6 drop-shadow-lg">
            READY TO JOIN <br className="md:hidden" /><span className="text-gold">S3 ACADEMY?</span>
          </h2>
          <p className="font-sans text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Schedule a visit, start your application, or request information.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-[300px] sm:max-w-none mx-auto mt-6">
            <Link
              to="/enrollment"
              className="relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#0b1d3a] bg-[#c89b3c] transform -skew-x-[15deg] transition-all duration-300 hover:bg-white w-full sm:w-auto hover:-translate-y-1 shadow-[0_0_20px_rgba(200,155,60,0.3)] hover:shadow-[0_0_30px_rgba(200,155,60,0.6)]"
            >
              <span className="transform skew-x-[15deg]">ENROLL NOW</span>
            </Link>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-10 py-4 font-black uppercase tracking-widest text-[#c89b3c] border-2 border-[#c89b3c] transform -skew-x-[15deg] transition-all duration-300 hover:bg-[#c89b3c] hover:text-[#0b1d3a] w-full sm:w-auto"
            >
              <span className="transform skew-x-[15deg]">SCHEDULE A VISIT</span>
            </Link>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="btn-link text-xs tracking-[0.2em] opacity-80 hover:opacity-100">
              REQUEST INFO
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
