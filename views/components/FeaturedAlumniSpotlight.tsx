import React from 'react';
import { Icon } from '@iconify/react';
import { Placement, CollegeLogoImage } from '../Alumni';

interface FeaturedAlumniSpotlightProps {
    placements: Placement[];
    onSelectAthlete: (athlete: Placement) => void;
}

export const FeaturedAlumniSpotlight = ({ placements, onSelectAthlete }: FeaturedAlumniSpotlightProps) => {
    // Find the required flagship athletes via their data flag
    const featuredAlumni = placements.filter(p => p.featured);

    // Guard clause if data is missing or incomplete
    if (featuredAlumni.length < 2) return null;

    const sira = featuredAlumni[0];
    const harissoum = featuredAlumni[1];

    // Guard clause if data is somehow missing
    if (!sira || !harissoum) return null;

    const renderProfileCard = (p: Placement, highlightQuote: string, focalOverride?: string) => {
        let pillStyle = "bg-slate-800 text-gold border border-slate-700";
        if (p.status === 'ENROLLED') pillStyle = "bg-navy text-white border border-navy";
        if (p.status === 'COMMITTED') pillStyle = "bg-gold text-navy border border-gold";
        if (p.status === 'PLACED') pillStyle = "bg-white text-navy border border-gold outline outline-1 outline-gold";

        return (
            <button
                onClick={() => onSelectAthlete(p)}
                aria-label={`View featured profile for ${p.name}`}
                className="group w-full max-w-xl flex flex-col sm:flex-row gap-6 bg-white rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,31,63,0.12)] border border-slate-200 hover:border-gold/60 transform hover:-translate-y-1 transition-all duration-300 p-6 outline-none focus:ring-2 focus:ring-gold relative text-left"
            >
                {/* Gold Rim Accent on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Left: Portrait Frame */}
                <div className="w-full sm:w-[160px] shrink-0 h-[280px] sm:h-[200px] rounded-[14px] overflow-hidden relative shadow-inner bg-slate-100 flex items-center justify-center border border-slate-100 mt-2 sm:mt-0">
                    {p.image ? (
                        <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            style={{ objectPosition: focalOverride || 'center 25%' }}
                        />
                    ) : (
                        <Icon icon="solar:user-circle-bold-duotone" className="w-16 h-16 text-slate-300" />
                    )}
                </div>

                {/* Right: Text Stack */}
                <div className="flex-1 flex flex-col justify-center min-w-0 relative">
                    {/* Top Badges Row - Perfectly horizontally aligned */}
                    <div className="flex justify-between items-start w-full mb-3 translate-y-[-2px]">
                        {/* Status Pill */}
                        <span className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-widest rounded shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${pillStyle}`}>
                            {p.status}
                        </span>

                        {/* College Logo & D1 Chip */}
                        <div className="flex items-center gap-2 translate-x-3 translate-y-[-6px] pointer-events-none">
                            <span className="inline-flex items-center px-1.5 py-0.5 bg-slate-50 text-slate-500 border border-slate-200 rounded text-[9px] font-black uppercase tracking-widest shadow-sm">
                                {p.division}
                            </span>
                            <div className="w-10 h-10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center overflow-hidden p-1.5 border border-slate-100">
                                <CollegeLogoImage domain={p.collegeLogoDomain} alt={`${p.college} Logo`} className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>

                    <h3 className="font-header text-3xl md:text-[34px] text-navy font-black uppercase tracking-tight leading-none mb-1 group-hover:text-gold transition-colors truncate">
                        {p.name}
                    </h3>

                    <div className="flex items-center gap-1.5 mb-3.5 border-b border-slate-100 pb-2.5">
                        <span className="font-sans text-slate-800 text-[13px] font-bold tracking-tight">{p.college}</span>
                        <span className="text-slate-300">•</span>
                        <span className="font-sans text-slate-600 text-[12px] font-bold tracking-widest uppercase">{p.sport}</span>
                    </div>

                    {/* Premium Quote Typography */}
                    <p className="font-sans text-slate-600 text-[14px] leading-relaxed mb-auto border-l-[3px] border-gold/60 pl-3 md:pl-4">
                        "{highlightQuote}"
                    </p>

                    {/* Weighty CTA Anchor */}
                    <div className="mt-5 pt-1 mt-auto">
                        <span className="inline-flex items-center font-sans tracking-widest uppercase font-black text-[11px] text-gold group-hover:text-gold/80 transition-colors py-1.5 px-3 rounded-md bg-gold/5 group-hover:bg-gold/10 border border-gold/10 group-hover:border-gold/30">
                            VIEW PROFILE <Icon icon="solar:arrow-right-line-bold" className="ml-1.5 w-[18px] h-[18px] transform group-hover:translate-x-1 transition-transform" />
                        </span>
                    </div>
                </div>
            </button>
        );
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 px-4 bg-offWhite border-b border-slate-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10 w-full">

                {/* Section Header */}
                <div className="mb-10 text-center lg:text-left">
                    <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 block">
                        Global Success Stories
                    </span>
                    <h2 className="s3-type-premium s3-section-title text-3xl md:text-4xl lg:text-5xl font-header uppercase italic tracking-tight">
                        Featured Alumni Spotlight
                    </h2>
                </div>

                {/* Grid container with subtle divider */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 relative items-center">

                    {/* Subtle divider line between cards on desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-200 -translate-x-1/2"></div>

                    <div className="w-full flex lg:justify-end">
                        {renderProfileCard(
                            sira,
                            "SEC All-Freshman selection; led all Power 4 freshmen in steals.",
                            "50% 10%"
                        )}
                    </div>

                    <div className="w-full flex lg:justify-start">
                        {renderProfileCard(
                            harissoum,
                            "High-impact scorer and playmaker; earned national attention as a top freshman contributor.",
                            "50% 10%"
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};
