import * as React from 'react';
import { style } from 'typestyle';

const rootClass = style({
    borderRadius: '3px',
    backgroundColor: 'rgba(208, 208, 208, 0.5)',
    padding: '.2em .4em',
    fontSize: '85%',
    boxSizing: 'border-box',
    lineHeight: '1.75em',
});

export interface InlineCodeProps {
    children?: React.ReactNode;
}

const InlineCode: React.FunctionComponent<InlineCodeProps> = ({ children }) => (
    <code className={rootClass}>{children}</code>
);

InlineCode.displayName = `InlineCode from "${__filename}"`;

export default InlineCode;
