import { style } from 'typestyle';

export const root = style({
    width: '125px',
});

export const option = style({
    width: 'inherit',
    height: '36px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 8px',
    $nest: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#f4f4f4',
        },
    },
});

export const icon = style({
    width: '36px',
    height: '36px',
});
