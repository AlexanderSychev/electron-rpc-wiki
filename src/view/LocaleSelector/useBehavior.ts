import * as React from 'react';

import russia from '@icons/russia.svg';
import usa from '@icons/usa.svg';
import { AppContext, Locale } from '@context';
import { LocaleOption, Behavior } from './types';

/** Component's aggregated behaviour hook */
const useBehavior = (): Behavior => {
    const { locale, setLocale } = React.useContext(AppContext);
    const options: LocaleOption[] = React.useMemo(
        (): LocaleOption[] => [
            {
                value: Locale.en_US,
                label: 'English',
                iconUrl: usa,
            },
            {
                value: Locale.ru_RU,
                label: 'Русский',
                iconUrl: russia,
            },
        ],
        [],
    );
    const getOptionValue = React.useCallback(({ value }: LocaleOption): string => value, []);
    const getOptionLabel = React.useCallback(({ label }: LocaleOption): string => label, []);
    const onChange = React.useCallback(
        (param?: LocaleOption | ReadonlyArray<LocaleOption> | null | undefined): void => {
            if (param) {
                if (Array.isArray(param) && param.length > 0) {
                    setLocale(param[0].value);
                } else {
                    setLocale((param as LocaleOption).value);
                }
            }
        },
        [setLocale],
    );
    const value: LocaleOption | undefined = React.useMemo(() => options.find(option => option.value === locale), [
        locale,
    ]);
    return { value, options, getOptionValue, getOptionLabel, onChange };
};

export default useBehavior;
