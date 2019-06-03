/** Locale */
export enum Locale {
    ru_RU = 'ru-RU',
    en_US = 'en-US',
}

/** Available versions */
export const Versions: string[] = ['1.2', '1.1'];

/** Common context data */
export interface ContextData {
    /** Is menu expanded */
    isMenuExpanded: boolean;
    /** Locale */
    locale: Locale;
    /** API version */
    version: string;
    /** Switch menu expading */
    setIsMenuExpanded(value: boolean): void;
    /** Set locale and save it at local storage */
    setLocale(locale: Locale): void;
    /** Set version and save it at local storage */
    setVersion(version: string): void;
}
