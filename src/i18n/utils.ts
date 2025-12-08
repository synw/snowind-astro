import { languages as ln } from "../conf";
import { langStore } from "../state";

const languages = ln;
const defaultLang = 'en';

function getLangFromUrl(translations: Record<string, any>, lang?: string) {
    const _lang = lang ?? defaultLang;
    if (_lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

function useTranslations(translations: Record<string, any>, lang: keyof typeof translations) {
    return function t(key: keyof typeof translations[typeof defaultLang]) {
        return translations[lang][key] || translations[defaultLang][key];
    }
}

function detectLanguage(): string {
    const slang = langStore.get();
    let lang = defaultLang;
    if (slang) {
        lang = slang;
    } else {
        const locale = navigator.language.split("-")[0];
        if (Object.keys(languages).includes(lang)) {
            lang = locale;
        }
        langStore.set(locale);
    }
    window.location.href = "/" + lang;
    return lang
}

export {
    languages,
    defaultLang,
    getLangFromUrl,
    useTranslations,
    detectLanguage,
}