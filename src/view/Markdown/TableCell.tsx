import * as React from 'react';

import { th as thClass, td as tdClass } from './tableCellStyles';

export interface TableCellProps {
    isHeader: boolean;
    children?: React.ReactNode;
}

const TableCell: React.FunctionComponent<TableCellProps> = ({ isHeader, children }) =>
    isHeader ? <th className={thClass}>{children}</th> : <td className={tdClass}>{children}</td>;

TableCell.displayName = `TableCell from "${__filename}"`;

export default TableCell;
