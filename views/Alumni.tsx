import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

// --- Types ---
type PlacementFilter = 'ALL' | 'WBB' | 'MBB' | 'D1' | 'JUCO';

interface Placement {
  name: string;
  college: string;
  collegeLogoDomain: string;
  year: string;
  sport: 'WBB' | 'MBB' | string;
  division: 'D1' | 'D2' | 'JUCO' | 'OTHER';
  status: 'ENROLLED' | 'COMMITTED' | 'PLACED';
  highlight: string;
  image?: string;
  imagePosition?: string;
}

// --- Data ---
// Include all necessary domains + the newly requested ones for the logo strip
const additionalStripDomains = ['sju.edu', 'wm.edu'];

// Preferred fallback mapping logic. 
// If the user drops an asset into public/assets/logos/[domain].png, it will load that.
// If it fails, we fall back to the Clearbit API or known external SVGs.
const getLogoUrl = (domain: string) => {
  const overrides: Record<string, string> = {
    'olemiss.edu': '/assets/logos/olemiss.edu.png',
    'rutgers.edu': '/assets/logos/rutgers.edu.png',
    'triton.edu': 'https://upload.wikimedia.org/wikipedia/en/2/29/Triton_College_seal.png',
    'auburn.edu': 'https://tse4.mm.bing.net/th/id/OIP.HfR33smrAAN6SCks2DcFpgHaE3?pid=Api&P=0',
    'hofstra.edu': 'https://tse1.mm.bing.net/th/id/OIP.mpVppH2QI3Ne1qkBNTrc_gHaEK?pid=Api&P=0',
    'stonybrook.edu': 'https://tse3.mm.bing.net/th/id/OIP.B9JltvmB0eCirxNzROob0QHaHa?pid=Api&P=0',
    'harford.edu': 'https://tse4.mm.bing.net/th/id/OIP.RLDbmZ0TNpzvk5yxl1LHGwHaFc?pid=Api&P=0',
    'msmary.edu': 'https://tse3.mm.bing.net/th/id/OIP.QyUfRH5XmaEqmRQDBS-mRwHaHa?pid=Api&P=0',
    'xavier.edu': 'https://tse2.mm.bing.net/th/id/OIP.8m59EiQWRQoxAFKWicCDdwHaCO?pid=Api&P=0',
    'nwfsc.edu': 'https://tse2.mm.bing.net/th/id/OIP.Gz90HFNkeJp84JNtc0ZSVAAAAA?pid=Api&P=0',
    'monroecollege.edu': 'https://tse3.mm.bing.net/th/id/OIP.YdctdgsYSP8XpjFu1X7hhgHaFa?pid=Api&P=0',
    'tnstate.edu': 'https://tse3.mm.bing.net/th/id/OIP.o-Gn3hkbHw5cC9uaxHv6vwHaGw?pid=Api&P=0',
    // Placeholders designed to be replaced by the user dropping local files into public/assets/logos/
    'sju.edu': '/assets/logos/sju.edu.png',
    'wm.edu': '/assets/logos/wm.edu.png',
  };

  // Return the mapped override, or default to clearbit
  return overrides[domain] || `https://logo.clearbit.com/${domain}`;
};

