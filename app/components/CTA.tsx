"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface FormData {
  email: string;
  phone: string;
  eventType: string;
  numberOfGuests: string;
  message: string;
}

export default function CTA() {
  const t = useTranslations();
  const whatsappNumber = "393513184484"; // Format: country code + number (no + or spaces)
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    eventType: "",
    numberOfGuests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t("contact.errors.submissionFailed"));
      }

      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          email: "",
          phone: "",
          eventType: "",
          numberOfGuests: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t("contact.errors.submissionFailed")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          {t("cta.title")}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {t("cta.description")}
        </p>

        {isSubmitted ? (
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg mb-6 text-left">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <p className="text-green-800 font-semibold text-lg">
                  {t("contact.success.title")}
                </p>
                <p className="text-green-700 mt-1">
                  {t("contact.success.message")}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.fields.email.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder:text-gray-500"
                  placeholder={t("contact.fields.email.placeholder")}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.fields.phone.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder:text-gray-500"
                  placeholder={t("contact.fields.phone.placeholder")}
                />
              </div>

              {/* Event Type */}
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.fields.eventType.label")}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option value="">
                    {t("contact.fields.eventType.placeholder")}
                  </option>
                  <option value="vacation">
                    {t("contact.fields.eventType.options.vacation")}
                  </option>
                  <option value="business">
                    {t("contact.fields.eventType.options.business")}
                  </option>
                  <option value="romantic">
                    {t("contact.fields.eventType.options.romantic")}
                  </option>
                  <option value="other">
                    {t("contact.fields.eventType.options.other")}
                  </option>
                </select>
              </div>

              {/* Number of Guests */}
              <div>
                <label
                  htmlFor="numberOfGuests"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.fields.numberOfGuests.label")}
                </label>
                <input
                  type="number"
                  id="numberOfGuests"
                  name="numberOfGuests"
                  min="1"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition placeholder:text-gray-500"
                  placeholder={t("contact.fields.numberOfGuests.placeholder")}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t("contact.fields.message.label")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none placeholder:text-gray-500"
                placeholder={t("contact.fields.message.placeholder")}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                <p className="text-red-800 font-medium">
                  {t("contact.errors.title")}
                </p>
                <p className="text-red-700 mt-1">{error}</p>
                <p className="text-red-600 text-sm mt-2">
                  {t("contact.errors.fallback")}
                </p>
              </div>
            )}

            {/* Submit Button and WhatsApp Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? t("contact.submitting") : t("contact.submit")}
              </button>
              
              <span className="text-gray-600 font-medium">{t("cta.or")}</span>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaWhatsapp className="w-6 h-6" />
                <span>{t("cta.messageOnWhatsapp")}</span>
              </a>
            </div>
          </form>
        )}

        <p className="mt-6 text-sm text-gray-500">
          {t("cta.responseTime")}
        </p>
      </div>
    </section>
  );
}

