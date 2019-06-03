import Loader from './Loader';
import { Locale } from '@context';
import { Article, MenuItem } from './types';

export default class ArticleLoader extends Loader {
    private static instance: ArticleLoader | null = null;

    private cache: Map<string, Article>;

    private constructor() {
        super();

        this.cache = new Map<string, Article>();
    }

    public static getInstance(): ArticleLoader {
        if (!ArticleLoader.instance) {
            ArticleLoader.instance = new ArticleLoader();
        }
        return ArticleLoader.instance;
    }

    private static fixUrl(srcUrl: string, version: string): string {
        const fixedUrl = srcUrl.endsWith('/') ? srcUrl.slice(0, srcUrl.length - 1) : srcUrl;
        return `v${version}/${fixedUrl}`.replace(/\/{2,}/g, '/');
    }

    public async load(url: string, version: string, locale: Locale): Promise<Article> {
        const fixedUrl = ArticleLoader.fixUrl(url, version);
        const key = `${locale}::${fixedUrl}`;
        if (!this.cache.has(key)) {
            const [content, name] = await Promise.all([
                this.loadMarkdown(fixedUrl, locale),
                this.loadName(fixedUrl, locale),
            ]);
            this.cache.set(key, { content, name });
        }
        return this.cache.get(key)!;
    }

    private async loadMarkdown(url: string, locale: Locale): Promise<string> {
        let result: string;
        try {
            result = (await this.sender.get<string>(`${url}.${locale}.md`)).data;
        } catch (err) {
            result = (await this.sender.get<string>(`${url}/index.${locale}.md`)).data;
        }
        return result;
    }

    private async loadName(url: string, locale: Locale): Promise<string> {
        let item: MenuItem;
        try {
            item = (await this.sender.get<MenuItem>(`${url}.json`)).data;
        } catch (err) {
            item = (await this.sender.get<MenuItem>(`${url}/index.json`)).data;
        }
        const { name } = item;
        return typeof name === 'string' ? name : name[locale] || name[Locale.en_US] || '';
    }
}
