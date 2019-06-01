import * as React from 'react';
import Select from 'react-select';

import * as styles from './styles';
import useBehavior from './useBehavior';
import { VersionOption } from './types';

/** API version selector */
const VersionSelector: React.FunctionComponent = () => (
    <Select<VersionOption> {...useBehavior()} className={styles.root} isMulti={false} />
);

VersionSelector.displayName = `VersionSelector from "${__filename}"`;

export default VersionSelector;
