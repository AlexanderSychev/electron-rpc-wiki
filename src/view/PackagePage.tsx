import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Markdown from '@view/Markdown';
import PagePreloader from '@view/PagePreloader';
import useArticle from '@view/useArticle';

interface RouteData {
    packageName: string;
}

/** Package page component */
const PackagePage: React.FunctionComponent<RouteComponentProps<RouteData>> = ({
    match: {
        params: { packageName },
    },
}) => {
    const { isLoading, content } = useArticle(`/api/${packageName}/`);
    return isLoading ? <PagePreloader /> : <Markdown source={content} />;
};

PackagePage.displayName = `PackagePage from "${__filename}"`;

const PackagePageWithRouter = withRouter(PackagePage);

export default PackagePageWithRouter;