const placementsData: Placement[] = [
  {
    name: 'Sira Thienou',
    college: 'Ole Miss',
    collegeLogoDomain: 'olemiss.edu',
    year: '2024',
    sport: 'WBB',
    division: 'D1',
    status: 'ENROLLED',
    highlight: '2024-25 SEC All-Freshman selection; led all Power 4 freshmen in steals.',
    image: '/alumni/Sira_Thienou.webp',
    imagePosition: '50% 18%'
  },
  {
    name: 'Harissoum Coulibaly',
    college: 'Auburn',
    collegeLogoDomain: 'auburn.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'COMMITTED',
    highlight: 'Leading Auburn in scoring as a true freshman; known for her "Paris to the SEC" journey.',
    image: '/alumni/Harissoum_Coulibaly.webp',
    imagePosition: '50% 15%'
  },
  {
    name: 'Avery Wills Jr.',
    college: 'Hofstra',
    collegeLogoDomain: 'hofstra.edu',
    year: '2023',
    sport: 'MBB',
    division: 'D1',
    status: 'ENROLLED',
    highlight: 'Dynamic playmaker who transferred to Hofstra in 2025; originally a standout at Holy Cross.',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5176061.png&w=800&h=600&scale=crop',
    imagePosition: '50% 12%'
  },
  {
    name: 'Melissa Mwanza',
    college: 'Stony Brook',
    collegeLogoDomain: 'stonybrook.edu',
    year: '2023',
    sport: 'WBB',
    division: 'D1',
    status: 'ENROLLED',
    highlight: "Powerful frontcourt presence; transferred from Richmond/LA Tech to anchor the Seawolves' defense.",
    image: '/alumni/melissa.webp',
    imagePosition: '50% 16%'
  },
  {
    name: 'Dream Muhammad',
    college: 'Tennessee State',
    collegeLogoDomain: 'tnstate.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Bringing elite athleticism and scoring to the Tennessee State Tigers.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.BgR-oVPcfE_qVy56ZmuEeQAAAA?pid=Api&P=0',
    imagePosition: '50% 20%'
  },
  {
    name: 'Jadah White',
    college: 'Northwest Florida State College',
    collegeLogoDomain: 'nwfsc.edu',
    year: '2025',
    sport: 'WBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'Joining a national powerhouse JUCO program to showcase high-level playmaking.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&fm=webp',
    imagePosition: '50% 20%'
  },
  {
    name: 'Papa Kounta',
    college: 'Triton College',
    collegeLogoDomain: 'triton.edu',
    year: '2024',
    sport: 'MBB',
    division: 'JUCO',
    status: 'ENROLLED',
    highlight: 'Averaging a near double-double (14.3 PPG, 8.0 RPG) for the NJCAA powerhouse Trojans.',
    image: '/alumni/Papa_Kounta.webp',
    imagePosition: '50% 20%'
  },
  {
    name: 'Nehir Safkan',
    college: 'Harford Community College',
    collegeLogoDomain: 'harford.edu',
    year: '2025',
    sport: 'WBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'Prolific scorer; recently dropped 31 points in a single game for the Fighting Owls.',
    image: '/alumni/Nehir_Safkan.webp',
    imagePosition: '50% 20%'
  },
  {
    name: 'Die Diop',
    college: 'Mount St. Mary\'s',
    collegeLogoDomain: 'msmary.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Bringing elite defense and rebounding to the Mount St. Mary\'s frontcourt.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.myJyTNhJfx4g0Bq3eTFdegHaEK?pid=Api&P=0',
    imagePosition: '50% 20%'
  },
  {
    name: 'Penda Dieng',
    college: 'Xavier',
    collegeLogoDomain: 'xavier.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Dynamic guard poised to make an immediate impact for the Musketeers in the Big East.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.taZaEB_bHZYYH-kYhFIMLgHaHa?pid=Api&P=0',
    imagePosition: '50% 20%'
  },
  {
    name: 'Yacine Ndiaye',
    college: 'Rutgers',
    collegeLogoDomain: 'rutgers.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Bringing versatile scoring and athleticism to the Scarlet Knights in the Big Ten.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.8q8okGN6aOJO6OYf1ZR4BAHaEK?pid=Api&P=0',
    imagePosition: '50% 20%'
  },
  {
    name: 'Khoudia Diagne',
    college: 'Northwest Florida State College',
    collegeLogoDomain: 'nwfsc.edu',
    year: '2025',
    sport: 'WBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'Anchoring the paint for a premier JUCO national contending program.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.InOZ8J4fnwNRuKa5dCwIKAHaIE?pid=Api&P=0',
    imagePosition: '50% 20%'
  },
  {
    name: 'Francisco Mattei',
    college: 'Monroe College',
    collegeLogoDomain: 'monroecollege.edu',
    year: '2025',
    sport: 'MBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'A dynamic guard bringing elite court vision and scoring to the Mustangs.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.9vQmseHQ_xjjkHyNM4kuOAHaHa?pid=Api&P=0',
    imagePosition: '50% 20%'
  },
  {
    name: 'Placeholder Athlete',
    college: "St. Joseph's",
    collegeLogoDomain: 'sju.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Upcoming commitment announcement for the Hawks program.',
    imagePosition: '50% 20%'
  },
  {
    name: 'Placeholder Athlete',
    college: 'William & Mary',
    collegeLogoDomain: 'wm.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Upcoming commitment announcement joining the Tribe women\'s basketball team.',
    imagePosition: '50% 20%'
  }
];

