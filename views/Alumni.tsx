import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import SiraImg from '/alumni/Sira_Thienou.webp';
import HarissoumImg from '/alumni/Harissoum_Coulibaly.webp';
import MelissaImg from '/alumni/melissa.webp';
import PapaImg from '/alumni/Papa_Kounta.webp';
import NehirImg from '/alumni/Nehir_Safkan.webp';
import AJWillsImg from '/alumni/AJ_Wills.webp';
import PengDiengImg from '/alumni/Peng_Dieng.webp';

import OleMissLogo from '/assets/logos/olemiss.edu.png';
import RutgersLogo from '/assets/logos/rutgers.edu.png';
import NWFSCLogo from '/assets/logos/nwfsc.edu.png';

import { FeaturedAlumniSpotlight } from './components/FeaturedAlumniSpotlight';
import { PipelineProof } from './components/PipelineProof';
import { PlacementReach } from './components/PlacementReach';
import { AlumniUpdateModal } from './components/AlumniUpdateModal';

const DEBUG_HERO = false;

// --- Types ---
type PlacementFilter = 'ALL' | 'WBB' | 'MBB' | 'D1' | 'JUCO';

export interface Placement {
  name: string;
  college: string;
  collegeLogoDomain: string;
  schoolId: string;
  year: string;
  sport: 'WBB' | 'MBB' | string;
  division: 'D1' | 'D2' | 'JUCO' | 'OTHER';
  status: 'ENROLLED' | 'COMMITTED' | 'PLACED';
  highlight: string;
  image?: string;
  imagePosition?: string;
  featured?: boolean;
}

// --- Data ---
// Domains dynamically generated from D1 placements

// Preferred fallback mapping logic. 
// If the user drops an asset into public/assets/logos/[domain].png, it will load that.
// If it fails, we fall back to the Clearbit API or known external SVGs.
export const getLogoUrl = (domain: string) => {
  const overrides: Record<string, string> = {
    'olemiss.edu': OleMissLogo,
    'rutgers.edu': RutgersLogo,
    'triton.edu': '/assets/logos/triton.edu.jpg',
    'stjohns.edu': '/assets/logos/stjohns.edu.png',
    'wm.edu': '/assets/logos/wm.edu.png',
    'stonybrook.edu': '/assets/logos/stonybrook.edu.png',
    'nwfsc.edu': NWFSCLogo,
    'auburn.edu': '/assets/logos/auburn.edu.png',
    'hofstra.edu': '/assets/logos/hofstra.edu.png',
    'xavier.edu': '/assets/logos/xavier.edu.png',
  };

  // Try to use clearbit for transparent logos by default if no high-res local asset is provided
  // Clearbit URLs are reliable enough and return transparent PNGs instead of white background favicons
  return overrides[domain] || `https://logo.clearbit.com/${domain}`;
};

