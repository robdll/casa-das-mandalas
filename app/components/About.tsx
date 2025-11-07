export default function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
          About Casa das Mandalas
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            Welcome to <strong>Casa das Mandalas</strong>, a modern, spotless
            one‑bedroom apartment in Monza, Italy, curated as a private art
            gallery. This unique retreat combines the comfort of a home with the
            inspiration of an art space, featuring over 30 hand‑painted mandala
            artworks that create a serene and relaxing atmosphere.
          </p>
          <p className="text-lg mb-4">
            Whether you&apos;re seeking a peaceful workspace for remote work, a
            romantic getaway, or simply a place to unwind and recharge, Casa das
            Mandalas offers the perfect setting. The apartment has been
            thoughtfully designed with attention to detail, from the warm wooden
            floors to the carefully selected furnishings that complement the
            artistic theme.
          </p>
          <p className="text-lg mb-4">
            The space is ideal for digital nomads, couples, or solo travelers who
            appreciate art, comfort, and tranquility. With a dedicated workspace,
            ultrafast Wi‑Fi, and all the amenities you need for a comfortable
            stay, you&apos;ll find everything required for both productivity and
            relaxation.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded">
            <p className="text-base mb-2">
              <strong>Important Notes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>No smoking allowed</li>
              <li>No pets allowed</li>
              <li>Tourist tax applies (to be paid separately)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

