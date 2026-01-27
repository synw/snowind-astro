const theme = "default";
const siteTitle = "Snowind Astro";
const mobileBreakpoint = 640;
const useMobileBack = true;
const themes = ["bluestar", "lightblue", "green-pink", "pink-black", "blue-yellow"];
const languages = {
    en: { enname: "English", name: 'English', flag: '🇬🇧' },
    fr: { enname: "French", name: 'Français', flag: '🇫🇷' },
    es: { enname: "Spanish", name: 'Español', flag: '🇪🇸' },
    it: { enname: "Italian", name: "Italiano", flag: '🇮🇹' },
    de: { enname: "German", name: "Deutsch", flag: '🇩🇪' },
    nl: { enname: "Dutch", name: "Nederlands", flag: '🇳🇱' },
    ar: { enname: "Arabic", name: "اَلْعَرَبِيَّةُ ", flag: '🇸🇦' },
    zh: { enname: "Chinese", name: "中文", flag: '🇨🇳' },
    he: { enname: "Hebrew", name: "עברית", flag: '🇮🇱' },
    pt: { enname: "Portuguese", name: "Português", flag: '🇵🇹' },
    ru: { enname: "Rusian", name: "Русский язык", flag: '🇷🇺' },
    cs: { enname: "Czech", name: "Čeština", flag: '🇨🇿' },
    pl: { enname: "Polish", name: "Polski", flag: '🇵🇱' },
    el: { enname: "Greek", name: "Νέα Ελληνικά;", flag: '🇬🇷' },
    tr: { enname: "Turkish", name: "Türkçe", flag: '🇹🇷' }
};

const defaultLanguage = "en";
const navLinks = ["page1"];

export
{
    theme,
    siteTitle,
    mobileBreakpoint,
    useMobileBack,
    themes,
    languages,
    defaultLanguage,
    navLinks,
};