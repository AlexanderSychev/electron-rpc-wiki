import { Locale } from './Locale';

/** Locale context data */
export interface LocaleContextData {
    /** Current locale */
    locale: Locale;
    /** Set new locale value */
    setLocale(locale: Locale): void;
}
