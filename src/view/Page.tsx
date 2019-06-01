import * as React from 'react';
import { style } from 'typestyle';

import Header from '@view/Header';
import TreeMenu from '@view/TreeMenu';

const styles = {
    root: style({
        width: '100%',
        height: '100%',
    }),
    mainWrap: style({
        width: '100%',
        height: 'calc(100% - 48px)',
        marginTop: '48px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    }),
    content: style({
        width: 'calc(100% - 300px)',
        height: '100%',
        boxSizing: 'border-box',
        padding: '48px 32px',
        overflowX: 'hidden',
        overflowY: 'auto',
    }),
    treeMenu: style({
        width: '300px',
        height: '100%',
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
        <Header />
        <div className={styles.mainWrap}>
            <TreeMenu className={styles.treeMenu} />
            <div className={styles.content}>{children}</div>
        </div>
    </div>
);

Page.displayName = `Page from "${__filename}"`;

export default Page;
