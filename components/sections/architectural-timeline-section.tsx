"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineState {
  year: number;
  image: string;
  caption: string;
  description: string;
}

const timelineStates: TimelineState[] = [
  {
    year: 1850,
    image: "/axonometrias/axonometria0.png",
    caption: "Before Baltard",
    description:
      "Les Halles were still a chaotic cluster of small open-air markets surrounded by medieval streets. Population growth and public hygiene were major concerns. The city’s authorities began planning a complete reconstruction of the market district. Early attempts failed for financial reasons, but the idea of transforming the area into a more rational, accessible market space was already taking shape. Only minor change occurred between 1800 and 1850, with no money to expropriate the inhabitants of this old neighborhood.",
  },
  {
    year: 1855,
    image: "/axonometrias/axonometria 1.png",
    caption: "The Haussmannian transformation",
    description:
      "In 1851, Victor Baltard was commissioned by Napoleon III to rebuild the market. His first heavy stone pavilion was rejected, and replaced by a revolutionary system of iron and glass, inspired by Paxton’s Crystal Palace and his competitors’ projects. Twelve pavilions were constructed progressively until the end of the century and into the next, until the end of the Second World War, mainly because of chronic lacks of fund, while surrounding streets were straightened or created to integrate them within Haussmann’s new grid.",
  },
  {
    year: 1870,
    image: "/axonometrias/axonometria2.png",
    caption: "The 19th-century Halles",
    description:
      "The pavilions were among the first in Paris to use both steel-framed roofs and façades. They offered light, ventilation, and easy circulation. Its design follows the function but pastiches from roman, gothic and renaissance could be seen. Writers like Émile Zola described it as “the belly of Paris,” an architectural symbol of the modern city. At that time, modernization was associated with progress, not destruction. The old fabric was replaced almost without regret; the critics were positives about the change.",
  },
  {
    year: 1962,
    image: "/axonometrias/axonometria3.png",
    caption: "From prosperity to obsolescence",
    description:
      "The Halles were designed for one million inhabitants in 1857, but by 1900 Paris already had 2.6 million. The markets became overcrowded, and hygiene standards no longer met the needs of a growing city. In 1962, the city decided to relocate all wholesale trade to Rungis, in a new large-scale logistical complex. This marked beginning of the end of Les Halles as the food centre of Paris and of an uncertain future for the neighbourhood.",
  },
  {
    year: 1971,
    image: "/axonometrias/axonometria4.png",
    caption: "Demolition",
    description:
      "Designed for one million inhabitants in 1857, Les Halles rapidly became obsolete as Paris grew to 2.6 million by 1900. Overcrowding and outdated hygiene standards made the markets unsuitable for a modern metropolis. In 1962, the decision was taken to relocate wholesale trade to Rungis, completed in 1969. Despite strong opposition from citizens, architects, and intellectuals, the demolition of the pavilions began in 1971. Only one pavilion was preserved and relocated to Nogent-sur-Marne, while the rest of the site was cleared, leaving a vast void in the centre of Paris.",
  },
  {
    year: 1975,
    image: "/axonometrias/axonometria5.png",
    caption: "The Void",
    description:
      "The destruction created, “the hole of Les Halles.” Beneath this void, the new underground train station for the RER network was being built, opening in 1977. On the surface, nothing remained. The debate over what to build next divided architects, politicians, and citizens for years.",
  },
  {
    year: 1980,
    image: "/axonometrias/axonometria6.png",
    caption: "Construction of the Forum des Halles",
    description:
      "In 1973, the project by architects Claude Vasconi and Georges Pencréac’h was selected, later completed by Paul Chemetov. The new complex buried most of its program underground: shops, cinema, and transport, while the surface was turned into a garden. The Forum des Halles became one of the most frequented spaces in Paris. Renovation and rehabilitation were done around Les Halles, leading to an unprecedented gentrification.",
  },
  {
    year: 2010,
    image: "/axonometrias/axonometria7.png",
    caption: "The Canopée des Halles",
    description:
      "By the early 2000s, the Forum des Halles was considered obsolete, criticized for its lack of clarity, poor lighting, and weak relationship with the city above. The garden and the underground commercial spaces no longer responded to contemporary urban expectations. In 2004, the City of Paris launched an international competition to redesign the site. The project by Patrick Berger and Jacques Anziutti was selected, proposing a large glass and steel roof called La Canopée to cover the central void of the Forum. Construction began in 2010. The Canopée was inaugurated in 2016, bringing natural light back to the underground spaces and redefining Les Halles as a central metropolitan hub rather than a market.",
  },
];

