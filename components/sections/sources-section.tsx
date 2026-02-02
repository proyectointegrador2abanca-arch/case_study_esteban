"use client";

import { useEffect, useRef, useState } from "react";

const sourcesData = [
    {
        category: "Books",
        items: [
            "APUR. Paris Projet n°25–26: Les Halles et le centre de Paris. Paris: Atelier Parisien d’Urbanisme, 1985.",
            "Baltard, Victor. Monographie des Halles centrales de Paris. Paris: Typographie Impériale, 1863–1872.",
            "Lombard-Jourdan, Anne. Les Halles de Paris et leur quartier (1137–1969). Paris: Publications de l’École nationale des chartes, 2009.",
            "Mead, Christopher Curtis. Making Modern Paris: Victor Baltard’s Central Markets and the Urban Practice of Architecture. University Park: Pennsylvania State University Press, 2012.",
            "Zetter, Roger. “Les Halles: A Case Study of Large-Scale Redevelopment in Central Paris.” Town Planning Review 46, no. 3 (July 1975): 303–322.",
            "Zola, Émile. Le Ventre de Paris. Paris: Charpentier, 1873.",
        ],
    },
    {
        category: "Oral and Media Sources",
        items: [
            "Institut National de l’Audiovisuel (INA). 1969: Les Halles, mémoires du ventre de Paris. Television documentary, France, 1969.",
            "Chemetov, Paul. “Le Forum des Halles, une reconstruction nécessaire.” Interview by INA, 1985.",
        ],
    },
    {
        category: "Visual sources",
        items: [
            "Archives de la Ville de Paris. Photographies aériennes des Halles, 1971–1985. Paris: Archives de Paris.",
            "Bibliothèque Historique de la Ville de Paris (BHDV). Photographies du quartier des Halles. Paris.",
            "Gallica. Bibliothèque nationale de France – Fonds iconographique Les Halles. https://gallica.bnf.fr",
        ],
    },
    {
        category: "Cartographic Sources",
        items: [
            "Archives de Paris. Plan parcellaire de Paris, 1836. Paris: Archives de Paris.",
            "Archives de Paris. Plan parcellaire de Paris, 1904. Paris: Archives de Paris.",
            "Gallica. Plans de Paris (XVIIIe–XXe siècle). Bibliothèque nationale de France. https://gallica.bnf.fr",
            "Institut Géographique National (IGN). Orthophotos de Paris: 1950–1971–1990. Remonter le temps. https://remonterletemps.ign.fr",
        ],
    },
];

export function SourcesSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="sources" ref={sectionRef} className="bg-background py-20 px-6 md:px-12 lg:px-20 border-t border-border/40">
            <div className="mx-auto max-w-5xl">
                <h2
                    className={`text-3xl font-medium tracking-tight text-foreground mb-12 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    Sources
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {sourcesData.map((category, catIndex) => (
                        <div
                            key={category.category}
                            className={`transition-all duration-1000 ease-out`}
                            style={{
                                transitionDelay: `${catIndex * 200}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateY(0)" : "translateY(20px)"
                            }}
                        >
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
                                {category.category}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="text-xs md:text-sm text-muted-foreground leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
