import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ParallaxTour = () => {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const revealRef = useScrollReveal();

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return;
            const scrolled = window.scrollY;
            const elementTop = parallaxRef.current.offsetTop;
            const elementHeight = parallaxRef.current.offsetHeight;
            const windowHeight = window.innerHeight;

            // Only animate if in view
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
                // Calculate how far through the element we've scrolled
                const progress = (scrolled + windowHeight - elementTop) / (windowHeight + elementHeight);
                // Move the background image slightly (from 0% to 20% offset)
                parallaxRef.current.style.backgroundPositionY = `${progress * 25}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="bg-navy py-12 border-y border-white/10" ref={revealRef}>
            <div className="container-tight reveal-on-scroll">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4 gap-6">
                    <div>
                        <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-2 block">
                            National-Level Infrastructure
                        </span>
                        <h2 className="text-white text-3xl md:text-5xl font-header italic uppercase tracking-tighter leading-none m-0">
                            The Performance Lab
                        </h2>
                    </div>
                </div>

                <div className="px-4">
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer block">
                        {/* Parallax Background */}
                        <div
                            ref={parallaxRef}
                            className="absolute inset-x-0 -top-[100px] h-[calc(100%+200px)] w-full bg-cover bg-center transition-transform duration-100 group-hover:scale-105 will-change-transform ease-out"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbb1925436?q=80&w=2070')`, // Placeholder gym image
                            }}
                        />

                        {/* Overlay to ensure text readability and premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent group-hover:from-navy/80 transition-colors duration-500"></div>

                        {/* Content inside the window */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-center text-center">
                            <p className="text-white/90 font-medium max-w-xl mx-auto mb-8 text-sm md:text-base italic leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                15,000 square feet of elite training space, featuring biometric courts, dedicated recovery zones, and professional-grade weight rooms.
                            </p>
                            <Link to="/about" className="btn-outline border-white text-white hover:bg-gold hover:border-gold hover:text-navy px-10 py-4 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                EXPLORE THE FACILITY
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
