import { atom } from 'nanostores';
import { mobileBreakpoint, theme } from './conf.js';

//const _isDarkMode = localStorage.getItem("darkmode") ?? "false";
const _isDarkMode = false;
const themeStore = atom(theme);
const isDarkModeStore = atom(false);
//const isMobileStore = atom(window.innerWidth <= mobileBreakpoint);
const isMobileStore = atom(false);

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
    toggleDarkMode,
}