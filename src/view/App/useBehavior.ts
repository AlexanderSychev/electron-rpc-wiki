import * as React from 'react';

import { Locale, ContextData, LocalStorageManager } from '@context';
import { Sitemap, SitemapLoader } from '@data';

export interface Behavior {
    context: ContextData;
    isSitemapLoading: boolean;
    sitemap: Sitemap;
}

const useBehavior = (): Behavior => {
    const [locale, setLocaleState] = React.useState<Locale>(LocalStorageManager.getInstance().getLocale);
    const [version, setVersionState] = React.useState<string>(LocalStorageManager.getInstance().getVersion);
    const [isMenuExpanded, setIsMenuExpanded] = React.useState<boolean>(true);
    const [isSitemapLoading, setIsSitemapLoading] = React.useState<boolean>(true);
    const [sitemap, setSitemap] = React.useState<Sitemap>({});
    React.useEffect(() => {
        SitemapLoader.getInstance()
            .load()
            .then(sitemap => {
                setSitemap(sitemap);
                setIsSitemapLoading(false);
            });
    }, []);
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
    const context: ContextData = React.useMemo(
        () => ({ isMenuExpanded, locale, version, setIsMenuExpanded, setLocale, setVersion }),
        [locale, version, isMenuExpanded, setIsMenuExpanded, setLocale, setVersion],
    );
    const result: Behavior = React.useMemo(() => ({ context, isSitemapLoading, sitemap }), [
        context,
        isSitemapLoading,
        sitemap,
    ]);
    return result;
};

export default useBehavior;