export function ArchitecturalTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= timelineStates.length || isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const goNext = useCallback(() => {
    goToIndex(Math.min(activeIndex + 1, timelineStates.length - 1));
  }, [activeIndex, goToIndex]);

  const goPrev = useCallback(() => {
    goToIndex(Math.max(activeIndex - 1, 0));
  }, [activeIndex, goToIndex]);

  // Handle wheel scrolling
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollThreshold = 600; // ms between scroll events

    const handleWheel = (e: WheelEvent) => {
      const section = document.getElementById("architectural-timeline");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!isInView) return;

      const now = Date.now();
      if (now - lastScrollTime < scrollThreshold) return;

      // Check if we should let the page scroll
      if (e.deltaY > 0 && activeIndex === timelineStates.length - 1) return;
      if (e.deltaY < 0 && activeIndex === 0) return;

      e.preventDefault();
      lastScrollTime = now;

      if (e.deltaY > 0) {
        goNext();
      } else if (e.deltaY < 0) {
        goPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, goNext, goPrev]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const currentState = timelineStates[activeIndex];

  return (
    <section
      id="architectural-timeline"
      className="relative h-screen w-full bg-background overflow-hidden"
    >
      <div className="h-full flex flex-col lg:flex-row">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-8 lg:py-0 lg:w-[35%] order-2 lg:order-1">
          {/* Caption and Description */}
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
              {currentState.year}
            </p>
            <h3
              className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-3 transition-opacity duration-300"
              key={`title-${activeIndex}`}
            >
              {currentState.caption}
            </h3>
            <p
              className="text-sm text-muted-foreground leading-relaxed transition-opacity duration-300"
              key={`desc-${activeIndex}`}
            >
              {currentState.description}
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Prev Arrow */}
            <button
              onClick={goPrev}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-full border border-border hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="Previous era"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>

            {/* Year Markers */}
            <div className="flex items-center gap-1 flex-wrap flex-1 min-w-0">
              {timelineStates.map((state, index) => (
                <button
                  key={state.year}
                  onClick={() => goToIndex(index)}
                  className={`relative px-1.5 py-1 md:px-2 text-xs font-medium transition-all duration-300 whitespace-nowrap ${index === activeIndex
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                  aria-label={`Go to year ${state.year}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                >
                  {state.year}
                  {index === activeIndex && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
                  )}
                </button>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={goNext}
              disabled={activeIndex === timelineStates.length - 1}
              className="p-1.5 rounded-full border border-border hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="Next era"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 h-px bg-border w-full max-w-xs">
            <div
              className="h-full bg-foreground transition-all duration-500 ease-out"
              style={{
                width: `${((activeIndex + 1) / timelineStates.length) * 100}%`,
              }}
            />
          </div>

          {/* Scroll Hint */}
          <p className="mt-3 text-[10px] text-muted-foreground">
            Scroll or use arrows to navigate through time
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative lg:w-[65%] h-[50vh] lg:h-full order-1 lg:order-2">
          {timelineStates.map((state, index) => (
            <div
              key={state.year}
              className="absolute inset-4 md:inset-12 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                zIndex: index === activeIndex ? 10 : 0,
                transitionDelay: index === activeIndex ? "0ms" : "1000ms",
              }}
            >
              <Image
                src={state.image || "/placeholder.svg"}
                alt={`City in ${state.year}`}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
