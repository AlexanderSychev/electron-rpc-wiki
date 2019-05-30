import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { style, types } from 'typestyle';

export interface MarkdownProps {
    source?: string;
}

const TABLE_BORDER = '1px solid #000';

const tableCellStyles: types.NestedCSSProperties = {
    padding: '8px',
    borderRight: TABLE_BORDER,
    $nest: {
        '&:last-child': {
            borderRight: 'none',
        },
    },
};

const codeBlockStyles: types.NestedCSSSelectors = {
    code: {
        borderRadius: '3px',
        backgroundColor: 'rgba(208, 208, 208, 0.5)',
        padding: '.2em .4em',
        fontSize: '85%',
        boxSizing: 'border-box',
        lineHeight: '1.75em',
    },
};

const tableStyles: types.NestedCSSSelectors = {
    table: {
        borderSpacing: 0,
        borderCollapse: 'collapse',
    },
    td: tableCellStyles,
    th: {
        ...tableCellStyles,
        backgroundColor: '#d0d0d0',
    },
    tr: {
        borderTop: TABLE_BORDER,
        borderLeft: TABLE_BORDER,
        borderRight: TABLE_BORDER,
        $nest: {
            '&:last-child': {
                borderBottom: TABLE_BORDER,
            },
        },
    },
};

const className = style({
    $nest: {
        ...tableStyles,
        ...codeBlockStyles,
    },
});

/** Markdown component with styles */
const Markdown: React.FunctionComponent<MarkdownProps> = ({ source }) => (
    <ReactMarkdown className={className} source={source} />
);

Markdown.displayName = `Markdown from "${__filename}"`;

export default Markdown;
