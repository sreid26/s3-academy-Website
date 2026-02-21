import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { SkewedButton } from './components/SkewedButton';
import { S3Logo } from './components/S3Logo';
import AdmissionsPortal from './components/AdmissionsPortal';

export const Enrollment: React.FC = () => {
    const formSectionRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <div className="bg-white min-h-screen font-body text-navy overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-navy text-white border-b-8 border-gold overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="/assets/images/students-classroom.png"
                        alt="Students in classroom"
                        className="w-full h-full object-cover grayscale blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="mb-6 inline-block animate-fade-in-down">
                        <S3Logo size="4xl" showText={false} variant="gold" />
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-header italic uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl animate-fade-in-up">
                        Begin Your <span className="text-gold">Journey</span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg animate-fade-in-up delay-100">
                        Where Academic Excellence Meets Elite Athletic Development.
                    </p>

                    <div className="animate-fade-in-up delay-200">
                        <SkewedButton
                            variant="gold"
                            className="text-xl px-12 py-4 shadow-[0_0_30px_rgba(200,155,60,0.3)] hover:shadow-[0_0_50px_rgba(200,155,60,0.5)]"
                            onClick={scrollToForm}
                        >
                            Start Enrollment
                        </SkewedButton>
                    </div>
                </div>
            </section>

            {/* ================= WHY ENROLL AT S3 ================= */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-header italic uppercase text-navy tracking-tight mb-4">Why Choose S3 Academy?</h2>
                        <div className="h-1 w-20 bg-gold mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                icon: "solar:diploma-verified-bold-duotone",
                                title: "Academic Excellence",
                                desc: "Rigorous college-preparatory curriculum designed to challenge and inspire student-athletes."
                            },
                            {
                                icon: "solar:basketball-bold-duotone",
                                title: "Elite Development",
                                desc: "World-class coaching and training facilities focused on maximizing athletic potential."
                            },
                            {
                                icon: "solar:route-bold-duotone",
                                title: "College Pathway",
                                desc: "Comprehensive guidance and support for collegiate recruitment and scholarship opportunities."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl relative overflow-hidden text-center">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-navy to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                    <Icon icon={item.icon} className="w-10 h-10 text-navy group-hover:text-gold transition-colors" />
                                </div>
                                <h3 className="text-2xl font-header italic uppercase text-navy mb-4 tracking-wide">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ENROLLMENT PROCESS ================= */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="text-center mb-20">
                        <h4 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-2">The Roadmap</h4>
                        <h2 className="text-4xl md:text-5xl font-header italic uppercase text-navy tracking-tight">Enrollment Process</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
                            {[
                                { step: "01", title: "Submit Application", icon: "solar:document-add-bold-duotone" },
                                { step: "02", title: "Academic Review", icon: "solar:glasses-bold-duotone" },
                                { step: "03", title: "Athletic Evaluation", icon: "solar:ranking-bold-duotone" },
                                { step: "04", title: "Enrollment", icon: "solar:check-circle-bold-duotone" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:border-gold group-hover:shadow-lg transition-all duration-300 z-10 relative">
                                        <Icon icon={item.icon} className="w-10 h-10 text-slate-400 group-hover:text-navy transition-colors" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-black text-xs shadow-sm">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-header italic uppercase text-navy tracking-wide group-hover:text-gold transition-colors">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= ADMISSIONS PORTAL ================= */}
            <div ref={formSectionRef} id="enrollment-form" className="w-full">
                <AdmissionsPortal />
            </div>

            {/* ================= TRUST SECTION ================= */}
            <section className="py-20 bg-slate-50 text-center">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl md:text-3xl font-header italic uppercase text-slate-400 tracking-widest mb-12">Trusted by families preparing for collegiate success</h3>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - Using text for now as specific logos weren't provided */}
                        <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">NCAA</div>
                        <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">NIKE EYBL</div>
                        <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">USA BASKETBALL</div>
                        <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">SEC</div>
                        <div className="text-3xl font-black text-slate-300 uppercase tracking-tighter">ACC</div>
                    </div>
                </div>
            </section>

        </div>
    );
};
