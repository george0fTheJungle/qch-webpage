const NAV_ITEMS = ["Home", "About", "Portfolio", "Contact"];

export default function Footer({ basePath = "" }: { basePath?: string }) {
  const href = (label: string) =>
    basePath ? `/${basePath === "/" ? "" : basePath}#${label.toLowerCase()}` : `#${label.toLowerCase()}`;

  return (
    <footer className="bg-charcoal text-cream/45">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-display text-lg tracking-[0.06em] text-cream/75">
            QCH Building Group
          </p>

          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((t) => (
              <a
                key={t}
                href={href(t)}
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
  );
}
