import Loader from './Loader';

export default class ArticleLoader extends Loader {
    private static instance: ArticleLoader | null = null;

    private cache: Map<string, string>;

    private constructor() {
        super();

        this.cache = new Map<string, string>();
    }

    public static getInstance(): ArticleLoader {
        if (!ArticleLoader.instance) {
            ArticleLoader.instance = new ArticleLoader();
        }
        return ArticleLoader.instance;
    }

    public async load(url: string): Promise<string> {
        if (!this.cache.has(url)) {
            const { data } = await this.sender.get<string>(url);
            this.cache.set(url, data);
        }
        return this.cache.get(url)!;
    }
}
