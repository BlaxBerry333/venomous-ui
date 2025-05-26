import { useCallback } from 'react';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowNodeUpdate<N extends WorkflowNode, E extends WorkflowEdge>() {
  const { updateNodeData } = useWorkflowInstance<N, E>();

  /**
   * 更新指定 Node.data
   */
  const updateSpecificNodeData = useCallback(
    (id: string, nodeData: Partial<N['data']>) => {
      updateNodeData(id, nodeData);
    },
    [updateNodeData],
  );

  /**
   * 更新指定 Node.data.formValue
   */
  const updateSpecificNodeFormValue = useCallback(
    (id: string, formValue: N['data']['formValue']) => {
      updateSpecificNodeData(id, { formValue });
    },
    [updateSpecificNodeData],
  );

  return {
    updateSpecificNodeData,
    updateSpecificNodeFormValue,
  };
}
