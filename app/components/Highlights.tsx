"use client";

import { useTranslations } from "next-intl";

export default function Highlights() {
  const t = useTranslations();
  
  const highlights = [
    {
      icon: "🎨",
      title: t("highlights.artwork.title"),
      description: t("highlights.artwork.description"),
    },
    {
      icon: "🛋️",
      title: t("highlights.livingRoom.title"),
      description: t("highlights.livingRoom.description"),
    },
    {
      icon: "🛏️",
      title: t("highlights.bedroom.title"),
      description: t("highlights.bedroom.description"),
    },
    {
      icon: "🍳",
      title: t("highlights.kitchen.title"),
      description: t("highlights.kitchen.description"),
    },
    {
      icon: "🚿",
      title: t("highlights.bathroom.title"),
      description: t("highlights.bathroom.description"),
    },
    {
      icon: "✨",
      title: t("highlights.amenities.title"),
      description: t("highlights.amenities.description"),
    },
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          {t("highlights.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

