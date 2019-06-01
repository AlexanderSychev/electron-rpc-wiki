import { Locale } from '@context';

/** Locale select option singature */
export interface LocaleOption {
    /** Locale value */
    value: Locale;
    /** Locale value */
    label: string;
    /** Option icon URL */
    iconUrl: string;
}

/** Component behavior hook signature */
export interface Behavior {
    value: LocaleOption | undefined;
    options: LocaleOption[];
    getOptionValue(option: LocaleOption): string;
    getOptionLabel(option: LocaleOption): string;
    onChange(param?: LocaleOption | ReadonlyArray<LocaleOption> | null | undefined): void;
}
