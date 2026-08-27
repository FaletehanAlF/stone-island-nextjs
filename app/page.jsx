import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import About from "./components/About";
import Category from "./components/Category";
import Produk from "./components/Produk";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ScrollReveal animation="fadeUp" delay={0}>
        <LogoMarquee />
      </ScrollReveal>
      <ScrollReveal animation="fadeRight" delay={0.05}>
        <About />
      </ScrollReveal>
      <ScrollReveal animation="scale" delay={0.05}>
        <Category />
      </ScrollReveal>
      <ScrollReveal animation="fadeUp" delay={0.05}>
        <Produk />
      </ScrollReveal>
      <ScrollReveal animation="fadeLeft" delay={0.05}>
        <Review />
      </ScrollReveal>
      <ScrollReveal animation="fadeUp" delay={0.05}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
