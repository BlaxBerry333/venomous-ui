import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import { useReactFlow } from '@xyflow/react';

export default function useWorkflowInstance<N extends WorkflowNode, E extends WorkflowEdge>() {
  return useReactFlow<N, E>();
}
