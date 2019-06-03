import * as React from 'react';
import { AxiosError } from 'axios';

import { AppContext } from '@context';
import ArticleLoader from '@data/ArticleLoader';
import useTitle from '@view/useTitle';

export interface UseArticleBehavior {
    isLoading: boolean;
    hasError: boolean;
    errorType: 'not_found' | 'unknown';
    content: string;
}

const useArticle = (url: string): UseArticleBehavior => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);
    const [errorType, setErrorType] = React.useState<'not_found' | 'unknown'>('unknown');
    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState<string | undefined>(undefined);
    const { locale, version } = React.useContext(AppContext);
    useTitle(title);
    React.useEffect(() => {
        ArticleLoader.getInstance()
            .load(url, version, locale)
            .then(
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
    }, [locale, version, url]);

    return { isLoading, content, hasError, errorType };
};

export default useArticle;
