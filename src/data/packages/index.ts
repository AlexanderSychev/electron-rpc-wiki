import { Article } from '@data/types';
import types from './types';
import asyncQueue from './async-queue';

const packages: Map<string, Article> = new Map<string, Article>([
    ['electron-rpc-types', types],
    ['electron-rpc-async-queue', asyncQueue],
]);

export default packages;
