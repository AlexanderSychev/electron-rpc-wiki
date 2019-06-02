import * as React from 'react';
import { style, keyframes } from 'typestyle';

import logo from '@icons/logo.svg';

const styles = {
    root: style({
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    image: style({
        width: '300px',
        height: '300px',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationName: keyframes({
            '0%': {
                transform: 'rotate(0deg)',
            },
            '50%': {
                transform: 'rotate(180deg)',
            },
            '100%': {
                transform: 'rotate(360deg)',
            },
        }),
    }),
};

const PagePreloader: React.FunctionComponent = () => (
    <div className={styles.root}>
        <img className={styles.image} src={logo} />
    </div>
);

PagePreloader.displayName = `Preloader from "${__filename}"`;

export default PagePreloader;
