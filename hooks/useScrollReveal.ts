import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: stop observing once it has faded in
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15, // Trigger when 15% of the element is visible
                rootMargin: '0px 0px -50px 0px' // Slightly offset so it triggers before bottom of screen
            }
        );

        const elements = containerRef.current?.querySelectorAll('.reveal-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return containerRef;
};
