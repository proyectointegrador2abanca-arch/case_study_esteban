"use client";

import Image from "next/image";

export function UrbanMorphologySection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-5xl space-y-12">

                {/* Headers */}
                <div className="space-y-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground">
                        Criterion 1: Urban morphology & continuity
                    </h2>
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        1. Morphology: before / after Haussmann
                    </p>
                </div>

                {/* Interactive Image Comparison */}
                <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-sm group">

                    {/* Default Image (calles_1) - Visible by default, fades out on hover */}
                    <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                        <Image
                            src="/imagenes_extraidas_pdf/calles_1.png"
                            alt="Morphology Before Haussmann"
                            fill
                            className="object-contain" // Using contain to ensure full map is visible
                        />
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border/50">
                                Before Haussmann
                            </span>
                        </div>
                    </div>

                    {/* Hover Image (calles_2) - Hidden by default, visible on hover */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/imagenes_extraidas_pdf/calles_2.png"
                            alt="Morphology After Haussmann"
                            fill
                            className="object-contain"
                        />
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border/50">
                                After Haussmann
                            </span>
                        </div>
                    </div>

                </div>

                <p className="text-center text-xs text-muted-foreground">
                    Hover over the image to compare
                </p>

            </div>
        </section>
    );
}
