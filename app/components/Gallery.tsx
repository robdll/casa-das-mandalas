"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Gallery() {
  const t = useTranslations();
  
  // Image paths using local images from public/images/
  const images = Array.from({ length: 21 }, (_, i) => {
    const imageNum = i + 1;
    const description = t(`gallery.descriptions.${imageNum}` as any);
    const imageExtension = i > 11 ? "webp" : "jpg";
    return {
      id: imageNum,
      src: `/images/house_${imageNum}.${imageExtension}`,
      alt: `Casa das Mandalas - ${description}`,
    };
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          {t("gallery.title")}
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-4/3 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={images[selectedImage - 1].src}
                  alt={images[selectedImage - 1].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between mt-4 text-white">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      selectedImage > 1 ? selectedImage - 1 : images.length
                    );
                  }}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded transition-colors"
                >
                  {t("gallery.previous")}
                </button>
                <span className="self-center">
                  {selectedImage} / {images.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      selectedImage < images.length ? selectedImage + 1 : 1
                    );
                  }}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded transition-colors"
                >
                  {t("gallery.next")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

