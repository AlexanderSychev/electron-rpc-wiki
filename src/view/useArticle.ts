import * as React from 'react';

import { AppContext } from '@context';
import ArticleLoader from '@data/ArticleLoader';
import useTitle from '@view/useTitle';

const useArticle = (url: string) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState<string | undefined>(undefined);
    const { locale, version } = React.useContext(AppContext);
    useTitle(title);
    React.useEffect(() => {
        ArticleLoader.getInstance()
            .load(url, version, locale)
            .then(article => {
                setTitle(article.name);
                setContent(article.content);
                setIsLoading(false);
            });
    }, [locale, version, url]);

    return { isLoading, content };
};

export default useArticle;
