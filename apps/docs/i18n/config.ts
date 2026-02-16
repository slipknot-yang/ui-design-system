export const locales = ["ko", "en", "es", "fr", "ar", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  es: "Español",
  fr: "Français",
  ar: "العربية",
  ja: "日本語",
  zh: "中文",
};

export const rtlLocales: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}
