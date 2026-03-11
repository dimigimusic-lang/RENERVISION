export const languages = {
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  fr: { label: 'Français', flag: '🇫🇷' },
  es: { label: 'Español', flag: '🇪🇸' },
  hr: { label: 'Hrvatski', flag: '🇭🇷' },
  zh: { label: '中文', flag: '🇨🇳' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langList = Object.keys(languages) as Lang[];

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in languages) return first as Lang;
  return defaultLang;
}
