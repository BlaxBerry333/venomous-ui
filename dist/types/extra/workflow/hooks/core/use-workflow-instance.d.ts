import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowInstance<N extends WorkflowNode, E extends WorkflowEdge>(): import("@xyflow/react").ReactFlowInstance<N, E>;
