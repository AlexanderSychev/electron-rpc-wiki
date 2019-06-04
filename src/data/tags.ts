import { Locale } from '@context';
import { style } from 'typestyle';

import { Tag } from './types';

const modifiersStyle = style({
    backgroundColor: '#d0d0d0',
    color: '#000',
});

const typeStyle = style({
    backgroundColor: 'orange',
    color: '#000',
});

const additionalsStyle = style({
    backgroundColor: '#00dcff',
    color: '#000',
});

const tags: Tag[] = [
    {
        uniqueName: 'abstract',
        label: 'abstract',
        name: new Map<Locale, string>([[Locale.en_US, 'abstract'], [Locale.ru_RU, 'абстрактный']]),
        style: additionalsStyle,
    },
    {
        uniqueName: 'generic',
        label: 'generic',
        name: new Map<Locale, string>([[Locale.en_US, 'generic type'], [Locale.ru_RU, 'дженерик (шаблонный тип)']]),
        style: additionalsStyle,
    },
    {
        uniqueName: 'const',
        label: 'const',
        name: new Map<Locale, string>([
            [Locale.en_US, 'const or constant type'],
            [Locale.ru_RU, 'константа (константый тип)'],
        ]),
        style: additionalsStyle,
    },
    {
        uniqueName: 'class',
        label: 'class',
        name: new Map<Locale, string>([[Locale.en_US, 'class'], [Locale.ru_RU, 'класс']]),
        style: typeStyle,
    },
    {
        uniqueName: 'method',
        label: 'method',
        name: new Map<Locale, string>([[Locale.en_US, 'method'], [Locale.ru_RU, 'метод']]),
        style: typeStyle,
    },
    {
        uniqueName: 'function',
        label: 'function',
        name: new Map<Locale, string>([[Locale.en_US, 'function'], [Locale.ru_RU, 'функция']]),
        style: typeStyle,
    },
    {
        uniqueName: 'interface',
        label: 'interface',
        name: new Map<Locale, string>([[Locale.en_US, 'interface'], [Locale.ru_RU, 'интерфейс']]),
        style: typeStyle,
    },
    {
        uniqueName: 'type',
        label: 'type',
        name: new Map<Locale, string>([[Locale.en_US, 'type'], [Locale.ru_RU, 'тип']]),
        style: typeStyle,
    },
    {
        uniqueName: 'enum',
        label: 'enum',
        name: new Map<Locale, string>([[Locale.en_US, 'enum'], [Locale.ru_RU, 'перечисление']]),
        style: typeStyle,
    },
    {
        uniqueName: 'decorator',
        label: 'decorator',
        name: new Map<Locale, string>([[Locale.en_US, 'decorator'], [Locale.ru_RU, 'декоратор']]),
        style: typeStyle,
    },
    {
        uniqueName: 'protected',
        label: 'protected',
        name: new Map<Locale, string>([[Locale.en_US, 'protected'], [Locale.ru_RU, 'защищенный']]),
        style: modifiersStyle,
    },
    {
        uniqueName: 'public',
        label: 'public',
        name: new Map<Locale, string>([[Locale.en_US, 'public'], [Locale.ru_RU, 'публичный']]),
        style: modifiersStyle,
    },
];

export default tags;
