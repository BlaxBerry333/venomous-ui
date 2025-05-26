import { useCallback, type DragEventHandler } from 'react';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowNodeCreate<N extends WorkflowNode, E extends WorkflowEdge>() {
  const { getNodes, setNodes, screenToFlowPosition } = useWorkflowInstance<N, E>();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  /**
   * Node 被拖拽到画布上的回调
   */
  const onDragOver: DragEventHandler = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  /**
   * Node 被拖拽到画布后的回调
   */
  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const lastNode = _getLastNodeBySortIdNumber<N>(getNodes());
      const newNode = {
        id: (lastNode ? parseInt(lastNode.id) + 1 : 1).toString(),
        type: '',
        position: screenToFlowPosition({ x: e.clientX, y: e.clientY }),
        data: {
          isFocus: false,
          isInValid: false,
          isMultipleSourceHandler: false,
          isMultipleTargetHandler: false,
          isProtected: false,
          formValue: {},
        },
      } as N;
      setNodes((nds) => nds.concat(newNode));
      updateActionsHistory(WorkflowAction.NodeCreated);
    },
    [getNodes, setNodes, screenToFlowPosition, updateActionsHistory],
  );

  return {
    onDragOver,
    onDrop,
  };
}

function _getLastNodeBySortIdNumber<N extends WorkflowNode>(nodes: N[]): N | null {
  try {
    const reversedNodes = nodes.sort((a, b) => {
      const aId = parseInt(a.id, 10);
      const bId = parseInt(b.id, 10);
      return aId - bId;
    });
    return reversedNodes?.[0] || null;
  } catch {
    return null;
  }
}
