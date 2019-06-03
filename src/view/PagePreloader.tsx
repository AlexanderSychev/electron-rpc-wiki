import * as React from 'react';
import { style } from 'typestyle';

import Preloader from '@view/Preloader';

const imageClassName = style({
    width: '300px',
    height: '300px',
});

const PagePreloader: React.FunctionComponent = () => <Preloader imageClassName={imageClassName} />;

PagePreloader.displayName = `PagePreloader from "${__filename}"`;

export default PagePreloader;
