import { useCallback, useRef } from 'react';

import { type OnNodeDrag, type WorkflowNode } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowInstance from './use-workflow-instance';
import useWorkflowNodeUpdate from './use-workflow-node-update';

export default function useWorkflowNodeMove<N extends WorkflowNode>() {
  const { setNodes } = useWorkflowInstance();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();
  const { updateNodeMovingAroundGroupNode } = useWorkflowNodeUpdate();

  const nodeDragStartPositionCache = useRef<N['position']>({ x: 0, y: 0 });

  /**
   * Node 移动开始的回调
   */
  const onNodeMoveStart: OnNodeDrag<N> = useCallback((_, node: N) => {
    nodeDragStartPositionCache.current = {
      x: node.position.x,
      y: node.position.y,
    };
  }, []);

  /**
   * Node 移动中的回调
   */
  const onNodeMoving: OnNodeDrag<N> = useCallback(
    (_, node: N) => {
      setNodes((nds) => nds.map((n) => (n.id === node.id ? { ...n, position: node.position } : n)));
    },
    [setNodes],
  );

  /**
   *  Node 移动结束的回调
   */
  const onNodeMoveStop: OnNodeDrag<N> = useCallback(
    (_, node) => {
      updateNodeMovingAroundGroupNode(node);

      const { x, y } = nodeDragStartPositionCache.current;
      if (!(x === node.position.x && y === node.position.y)) {
        updateActionsHistory(WorkflowAction.NodeMoved);
      }
    },
    [updateActionsHistory, updateNodeMovingAroundGroupNode],
  );

  return {
    onNodeMoveStart,
    onNodeMoveStop,
    onNodeMoving,
  };
}
