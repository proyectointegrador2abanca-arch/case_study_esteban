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
            {
                id: 1,
                // 662, 274 (1135x650)
                top: "42.15%",
                left: "58.33%",
                title: "Pre-Haussmann Era",
                description: `Population boom → hygiene crisis
Medieval streets, vernacular housing
First reconstruction plans: limited by cost`,
                images: ["/imagenes_extraidas_pdf/img57.jpg"]
            }
        ]
    },
    {
        src: "/axonometrias/axonometria2.png",
        alt: "Axonometry 2: Structural Grid",
        hotspots: [
            {
                id: 2,
                // 392, 344 (1155x671)
                top: "51.26%",
                left: "33.94%",
                title: "The Baltard Pavilions",
                description: `1851 – Victor Baltard commissioned
1853 – Iron & glass system (after rejection of stone)
12 pavilions built → completed end of 19th century
Gas lighting • steel structure • ventilation
Described by Zola (Le Ventre de Paris, 1873)`,
                images: [
                    "/imagenes_extraidas_pdf/img64.jpg",
                    "/imagenes_extraidas_pdf/img72.jpg",
                    "/imagenes_extraidas_pdf/img73.jpg"
                ]
            }
        ]
    },
    {
        src: "/axonometrias/axonometria3.png",
        alt: "Axonometry 3: Circulation",
        hotspots: [
            {
                id: 3,
                // 649, 337 (1156x671)
                top: "50.22%",
                left: "56.14%",
                title: "Rise and Fall",
                description: `1857: 1 million inhabitants
1900: 2,6 million inhabitants
1969 – Rungis completed
1971 – Demolition begins
1 pavilion saved (No. 8 → Nogent-sur-Marne)
1971–1977 – Empty site
1977 – RER station opens`,
                images: []
            }
        ]
    },
    {
        src: "/axonometrias/axonometria4.png",
        alt: "Axonometry 4: Underground Layers",
        hotspots: [
            {
                id: 4,
                // 680, 518 (1158x671)
                top: "77.19%",
                left: "58.72%",
                title: "Underground Development",
                description: "Expansion of the underground transport network and commercial spaces.",
                images: ["/imagenes_extraidas_pdf/img89.jpg"]
            }
        ]
    },
    {
        src: "/axonometrias/axonometria5.png",
        alt: "Axonometry 5: Surface Connections",
        hotspots: [
            {
                id: 5,
                top: "20%",
                left: "70%",
                title: "Surface Connections",
                description: "Points of connection between surface and underground.",
                images: []
            }
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
                                        <HoverCardContent className="w-80 p-0 overflow-hidden border-border bg-popover shadow-xl z-50">
                                            {spot.images && spot.images.length > 0 && (
                                                <div className="relative w-full aspect-video bg-muted">
                                                    {/* Simple Grid if multiple images, otherwise single */}
                                                    {spot.images.length === 1 ? (
                                                        <Image
                                                            src={spot.images[0]}
                                                            alt={spot.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    ) : (
                                                        <div className="grid grid-cols-2 h-full w-full">
                                                            {spot.images.slice(0, 4).map((img, i) => (
                                                                <div key={i} className="relative h-full w-full border-[0.5px] border-border/20">
                                                                    <Image
                                                                        src={img}
                                                                        alt={`${spot.title} ${i + 1}`}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <div className="p-4">
                                                <h4 className="text-sm font-semibold mb-2">{spot.title}</h4>
                                                <div className="text-xs text-muted-foreground leading-relaxed space-y-1">
                                                    {spot.description.split('\n').map((line, i) => (
                                                        <p key={i}>{line}</p>
                                                    ))}
                                                </div>
                                            </div>
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
