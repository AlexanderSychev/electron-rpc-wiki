import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MainPage from '@view/MainPage';
import NotFoundPage from '@view/NotFoundPage';
import PackagePage from '@view/PackagePage';
import favicon from '@icons/favicon.png';
import Page from '@view/Page';
import { AppContext } from '@context';
import useBehavior from './useBehavior';

/** Application main component */
const App: React.FunctionComponent = () => (
    <AppContext.Provider value={useBehavior()}>
        <Helmet>
            <link rel="icon" type="image/svg+xml" href={favicon} />
        </Helmet>
        <HashRouter>
            <Page>
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Redirect from="/packages" to="/packages/electron-rpc-types" exact />
                    <Route path="/packages/:packageName" component={PackagePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Page>
        </HashRouter>
    </AppContext.Provider>
);

App.displayName = `App from "${__filename}"`;

export default App;
