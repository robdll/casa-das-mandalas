"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const whatsappNumber = "393513184484"; // Format: country code + number (no + or spaces)
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("highlights");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.avif"
          alt="Casa das Mandalas living room with colorful mandala art"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Casa das Mandalas
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light drop-shadow-md mb-8">
          A Cozy Art Gallery‑Inspired Retreat in Monza
        </p>
        {/* Book Now Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BA5A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>Book Now</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        aria-label="Scroll to next section"
      >
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </section>
  );
}

