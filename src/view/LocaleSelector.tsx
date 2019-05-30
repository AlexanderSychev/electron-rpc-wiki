import * as React from 'react';
import Select, { components } from 'react-select';
import { style } from 'typestyle';

import { LocaleContext, Locale } from '@locale';
import russia from '@icons/russia.svg';
import usa from '@icons/usa.svg';

const styles = {
    root: style({
        width: '125px',
    }),
    option: style({
        width: 'inherit',
        height: '36px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2px 8px',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#f4f4f4',
            },
        },
    }),
    icon: style({
        width: '36px',
        height: '36px',
    }),
};

/** Locale select option singature */
interface LocaleOption {
    /** Locale value */
    value: Locale;
    /** Locale value */
    label: string;
    /** Option icon URL */
    iconUrl: string;
}

interface Behavior {
    value: LocaleOption | undefined;
    options: LocaleOption[];
    getOptionValue(option: LocaleOption): string;
    getOptionLabel(option: LocaleOption): string;
    onChange(param?: LocaleOption | ReadonlyArray<LocaleOption> | null | undefined): void;
}

const useBehavior = (): Behavior => {
    const { locale, setLocale } = React.useContext(LocaleContext);
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

const LocaleSelectorOption: typeof components['Option'] = ({ innerProps, innerRef, data }) => {
    return (
        <div className={styles.option} ref={innerRef} {...innerProps}>
            <img className={styles.icon} src={data && data.iconUrl} />
            <span>{data && data.label}</span>
        </div>
    );
};

const LocaleSelector: React.FunctionComponent = () => {
    const { value, options, getOptionLabel, getOptionValue, onChange } = useBehavior();
    return (
        <Select<LocaleOption>
            className={styles.root}
            value={value}
            onChange={onChange}
            isMulti={false}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            options={options}
            components={{
                Option: LocaleSelectorOption,
            }}
        />
    );
};

LocaleSelector.displayName = `LocaleSelector from "${__dirname}"`;

export default LocaleSelector;
