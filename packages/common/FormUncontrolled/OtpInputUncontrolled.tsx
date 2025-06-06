import { memo } from 'react';
import { Controller as RHFController, useFormContext } from 'react-hook-form';
import { OtpInput } from '../Form';
import type { OtpInputUncontrolledComponentType } from './index.types';

const OtpInputUncontrolled: OtpInputUncontrolledComponentType = memo(({ name, ...props }) => {
  const { control } = useFormContext();

  return (
    <RHFController
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <OtpInput
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

OtpInputUncontrolled.displayName = 'OtpInputUncontrolled';
export default OtpInputUncontrolled;
