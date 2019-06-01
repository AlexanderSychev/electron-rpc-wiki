import { Locale } from '@context';
import { Article } from '@data/types';
import typesEnUs from './types.en-US.md';
import typesRuRu from './types.ru-RU.md';

const types: Article = {
    name: new Map<Locale, string>([
        [Locale.en_US, 'Package "electron-rpc-types"'],
        [Locale.ru_RU, 'Пакет "electron-rpc-types"'],
    ]),
    content: new Map<Locale, string>([[Locale.en_US, typesEnUs], [Locale.ru_RU, typesRuRu]]),
};

export default types;
