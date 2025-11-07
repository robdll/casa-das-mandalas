"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations();
  
  return (
    <Link href="/" className="fixed top-4 left-4 z-50">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/10 backdrop-blur-sm">
        <Image
          src="/images/icon.png"
          alt={t("common.logoAlt")}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 64px, 80px"
          priority
        />
      </div>
    </Link>
  );
}
