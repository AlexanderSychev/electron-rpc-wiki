import { Locale } from './types';

const STORAGE_KEY = 'locale';

const isAvailableLocale = (locale: string) => Object.keys(Locale).some(key => Locale[<any>key] === locale);

export const getLocale = (): Locale => {
    let locale = localStorage.getItem(STORAGE_KEY);
    if (!locale) {
        locale = isAvailableLocale(navigator.language) ? <Locale>navigator.language : Locale.en_US;
        localStorage.setItem(STORAGE_KEY, window.navigator.language);
    }
    return <Locale>locale;
};

export const setLocale = (locale: Locale) => {
    localStorage.setItem(STORAGE_KEY, locale);
};
