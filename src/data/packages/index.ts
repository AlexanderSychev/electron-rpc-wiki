import { Article } from '@data/types';
import types from './types';
import asyncQueue from './async-queue';
import utils from './utils';

const packages: Map<string, Article> = new Map<string, Article>([
    ['electron-rpc-types', types],
    ['electron-rpc-async-queue', asyncQueue],
    ['electron-rpc-utils', utils],
]);

export default packages;
