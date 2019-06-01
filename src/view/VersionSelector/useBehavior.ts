import * as React from 'react';

import { dictionary } from '@data';
import { AppContext, Versions } from '@context';
import { VersionOption, Behavior } from './types';

/** Component's aggregated behaviour hook */
const useBehavior = (): Behavior => {
    const { locale, version, setVersion } = React.useContext(AppContext);
    const labelPrefix = React.useMemo(() => dictionary.VERSION.get(locale), [locale]);
    const options: VersionOption[] = React.useMemo(
        (): VersionOption[] =>
            Versions.map(value => ({
                value,
                label: `${labelPrefix} ${value}`,
            })),
        [labelPrefix],
    );
    const getOptionValue = React.useCallback(({ value }: VersionOption): string => value, []);
    const getOptionLabel = React.useCallback(({ label }: VersionOption): string => label, []);
    const onChange = React.useCallback(
        (param?: VersionOption | ReadonlyArray<VersionOption> | null | undefined): void => {
            if (param) {
                if (Array.isArray(param) && param.length > 0) {
                    setVersion(param[0].value);
                } else {
                    setVersion((param as VersionOption).value);
                }
            }
        },
        [setVersion],
    );
    const value: VersionOption | undefined = React.useMemo(() => options.find(option => option.value === version), [
        version,
        options,
    ]);
    return { value, options, getOptionValue, getOptionLabel, onChange };
};

export default useBehavior;
