import { persistentAtom, persistentBoolean } from '@nanostores/persistent'
import { theme } from './conf.js';

const themeStore = persistentAtom<string>("theme", theme);
const langStore = persistentAtom<string>("lang", "");
const isMobileStore = persistentBoolean("ismobile", false)

export {
    themeStore,
    langStore,
    isMobileStore,
}