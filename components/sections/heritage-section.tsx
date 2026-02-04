"use client";

import Image from "next/image";

export function HeritageSection() {
    return (
        <section className="bg-background py-24 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-5xl space-y-16">

                {/* Main Header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground">
                        Criterion 4: Heritage perception, loss, & monumentality
                    </h2>
                </div>

                {/* Subsection 1 */}
                <div className="space-y-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            1. Saint-Eustache as constant
                        </p>
                        <div className="max-w-3xl mx-auto pt-4 text-muted-foreground leading-relaxed text-left space-y-2 pb-6">
                            <p>Saint-Eustache illustrates 19th-century heritage perception.</p>
                            <p>Following the French Revolution, monumental and exceptional buildings were identified as national heritage.</p>
                            <p>As a result, Saint-Eustache was preserved and restored throughout successive transformations of Les Halles.</p>
                            <p>Its continuity contrasts sharply with the surrounding fabric, highlighting how heritage protection was historically limited to monuments rather than ordinary urban structures.</p>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <Image
                            src="/imagenes_extraidas_pdf/images/41.png"
                            alt="Saint-Eustache as constant"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-contain"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-center">
                            <p className="text-sm font-medium text-muted-foreground">
                                St Eustache in 1850
                            </p>
                            <p className="text-sm font-medium text-muted-foreground">
                                St Eustache in 1904
                            </p>
                            <p className="text-sm font-medium text-muted-foreground">
                                St Eustache in 1986
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto pt-8">
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                                <li className="flex flex-col items-center text-center gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mb-1" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Monument protected as heritage</p>
                                </li>
                                <li className="flex flex-col items-center text-center gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mb-1" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Continuity through transformations</p>
                                </li>
                                <li className="flex flex-col items-center text-center gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mb-1" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Exception within changing fabric</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full mt-8">
                        <Image
                            src="/imagenes_extraidas_pdf/images/41 copy.png"
                            alt="Saint-Eustache comparison detailed view"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Subsection 2 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            2. Heritage selection & loss
                        </p>
                        <div className="max-w-3xl mx-auto pt-4 text-muted-foreground leading-relaxed text-left space-y-2 pb-6">
                            <p>During the Haussmannian period, criticism focused on cost, social displacement, and aesthetics, but rarely on heritage loss.</p>
                            <p>Ordinary buildings and markets were not considered worthy of preservation.</p>
                            <p>By the 1970s, heritage discourse had expanded to include everyday architecture and urban memory.</p>
                            <p>Despite strong opposition to the demolition of Les Halles, economic and infrastructural priorities ultimately prevailed.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border/50">
                            <Image
                                src="/imagenes_extraidas_pdf/img129.jpg"
                                alt="Heritage Vision 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border/50">
                            <Image
                                src="/imagenes_extraidas_pdf/img210.jpg"
                                alt="Heritage Vision 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                        Demolition of Les Halles and repercussion compared to the one during Haussmann. Different visions of heritage.
                    </p>
                </div>

                {/* Subsection 3 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            3. Changes born from indifference causing similar outrages
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/50">
                            <Image
                                src="/imagenes_extraidas_pdf/img214.jpg"
                                alt="Romanticism / Victor Hugo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border/50">
                            <Image
                                src="/imagenes_extraidas_pdf/img215.jpg"
                                alt="Change of direction"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                        Parallel between Victor Hugo and Romanticism and the change of direction for heritage after the demolition of Les Halles.
                    </p>
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
                            Heritage is not an intrinsic quality but the result of cultural and historical selection.
                        </p>
                        <p>
                            While awareness of urban heritage increased over time, both transformations demonstrate that heritage concerns remain secondary when confronted with economic interests and large-scale urban projects.
                        </p>
                        <p>
                            Protests and counterproposals remained ineffective when they failed to align with institutional priorities, which privileged administrative efficiency and economic value over heritage preservation.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
