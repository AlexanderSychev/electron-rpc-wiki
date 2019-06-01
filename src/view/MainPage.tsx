import * as React from 'react';
import { style } from 'typestyle';

import Markdown from '@view/Markdown';
import Logo from '@view/Logo';
import { main } from '@data/main';
import { AppContext } from '@context';

const styles = {
    logo: style({
        fontSize: '72px',
        marginTop: '0.25em',
    }),
};

const MainPage: React.FunctionComponent = () => {
    const { locale } = React.useContext(AppContext);
    return (
        <React.Fragment>
            <Logo className={styles.logo} />
            <Markdown source={main.content.get(locale)} />
        </React.Fragment>
    );
};

MainPage.displayName = `MainPage from ${__filename}`;

export default MainPage;
