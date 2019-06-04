import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

import { tags } from '@data';
import { AppContext } from '@context';

export interface TagProps {
    className?: string;
    uniqueName: string;
}

const rootClass = style({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'monospace',
    fontSize: '10px',
    minWidth: '1em',
    minHeight: '1em',
    padding: '.25em',
    borderRadius: '.5em',
    fontWeight: 'bold',
});

const useBehavior = (uniqueName: string) => {
    const { locale } = React.useContext(AppContext);
    const tag = React.useMemo(() => tags.find(tag => uniqueName === tag.uniqueName), [uniqueName]);
    const style = React.useMemo(() => (tag ? tag.style : undefined), [tag]);
    const title = React.useMemo(
        () => (tag ? (typeof tag.name === 'string' ? tag.name : tag.name.get(locale)) : undefined),
        [tag, locale],
    );
    const label = React.useMemo(() => (tag ? tag.label : undefined), [tag]);
    return { style, title, label };
};

const Tag: React.FunctionComponent<TagProps> = ({ className, uniqueName }) => {
    const { style, title, label } = useBehavior(uniqueName);
    return (
        <div className={classnames(rootClass, style, className)} title={title}>
            <span>{label}</span>
        </div>
    );
};

Tag.displayName = `Tag from "${__filename}"`;

export default Tag;
