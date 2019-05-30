import * as React from 'react';

import Page from './Page';
import Markdown from '@view/Markdown';
import { main } from '@data/main';
import { LocaleContext } from '@locale';

const MainPage: React.FunctionComponent = () => {
    const { locale } = React.useContext(LocaleContext);
    return (
        <Page>
            <Markdown source={main.content.get(locale)} />
        </Page>
    );
};

MainPage.displayName = `MainPage from ${__filename}`;

export default MainPage;
