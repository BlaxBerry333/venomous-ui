import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowElementsSelected<N extends WorkflowNode, E extends WorkflowEdge>(): {
    nodes: N[];
    edges: E[];
};
