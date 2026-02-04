"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
    text: string;
    className?: string;
    progress?: number;
}

export function ScrollRevealText({ text, className, progress: manualProgress }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const [internalProgress, setInternalProgress] = useState(0);

    useEffect(() => {
        if (manualProgress !== undefined) return;

        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Slower animation - more viewport range
            const startOffset = windowHeight * 0.9;
            const endOffset = windowHeight * 0.1;

            const totalDistance = startOffset - endOffset;
            const currentPosition = startOffset - rect.top;

            const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
            setInternalProgress(newProgress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [manualProgress]);

    const words = text.split(" ");
    const activeProgress = manualProgress ?? internalProgress;

    return (
        <p
            ref={containerRef}
            className={cn("text-3xl font-semibold leading-snug md:text-4xl lg:text-5xl", className)}
        >
            {words.map((word, index) => {
                const wordProgress = index / words.length;
                const isRevealed = activeProgress > wordProgress;

                return (
                    <span
                        key={index}
                        className="transition-colors duration-150"
                        style={{
                            color: isRevealed ? "var(--foreground)" : "#e4e4e7", // text-muted or specific gray
                        }}
                    >
                        {word}{index < words.length - 1 ? " " : ""}
                    </span>
                );
            })}
        </p>
    );
}
