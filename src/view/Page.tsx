import * as React from 'react';
import { style } from 'typestyle';

import Header from '@view/Header';
import NavigationMenu from '@view/NavigationMenu';

const styles = {
    root: style({
        width: '100%',
        height: '100%',
    }),
    content: style({
        width: 'calc(100% - 300px)',
        height: '100%',
        boxSizing: 'border-box',
        padding: '48px 32px',
        marginLeft: '300px',
        overflowX: 'hidden',
        overflowY: 'auto',
    }),
};

export interface PageProps {
    children?: React.ReactNode;
}

/** Common page */
const Page: React.FunctionComponent<PageProps> = ({ children }) => (
    <div className={styles.root}>
        <NavigationMenu />
        <Header />
        <div className={styles.content}>{children}</div>
    </div>
);

Page.displayName = `Page from "${__filename}"`;

export default Page;
