export const locales = ['sr', 'en', 'sl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sr';

export const localeLabels: Record<Locale, string> = {
  sr: 'Srpski',
  en: 'English',
  sl: 'Slovenščina',
};

export const localeCodes: Record<Locale, string> = {
  sr: 'SR',
  en: 'EN',
  sl: 'SL',
};

/** HTML lang + hreflang values */
export const htmlLang: Record<Locale, string> = {
  sr: 'sr-Latn',
  en: 'en',
  sl: 'sl',
};

export const hreflang: Record<Locale, string> = {
  sr: 'sr-Latn',
  en: 'en',
  sl: 'sl',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
