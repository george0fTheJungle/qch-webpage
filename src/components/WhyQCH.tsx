const PILLARS = [
  { n: "01", title: "30+ Years of Expertise",    body: "Three decades of craftsmanship and deep knowledge of luxury residential construction." },
  { n: "02", title: "Built on Your Lot",         body: "We build custom homes on your chosen property, giving you complete control over location." },
  { n: "03", title: "Architectural Excellence",  body: "Every home is a unique masterpiece designed to reflect your vision and lifestyle." },
  { n: "04", title: "Premium Craftsmanship",     body: "Only the finest materials and meticulous attention to detail in every element." },
];

export default function WhyQCH() {
  return (
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
  );
}
