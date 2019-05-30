import * as React from 'react';
import { style } from 'typestyle';
import { NavLink } from 'react-router-dom';

import { menu, MenuItem } from '@data';
import { LocaleContext, Locale } from '@locale';

const getItemStyles = (level: number): string =>
    style({
        display: 'block',
        marginBottom: '12px',
        color: '#000',
        textDecoration: 'none',
        marginLeft: `${level * 18}px`,
        $nest: {
            '&:last-child': {
                marginBottom: 0,
            },
            '&:hover': {
                color: '#f00',
            },
        },
    });

const styles = {
    root: style({
        width: '300px',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#fff',
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.1)',
        boxSizing: 'border-box',
        padding: '62px 32px 48px',
        overflowX: 'hidden',
        overflowY: 'auto',
    }),
    itemStyles: new Map<number, string>([[0, getItemStyles(0)], [1, getItemStyles(1)], [2, getItemStyles(2)]]),
    itemActive: style({
        color: '#f00',
        fontWeight: 'bold',
    }),
};

const renderItem = (item: MenuItem, index: number, level: number, locale: Locale) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    return (
        <React.Fragment key={`${level}_${index}`}>
            <NavLink
                exact={item.exact}
                to={item.to}
                className={styles.itemStyles.get(level)}
                activeClassName={styles.itemActive}
            >
                {item.name.get(locale)}
            </NavLink>
            {hasSubItems && renderItems(item.subItems!, level + 1, locale)}
        </React.Fragment>
    );
};

const renderItems = (items: MenuItem[], level: number, locale: Locale) =>
    items.map((item, index) => renderItem(item, index, level, locale));

/** Navigation menu */
const NavigationMenu: React.FunctionComponent = () => {
    const { locale } = React.useContext(LocaleContext);
    return <div className={styles.root}>{renderItems(menu, 0, locale)}</div>;
};

NavigationMenu.displayName = `NavigationMenu from "${__filename}"`;

export default NavigationMenu;
