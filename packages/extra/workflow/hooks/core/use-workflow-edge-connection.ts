import { addEdge as XYFlowAddEdge, getOutgoers as XYFlowGetOutgoers } from '@xyflow/react';
import { isEqual } from 'es-toolkit';
import { useCallback, useRef } from 'react';

import { getRelevantEdgesByEdge } from '@packages/extra/workflow/helpers';
import type {
  Connection,
  IsValidConnection,
  OnConnect,
  OnConnectEnd,
  WorkflowEdge,
  WorkflowElements,
  WorkflowNode,
} from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowEdgeConnection<
  N extends WorkflowNode,
  E extends WorkflowEdge,
>() {
  const { getNodes, getEdges, setEdges } = useWorkflowInstance<N, E>();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  const cachedValidConnectionRef = useRef<{ connection: Connection; result: boolean }>(null);

  /**
   * 自定义连接前校验
   */
  const isValidConnection: IsValidConnection = useCallback(
    (connection) => {
      const cache = cachedValidConnectionRef.current;
      if (cache && isEqual(cache.connection, connection)) {
        return cache.result;
      }

      const nodes = getNodes();
      const edges = getEdges();
      const currentConnection = connection;
      const relevantEdges = getRelevantEdgesByEdge(edges, currentConnection);
      const isNoteCycling = _preventCyclingConnection(currentConnection, { nodes, edges });
      const isNotDuplicate = !_getAlreadyConnectedEdge(currentConnection, relevantEdges);

      const validationResult: boolean = isNoteCycling && isNotDuplicate;

      cachedValidConnectionRef.current = {
        connection: connection,
        result: validationResult,
      };

      return validationResult;
    },
    [getNodes, getEdges],
  );

  /**
   * 连接时的回调
   */
  const onConnect: OnConnect = useCallback(
    (connection) => {
      const alreadyConnectedEdges = getEdges().filter(({ source, target, sourceHandle }) => {
        const isDifferentTarget = target !== connection.target;
        const isSameSource = source === connection.source;
        const isSameSourceButDifferentTarget = isSameSource && isDifferentTarget;
        if (!connection.sourceHandle) {
          return isSameSourceButDifferentTarget;
        }
        const isSameSourceHandle = sourceHandle === connection.sourceHandle;
        return isSameSourceButDifferentTarget && isSameSourceHandle;
      });
      if (!alreadyConnectedEdges.length) {
        setEdges((els) => XYFlowAddEdge<E>(connection, els));
        updateActionsHistory(WorkflowAction.Connected);
        return;
      }
      if (!connection.sourceHandle) {
        setEdges((eds) =>
          eds.filter(
            (e) =>
              e.source !== alreadyConnectedEdges[0].source ||
              e.target !== alreadyConnectedEdges[0].target,
          ),
        );
        updateActionsHistory(WorkflowAction.ReConnected);
        return;
      }
      if (connection.sourceHandle) {
        setEdges((eds) => {
          alreadyConnectedEdges.reduce((_, edge) => {
            eds = eds.filter((e) => e.id !== edge.id);
            return eds;
          }, eds);
          return eds;
        });
        updateActionsHistory(WorkflowAction.ReConnected);
        return;
      }
    },
    [setEdges, updateActionsHistory],
  );

  /**
   * 连接结束的回调
   */
  const onConnectEnd: OnConnectEnd = useCallback((_, connectionState) => {
    // 中途结束了连接操作没有连接到 Node、或者因为 isValidConnection 验证不通过无法成功连接
    if (!connectionState.isValid) {
      return;
    }

    if (cachedValidConnectionRef.current) {
      cachedValidConnectionRef.current = {
        ...cachedValidConnectionRef.current,
        result: true,
      };
    }
  }, []);

  return {
    isValidConnection,
    onConnect,
    onConnectEnd,
  };
}

/**
 * 检查是否会没有形成循环
 */
function _preventCyclingConnection<N extends WorkflowNode, E extends WorkflowEdge>(
  connection: Connection,
  { nodes, edges }: WorkflowElements<N, E>,
): boolean {
  function _hasCycle(node: N | undefined, visited = new Set()) {
    if (!node) return false;
    if (visited.has(node.id)) return false;
    visited.add(node?.id);
    for (const outgoer of XYFlowGetOutgoers(node, nodes, edges)) {
      if (outgoer.id === connection.source) return true;
      if (_hasCycle(outgoer, visited)) return true;
    }
  }
  const target = nodes.find((node) => node.id === connection.target);
  if (target?.id === connection.source) return false;
  return !_hasCycle(target);
}

/**
 * 获取重复连接的 Edge
 */
function _getAlreadyConnectedEdge<E extends WorkflowEdge>(
  connection: Connection,
  connectedEdges: E[],
): E | null {
  const { source, sourceHandle, target, targetHandle } = connection;
  const alreadyExistedEdge = connectedEdges.find((e) => {
    const isFromOne: boolean = !!source && !sourceHandle;
    const isFromOneOfMany: boolean = !!source && !!sourceHandle;
    const isToOne: boolean = !!target && !targetHandle;
    const isToOneOfMany: boolean = !!target && !!targetHandle;
    // one → one
    if (isFromOne && isToOne) {
      return e.source === connection.source && e.target === connection.target;
    }
    // one → many.one
    if (isFromOne && isToOneOfMany) {
      return e.source === connection.source && e.targetHandle === connection.targetHandle;
    }
    //  many.one → one
    if (isFromOneOfMany && isToOne) {
      return e.sourceHandle === connection.sourceHandle && e.target === connection.target;
    }
    //  many.one → many.one
    if (isFromOneOfMany && isToOneOfMany) {
      return (
        e.sourceHandle === connection.sourceHandle && e.targetHandle === connection.targetHandle
      );
    }
    return false;
  });
  return alreadyExistedEdge ?? null;
}
