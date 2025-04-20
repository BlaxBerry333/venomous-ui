import MuiBox from '@mui/material/Box';
import {
  FormProvider as RHFFormProvider,
  type FieldValues as RHFFieldValues,
} from 'react-hook-form';

import { memo, useEffect } from 'react';
import type { FormUncontrolledProps } from './FormUncontrolled.types';

function FormUncontrolled<T extends RHFFieldValues>({
  children,
  formInstance,
  onSubmit,
}: FormUncontrolledProps<T>) {
  const { handleSubmit, trigger } = formInstance;

  useEffect(() => {
    void trigger();
  }, [trigger]);

  if (!formInstance) {
    return null;
  }

  return (
    <RHFFormProvider {...formInstance}>
      <MuiBox component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit) as VoidFunction}>
        {children}
      </MuiBox>
    </RHFFormProvider>
  );
}

export default memo(FormUncontrolled) as typeof FormUncontrolled;