// --- Components ---

const CollegeLogoImage = ({ domain, alt, className, hideOnFallback }: { domain: string, alt: string, className?: string, hideOnFallback?: boolean, key?: any }) => {
  const FallbackIcon = () => (
    <div className={`flex items-center justify-center bg-slate-100 rounded-full ${className}`}>
      <Icon icon="solar:diploma-bold" className="w-1/2 h-1/2 text-slate-300" />
    </div>
  );
  const [error, setError] = useState(false);

  if (error) {
    if (hideOnFallback) return null;
    return <FallbackIcon />;
  }

  return (
    <img
      src={getLogoUrl(domain)}
      alt={alt}
      className={className}
      onError={(e) => {
        // Attempt a secondary generic fallback before giving up
        if ((e.target as HTMLImageElement).src !== `https://logo.clearbit.com/${domain}`) {
          (e.target as HTMLImageElement).src = `https://logo.clearbit.com/${domain}`;
        } else {
          setError(true);
        }
      }}
    />
  );
};

const PlacedAtLogoStrip = ({ placements }: { placements: Placement[] }) => {
  // Compute Stats
  const d1Count = placements.filter(p => p.division === 'D1').length;
  const jucoCount = placements.filter(p => p.division === 'JUCO').length;
  const totalCount = placements.length;

  // Extract unique logos + ensure requested additions are present
  const baseLogos = Array.from(new Set(placements.map(p => p.collegeLogoDomain)));
  const uniqueLogos = Array.from(new Set([...baseLogos, ...additionalStripDomains]));

  return (
    <div className="w-full bg-[#051124] border-b-4 border-gold py-6 px-4 relative z-20 shadow-[inset_0_10px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">

        {/* Logo Strip Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-2/3">
          <span className="text-gold font-sans font-black uppercase tracking-widest text-[10px] whitespace-nowrap">Placed At</span>
          <div className="flex flex-wrap md:flex-nowrap md:overflow-hidden md:justify-start justify-center items-center gap-x-6 gap-y-4 w-full opacity-70 hover:opacity-100 transition-opacity duration-300">
            {uniqueLogos.map((domain, i) => (
              <CollegeLogoImage
                key={i}
                domain={domain}
                alt={`College Logo ${i}`}
                className="h-7 md:h-8 max-w-[80px] object-contain filter grayscale hover:grayscale-0 brightness-200 hover:brightness-100 transition-all duration-300 opacity-90"
                hideOnFallback={true}
              />
            ))}
          </div>
        </div>

        {/* Micro Stats Section */}
        <div className="flex items-center justify-center gap-6 xl:pl-8">
          <div className="flex flex-col items-center">
            <span className="text-white font-header text-3xl leading-none">{d1Count}</span>
            <span className="text-gold font-sans text-[8px] uppercase tracking-widest font-black mt-1">D1 Placements</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-header text-3xl leading-none">{jucoCount}</span>
            <span className="text-gold font-sans text-[8px] uppercase tracking-widest font-black mt-1">JUCO Placements</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gold font-header text-3xl leading-none">{totalCount}</span>
            <span className="text-white font-sans text-[8px] uppercase tracking-widest font-black mt-1">Total Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AlumniCard = ({ p, onClick }: { p: Placement, onClick: () => void, key?: any }) => {

  // Status Pill Styling System
  let pillStyle = "bg-slate-800 text-gold border border-slate-700"; // default/fallback
  if (p.status === 'ENROLLED') pillStyle = "bg-navy text-white border border-navy";
  if (p.status === 'COMMITTED') pillStyle = "bg-gold text-navy border border-gold";
  if (p.status === 'PLACED') pillStyle = "bg-white text-navy border border-gold outline outline-1 outline-gold";

  return (
    <button
      onClick={onClick}
      aria-label={`View profile for ${p.name}`}
      className="group flex flex-col bg-white rounded-[18px] overflow-hidden shadow-sm border border-slate-200 hover:shadow-[0_12px_30px_rgba(0,31,63,0.12)] hover:border-gold/60 transform hover:-translate-y-1 transition-all duration-200 relative text-left outline-none focus:ring-2 focus:ring-gold"
    >
      {/* Gold Rim Accent on Hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

      {/* Image Container - Controlled by CSS in index.css */}
      <div
        className="alumni-card__media"
        style={p.imagePosition ? { ["--focus" as any]: p.imagePosition } : undefined}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={p.name}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-300">
            <Icon icon="solar:user-bold-duotone" className="w-16 h-16 mb-2" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Photo Updating</span>
          </div>
        )}

        {/* Subtle Bottom Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/5 to-transparent opacity-90 pointer-events-none z-10"></div>

        {/* Top Gradient for Badge Readability */}
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-black/35 to-transparent pointer-events-none z-10"></div>

        {/* Standardized Status Pill (Top Left) */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded shadow-sm ${pillStyle}`}>
            {p.status}
          </span>
        </div>

        {/* Standardized College Badge (Top Right) */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden z-20 group-hover:shadow-[0_0_15px_rgba(192,160,98,0.4)] transition-shadow">
          <CollegeLogoImage domain={p.collegeLogoDomain} alt={`${p.college} Logo`} className="w-6 h-6 object-contain" />
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-grow relative bg-white">

        {/* Athlete Info */}
        <div className="mb-3">
          <h3 className="font-header text-xl text-navy font-bold uppercase tracking-tight leading-none mb-1 group-hover:text-gold transition-colors truncate">{p.name}</h3>
          <p className="font-sans text-slate-400 font-bold uppercase tracking-widest text-[9px]">Class of '{p.year.slice(-2)}</p>
        </div>

        {/* Destination Chip */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded text-navy text-[10px] font-black uppercase tracking-wide">
            <Icon icon="solar:star-fall-bold" className="text-gold w-3 h-3 flex-shrink-0" />
            {p.college}
          </span>
          <span className="inline-flex items-center px-1.5 py-1 bg-slate-100 text-slate-500 rounded text-[9px] font-extrabold uppercase tracking-widest">
            {p.division}
          </span>
        </div>

        {/* Highlight - Truncated to 3 lines for exact uniform height */}
        <p className="font-sans text-slate-500 text-xs italic leading-relaxed pt-3 border-t border-slate-100 mt-auto line-clamp-3 min-h-[50px]">
          {p.highlight}
        </p>

        <div className="mt-4 flex items-center text-gold text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          View Profile <Icon icon="solar:arrow-right-line-duotone" className="ml-1 w-3 h-3" />
        </div>

      </div>
    </button>
  );
};

const AlumniModal = ({ p, onClose }: { p: Placement, onClose: () => void, key?: any }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Trap Focus & Auto-Focus Close
  useEffect(() => {
    const focusableElements = modalRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, []);

  let pillStyle = "bg-slate-100 text-slate-600";
  if (p.status === 'ENROLLED') pillStyle = "bg-navy text-white";
  if (p.status === 'COMMITTED') pillStyle = "bg-gold text-navy";
  if (p.status === 'PLACED') pillStyle = "bg-white text-navy border border-gold";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-navy/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full flex flex-col md:flex-row relative transform transition-all animate-fade-in-up origin-center scale-95 md:scale-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/20 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close profile"
        >
          <Icon icon="solar:close-circle-bold" className="w-5 h-5" />
        </button>

        {/* Image Frame (Maintains identical cropping constraint rules) */}
        <div className="w-full md:w-5/12 aspect-square md:aspect-auto md:min-h-[400px] relative bg-[#0b1a33]">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              style={{ transform: 'translateZ(0)', objectPosition: p.imagePosition ?? '50% 20%' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-300">
              <Icon icon="solar:user-bold-duotone" className="w-20 h-20" />
            </div>
          )}
          <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Content Body */}
        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col">

          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="font-sans text-gold font-black uppercase tracking-widest text-[10px]">
              Class of '{p.year.slice(-2)}
            </span>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <span className="font-sans text-slate-400 font-bold uppercase tracking-widest text-[10px]">
              {p.sport}
            </span>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <span className={`px-2.5 py-0.5 text-[8px] font-black uppercase tracking-widest rounded ${pillStyle}`}>
              {p.status}
            </span>
          </div>

          <h2 id="modal-title" className="font-header text-4xl text-navy font-bold uppercase tracking-tight leading-none mb-6">
            {p.name}
          </h2>

          <div className="flex items-center gap-4 py-4 border-y border-slate-100 mb-6 bg-slate-50/50 -mx-8 px-8 md:-mx-10 md:px-10">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center p-2 flex-shrink-0">
              <CollegeLogoImage domain={p.collegeLogoDomain} alt={`${p.college} Logo`} className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-sans text-slate-400 font-bold uppercase tracking-widest text-[9px] mb-1">Destination</p>
              <h3 className="font-header text-2xl text-navy uppercase leading-none">
                {p.college}
              </h3>
              <p className="font-sans text-gold font-black uppercase tracking-wider text-[10px] mt-1">
                {p.division} Collegiate Level
              </p>
            </div>
          </div>

          <div className="flex-grow">
            <p className="font-sans text-slate-600 text-[13px] leading-relaxed border-l-2 border-gold/40 pl-4 py-1">
              {p.highlight}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-slate-100">
            <Link to="/contact" className="btn-premium flex-1 text-center py-3.5 text-[11px] font-black" onClick={onClose}>
              REQUEST PROGRAM INFO
            </Link>
            <Link to="/admissions" className="btn-secondary flex-1 text-center py-3.5 text-[11px] font-black" onClick={onClose}>
              ADMISSIONS
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---
export const Alumni = () => {
  const [activeFilter, setActiveFilter] = useState('ALL' as PlacementFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<Placement | null>(null);

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPlayer) {
        setSelectedPlayer(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPlayer]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPlayer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPlayer]);

  const filteredPlacements = useMemo(() => {
    return placementsData.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.college.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (activeFilter === 'ALL') return true;
      if (activeFilter === 'WBB' && item.sport === 'WBB') return true;
      if (activeFilter === 'MBB' && item.sport === 'MBB') return true;
      if (activeFilter === 'D1' && item.division === 'D1') return true;
      if (activeFilter === 'JUCO' && item.division === 'JUCO') return true;

      return false;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="bg-white font-sans text-navy min-h-screen pt-20">

      {/* Hero */}
      <section className="bg-navy px-4 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <Icon icon="mdi:basketball-hoop-outline" className="text-white w-[800px] h-[800px] transform -rotate-12 scale-150 opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">
            Alumni Outcomes
          </span>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-header font-bold uppercase tracking-tight leading-none">
            College Placements
          </h1>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gold mt-6 mx-auto md:mx-0"></div>
        </div>
      </section>

      {/* Credibility Strip */}
      <PlacedAtLogoStrip placements={placementsData} />

      {/* Controls Band */}
      <div className="w-full bg-offWhite border-b border-slate-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['ALL', 'WBB', 'MBB', 'D1', 'JUCO'] as PlacementFilter[]).map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 border ${activeFilter === filter
                  ? 'bg-navy text-gold border-navy shadow-md'
                  : 'bg-white text-slate-400 border-slate-200 hover:border-gold hover:text-navy cursor-pointer'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon icon="solar:magnifer-linear" className="text-slate-400 w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search athlete or college..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-lg text-sm font-sans font-bold text-navy placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors shadow-sm"
            />
          </div>

        </div>
      </div>

      {/* Main Grid Sector */}
      <section className="py-16 px-4 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">

          {/* Grid Layout Rules: 1 mobile, 2 tablet, 4 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredPlacements.map((p, idx) => (
              <AlumniCard key={idx} p={p} onClick={() => setSelectedPlayer(p)} />
            ))}
          </div>

          {filteredPlacements.length === 0 && (
            <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm mt-6">
              <Icon icon="solar:magnifer-linear" className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-header text-2xl text-navy uppercase tracking-tight mb-2">No placements found</h3>
              <p className="text-slate-500 text-sm">Adjust your search or filter criteria to see other outcomes.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Injection */}
      {selectedPlayer && (
        <AlumniModal p={selectedPlayer} onClose={() => setSelectedPlayer(null)} />
      )}

    </div>
  );
};

export default Alumni;
