import bn from "@/i18n/messages/bn.json";
import en from "@/i18n/messages/en.json";

export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const i18nConfig = {
  locales,
  defaultLocale
} as const;

const dictionaries = {
  en,
  bn
} as const;

export function resolveLocale(input?: string | null): Locale {
  if (!input) {
    return defaultLocale;
  }

  const normalized = input.toLowerCase();
  return locales.includes(normalized as Locale) ? (normalized as Locale) : defaultLocale;
}

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}
