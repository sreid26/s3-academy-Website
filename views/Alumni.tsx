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
  imagePosition?: string;
}

const alumniData: AlumniMember[] = [
  {
    name: 'Sira Thienou',
    year: '2024',
    school: 'Ole Miss',
    sport: 'WBB',
    note: '2024-25 SEC All-Freshman selection; led all Power 4 freshmen in steals.',
    category: 'COLLEGE BASKETBALL',
    image: '/alumni/Sira_Thienou.webp',
    imagePosition: 'object-top'
  },
  {
    name: 'Harissoum Coulibaly',
    year: '2025',
    school: 'Auburn',
    sport: 'WBB',
    note: 'Leading Auburn in scoring as a true freshman; known for her "Paris to the SEC" journey.',
    category: 'COLLEGE BASKETBALL',
    image: '/alumni/Harissoum_Coulibaly.webp',
    imagePosition: 'object-top'
  },
  {
    name: 'A.J. Wills',
    year: '2023',
    school: 'Hofstra',
    sport: 'MBB',
    note: 'Dynamic playmaker who transferred to Hofstra in 2025; originally a standout at Holy Cross.',
    category: 'COLLEGE BASKETBALL',
    image: '/alumni/AJ_Wills.webp',
    imagePosition: 'object-top'
  },
  {
    name: 'Melissa Mwanza',
    year: '2023',
    school: 'Stony Brook',
    sport: 'WBB',
    note: "Powerful frontcourt presence; transferred from Richmond/LA Tech to anchor the Seawolves' defense.",
    category: 'COLLEGE BASKETBALL',
    image: '/alumni/melissa.webp',
    imagePosition: 'object-top'
  },
  {
    name: 'Papa Kounta',
    year: '2024',
    school: 'Triton College',
    sport: 'MBB',
    note: 'Averaging a near double-double (14.3 PPG, 8.0 RPG) for the NJCAA powerhouse Trojans.',
    category: 'COLLEGE BASKETBALL',
    image: '/alumni/Papa_Kounta.webp'
  },
  {
    name: 'Nehir Safkan',
    year: '2025',
    school: 'Harford CC',
    sport: 'WBB',
    note: 'Prolific scorer; recently dropped 31 points in a single game for the Fighting Owls.',
    category: 'COLLEGE BASKETBALL',
    image: '/alumni/Nehir_Safkan.webp',
    imagePosition: 'object-top'
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
      <section className="relative w-full aspect-video flex flex-col justify-end items-center bg-navy overflow-hidden border-b-8 border-gold" style={{ aspectRatio: '16/9' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/alumni/S3_Alumni.png"
            alt="S3 Academy Alumni"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - Bottom fade for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 w-full text-center pb-4 md:pb-8 lg:pb-12 px-4">
          <div className="animate-fade-in-up">
            {/* Eyebrow */}
            <h4 className="font-black uppercase tracking-[0.4em] mb-1 md:mb-2 text-gold drop-shadow-md text-[10px] md:text-sm lg:text-base">
              The S3 Legacy
            </h4>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-6xl lg:text-[8rem] font-header text-white uppercase italic tracking-tighter leading-none mb-2 md:mb-4 drop-shadow-2xl px-4">
              Champions <br /> <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#C89B3C] via-[#FFD700] to-[#C89B3C] drop-shadow-sm pr-8 pb-2">Beyond S3</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 max-w-2xl mx-auto text-xs md:text-xl font-medium leading-relaxed drop-shadow-md hidden md:block">
              Our alumni continue to excel in college athletics, academics, and professional leadership across the globe.
            </p>
          </div>
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
              className={`px-10 py-3 font-header text-lg uppercase tracking-widest border transition-all transform -skew-x-12 ${activeFilter === filter
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
                      <img src={alumni.image} alt={alumni.name} className={`w-full h-full object-cover ${alumni.imagePosition || 'object-center'}`} />
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
