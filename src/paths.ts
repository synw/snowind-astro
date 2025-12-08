import { languages } from "./conf";

// Reusable function to generate paths for [lang] routes
export const getLangPaths = (langs: string[]) => {
    return langs.map(lang => ({ params: { lang } }));
};

export const getStaticPathsForLang = () => {
    return Object.keys(languages).map(lang => ({ params: { lang } }));
};