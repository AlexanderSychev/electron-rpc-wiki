import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '@view/MainPage';
import NotFoundPage from '@view/NotFoundPage';
import ApiPage from '@view/ApiPage';
import Page from '@view/Page';
import { AppContext, SitemapContext } from '@context';
import useBehavior from './useBehavior';
import PagePreloader from '@view/PagePreloader';

/** Application main component */
const App: React.FunctionComponent = () => {
    const { context, isSitemapLoading, sitemap } = useBehavior();
    return isSitemapLoading ? (
        <PagePreloader />
    ) : (
        <HashRouter>
            <AppContext.Provider value={context}>
                <SitemapContext.Provider value={sitemap}>
                    <Page>
                        <Switch>
                            <Route path="/" component={MainPage} exact />
                            <Redirect from="/api" to="/api/electron-rpc-server" exact />
                            <Route path="/api/:sections+" component={ApiPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Page>
                </SitemapContext.Provider>
            </AppContext.Provider>
        </HashRouter>
    );
};

App.displayName = `App from "${__filename}"`;

export default App;
