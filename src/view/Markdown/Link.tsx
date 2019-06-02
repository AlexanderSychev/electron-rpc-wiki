import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { style } from 'typestyle';

export interface LinkProps {
    href?: string;
    children?: React.ReactNode;
}

const rootClass = style({
    color: '#008c00',
    $nest: {
        '&:hover': {
            color: '#00c300',
        },
    },
});

const Link: React.FunctionComponent<LinkProps> = ({ children, href }) =>
    href && href.startsWith('#') ? (
        <NavLink className={rootClass} to={href.slice(1)}>
            {children}
        </NavLink>
    ) : (
        <a className={rootClass} href={href}>
            {children}
        </a>
    );

Link.displayName = `Link from "${__filename}"`;

export default Link;