export const placementsData: Placement[] = [
  {
    name: 'Sira Thienou',
    college: 'Ole Miss',
    schoolId: 'ole-miss',
    collegeLogoDomain: 'olemiss.edu',
    year: '2024',
    sport: 'WBB',
    division: 'D1',
    status: 'ENROLLED',
    highlight: '2024-25 SEC All-Freshman selection; led all Power 4 freshmen in steals.',
    image: SiraImg,
    imagePosition: '50% 10%',
    featured: true
  },
  {
    name: 'Harissoum Coulibaly',
    college: 'Auburn',
    schoolId: 'auburn',
    collegeLogoDomain: 'auburn.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'COMMITTED',
    highlight: 'Leading Auburn in scoring as a true freshman; known for her "Paris to the SEC" journey.',
    image: HarissoumImg,
    imagePosition: '50% 15%',
    featured: true
  },
  {
    name: 'Avery Wills Jr.',
    college: 'Hofstra',
    schoolId: 'hofstra',
    collegeLogoDomain: 'hofstra.edu',
    year: '2023',
    sport: 'MBB',
    division: 'D1',
    status: 'ENROLLED',
    highlight: 'Dynamic playmaker who transferred to Hofstra in 2025; originally a standout at Holy Cross.',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mens-college-basketball/players/full/5176061.png&w=800&h=600&scale=crop',
    imagePosition: '50% 15%'
  },
  {
    name: 'Melissa Mwanza',
    college: 'Stony Brook',
    schoolId: 'stony-brook',
    collegeLogoDomain: 'stonybrook.edu',
    year: '2023',
    sport: 'WBB',
    division: 'D1',
    status: 'ENROLLED',
    highlight: "Powerful frontcourt presence; transferred from Richmond/LA Tech to anchor the Seawolves' defense.",
    image: MelissaImg,
    imagePosition: '50% 10%'
  },
  {
    name: 'Dream Muhammad',
    college: 'Tennessee State',
    schoolId: 'tennessee-state',
    collegeLogoDomain: 'tnstate.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Bringing elite athleticism and scoring to the Tennessee State Tigers.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.BgR-oVPcfE_qVy56ZmuEeQAAAA?pid=Api&P=0',
    imagePosition: '50% 25%'
  },
  {
    name: 'Jadah White',
    college: 'Northwest Florida State College',
    schoolId: 'nwfsc',
    collegeLogoDomain: 'nwfsc.edu',
    year: '2025',
    sport: 'WBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'Joining a national powerhouse JUCO program to showcase high-level playmaking.',
    image: '/alumni/Jadah_White.jpg',
    imagePosition: '50% 10%'
  },
  {
    name: 'Papa Kounta',
    college: 'Triton College',
    schoolId: 'triton',
    collegeLogoDomain: 'triton.edu',
    year: '2024',
    sport: 'MBB',
    division: 'JUCO',
    status: 'ENROLLED',
    highlight: 'Averaging a near double-double (14.3 PPG, 8.0 RPG) for the NJCAA powerhouse Trojans.',
    image: PapaImg,
    imagePosition: '50% 20%'
  },
  {
    name: 'Nehir Safkan',
    college: 'Harford Community College',
    schoolId: 'harford',
    collegeLogoDomain: 'harford.edu',
    year: '2025',
    sport: 'WBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'Prolific scorer; recently dropped 31 points in a single game for the Fighting Owls.',
    image: NehirImg,
    imagePosition: '50% 20%'
  },
  {
    name: 'Die Diop',
    college: 'Mount St. Mary\'s',
    schoolId: 'mt-st-marys',
    collegeLogoDomain: 'msmary.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Bringing elite defense and rebounding to the Mount St. Mary\'s frontcourt.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.myJyTNhJfx4g0Bq3eTFdegHaEK?pid=Api&P=0',
    imagePosition: '50% 25%'
  },
  {
    name: 'Penda Dieng',
    college: 'Xavier',
    schoolId: 'xavier',
    collegeLogoDomain: 'xavier.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Dynamic guard poised to make an immediate impact for the Musketeers in the Big East.',
    image: PengDiengImg,
    imagePosition: '50% 20%'
  },
  {
    name: 'Yacine Ndiaye',
    college: 'Rutgers',
    schoolId: 'rutgers',
    collegeLogoDomain: 'rutgers.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Bringing versatile scoring and athleticism to the Scarlet Knights in the Big Ten.',
    image: 'https://tse1.mm.bing.net/th/id/OIP.8q8okGN6aOJO6OYf1ZR4BAHaEK?pid=Api&P=0',
    imagePosition: '50% 25%'
  },
  {
    name: 'Khoudia Diagne',
    college: 'Northwest Florida State College',
    schoolId: 'nwfsc',
    collegeLogoDomain: 'nwfsc.edu',
    year: '2025',
    sport: 'WBB',
    division: 'JUCO',
    status: 'PLACED',
    highlight: 'Anchoring the paint for a premier JUCO national contending program.',
    image: '/alumni/Khoudia_Diagne.jpg',
    imagePosition: '50% 10%'
  },
  {
    name: 'Francisco Mattei',
    college: 'Monroe College',
    schoolId: 'monroe',
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
    college: "St. John's",
    schoolId: 'stjohns',
    collegeLogoDomain: 'stjohns.edu',
    year: '2025',
    sport: 'WBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Upcoming commitment announcement for the Red Storm program.',
    imagePosition: '50% 20%'
  },
  {
    name: 'Placeholder Athlete',
    college: 'William & Mary',
    schoolId: 'wm',
    collegeLogoDomain: 'wm.edu',
    year: '2025',
    sport: 'MBB',
    division: 'D1',
    status: 'PLACED',
    highlight: 'Upcoming commitment announcement joining the Tribe men\'s basketball team.',
    imagePosition: '50% 20%'
  }
];

