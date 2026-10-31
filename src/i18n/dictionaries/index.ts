import type { Locale } from '../config';
import { en } from './en';
import { sl } from './sl';
import { sr } from './sr';
import type { Dictionary } from './types';

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  sr,
  en,
  sl,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
