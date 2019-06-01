import * as React from 'react';
import { style } from 'typestyle';
import { NavLink } from 'react-router-dom';

import LocaleSelector from '@view/LocaleSelector';
import Logo from '@view/Logo';
import VersionSelector from '@view/VersionSelector';
import MenuExpander from '@view/MenuExpander';

const styles = {
    root: style({
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 6px 0 rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '48px',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        paddingRight: '32px',
        boxSizing: 'border-box',
        zIndex: 2,
    }),
    title: style({
        fontSize: '36px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        height: '48px',
        lineHeight: '48px',
        marginRight: '30px',
        $nest: {
            a: {
                textDecoration: 'none',
            },
        },
    }),
    leftWrap: style({
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }),
};

const Header: React.FunctionComponent = () => {
    return (
        <header className={styles.root}>
            <div className={styles.leftWrap}>
                <MenuExpander />
                <h1 className={styles.title}>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                </h1>
                <VersionSelector />
            </div>
            <LocaleSelector />
        </header>
    );
};

Header.displayName = `Header from "${__filename}"`;

export default Header;
