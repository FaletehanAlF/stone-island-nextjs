import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import Produk from "./components/Produk";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* COLLECTION / CATEGORY */}
      <Category />

      {/* PRODUCTS */}
      <Produk />

      {/* REVIEWS */}
      <Review />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}