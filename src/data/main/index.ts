import { Locale } from '@locale';

import mainEnUs from './main.en-US.md';
import mainRuRu from './main.ru-RU.md';
import { Article } from '../types';

const name = new Map<Locale, string>([[Locale.ru_RU, 'Главная'], [Locale.en_US, 'Main']]);

const content = new Map<Locale, string>([[Locale.en_US, mainEnUs], [Locale.ru_RU, mainRuRu]]);

export const main: Article = {
    name,
    content,
};
