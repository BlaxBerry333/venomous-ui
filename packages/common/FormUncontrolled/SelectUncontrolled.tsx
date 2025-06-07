import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';

import { Select, type OptionType } from '../Form';
import type { SelectUncontrolledComponentType } from './index.types';

const DEFAULT_OPTIONS: OptionType[] = [];

const SelectUncontrolled: SelectUncontrolledComponentType = memo(
  ({ name, options = DEFAULT_OPTIONS, ...props }) => {
    const { control } = useFormContext();

    return (
      <RHFController
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <Select
            {...props}
            options={options}
            value={value}
            onChange={(option) => onChange(option?.value)}
            onBlur={onBlur}
            inputRef={ref}
            isError={Boolean(error)}
            errorMessage={error?.message || '　'}
          />
        )}
      />
    );
  },
);

SelectUncontrolled.displayName = 'SelectUncontrolled';
export default SelectUncontrolled;
