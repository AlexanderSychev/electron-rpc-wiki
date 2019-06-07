import { Locale } from '@context';
import { CSSProperties } from 'react';

export interface Article {
    name: string;
    content: string;
}

export interface NameDictionary {
    [locale: string]: string;
}

/** Sitemap item signature */
export interface SitemapItem {
    /** Menu items tree-like array */
    tree: MenuItem[];
    /** Menu items URL index (for simple searching) */
    index: {
        [url: string]: number[];
    };
}

/** Sitemap signature */
export interface Sitemap {
    [version: string]: SitemapItem;
}

/** Menu item signature */
export interface MenuItem {
    /** Name variants by locales or single name */
    name: NameDictionary | string;
    /** Target URL */
    to: string;
    /** Redirection URL */
    redirectTo?: string;
    /** Available Markdown files to load */
    files?: NameDictionary;
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
