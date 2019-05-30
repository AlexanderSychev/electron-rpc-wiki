import { createContext } from 'react';

import { getLocale } from './utils';
import { LocaleContextData } from './LocaleContextData';

export const LocaleContext = createContext<LocaleContextData>({
    locale: getLocale(),
    setLocale: _ => void 0,
});
