"use client";

import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

// Data for the 5 stacked axonometries
const axonometryImages = [
    {
        src: "/axonometrias/axonometria0.png",
        alt: "Axonometry 0: Urban Context",
        hotspots: [
            { id: 1, top: "40%", left: "50%", title: "Context Overview", description: "Integration with the surrounding urban fabric." }
        ]
    },
    {
        src: "/axonometrias/axonometria2.png",
        alt: "Axonometry 2: Structural Grid",
        hotspots: [
            { id: 2, top: "50%", left: "40%", title: "Structural Grid", description: "The underlying structural system of the intervention." }
        ]
    },
    {
        src: "/axonometrias/axonometria3.png",
        alt: "Axonometry 3: Circulation",
        hotspots: [
            { id: 3, top: "30%", left: "60%", title: "Circulation Flows", description: "Pedestrian and transport circulation analysis." }
        ]
    },
    {
        src: "/axonometrias/axonometria4.png",
        alt: "Axonometry 4: Underground Layers",
        hotspots: [
            { id: 4, top: "60%", left: "30%", title: "Underground Levels", description: "Complex stratification of underground levels." }
        ]
    },
    {
        src: "/axonometrias/axonometria5.png",
        alt: "Axonometry 5: Surface Connections",
        hotspots: [
            { id: 5, top: "20%", left: "70%", title: "Surface Connections", description: "Points of connection between surface and underground." }
        ]
    },
];

export function InteractiveMapSection() {
    return (
        <section id="interactive-analysis" className="bg-background py-20 px-6 md:px-12 lg:px-20">
            <div className="mx-auto max-w-5xl space-y-16">
                <div className="text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                        Interactive Analysis
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Detailed axonometric analysis of the transformation layers.
                    </p>
                </div>

                <div className="space-y-12">
                    {axonometryImages.map((axono, index) => (
                        <div key={index} className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-secondary/10 shadow-sm">
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    src={axono.src}
                                    alt={axono.alt}
                                    fill
                                    className="object-contain"
                                />

                                {/* Hotspots */}
                                {axono.hotspots.map((spot) => (
                                    <HoverCard key={spot.id}>
                                        <HoverCardTrigger asChild>
                                            <button
                                                className="absolute h-6 w-6 -ml-3 -mt-3 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-10 animate-pulse hover:animate-none ring-2 ring-background"
                                                style={{ top: spot.top, left: spot.left }}
                                                aria-label={`View details for ${spot.title}`}
                                            >
                                                <Info size={14} />
                                            </button>
                                        </HoverCardTrigger>
                                        <HoverCardContent className="w-64 p-4 border-border bg-popover shadow-xl z-50">
                                            <h4 className="text-sm font-semibold mb-1">{spot.title}</h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {spot.description}
                                            </p>
                                        </HoverCardContent>
                                    </HoverCard>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
