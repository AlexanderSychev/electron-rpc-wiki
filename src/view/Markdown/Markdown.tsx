import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeRenderer from './CodeRenderer';
import InlineCode from './InlineCode';
import Table from './Table';
import TableRow from './TableRow';
import TableCell from './TableCell';
import Link from './Link';

export interface MarkdownProps {
    source?: string;
}

const renderers = {
    code: CodeRenderer,
    inlineCode: InlineCode,
    table: Table,
    tableRow: TableRow,
    tableCell: TableCell,
    link: Link,
};

/** Markdown component with styles */
const Markdown: React.FunctionComponent<MarkdownProps> = ({ source }) => (
    <ReactMarkdown source={source} renderers={renderers} />
);

Markdown.displayName = `Markdown from "${__filename}"`;

export default Markdown;
