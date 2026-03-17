import React from 'react';

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

                {/* The Jotform Container */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gold/30">
                    {/* Jotform Embed - Replace ID with your actual Jotform ID */}
                    <iframe
                        id="JotFormIFrame-Enrollment"
                        title="S3 Academy Enrollment Form"
                        onLoad={() => window.scrollTo(0, 0)}
                        allowTransparency={true}
                        allowFullScreen={true}
                        loading="lazy"
                        sandbox="allow-forms allow-popups allow-scripts allow-top-navigation allow-same-origin"
                        src="https://form.jotform.com/251464240626049?iframe=1"
                        className="w-full h-screen min-h-[1100px] border-none bg-white rounded-xl"
                        style={{ border: 'none' }}
                    />
                </div>

                {/* Mobile-First Support Section */}
                <div className="font-sans mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                        <h4 className="font-bold text-gold uppercase text-sm mb-2 tracking-widest">Need Help?</h4>
                        <p className="text-sm text-white/70">Our admissions team is ready to assist you with the application process.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                        <h4 className="font-bold text-gold uppercase text-sm mb-2 tracking-widest">Next Steps</h4>
                        <p className="text-sm text-white/70">After submission, expect a follow-up interview within 3-5 business days.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionsPortal;
