import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import { useMemo } from 'react';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowElementsSelected<
  N extends WorkflowNode,
  E extends WorkflowEdge,
>() {
  const { getNodes, getEdges } = useWorkflowInstance<N, E>();

  const selectedElements = useMemo(() => {
    const nodes = getNodes();
    const edges = getEdges();
    return {
      nodes: nodes.filter((node) => node.selected),
      edges: edges.filter((edge) => edge.selected),
    };
  }, [getNodes, getEdges]);

  return selectedElements;
}
