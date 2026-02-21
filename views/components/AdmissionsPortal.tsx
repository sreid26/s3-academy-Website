import React from 'react';

const AdmissionsPortal = () => {
    return (
        <section className="bg-slate-900 py-16 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
                {/* Portal Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
                        Enrollment <span className="text-amber-500">Portal</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Begin your journey toward becoming a scholar-champion. Our streamlined
                        admissions process is engineered for elite student-athletes.
                    </p>
                </div>

                {/* The Jotform Container */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-amber-500">
                    {/* Jotform Embed - Replace ID with your actual Jotform ID */}
                    <iframe
                        id="JotFormIFrame-Enrollment"
                        title="S3 Academy Enrollment Form"
                        onLoad={() => window.scrollTo(0, 0)}
                        allowTransparency={true}
                        allowFullScreen={true}
                        allow="geolocation; microphone; camera"
                        src="https://form.jotform.com/251464240626049"
                        className="w-full min-h-[800px] border-none"
                    />
                </div>

                {/* Mobile-First Support Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h4 className="font-bold text-amber-500 uppercase text-sm mb-2">Need Help?</h4>
                        <p className="text-sm text-slate-300">Our admissions team is ready to assist you with the application process.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <h4 className="font-bold text-amber-500 uppercase text-sm mb-2">Next Steps</h4>
                        <p className="text-sm text-slate-300">After submission, expect a follow-up interview within 3-5 business days.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdmissionsPortal;
