import React from 'react';
import { Icon } from '@iconify/react';
import { SkewedButton } from './components/SkewedButton';
import { S3Logo } from './components/S3Logo';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-body">
      {/* Header Banner */}
      <div className="bg-navy py-24 text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C0A062 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <h1 className="text-6xl md:text-8xl italic uppercase font-header">CONTACT US</h1>
          <p className="text-gold tracking-[0.5em] font-bold text-sm">REACH OUT TO S3 ACADEMY</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Inquiry Form */}
          <div className="bg-slate-50 p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -translate-y-16 translate-x-16 rotate-45"></div>
            <h2 className="text-4xl text-navy mb-8 italic font-header">DIRECT INQUIRY</h2>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-white border border-slate-200 px-4 py-3 outline-none focus:border-gold font-medium transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-white border border-slate-200 px-4 py-3 outline-none focus:border-gold font-medium transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-slate-200 px-4 py-3 outline-none focus:border-gold font-medium transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
                <select className="w-full bg-white border border-slate-200 px-4 py-3 outline-none focus:border-gold font-bold uppercase text-[10px] tracking-widest">
                  <option>Admissions</option>
                  <option>Athletics / Basketball Lab</option>
                  <option>Alumni Relations</option>
                  <option>Donations / Philanthropy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea rows={5} placeholder="How can we help you reach the next level?" className="w-full bg-white border border-slate-200 px-4 py-3 outline-none focus:border-gold font-medium transition-colors resize-none"></textarea>
              </div>
              <SkewedButton variant="navy" className="w-full py-4 text-xl">SUBMIT MESSAGE</SkewedButton>
            </form>
          </div>

          {/* Contact Info & High-Fidelity Placeholder */}
          <div className="flex flex-col">
            <div className="mb-12">
              <h2 className="text-4xl text-navy mb-8 italic font-header uppercase">FACILITY LOCATION</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm transition-colors group-hover:bg-gold/20">
                    <Icon icon="solar:map-point-bold-duotone" className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-header italic uppercase tracking-wide">S3 ACADEMY PERFORMANCE CAMPUS</h4>
                    <p className="text-slate-500 leading-relaxed font-medium">
                      1201 Commerce Street<br />
                      Petersburg, Virginia 23803
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm transition-colors group-hover:bg-gold/20">
                    <Icon icon="solar:phone-bold-duotone" className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-header italic uppercase tracking-wide">MAIN OFFICE</h4>
                    <p className="text-slate-500 font-bold text-lg">(804) 732-2255</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-sm transition-colors group-hover:bg-gold/20">
                    <Icon icon="solar:letter-bold-duotone" className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-header italic uppercase tracking-wide">EMAIL</h4>
                    <p className="text-slate-500 font-bold text-lg">info@s3academy.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE MAP PLACEHOLDER - High-End Aesthetic */}
            <div className="flex-grow min-h-[500px] bg-navy relative overflow-hidden shadow-2xl group flex flex-col items-center justify-center border border-white/5 p-12 text-center">

              {/* Elegant Textures */}
              <div className="absolute inset-0 opacity-10 pointer-events-none grayscale" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/carbon-fibre.png)' }}></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/95 to-gold/10"></div>

              {/* Animated Radar Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[500px] h-[500px] border border-gold/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
                <div className="w-[350px] h-[350px] border border-gold/5 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></div>
              </div>

              {/* State Branding Labels */}
              <div className="absolute top-10 left-10 z-30 text-left">
                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-1">Navigation Hub</span>
                <span className="text-white/40 font-header italic text-xl uppercase tracking-tighter">S3 Performance Campus</span>
              </div>

              {/* Central Visual */}
              <div className="relative z-10 space-y-8 max-w-sm">
                <div className="relative inline-block">
                  <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full animate-pulse"></div>
                  <Icon icon="solar:global-bold-duotone" className="w-32 h-32 text-gold relative z-10 drop-shadow-[0_0_15px_rgba(192,160,98,0.5)]" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-header text-5xl italic uppercase tracking-tight leading-none">
                    Interactive Map <br />
                    <span className="text-gold">Coming Soon</span>
                  </h3>
                  <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
                    We are currently engineering a high-fidelity 3D digital tour of the S3 Academy Performance Campus.
                  </p>
                </div>

                <div className="pt-4">
                  <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-gold transition-colors flex items-center justify-center gap-3 mx-auto">
                    <span className="w-2 h-2 bg-gold rounded-full animate-ping"></span>
                    Development in Progress
                  </button>
                </div>
              </div>

              {/* Watermark Branding */}
              <div className="absolute bottom-8 right-8 z-10 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
                <S3Logo size="md" showText={false} variant="white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};