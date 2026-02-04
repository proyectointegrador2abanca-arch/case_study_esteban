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
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground pb-6">
                        1. Morphology: before / after Haussmann
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
                        <div className="text-muted-foreground leading-relaxed text-left space-y-2">
                            <p>Before Haussmann, the neighborhood around Les Halles was an organic and fragmented fabric structured by medieval streets and scattered markets.</p>
                            <p>Haussmann’s intervention reorganized this fabric through new axes, wider streets, and clearer alignments.</p>
                            <p>Baltard’s pavilions acted as open civic structures, connecting the market to the surrounding streets.</p>
                            <p>Rather than isolating the site, the project reinforced its role as a central piece within a continuous urban fabric.</p>
                        </div>
                        <div className="space-y-2">
                            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/calles.png"
                                    alt="Haussmann Transformation Details"
                                    fill
                                    className="object-contain bg-secondary/5"
                                />
                            </div>
                            <p className="text-xs text-center text-muted-foreground italic">
                                Scale of Hausssmanian’s transformation between 1836 and 1904
                            </p>
                        </div>
                    </div>
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

                        {/* Hover Image (calles_1) - Hidden by default, visible on hover */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/imagenes_extraidas_pdf/calles_1.png"
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

                {/* Subsection 2: Haussmann / Forum */}
                <div className="space-y-6 pt-12 border-t border-border/40">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground pb-6">
                            2. Morphology: Haussmann / Forum
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
                            <div className="text-muted-foreground leading-relaxed text-left space-y-2">
                                <p>The late-modern intervention took a fundamentally different approach.</p>
                                <p>The existing street grid was largely preserved, but the Forum des Halles no longer structured the surrounding fabric.</p>
                                <p>Instead of reinforcing urban continuity, the project concentrated transformation within the site itself.</p>
                                <p>The Halles became an inward-looking object, whose relationship with the surrounding neighborhood was weakened, despite its central location.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/arriba_colores.png"
                                        alt="Forum Transformation Details"
                                        fill
                                        className="object-contain bg-secondary/5"
                                    />
                                </div>
                                <p className="text-xs text-center text-muted-foreground italic">
                                    Scale of Forum des Halles’ transformation between 1904 and 1990
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-sm group">
                        {/* Default: After Forum (Placeholder) */}
                        <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                            <Image
                                src="/imagenes_extraidas_pdf/imagenes_2_diapo/colores2.png"
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
                                src="/imagenes_extraidas_pdf/imagenes_2_diapo/colores1.png"
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
                    <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            The Haussmannian project restructured the surrounding neighborhood and reinforced spatial continuity between the market and the city.
                        </p>
                        <p>
                            Les Halles functioned as an organizing element of the urban fabric.
                        </p>
                        <p>
                            In contrast, the Forum des Halles preserved the surrounding streets but lost this structuring role, becoming an autonomous object disconnected from its immediate urban context.
                        </p>

                        <div className="pt-8 space-y-6">
                            <h3 className="text-xl font-medium text-foreground">
                                Loss of neighborhood-scale structure
                            </h3>
                            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-sm group cursor-pointer max-w-4xl mx-auto">
                                {/* Base Image: first.png */}
                                <div className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/first.png"
                                        alt="Haussmann reinforces urban continuity"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                                            Haussmann reinforces urban continuity
                                        </span>
                                    </div>
                                </div>
                                {/* Hover Image: second.png */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/second.png"
                                        alt="Forum becomes an isolated object"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                                            Forum becomes an isolated object
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}
