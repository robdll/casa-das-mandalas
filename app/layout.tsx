import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import "./globals.css";
import Logo from "./components/Logo";
import LanguageSelector from "./components/LanguageSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Casa das Mandalas - Art Gallery-Inspired Retreat in Monza, Italy",
  description:
    "Experience a unique stay at Casa das Mandalas, a modern one-bedroom apartment in Monza featuring 30+ hand-painted mandala artworks. Perfect for remote work, romantic getaways, or peaceful retreats. Fully equipped with all amenities.",
  keywords: [
    "Monza",
    "Italy",
    "vacation rental",
    "art gallery",
    "mandala art",
    "apartment rental",
    "Monza accommodation",
    "unique stay",
    "remote work",
    "romantic getaway",
  ],
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  openGraph: {
    title: "Casa das Mandalas - Art Gallery-Inspired Retreat in Monza",
    description:
      "A cozy art gallery-inspired retreat featuring hand-painted mandala artwork, modern amenities, and a relaxing atmosphere in Monza, Italy.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa das Mandalas - Art Gallery-Inspired Retreat in Monza",
    description:
      "Experience a unique stay featuring 30+ hand-painted mandala artworks in Monza, Italy.",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get locale from cookie, default to 'en'
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  
  // Set locale for next-intl
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Logo />
          <LanguageSelector />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
