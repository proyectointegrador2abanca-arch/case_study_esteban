"use client";

import { useEffect, useRef, useState } from "react";

export function AbstractSection() {
    const abstractRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (abstractRef.current) {
            observer.observe(abstractRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="abstract"
            className="relative bg-background z-20"
        >
            <div
                ref={abstractRef}
                className={`px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <p className="mx-auto max-w-4xl text-center text-xl leading-relaxed text-foreground/90 md:text-2xl lg:text-3xl lg:leading-snug transition-colors duration-700">
                    How did the two major modernizations of central Paris around Les Halles, under Haussmann and during the late-modern period, differ in their impact on the surrounding urban fabric and public space? (1850 - 1990)
                    <br /><br />
                    Both interventions were driven by the same ambitions of modernization, hygiene, and efficiency, yet with contrasting results. The Haussmannian project integrated the market within a coherent civic structure, while the late-modern reconstruction produced a fragmented infrastructure disconnected from its surroundings.
                </p>
            </div>
        </div>
    );
}
