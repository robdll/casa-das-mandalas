import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const whatsappNumber = "393513184484"; // Format: country code + number (no + or spaces)
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Ready to Book Your Stay?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the unique charm of Casa das Mandalas. Contact us directly
          via WhatsApp for instant booking or inquiries.
        </p>
        <div className="flex justify-center items-center">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BA5A] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FaWhatsapp className="w-6 h-6" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          We typically respond within a few minutes!
        </p>
      </div>
    </section>
  );
}

