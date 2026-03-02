import type { Metadata } from "next";
import Nav from "@/components/Nav";
import About from "@/components/About";
import WhyQCH from "@/components/WhyQCH";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About QCH Building Group | 30+ Years Custom Home Building",
  description:
    "With over 30 years of expertise, QCH Building Group is Northern Virginia's premier luxury custom home builder. We craft architectural masterpieces on your lot with premium craftsmanship.",
  alternates: { canonical: "https://www.qchbuild.com/about" },
  openGraph: {
    title: "About QCH Building Group | 30+ Years Custom Home Building",
    description:
      "With over 30 years of expertise, QCH Building Group is Northern Virginia's premier luxury custom home builder.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav basePath="/" />
      <div className="pt-24" />
      <ScrollReveal>
        <About />
        <WhyQCH />
      </ScrollReveal>
      <Footer basePath="/" />
    </>
  );
}
