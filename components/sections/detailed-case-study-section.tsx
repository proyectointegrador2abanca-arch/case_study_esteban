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
                </div>



            </div>
        </section>
    );
}
