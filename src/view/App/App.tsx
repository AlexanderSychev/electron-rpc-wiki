import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import MainPage from '@view/MainPage';
import NotFoundPage from '@view/NotFoundPage';
import ApiPage from '@view/ApiPage';
import Page from '@view/Page';
import { AppContext } from '@context';
import useBehavior from './useBehavior';

/** Application main component */
const App: React.FunctionComponent = () => (
    <HashRouter>
        <AppContext.Provider value={useBehavior()}>
            <Page>
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Redirect from="/api" to="/api/electron-rpc-server" exact />
                    <Route path="/api/:sections+" component={ApiPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Page>
        </AppContext.Provider>
    </HashRouter>
);

App.displayName = `App from "${__filename}"`;

export default App;
