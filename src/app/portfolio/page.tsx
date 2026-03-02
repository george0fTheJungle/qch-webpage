import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portfolio | Custom Luxury Homes by QCH Building Group",
  description:
    "Explore our portfolio of custom luxury homes in Northern Virginia. From gourmet kitchens to grand foyers, see the craftsmanship and architectural excellence QCH Building Group delivers.",
  alternates: { canonical: "https://www.qchbuild.com/portfolio" },
  openGraph: {
    title: "Portfolio | Custom Luxury Homes by QCH Building Group",
    description:
      "Explore our portfolio of custom luxury homes in Northern Virginia.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Nav basePath="/" />
      <div className="pt-24" />
      <ScrollReveal>
        <Portfolio />
      </ScrollReveal>
      <Footer basePath="/" />
    </>
  );
}
