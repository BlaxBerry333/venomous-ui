import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { Password } from '../Form';
import type { PasswordUncontrolledComponentType } from './index.types';

const PasswordUncontrolled: PasswordUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <Password
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

PasswordUncontrolled.displayName = 'PasswordUncontrolled';
export default PasswordUncontrolled;
