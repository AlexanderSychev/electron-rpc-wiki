import { Locale } from '@locale';
import { MenuItem } from './types';

const mapPackageItem = (packageName: string): MenuItem => ({
    name: new Map<Locale, string>([
        [Locale.en_US, `Package "${packageName}"`],
        [Locale.ru_RU, `Пакет "${packageName}"`],
    ]),
    to: `/packages/${packageName}`,
});

const mapPackageItems = (packageNames: string[]) => packageNames.map(mapPackageItem);

const menu: MenuItem[] = [
    {
        name: new Map<Locale, string>([[Locale.en_US, 'Home'], [Locale.ru_RU, 'Главная']]),
        to: '/',
        exact: true,
    },
    {
        name: new Map<Locale, string>([[Locale.en_US, 'Packages'], [Locale.ru_RU, 'Пакеты']]),
        to: '/packages',
        exact: true,
        subItems: mapPackageItems([
            'electron-rpc-types',
            'electron-rpc-async-queue',
            'electron-rpc-utils',
            'electron-rpc-client',
            'electron-rpc-client-services',
            'electron-rpc-server',
            'electron-rpc-server-controllers',
            'electron-rpc-common',
        ]),
    },
];

export default menu;
