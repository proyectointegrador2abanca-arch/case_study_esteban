"use client";

import Image from "next/image";

export function StratificationSection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-5xl space-y-16">

                {/* Main Header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground">
                        Criterion 2: Surface & underground stratification
                    </h2>
                </div>

                {/* Subsection 1 */}
                <div className="space-y-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            1. Haussmann: surface-based city
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50">
                            <Image
                                src="/imagenes_extraidas_pdf/img104.jpg"
                                alt="Haussman plan 3D"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center md:text-left space-y-4">
                            <p className="text-muted-foreground">
                                Exploded 3D of Haussman plan showing presence of underground even if really limited (not definitif)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Subsection 2 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Forum: layered and controlled city
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {/* Content Block A */}
                        <div className="space-y-4">
                            <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50">
                                <Image
                                    src="/imagenes_extraidas_pdf/img105.jpg"
                                    alt="Sectional perspective of railway station"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-center text-xs text-muted-foreground">
                                Sectional perspective of the railway station. Source: Paris Projet, no. 8, Aménagement urbanisme avenir, APUR, Paris, 1972
                            </p>
                        </div>

                        {/* Content Block B */}
                        <div className="space-y-4">
                            <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50">
                                <Image
                                    src="/imagenes_extraidas_pdf/img106.jpg"
                                    alt="Exploded 3D of Forum plan"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-center text-xs text-muted-foreground">
                                Exploded 3D of the Forum plan showing presence of underground. East section of the Forum des Halles, 1972 (not definitif)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Subsection 3: Findings */}
                <div className="space-y-6 pt-12 border-t border-border/40">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            3. Findings
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground">
                        <p>Why the stratification?</p>
                        <p>Consequences from Haussmann and then Forum.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
