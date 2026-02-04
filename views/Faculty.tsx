import React from 'react';
import { Icon } from '@iconify/react';

export const Faculty: React.FC = () => {
  const academicStaff = [
    {
      name: "Star Wills",
      role: "Head of School",
      focus: "Institutional Vision & Academic Excellence",
      icon: "solar:square-academic-cap-bold-duotone"
    },
    {
      name: "Angela Virgo",
      role: "Administrative Operations",
      focus: "Operational Excellence & Student Services",
      icon: "solar:settings-minimalistic-bold-duotone"
    },
    {
      name: "Aanyae Dearing",
      role: "Leadership Teacher",
      focus: "Cultivating Student Character & Global Leadership",
      icon: "solar:users-group-rounded-bold-duotone"
    },
    {
      name: "Gabriel Taylor",
      role: "English Teacher",
      focus: "Scholastic Literacy & Collegiate Writing Prep",
      icon: "solar:pen-new-square-bold-duotone"
    }
  ];

  const athleticLeadership = [
    {
      name: "Jerrell Hill",
      role: "Athletic Director",
      focus: "Elite Athletic Operations & Collegiate Pathway Management",
      icon: "solar:medal-ribbons-star-bold-duotone",
      featured: true
    }
  ];

  const coaches = [
    {
      name: "Jamaal Allah",
      role: "Head Coach - Boy's Basketball",
      focus: "National Competitive Strategy & Elite Skill Acquisition",
      icon: "solar:basketball-bold-duotone"
    },
    {
      name: "Avery Wills",
      role: "Head Coach - Girl's Basketball",
      focus: "High-Performance Player Development & Recruiting",
      icon: "solar:basketball-bold-duotone"
    },
    {
      name: "Nick Byrd",
      role: "Assistant Coach - Boy's Basketball",
      focus: "Tactical Analysis & Individual Performance Optimization",
      icon: "solar:basketball-bold-duotone"
    }
  ];

  return (
    <div className="bg-white font-body text-navy">
      
      {/* ================= PAGE HERO ================= */}
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1523240715639-692452069721?q=80&w=2070" 
            alt="Elite Academic Staff" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-gold font-black uppercase tracking-[0.4em] mb-4">Scholars • Athletes • Leaders</h4>
          <h1 className="text-6xl md:text-[9rem] font-header text-white uppercase italic tracking-tighter leading-none">
            Elite <span className="text-gold">Leadership</span>
          </h1>
          <p className="mt-8 text-slate-300 max-w-3xl mx-auto text-xl font-medium italic border-l-4 border-gold/30 pl-8">
            Meet the world-class mentors at S3 Academy dedicated to engineering the holistic growth of every student-athlete.
          </p>
        </div>
      </section>

      {/* ================= ACADEMIC FACULTY (Ivy League Style) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-l-8 border-gold pl-6">
          <h2 className="text-5xl font-header uppercase italic tracking-tighter">Academic Faculty</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-2">The Scholastic Standard of S3 Academy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {academicStaff.map((staff, idx) => (
            <div key={idx} className="group bg-slate-50 flex flex-col md:flex-row gap-8 p-8 border border-slate-100 hover:shadow-2xl transition-all duration-500">
              <div className="w-full md:w-48 h-64 bg-navy flex-shrink-0 relative overflow-hidden flex items-center justify-center">
                <Icon icon={staff.icon} width="80" className="text-gold/20 group-hover:text-gold/80 transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-header uppercase italic text-navy leading-none mb-2">{staff.name}</h3>
                <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-4">{staff.role}</h4>
                <p className="text-slate-500 font-medium italic mb-6 leading-relaxed border-l-2 border-slate-200 pl-4">{staff.focus}</p>
                <div className="flex gap-4">
                   <Icon icon="solar:letter-bold-duotone" className="text-navy/30 hover:text-gold cursor-pointer transition-colors" width="24" />
                   <Icon icon="solar:user-id-bold-duotone" className="text-navy/30 hover:text-gold cursor-pointer transition-colors" width="24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ATHLETIC LEADERSHIP & COACHING ================= */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold transform skew-x-12 translate-x-32 opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-6xl md:text-8xl font-header uppercase italic tracking-tighter">Athletic Development</h2>
            <p className="text-gold font-bold uppercase tracking-[0.3em] mt-4">Home of the S3 Panthers // Performance HQ</p>
            <div className="h-1.5 w-32 bg-gold mx-auto mt-8"></div>
          </div>

          {/* Athletic Director Spotlight */}
          <div className="mb-20">
            {athleticLeadership.map((staff, idx) => (
              <div key={idx} className="bg-[#001226] p-12 border-l-8 border-gold shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-12 group">
                 <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon icon={staff.icon} width="48" className="text-navy" />
                 </div>
                 <div>
                   <h3 className="text-5xl font-header uppercase italic text-gold">{staff.name}</h3>
                   <h4 className="text-white font-black uppercase tracking-[0.4em] text-sm mb-4">{staff.role}</h4>
                   <p className="text-slate-400 text-xl font-medium italic leading-relaxed max-w-3xl">
                     {staff.focus}
                   </p>
                 </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-[#001226] border-b-4 border-gold/30 hover:border-gold transition-all duration-700 shadow-2xl">
                <div className="h-[450px] bg-slate-900 relative overflow-hidden">
                   {/* Background Effect */}
                   <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10"></div>
                   <div className="absolute inset-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-1000">
                      <Icon icon={coach.icon} width="200" className="text-white/5 group-hover:text-gold/5 transition-colors" />
                   </div>
                   
                   {/* Branded Tab */}
                   <div className="absolute top-6 right-0 bg-gold px-4 py-1 transform -skew-x-12 z-20">
                      <span className="text-navy font-black text-[9px] uppercase tracking-widest skew-x-12 block">S3 PERFORMANCE</span>
                   </div>
                </div>

                <div className="absolute bottom-0 left-0 p-10 z-20 w-full bg-gradient-to-t from-navy to-transparent">
                  <h3 className="text-4xl font-header uppercase italic leading-none mb-2 group-hover:text-gold transition-colors">{coach.name}</h3>
                  <h4 className="text-gold/80 font-bold uppercase tracking-[0.2em] text-xs mb-6">{coach.role}</h4>
                  <p className="text-slate-400 text-sm font-medium mb-8 opacity-80 group-hover:opacity-100 transition-opacity leading-relaxed italic">
                    {coach.focus}
                  </p>
                  <button className="flex items-center gap-2 text-gold font-black uppercase text-[10px] tracking-[0.4em] group/btn transition-all hover:gap-4">
                    COACHING PROFILE <Icon icon="solar:arrow-right-bold-duotone" className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="border-4 border-dashed border-white/10 flex items-center justify-center p-12 text-center group hover:border-gold/50 transition-all cursor-pointer bg-navy/50">
              <div>
                <Icon icon="solar:users-group-rounded-bold-duotone" className="text-white/5 mx-auto mb-6 group-hover:text-gold/40 transition-all group-hover:scale-110" width="80" />
                <h4 className="text-white/30 uppercase font-header tracking-widest italic text-2xl group-hover:text-gold/50">Recruiting Excellence</h4>
                <p className="text-white/20 text-[9px] mt-4 font-black tracking-[0.3em] uppercase max-w-[200px] mx-auto">S3 Academy is always scouting for elite collegiate-level developers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PHILOSOPHY CALLOUT ================= */}
      <section className="py-32 bg-slate-50 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
           <Icon icon="solar:star-fall-bold-duotone" width="600" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Icon icon="solar:star-fall-bold-duotone" className="mx-auto text-gold mb-10 opacity-60" width="100" />
          <h2 className="text-5xl md:text-8xl font-header uppercase italic tracking-tighter leading-none mb-10">
            "Athleticism is a gift, but <span className="bg-navy text-white px-8 py-2 inline-block mt-4 shadow-2xl">hard work is a requirement.</span>"
          </h2>
          <p className="text-slate-400 font-black uppercase tracking-[0.6em] text-xs md:text-sm">Empowering the S3 Panthers // Shining Star Academy HQ</p>
        </div>
      </section>
    </div>
  );
};
