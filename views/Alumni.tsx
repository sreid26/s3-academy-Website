import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const S3_BRAND = {
  navy: '#001F3F',
  gold: '#C0A062',
};

type AlumniFilter = 'ALL' | 'COLLEGE BASKETBALL' | 'ACADEMICS' | 'POSTGRADUATE';

interface AlumniMember {
  name: string;
  year: string;
  school: string;
  sport: string;
  note: string;
  category: AlumniFilter;
  image?: string;
}

const alumniData: AlumniMember[] = [
  { 
    name: 'Jordan Williams', 
    year: '2022', 
    school: 'Virginia Tech', 
    sport: 'Basketball', 
    note: 'Starting guard, averaged 14.2 PPG as sophomore',
    category: 'COLLEGE BASKETBALL'
  },
  { 
    name: 'Taylor Chen', 
    year: '2021', 
    school: 'Duke University', 
    sport: 'Basketball', 
    note: "Dean's List, Computer Science major",
    category: 'ACADEMICS'
  },
  { 
    name: 'Marcus Thompson', 
    year: '2023', 
    school: 'UNC Chapel Hill', 
    sport: 'Basketball', 
    note: 'Freshman All-ACC Honorable Mention',
    category: 'COLLEGE BASKETBALL'
  },
  { 
    name: 'Sarah Mitchell', 
    year: '2020', 
    school: 'Stanford University', 
    sport: 'Basketball', 
    note: 'Rhodes Scholar finalist, now at Google',
    category: 'ACADEMICS'
  },
  { 
    name: 'Andre Jackson', 
    year: '2022', 
    school: 'Georgetown University', 
    sport: 'Basketball', 
    note: 'Team captain, Business Analytics major',
    category: 'POSTGRADUATE'
  },
  { 
    name: 'Emma Rodriguez', 
    year: '2021', 
    school: 'Yale University', 
    sport: 'Basketball', 
    note: '3.9 GPA, Pre-Med track',
    category: 'ACADEMICS'
  }
];

export const Alumni: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<AlumniFilter>('ALL');

  const filteredAlumni = activeFilter === 'ALL' 
    ? alumniData 
    : alumniData.filter(item => item.category === activeFilter);

  return (
    <div className="bg-white font-body text-navy min-h-screen">
      
      {/* ================= ALUMNI HERO ================= */}
      <section className="relative py-24 bg-navy overflow-hidden border-b-8 border-gold">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1523240715639-692452069721?q=80&w=2070" 
            alt="Graduation Background" 
            className="w-full h-full object-cover grayscale hero-zoom"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h4 className="font-black uppercase tracking-[0.4em] mb-4 text-gold">
            The S3 Legacy
          </h4>
          <h1 className="text-6xl md:text-9xl font-header text-white uppercase italic tracking-tighter leading-none mb-8">
            Champions <br /> <span className="text-gold">Beyond</span> S3
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-xl font-medium leading-relaxed italic">
            Our alumni continue to excel in college athletics, academics, and professional leadership across the globe.
          </p>
        </div>
      </section>

      {/* ================= ALUMNI SPOTLIGHT ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-header text-navy uppercase tracking-tight mb-2">Alumni Spotlight</h2>
          <p className="text-slate-500 font-medium text-lg">Our alumni continue to excel in college athletics, academics, and beyond.</p>
        </div>
        
        {/* Navigation Tabs - Skewed per screenshots */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {(['ALL', 'COLLEGE BASKETBALL', 'ACADEMICS', 'POSTGRADUATE'] as AlumniFilter[]).map((filter) => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-10 py-3 font-header text-lg uppercase tracking-widest border transition-all transform -skew-x-12 ${
                activeFilter === filter 
                  ? 'bg-gold border-gold text-navy shadow-lg z-10' 
                  : 'bg-white border-slate-300 text-navy hover:border-gold hover:text-gold'
              }`}
            >
              <span className="inline-block transform skew-x-12">{filter}</span>
            </button>
          ))}
        </div>

        {/* Alumni Cards - Matched to screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-100 rounded-xl shadow-sm hover:shadow-xl transition-all group flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  {/* Spot for Alumni Picture - Circle as requested */}
                  <div className="w-16 h-16 bg-slate-100 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-50 group-hover:border-gold transition-colors relative">
                    {alumni.image ? (
                      <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon icon="solar:user-circle-bold-duotone" className="text-slate-300 w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-header text-navy leading-tight uppercase tracking-tight">{alumni.name}</h3>
                    <p className="text-slate-800 font-bold uppercase text-xs tracking-wider">{alumni.school}</p>
                  </div>
                </div>
                <span className="bg-gold text-navy font-black text-[10px] px-3 py-1 rounded-sm uppercase tracking-widest transform -rotate-1">
                  {alumni.year}
                </span>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Sport: <span className="text-slate-700 font-bold">{alumni.sport}</span>
                  </p>
                  <p className="text-slate-500 font-medium italic text-sm leading-relaxed border-l-4 border-gold/30 pl-4">
                    {alumni.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ALUMNI UPDATE FORM ================= */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-header text-navy uppercase tracking-tight mb-2">Submit an Alumni Update</h2>
            <p className="text-slate-500 font-medium text-lg italic">Let us know what you've been up to! We'd love to celebrate your achievements.</p>
          </div>
          
          <form className="bg-white p-12 rounded-2xl border border-slate-200 shadow-2xl space-y-6">
            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">Full Name *</label>
              <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-navy font-bold focus:border-gold outline-none transition-colors" placeholder="Your full name" />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">Graduation Year *</label>
              <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-navy font-bold uppercase focus:border-gold outline-none transition-colors appearance-none cursor-pointer">
                <option>Select your graduation year</option>
                {[...Array(30)].map((_, i) => (
                  <option key={i}>{2025 - i}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">Current School/Team/Job *</label>
              <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-navy font-bold focus:border-gold outline-none transition-colors" placeholder="e.g., Virginia Tech, Google, etc." />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">Achievement/Update *</label>
              <textarea className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-navy font-bold h-32 focus:border-gold outline-none transition-colors resize-none" placeholder="Share your recent achievements, milestones, or updates"></textarea>
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">Email *</label>
              <input type="email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-navy font-bold focus:border-gold outline-none transition-colors" placeholder="your.email@example.com" />
            </div>

            <div className="space-y-1">
              <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400">LinkedIn (Optional)</label>
              <input type="url" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg text-navy font-bold focus:border-gold outline-none transition-colors" placeholder="https://linkedin.com/in/yourprofile" />
            </div>

            <div className="pt-6">
              <button type="button" className="w-full py-5 font-header text-3xl uppercase tracking-widest text-navy bg-gold transition-all hover:scale-[1.02] shadow-xl active:scale-[0.98] transform -skew-x-6">
                <span className="inline-block transform skew-x-6">SUBMIT UPDATE</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ================= PHILOSOPHY BANNER ================= */}
      <section className="py-24 text-center px-4 bg-gold">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-header uppercase italic tracking-tighter text-navy leading-none">
            "ATHLETICISM IS A GIFT, BUT <span className="bg-navy text-gold px-4 py-1 inline-block mt-2">HARD WORK IS A REQUIREMENT.</span>"
          </h2>
          <p className="mt-8 font-black uppercase tracking-[0.6em] text-xs text-navy/60">
            — THE S3 ACADEMY PHILOSOPHY
          </p>
        </div>
      </section>

    </div>
  );
};
