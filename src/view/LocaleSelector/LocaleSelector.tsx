import * as React from 'react';
import Select from 'react-select';

import * as styles from './styles';
import useBehavior from './useBehavior';
import Option from './LocaleSelectorOption';
import { LocaleOption } from './types';

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
            components={{ Option }}
        />
    );
};

LocaleSelector.displayName = `LocaleSelector from "${__filename}"`;

export default LocaleSelector;