// --- Components ---

export const CollegeLogoImage = ({ domain, alt, className, hideOnFallback, disableFaviconFallback }: { domain: string, alt: string, className?: string, hideOnFallback?: boolean, disableFaviconFallback?: boolean, key?: any }) => {
  const FallbackIcon = () => (
    <div className={`flex items-center justify-center bg-slate-100 rounded-full ${className}`}>
      <Icon icon="solar:diploma-bold" className="w-1/2 h-1/2 text-slate-300" />
    </div>
  );
  const [error, setError] = useState(false);

  // Force an error reset whenever the target domain shifts or HMR fires
  useEffect(() => {
    setError(false);
  }, [domain]);

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
        if (disableFaviconFallback) {
          setError(true);
          return;
        }
        // Attempt an ultra-reliable secondary general fallback (Google Favicon) before giving up
        const img = e.target as HTMLImageElement;
        const fallbackSrc = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
        if (img.src !== fallbackSrc) {
          img.src = fallbackSrc;
        } else {
          setError(true);
        }
      }}
    />
  );
};

// --- Sub-components ---

// Top Logo Strip
export const PlacedAtLogoStrip = ({ placements }: { placements: Placement[] }) => {
  // Compute Stats
  const d1Count = placements.filter(p => p.division === 'D1').length;
  const jucoCount = placements.filter(p => p.division === 'JUCO').length;
  const totalCount = placements.length;

  // Extract unique D1 domains from placements
  const uniqueLogosFromPlacements = Array.from(new Set(
    placements
      .filter(p => p.division === 'D1' && p.collegeLogoDomain)
      .map(p => p.collegeLogoDomain)
  ));

  // Add requested additional D1 logos
  const additionalLogos = ['auburn.edu', 'hofstra.edu', 'xavier.edu'];

  // Combine and deduplicate all logos
  const allLogos = Array.from(new Set([...uniqueLogosFromPlacements, ...additionalLogos]));

  if (allLogos.length === 0) return null;

  return (
    <div className="w-full bg-[#051124] border-b-4 border-gold py-6 px-4 relative z-20 shadow-[inset_0_10px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">

        {/* Logo Strip Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full xl:w-2/3 overflow-hidden">
          <span className="text-gold font-sans font-black uppercase tracking-widest text-[10px] whitespace-nowrap z-10 bg-[#051124] pr-4">Placed At</span>
          <div className="flex relative w-full overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] will-change-transform">

              {/* Render the logos in identical tracks to ensure seamless infinite looping */}
              {/* Track A */}
              <div className="flex items-center gap-x-12 pr-12 min-w-max">
                {[...allLogos, ...allLogos].map((domain, i) => (
                  <CollegeLogoImage
                    key={`A-${i}`}
                    domain={domain}
                    alt={`College Logo ${domain}`}
                    className="h-[36px] w-[100px] md:w-[120px] object-contain filter brightness-0 invert opacity-60 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 transition-all duration-300 inline-block"
                    hideOnFallback={true}
                    disableFaviconFallback={true}
                  />
                ))}
              </div>

              {/* Track B */}
              <div className="flex items-center gap-x-12 pr-12 min-w-max" aria-hidden="true">
                {[...allLogos, ...allLogos].map((domain, i) => (
                  <CollegeLogoImage
                    key={`B-${i}`}
                    domain={domain}
                    alt={`College Logo ${domain}`}
                    className="h-[36px] w-[100px] md:w-[120px] object-contain filter brightness-0 invert opacity-60 hover:brightness-100 hover:invert-0 hover:opacity-100 hover:scale-110 transition-all duration-300 inline-block"
                    hideOnFallback={true}
                    disableFaviconFallback={true}
                  />
                ))}
              </div>

            </div>
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
      className="group flex flex-col h-full bg-white rounded-[18px] overflow-hidden shadow-sm border border-slate-200 hover:shadow-[0_12px_30px_rgba(0,31,63,0.12)] hover:border-gold/60 transform hover:-translate-y-1 transition-all duration-200 relative text-left outline-none focus:ring-2 focus:ring-gold"
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
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-gold relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <Icon icon="solar:basketball-bold-duotone" className="w-64 h-64" />
            </div>
            <span className="font-header text-6xl text-gold font-black uppercase leading-none relative z-10 logo-glow">
              {p.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </span>
          </div>
        )}

        {/* Standardized Status Pill (Top Left) */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded shadow-sm ${pillStyle}`}>
            {p.status}
          </span>
        </div>

        {/* Standardized College Badge (Top Right) */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden z-20 group-hover:shadow-[0_0_15px_rgba(192,160,98,0.4)] transition-shadow p-1.5">
          <CollegeLogoImage domain={p.collegeLogoDomain} alt={`${p.college} Logo`} className="w-full h-full object-contain" />
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

        {/* Bottom Block - forced to bottom, strict content height */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex flex-col justify-end">
          <p className="font-sans text-slate-500 text-xs italic leading-relaxed line-clamp-3 min-h-[54px]">
            {p.highlight}
          </p>

          <div className="mt-3 flex items-center text-gold text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            View Profile <Icon icon="solar:arrow-right-line-duotone" className="ml-1 w-3 h-3" />
          </div>
        </div>

      </div>
    </button>
  );
};

const AlumniModal = ({ p, onClose }: { p: Placement, onClose: () => void, key?: any }) => {
  const modalRef = useRef(null as HTMLDivElement | null);

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
        <div className="w-full md:w-5/12 aspect-square md:aspect-auto md:min-h-[400px] relative bg-[#0b1a33] group/image">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              style={{ transform: 'translateZ(0)', objectPosition: p.imagePosition ?? '50% 20%' }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gold">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                <Icon icon="solar:basketball-bold-duotone" className="w-full h-full scale-150" />
              </div>
              <span className="font-header text-8xl text-gold font-black uppercase leading-none relative z-10 logo-glow">
                {p.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </span>
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

// Import for region filtering logic
import geoDataRaw from './data/placements_geo.json';
const geoData = geoDataRaw as unknown as { id: string, region: string, schoolName: string }[];

// --- Main Page Component ---
export const Alumni = () => {
  const [activeFilter, setActiveFilter] = useState('ALL' as PlacementFilter);
  const [activeRegion, setActiveRegion] = useState('All');
  const [activeSchoolId, setActiveSchoolId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState(null as Placement | null);
  const [heroScrollY, setHeroScrollY] = useState(0);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      setHeroScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPlacements = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    // Use FULL list when searching (so featured can appear)
    const baseForGrid = normalizedQuery
      ? placementsData
      : placementsData.filter(a => !a.featured);

    // Apply filter tabs (ALL/WBB/MBB/D1/JUCO) AFTER base selection
    const filterTabs = baseForGrid.filter(item => {
      // Apply Search Filter
      if (normalizedQuery) {
        const matchesSearch =
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.college.toLowerCase().includes(normalizedQuery);
        if (!matchesSearch) return false;
      }

      // Apply Tab Filter
      if (activeFilter === 'ALL') return true;
      if (activeFilter === 'WBB' && item.sport === 'WBB') return true;
      if (activeFilter === 'MBB' && item.sport === 'MBB') return true;
      if (activeFilter === 'D1' && item.division === 'D1') return true;
      if (activeFilter === 'JUCO' && item.division === 'JUCO') return true;

      return false;
    });

    // --- Helper ---
    const normalizeSchoolName = (name: string) => {
      return name.toLowerCase()
        .replace(/[.,'"]/g, '')
        .replace(/\s+&\s+/g, ' and ')
        .replace(/&/g, 'and')
        .replace(/\s+/g, ' ')
        .trim();
    };

    // Apply specific map interactions (Region and School Select)
    return filterTabs.filter(item => {
      if (activeSchoolId) {
        const activeNode = geoData.find(g => g.id === activeSchoolId);
        if (activeNode) {
          // Verify via normalizer OR fallback safely to robust ID map
          const match = normalizeSchoolName(item.college) === normalizeSchoolName(activeNode.schoolName) || item.schoolId === activeSchoolId;
          if (!match) return false;
        } else if (item.schoolId !== activeSchoolId) {
          return false;
        }
      }

      if (activeRegion !== 'All') {
        const schoolEntry = geoData.find(g => g.id === item.schoolId || normalizeSchoolName(g.schoolName) === normalizeSchoolName(item.college));
        if (!schoolEntry || schoolEntry.region !== activeRegion) return false;
      }
      return true;
    });

  }, [activeFilter, searchQuery, activeRegion, activeSchoolId]);

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPlayer) return;

      if (e.key === 'Escape') {
        setSelectedPlayer(null);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const currentIndex = filteredPlacements.findIndex(p => p.name === selectedPlayer.name);

        // Only allow arrow navigation if the player actually exists within the CURRENT filter context.
        if (currentIndex === -1) return;

        if (e.key === 'ArrowRight' && currentIndex < filteredPlacements.length - 1) {
          setSelectedPlayer(filteredPlacements[currentIndex + 1]);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
          setSelectedPlayer(filteredPlacements[currentIndex - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPlayer, filteredPlacements]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPlayer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPlayer]);

  return (
    <div className="bg-white font-sans text-navy min-h-screen">

      {/* Hero */}
      <section
        className="bg-navy pt-8 md:pt-12 pb-0 relative overflow-hidden flex flex-col items-center"
        style={DEBUG_HERO ? { outline: '4px solid magenta' } : { transform: 'none' }}
      >
        <div className="max-w-7xl mx-auto relative z-20 text-center w-full mb-6 md:mb-12 px-4">
          <span
            className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
            style={DEBUG_HERO ? { border: '1px solid magenta' } : undefined}
          >
            Alumni Outcomes
          </span>
          <h1
            id="hero-headline"
            className="pageDisplay"
            style={DEBUG_HERO ? { border: '1px solid cyan' } : undefined}
          >
            College Placements
          </h1>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-gold mt-6 mx-auto"></div>
        </div>

        {/* Hero Composite Image (Edge to Edge) */}
        <div
          className="w-full relative z-10 flex justify-center mt-[-1rem] md:mt-[-3rem]"
          style={DEBUG_HERO ? { outline: '2px solid red' } : { transform: 'none' }}
        >
          <img
            src="/assets/alumni/S3_Alumni.png"
            alt="Champions Beyond S3"
            className="w-full max-w-[2560px] h-auto object-cover object-top"
            style={{
              transform: `translateY(${heroScrollY * 0.15}px)`,
              willChange: 'transform'
            }}
            onLoad={(e) => {
              if (DEBUG_HERO) {
                const img = e.currentTarget;
                const info = document.createElement('div');
                info.className = "absolute bottom-4 right-4 bg-black/80 text-lime-400 p-3 z-50 text-xs font-mono rounded border border-lime-400";
                info.innerText = `Src: /assets/alumni/S3_Alumni.png\nRendered: ${img.width}x${img.height}\nNatural: ${img.naturalWidth}x${img.naturalHeight}`;
                img.parentElement?.appendChild(info);

                const h1 = document.getElementById('hero-headline');
                if (h1) {
                  const fontInfo = document.createElement('div');
                  fontInfo.className = "absolute top-4 right-4 bg-black/80 text-cyan-400 p-3 z-50 text-xs font-mono rounded border border-cyan-400";
                  fontInfo.innerText = `Headline Font: ${window.getComputedStyle(h1).fontFamily}`;
                  img.parentElement?.appendChild(fontInfo);
                }
              }
            }}
          />
        </div>
      </section>

      {/* Credibility Strip */}
      <PlacedAtLogoStrip placements={placementsData} />

      {/* Pipeline Proof Section */}
      <PipelineProof placements={placementsData} onOpenUpdateModal={() => setIsUpdateModalOpen(true)} />

      {/* National Reach Section */}
      <PlacementReach
        placements={placementsData}
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
        activeSchoolId={activeSchoolId}
        setActiveSchoolId={setActiveSchoolId}
      />

      {/* Featured Elite Alumni */}
      <FeaturedAlumniSpotlight
        placements={placementsData}
        onSelectAthlete={setSelectedPlayer}
      />

      {/* Placements Anchor Wrapper */}
      <div id="placements">
        {/* Transitional Label */}
        <div id="base-grid" className="w-full bg-offWhite pt-12 text-center md:pb-2">
          <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            Explore All Placements
          </span>
        </div>

        {/* Controls Band (Sticky) */}
        <div className="w-full bg-offWhite/95 backdrop-blur-md border-b border-slate-200 py-6 px-4 sticky top-0 md:top-[70px] z-40 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">

            <div className="flex flex-wrap items-center justify-center gap-2">
              {(['ALL', 'WBB', 'MBB', 'D1', 'JUCO'] as PlacementFilter[]).map(filter => {
                // Counts must ALWAYS be computed from full dataset (not grid)
                const count = placementsData.filter(item => {
                  if (filter === 'ALL') return true;
                  if (filter === 'WBB' && item.sport === 'WBB') return true;
                  if (filter === 'MBB' && item.sport === 'MBB') return true;
                  if (filter === 'D1' && item.division === 'D1') return true;
                  if (filter === 'JUCO' && item.division === 'JUCO') return true;
                  return false;
                }).length;

                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 border flex items-center gap-2 ${activeFilter === filter
                      ? 'bg-navy text-gold border-navy shadow-md'
                      : 'bg-white text-slate-400 border-slate-200 hover:border-gold hover:text-navy cursor-pointer'
                      }`}
                  >
                    {filter}
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${activeFilter === filter ? 'bg-gold/20 text-gold' : 'bg-slate-100 text-slate-400'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
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
        <section className="py-16 px-4 bg-slate-50/50 relative">
          <div className="max-w-7xl mx-auto">

            {/* Active School Filter Chip UI */}
            {activeSchoolId && (
              <div className="mb-6 flex items-center animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy text-white text-[11px] font-black uppercase tracking-widest rounded shadow-sm">
                  Filtered by: {geoData.find(g => g.id === activeSchoolId)?.schoolName || "Selection"}
                  <button
                    onClick={() => setActiveSchoolId(null)}
                    className="ml-2 hover:bg-white/20 p-0.5 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-gold"
                    aria-label="Clear active school filter"
                  >
                    <Icon icon="solar:close-circle-bold" className="w-3.5 h-3.5 text-gold" />
                  </button>
                </div>
                <span className="ml-4 text-xs font-bold text-slate-500">{filteredPlacements.length} results found</span>
              </div>
            )}

            {/* Grid Layout Rules: 1 mobile, 2 tablet, 4 desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {filteredPlacements.map((p, idx) => (
                <div
                  key={`${p.name}-${idx}`}
                  className="reveal-on-scroll is-visible"
                  style={{ animationDelay: `${(idx % 12) * 50}ms` }}
                >
                  <AlumniCard p={p} onClick={() => setSelectedPlayer(p)} />
                </div>
              ))}
            </div>

            {filteredPlacements.length === 0 && (
              <div className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-sm mt-6 animate-fade-in-up">
                <Icon icon="solar:magnifer-linear" className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="font-header text-2xl text-navy uppercase tracking-tight mb-2">No placements found</h3>
                <p className="text-slate-500 text-sm mb-6">Adjust your search or filter criteria to see other outcomes.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('ALL');
                  }}
                  className="btn-outline text-xs"
                >
                  Clear Search & Filters
                </button>
              </div>
            )}

          </div>
        </section>
      </div>

      {/* Modal Injection */}
      {
        selectedPlayer && (
          <>
            <AlumniModal p={selectedPlayer} onClose={() => setSelectedPlayer(null)} />

            {/* External Navigation Controls (Visible over Modal) */}
            {(() => {
              const currentIndex = filteredPlacements.findIndex(p => p.name === selectedPlayer.name);
              if (currentIndex === -1) return null; // Player not in current filter view

              return (
                <>
                  {currentIndex > 0 && (
                    <button
                      onClick={() => setSelectedPlayer(filteredPlacements[currentIndex - 1])}
                      className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] bg-white/10 hover:bg-gold text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold transform hover:scale-110 hidden sm:flex"
                      aria-label="Previous Player"
                    >
                      <Icon icon="solar:alt-arrow-left-line-duotone" className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                  )}

                  {currentIndex < filteredPlacements.length - 1 && (
                    <button
                      onClick={() => setSelectedPlayer(filteredPlacements[currentIndex + 1])}
                      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] bg-white/10 hover:bg-gold text-white p-3 md:p-4 rounded-full backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold transform hover:scale-110 hidden sm:flex"
                      aria-label="Next Player"
                    >
                      <Icon icon="solar:alt-arrow-right-line-duotone" className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                  )}
                </>
              );
            })()}
          </>
        )
      }

      {/* Universal Modal Injection */}
      {
        isUpdateModalOpen && (
          <AlumniUpdateModal onClose={() => setIsUpdateModalOpen(false)} />
        )
      }

    </div >
  );
};

export default Alumni;
