import { style, types } from 'typestyle';

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

export const td = style(tableCellStyles);

export const th = style({
    ...tableCellStyles,
    backgroundColor: '#d0d0d0',
});

export const tr = style({
    borderTop: TABLE_BORDER,
    borderLeft: TABLE_BORDER,
    borderRight: TABLE_BORDER,
    $nest: {
        '&:last-child': {
            borderBottom: TABLE_BORDER,
        },
    },
});
