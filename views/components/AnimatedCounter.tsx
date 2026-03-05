import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export const AnimatedCounter = ({
    end,
    duration = 2000,
    delay = 0,
    suffix = '',
    prefix = '',
    decimals = 0
}: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    setTimeout(() => {
                        let startTime: number | null = null;
                        const step = (timestamp: number) => {
                            if (!startTime) startTime = timestamp;
                            const progress = Math.min((timestamp - startTime) / duration, 1);

                            // Ease out quartic for a premium, dramatic deceleration
                            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

                            setCount(end * easeOutQuart);

                            if (progress < 1) {
                                window.requestAnimationFrame(step);
                            } else {
                                setCount(end);
                            }
                        };
                        window.requestAnimationFrame(step);
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration, delay]);

    const displayCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

    return (
        <span ref={countRef} className="tabular-nums">
            {prefix}{displayCount}{suffix}
        </span>
    );
};
