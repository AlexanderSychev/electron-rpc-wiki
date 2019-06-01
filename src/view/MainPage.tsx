import * as React from 'react';
import { style } from 'typestyle';

import Page from '@view/Page';
import Markdown from '@view/Markdown';
import Logo from '@view/Logo';
import { main } from '@data/main';
import { LocaleContext } from '@locale';

const styles = {
    logo: style({
        fontSize: '72px',
        marginTop: '0.25em',
    }),
};

const MainPage: React.FunctionComponent = () => {
    const { locale } = React.useContext(LocaleContext);
    return (
        <Page>
            <Logo className={styles.logo} />
            <Markdown source={main.content.get(locale)} />
        </Page>
    );
};

MainPage.displayName = `MainPage from ${__filename}`;

export default MainPage;
