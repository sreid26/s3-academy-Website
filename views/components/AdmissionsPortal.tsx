import React from 'react';
import { Icon } from '@iconify/react';
import { SkewedButton } from './SkewedButton';

const AdmissionsPortal = () => {
    return (
        <section className="bg-navy py-16 px-4 md:px-12 border-t-4 border-gold">
            <div className="max-w-5xl mx-auto">
                {/* Portal Header */}
                <div className="text-center mb-10">
                    <h2 className="text-navy text-3xl md:text-5xl font-header font-bold text-white uppercase tracking-tight mb-4">
                        Enrollment <span className="text-gold">Portal</span>
                    </h2>
                    <p className="font-sans text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Begin your journey toward becoming a scholar-champion. Our streamlined
                        admissions process is engineered for elite student-athletes.
                    </p>
                </div>

                {/* Premium Application Gateway */}
                <div className="relative bg-navy rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden border border-gold/40 group mb-12">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-navy opacity-50"></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl"></div>

                    <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(200,155,60,0.2)] group-hover:scale-110 transition-transform duration-500">
                            <Icon icon="solar:shield-keyhole-bold-duotone" className="w-10 h-10 text-gold" />
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-header italic uppercase text-white mb-6 tracking-wide drop-shadow-md">
                            Secure <span className="text-gold">Application</span>
                        </h3>
                        
                        <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                            Our enrollment process requires a legally binding electronic signature. You will be securely redirected to our verified application portal.
                        </p>
                        
                        <SkewedButton
                            variant="gold"
                            className="text-xl md:text-2xl px-12 py-5 shadow-[0_0_40px_rgba(200,155,60,0.4)] hover:shadow-[0_0_60px_rgba(200,155,60,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            onClick={() => window.open('https://form.jotform.com/251464240626049', '_blank')}
                        >
                            <span className="flex items-center gap-3">
                                ENTER PORTAL
                                <Icon icon="solar:arrow-right-up-bold-duotone" className="w-7 h-7" />
                            </span>
                        </SkewedButton>
                        
                        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white/50 text-sm font-black uppercase tracking-widest border-t border-white/10 pt-8 w-full max-w-3xl">
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:lock-password-bold-duotone" className="w-5 h-5 text-gold/70" />
                                AES-256 Encryption
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:verified-check-bold-duotone" className="w-5 h-5 text-gold/70" />
                                Verified Document
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="solar:devices-bold-duotone" className="w-5 h-5 text-gold/70" />
                                Mobile Optimized
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-6 text-white max-w-4xl mx-auto">
                    <div className="bg-navy/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <Icon icon="solar:call-chat-bold-duotone" className="w-8 h-8 text-gold" />
                            <h4 className="font-bold text-white uppercase text-lg tracking-widest">Need Help?</h4>
                        </div>
                        <p className="text-base text-white/70">Our admissions team is ready to assist you with the application process and financial aid inquiries.</p>
                    </div>
                    <div className="bg-navy/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm hover:border-gold/30 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                            <Icon icon="solar:clock-circle-bold-duotone" className="w-8 h-8 text-gold" />
                            <h4 className="font-bold text-white uppercase text-lg tracking-widest">Next Steps</h4>
                        </div>
                        <p className="text-base text-white/70">After submission, candidates will be contacted within 3-5 business days for an official interview.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionsPortal;
