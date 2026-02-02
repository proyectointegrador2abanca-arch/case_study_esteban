"use client";

import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

// Example data for hotspots - positions are percentages relative to the image container
const hotspots = [
    {
        id: 1,
        top: "30%",
        left: "45%",
        title: "Market Hall Structure",
        description: "The iron and glass pavilions designed by Victor Baltard, creating a transparent urban roof.",
        image: "/images/paris-louvre.jpg", // Placeholder - using existing image
    },
    {
        id: 2,
        top: "60%",
        left: "70%",
        title: "Underground Network",
        description: "The complex subterranean infrastructure that supports the modern city logistics.",
        image: "/images/paris-notre-dame.jpg", // Placeholder
    },
    {
        id: 3,
        top: "45%",
        left: "25%",
        title: "Urban Fabric Integration",
        description: "How the market connects with the surrounding residential blocks and streets.",
        image: "/images/paris-sacre-coeur.jpg", // Placeholder
    },
];

export function InteractiveMapSection() {
    return (
        <section id="interactive-analysis" className="bg-background py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                        Interactive Analysis
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Hover over the points to explore the architectural details.
                    </p>
                </div>

                <div className="relative aspect-[16/9] w-full bg-secondary/20 rounded-2xl overflow-hidden border border-border">
                    {/* Main Map Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/axonometrias/axonometria0.png"
                            alt="Axonometric Map Analysis"
                            fill
                            className="object-contain" // Contain to show full map
                        />
                    </div>

                    {/* Hotspots Layer */}
                    <div className="absolute inset-0">
                        {hotspots.map((spot) => (
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
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src={spot.image || "/placeholder.svg"}
                                            alt={spot.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-sm font-semibold mb-1">{spot.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {spot.description}
                                        </p>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
