import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';

import { SelectInput, type OptionType } from '../Form';
import type { SelectInputUncontrolledComponentType } from './index.types';

const DEFAULT_OPTIONS: OptionType[] = [];

const SelectInputUncontrolled: SelectInputUncontrolledComponentType = memo(
  ({ name, options = DEFAULT_OPTIONS, ...props }) => {
    const { control } = useFormContext();

    return (
      <RHFController
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
          <SelectInput
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

SelectInputUncontrolled.displayName = 'SelectInputUncontrolled';
export default SelectInputUncontrolled;
