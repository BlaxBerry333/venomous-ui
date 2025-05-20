import {
  getOutgoers as XYFlowGetOutgoers,
  type Connection as XYFlowConnection,
  type IsValidConnection as XYFlowIsValidConnection,
} from '@xyflow/react';
import { useCallback } from 'react';

import type {
  WorkflowEdge,
  WorkflowElements,
  WorkflowNode,
} from '@packages/extra/workflow/_types/elements';
import useElements from './use-elements';

export default function useEdgeConnection<N extends WorkflowNode, E extends WorkflowEdge>() {
  const { getElements } = useElements<N, E>();

  const isValidConnection: XYFlowIsValidConnection = useCallback(
    (connection) => {
      return _preventCycle(getElements(), connection as XYFlowConnection);
    },
    [getElements],
  );

  return {
    isValidConnection,
  };
}

function _preventCycle<N extends WorkflowNode, E extends WorkflowEdge>(
  { nodes, edges }: WorkflowElements<N, E>,
  connection: XYFlowConnection,
) {
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
