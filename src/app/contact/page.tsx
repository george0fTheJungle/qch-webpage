import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact QCH Building Group | Northern Virginia Home Builder",
  description:
    "Contact QCH Building Group to start building your custom luxury home in Northern Virginia. Call 703-628-8988 or email info@qchbuild.com.",
  openGraph: {
    title: "Contact QCH Building Group | Northern Virginia Home Builder",
    description:
      "Contact QCH Building Group to start building your custom luxury home in Northern Virginia.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav basePath="/" />
      <div className="pt-24" />
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer basePath="/" />
    </>
  );
}
