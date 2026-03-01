"use client";

import { useEffect, useState } from "react";

/* ── data ── */

const NAV = ["Home", "About", "Portfolio", "Contact"];

/*
 * IMAGE ADJUSTMENT GUIDE
 * ──────────────────────
 *   x:      horizontal position — "50%" is centered, "0%" is left, "100%" is right
 *   y:      vertical position   — "50%" is centered, "0%" is top,  "100%" is bottom
 *   rotate: rotation in degrees — positive = clockwise, negative = counter-clockwise
 *   scale:  zoom level          — 1 = original, 1.2 = 20% zoomed in, etc.
 *
 *   Tweak these values, save, and the dev server will hot-reload instantly.
 */

const HERO_IMG = { x: "50%", y: "50%", rotate: 0, scale: 1.03 };

const ABOUT_IMG = { x: "50%", y: "50%", rotate: 0, scale: 1 };

const PORTFOLIO = [
  { src: "/images/20220124_152656.jpg",                             label: "Gourmet Kitchen",    cls: "lg:col-span-2 lg:row-span-2", x: "50%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/3617%20Chain%20Bridge%20-%20Front%20-%20Left.jpg", label: "Custom Exterior",    cls: "",                            x: "50%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/20230908_123537.jpg",                             label: "Luxury Master Bath",  cls: "",                            x: "50%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/20210818_194234.jpg",                             label: "Kitchen Detail",      cls: "",                            x: "50%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/20230912_092639.jpg",                             label: "Grand Living Room",   cls: "",                            x: "50%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/Front%20Door%20from%20Inside%202.jpeg",           label: "Grand Foyer",         cls: "lg:row-span-2",               x: "56%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/foyer%20right.jpeg",                              label: "Ornate Staircase",    cls: "",                            x: "50%", y: "50%", rotate: 0, scale: 1 },
  { src: "/images/20230915_085213.jpg",                             label: "Chef\u2019s Kitchen", cls: "",                            x: "50%", y: "50%", rotate: 2, scale: 1.2 },
];

const PILLARS = [
  { n: "01", title: "30+ Years of Expertise",    body: "Three decades of craftsmanship and deep knowledge of luxury residential construction." },
  { n: "02", title: "Built on Your Lot",         body: "We build custom homes on your chosen property, giving you complete control over location." },
  { n: "03", title: "Architectural Excellence",  body: "Every home is a unique masterpiece designed to reflect your vision and lifestyle." },
  { n: "04", title: "Premium Craftsmanship",     body: "Only the finest materials and meticulous attention to detail in every element." },
];

