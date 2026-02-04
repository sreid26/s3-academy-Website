import React from 'react';
import { Icon } from '@iconify/react';

export const Basketball: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-50 grayscale"
          >
            <source src="https://cdn.coverr.co/videos/setting-the-ball-for-a-slam-dunk-2633/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/30 to-navy"></div>
        </div>

        <div className="container-custom relative z-10 text-center animate-fade-in">
          <h1 className="text-white text-7xl md:text-[12rem] font-header uppercase italic leading-[0.8] tracking-tighter mb-10">
            The <span className="text-gold">Lab</span>
          </h1>
          <p className="text-white/80 text-xl md:text-3xl font-medium max-w-2xl mx-auto mb-14 leading-tight italic">
            Professional skill acquisition. <br />
            Collegiate-grade performance biometrics.
          </p>
          <div className="flex justify-center gap-6">
            <button className="btn-primary py-5 px-16 text-xl shadow-2xl">VIEW SCHEDULE</button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-section container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h4 className="text-gold font-bold uppercase tracking-[0.5em] text-xs mb-6">Built for the Next Level</h4>
            <h2 className="text-6xl md:text-8xl font-header italic leading-[0.9] tracking-tighter uppercase mb-8">
              Elite <br /> <span className="text-gold">Development</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-medium italic mb-12 border-l-4 border-gold pl-8">
              The S3 basketball program is not a hobby. It is a laboratory where raw potential is re-engineered into collegiate excellence through high-intensity training and data-driven feedback.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Biometric Tracking', desc: 'Real-time monitoring of load, recovery, and explosive power output.', icon: 'solar:ranking-bold-duotone' },
                { title: 'National Exposure', desc: 'Competing on the largest stages with direct scout access.', icon: 'solar:videocamera-record-bold-duotone' },
                { title: 'Video IQ Lab', desc: 'Elite film study sessions breaking down collegiate defensive rotations.', icon: 'solar:medal-ribbons-star-bold-duotone' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-navy flex-shrink-0 flex items-center justify-center rounded-xl group-hover:bg-gold transition-all duration-300">
                    <Icon icon={item.icon} className="text-gold group-hover:text-navy" width="32" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-header italic uppercase tracking-wide mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gold opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
            <div className="card-premium overflow-hidden border-2 border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" 
                alt="S3 Training" 
                className="w-full h-[600px] object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
              />
              <div className="absolute bottom-10 right-10 bg-navy p-8 shadow-2xl border-b-4 border-gold">
                <h5 className="text-white font-header text-4xl italic leading-none uppercase">Performance Wing</h5>
                <p className="text-gold text-[9px] font-bold uppercase tracking-[0.4em] mt-2">Shining Star Academy HQ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold text-navy text-center">
        <div className="container-custom">
          <h2 className="text-5xl md:text-8xl font-header italic leading-none uppercase tracking-tighter mb-10">
            Ready to <span className="bg-navy text-white px-8 py-2 inline-block shadow-2xl">Step Up?</span>
          </h2>
          <button className="text-[12px] font-black uppercase tracking-[0.6em] hover:underline transition-all">
            Schedule a Recruitment Evaluation →
          </button>
        </div>
      </section>
    </div>
  );
};