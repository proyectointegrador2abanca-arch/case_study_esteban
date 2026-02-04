"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";

export function AbstractSection() {
    const abstractRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const abstractParagraphs = [
        "This study looks at how the Les Halles area in central Paris has changed over time, focusing on two major moments of modernization: the 19th-century transformation led by Haussmann and Victor Baltard, and the redevelopment of the 1970s and 1980s after the market was moved out of the city.",
        "Les Halles, located at the very centre of Paris and surrounded by major cultural and civic buildings, has always been an important urban site. Early maps show a dense district that was redesigned by Haussmann and commissioned Baltard to build a series of iron-and-glass market pavilions that reflected new ideas about hygiene, light, and efficient circulation.",
        "By the early 20th century, these pavilions could no longer handle Paris’s rapid population growth. In the 1960s, the wholesale market was transferred to Rungis, and almost all of Baltard’s structures were demolished in 1971.",
        "The demolition created a large empty space above the new underground RER station, leading to years of debate about the future of the site. The final solution was the Forum des Halles, a large underground complex combining transport, shops, and leisure spaces, built between the late 1970s and the 1980s. This project left the surface street grid mostly unchanged but created a deep and complex infrastructure below ground.",
        "Our research compares these two modernization phases to understand how similar goals—modernity, hygiene, and efficiency—produced very different results. Using historical documents, maps, aerial photos, literary sources, and recorded testimonies, we study how the area’s street layout, building types, and public spaces evolved.",
        "Early findings suggest that the 19th-century project created a more integrated urban setting, while the late-20th-century redevelopment resulted in a more fragmented environment. Through 3D modelling and GIS analysis, the study aims to clarify how these changes have shaped the identity and daily life of the neighbourhood around Les Halles."
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!abstractRef.current) return;

            const rect = abstractRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Define scroll range relative to viewport
            const startOffset = windowHeight * 0.8;
            const endOffset = windowHeight * 0.2;
            const totalDistance = startOffset - endOffset;
            const currentPosition = startOffset - rect.top;

            // Calculate progress (0 to 1)
            const progress = Math.max(0, Math.min(1, currentPosition / totalDistance));
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            id="abstract"
            className="relative bg-background z-20"
        >
            <div
                ref={abstractRef}
                className={`px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40`}
            >
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    <div className="mb-12 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
                            Abstract
                        </h2>
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            History of Architecture and Heritage
                        </p>
                    </div>

                    <div className="space-y-8 mb-12">
                        {abstractParagraphs.map((text, index) => {
                            // Calculate sequential progress
                            // Total paragraphs: 6
                            // Each takes up 1/6 of the total scroll progress
                            const step = 1 / abstractParagraphs.length;
                            const paragraphProgress = Math.max(0, Math.min(1, (scrollProgress - (index * step)) / step));

                            return (
                                <ScrollRevealText
                                    key={index}
                                    text={text}
                                    progress={paragraphProgress}
                                    className="text-xl font-normal leading-relaxed text-foreground md:text-2xl lg:text-3xl lg:leading-snug text-center"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
