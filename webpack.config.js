'use strict';

const path = require('path');

module.exports = env => ({
    mode: env || 'production',
    target: 'web',
    entry: ['@babel/polyfill', path.join(__dirname, 'src', 'index.ts')],
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'electron-rpc-wiki.js',
    },
    context: __dirname,
    node: {
        __filename: true,
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        [
                            '@babel/env',
                            {
                                modules: false,
                                targets: {
                                    browsers: ['last 1 version'],
                                    safari: '9',
                                    ie: '11',
                                    ios: '9',
                                    android: '4',
                                },
                            },
                        ],
                        '@babel/react',
                        '@babel/typescript',
                    ],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }],
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        '@babel/plugin-syntax-dynamic-import',
                        'babel-plugin-styled-components',
                    ],
                },
            },
            {
                test: /\.svg$/,
                loader: 'url-loader',
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.md'],
        alias: {
            '@data': path.join(__dirname, 'src/data/'),
            '@view': path.join(__dirname, 'src/view/'),
            '@locale': path.join(__dirname, 'src/locale/'),
            '@icons': path.join(__dirname, 'src/icons'),
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-markdown': 'ReactMarkdown',
    },
});
