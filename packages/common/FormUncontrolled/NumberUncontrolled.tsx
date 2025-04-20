import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { Number } from '../Form';
import type { NumberUncontrolledComponentType } from './FormUncontrolled.types';

const NumberUncontrolled: NumberUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <Number
          {...props}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          isError={Boolean(error)}
          errorMessage={error?.message || '　'}
        />
      )}
    />
  );
});

NumberUncontrolled.displayName = 'NumberUncontrolled';
export default NumberUncontrolled;
