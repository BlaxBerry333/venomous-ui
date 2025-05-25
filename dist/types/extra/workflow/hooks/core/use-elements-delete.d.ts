import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useElementsDelete<N extends WorkflowNode, E extends WorkflowEdge>(): {
    deleteEdge: (edgeId: E["id"]) => void;
    deleteSelectedElements: VoidFunction;
};
