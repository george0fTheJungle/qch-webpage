"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "About", "Portfolio", "Contact"];

export default function Nav({ basePath = "" }: { basePath?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const href = (label: string) =>
    basePath ? `/${basePath === "/" ? "" : basePath}#${label.toLowerCase()}` : `#${label.toLowerCase()}`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md py-3.5 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href={basePath ? "/" : "#home"} className="font-display text-[1.4rem] tracking-[0.1em] text-white">
          QCH
        </a>

        {/* desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((t) => (
            <a
              key={t}
              href={href(t)}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/65 transition-colors duration-300 hover:text-brass-light"
            >
              {t}
            </a>
          ))}
        </div>

        {/* hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="-mr-2 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 bg-charcoal/98 px-6 py-8 backdrop-blur-md">
          {NAV_ITEMS.map((t) => (
            <a
              key={t}
              href={href(t)}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-brass-light"
            >
              {t}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
