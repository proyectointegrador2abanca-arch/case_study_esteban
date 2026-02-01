"use client";

export function CanvaEmbedSection() {
    return (
        <section className="relative w-full bg-background py-10 px-6 md:px-12 lg:px-20">
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
        </section>
    );
}
