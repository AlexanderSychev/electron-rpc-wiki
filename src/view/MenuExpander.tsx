import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';
import { AppContext } from '@context';

import arrow from '@icons/arrow.svg';

const styles = {
    root: style({
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }),
    icon: style({
        width: '32px',
        height: '32px',
        transform: 'rotate(90deg)',
        transition: 'transform .25s ease-out',
    }),
    iconActive: style({
        transform: 'rotate(0deg)',
    }),
};

interface Behavior {
    isMenuExpanded: boolean;
    toggleIsMenuExpanded: React.MouseEventHandler<HTMLDivElement>;
}

const useBehavior = (): Behavior => {
    const { isMenuExpanded, setIsMenuExpanded } = React.useContext(AppContext);
    const toggleIsMenuExpanded: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
        () => setIsMenuExpanded(!isMenuExpanded),
        [isMenuExpanded],
    );
    return { isMenuExpanded, toggleIsMenuExpanded };
};

/** Menu expanding button */
const MenuExpander: React.FunctionComponent = () => {
    const { isMenuExpanded, toggleIsMenuExpanded } = useBehavior();
    return (
        <div className={styles.root} onClick={toggleIsMenuExpanded}>
            <img className={classnames(styles.icon, isMenuExpanded && styles.iconActive)} src={arrow} />
        </div>
    );
};

MenuExpander.displayName = `MenuExpander from "${__filename}"`;

export default MenuExpander;
