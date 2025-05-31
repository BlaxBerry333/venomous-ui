import { setWorkflowCreatedNode } from '../hooks';
import type { WorkflowNode } from '../types';

export function generateNewNodeToStore<N extends WorkflowNode>({
  id = `${Date.now()}`,
  type,
  data,
  ...others
}: Partial<N>): void {
  setWorkflowCreatedNode({
    id,
    type,
    data: {
      isMultipleSourceHandler: data?.isMultipleSourceHandler || false,
      isMultipleTargetHandler: data?.isMultipleSourceHandler || false,
      isProtected: false,
      isInValid: false,
      isFocus: false,
      formValue: data?.formValue || null,
      ...data,
    },
    ...others,
  });
}
