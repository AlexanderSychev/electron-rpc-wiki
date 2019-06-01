import * as React from 'react';

import { Locale, ContextData, LocalStorageManager } from '@context';

const useBehavior = (): ContextData => {
    const [locale, setLocaleState] = React.useState<Locale>(LocalStorageManager.getInstance().getLocale);
    const [version, setVersionState] = React.useState<string>(LocalStorageManager.getInstance().getVersion);
    const [isMenuExpanded, setIsMenuExpanded] = React.useState<boolean>(false);
    const setLocale = React.useCallback(
        (locale: Locale) => {
            setLocaleState(locale);
            LocalStorageManager.getInstance().setLocale(locale);
        },
        [setLocaleState, LocalStorageManager.getInstance().setLocale],
    );
    const setVersion = React.useCallback(
        (version: string) => {
            setVersionState(version);
            LocalStorageManager.getInstance().setVersion(version);
        },
        [setVersionState, LocalStorageManager.getInstance().setVersion],
    );
    const value: ContextData = React.useMemo(
        () => ({ isMenuExpanded, locale, version, setIsMenuExpanded, setLocale, setVersion }),
        [locale, version, isMenuExpanded, setIsMenuExpanded, setLocale, setVersion],
    );
    return value;
};

export default useBehavior;
