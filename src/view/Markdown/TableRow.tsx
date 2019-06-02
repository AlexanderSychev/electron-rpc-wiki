import * as React from 'react';

import { tr as rootClass } from './tableCellStyles';

export interface TableRowProps {
    children?: React.ReactNode;
}

const TableRow: React.FunctionComponent<TableRowProps> = ({ children }) => <tr className={rootClass}>{children}</tr>;

TableRow.displayName = `TableRow from "${__filename}"`;

export default TableRow;
