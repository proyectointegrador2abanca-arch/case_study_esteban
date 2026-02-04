"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function AnnexesSection() {
    return (
        <section id="annexes" className="bg-background py-24 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-5xl space-y-24">

                {/* Main Header */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
                        Annexes
                    </h2>
                </div>



                {/* Annex 2: Cadastral Maps */}
                <div className="space-y-12">
                    <h3 className="text-2xl font-medium text-foreground border-b border-border/40 pb-4">
                        Annex 2: Cadastral maps
                    </h3>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xl font-medium text-foreground mb-4">
                                1. Reconstitution of the cadastral map of 1836
                            </h4>

                        </div>

                        {/* Carousel */}
                        <div className="w-full max-w-4xl mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {[
                                        {
                                            src: "/imagenes_extraidas_pdf/images/51.png",
                                            caption: "Atlas de Jacoubet, 1836",
                                            source: "Source: Bibliothèque historique de la ville de paris"
                                        },
                                        {
                                            src: "/imagenes_extraidas_pdf/images/52.png",
                                            caption: "Parcel maps from the Vasserot and Bellanger Atlas (1830-1850)",
                                            source: "Source: Archives de Paris"
                                        },
                                        {
                                            src: "/imagenes_extraidas_pdf/images/53.png",
                                            caption: "Parcel maps from the Vasserot and Bellanger Atlas (1830-1850)",
                                            source: "Source: Archives de Paris"
                                        },
                                        {
                                            src: "/imagenes_extraidas_pdf/images/54.png",
                                            caption: "Final Result"
                                        },
                                        {
                                            src: "/imagenes_extraidas_pdf/images/anexo22.png",
                                            caption: "Additional Reconstitution View"
                                        }
                                    ].map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/50 bg-secondary/20">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.caption}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <p className="text-sm text-foreground font-medium">
                                                        {item.caption}
                                                    </p>
                                                    {item.source && (
                                                        <p className="text-xs text-muted-foreground italic mt-1">
                                                            {item.source}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mx-auto pt-8">
                            <p>
                                Utilisation of the detailed cadastral plans from between 1830 and 1850 and the Jacoubet atlas to obtain a 3D taking into account the building courtyards public passages.
                            </p>
                            <p>
                                Adjustments of scale were made and there isnt 100% correspondance because the Jacoubet atlas was simplified, and the width of streets were normalised.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Annex 3: Methodology & Limits */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-medium text-foreground border-b border-border/40 pb-4">
                        Annex 3: Methodology & limits
                    </h3>
                    <div className="text-muted-foreground">
                        <p>Methodological frameworks and research limitations.</p>
                        {/* Placeholder content - can be expanded later */}
                    </div>
                </div>

            </div>
        </section>
    );
}
