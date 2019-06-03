import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Markdown from '@view/Markdown';
import PagePreloader from '@view/PagePreloader';
import NotFoundPage from '@view/NotFoundPage';
import useArticle from '@view/useArticle';
import UnknownErrorPage from '@view/UnknownErrorPage';

interface RouteData {
    sections: string;
}

/** API article page component */
const ApiPage: React.FunctionComponent<RouteComponentProps<RouteData>> = ({
    match: {
        params: { sections },
    },
}) => {
    const { isLoading, hasError, errorType, content } = useArticle(`/api/${sections}`);

    const pageNotFound = !isLoading && hasError && errorType === 'not_found';
    const unknownError = !isLoading && hasError && errorType === 'unknown';
    const success = !isLoading && !hasError;

    return (
        <React.Fragment>
            {isLoading && <PagePreloader />}

            {pageNotFound && <NotFoundPage />}

            {unknownError && <UnknownErrorPage />}

            {success && <Markdown source={content} />}
        </React.Fragment>
    );
};

ApiPage.displayName = `ApiPage from "${__filename}"`;

const PackagePageWithRouter = withRouter(ApiPage);

export default PackagePageWithRouter;
