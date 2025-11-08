import { atom } from 'nanostores';
import { mobileBreakpoint, theme } from './conf.js';

const themeStore = atom(theme);
const isDarkModeStore = atom(false);
const isMobileStore = atom(false);
const isEditMode = atom(false);

function toggleDarkMode() {
    console.log("Toggle dark mode");
    const current = isDarkModeStore.get();
    isDarkModeStore.set(!current);
    //localStorage.setItem("darkmode", (!current).toString())
}

export {
    themeStore,
    isDarkModeStore,
    isMobileStore,
    isEditMode,
    toggleDarkMode,
}