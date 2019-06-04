import { Locale } from '@context';
import { CSSProperties } from 'react';

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
    /** Menu item tags */
    tags?: string[];
    /** Child menu items */
    subItems?: MenuItem[];
}

export interface Tag {
    /** Tag's unique name (identifier) */
    uniqueName: string;
    /** Translatable tag name (to display at title) */
    name: string | Map<Locale, string>;
    /** Non translatable tag name (to display at DOM) */
    label: string;
    /** Tag generated class name (by "typestyle") */
    style: string;
}
