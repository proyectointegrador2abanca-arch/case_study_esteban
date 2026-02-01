"use client";

import Image from "next/image";

export function DetailedCaseStudySection() {
    return (
        <section className="bg-background py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="mb-24 text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        CASE STUDY
                    </span>
                    <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-5xl leading-tight">
                        History of Architecture and Heritage
                    </h2>
                    <div className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-6 text-center">
                        <p className="font-medium text-foreground">
                            How did the two major modernizations of central Paris around Les Halles, under Haussmann and during the late-modern period, differ in their impact on the surrounding urban fabric and public space? (1850 - 1990)
                        </p>
                        <p>
                            Both interventions were driven by the same ambitions of modernization, hygiene, and efficiency, yet with contrasting results. The Haussmannian project integrated the market within a coherent civic structure, while the late-modern reconstruction produced a fragmented infrastructure disconnected from its surroundings.
                        </p>
                    </div>
                </div>

                {/* Geographic Context */}
                <div className="mb-32 space-y-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-medium text-foreground">Geographic Context: The Heart of Paris</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                                <Image src="/imagenes_extraidas_pdf/img36.jpg" alt="Map Context" fill className="object-cover" />
                            </div>
                            <p className="text-xs text-muted-foreground text-center">France & Paris Context</p>
                        </div>
                        <div className="space-y-4">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                                <Image src="/imagenes_extraidas_pdf/img41.jpg" alt="Paris Les Halles" fill className="object-cover" />
                            </div>
                            <p className="text-xs text-muted-foreground text-center">Les Halles Location</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20 order-2 md:order-1">
                            <Image src="/imagenes_extraidas_pdf/img52.jpg" alt="Pompidou Centre" fill className="object-cover" />
                        </div>
                        <div className="space-y-4 order-1 md:order-2">
                            <p className="text-muted-foreground leading-relaxed">
                                The area is characterized by major landmarks like the <strong>Saint-Eustache church</strong> and the <strong>Pompidou Centre</strong> (1977), defining the cultural and urban fabric of the 1st arrondissement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chronology 1800-1850 */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            1800–1850: Before Modernization
                        </h3>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                            <li>Population boom leading to a hygiene crisis.</li>
                            <li>Characterized by medieval streets and vernacular housing.</li>
                            <li>First reconstruction plans were limited by cost.</li>
                        </ul>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                        <Image src="/imagenes_extraidas_pdf/img53.jpg" alt="Old Urban Fabric" fill className="object-cover" />
                    </div>
                </div>

                {/* Chronology 1851-1900 */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                        <Image src="/imagenes_extraidas_pdf/img58.jpg" alt="Creation of New Market" fill className="object-cover" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            1851–1900: Creation of the New Market
                        </h3>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                            <li><strong>1851</strong>: Victor Baltard commissioned.</li>
                            <li><strong>1853</strong>: Adoption of the Iron & Glass system (after stone was rejected).</li>
                            <li>Construction of 12 pavilions completed by the end of the 19th century.</li>
                        </ul>
                    </div>
                </div>

                {/* The 19th Century Halles */}
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-medium text-foreground mb-6">The 19th-Century Halles</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        A marvel of gas lighting, steel structure, and ventilation. Famously described by Émile Zola as <em>"Le Ventre de Paris"</em> (The Belly of Paris) in 1873.
                    </p>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-secondary/20 shadow-lg">
                        <Image src="/imagenes_extraidas_pdf/img62.jpg" alt="Monographie des Halles" fill className="object-cover" />
                    </div>
                </div>

                {/* Chronology 1900-1962 */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            1900–1962: Rise and Fall
                        </h3>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                            <li><strong>1857</strong>: Designed for 1 million inhabitants.</li>
                            <li><strong>1900</strong>: Population reached 2.6 million.</li>
                            <li><strong>1962</strong>: Decision made to move markets to Rungis due to congestion and hygiene.</li>
                        </ul>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                        <Image src="/imagenes_extraidas_pdf/img63.jpg" alt="Les Halles 1952" fill className="object-cover" />
                    </div>
                </div>

                {/* Chronology Demolition */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                        <Image src="/imagenes_extraidas_pdf/img64.jpg" alt="Demolition" fill className="object-cover" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            1971: Demolition
                        </h3>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                            <li><strong>1969</strong>: Rungis market completed.</li>
                            <li><strong>1971</strong>: Demolition of the Baltard pavilions begins.</li>
                            <li>Only <strong>Pavilion No. 8</strong> was saved and moved to Nogent-sur-Marne.</li>
                        </ul>
                        <div className="mt-6 relative aspect-video rounded-lg overflow-hidden bg-secondary/20">
                            <Image src="/imagenes_extraidas_pdf/img68.jpg" alt="Pavilion saved" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Chronology The Void */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            1971–1977: The Void
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            For years, the site remained an empty "hole" in the center of Paris.
                        </p>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                            <li><strong>1971–1977</strong>: Empty site ("Le Trou des Halles").</li>
                            <li><strong>1977</strong>: RER station opens.</li>
                        </ul>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                        <Image src="/imagenes_extraidas_pdf/img69.jpg" alt="The Void" fill className="object-cover" />
                    </div>
                </div>

                {/* Chronology The Forum */}
                <div className="mb-32 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary/20">
                        <Image src="/imagenes_extraidas_pdf/img71.jpg" alt="Forum des Halles" fill className="object-cover" />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h3 className="text-2xl font-medium text-foreground mb-4">
                            1977–1986: The Forum des Halles
                        </h3>
                        <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
                            <li><strong>1973</strong>: Vasconi & Pencréac’h project selected.</li>
                            <li><strong>1985</strong>: Forum completed (Chemetov).</li>
                            <li><strong>1986</strong>: Garden inaugurated.</li>
                        </ul>
                    </div>
                </div>

                {/* Research Question & Hypothesis */}
                <div className="mb-32 p-8 md:p-12 bg-secondary/10 rounded-3xl border border-border/50">
                    <h3 className="text-2xl font-medium text-foreground mb-6 text-center">Research Question</h3>
                    <p className="text-lg text-center text-foreground/90 italic mb-12 max-w-4xl mx-auto">
                        "How did the two major modernizations of central Paris around Les Halles, under Haussmann and during the late-modern period, differ in their impact on the surrounding urban fabric and public space?"
                    </p>

                    <h3 className="text-xl font-medium text-foreground mb-4 text-center">Hypothesis</h3>
                    <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                        Both interventions were driven by the same ambitions of modernization, hygiene, and efficiency, yet with contrasting results. The Haussmannian project integrated the market within a coherent civic structure, while the late-modern reconstruction produced a fragmented infrastructure disconnected from its surroundings.
                    </p>
                </div>

                {/* Findings & Conclusion */}
                <div className="mb-20 grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">Early Findings: Morphology & Typology</h3>
                        <ul className="space-y-4 text-muted-foreground leading-relaxed">
                            <li><strong>19th  Century:</strong> The biggest transformation. Medieval fabric was erased and replaced by a new regular grid (Rue Berger, Rue Baltard). Baltard created an open civic structure.</li>
                            <li><strong>1970s:</strong> The surface grid remained largely unchanged, but a vast underground world was added. The Forum became a closed, layered system.</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary/20">
                            <Image src="/imagenes_extraidas_pdf/img82.jpg" alt="Morphology Analysis" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary/20">
                            <Image src="/imagenes_extraidas_pdf/img88.jpg" alt="Typology Analysis" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-xl font-medium text-foreground mb-4">Next Steps: Methodology</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Focus on the whole neighbourhood. Use 3D to analyse surface + underground layers. Compare maps (1836–1990) in GIS. Study sample blocks around Saint-Eustache.
                    </p>
                </div>

            </div>
        </section>
    );
}
