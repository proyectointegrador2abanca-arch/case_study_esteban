"use client";

import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

// Data for chronology
const chronologyText = [
    "1857: 1 million inhabitants",
    "1900: 2,6 million inhabitants",
    "1969 – Rungis completed",
    "1971 – Demolition begins",
    "1 pavilion saved (No. 8 → Nogent-sur-Marne)",
    "1971–1977 – Empty site",
    "1977 – RER station opens"
];

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
                imageCaption: "Les Halles et la rue de la Tonnellerie, painting of the old urban fabric, Canella Giuseppe, 1828",
                description: `Population boom → hygiene crisis
Medieval streets, vernacular housing
First reconstruction plans: limited by cost`,
                images: ["/imagenes_extraidas_pdf/img57.jpg"]
            },
            {
                id: 7,
                // 539, 246 (1135x650)
                top: "37.85%",
                left: "47.49%",
                title: "Rue des Prouvaires",
                imageCaption: "La rue des Prouvaires et l'église Saint-Eustache, painting of the old urban fabric, Canella Giuseppe, 1828",
                description: "View of the Rue des Prouvaires and Saint-Eustache church, depicting the dense medieval urban fabric before the major 19th-century transformations.",
                images: ["/imagenes_extraidas_pdf/imagen:diapos.png"]
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
                    "/imagenes_extraidas_pdf/img64.jpg"
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
                description: "Demolition of the pavilions ,from the book Les fantômes des Halles, 2004.",
                images: ["/imagenes_extraidas_pdf/img83.jpg"]
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
                description: "Foutain of Innocents suspended in “hole of Les Halles”, 1973",
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
                // 556, 390 (1154x671)
                top: "58.12%",
                left: "48.18%",
                title: "Housing on Rue Berger",
                description: "Housing on Rue Berger, APUR, 1985",
                images: ["/imagenes_extraidas_pdf/img105.jpg"]
            },
            {
                id: 6,
                // 715, 270 (1154x671)
                top: "40.24%",
                left: "61.96%",
                title: "Social Housing on Rue Rambuteau",
                description: "Social housing on Rue Rambuteau, APUR, 1985",
                images: ["/imagenes_extraidas_pdf/img106.jpg"]
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
                        <div key={index}>
                            {index === 0 && (
                                <h3 className="text-xl font-medium text-foreground mb-6 text-center">
                                    Organic urban fabric and dispersed markets before Haussmann (1800–1850)
                                </h3>
                            )}
                            <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-secondary/10 shadow-sm">
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
                                            <HoverCardContent className="w-[32rem] p-0 overflow-hidden border-border bg-popover shadow-xl z-50">
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

                                                {'imageCaption' in spot && (
                                                    <div className="px-6 pt-3">
                                                        <p className="text-xs text-muted-foreground italic text-center">
                                                            {(spot as any).imageCaption}
                                                        </p>
                                                    </div>
                                                )}

                                                <div className="p-6">
                                                    <h4 className="text-lg font-semibold mb-3">{spot.title}</h4>
                                                    <div className="text-base text-muted-foreground leading-relaxed space-y-1">
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

                            {/* Chronology Text between Axon 3 (index 2) and Axon 4 (index 3) */}
                            {index === 2 && (
                                <div className="py-12 px-8 max-w-2xl mx-auto text-center">
                                    <div className="space-y-2 text-muted-foreground font-medium text-lg border-l-2 border-primary/20 pl-6 text-left">
                                        {chronologyText.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
