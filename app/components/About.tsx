"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">
          {t("about.title")}
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-lg mb-4">
            {t.rich("about.paragraph1", {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <p className="text-lg mb-4">
            {t("about.paragraph2")}
          </p>
          <p className="text-lg mb-4">
            {t("about.paragraph3")}
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6 rounded">
            <p className="text-base mb-2">
              <strong>{t("about.importantNotes")}</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>{t("about.noSmoking")}</li>
              <li>{t("about.noPets")}</li>
              <li>{t("about.touristTax")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

