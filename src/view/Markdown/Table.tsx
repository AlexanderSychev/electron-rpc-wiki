import * as React from 'react';
import { style } from 'typestyle';

const rootClass = style({
    borderSpacing: 0,
    borderCollapse: 'collapse',
});

export interface TableProps {
    children?: React.ReactNode;
}

const Table: React.FunctionComponent<TableProps> = ({ children }) => <table className={rootClass}>{children}</table>;

Table.displayName = `Table from "${__filename}"`;

export default Table;
