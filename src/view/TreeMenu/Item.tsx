import * as React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import { style } from 'typestyle';

import Arrow from './Arrow';
import { AppContext } from '@context';
import { MenuItem, NameDictionary } from '@data';
import Tag from '@view/Tag';

export interface ItemProps extends MenuItem {
    level: number;
}

const BASE_LEVEL_MARGIN = 10;

const calcRootStyle = (level: number): React.CSSProperties => {
    const margin = level * BASE_LEVEL_MARGIN;
    return margin > 0
        ? {
              width: `calc(100% - ${margin}px)`,
              marginLeft: `${margin}px`,
          }
        : {
              width: `100%`,
          };
};

const childStyles = {
    arrow: style({
        marginRight: '8px',
    }),
    iconOpenedClassName: style({
        transform: 'rotate(90deg)',
        transition: `transform .25s ease-out`,
    }),
    subs: style({
        width: `100%`,
        height: 0,
        overflow: 'hidden',
        transition: `height .25s ease-out`,
    }),
    subsExpanded: style({
        height: 'auto',
    }),
};

const styles = {
    ...childStyles,
    root: style({
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#000',
        fontSize: '12px',
        height: '32px',
        boxSizing: 'border-box',
        paddingLeft: '6px',
        $nest: {
            '&:hover': {
                color: '#008c00',
                backgroundColor: '#f4f4f4',
            },
            [`&:hover .${childStyles.iconOpenedClassName}`]: {
                transform: 'rotate(0deg)',
            },
            [`&:hover .${childStyles.arrow}`]: {
                backgroundColor: '#d0d0d0',
            },
        },
    }),
    rootActive: style({
        fontWeight: 'bold',
        color: '#008c00',
        $nest: {
            [`& .${childStyles.iconOpenedClassName}`]: {
                transform: 'rotate(0deg)',
            },
            [`& + .${childStyles.subs}`]: {
                height: 'auto',
            },
        },
    }),
    label: style({
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: 'calc(100% - 28px)',
    }),
    tag: style({
        marginLeft: '4px',
    }),
};

interface Behavior {
    isExpanded: boolean;
    label: string | undefined;
    rootStyle: React.CSSProperties;
    onSwitchExpand: React.MouseEventHandler<HTMLDivElement>;
}

const useBehavior = (level: number, name: NameDictionary | string): Behavior => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const onSwitchExpand: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            event.preventDefault();
            setIsExpanded(!isExpanded);
        },
        [isExpanded],
    );

    const { locale } = React.useContext(AppContext);
    const label = React.useMemo(() => (typeof name === 'string' ? name : name[locale]), [locale, name]);
    const rootStyle = React.useMemo(() => calcRootStyle(level), [level]);

    return { isExpanded, label, rootStyle, onSwitchExpand };
};

const Item: React.FunctionComponent<ItemProps> = ({ to, name, level, exact, tags = [], subItems = [] }) => {
    const { rootStyle, label, isExpanded, onSwitchExpand } = useBehavior(level, name);
    return (
        <React.Fragment>
            <NavLink
                exact={exact}
                style={rootStyle}
                to={to}
                className={styles.root}
                activeClassName={styles.rootActive}
            >
                <Arrow
                    onClick={onSwitchExpand}
                    className={styles.arrow}
                    iconOpenedClassName={styles.iconOpenedClassName}
                />
                <div className={styles.label}>
                    {label}

                    {tags.length > 0 && tags.map(tag => <Tag className={styles.tag} uniqueName={tag} key={tag} />)}
                </div>
            </NavLink>
            {subItems.length > 0 && (
                <div className={classnames(styles.subs, isExpanded && styles.subsExpanded)}>
                    {subItems.map((sub, index) => (
                        <Item {...sub} level={level + 1} key={`${level + 1}_${index}`} />
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

Item.displayName = `Item from "${__filename}"`;

export default Item;
