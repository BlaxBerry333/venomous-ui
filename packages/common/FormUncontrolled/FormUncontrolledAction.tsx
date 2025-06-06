import { useFormContext } from 'react-hook-form';
import { Button } from '../Button';
import { Flex } from '../Flex';
import type { FormUncontrolledActionProps } from './index.types';

function FormUncontrolledAction({
  isSubmitting: isSubmittingProp,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
}: FormUncontrolledActionProps) {
  const formInstance = useFormContext();

  if (!formInstance) {
    return null;
  }

  const { formState, reset, trigger } = formInstance;
  const { isValid, isSubmitting, defaultValues } = formState;

  return (
    <Flex row mt={'32px'}>
      <Button
        type="reset"
        text={cancelButtonText}
        isOutlined
        disabled={isSubmittingProp || isSubmitting}
        onClick={() => {
          reset(defaultValues);
          void trigger();
        }}
      />
      <Button
        type="submit"
        text={submitButtonText}
        loading={isSubmittingProp || isSubmitting}
        disabled={!isValid}
      />
    </Flex>
  );
}

FormUncontrolledAction.displayName = 'FormUncontrolledAction';
export default FormUncontrolledAction;
