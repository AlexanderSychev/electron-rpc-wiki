import * as React from 'react';
import { style } from 'typestyle';

import Markdown from '@view/Markdown';
import Logo from '@view/Logo';
import PagePreloader from '@view/PagePreloader';
import useArticle from '@view/useArticle';

const styles = {
    logo: style({
        fontSize: '72px',
        marginTop: '0.25em',
    }),
};

const MainPage: React.FunctionComponent = () => {
    const { isLoading, content } = useArticle('/');
    return isLoading ? (
        <PagePreloader />
    ) : (
        <React.Fragment>
            <Logo className={styles.logo} />
            <Markdown source={content} />
        </React.Fragment>
    );
};

MainPage.displayName = `MainPage from ${__filename}`;

export default MainPage;
