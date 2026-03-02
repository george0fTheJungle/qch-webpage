import Image from "next/image";

const ABOUT_IMG = { x: "50%", y: "50%", rotate: 0, scale: 1 };

export default function About() {
  return (
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
            <div className="relative h-[380px] overflow-hidden md:h-[540px]">
              <Image
                src="/images/20200831_114817.jpg"
                alt="Luxury living room with coffered ceiling and linear fireplace"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="img-norm object-cover"
                style={{ objectPosition: `${ABOUT_IMG.x} ${ABOUT_IMG.y}`, transform: `rotate(${ABOUT_IMG.rotate}deg) scale(${ABOUT_IMG.scale})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
