import { Locale } from '@context';

const dictionary = {
    VERSION: new Map<Locale, string>([[Locale.en_US, 'Version'], [Locale.ru_RU, 'Версия']]),
    PAGE_404_TITLE: new Map<Locale, string>([[Locale.en_US, 'Page not found'], [Locale.ru_RU, 'Страница не найдена']]),
    PAGE_404_MESSAGE: new Map<Locale, string>([
        [Locale.en_US, 'Page was deleted or not created yet'],
        [Locale.ru_RU, 'Страница была удалена или еще не создана'],
    ]),
    UNKNOWN_ERROR_TITLE: new Map<Locale, string>([
        [Locale.en_US, 'Unknown error'],
        [Locale.ru_RU, 'Неизвестная ошибка'],
    ]),
    UNKNOWN_ERROR_MESSAGE: new Map<Locale, string>([
        [Locale.en_US, 'Unknown error was thrown by page loading'],
        [Locale.ru_RU, 'При загрузке страницы произошла неизвестная ошибка'],
    ]),
};

export default dictionary;
