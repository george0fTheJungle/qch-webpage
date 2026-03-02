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

export default function Portfolio() {
  return (
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
  );
}
