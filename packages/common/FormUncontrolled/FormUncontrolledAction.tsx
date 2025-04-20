import { useFormContext } from 'react-hook-form';
import { Button } from '../Button';
import { Flex } from '../Flex';
import type { FormUncontrolledActionProps } from './FormUncontrolled.types';

function FormUncontrolledAction({
  isSubmitting: isSubmittingProp,
  submitButtonText = 'Submit',
  cancelButtonText = 'Cancel',
}: FormUncontrolledActionProps) {
  const formInstance = useFormContext();

  if (!formInstance) {
    return null;
  }

  const { formState, reset } = formInstance;
  const { isValid, isSubmitting, defaultValues } = formState;

  return (
    <Flex row mt={'32px'}>
      <Button
        type="reset"
        text={cancelButtonText}
        isOutlined
        loading={isSubmittingProp || isSubmitting}
        onClick={() => reset(defaultValues)}
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
