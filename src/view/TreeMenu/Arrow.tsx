import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';

import arrowBold from '@icons/arrowBold.svg';

const styles = {
    root: style({
        width: '20px',
        height: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        $nest: {
            '&:hover': {
                backgroundColor: '#d0d0d0',
            },
        },
    }),
    icon: style({
        width: '11px',
        height: '11px',
    }),
};

/** "Arrow" component properties */
export interface ArrowProps {
    /** Additional CSS class */
    className?: string;
    /** Opened arrow icon class name */
    iconOpenedClassName?: string;
    /** Click handler */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/** Arrow rotatable icon */
const Arrow: React.FunctionComponent<ArrowProps> = ({ className, iconOpenedClassName, onClick }) => (
    <div className={classnames(styles.root, className)} onClick={onClick}>
        <img className={classnames(styles.icon, iconOpenedClassName)} src={arrowBold} />
    </div>
);

Arrow.displayName = `Arrow from "${__filename}"`;

export default Arrow;
