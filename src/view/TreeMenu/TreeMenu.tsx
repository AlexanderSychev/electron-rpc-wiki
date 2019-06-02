import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

import menu from '@data/menu';
import Item from './Item';

const styles = {
    root: style({
        backgroundColor: '#fff',
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
        padding: '14px 32px 48px',
        overflowX: 'hidden',
        overflowY: 'auto',
    }),
};

/** "TreeMenu" component properties */
export interface TreeMenuProps {
    /** Additional CSS class */
    className?: string;
}

const TreeMenu: React.FunctionComponent<TreeMenuProps> = ({ className }) => (
    <div className={classnames(styles.root, className)}>
        {menu.map((item, index) => (
            <Item {...item} level={0} key={`0_${index}`} />
        ))}
    </div>
);

TreeMenu.displayName = `TreeMenu from "${__filename}"`;

export default TreeMenu;
