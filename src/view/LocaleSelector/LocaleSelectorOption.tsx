import * as React from 'react';
import { components } from 'react-select';

import * as styles from './styles';

/** Custom select option for "LocaleSelector" */
const LocaleSelectorOption: typeof components['Option'] = ({ innerProps, innerRef, data }) => {
    return (
        <div className={styles.option} ref={innerRef} {...innerProps}>
            <img className={styles.icon} src={data && data.iconUrl} />
            <span>{data && data.label}</span>
        </div>
    );
};

LocaleSelectorOption.displayName = `LocaleSelectorOption from "${__filename}"`;

export default LocaleSelectorOption;
