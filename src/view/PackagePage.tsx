import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import Page from '@view/Page';
import Markdown from '@view/Markdown';
import NotFoundPage from '@view/NotFoundPage';
import packages from '@data/packages';
import { Article } from '@data/types';
import { LocaleContext } from '@locale';
import useTitle from '@view/useTitle';

interface RouteData {
    packageName: string;
}

const useBehavior = (packageName: string): string | undefined => {
    const { locale } = React.useContext(LocaleContext);
    const article: Article | undefined = React.useMemo(() => packages.get(packageName), [packageName]);
    const title: string | undefined = React.useMemo(() => (article ? article.name.get(locale) : undefined), [
        article,
        locale,
    ]);
    const source: string | undefined = React.useMemo(() => (article ? article.content.get(locale) : undefined), [
        article,
        locale,
    ]);
    useTitle(title);
    return source;
};

/** Package page component */
const PackagePage: React.FunctionComponent<RouteComponentProps<RouteData>> = ({
    match: {
        params: { packageName },
    },
}) => {
    const source = useBehavior(packageName);
    return source ? (
        <Page>
            <Markdown source={source} />
        </Page>
    ) : (
        <NotFoundPage />
    );
};

PackagePage.displayName = `PackagePage from "${__filename}"`;

const PackagePageWithRouter = withRouter(PackagePage);

export default PackagePageWithRouter;
