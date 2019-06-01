import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

import Header from '@view/Header';
import TreeMenu from '@view/TreeMenu';
import { AppContext } from '@context';

const styles = {
    root: style({
        width: '100%',
        height: '100%',
    }),
    mainWrap: style({
        width: '100%',
        height: 'calc(100% - 48px)',
        marginTop: '48px',
        whiteSpace: 'nowrap',
    }),
    content: style({
        position: 'relative',
        left: '-300px',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: '48px 32px',
        overflowX: 'hidden',
        overflowY: 'auto',
        transition: 'all .25s ease-out',
        whiteSpace: 'normal',
    }),
    contentExpanded: style({
        width: 'calc(100% - 300px)',
        left: 0,
    }),
    treeMenu: style({
        display: 'inline-block',
        position: 'relative',
        width: '300px',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        left: '-300px',
        transition: 'left .25s ease-out',
    }),
    treeMenuExpanded: style({
        left: 0,
    }),
};

export interface PageProps {
    children?: React.ReactNode;
}

/** Common page */
const Page: React.FunctionComponent<PageProps> = ({ children }) => {
    const { isMenuExpanded } = React.useContext(AppContext);
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.mainWrap}>
                <TreeMenu className={classnames(styles.treeMenu, isMenuExpanded && styles.treeMenuExpanded)} />
                <div className={classnames(styles.content, isMenuExpanded && styles.contentExpanded)}>{children}</div>
            </div>
        </div>
    );
};

Page.displayName = `Page from "${__filename}"`;

export default Page;
