import { reconnectEdge as XYFlowReconnectEdge, type OnReconnect } from '@xyflow/react';
import { useCallback, useRef } from 'react';

import type {
  OnReconnectEnd,
  OnReconnectStart,
  WorkflowEdge,
  WorkflowNode,
} from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useEdgeReConnection<N extends WorkflowNode, E extends WorkflowEdge>() {
  const { setEdges } = useWorkflowInstance<N, E>();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  const edgeReconnectSuccessfulRef = useRef(true);

  /**
   * 重新连接开始的回调
   */
  const onReconnectStart: OnReconnectStart = useCallback(() => {
    edgeReconnectSuccessfulRef.current = false;
  }, []);

  /**
   * 重新连接成功的回调
   */
  const onReconnect: OnReconnect = useCallback((oldEdge, newConnection) => {
    edgeReconnectSuccessfulRef.current = true;
    setEdges((els) => XYFlowReconnectEdge(oldEdge as E, newConnection, els));
  }, []);

  /**
   * 重新连接结束的回调
   */
  const onReconnectEnd: OnReconnectEnd = useCallback(
    (_, edge) => {
      if (!edgeReconnectSuccessfulRef.current) {
        setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        updateActionsHistory(WorkflowAction.ReConnected);
      }
      edgeReconnectSuccessfulRef.current = true;
    },
    [updateActionsHistory],
  );

  return {
    onReconnect,
    onReconnectStart,
    onReconnectEnd,
  };
}
