import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { NumberInput } from '../Form';
import type { NumberInputUncontrolledComponentType } from './index.types';

const NumberInputUncontrolled: NumberInputUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <NumberInput
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

NumberInputUncontrolled.displayName = 'NumberInputUncontrolled';
export default NumberInputUncontrolled;
