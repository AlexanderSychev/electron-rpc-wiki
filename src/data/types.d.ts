import { Locale } from '@context';

export interface Article {
    name: string;
    content: string;
}

export interface NameDictionary {
    [locale: string]: string;
}

/** Menu item signature */
export interface MenuItem {
    /** Name variants by locales or single name */
    name: NameDictionary | string;
    /** Target URL */
    to: string;
    /** Strict URL checking */
    exact?: boolean;
    /** Child menu items */
    subItems?: MenuItem[];
}
