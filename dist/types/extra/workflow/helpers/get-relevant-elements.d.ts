import type { Connection, WorkflowEdge, WorkflowNode } from '../types';
export declare function getRelevantEdgesByEdge<E extends WorkflowEdge>(edges: E[], currentEdge: E | Connection): E[];
export declare function getRelevantEdgesByNode<N extends WorkflowNode, E extends WorkflowEdge>(edges: E[], node: N): E[];
