"use client";

import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="bg-background" id="credits">
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Project Info */}
          <div className="max-w-md">
            <h3 className="text-lg font-medium text-foreground mb-4">
              CASE STUDY: History of Architecture and Heritage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Transformation of Central Paris around Les Halles: from Haussmann’s modernization to the late-modern renewal (1850–1990)
            </p>
            <p className="mt-2 text-muted-foreground text-sm">
              Loss of Heritage because of fast urbanisation
            </p>
          </div>

          {/* Credits */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Professor
              </h4>
              <p className="text-foreground font-medium">
                Rosa Rita Maria Tamborrino
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Students
              </h4>
              <ul className="space-y-1 text-foreground font-medium">
                <li>Esteban Calviño Rosales</li>
                <li>Vincent Guely</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Politecnico di Torino. All rights reserved.</p>
          <p>Academic Project</p>
        </div>
      </div>
    </footer>
  );
}
