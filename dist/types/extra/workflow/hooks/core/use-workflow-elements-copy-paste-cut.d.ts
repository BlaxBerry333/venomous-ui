import { type WorkflowEdge, type WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowElementsCopyPasteCut<N extends WorkflowNode, E extends WorkflowEdge>(): {
    copySelectedElements: () => void;
    pastCopiedElement: () => void;
    cutSelectedElements: () => void;
};
