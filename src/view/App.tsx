import * as React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import MainPage from '@view/MainPage';
import NotFoundPage from '@view/NotFoundPage';
import PackagePage from '@view/PackagePage';
import favicon from '@icons/favicon.png';
import { LocaleContext, Locale, LocaleContextData, getLocale, setLocale as setLocaleOrigin } from '@locale';

const useBehavior = (): LocaleContextData => {
    const [locale, setLocaleState] = React.useState(getLocale);
    const setLocale = React.useCallback(
        (locale: Locale) => {
            setLocaleState(locale);
            setLocaleOrigin(locale);
        },
        [setLocaleState, setLocaleOrigin],
    );
    const value: LocaleContextData = React.useMemo(() => ({ locale, setLocale }), [locale, setLocale]);
    return value;
};

/** Application main component */
const App: React.FunctionComponent = () => (
    <LocaleContext.Provider value={useBehavior()}>
        <Helmet>
            <link rel="icon" type="image/svg+xml" href={favicon} />
        </Helmet>
        <HashRouter>
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Redirect from="/packages" to="/packages/electron-rpc-types" exact />
                <Route path="/packages/:packageName" component={PackagePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </HashRouter>
    </LocaleContext.Provider>
);

App.displayName = `App from "${__filename}"`;

export default App;
