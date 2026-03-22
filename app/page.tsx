import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import WalkableTour from "./components/WalkableTour";
import About from "./components/About";
import Amenities from "./components/Amenities";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Highlights />
      <Amenities />
      <Gallery />
      <WalkableTour />
      <CTA />
    </main>
  );
}
