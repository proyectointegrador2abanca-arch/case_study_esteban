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

                {/* Subsection 1: Parcel structure */}
                <div className="space-y-6">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            1. Parcel structure
                        </p>
                        <div className="max-w-3xl mx-auto pt-4 text-muted-foreground leading-relaxed text-left space-y-2 pb-6">
                            <p>The Haussmannian transformation profoundly altered parcel structure.</p>
                            <p>Small, narrow medieval plots were merged into larger parcels, allowing wider façades and more regular courtyards.</p>
                            <p>This rationalization supported new housing standards and marked an early phase of social and spatial gentrification.</p>
                            <p>During the Forum redevelopment, parcel structure changed only locally, but where intervention occurred, entire blocks were unified into single large developments.</p>
                            <p>As parcels grow larger, the diversity of uses per square meter decreases, favoring mono-functional developments.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
                        {/* Pair 1: img183 / img184 */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 shadow-sm group bg-muted">
                            {/* Default: img183 (Before) */}
                            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/img183.jpg"
                                    alt="Parcel Structure View 1A"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                        Before
                                    </span>
                                </div>
                            </div>
                            {/* Hover: img184 (After) */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/img184.jpg"
                                    alt="Parcel Structure View 1B"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                        After
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Pair 2: img187 / img188 */}
                        {/* Pair 2: img187 / img188 */}
                        <div className="space-y-2">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 shadow-sm group bg-muted">
                                {/* Default: img187 (Before) */}
                                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/img187.jpg"
                                        alt="Parcel Structure View 2A"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-6 left-6">
                                        <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                            Before
                                        </span>
                                    </div>
                                </div>
                                {/* Hover: img188 (After) */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/img188.jpg"
                                        alt="Parcel Structure View 2B"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-6 left-6">
                                        <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                            After
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-center text-muted-foreground italic leading-tight px-4">
                                Rue des Prouvaires. View taken from rue de Roule and looking north, 1865 (source: BHDV, anct bibliothèque de la préfecture de la Seine)
                            </p>
                        </div>

                        {/* Pair 3: img186 / img185 (Swapped: 186 is now Default/Before) */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 shadow-sm group bg-muted">
                            {/* Default: img186 (Before) */}
                            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/img186.jpg"
                                    alt="Parcel Structure View 3A"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                        Before
                                    </span>
                                </div>
                            </div>
                            {/* Hover: img185 (After) */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/img185.jpg"
                                    alt="Parcel Structure View 3B"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                        After
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Pair 4: img189 / img190 */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/50 shadow-sm group bg-muted">
                            {/* Default: img189 (Before) */}
                            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/img189.jpg"
                                    alt="Parcel Structure View 4A"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                        Before
                                    </span>
                                </div>
                            </div>
                            {/* Hover: img190 (After) */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/imagenes_extraidas_pdf/imagenes_2_diapo/img190.jpg"
                                    alt="Parcel Structure View 4B"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-6 left-6">
                                    <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                                        After
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                        Hover over the images to compare
                    </p>
                    <div className="max-w-4xl mx-auto pt-8">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Small plots merged into larger parcels</p>
                            </li>
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Façades widen, uses become fewer</p>
                            </li>
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Progressive loss of functional diversity</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Subsection 2: Block typology */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Block typology & inner space
                        </p>
                        <div className="max-w-3xl mx-auto pt-4 text-muted-foreground leading-relaxed text-left space-y-2 pb-6">
                            <p>Haussmannian blocks replaced a dense network of small courtyards and passageways with fewer, larger, and more hierarchical inner spaces.</p>
                            <p>Block porosity decreased, but buildings maintained a strong relationship with the street.</p>
                            <p>In the late-modern period, blocks linked to the Forum were redeveloped as massive units, with internal spaces fully detached from public streets and largely inaccessible.</p>
                            <p>This evolution produces more regular but less adaptable urban forms.</p>
                        </div>
                        {/* Duplicate block removed */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Comparison 1: 35 vs 36 */}
                        <div className="space-y-2">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl group">
                                {/* Default: 35 (Before/Base) */}
                                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/images/35.png"
                                        alt="Block Typology View 1 Base"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Hover: 36 (After/Overlay) */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/imagenes_extraidas_pdf/images/36.png"
                                        alt="Block Typology View 1 Overlay"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-center text-xs text-muted-foreground">
                                Hover to compare
                            </p>
                        </div>

                        {/* Comparison 2: 37 vs 38 */}
                        <div className="space-y-2">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl group">
                                {/* Default: 37 (Before/Base) */}
                                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/images/37.png"
                                        alt="Block Typology View 2 Base"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Hover: 38 (After/Overlay) */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/imagenes_extraidas_pdf/images/38.png"
                                        alt="Block Typology View 2 Overlay"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <p className="text-center text-xs text-muted-foreground">
                                Hover to compare
                            </p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto pt-8">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Height remains the same</p>
                            </li>
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Fewer courtyards, less porosity</p>
                            </li>
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Haussmann blocks still face the street</p>
                            </li>
                            <li className="flex items-start text-left gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Forum blocks turn inward</p>
                            </li>
                        </ul>
                    </div>
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

                {/* Subsection 4: Findings */}
                <div className="space-y-6 pt-12 border-t border-border/40">
                    <div className="text-center space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            4. Findings
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Over time, increasing parcel size and block unification reduced the diversity and permeability of the urban fabric.
                        </p>
                        <p>
                            While Haussmann rationalized blocks without severing street relations, the Forum accelerated separation between buildings and public space, reinforcing institutional and commercial control over formerly mixed and accessible urban environments, even if its on a limited scale here.
                        </p>
                        <p>
                            Urban form becomes more predictable, but also less resilient and less socially rich.
                        </p>

                        <div className="pt-8 space-y-6">
                            <h3 className="text-xl font-medium text-foreground">
                                Loss of neighborhood-scale structure
                            </h3>
                            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-sm group cursor-pointer max-w-4xl mx-auto">
                                {/* Base Image: first.png */}
                                <div className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-10">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/first.png"
                                        alt="Haussmann reinforces urban continuity"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                                            Haussmann reinforces urban continuity
                                        </span>
                                    </div>
                                </div>
                                {/* Hover Image: second.png */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/imagenes_extraidas_pdf/imagenes_2_diapo/second.png"
                                        alt="Forum becomes an isolated object"
                                        fill
                                        className="object-contain"
                                    />
                                    <div className="absolute bottom-4 left-0 right-0 text-center">
                                        <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                                            Forum becomes an isolated object
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
