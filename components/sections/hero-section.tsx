"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";



const sideImages = [
  {
    src: "/imagenes_extraidas_pdf/img40.jpg",
    alt: "Louvre Museum Paris",
    position: "left",
    span: 1,
  },
  {
    src: "/imagenes_extraidas_pdf/img41.jpg",
    alt: "Sacre Coeur Montmartre",
    position: "left",
    span: 1,
  },
  {
    src: "/imagenes_extraidas_pdf/img57.jpg",
    alt: "Notre Dame Cathedral",
    position: "right",
    span: 1,
  },
  {
    src: "/imagenes_extraidas_pdf/img63.jpg",
    alt: "Paris Opera House",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));

  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));

  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58); // 100% to 42%
  const centerHeight = 100 - (imageProgress * 30); // 100% to 70%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  // Vertical offset for side columns to move them up on mobile
  const sideTranslateY = -(imageProgress * 5); // Reduced from 15 to 5 to prevent cropping

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${60 + (imageProgress * 40)}px` }}
          >

            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/imagenes_extraidas_pdf/img53.jpg"
                alt="Main Hero Image"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Text - Fades out first */}
              <div
                className="absolute inset-0 flex items-end overflow-hidden"
                style={{ opacity: textOpacity }}
              >
                <div className="flex flex-col items-center justify-end w-full pb-10">
                  <span className="text-black/80 text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase mb-4 animate-[slideUp_0.8s_ease-out_forwards]">
                    History of Architecture and Heritage
                  </span>
                  <h1 className="w-full text-[15vw] font-medium leading-[0.8] tracking-tighter text-black text-center">
                    {"CASE STUDY".split("").map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                        style={{
                          animationDelay: `${index * 0.08}s`,
                          transition: 'all 1.5s',
                          transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </h1>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden will-change-transform"
                  style={{
                    flex: img.span,
                    borderRadius: `${borderRadius}px`,
                  }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll space to enable animation */}
      <div className="h-[200vh]" />

    </section>
  );
}
