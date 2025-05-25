import type { Connection, WorkflowEdge, WorkflowNode } from '../types';

export function getRelevantEdgesByEdge<E extends WorkflowEdge>(
  edges: E[],
  currentEdge: E | Connection,
): E[] {
  return edges.filter(
    (e) =>
      e.source === currentEdge.source ||
      e.target === currentEdge.target ||
      e.sourceHandle === currentEdge.sourceHandle ||
      e.targetHandle === currentEdge.targetHandle,
  );
}

export function getRelevantEdgesByNode<N extends WorkflowNode, E extends WorkflowEdge>(
  edges: E[],
  node: N,
): E[] {
  return edges.filter((e) => e.source === node.id || e.target === node.id);
}
