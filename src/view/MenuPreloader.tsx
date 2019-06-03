import * as React from 'react';
import { style } from 'typestyle';

import Preloader from '@view/Preloader';

const imageClassName = style({
    width: '100px',
    height: '100px',
});

const MenuPreloader: React.FunctionComponent = () => <Preloader imageClassName={imageClassName} />;

MenuPreloader.displayName = `MenuPreloader from "${__filename}"`;

export default MenuPreloader;
