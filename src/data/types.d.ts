import { Locale } from '@context';

/** Wiki article signature */
export interface Article {
    /** Name variants by locales */
    name: Map<Locale, string>;
    /** Content variants by locales */
    content: Map<Locale, string>;
}

export interface LoadedArticle {
    name: string;
    content: string;
}

export interface NameDictionary {
    [locale: string]: string;
}

/** Menu item signature */
export interface MenuItem {
    /** Name variants by locales */
    name: Map<Locale, string>;
    /** Target URL */
    to: string;
    /** Strict URL checking */
    exact?: boolean;
    /** Child menu items */
    subItems?: MenuItem[];
}
