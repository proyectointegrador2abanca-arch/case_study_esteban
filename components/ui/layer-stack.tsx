"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

interface LayerStackProps {
    layers: {
        src: string;
        alt: string;
        label?: string; // Optional label for the layer
    }[];
    className?: string;
}

export function LayerStack({ layers, className }: LayerStackProps) {
    // Determine how many layers are visible.
    // Initially, all layers meant to be base might be 1, but "capas" implies building up.
    // Let's start with all 3 visible or just 1?
    // "superponen" -> usually means you add them.
    // Let's start with 1 visible (the bottom one) and let user add more.
    // Or start with all visible and let user strip them?
    // "subir y bajar que vaya cambiando entre estas 3 imagenes... se superponen".
    // Let's start with 1 layer visible.
    const [visibleCount, setVisibleCount] = useState(1);

    const handleUp = () => {
        if (visibleCount < layers.length) {
            setVisibleCount(visibleCount + 1);
        }
    };

    const handleDown = () => {
        if (visibleCount > 1) {
            setVisibleCount(visibleCount - 1);
        }
    };

    return (
        <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/50 bg-muted/20">
                {/* Layers */}
                {layers.map((layer, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                        style={{
                            zIndex: index,
                            opacity: index < visibleCount ? 1 : 0,
                        }}
                    >
                        <Image
                            src={layer.src}
                            alt={layer.alt}
                            fill
                            className="object-contain"
                        />
                        {/* Label (Optional) */}
                        {layer.label && index === visibleCount - 1 && (
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-border/50 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                    {layer.label}
                                </span>
                            </div>
                        )}
                    </div>
                ))}

                {/* Controls */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
                    <button
                        onClick={handleUp}
                        disabled={visibleCount >= layers.length}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-foreground hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                        aria-label="Add Layer"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </button>

                    <div className="text-center text-xs font-medium text-muted-foreground bg-background/50 px-2 rounded-md">
                        {visibleCount} / {layers.length}
                    </div>

                    <button
                        onClick={handleDown}
                        disabled={visibleCount <= 1}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-foreground hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                        aria-label="Remove Layer"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
                Use arrows to add/remove layers
            </p>
        </div>
    );
}
