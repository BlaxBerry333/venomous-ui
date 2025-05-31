import { useCallback, type DragEventHandler } from 'react';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import {
  clearWorkflowCreatedNode,
  getWorkflowCreatedNode,
} from '../stores/workflow-created-node-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowNodeCreate<N extends WorkflowNode, E extends WorkflowEdge>() {
  const configs = useWorkflowConfigs();
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
      const registeredNode = getWorkflowCreatedNode();
      clearWorkflowCreatedNode();
      if (!registeredNode) {
        return;
      }

      const newNode = {
        ...registeredNode,
        id: `${Date.now()}`,
        selected: true,
        position: screenToFlowPosition(
          { x: e.clientX, y: e.clientY },
          {
            snapToGrid: configs.canvas.isGridLayout,
          },
        ),
      } as N;

      setNodes((nds) => nds.concat(newNode));
      updateActionsHistory(WorkflowAction.NodeCreated);
    },
    [getNodes, setNodes, screenToFlowPosition, configs, updateActionsHistory],
  );

  return {
    onDragOver,
    onDrop,
  };
}
