import * as React from 'react';
import classnames from 'classnames';
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
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
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

export interface PreloaderProps {
    imageClassName?: string;
}

const Preloader: React.FunctionComponent<PreloaderProps> = ({ imageClassName }) => (
    <div className={styles.root}>
        <img className={classnames(styles.image, imageClassName)} src={logo} />
    </div>
);

Preloader.displayName = `Preloader from "${__filename}"`;

export default Preloader;
