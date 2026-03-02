const HERO_IMG = { x: "50%", y: "50%", rotate: 0, scale: 1.03 };

export default function Hero() {
  return (
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
  );
}
