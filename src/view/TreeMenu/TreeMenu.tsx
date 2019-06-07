import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

import { AppContext, SitemapContext } from '@context';
import Item from './Item';

const styles = {
    root: style({
        backgroundColor: '#fff',
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
        padding: '14px',
        overflowX: 'hidden',
        overflowY: 'auto',
    }),
};

/** "TreeMenu" component properties */
export interface TreeMenuProps {
    /** Additional CSS class */
    className?: string;
}

const useBehavior = () => {
    const { version } = React.useContext(AppContext);
    const sitemap = React.useContext(SitemapContext);
    return sitemap[version] ? sitemap[version].tree : [];
};

const TreeMenu: React.FunctionComponent<TreeMenuProps> = ({ className }) => {
    return (
        <div className={classnames(styles.root, className)}>
            {useBehavior().map((item, index) => (
                <Item {...item} level={0} key={`0_${index}`} />
            ))}
        </div>
    );
};

TreeMenu.displayName = `TreeMenu from "${__filename}"`;

export default TreeMenu;
