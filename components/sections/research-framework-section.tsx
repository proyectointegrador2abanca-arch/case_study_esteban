"use client";

import Image from "next/image";

export function ResearchFrameworkSection() {
    return (
        <section id="research" className="bg-background py-24 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-4xl space-y-16">

                {/* Research Question */}
                <div className="space-y-6">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">
                        Research Question
                    </h2>
                    <p className="text-xl md:text-2xl font-medium leading-relaxed text-center text-foreground">
                        How did the two major modernizations of central Paris around Les Halles, under Haussmann and during the late-modern period, differ in their impact on the surrounding urban fabric and public space? (1850 - 1990)
                    </p>
                </div>

                {/* Hypothesis */}
                <div className="space-y-6">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">
                        Hypothesis
                    </h2>
                    <div className="text-lg text-muted-foreground leading-relaxed text-center space-y-4">
                        <p>
                            Both interventions were driven by the same ambitions of modernization, hygiene, and efficiency, yet with contrasting results.
                        </p>
                        <p>
                            The Haussmannian project integrated the market within a coherent civic structure, while the late-modern reconstruction produced a fragmented infrastructure disconnected from its surroundings.
                        </p>
                    </div>
                </div>

                {/* Methodology */}
                <div className="space-y-8">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">
                        Methodology
                    </h2>
                    <div className="text-center space-y-6">
                        <p className="text-lg font-medium text-foreground">
                            4 criteria will be examined to respond to the research question:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                            {[
                                "Urban morphology & continuity",
                                "Surface & underground stratification",
                                "Parcel structure, block typology & architectural fabric",
                                "Heritage perception, loss & monumentality"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                                        {idx + 1}
                                    </span>
                                    <span className="text-sm md:text-base text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sources */}
                <div className="space-y-8">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground text-center">
                        Sources
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="space-y-3 text-center group">
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5 transition-transform group-hover:scale-[1.02]">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/sources1.png"
                                    alt="Books Sources"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <p className="text-sm font-medium text-foreground/80">Books</p>
                        </div>
                        <div className="space-y-3 text-center group">
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5 transition-transform group-hover:scale-[1.02]">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/sources2.png"
                                    alt="Oral Sources"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <p className="text-sm font-medium text-foreground/80">Oral Sources</p>
                        </div>
                        <div className="space-y-3 text-center group">
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5 transition-transform group-hover:scale-[1.02]">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/sources3.png"
                                    alt="Cartographic Sources"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <p className="text-sm font-medium text-foreground/80">Cartographic Sources</p>
                        </div>
                        <div className="space-y-3 text-center group">
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5 transition-transform group-hover:scale-[1.02]">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/sources4.png"
                                    alt="Visual Sources"
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <p className="text-sm font-medium text-foreground/80">Visual Sources</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
