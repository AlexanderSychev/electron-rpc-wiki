import * as React from 'react';
import classnames from 'classnames';
import { style } from 'typestyle';
import logo from '@icons/logo.svg';

/** "Logo" component propertoes */
export interface LogoProps {
    /** Additional CSS class */
    className?: string;
}

const styles = {
    root: style({
        fontFamily: 'Roboto',
        height: '1.33em',
        lineHeight: '1.33em',
    }),
    electron: style({
        fontWeight: 500,
        color: '#000000',
    }),
    rpc: style({
        fontWeight: 900,
        color: '#008c00',
    }),
    img: style({
        width: '0.83em',
        height: '0.83em',
        marginRight: '0.14em',
    }),
};

/** Standard ElectronRPC logo */
const Logo: React.FunctionComponent<LogoProps> = ({ className }) => (
    <div className={classnames(styles.root, className)}>
        <img className={styles.img} src={logo} />
        <span className={styles.electron}>Electron</span>
        <span className={styles.rpc}>RPC</span>
    </div>
);

Logo.displayName = `Logo from "${__filename}"`;

export default Logo;