/* ── component ── */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* nav background on scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* intersection-observer reveals */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════ NAV ═══════════════════ */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md py-3.5 shadow-lg shadow-black/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#home" className="font-display text-[1.4rem] tracking-[0.1em] text-white">
            QCH
          </a>

          {/* desktop */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV.map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
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
            {NAV.map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-brass-light"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section id="home" className="relative h-screen overflow-hidden">
        <img
          src="/images/Foyer_edited_edited.png"
          alt="Grand foyer with dual staircases and ornate ironwork doors"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.28]"
          style={{ objectPosition: `${HERO_IMG.x} ${HERO_IMG.y}`, transform: `rotate(${HERO_IMG.rotate}deg) scale(${HERO_IMG.scale})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-black/60" />

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="hero-in mb-8 h-px w-12 bg-brass" />

          <p className="hero-in-d1 mb-5 text-[11px] font-semibold uppercase tracking-[0.38em] text-brass-light md:text-xs">
            Northern Virginia&apos;s Premier Builder
          </p>

          <h1 className="hero-in-d2 font-display max-w-5xl text-[2.6rem] font-normal leading-[1.08] md:text-7xl lg:text-[5.5rem]">
            Crafting Luxury,
            <br />
            One Home at a Time
          </h1>

          <p className="hero-in-d2 mt-7 max-w-xl text-lg font-light leading-relaxed text-white/55 md:text-[1.35rem]">
            Your premier partner for custom luxury homes and architectural excellence.
          </p>

          <a
            href="#portfolio"
            className="hero-in-d3 group mt-12 inline-flex items-center gap-3 border border-brass/45 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-light transition-all duration-500 hover:bg-brass hover:text-charcoal md:text-xs"
          >
            View Our Work
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.45em] text-white/25">
            Scroll
          </span>
          <div className="scroll-drift h-9 w-px origin-top bg-gradient-to-b from-white/45 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about" className="bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            {/* copy */}
            <div className="reveal">
              <div className="mb-8 h-px w-10 bg-brass" />
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-brass md:text-xs">
                About Us
              </p>
              <h2 className="font-display mb-8 text-3xl font-normal leading-[1.15] md:text-[2.65rem] lg:text-5xl">
                Three Decades of
                <br />
                Architectural Excellence
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-cream/55 md:text-[1.2rem]">
                With over 30 years of expertise, QCH Building Group transforms
                your vision into a custom luxury masterpiece.
              </p>
              <p className="text-lg leading-relaxed text-cream/55 md:text-[1.2rem]">
                We specialize in crafting quality custom homes right on your
                lot&nbsp;&mdash; working closely with you to ensure every detail
                reflects your style and exceeds your expectations.
              </p>
            </div>

            {/* image */}
            <div className="reveal reveal-d2 relative">
              <div className="absolute -bottom-3 -right-3 h-full w-full border border-brass/20 md:-bottom-4 md:-right-4" />
              <div className="relative overflow-hidden">
                <img
                  src="/images/20200831_114817.jpg"
                  alt="Luxury living room with coffered ceiling and linear fireplace"
                  className="img-norm h-[380px] w-full object-cover md:h-[540px]"
                  style={{ objectPosition: `${ABOUT_IMG.x} ${ABOUT_IMG.y}`, transform: `rotate(${ABOUT_IMG.rotate}deg) scale(${ABOUT_IMG.scale})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHY QCH ═══════════════════ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="reveal mb-16 text-center md:mb-20">
            <div className="mx-auto mb-8 h-px w-10 bg-brass" />
            <h2 className="font-display text-3xl font-normal md:text-4xl lg:text-5xl">
              Why QCH
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
            {PILLARS.map((p, i) => (
              <div
                key={p.n}
                className={`reveal reveal-d${i + 1} border-t border-brass/30 pt-8`}
              >
                <span className="text-[11px] font-semibold tracking-[0.22em] text-brass">
                  {p.n}
                </span>
                <h3 className="font-display mt-4 mb-4 text-xl leading-snug md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed text-warm-gray md:text-lg">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PORTFOLIO ═══════════════════ */}
      <section id="portfolio" className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="reveal mb-14 text-center md:mb-20">
            <div className="mx-auto mb-8 h-px w-10 bg-brass" />
            <h2 className="font-display text-3xl font-normal text-cream md:text-4xl lg:text-5xl">
              Our Work
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[1.05rem] leading-relaxed text-cream/45">
              A selection of custom homes showcasing our commitment to quality
              and design.
            </p>
          </div>

          <div className="reveal grid grid-cols-1 gap-2 auto-rows-[220px] md:grid-cols-2 md:gap-3 md:auto-rows-[260px] lg:grid-cols-3 lg:auto-rows-[280px]">
            {PORTFOLIO.map((img) => (
              <div
                key={img.src}
                className={`group relative cursor-pointer overflow-hidden ${img.cls}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="img-norm absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: `${img.x} ${img.y}`, transform: `rotate(${img.rotate}deg) scale(${img.scale})` }}
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="contact" className="bg-cream">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
          <div className="reveal">
            <div className="mx-auto mb-8 h-px w-10 bg-brass" />
            <h2 className="font-display mb-5 text-3xl font-normal md:text-4xl lg:text-5xl">
              Let&apos;s Build Together
            </h2>
            <p className="mx-auto mb-14 max-w-md text-lg leading-relaxed text-warm-gray md:text-[1.2rem]">
              Ready to bring your vision to life? Reach out to start the
              conversation.
            </p>

            <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-brass">
                  Email
                </p>
                <a
                  href="mailto:info@qchbuild.com"
                  className="font-display text-xl transition-colors duration-300 hover:text-brass md:text-2xl"
                >
                  info@qchbuild.com
                </a>
              </div>

              <div className="hidden h-14 w-px bg-brass/20 md:block" />

              <div>
                <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-brass">
                  Phone
                </p>
                <a
                  href="tel:7036288988"
                  className="font-display text-xl transition-colors duration-300 hover:text-brass md:text-2xl"
                >
                  703-628-8988
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-charcoal text-cream/45">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-display text-lg tracking-[0.06em] text-cream/75">
              QCH Building Group
            </p>

            <div className="flex items-center gap-8">
              {NAV.map((t) => (
                <a
                  key={t}
                  href={`#${t.toLowerCase()}`}
                  className="text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:text-brass-light"
                >
                  {t}
                </a>
              ))}
            </div>

            <p className="text-[11px] tracking-wide">
              &copy; 2025 QCH Building Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
