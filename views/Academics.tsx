import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { SkewedButton } from './components/SkewedButton';

const S3_BRAND = {
  navy: '#001F3F',
  gold: '#C89B3C',
};

// Verified high-availability Unsplash IDs
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1600",
  middleSchool: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
  highSchool: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
  // Updated for a more "Elite / Future" feel for Postgrad
  postGrad: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
};

interface AcademicBoxProps {
  src: string;
  alt: string;
  label: string;
  position?: 'left' | 'right';
  featured?: boolean;
  isComingSoon?: boolean;
}

const AcademicImageBox: React.FC<AcademicBoxProps> = ({
  src,
  alt,
  label,
  position = 'right',
  featured = false,
  isComingSoon = false
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative bg-[#001226] aspect-[4/3] overflow-hidden shadow-2xl border border-white/5 group">
      {/* Background Placeholder / Loading State */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${(loaded || error) ? 'opacity-0' : 'opacity-100'}`}>
        <Icon
          icon="solar:mask-h-bold-duotone"
          className="w-24 h-24 text-gold opacity-20 animate-pulse"
        />
      </div>

      {/* The Image */}
      {!error ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} ${isComingSoon ? 'grayscale brightness-[0.4]' : ''}`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-navy p-12 text-center">
          <Icon icon="solar:shield-star-bold-duotone" className="w-20 h-20 text-gold/30 mb-4" />
          <p className="text-gold/50 font-header uppercase tracking-widest text-xs">Asset Loading Error</p>
        </div>
      )}

      {/* Branded Overlays */}
      <div className={`absolute top-0 ${position === 'left' ? 'left-0 border-r' : 'right-0 border-l'} w-20 h-20 bg-gold/10 backdrop-blur-md z-20 flex items-center justify-center border-b border-white/10`}>
        <span className="font-header text-white text-xl tracking-tighter">{label}</span>
      </div>

      {isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="border-2 border-gold/40 bg-navy/60 backdrop-blur-sm px-8 py-4 -rotate-12">
            <span className="font-header text-gold text-4xl uppercase tracking-[0.2em] italic">COMING 2026</span>
          </div>
        </div>
      )}

      {featured && (
        <div className="absolute bottom-0 left-0 right-0 bg-navy/90 p-6 z-20 border-t-4 border-gold backdrop-blur-md">
          <span className="text-white font-header uppercase italic tracking-[0.2em] text-2xl">
            {isComingSoon ? 'The Future of Prep // S3-PG' : 'Elite Prep Portal // S3-PG'}
          </span>
        </div>
      )}
    </div>
  );
};

