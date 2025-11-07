import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Amenities from "./components/Amenities";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Highlights />
      <Gallery />
      <About />
      <Amenities />
      <CTA />
    </main>
  );
}
