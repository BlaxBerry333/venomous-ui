import { useCallback, useRef } from 'react';

import type { OnNodeDrag, WorkflowNode } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';

export default function useWorkflowNodeMove<N extends WorkflowNode>() {
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  const nodeDragStartPosition = useRef<N['position']>({ x: 0, y: 0 });

  /**
   * Node 移动开始的回调
   */
  const onNodeMoveStart: OnNodeDrag<N> = useCallback((_, node) => {
    nodeDragStartPosition.current = {
      x: node.position.x,
      y: node.position.y,
    };
  }, []);

  /**
   *  Node 移动结束的回调
   */
  const onNodeMoveStop: OnNodeDrag<N> = useCallback(
    (_, node) => {
      const { x, y } = nodeDragStartPosition.current;
      if (!(x === node.position.x && y === node.position.y)) {
        if (x !== 0 && y !== 0) {
          updateActionsHistory(WorkflowAction.NodeMoved);
        }
      }
    },
    [updateActionsHistory],
  );

  return {
    onNodeMoveStart,
    onNodeMoveStop,
  };
}
