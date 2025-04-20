import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { Input } from '../Form';
import type { InputUncontrolledComponentType } from './FormUncontrolled.types';

const InputUncontrolled: InputUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <Input
          {...props}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          isError={Boolean(error)}
          errorMessage={error?.message || ''}
        />
      )}
    />
  );
});

InputUncontrolled.displayName = 'InputUncontrolled';
export default InputUncontrolled;
