import { createElement } from 'react';
import { render } from 'react-dom';
import { cssRule } from 'typestyle';

import App from '@view/App';

const loadGlobalStyles = (): void => {
    cssRule('html', {
        width: '100%',
        height: '100vh',
        fontFamily: 'Open Sans',
        overflowX: 'hidden',
        overflowY: 'auto',
        backgroundColor: '#f4f4f4',
    });
    cssRule('body', {
        width: '100%',
        minHeight: '100vh',
    });
};

const renderApp = (root: HTMLElement): void => {
    render(createElement(App, {}), root);
};

const onLoad = () => {
    loadGlobalStyles();
    const root = document.getElementById('root');
    if (root) {
        renderApp(root);
    }
};

window.addEventListener('load', onLoad);
