import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { Radios, type RadiosProps } from '../Form';
import type { RadiosUncontrolledComponentType } from './FormUncontrolled.types';

const DEFAULT_OPTIONS: RadiosProps['options'] = [];

const RadiosUncontrolled: RadiosUncontrolledComponentType = memo(
  ({ name, options = DEFAULT_OPTIONS, ...props }) => {
    const { control } = useFormContext();

    return (
      <RHFController
        control={control}
        name={name}
        render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
          <Radios
            {...props}
            name={name}
            options={options}
            value={value}
            onChange={(option) => onChange(option.value)}
            inputRef={ref}
            isError={Boolean(error)}
          />
        )}
      />
    );
  },
);

RadiosUncontrolled.displayName = 'RadiosUncontrolled';
export default RadiosUncontrolled;
