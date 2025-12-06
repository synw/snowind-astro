import { languages as ln } from "../conf";

export const languages = ln;

export const defaultLang = 'en';

export function getLangFromUrl(translations: Record<string, any>, lang?: string) {
    const _lang = lang ?? defaultLang;
    if (_lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(translations: Record<string, any>, lang: keyof typeof translations) {
    return function t(key: keyof typeof translations[typeof defaultLang]) {
        return translations[lang][key] || translations[defaultLang][key];
    }
}