import { useCallback } from 'react';

import type {
  WorkflowEdge,
  WorkflowElements,
  WorkflowNode,
} from '@packages/extra/workflow/_types/elements';
import useWorkflowInstance from './use-workflow-instance';

export default function useElements<N extends WorkflowNode, E extends WorkflowEdge>() {
  const { getNodes, getEdges, setNodes, setEdges } = useWorkflowInstance<N, E>();

  const getElements = useCallback(
    () => ({
      nodes: getNodes().map(({ id, type, position, data }) => ({
        id,
        type,
        position,
        data,
      })),
      edges: getEdges().map(({ id, type, source, target, sourceHandle, targetHandle }) => ({
        id,
        type,
        source,
        target,
        sourceHandle,
        targetHandle,
      })),
    }),
    [getNodes, getEdges],
  );

  const setElements = useCallback(
    ({ nodes, edges }: WorkflowElements<N, E>): void => {
      setNodes(nodes);
      setEdges(edges);
    },
    [setNodes, setEdges],
  );

  const resetElements = useCallback(() => {
    setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
    setEdges((eds) => eds.map((e) => ({ ...e, selected: false })));
  }, [setNodes, setEdges]);

  return {
    getElements,
    setElements,
    resetElements,
  };
}
