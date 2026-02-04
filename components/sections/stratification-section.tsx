"use client";

import Image from "next/image";
import { LayerStack } from "@/components/ui/layer-stack";

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
                        <div className="max-w-3xl mx-auto pt-4 text-muted-foreground leading-relaxed text-left space-y-2 pb-6">
                            <p>In the Haussmannian period, urban life at Les Halles remained primarily surface-based.</p>
                            <p>Although underground spaces existed for storage and logistics, they did not redefine public space.</p>
                            <p>Streets crossed the market, and activities extended naturally into the surrounding neighborhood as activities and traffic increased.</p>
                            <p>Living, working, and trading were closely intertwined, allowing the market to function as an open and permeable part of the city.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="w-full max-w-5xl mx-auto space-y-12">
                            <div>
                                <LayerStack
                                    layers={[
                                        { src: "/imagenes_extraidas_pdf/imagenes_2_diapo/capa1.png", alt: "Layer 1: Underground Base", label: "Layer 1: Underground Base" },
                                        { src: "/imagenes_extraidas_pdf/imagenes_2_diapo/capa2.png", alt: "Layer 2: Structural Grid", label: "Layer 2: Structural Grid" },
                                        { src: "/imagenes_extraidas_pdf/imagenes_2_diapo/capa3.png", alt: "Layer 3: Surface Integration", label: "Layer 3: Surface Integration" },
                                    ]}
                                />
                                <p className="mt-4 text-center text-sm text-muted-foreground">
                                    Surface-based public space with service underground
                                </p>
                            </div>

                            <div className="max-w-4xl mx-auto bg-secondary/5 rounded-2xl p-8 border border-border/50">
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <li className="flex flex-col items-center text-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-1">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-lg text-foreground font-medium leading-snug">Urban life at ground level</p>
                                    </li>
                                    <li className="flex flex-col items-center text-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-1">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-lg text-foreground font-medium leading-snug">Underground as support, not public space</p>
                                    </li>
                                    <li className="flex flex-col items-center text-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-1">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                        </div>
                                        <p className="text-lg text-foreground font-medium leading-snug">Strong continuity between market and streets</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="space-y-3">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-secondary/10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/captura lateral.png"
                                        alt="Section through Baltard’s Halles"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-xs text-center text-muted-foreground italic max-w-sm mx-auto">
                                    Section through Baltard’s Halles showing surface market and service underground (c. 1860)
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-secondary/10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/captura_2.png"
                                        alt="Demolition site of Les Halles"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-xs text-center text-muted-foreground italic max-w-sm mx-auto">
                                    Photograph of the demolition site of Les Halles, 1972, Archives de Paris
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subsection 2 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Forum: layered and controlled city
                        </p>
                        <div className="max-w-3xl mx-auto pt-4 text-muted-foreground leading-relaxed text-left space-y-2 pb-6">
                            <p>The Forum des Halles introduced a vertically stratified urban system.</p>
                            <p>Public space was reorganized across multiple levels connected by stairs, escalators, and corridors.</p>
                            <p>Functions were separated: transport below, commerce in intermediate levels, and leisure above.</p>
                            <p>Pedestrian continuity at ground level was interrupted, transforming the Halles into an infrastructure of flows rather than an extension of everyday urban life.</p>
                            <p>Movement is no longer spontaneous but guided, controlled, and programmed through architectural devices.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-7xl mx-auto">
                        {/* Interactive Layer Stack */}
                        <div className="w-full max-w-5xl mx-auto mb-16">
                            <LayerStack
                                layers={[
                                    { src: "/capas/SUB 7-1.png", alt: "Level -7", label: "Level -7: Lowest Level" },
                                    { src: "/capas/SUB 6-1.png", alt: "Level -6", label: "Level -6: Transport" },
                                    { src: "/capas/SUB 5-1.png", alt: "Level -5", label: "Level -5: Interchange" },
                                    { src: "/capas/SUB4-1.png", alt: "Level -4", label: "Level -4: Metro/RER" },
                                    { src: "/capas/SUB3-1.png", alt: "Level -3", label: "Level -3: Commercial" },
                                    { src: "/capas/SUB 2-1.png", alt: "Level -2", label: "Level -2: Forum Access" },
                                    { src: "/capas/1,SUB-1.png", alt: "Level -1", label: "Level -1: Ground/Mezzanine" },
                                ]}
                            />
                            <p className="mt-4 text-center text-sm text-muted-foreground">
                                Interactive stratification of the Forum des Halles levels. Use arrows to explore.
                            </p>
                        </div>

                        {/* Complete Vision Image */}
                        <div className="w-full max-w-3xl mx-auto mb-12">
                            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-secondary/5 border border-border/50 shadow-sm">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/7capas_imagen:completa.png"
                                    alt="Complete stratification visualization"
                                    fill
                                    className="object-contain" // Changed to contain to ensure full visibility, or cover if aspect ratio matches well. User said "verla bien", usually implies contain or correct aspect. 4/5 is tall.
                                />
                            </div>
                            <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                                Complete vision of all layers
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mt-12">
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Vertical separation of functions</p>
                                </li>
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Movement guided and controlled</p>
                                </li>
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Public space becomes an infrastructure</p>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="space-y-3">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-secondary/10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/captura3.png"
                                        alt="Sectional perspective of the railway station"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-xs text-center text-muted-foreground italic max-w-sm mx-auto">
                                    Sectional perspective of the railway station Source: Paris Projet, no. 8, Aménagement urbanisme avenir, APUR, Paris, 1972
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-secondary/10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/captura4.png"
                                        alt="East section of the Forum des Halles"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-xs text-center text-muted-foreground italic max-w-sm mx-auto">
                                    East section of the Forum des Halles, 1972
                                </p>
                            </div>
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
                    <div className="space-y-12">
                        <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Baltard’s Halles remained a surface-based public place, with underground spaces supporting rather than restructuring urban life.
                            </p>
                            <p>
                                The Forum des Halles, by contrast, operates as a layered infrastructure prioritizing circulation and efficiency.
                            </p>
                            <p>
                                This shift transforms the Halles from a lived urban place into a controlled system of movement at a metropolitan scale.
                            </p>
                            <p>
                                This transformation reduces informal encounters and weakens the sense of local urban life.
                            </p>
                        </div>

                        <div className="w-full max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border/50 bg-secondary/10">
                                        <Image
                                            src="/imagenes_extraidas_pdf/imagenes_2_diapo/plantabaja.png"
                                            alt="Ground floor plan"
                                            fill
                                            className="object-contain hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="text-sm text-center font-medium text-muted-foreground">Urban life at ground level</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border/50 bg-secondary/10">
                                        <Image
                                            src="/imagenes_extraidas_pdf/imagenes_2_diapo/palnta_alta.png"
                                            alt="Upper floor plan"
                                            fill
                                            className="object-contain hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="text-sm text-center font-medium text-muted-foreground">Efficiency replaces everyday urbanity</p>
                                </div>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">From lived space to system of flows</p>
                                </li>
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Local interactions are reduced</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
