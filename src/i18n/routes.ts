import type { Locale } from './config';

export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'contact'
  | 'privacy';

const slugs: Record<Locale, Record<PageKey, string>> = {
  sr: {
    home: '',
    about: 'o-danici',
    services: 'usluge',
    contact: 'kontakt',
    privacy: 'privatnost',
  },
  en: {
    home: '',
    about: 'about',
    services: 'services',
    contact: 'contact',
    privacy: 'privacy',
  },
  sl: {
    home: '',
    about: 'o-danici',
    services: 'storitve',
    contact: 'kontakt',
    privacy: 'zasebnost',
  },
};

export function getPath(locale: Locale, page: PageKey): string {
  const slug = slugs[locale][page];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function getAlternatePaths(page: PageKey): Record<Locale, string> {
  return {
    sr: getPath('sr', page),
    en: getPath('en', page),
    sl: getPath('sl', page),
  };
}

/** Resolve current page key from pathname */
export function pageKeyFromPath(pathname: string): PageKey | null {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 0) return 'home';
  const locale = parts[0];
  const slug = parts[1] ?? '';

  for (const loc of Object.keys(slugs) as Locale[]) {
    if (loc !== locale) continue;
    for (const [key, value] of Object.entries(slugs[loc]) as [PageKey, string][]) {
      if (value === slug) return key;
    }
  }
  return null;
}
