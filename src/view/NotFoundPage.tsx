import * as React from 'react';
import { style } from 'typestyle';

import { AppContext } from '@context';
import notFoundPage from '@data/notFoundPage';

const styles = {
    wrap: style({
        width: '100%',
        height: 'calc(100% - 48px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    root: style({
        textAlign: 'center',
    }),
};

/** Standard 404 page */
const NotFoundPage: React.FunctionComponent = () => {
    const { locale } = React.useContext(AppContext);
    return (
        <React.Fragment>
            <div className={styles.wrap}>
                <section className={styles.root}>
                    <h1>{notFoundPage.title.get(locale)}</h1>
                    <p>{notFoundPage.message.get(locale)}</p>
                </section>
            </div>
        </React.Fragment>
    );
};

NotFoundPage.displayName = `NotFoundPage from "${__filename}"`;

export default NotFoundPage;
