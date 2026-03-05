import React from 'react';
import { Placement } from '../Alumni';
import { Icon } from '@iconify/react';

interface PipelineProofProps {
    placements: Placement[];
    onOpenUpdateModal?: () => void;
}

export const PipelineProof = ({ placements, onOpenUpdateModal }: PipelineProofProps) => {
    // Counts must ALWAYS be computed from the full dataset (including featured athletes)
    const d1Count = placements.filter(p => p.division === 'D1').length;
    const jucoCount = placements.filter(p => p.division === 'JUCO').length;
    const totalCount = placements.length;

    const renderTile = (count: number, label: string, icon: string, chips: string[], microline: string) => (
        <div className="bg-white rounded-[24px] px-6 py-6 md:px-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-200 border-b-4 border-b-transparent hover:shadow-[0_16px_40px_rgba(0,31,63,0.12),0_8px_24px_rgba(192,160,98,0.15)] hover:border-slate-200 hover:border-b-gold transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col h-full min-h-[220px]">

            {/* Subtle Watermark */}
            <Icon icon="solar:basketball-bold-duotone" className="absolute -bottom-4 -right-4 w-32 h-32 text-navy opacity-[0.03] pointer-events-none transform group-hover:scale-110 transition-transform duration-700" />

            {/* Top Icon Area */}
            <div className="flex items-start justify-between">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold/10 transition-colors border border-slate-100 relative z-10">
                    <Icon icon={icon} className="w-5 h-5 md:w-6 md:h-6 text-gold group-hover:scale-110 transition-transform" />
                </div>
            </div>

            {/* Lower Content Block (forced to bottom) */}
            <div className="flex flex-col mt-auto pt-6 relative z-10">
                {/* Proof Chips - anchored right above the big number */}
                <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                    {chips.map((chip, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-0.5 bg-slate-50 text-slate-500 border border-slate-200/60 rounded text-[9px] font-black uppercase tracking-widest shadow-sm">
                            {chip}
                        </span>
                    ))}
                </div>

                {/* Big Number */}
                <span className="text-6xl md:text-[72px] font-header font-black text-navy leading-none tracking-tighter mb-1 md:mb-1.5 group-hover:text-gold transition-colors">
                    {count}
                </span>

                {/* Main Label */}
                <span className="text-[14px] md:text-[15px] font-sans font-extrabold text-navy tracking-tight uppercase mb-0.5">
                    {label}
                </span>

                {/* Micro-proof Sub-label */}
                <span className="text-[11px] font-sans font-bold text-slate-400 tracking-wide">
                    {microline}
                </span>
            </div>
        </div>
    );

    return (
        <section className="py-10 md:py-14 px-4 bg-slate-50 relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto">

                {/* Header Block with Metadata */}
                <div className="flex flex-col lg:flex-row items-start justify-between mb-6 md:mb-8 gap-6">
                    <div className="max-w-2xl text-center md:text-left">
                        <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 block">
                            PIPELINE PROOF
                        </span>
                        <h2 className="text-navy text-3xl md:text-4xl font-header font-black uppercase tracking-tight leading-none mb-4">
                            A national pipeline to college basketball.
                        </h2>
                        <div className="w-16 h-1 bg-gold mb-4 mx-auto md:mx-0"></div>
                        <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed">
                            Our student-athletes are advancing across Division I and elite JUCO programs nationwide.
                        </p>
                    </div>

                    {/* Actions Column */}
                    <div className="flex flex-col items-end lg:self-start lg:ml-auto lg:translate-x-3 lg:pb-1">
                        <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-400/80 bg-slate-50/50 px-2.5 py-1 rounded-full border border-slate-100">
                            <Icon icon="solar:clock-circle-bold-duotone" className="w-3 h-3 text-gold/70" />
                            Updated: Feb 2026
                        </div>

                        {/* 6-8px gap beneath pill */}
                        <button
                            onClick={() => {
                                const el = document.getElementById('base-grid');
                                if (el) {
                                    // Smoothly align the top of the grid view, adjusting for sticky header height
                                    const y = el.getBoundingClientRect().top + window.scrollY - 120;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            className="mt-[6px] inline-flex items-center font-sans tracking-widest uppercase font-black text-[10px] text-navy hover:text-gold transition-colors pb-0.5 border-b-2 border-transparent hover:border-gold/60"
                        >
                            View All Placements <Icon icon="solar:arrow-right-line-bold" className="ml-1.5 w-3.5 h-3.5" />
                        </button>

                        {/* 10-12px gap beneath link */}
                        <div className="flex flex-col items-center mt-2.5 translate-x-[6px] w-max">
                            <button
                                onClick={onOpenUpdateModal}
                                aria-label="Open alumni update form"
                                title="Alumni: submit achievements, transfers, awards, milestones"
                                className="inline-flex items-center justify-center font-sans tracking-widest uppercase font-black text-[11px] text-white bg-navy hover:bg-[#0a192f] transition-all duration-300 px-6 h-11 rounded-full border border-navy hover:border-[#0f2b59] hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-gold shadow-sm hover:shadow-[0_4px_12px_rgba(0,31,63,0.15)] group"
                            >
                                <Icon icon="solar:pen-new-square-bold-duotone" className="mr-2 w-4 h-4 text-gold group-hover:-translate-y-0.5 transition-transform" /> Alumni: Share Your Update
                            </button>

                            {/* 6px gap beneath CTA, center text under button */}
                            <span className="hidden lg:block w-full text-center text-[9px] font-sans font-bold text-slate-400 mt-[6px]">
                                Awards &bull; Transfers &bull; Milestones
                            </span>
                        </div>
                    </div>
                </div>

                {/* Grid Overview Label - Tightened */}
                <div className="mb-4 flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Current Placements
                    </span>
                    <div className="h-px bg-slate-200 flex-grow"></div>
                </div>

                {/* Proof Tiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {renderTile(d1Count, "D1 Placements", "solar:target-bold-duotone", ["Power Conferences", "Nationwide"], "SEC • Big Ten • Big East • CAA")}
                    {renderTile(jucoCount, "JUCO Placements", "solar:shield-star-bold-duotone", ["NJCAA", "Top JUCO Programs"], "NJCAA • Top national programs")}
                    {renderTile(totalCount, "Total Active", "solar:users-group-two-rounded-bold-duotone", ["Active", "Across the U.S."], "Placements across the U.S.")}
                </div>

            </div>
        </section>
    );
};
