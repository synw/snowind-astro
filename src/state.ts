import { atom } from 'nanostores';
import { mobileBreakpoint, theme } from './conf';

const _isDarkMode = localStorage.getItem("darkmode") ?? "false";

const themeStore = atom(theme);
const isDarkModeStore = atom(_isDarkMode == "true");
const isMobileStore = atom(window.innerWidth <= mobileBreakpoint);

function toggleDarkMode() {
    console.log("Toggle dark mode");
    const current = isDarkModeStore.get();
    isDarkModeStore.set(!current);
    localStorage.setItem("darkmode", (!current).toString())
}

export {
    themeStore,
    isDarkModeStore,
    isMobileStore,
    toggleDarkMode,
}