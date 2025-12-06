const theme = "default";
const siteTitle = "Snowind Astro";
const mobileBreakpoint = 640;
const useMobileBack = true;
const themes = ["bluestar", "lightblue", "green-pink", "pink-black", "blue-yellow"];
const languages: Record<string, { name: string; flag: string }> = {
    en: { name: 'English', flag: '🇬🇧' },
    fr: { name: 'Français', flag: '🇫🇷' },
    /*es: { name: 'Español', flag: '🇪🇸' },
    it: { name: "Italiano", flag: '🇮🇹' },
    de: { name: "Deutsch", flag: '🇩🇪' },
    nl: { name: "Nederlands", flag: '🇳🇱' },
    ar: { name: "اَلْعَرَبِيَّةُ ", flag: '🇸🇦' },
    zh: { name: "中文", flag: '🇨🇳' },
    he: { name: "עברית", flag: '🇮🇱' },
    pt: { name: "Português", flag: '🇵🇹' },
    ru: { name: "Русский язык", flag: '🇷🇺' },
    cs: { name: "Čeština", flag: '🇨🇿' },
    pl: { name: "Polski", flag: '🇵🇱' },
    el: { name: "Νέα Ελληνικά;", flag: '🇬🇷' },
    tr: { name: "Türkçe", flag: '🇹🇷' }*/
};
const defaultLanguage = "en";
const navLinks = ["page1"];

export {
    theme,
    siteTitle,
    mobileBreakpoint,
    useMobileBack,
    themes,
    languages,
    defaultLanguage,
    navLinks,
}