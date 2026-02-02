"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
    text: string;
    className?: string;
}

export function ScrollRevealText({ text, className }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
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
            setProgress(newProgress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const words = text.split(" ");

    return (
        <p
            ref={containerRef}
            className={cn("text-3xl font-semibold leading-snug md:text-4xl lg:text-5xl", className)}
        >
            {words.map((word, index) => {
                const wordProgress = index / words.length;
                const isRevealed = progress > wordProgress;

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
