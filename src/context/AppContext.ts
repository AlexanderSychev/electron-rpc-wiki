import { createContext } from 'react';

import { ContextData } from './types';
import LocalStorageManager from './LocalStorageManager';

export const AppContext = createContext<ContextData>({
    isMenuExpanded: false,
    locale: LocalStorageManager.getInstance().getLocale(),
    version: LocalStorageManager.getInstance().getVersion(),
    setIsMenuExpanded: _ => void 0,
    setLocale: _ => void 0,
    setVersion: _ => void 0,
});
