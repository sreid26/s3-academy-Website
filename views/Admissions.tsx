import React from 'react';
import { Icon } from '@iconify/react';
import { SkewedButton } from './components/SkewedButton';
import { S3Logo } from './components/S3Logo';

export const Admissions: React.FC = () => {
  return (
    <div className="bg-offWhite min-h-screen font-body text-navy">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-navy flex items-center overflow-hidden" aria-labelledby="admissions-hero-title">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523050335192-ce12504016d7?q=80&w=2070"
            alt="Admissions Background"
            className="w-full h-full object-cover grayscale brightness-[0.4]"
            aria-hidden="true"
          />
        </div>

        {/* Large Faded S3 Logo Background for Brand Anchoring */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none transform scale-150 rotate-[-15deg]">
          <div className="w-80 h-80 relative logo-glow">
            <img
              src="/assets/images/s3_logo_main.png"
              alt="Background Logo"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
          <div className="mb-8 inline-block bg-white/5 p-5 rounded-full backdrop-blur-md border border-white/10">
            <S3Logo size="xl" showText={false} variant="gold" />
          </div>
          <h4 className="text-gold font-black uppercase tracking-[0.5em] mb-4 text-[10px] md:text-sm">Start Your Journey</h4>
          <h1 id="admissions-hero-title" className="text-5xl md:text-[9rem] font-header italic text-white uppercase tracking-tighter leading-none">JOIN THE <span className="text-gold">PACK</span></h1>
        </div>
      </section>

      {/* Enrollment Path */}
      <section className="py-24 container mx-auto px-4 lg:px-6" aria-labelledby="path-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 id="path-title" className="text-4xl md:text-6xl font-header italic mb-12 uppercase border-l-8 border-gold pl-6 tracking-tight">The Path to Panther</h2>
            <div className="space-y-10" role="list">
              {[
                { step: "01", title: "Online Inquiry", desc: "Express your interest. Share academic transcripts and athletic highlights with our scouts.", icon: "solar:pen-new-square-bold-duotone" },
                { step: "02", title: "Campus Evaluation", desc: "Visit the S3 Academy Performance Center for a specialized workout and academic assessment.", icon: "solar:map-point-bold-duotone" },
                { step: "03", title: "Official Application", desc: "Submit a comprehensive profile reflecting academic standing and character alignment.", icon: "solar:document-text-bold-duotone" },
                { step: "04", title: "Board Review", desc: "Our committee evaluates the holistic fit within the S3 Academy culture and standard.", icon: "solar:users-group-rounded-bold-duotone" }
              ].map((item, idx) => (
                <div key={idx} role="listitem" className="bg-white p-8 md:p-12 flex gap-8 items-center border border-slate-100 group hover:shadow-2xl transition-all relative overflow-hidden rounded-sm cursor-default">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 transform translate-x-16 -translate-y-16 rounded-full group-hover:scale-110 transition-transform" aria-hidden="true"></div>
                  <div className="text-5xl md:text-7xl font-header text-gold italic group-hover:scale-110 transition-transform select-none flex-shrink-0" aria-hidden="true">{item.step}</div>
                  <div>
                    <h4 className="text-2xl md:text-4xl font-header italic uppercase mb-2 tracking-wide leading-none group-hover:text-gold transition-colors">{item.title}</h4>
                    <p className="text-slate-500 font-medium text-sm md:text-lg leading-relaxed italic opacity-80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Sidebar */}
          <aside className="lg:col-span-4" aria-labelledby="apply-sidebar-title">
            <div className="bg-navy p-10 md:p-14 text-white shadow-[0_45px_100px_-20px_rgba(0,0,0,0.6)] sticky top-32 border-b-[10px] border-gold overflow-hidden rounded-sm">
              {/* Refined Dot Pattern Texture */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #C0A062 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

              <h3 id="apply-sidebar-title" className="text-4xl md:text-5xl font-header italic text-gold mb-6 uppercase tracking-tight relative z-10">APPLY NOW</h3>
              <p className="text-slate-300 text-base md:text-xl font-medium leading-relaxed mb-10 italic relative z-10">
                The current cycle is open for elite student-athletes grades 6-12. Limited roster spots available for the upcoming season.
              </p>

              <div className="relative z-10 mb-14">
                <SkewedButton
                  variant="gold"
                  className="w-full text-xl md:text-3xl py-5 md:py-6 shadow-[0_20px_50px_rgba(200,155,60,0.4)] hover:scale-[1.03] active:scale-[0.98] hover:bg-[#dcb050] transition-all duration-300 group"
                  aria-label="Start your application for S3 Academy"
                >
                  START APPLICATION
                  <Icon icon="solar:arrow-right-bold" className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform" />
                </SkewedButton>
              </div>

              <div className="mt-8 pt-12 border-t border-white/10 text-center relative z-10">
                <p className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-500 mb-10">RESOURCES & SUPPORT</p>

                <div className="flex flex-col gap-5">
                  <SkewedButton
                    variant="outline"
                    className="w-full text-sm md:text-lg py-4 px-6 border-gold/40 hover:border-gold hover:bg-gold/10"
                    onClick={() => { }}
                  >
                    <Icon icon="solar:hand-money-bold-duotone" className="w-6 h-6" />
                    Financial Aid Info
                  </SkewedButton>

                  <SkewedButton
                    variant="navy"
                    className="w-full text-sm md:text-lg py-4 px-6 border border-white/10 bg-white/5 hover:border-gold hover:bg-white/10"
                    onClick={() => window.location.href = 'mailto:info@s3academy.com'}
                  >
                    <Icon icon="solar:chat-line-bold-duotone" className="w-6 h-6" />
                    Support Center
                  </SkewedButton>
                </div>

                <p className="mt-12 text-[9px] font-bold text-slate-500 uppercase tracking-widest italic opacity-40">
                  Response Window: 24 Business Hours
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Investment Information */}
      <section className="py-24 bg-slate-100" aria-labelledby="investment-title">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 id="investment-title" className="text-5xl md:text-7xl font-header italic mb-6 uppercase tracking-tight">Investment in Excellence</h2>
            <div className="h-1.5 w-24 bg-gold mx-auto mb-8"></div>
            <p className="text-slate-600 font-medium italic text-xl">"Athleticism is a gift, but hard work is a requirement." We are committed to accessibility through merit and need-based scholarships.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <article className="bg-white p-12 md:p-16 border-t-[12px] border-navy shadow-xl text-center rounded-sm hover:shadow-2xl transition-all group">
              <h4 className="text-3xl font-header italic uppercase mb-6 tracking-widest group-hover:text-gold transition-colors">ACADEMIC TUITION</h4>
              <p className="text-slate-500 font-medium mb-12 text-lg italic opacity-80 leading-relaxed">Comprehensive college-prep instruction, academic labs, and core student support services.</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/60 border-t border-slate-100 pt-8">Inquire for current rates</p>
            </article>
            <article className="bg-white p-12 md:p-16 border-t-[12px] border-gold shadow-xl text-center rounded-sm hover:shadow-2xl transition-all group">
              <h4 className="text-3xl font-header italic uppercase mb-6 tracking-widest group-hover:text-gold transition-colors">ATHLETIC LAB FEE</h4>
              <p className="text-slate-500 font-medium mb-12 text-lg italic opacity-80 leading-relaxed">Elite performance coaching, travel logistics, gear, and specialized facility access.</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold/60 border-t border-slate-100 pt-8">Inquire for current rates</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};