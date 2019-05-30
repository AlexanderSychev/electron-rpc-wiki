import { Locale } from '@locale';

const notFoundPage = {
    title: new Map<Locale, string>([[Locale.en_US, 'Page not found'], [Locale.ru_RU, 'Страница не найдена']]),
    message: new Map<Locale, string>([
        [Locale.en_US, 'Page was deleted or not created yet'],
        [Locale.ru_RU, 'Страница была удалена или еще не создана'],
    ]),
};

export default notFoundPage;
