import * as React from 'react';
import { style } from 'typestyle';

import Markdown from '@view/Markdown';
import Logo from '@view/Logo';
import PagePreloader from '@view/PagePreloader';
import useArticle from '@view/useArticle';
import NotFoundPage from '@view/NotFoundPage';
import UnknownErrorPage from '@view/UnknownErrorPage';

const styles = {
    logo: style({
        fontSize: '72px',
        marginTop: '0.25em',
    }),
};

const MainPage: React.FunctionComponent = () => {
    const { isLoading, hasError, errorType, content } = useArticle('/');

    const pageNotFound = !isLoading && hasError && errorType === 'not_found';
    const unknownError = !isLoading && hasError && errorType === 'unknown';
    const success = !isLoading && !hasError;

    return (
        <React.Fragment>
            {isLoading && <PagePreloader />}

            {pageNotFound && <NotFoundPage />}

            {unknownError && <UnknownErrorPage />}

            {success && <Logo className={styles.logo} />}

            {success && <Markdown source={content} />}
        </React.Fragment>
    );
};

MainPage.displayName = `MainPage from ${__filename}`;

export default MainPage;
