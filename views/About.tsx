import React from 'react';
import { Icon } from '@iconify/react';

export const About: React.FC = () => {
  return (
    <div className="bg-white font-body text-navy">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069" 
            alt="Shining Star Academy Gym" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-6">
          <h4 className="text-gold font-black uppercase tracking-[0.3em] mb-4">Establishing Excellence</h4>
          <h1 className="text-6xl md:text-8xl font-header text-white italic tracking-tight leading-none uppercase">
            Beyond <span className="text-gold">The Game</span>
          </h1>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-header italic tracking-tight mb-8 text-navy uppercase border-l-8 border-gold pl-6">Who We Are</h2>
          <div className="space-y-8 text-xl text-slate-700 font-medium leading-relaxed">
            <p>
              S3 Academy (Shining Stars Sports Academy) is an independent private school serving grades 6-12 and a postgraduate year. We are dedicated to creating an environment where academic excellence and athletic achievement work hand in hand to develop well-rounded student-athletes.
            </p>
            <p>
              Our program is designed for motivated young men and women who are committed to excelling both in the classroom and on the basketball court. We understand that success in athletics requires the same discipline, focus, and determination that leads to academic achievement.
            </p>
            <p>
              At S3 Academy, we provide a comprehensive educational experience that prepares students not just for college, but for life. Through our rigorous academic curriculum, elite athletic training, and character development programs, we empower our students to reach their full potential and become leaders in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SHINING STAR ACADEMY (Facility History) ================= */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 transform skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h4 className="text-gold font-black uppercase tracking-widest mb-4">The Training Center</h4>
              <h2 className="text-5xl font-header italic mb-8 uppercase">SHINING STAR ACADEMY</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                The home of the S3 Panthers, Shining Star Academy facility was founded on a simple principle: elite performance requires an elite environment. What started as a local training center has evolved into a nationally recognized laboratory for basketball excellence.
              </p>
              <p className="text-slate-400 leading-relaxed font-medium">
                Our facility serves as the heartbeat of the S3 mission. Here, the "Built for the Next Level" philosophy isn't just a slogan—it's ingrained in the hardwood. From our pro-grade weight rooms to our high-tech video labs, every square inch of Shining Star Academy is designed to push athletes beyond their perceived limits.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090" 
                alt="Shining Star Academy Facility" 
                className="relative rounded shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-3xl font-header tracking-tight mb-8 text-navy uppercase">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Our mission is to cultivate a transformative environment where academic excellence and athletic achievement are seamlessly integrated. We are committed to empowering student-athletes to excel in the classroom, on the court, and in life by fostering a culture of discipline, leadership, and personal growth.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white p-12 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
              <h3 className="text-3xl font-header tracking-tight mb-8 text-navy uppercase">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Our vision is to be a premier institution where student-athletes achieve their highest potential in both academics and athletics. We strive to create a supportive environment where young men and women are prepared to excel not only in their chosen sport, but also in life. By fostering leadership, discipline, and commitment, we aim to produce graduates who are ready for collegiate success, athletic scholarships, and who will go on to become leaders in their communities and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE THREE PILLARS ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-header italic tracking-tight text-navy uppercase">Our Three Pillars</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest mt-4">The foundation of everything we do at S3 Academy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academics - Navy Circle */}
            <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center group hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Icon icon="solar:notebook-bold-duotone" className="text-white w-12 h-12" />
              </div>
              <h4 className="text-3xl font-header tracking-tight mb-4 text-navy uppercase">Academics</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                We provide a rigorous college-preparatory curriculum that challenges students to think critically, develop strong study habits, and achieve academic excellence. Our small class sizes ensure personalized attention and support for every student-athlete.
              </p>
            </div>
            
            {/* Athletics - Gold Circle */}
            <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center group hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Icon icon="solar:cup-first-bold-duotone" className="text-navy w-12 h-12" />
              </div>
              <h4 className="text-3xl font-header tracking-tight mb-4 text-navy uppercase">Athletics</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                Our elite basketball program focuses on skill development, physical conditioning, and competitive excellence. We provide daily training, professional coaching, and exposure to college recruiters to help student-athletes reach their full athletic potential.
              </p>
            </div>

            {/* Character - Navy Circle */}
            <div className="bg-white p-10 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center group hover:shadow-xl transition-all">
              <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
                <Icon icon="solar:heart-bold-duotone" className="text-white w-12 h-12" />
              </div>
              <h4 className="text-3xl font-header tracking-tight mb-4 text-navy uppercase">Character</h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                We emphasize leadership, integrity, discipline, and community. Through mentorship, service opportunities, and daily interactions, we help students develop the character traits that will serve them throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY CALLOUT ================= */}
      <section className="py-32 bg-gold text-navy text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-header italic tracking-tight leading-tight mb-8 uppercase">
            "Athleticism is a gift, but <span className="bg-navy text-gold px-4 py-1">hard work is a requirement.</span>"
          </h2>
          <p className="text-xs font-black uppercase tracking-[0.4em]">The S3 Academy Philosophy</p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 bg-navy text-white text-center border-t border-white/5 relative overflow-hidden">
        {/* Subtle decorative background logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none transform scale-[1.5]">
          <Icon icon="solar:star-fall-bold-duotone" className="w-[800px] h-[800px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-header italic uppercase tracking-tighter mb-12">
            Connect With <span className="text-gold">The Pack</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            {/* Phone Module */}
            <div 
              className="group cursor-pointer" 
              onClick={() => window.location.href = 'tel:8047322255'}
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-all duration-300 shadow-[0_0_30px_rgba(200,155,60,0.1)] group-hover:shadow-[0_0_40px_rgba(200,155,60,0.3)]">
                <Icon icon="solar:phone-bold-duotone" className="text-gold group-hover:text-navy w-10 h-10 transition-colors" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">Main Office</p>
              <p className="text-2xl md:text-4xl font-header italic tracking-wide text-white group-hover:text-gold transition-colors">
                (804) 732-2255
              </p>
            </div>

            {/* Email Module */}
            <div 
              className="group cursor-pointer" 
              onClick={() => window.location.href = 'mailto:info@s3academy.com'}
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-all duration-300 shadow-[0_0_30px_rgba(200,155,60,0.1)] group-hover:shadow-[0_0_40px_rgba(200,155,60,0.3)]">
                <Icon icon="solar:letter-bold-duotone" className="text-gold group-hover:text-navy w-10 h-10 transition-colors" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">Inquiries</p>
              <p className="text-2xl md:text-4xl font-header italic tracking-wide text-white group-hover:text-gold transition-colors uppercase">
                info@s3academy.com
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-16 border-t border-white/5 max-w-lg mx-auto">
            <p className="text-slate-500 text-sm font-medium italic">
              Our admissions team is ready to guide you through the process of joining Virginia's elite basketball leadership program.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};