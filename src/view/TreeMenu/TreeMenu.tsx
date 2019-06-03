import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

import { AppContext } from '@context';
import { MenuLoader, MenuItem } from '@data';
import Item from './Item';
import MenuPreloader from '@view/MenuPreloader';

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
    const [menu, setMenu] = React.useState<MenuItem[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        MenuLoader.getInstance()
            .loadMenu(version)
            .then(menu => {
                setMenu(menu);
                setIsLoading(false);
            });
    }, [version]);
    return { isLoading, menu };
};

const TreeMenu: React.FunctionComponent<TreeMenuProps> = ({ className }) => {
    const { menu, isLoading } = useBehavior();
    return (
        <div className={classnames(styles.root, className)}>
            {isLoading ? <MenuPreloader /> : menu.map((item, index) => <Item {...item} level={0} key={`0_${index}`} />)}
        </div>
    );
};

TreeMenu.displayName = `TreeMenu from "${__filename}"`;

export default TreeMenu;
