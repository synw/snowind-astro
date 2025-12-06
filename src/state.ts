import { atom } from 'nanostores';
import { theme } from './conf.js';

const themeStore = atom(theme);
const langStore = atom("");
const isMobileStore = atom(false);
const isEditMode = atom(false);

export {
    themeStore,
    langStore,
    isMobileStore,
    isEditMode,
}