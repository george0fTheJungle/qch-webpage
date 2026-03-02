import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyQCH from "@/components/WhyQCH";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ScrollReveal>
        <About />
        <WhyQCH />
        <Portfolio />
        <Contact />
      </ScrollReveal>
      <Footer />
    </>
  );
}
