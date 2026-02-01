"use client";

import Image from "next/image";

export function ParcelStructureSection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-5xl space-y-16">

                {/* Main Header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground">
                        Criterion 3: Parcel structure, block typology & architectural fabric
                    </h2>
                </div>

                {/* Subsection 1 */}
                <div className="space-y-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            1. Parcel structure
                        </p>
                    </div>
                    <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50">
                        <Image
                            src="/imagenes_extraidas_pdf/img113.jpg"
                            alt="Parcel structure analysis"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Subsection 2 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Block typology & inner space
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-border/50">
                                <Image
                                    src="/imagenes_extraidas_pdf/img114.jpg"
                                    alt="Before Haussmann Block"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-center text-xs text-muted-foreground">Comparison between before Haussmann</p>
                        </div>
                        <div className="space-y-2">
                            <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-border/50">
                                <Image
                                    src="/imagenes_extraidas_pdf/img120.jpg"
                                    alt="After Haussmann Block"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-center text-xs text-muted-foreground">Comparison after Haussmann</p>
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground mt-4">
                        Need to redo it to show the difference in term ft f
                    </p>
                </div>

                {/* Subsection 3 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            3. Uses and functionnal diversity
                        </p>
                    </div>
                    <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50">
                        <Image
                            src="/imagenes_extraidas_pdf/img121.jpg"
                            alt="Uses and functional diversity"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground max-w-4xl mx-auto">
                        <div>
                            <p className="font-medium text-foreground mb-2">Before Haussmann</p>
                            <p>Concentration of activity in a unique place. "Les Halles et la rue de la Tonnellerie", painting of the old urban fabric, Canella Giuseppe, 1828.</p>
                        </div>
                        <div>
                            <p className="font-medium text-foreground mb-2">Integration & Forum Era</p>
                            <p>Integration of the market in urban fabric vs. concentration of activity in a unique place during Forum and urban fabric out of view.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
