import * as React from 'react';
import { style } from 'typestyle';
import { NavLink } from 'react-router-dom';

import LocaleSelector from '@view/LocaleSelector';
import Logo from '@view/Logo';

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
        padding: '0 32px',
        boxSizing: 'border-box',
    }),
    title: style({
        fontSize: '36px',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        height: '48px',
        lineHeight: '48px',
        $nest: {
            a: {
                textDecoration: 'none',
            },
        },
    }),
};

const Header: React.FunctionComponent = () => {
    return (
        <header className={styles.root}>
            <h1 className={styles.title}>
                <NavLink to="/">
                    <Logo />
                </NavLink>
            </h1>
            <LocaleSelector />
        </header>
    );
};

Header.displayName = `Header from "${__filename}"`;

export default Header;
