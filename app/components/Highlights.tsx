export default function Highlights() {
  const highlights = [
    {
      icon: "🎨",
      title: "Hand-painted Mandala Artwork",
      description: "30+ pieces of unique mandala art and warm wooden floors",
    },
    {
      icon: "🛋️",
      title: "Cozy Living Room",
      description: "Smart TV, comfy sofa bed, and mood lighting",
    },
    {
      icon: "🛏️",
      title: "Comfortable Bedroom",
      description: "King-size bed, mirrored wardrobe, and soft linens",
    },
    {
      icon: "🍳",
      title: "Fully Equipped Kitchen",
      description: "Stove/oven, spacious fridge, cooking basics, dishwasher, and dishes/silverware",
    },
    {
      icon: "🚿",
      title: "Modern Bathroom",
      description: "Glass walk-in shower, designer sink, and back-lit mirror",
    },
    {
      icon: "✨",
      title: "Premium Amenities",
      description: "Ultrafast Wi‑Fi, air conditioning, dedicated workspace, washer, books & board games, private patio/balcony, free parking, and more",
    },
  ];

  return (
    <section id="highlights" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Property Highlights
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

