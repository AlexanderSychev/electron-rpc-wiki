import * as React from 'react';
import { AxiosError } from 'axios';

import { AppContext, SitemapContext, Locale } from '@context';
import { MenuItem, Sitemap } from '@data';
import ArticleLoader from '@data/ArticleLoader';
import useTitle from '@view/useTitle';

export interface UseArticleBehavior {
    isLoading: boolean;
    hasError: boolean;
    errorType: 'not_found' | 'unknown';
    content: string;
}

const useMenuItem = (url: string, version: string, sitemap: Sitemap): MenuItem | null =>
    React.useMemo(() => {
        let result: MenuItem | null = null;
        if (sitemap[version]) {
            const { index, tree } = sitemap[version];
            if (index[url]) {
                const length = index[url].length;
                const lastIndex = length - 1;
                let cursor = tree;
                for (let i = 0; i < length; i = i + 1) {
                    const k = index[url][i];
                    if (i === lastIndex) {
                        result = cursor[k];
                    } else {
                        cursor = cursor[k].subItems!;
                    }
                }
            }
        }
        return result;
    }, [url, sitemap]);

const loadArticle = async (locale: string, { files, name: menuName }: MenuItem) => {
    const name = typeof menuName === 'string' ? menuName : menuName[locale] || menuName[Locale.en_US] || '';
    let content: string = '';
    if (files && files[locale]) {
        content = await ArticleLoader.getInstance().load(files[locale]);
    }
    return { name, content };
};

const useArticle = (url: string): UseArticleBehavior => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);
    const [errorType, setErrorType] = React.useState<'not_found' | 'unknown'>('unknown');
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState<string | undefined>(undefined);
    const { locale, version } = React.useContext(AppContext);
    const sitemap = React.useContext(SitemapContext);
    useTitle(title);
    const menuItem = useMenuItem(url, version, sitemap);
    React.useEffect(() => {
        if (menuItem) {
            loadArticle(locale, menuItem).then(
                article => {
                    setTitle(article.name);
                    setContent(article.content);
                    setIsLoading(false);
                    setHasError(false);
                    setErrorType('unknown');
                },
                (error: AxiosError) => {
                    setIsLoading(false);
                    setHasError(true);
                    if (error.response && error.response.status === 404) {
                        setErrorType('not_found');
                    }
                },
            );
        } else {
            setIsLoading(false);
            setHasError(true);
            setErrorType('not_found');
        }
    }, [locale, menuItem]);

    return { isLoading, content, hasError, errorType };
};

export default useArticle;
