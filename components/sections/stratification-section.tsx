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
                    </div>
                    <div className="w-full">
                        <LayerStack
                            layers={[
                                { src: "/imagenes_extraidas_pdf/imagenes_2_diapo/capa1.png", alt: "Layer 1: Underground Base", label: "Layer 1: Underground Base" },
                                { src: "/imagenes_extraidas_pdf/imagenes_2_diapo/capa2.png", alt: "Layer 2: Structural Grid", label: "Layer 2: Structural Grid" },
                                { src: "/imagenes_extraidas_pdf/imagenes_2_diapo/capa3.png", alt: "Layer 3: Surface Integration", label: "Layer 3: Surface Integration" },
                            ]}
                        />
                        <p className="mt-4 text-center text-sm text-muted-foreground">
                            Exploded 3D of Haussman plan showing stratification of layers.
                        </p>
                    </div>
                </div>

                {/* Subsection 2 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Forum: layered and controlled city
                        </p>
                    </div>

                    <div className="w-full max-w-4xl mx-auto">
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
