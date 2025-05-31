import { useCallback } from 'react';

import type { onSelectionChange, WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import useWorkflowSelectedElements from '../stores/workflow-selected-elements-store';

export default function useWorkflowElementsSelect<
  N extends WorkflowNode,
  E extends WorkflowEdge,
>() {
  const { setNodes, setEdges } = useWorkflowSelectedElements();

  /**
   * 画布上的 Nodes、Edges 选中状态 selected 切换时的回调
   * ( 单个点击、command复数点击、shift复数选中、点击画布空白处 )
   */
  const onSelectionChange: onSelectionChange<N, E> = useCallback(
    ({ nodes, edges }) => {
      setNodes(nodes);
      setEdges(edges);
    },
    [setNodes, setEdges],
  );

  return {
    onSelectionChange,
  };
}
