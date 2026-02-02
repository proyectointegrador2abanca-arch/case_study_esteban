"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : "none"
      }}
    >
      <div className="flex items-center justify-center transition-all duration-300 px-2 py-3 relative">
        {/* Logo */}
        <Link href="#" className="absolute left-6 flex items-center transition-opacity hover:opacity-80">
          <Image
            src="/images/70032.png"
            alt="Logo"
            width={100}
            height={40}
            className={`object-contain h-10 w-auto transition-all duration-300 ${isScrolled ? "brightness-0" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#research"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Research
          </Link>
          <Link
            href="#architectural-timeline"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Timeline
          </Link>
          <Link
            href="#previous-research"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Previous Research
          </Link>
          <Link
            href="#sources"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Sources
          </Link>
          <Link
            href="#abstract"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Abstract
          </Link>
          <Link
            href="#history"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            History
          </Link>
          <Link
            href="#interviews"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Interviews
          </Link>
          <Link
            href="#credits"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Credits
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`absolute right-6 transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-8 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="#abstract"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Abstract
            </Link>
            <Link
              href="#timeline"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="#history"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            <Link
              href="#interviews"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Interviews
            </Link>
            <Link
              href="#credits"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Credits
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
