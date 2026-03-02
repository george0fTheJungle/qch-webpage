import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qchbuild.com"),
  title: "QCH Building Group | Custom Luxury Homes in Northern Virginia",
  description:
    "With over 30 years of expertise, QCH Building Group crafts custom luxury homes on your lot in Northern Virginia. Architectural excellence, premium craftsmanship.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "QCH Building Group",
    title: "QCH Building Group | Custom Luxury Homes in Northern Virginia",
    description:
      "With over 30 years of expertise, QCH Building Group crafts custom luxury homes on your lot in Northern Virginia.",
    images: [{ url: "/images/Foyer_edited_edited.png", width: 1200, height: 630, alt: "QCH Building Group — luxury custom homes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QCH Building Group | Custom Luxury Homes in Northern Virginia",
    description:
      "With over 30 years of expertise, QCH Building Group crafts custom luxury homes on your lot in Northern Virginia.",
    images: ["/images/Foyer_edited_edited.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "QCH Building Group",
  description:
    "Custom luxury home builder in Northern Virginia with over 30 years of expertise. We craft architectural masterpieces on your lot.",
  url: "https://www.qchbuild.com",
  telephone: "+1-703-628-8988",
  email: "info@qchbuild.com",
  areaServed: {
    "@type": "Place",
    name: "Northern Virginia",
  },
  knowsAbout: [
    "Custom home building",
    "Luxury residential construction",
    "Architectural design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">{children}</body>
    </html>
  );
}
