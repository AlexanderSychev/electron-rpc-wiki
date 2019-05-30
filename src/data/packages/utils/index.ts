import { Locale } from '@locale';
import { Article } from '@data/types';
import utilsEnUs from './utils.en-US.md';
import utilsRuRu from './utils.ru-RU.md';

const utils: Article = {
    name: new Map<Locale, string>([
        [Locale.en_US, 'Package "electron-rpc-utils"'],
        [Locale.ru_RU, 'Пакет "electron-rpc-utils"'],
    ]),
    content: new Map<Locale, string>([[Locale.en_US, utilsEnUs], [Locale.ru_RU, utilsRuRu]]),
};

export default utils;
