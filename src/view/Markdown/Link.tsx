import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
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

const fixLink = (href: string) => {
    let result = href.slice(1);

    if (result.startsWith('./')) {
        result = `${window.location.hash.slice(1)}/${result.slice(2)}`;
    }

    return result;
};

const Link: React.FunctionComponent<LinkProps> = ({ children, href }) =>
    href && href.startsWith('#') ? (
        <ReactRouterLink className={rootClass} to={fixLink(href)}>
            {children}
        </ReactRouterLink>
    ) : (
        <a className={rootClass} href={href}>
            {children}
        </a>
    );

Link.displayName = `Link from "${__filename}"`;

export default Link;
