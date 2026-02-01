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

                {/* Interactive Image Comparison 1: Before / After Haussmann */}
                <div className="space-y-4">
                    <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
                        Scale of Hausssmanian’s transformation between 1836 and 1904
                    </p>
                    <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-sm group">
                        {/* Default Image (calles_2) - Visible by default, fades out on hover */}
                        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
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

                        {/* Hover Image (calles_1) - Hidden by default, visible on hover */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/imagenes_extraidas_pdf/calles_1.png"
                                alt="Morphology Before Haussmann"
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border/50">
                                    Before Haussmann
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subsection 2: Haussmann / Forum */}
                <div className="space-y-6 pt-12 border-t border-border/40">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Morphology: Haussmann / Forum
                        </p>
                        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
                            Scale of Forum des Halles’ transformation between 1904 and 1990
                        </p>
                    </div>

                    <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-sm group">
                        {/* Default: After Forum (Placeholder) */}
                        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                            <Image
                                src="/imagenes_extraidas_pdf/img100.jpg"
                                alt="3D after Forum"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border/50">
                                    3D after Forum showing volumes and voids
                                </span>
                            </div>
                        </div>

                        {/* Hover: Before Forum (Placeholder) */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/imagenes_extraidas_pdf/img101.jpg"
                                alt="3D before Forum"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                <span className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground border border-border/50">
                                    3D before Forum showing volumes and voids
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-xs text-muted-foreground">
                        Hover over the image to compare
                    </p>
                </div>

                {/* Subsection 3: Findings */}
                <div className="space-y-6 pt-12 border-t border-border/40">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            3. Findings
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground">
                        <p>
                            Conclusion criterion 1
                        </p>
                        <p>
                            (Schematic conclusion?)
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
