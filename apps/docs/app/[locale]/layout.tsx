import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Noto_Sans_KR,
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Sans_Arabic,
} from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { locales, isRtl, type Locale } from "@/i18n/config";
import { Providers } from "@/components/providers";

import "@workspace/ui/globals.css";

export const metadata: Metadata = {
  title: "CUPIA Design System",
  description: "Customs Uni-Pass International Agency - UI Design System",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "CUPIA Design System",
    description: "Customs Uni-Pass International Agency - UI Design System",
    images: [{ url: "/og-image.jpg", width: 800, height: 400 }],
  },
};

/* ── Latin (en, es, fr) ─────────────────────────────── */
const fontSans = localFont({
  src: [{ path: "../../public/fonts/GeistVF.woff2", style: "normal" }],
  variable: "--font-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/* ── Monospace ───────────────────────────────────────── */
const fontMono = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

/* ── Korean ──────────────────────────────────────────── */
const fontKo = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ko",
  display: "swap",
});

/* ── Japanese ────────────────────────────────────────── */
const fontJa = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ja",
  display: "swap",
});

/* ── Simplified Chinese ──────────────────────────────── */
const fontZh = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zh",
  display: "swap",
});

/* ── Arabic ──────────────────────────────────────────── */
const fontAr = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-ar",
  display: "swap",
});

/* ── Locale → font variable mapping ──────────────────── */
const localeFontVariable: Record<Locale, string> = {
  ko: "var(--font-ko)",
  en: "var(--font-sans)",
  es: "var(--font-sans)",
  fr: "var(--font-sans)",
  ar: "var(--font-ar)",
  ja: "var(--font-ja)",
  zh: "var(--font-zh)",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<React.JSX.Element> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = isRtl(locale as Locale) ? "rtl" : "ltr";
  const fontFamily = localeFontVariable[locale as Locale] ?? "var(--font-sans)";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontKo.variable} ${fontJa.variable} ${fontZh.variable} ${fontAr.variable} font-sans antialiased`}
        style={{
          fontFamily: `${fontFamily}, ui-sans-serif, system-ui, sans-serif`,
        }}
      >
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
