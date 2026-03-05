import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface AlumniUpdateModalProps {
    onClose: () => void;
}

export const AlumniUpdateModal = ({ onClose }: AlumniUpdateModalProps) => {
    const [showOptional, setShowOptional] = useState(false);

    // Focus trap & body scroll lock
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = originalStyle;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // In a real app, send data to backend. For now, just close.
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
            <div
                className="absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            <div
                className="bg-white rounded-[24px] shadow-2xl overflow-hidden max-w-2xl w-full flex flex-col relative transform transition-all animate-fade-in-up origin-center max-h-[90vh]"
                role="dialog"
                aria-modal="true"
                aria-labelledby="update-modal-title"
            >
                {/* Header */}
                <div className="flex-shrink-0 px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shadow-inner">
                            <Icon icon="solar:user-up-bold-duotone" className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                            <h2 id="update-modal-title" className="font-header text-2xl font-black text-navy uppercase tracking-tight leading-none mb-1">
                                Alumni Update
                            </h2>
                            <p className="font-sans text-xs font-bold text-slate-500 tracking-wide">
                                Submit your latest career achievements
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-navy transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                        aria-label="Close modal"
                    >
                        <Icon icon="solar:close-circle-bold-duotone" className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <form id="alumni-update-form" onSubmit={handleSubmit} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5 border-l-2 border-gold/40 pl-3">
                                <label htmlFor="fullName" className="block font-sans text-[11px] font-black uppercase tracking-widest text-navy">Full Name <span className="text-gold">*</span></label>
                                <input required type="text" id="fullName" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="John Doe" />
                            </div>
                            <div className="space-y-1.5 border-l-2 border-gold/40 pl-3">
                                <label htmlFor="gradYear" className="block font-sans text-[11px] font-black uppercase tracking-widest text-navy">Graduation Year <span className="text-gold">*</span></label>
                                <input required type="text" id="gradYear" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="e.g. 2024" />
                            </div>
                        </div>

                        <div className="space-y-1.5 border-l-2 border-gold/40 pl-3">
                            <label htmlFor="currentRole" className="block font-sans text-[11px] font-black uppercase tracking-widest text-navy">Current School / Team / Job <span className="text-gold">*</span></label>
                            <input required type="text" id="currentRole" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="e.g. University of Florida, Overseas Pro, etc." />
                        </div>

                        <div className="space-y-1.5 border-l-2 border-gold/40 pl-3">
                            <label htmlFor="achievement" className="block font-sans text-[11px] font-black uppercase tracking-widest text-navy">Achievement / Update <span className="text-gold">*</span></label>
                            <textarea required id="achievement" rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none" placeholder="What's new? Awards, transfers, signing a pro contract..."></textarea>
                        </div>

                        <div className="space-y-1.5 border-l-2 border-gold/40 pl-3">
                            <label htmlFor="email" className="block font-sans text-[11px] font-black uppercase tracking-widest text-navy">Email Address <span className="text-gold">*</span></label>
                            <input required type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="For verification purposes only" />
                        </div>

                        {/* Optional Fields Toggle */}
                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => setShowOptional(!showOptional)}
                                className="flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-navy transition-colors"
                            >
                                <Icon icon={showOptional ? "solar:minus-circle-bold-duotone" : "solar:add-circle-bold-duotone"} className="w-4 h-4 text-gold" />
                                {showOptional ? "Hide Optional Fields" : "Add Optional Fields (LinkedIn, Social)"}
                            </button>
                        </div>

                        {/* Optional Fields Block */}
                        {showOptional && (
                            <div className="p-5 bg-slate-50 rounded-xl space-y-5 border border-slate-100 animate-fade-in-up">
                                <div className="space-y-1.5">
                                    <label htmlFor="linkedin" className="block font-sans text-[11px] font-black uppercase tracking-widest text-slate-600">LinkedIn Profile URL</label>
                                    <input type="url" id="linkedin" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="https://linkedin.com/in/..." />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="social" className="block font-sans text-[11px] font-black uppercase tracking-widest text-slate-600">Instagram / Twitter Handle</label>
                                    <input type="text" id="social" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-sans font-medium text-navy focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" placeholder="@handle" />
                                </div>
                            </div>
                        )}

                    </form>
                </div>

                {/* Footer fixed */}
                <div className="flex-shrink-0 p-6 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                        <Icon icon="solar:shield-check-bold-duotone" className="w-4 h-4 text-gold" />
                        We review submissions and publish verified updates.
                    </p>
                    <button
                        type="submit"
                        form="alumni-update-form"
                        className="w-full sm:w-auto px-8 py-3 bg-navy hover:bg-gold text-white font-sans text-xs font-black uppercase tracking-widest rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        Submit Update <Icon icon="solar:plain-bold-duotone" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