export const Academics: React.FC = () => {
  return (
    <div className="bg-white font-body text-navy min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-32 bg-navy overflow-hidden border-b-8 border-gold">
        <div className="absolute inset-0 opacity-20">
          <img
            src={IMAGES.hero}
            alt="Academy Excellence"
            className="w-full h-full object-cover grayscale hero-zoom"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-gold font-black uppercase tracking-[0.4em] mb-4">
            The Foundation
          </h4>
          <h1 className="text-7xl md:text-[9rem] font-header text-white uppercase italic tracking-tighter leading-none mb-8">
            Academic <br /> <span className="text-gold">Excellence</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-xl font-medium leading-relaxed italic">
            Our rigorous curriculum is designed to prepare student-athletes for success at the collegiate level and beyond.
          </p>
        </div>
      </section>

      {/* ================= PROGRAM LEVELS ================= */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">

          {/* Middle School */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-header uppercase italic tracking-tight mb-8 border-l-8 border-gold pl-8">
                Middle School <span className="text-slate-400 block text-2xl mt-2 tracking-widest font-body font-black">(Grades 6-8)</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Our middle school program establishes a strong academic foundation with core subjects including English, mathematics, science, and social studies. We focus on developing critical thinking skills, effective study habits, and a love for learning. Small class sizes allow for individualized attention, ensuring each student masters fundamental concepts while being challenged to grow.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <AcademicImageBox src={IMAGES.middleSchool} alt="Middle School" label="S3-MS" position="right" />
            </div>
          </div>

          {/* High School */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-1">
              <AcademicImageBox src={IMAGES.highSchool} alt="High School" label="S3-HS" position="left" />
            </div>
            <div className="order-2">
              <h2 className="text-5xl font-header uppercase italic tracking-tight mb-8 border-l-8 border-gold pl-8">
                High School <span className="text-slate-400 block text-2xl mt-2 tracking-widest font-body font-black">(Grades 9-12)</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Our high school curriculum is college-preparatory and NCAA-compliant, offering a comprehensive range of courses across all core subjects. Students engage in advanced coursework that prepares them for the rigors of college-level academics. Our program emphasizes analytical thinking, effective communication, and independent research skills. We maintain high academic standards while providing the flexibility needed for serious student-athletes to train and compete at elite levels.
              </p>
            </div>
          </div>

          {/* Postgraduate Year - COMING SOON */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block bg-gold/10 px-4 py-1 border border-gold/30">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Roadmap: 2026</span>
              </div>
              <h2 className="text-5xl font-header uppercase italic tracking-tight mb-8 border-l-8 border-gold pl-8">
                Postgraduate <br /><span className="text-gold">Program</span> <span className="text-slate-400 block text-2xl mt-2 tracking-widest font-body font-black italic">(COMING SOON)</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                S3 Academy is engineering an elite postgraduate experience designed for student-athletes seeking a dedicated transition year. Our future PG curriculum will focus on intensive college readiness, standardized testing optimization, and high-performance biometric development. This program will bridge the gap between high school mastery and Division I collegiate competition.
              </p>
              <div className="mt-10">
                <SkewedButton variant="outline" className="text-sm py-3" onClick={() => window.location.href = 'mailto:info@s3academy.com?subject=Postgraduate Inquiry'}>
                  INQUIRE FOR 2026
                </SkewedButton>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <AcademicImageBox
                src={IMAGES.postGrad}
                alt="Postgrad Achievement Preview"
                label="S3-PG"
                position="right"
                featured
                isComingSoon={true}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= SUPPORT FOR STUDENT-ATHLETES ================= */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
          <h4 className="text-gold font-black uppercase tracking-[0.5em] mb-4">Panther Mentorship</h4>
          <h2 className="text-6xl md:text-7xl font-header uppercase italic tracking-tighter text-navy">Support for Student-Athletes</h2>
          <div className="h-1.5 w-32 mx-auto mt-6 bg-gold"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: 'solar:calendar-bold-duotone', title: 'Flexible Scheduling', desc: 'Our schedule accommodates both rigorous academics and elite athletic training. Morning academics allow for afternoon/evening development.' },
            { icon: 'solar:users-group-rounded-bold-duotone', title: 'Academic Tutoring', desc: 'Individualized tutoring and academic support ensure every student-athlete succeeds in the classroom with personalized instruction.' },
            { icon: 'solar:notebook-bold-duotone', title: 'Supervised Study Hall', desc: 'Daily study hall periods ensure students have dedicated time for homework and test preparation in a focused environment.' },
            { icon: 'solar:ranking-bold-duotone', title: 'GPA Monitoring', desc: 'We closely monitor progress to maintain high standards. Regular progress reports keep students and families informed.' }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all border-t-8 border-navy flex flex-col items-center text-center">
              <Icon icon={card.icon} className="mb-8" width="64" style={{ color: S3_BRAND.gold }} />
              <h3 className="text-3xl font-header uppercase mb-4 italic tracking-tight text-navy">{card.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COLLEGE PREPARATION ================= */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 transform skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative z-10">
          <h4 className="text-gold font-black uppercase tracking-[0.4em] mb-4">Engineering the Future</h4>
          <h2 className="text-6xl md:text-7xl font-header uppercase italic tracking-tighter">College Preparation</h2>
          <div className="h-1.5 w-32 mx-auto mt-6 bg-gold"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {[
            { title: 'SAT/ACT Prep', desc: 'Comprehensive test preparation programs to help students achieve competitive scores for college admissions and athletic scholarships.' },
            { title: 'College Counseling', desc: 'One-on-one guidance for college selection, application preparation, essay writing, and navigating the admissions process.' },
            { title: 'NCAA Eligibility', desc: 'Expert guidance on NCAA academic requirements, eligibility center registration, and course selection to ensure collegiate qualification.' }
          ].map((prep, idx) => (
            <div key={idx} className="p-12 bg-[#001226] border-b-8 border-gold hover:-translate-y-3 transition-all duration-500 shadow-2xl">
              <h3 className="text-4xl font-header uppercase italic tracking-tighter mb-6 text-gold">{prep.title}</h3>
              <p className="text-slate-300 font-medium leading-relaxed italic">{prep.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section className="py-24 text-center px-4 bg-gold">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-header uppercase italic tracking-tighter text-navy leading-none">
            "ATHLETICISM IS A GIFT, BUT <span className="bg-navy text-gold px-4 py-1 inline-block mt-2 shadow-2xl">HARD WORK IS A REQUIREMENT.</span>"
          </h2>
          <p className="mt-8 font-black uppercase tracking-[0.6em] text-xs text-navy/60">
            — THE S3 ACADEMY PHILOSOPHY
          </p>
        </div>
      </section>

    </div>
  );
};