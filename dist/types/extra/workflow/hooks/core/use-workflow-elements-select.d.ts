import type { onSelectionChange, WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowElementsSelect<N extends WorkflowNode, E extends WorkflowEdge>(): {
    onSelectionChange: onSelectionChange<N, E>;
};
