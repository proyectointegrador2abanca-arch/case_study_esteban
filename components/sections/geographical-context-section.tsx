"use client";

import Image from "next/image";

export function GeographicalContextSection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-20">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
                        Geographical Context
                    </h2>
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        History of Architecture and Heritage
                    </p>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image 1 */}
                    <div className="space-y-4 group">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                                src="/imagenes_extraidas_pdf/img40.jpg"
                                alt="France Context"
                                fill
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <p className="text-center text-sm text-muted-foreground tracking-wide">
                            France Context
                        </p>
                    </div>

                    {/* Image 2 */}
                    <div className="space-y-4 group">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                                src="/imagenes_extraidas_pdf/img41.jpg"
                                alt="Paris Les Halles Context"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <p className="text-center text-sm text-muted-foreground tracking-wide">
                            Paris Les Halles Context
                        </p>
                    </div>
                </div>

                {/* Large Context Image */}
                <div className="mt-12 space-y-4 group">
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/imagenes_extraidas_pdf/imagenes_2_diapo/context_3.png"
                            alt="Detailed Geographical Context"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
