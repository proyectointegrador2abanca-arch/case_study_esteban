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
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
                        <div className="max-w-4xl mx-auto pt-8">
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Increasing control over urban form</p>
                                </li>
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Reduced adaptability of blocks</p>
                                </li>
                                <li className="flex items-start text-left gap-3">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <p className="text-base text-muted-foreground font-medium leading-snug">Decline of everyday urban richness</p>
                                </li>
                            </ul>
                        </div>
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



                    <div className="overflow-x-auto rounded-xl border border-border/50 bg-card/30">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="border-b border-border/50 bg-secondary/10">
                                    <th className="p-6 w-24"></th>
                                    <th className="p-6 text-base font-semibold text-foreground w-[45%]">
                                        19th century / Haussmann demolition of old Paris and construction of the Halles Baltard
                                    </th>
                                    <th className="p-6 text-base font-semibold text-foreground w-[45%]">
                                        Late modern period / Demolition of the Halles and Forum
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/20">
                                <tr>
                                    <td className="p-6 font-semibold text-foreground align-top bg-secondary/5">Against</td>
                                    <td className="p-6 align-top space-y-4">
                                        <ul className="space-y-2 text-muted-foreground list-disc pl-4 marker:text-primary/50">
                                            <li>Social displacement and gentrification</li>
                                            <li>Exorbitant public cost and debt</li>
                                            <li>Authoritarian planning, lack of democratic control</li>
                                            <li>No critic of loss of heritage concerning the old Paris</li>
                                        </ul>
                                        <div className="pt-4">
                                            <div className="relative aspect-[3/4] w-32 rounded overflow-hidden border border-border/50 mb-2">
                                                <Image
                                                    src="/imagenes_extraidas_pdf/images/libro1.png"
                                                    alt="Les Comptes fantastiques d’Haussmann"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <p className="text-xs text-muted-foreground italic font-medium">Image: Jules Ferry, Les Comptes fantastiques d’Haussmann, 1868</p>
                                        </div>
                                    </td>
                                    <td className="p-6 align-top space-y-4">
                                        <ul className="space-y-2 text-muted-foreground list-disc pl-4 marker:text-primary/50">
                                            <li>Loss of an iconic modern heritage (Baltard)</li>
                                            <li>Destruction of everyday urban memory</li>
                                            <li>Rejection by citizens, architects, and intellectuals</li>
                                        </ul>
                                        <blockquote className="bg-secondary/10 p-4 rounded-lg border-l-2 border-primary text-xs italic text-muted-foreground my-4">
                                            “We spend a lot of money unnecessarily on certain things, but we can certainly spend it on those things that will be something for our children in the future.”
                                            <span className="block mt-2 not-italic font-medium">- Resident interviewed about the fate of Les Halles</span>
                                        </blockquote>
                                        <div className="relative aspect-[3/4] w-32 rounded overflow-hidden border border-border/50 mb-2">
                                            <Image
                                                src="/imagenes_extraidas_pdf/images/lirbo2.png"
                                                alt="L’Observateur cover"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground italic font-medium">Image: Cover page of L’Observateur (12 July 1971)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-6 font-semibold text-foreground align-top bg-secondary/5">For</td>
                                    <td className="p-6 align-top space-y-4">
                                        <ul className="space-y-2 text-muted-foreground list-disc pl-4 marker:text-primary/50">
                                            <li>Hygiene, circulation, and public health</li>
                                            <li>Modernization of the capital</li>
                                            <li>Architectural innovation (iron, glass, infrastructure)</li>
                                        </ul>
                                        <div className="relative aspect-[3/4] w-32 rounded overflow-hidden border border-border/50 mb-2 mt-4">
                                            <Image
                                                src="/imagenes_extraidas_pdf/images/libro3.png"
                                                alt="Mémoire du baron Haussmann"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground italic font-medium">Image: Mémoire du baron Haussmann, 1890-1893</p>
                                    </td>
                                    <td className="p-6 align-top space-y-4">
                                        <ul className="space-y-2 text-muted-foreground list-disc pl-4 marker:text-primary/50">
                                            <li>Functional obsolescence of the markets</li>
                                            <li>Need for metropolitan transport infrastructure</li>
                                            <li>Economic redevelopment of the city center</li>
                                        </ul>
                                        <div className="relative aspect-[3/4] w-32 rounded overflow-hidden border border-border/50 mb-2 mt-4">
                                            <Image
                                                src="/imagenes_extraidas_pdf/images/libro4.png"
                                                alt="APUR Les Halles"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground italic font-medium">Image: APUR, Les Halles: Urbanisme ou Muséographie, 1971</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Subsection 3 */}
                <div className="space-y-8 pt-8 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            3. Changes born from indifference causing similar outrages
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        <div className="space-y-3">
                            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/caputra1.png"
                                    alt="Heritage impact 1"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-xs text-center text-muted-foreground italic">
                                Jacques Chirac, Mayor of Paris, presents the new model of the project in 1980.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/captura22.png"
                                    alt="Heritage impact 2"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-xs text-center text-muted-foreground italic">
                                Example of a counter-proposal to the 1979 international competition to fill the Void
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-border/50 bg-secondary/5">
                                <Image
                                    src="/imagenes_extraidas_pdf/images/captura33.png"
                                    alt="Heritage impact 3"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto pt-8">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                            <li className="flex flex-col items-center text-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mb-1" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Heritage is historically constructed</p>
                            </li>
                            <li className="flex flex-col items-center text-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mb-1" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Economic priorities dominate decisions</p>
                            </li>
                            <li className="flex flex-col items-center text-center gap-3">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mb-1" />
                                <p className="text-base text-muted-foreground font-medium leading-snug">Loss acknowledged but accepted</p>
                            </li>
                        </ul>
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
