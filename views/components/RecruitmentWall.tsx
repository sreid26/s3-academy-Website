import React from 'react';

const RecruitmentWall = () => {
    const recruits = [
        {
            name: "Doris Reid", // Example from your history
            college: "NC State",
            img: "/assets/images/students-classroom.png",
            collegeLogo: "/assets/images/s3_logo_main.png"
        },
        // Add more from your alumni folder here
    ];

    return (
        <section className="bg-slate-900 py-20 px-6 border-t border-amber-500/20">
            <div className="max-w-7xl mx-auto">

                {/* S3-PG Style Header */}
                <div className="text-center md:text-left mb-12">
                    <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-3 block">
                        Elite Collegiate Placement
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                        THE <span className="text-amber-500">RECRUIT</span> WALL
                    </h2>
                    <div className="w-24 h-1.5 bg-amber-500 mt-4 hidden md:block"></div>
                </div>

                {/* The Slider Grid */}
                <div className="flex overflow-x-auto pb-10 gap-8 snap-x no-scrollbar">
                    {recruits.map((recruit, index) => (
                        <div key={index} className="min-w-[300px] md:min-w-[380px] snap-center group relative">

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-slate-700 group-hover:border-amber-500 transition-all duration-500 shadow-2xl">
                                <img
                                    src={recruit.img}
                                    alt={recruit.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-90"></div>

                                {/* College Logo Overlay (Top Right) */}
                                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20 flex items-center justify-center">
                                    <img src={recruit.collegeLogo} alt={recruit.college} className="max-w-full max-h-full object-contain" />
                                </div>

                                {/* Name and Destination */}
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-1">Class of 2025</p>
                                    <h4 className="text-white font-black text-3xl uppercase italic tracking-tight mb-1">
                                        {recruit.name}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                        <span className="h-px w-6 bg-amber-500"></span>
                                        <p className="text-slate-300 font-bold uppercase text-sm tracking-tighter">
                                            Committed: <span className="text-white">{recruit.college}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecruitmentWall;
