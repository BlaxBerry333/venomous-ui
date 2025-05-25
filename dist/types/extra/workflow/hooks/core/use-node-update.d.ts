import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useNodeUpdate<N extends WorkflowNode, E extends WorkflowEdge>(): {
    updateSpecificNodeData: (id: string, nodeData: Partial<N["data"]>) => void;
    updateSpecificNodeFormValue: (id: string, formValue: N["data"]["formValue"]) => void;
};
