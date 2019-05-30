import { Locale } from '@locale';
import { Article } from '@data/types';
import asyncQueueEnUs from './async-queue.en-US.md';
import asyncQueueRuRu from './async-queue.ru-RU.md';

const asyncQueue: Article = {
    name: new Map<Locale, string>([
        [Locale.en_US, 'Package "electron-rpc-async-queue"'],
        [Locale.ru_RU, 'Пакет "electron-rpc-async-queue"'],
    ]),
    content: new Map<Locale, string>([[Locale.en_US, asyncQueueEnUs], [Locale.ru_RU, asyncQueueRuRu]]),
};

export default asyncQueue;
