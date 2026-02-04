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
                        Previous research
                    </h2>
                    <div className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto space-y-6 text-center">
                        <p className="font-medium text-foreground">
                            How did the two major modernizations of central Paris around Les Halles, under Haussmann and during the late-modern period, differ in their impact on the surrounding urban fabric and public space? (1850 - 1990)
                        </p>
                        <p>
                            Both interventions were driven by the same ambitions of modernization, hygiene, and efficiency, yet with contrasting results. The Haussmannian project integrated the market within a coherent civic structure, while the late-modern reconstruction produced a fragmented infrastructure disconnected from its surroundings.
                        </p>
                    </div>

                    {/* Canva Embed */}
                    <div className="mt-16 w-full max-w-5xl mx-auto">
                        <div
                            className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border"
                            style={{
                                paddingTop: '56.25%', // 16:9 Aspect Ratio
                            }}
                        >
                            <iframe
                                loading="lazy"
                                className="absolute top-0 left-0 w-full h-full border-none p-0 m-0"
                                src="https://www.canva.com/design/DAHABe_wVX8/EgDx5l7iNLJ3zWZcIXSwsQ/view?embed"
                                allowFullScreen
                                allow="fullscreen"
                                title="Canva Presentation"
                            ></iframe>
                        </div>
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                            <a
                                href="https://www.canva.com/design/DAHABe_wVX8/EgDx5l7iNLJ3zWZcIXSwsQ/view?utm_content=DAHABe_wVX8&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline opacity-50 hover:opacity-100 transition-opacity"
                            >
                                Open in Canva
                            </a>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}
