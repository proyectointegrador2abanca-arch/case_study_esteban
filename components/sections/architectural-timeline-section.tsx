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
    year: 1900,
    image: "/axonometrias/axonometria0.png",
    caption: "The Industrial Dawn",
    description:
      "Low-rise brick buildings define the urban landscape. Horse-drawn carriages navigate cobblestone streets beneath gas lamps. The city breathes with craft workshops and local commerce.",
  },
  {
    year: 1930,
    image: "/axonometrias/axonometria 1.png",
    caption: "Art Deco Ascendance",
    description:
      "Geometric facades rise skyward as Art Deco transforms the skyline. Automobiles replace horses, and electric lights illuminate ambitious new towers of commerce and culture.",
  },
  {
    year: 1960,
    image: "/axonometrias/axonometria2.png",
    caption: "Modernist Vision",
    description:
      "Glass and steel define the new urban ethos. Parking structures sprawl as the automobile reshapes daily life. International Style buildings proclaim progress through minimalism.",
  },
  {
    year: 1970,
    image: "/axonometrias/axonometria4.png",
    caption: "Urban Renewal",
    description:
      "Large-scale demolitions reshape the city center. Infrastructure projects prioritize mobility and efficiency. The tension between preservation and progress intensifies.",
  },
  {
    year: 1980,
    image: "/axonometrias/axonometria5.png",
    caption: "Underground Networks",
    description:
      "Subterranean infrastructure expands beneath historic streets. Shopping centers and transit hubs create new urban layers. The city grows vertically in both directions.",
  },
  {
    year: 1990,
    image: "/axonometrias/axonometria3.png",
    caption: "Postmodern Complexity",
    description:
      "Historical references return in playful forms. Mixed-use developments blur boundaries between living and working. Transit systems reconnect fragmented urban fabric.",
  },
  {
    year: 2000,
    image: "/axonometrias/axonometria6.png",
    caption: "Millennium Transformation",
    description:
      "Digital infrastructure integrates with physical space. Public realm improvements prioritize pedestrians. Contemporary architecture dialogues with historic context.",
  },
  {
    year: 2010,
    image: "/axonometrias/axonometria7.png",
    caption: "Sustainable Integration",
    description:
      "Green spaces begin to weave into the urban fabric. Energy efficiency becomes a priority in new constructions. The city adapts to modern ecological standards.",
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
