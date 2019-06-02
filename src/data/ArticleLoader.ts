import axios, { AxiosInstance } from 'axios';
import * as url from 'url';

import { Locale } from '@context';
import { LoadedArticle, NameDictionary } from './types';

export default class ArticleLoader {
    private static instance: ArticleLoader | null = null;

    private cache: Map<string, LoadedArticle>;

    private sender: AxiosInstance;

    private constructor() {
        const { protocol, host, pathname = '/' } = url.parse(location.href);
        this.sender = axios.create({
            baseURL: url.format({
                protocol,
                host,
                pathname,
            }),
        });

        this.cache = new Map<string, LoadedArticle>();
    }

    public static getInstance(): ArticleLoader {
        if (!ArticleLoader.instance) {
            ArticleLoader.instance = new ArticleLoader();
        }
        return ArticleLoader.instance;
    }

    private static fixUrl(srcUrl: string, version: string): string {
        const fixedUrl: string = srcUrl.endsWith('/') ? `${srcUrl}index` : srcUrl;
        return `v${version}/${fixedUrl}`.replace(/\/{2,}/g, '/');
    }

    public async load(url: string, version: string, locale: Locale): Promise<LoadedArticle> {
        const key = ArticleLoader.fixUrl(url, version);
        if (!this.cache.has(key)) {
            const markdownUrl = `${key}.${locale}.md`;
            const jsonUrl = `${key}.json`;
            const [{ data: content }, { data: dictionary }] = await Promise.all([
                await this.sender.get<string>(markdownUrl),
                await this.sender.get<NameDictionary>(jsonUrl),
            ]);
            this.cache.set(key, {
                content,
                name: dictionary[locale] || dictionary[Locale.en_US] || '',
            });
        }
        return this.cache.get(key)!;
    }
}
