import autobind from 'autobind-decorator';

import { Locale, Versions } from './types';

export default class LocalStorageManager {
    private static readonly LOCALE_KEY: string = 'locale';

    private static readonly VERSION_KEY: string = 'version';

    private static instance: LocalStorageManager | null = null;

    private constructor() {} // Restrict direct instance creation

    public static getInstance(): LocalStorageManager {
        if (!LocalStorageManager.instance) {
            LocalStorageManager.instance = new LocalStorageManager();
        }
        return LocalStorageManager.instance;
    }

    private static isAvailableLocale(locale: string): boolean {
        return Object.keys(Locale).some(key => Locale[<any>key] === locale);
    }

    private static isAvailableVersion(version: string): boolean {
        return Versions.includes(version);
    }

    @autobind
    public getLocale(): Locale {
        return this.getItem<Locale>(
            LocalStorageManager.LOCALE_KEY,
            <Locale>navigator.language,
            Locale.en_US,
            LocalStorageManager.isAvailableLocale,
        );
    }

    @autobind
    public setLocale(locale: Locale): void {
        this.setItem(LocalStorageManager.LOCALE_KEY, locale);
    }

    @autobind
    public getVersion(): string {
        return this.getItem(
            LocalStorageManager.VERSION_KEY,
            Versions[0],
            Versions[0],
            LocalStorageManager.isAvailableVersion,
        );
    }

    @autobind
    public setVersion(version: string): void {
        this.setItem(LocalStorageManager.VERSION_KEY, version);
    }

    private getItem<I extends string = string>(
        key: string,
        initialValue: I,
        defaultValue: I,
        isAvailable: (value: I) => boolean = () => true,
    ): I {
        let value: I | null = <I | null>localStorage.getItem(key);
        if (!value) {
            value = isAvailable(initialValue) ? initialValue : defaultValue;
            localStorage.setItem(key, value);
        } else if (!isAvailable(value)) {
            value = defaultValue;
            localStorage.setItem(key, value);
        }
        return value;
    }

    private setItem<I extends string = string>(key: string, value: I): void {
        localStorage.setItem(key, value);
    }
}
