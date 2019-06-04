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
        result = `${location.hash.slice(1)}/${result.slice(2)}`;
    }

    return result;
};

const isExternal = (href: string) =>
    (href.startsWith('http://') || href.startsWith('https://')) && !href.startsWith(location.origin);

const Link: React.FunctionComponent<LinkProps> = ({ children, href }) =>
    href && href.startsWith('#') ? (
        <ReactRouterLink className={rootClass} to={fixLink(href)}>
            {children}
        </ReactRouterLink>
    ) : (
        <a className={rootClass} href={href} target={href && isExternal(href) ? '_blank' : undefined}>
            {children}
        </a>
    );

Link.displayName = `Link from "${__filename}"`;

export default Link;
