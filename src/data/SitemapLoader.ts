import Loader from './Loader';

import { Sitemap } from './types';

export default class SitemapLoader extends Loader {
    private static instance: SitemapLoader | null = null;

    private constructor() {
        super();
    }

    public static getInstance(): SitemapLoader {
        if (!SitemapLoader.instance) {
            SitemapLoader.instance = new SitemapLoader();
        }
        return SitemapLoader.instance;
    }

    public async load(): Promise<Sitemap> {
        const { data } = await this.sender.get<Sitemap>('/sitemap.json');
        return data;
    }
}
