export default function Contact() {
  return (
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
  );
}
